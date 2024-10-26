"use client";

import { useCallback, useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { getTranslation, TranslationKey } from "@/lib/translations";

export function useTranslation() {
  const { language } = useContext(LanguageContext);

  const t = useCallback(
    (key: TranslationKey): string => {
      return getTranslation(language, key);
    },
    [language]
  );

  return { t };
}
