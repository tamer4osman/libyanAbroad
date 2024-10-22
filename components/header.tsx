import { Button } from "@/components/ui/button";
import { Menu, Languages, Sun, Moon } from "lucide-react";
import { TranslationKey } from "@/lib/translations";

interface HeaderProps {
  t: (key: TranslationKey) => string;
  toggleSidebar: () => void;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  theme: "light" | "dark";
}

export const Header: React.FC<HeaderProps> = ({
  t,
  toggleSidebar,
  toggleLanguage,
  toggleTheme,
  theme,
}) => {
  return (
    <div className="flex items-center justify-between py-4">
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        {t("dashboard")}
      </h2>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" onClick={toggleLanguage}>
          <Languages className="h-6 w-6" />
          <span className="sr-only">Toggle language</span>
        </Button>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === "light" ? (
            <Moon className="h-6 w-6" />
          ) : (
            <Sun className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </div>
  );
};