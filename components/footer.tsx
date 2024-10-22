import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'
import { TranslationKey } from '@/lib/translations'

interface FooterProps {
  t: (key: TranslationKey) => string;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-sm font-semibold text-gray-800 dark:text-white">{t('ministryName')}</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400">{t('systemFullName')}</p>
        </div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li><Link href="/privacy-policy" className="text-xs text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">{t('privacyPolicy')}</Link></li>
            <li><Link href="/terms-of-service" className="text-xs text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">{t('termsOfService')}</Link></li>
            <li><Link href="/contact-us" className="text-xs text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">{t('contactUs')}</Link></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
            <Instagram className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

