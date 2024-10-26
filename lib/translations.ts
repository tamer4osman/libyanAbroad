export const translations = {
  en: {
    systemName: "LMFA System",
    dashboard: "Dashboard",
    citizens: "Citizens",
    embassies: "Embassies",
    countries: "Countries",
    welcome: "Welcome to the Libyan Residents Abroad System",
    description:
      "This system helps manage and track Libyan citizens residing abroad, including embassy information and important life events.",
    totalCitizens: "Total Citizens",
    registeredAbroad: "Registered abroad",
    activeEmbassies: "Active embassies",
    withLibyanResidents: "With Libyan residents",
    recentEvents: "Recent Events",
    inLastDays: "In the last 30 days",
    ministryName: "Libyan Ministry of Foreign Affairs",
    systemFullName: "Residents Abroad Management System",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    contactUs: "Contact Us",
    // New translations for the citizens page
    addCitizen: "Add Citizen",
    addNewCitizen: "Add New Citizen",
    civilRegistryId: "Civil Registry ID",
    nationalNumber: "National Number",
    firstNameArabic: "First Name (Arabic)",
    fatherNameArabic: "Father's Name (Arabic)",
    familyNameArabic: "Family Name (Arabic)",
    dateOfBirth: "Date of Birth",
    birthCity: "Birth City",
    bloodType: "Blood Type",
    selectBloodType: "Select Blood Type",
    name: "Name",
  },
  ar: {
    systemName: "نظام وزارة الخارجية الليبية",
    dashboard: "لوحة التحكم",
    citizens: "المواطنون",
    embassies: "السفارات",
    countries: "الدول",
    welcome: "مرحبًا بكم في نظام المقيمين الليبيين بالخارج",
    description:
      "يساعد هذا النظام في إدارة وتتبع المواطنين الليبيين المقيمين في الخارج، بما في ذلك معلومات السفارات والأحداث الحياتية الهامة.",
    totalCitizens: "إجمالي المواطنين",
    registeredAbroad: "مسجلين بالخارج",
    activeEmbassies: "سفارات نشطة",
    withLibyanResidents: "بها مقيمون ليبيون",
    recentEvents: "الأحداث الأخيرة",
    inLastDays: "في آخر 30 يومًا",
    ministryName: "وزارة الخارجية الليبية",
    systemFullName: "نظام إدارة المقيمين بالخارج",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    contactUs: "اتصل بنا",
    // New translations for the citizens page
    addCitizen: "إضافة مواطن",
    addNewCitizen: "إضافة مواطن جديد",
    civilRegistryId: "رقم القيد المدني",
    nationalNumber: "الرقم الوطني",
    firstNameArabic: "الاسم الأول (بالعربية)",
    fatherNameArabic: "اسم الأب (بالعربية)",
    familyNameArabic: "اسم العائلة (بالعربية)",
    dateOfBirth: "تاريخ الميلاد",
    birthCity: "مدينة الميلاد",
    bloodType: "فصيلة الدم",
    selectBloodType: "اختر فصيلة الدم",
    name: "الاسم",
  },
};

export type Language = "en" | "ar";
export type TranslationKey = keyof typeof translations.en;

export function getTranslation(lang: Language, key: TranslationKey): string {
  return translations[lang][key] || key;
}