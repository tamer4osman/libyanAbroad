import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, Users, Building2, Globe, LogOut } from 'lucide-react'
import { TranslationKey, Language } from '@/lib/translations'

interface SidebarProps {
  t: (key: TranslationKey) => string;
  language: Language;
}

export const Sidebar: React.FC<SidebarProps> = ({ t, language }) => {
  const isRTL = language === 'ar';

  return (
    <div className="h-full bg-green-600 dark:bg-green-800 text-white w-64">
      <div className="flex flex-col h-full">
        {/* Header Section */}
        <div className="p-6">
          <h1 className="text-2xl font-bold">{t('systemName')}</h1>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 px-4">
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard" passHref>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-white hover:text-green-200 hover:bg-green-700"
                >
                  <Home className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('dashboard')}
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/citizens" passHref>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-white hover:text-green-200 hover:bg-green-700"
                >
                  <Users className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('citizens')}
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/embassies" passHref>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-white hover:text-green-200 hover:bg-green-700"
                >
                  <Building2 className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('embassies')}
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/countries" passHref>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-white hover:text-green-200 hover:bg-green-700"
                >
                  <Globe className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('countries')}
                </Button>
              </Link>
            </li>
          </ul>
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-green-500 dark:border-green-700 mt-auto">
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">John Doe</p>
              <p className="text-xs text-green-200 truncate">john.doe@example.com</p>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:text-green-200 hover:bg-green-700 flex-shrink-0"
            >
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Log out</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};