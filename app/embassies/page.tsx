"use client";

import { MainLayout } from "@/components/MainLayout";
import { useTranslation } from "@/hooks/useTranslation";

export default function EmbassiesPage() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {t("embassies")}
      </h1>
      {/* Add embassies page content here */}
    </MainLayout>
  );
}
