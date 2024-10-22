import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building2, Globe, Home } from "lucide-react";
import { TranslationKey } from "@/lib/translations";

interface StatisticsCardsProps {
  t: (key: TranslationKey) => string;
}

export const StatisticsCards: React.FC<StatisticsCardsProps> = ({ t }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-800 dark:text-white">
            {t("totalCitizens")}
          </CardTitle>
          <Users className="h-4 w-4 text-gray-600 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            15,231
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {t("registeredAbroad")}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-800 dark:text-white">
            {t("embassies")}
          </CardTitle>
          <Building2 className="h-4 w-4 text-gray-600 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            102
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {t("activeEmbassies")}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-800 dark:text-white">
            {t("countries")}
          </CardTitle>
          <Globe className="h-4 w-4 text-gray-600 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            78
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {t("withLibyanResidents")}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-800 dark:text-white">
            {t("recentEvents")}
          </CardTitle>
          <Home className="h-4 w-4 text-gray-600 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            523
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {t("inLastDays")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
