"use client";

import { MainLayout } from "@/components/MainLayout";
import { useTranslation } from "@/hooks/useTranslation";

export default function CitizensPage() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {t("citizens")}
      </h1>
      {/* Add citizens page content here */}
    </MainLayout>
  );
}
