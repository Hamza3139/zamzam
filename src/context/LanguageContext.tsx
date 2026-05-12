import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface Translations {
  [key: string]: {
    ar: string;
    en: string;
  };
}

export const translations: Translations = {
  nav_home: { ar: 'الرئيسية', en: 'Home' },
  nav_collections: { ar: 'منتجاتنا', en: 'Products' },
  nav_about: { ar: 'من نحن', en: 'About Us' },
  nav_contact: { ar: 'الموقع والتواصل', en: 'Contact' },
  cta_whatsapp: { ar: 'تواصل عبر الواتساب', en: 'Chat on WhatsApp' },
  hero_title: { ar: 'أفضل ستائر الرول والديكور في قلب القصيم', en: 'Premium Roller Blinds & Decor in Al Qassim' },
  hero_subtitle: { ar: 'نقدم أجود أنواع ستائر الرول (بلاك آوت، زيبرا، صن سكرين) وأنظمة الستائر الذكية ببريدة.', en: 'Providing the finest roller blinds (Blackout, Zebra, Sunscreen) and smart blind systems in Buraydah.' },
  hero_cta_browse: { ar: 'تصفح الستائر', en: 'Browse Blinds' },
  hero_cta_directions: { ar: 'احصل على الاتجاهات', en: 'Get Directions' },
  cat_silk: { ar: 'ستائر بلاك آوت', en: 'Blackout Blinds' },
  cat_crepe: { ar: 'ستائر زيبرا', en: 'Zebra Blinds' },
  cat_velvet: { ar: 'ستائر صن سكرين', en: 'Sunscreen Blinds' },
  cat_evening: { ar: 'ستائر ذكية (ريموت)', en: 'Smart Motorized Blinds' },
  cat_desc: { ar: 'حلول عصرية لتغطية النوافذ بأعلى جودة.', en: 'Modern window treatment solutions with the highest quality.' },
  price_request: { ar: 'اطلب السعر عبر الواتساب', en: 'Request Price via WhatsApp' },
  why_title: { ar: 'لماذا تختار معرض زمزم؟', en: 'Why Choose Zamzam Blinds?' },
  why_quality: { ar: 'جودة استثنائية', en: 'Premium Quality' },
  why_quality_desc: { ar: 'نستخدم أفضل الخامات العالمية والمحركات الذكية لضمان عمر أطول لستائرك.', en: 'We use the best global materials and smart motors to ensure a longer life for your blinds.' },
  why_price: { ar: 'أسعار تنافسية', en: 'Competitive Prices' },
  why_price_desc: { ar: 'نقدم الفخامة بأسعار مدروسة مع خدمات تركيب احترافية.', en: 'We offer luxury at studied prices with professional installation services.' },
  why_trends: { ar: 'تصاميم عصرية', en: 'Modern Designs' },
  why_trends_desc: { ar: 'تشكيلات متجددة تواكب أحدث ديكورات المنازل والمكاتب.', en: 'Renewed collections keeping pace with the latest home and office decor.' },
  location_title: { ar: 'موقعنا في بريدة', en: 'Our Location in Buraydah' },
  address: { ar: 'بريدة، القصيم، المملكة العربية السعودية', en: 'Buraydah, Al Qassim, Saudi Arabia' },
  working_hours: { ar: 'أوقات العمل', en: 'Working Hours' },
  hours_val: { ar: 'يومياً: 8:00 صباحاً - 11:00 مساءً', en: 'Daily: 8:00 AM - 11:00 PM' },
  footer_rights: { ar: 'جميع الحقوق محفوظة لمعرض زمزم للستائر', en: 'All rights reserved to Zamzam Blinds' },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = (key: string) => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
