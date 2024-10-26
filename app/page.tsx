"use client";

import { MainLayout } from "@/components/MainLayout";
import { StatisticsCards } from "@/components/statisticsCards";
import { useTranslation } from "@/hooks/useTranslation";

export default function DashboardPage() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {t("welcome")}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">{t("description")}</p>
      </div>

      <StatisticsCards t={t} />

      {/* Add more dashboard content here */}
    </MainLayout>
  );
}
