'use client'

import { useState, useCallback, useEffect } from 'react'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { Footer } from '@/components/footer'
import { StatisticsCards } from '@/components/statisticsCards'
import { Language, getTranslation, TranslationKey } from '@/lib/translations'

export default function DashboardPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [language, setLanguage] = useState<Language>('en')

  // Create a memoized translation function
  const t = useCallback((key: TranslationKey): string => {
    return getTranslation(language, key)
  }, [language])

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark')
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en')
  }

  useEffect(() => {
    // Update document direction for RTL support
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="flex flex-col h-screen">
        <div className={`
          fixed top-0 bottom-0 
          transition-all duration-300 ease-in-out z-30
          ${isSidebarOpen ? 'translate-x-0' : language === 'ar' ? 'translate-x-full' : '-translate-x-full'}
          ${language === 'ar' ? 'right-0' : 'left-0'}
          md:translate-x-0
        `}>
          <Sidebar t={t} language={language} />
        </div>

        <div className={`
          flex-1 flex flex-col
          transition-all duration-300 ease-in-out
          ${isSidebarOpen ? (language === 'ar' ? 'md:mr-64' : 'md:ml-64') : ''}
        `}>
          <div className="sticky top-0 z-20 bg-white dark:bg-gray-800 shadow-sm">
            <div className="container mx-auto">
              <Header 
                t={t}
                toggleSidebar={toggleSidebar}
                toggleLanguage={toggleLanguage}
                toggleTheme={toggleTheme}
                theme={theme}
              />
            </div>
          </div>

          <main className="flex-1 bg-gray-50 dark:bg-gray-900 overflow-auto">
            <div className="container mx-auto py-6">
              <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {t('welcome')}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('description')}
                </p>
              </div>
              
              <StatisticsCards t={t} />
              
              {/* Add more dashboard content here */}
            </div>
          </main>

          <div className="sticky bottom-0 z-20 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto">
              <Footer t={t} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}