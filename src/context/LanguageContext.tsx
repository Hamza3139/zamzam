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
  products_heading: { ar: 'كتالوج الستائر (20 طرازاً معتمداً)', en: 'Blinds Catalog (20 Certified Models)' },
  products_subheading: { ar: 'تشكيلة مختارة من أرقى ستائر الرول والزيبرا والشرائح والموديلات الفاخرة المعتمدة لدى معرض زمزم ببريدة.', en: 'Curated collection of the finest roller, zebra, slatted, and specialty blinds at Zamzam Gallery in Buraydah.' },
  filter_all: { ar: 'جميع المنتجات (20)', en: 'All Products (20)' },
  filter_roller: { ar: 'ستائر رول وتفصيل', en: 'Roller & Custom' },
  filter_plain: { ar: 'ستائر سادة', en: 'Plain' },
  filter_zebra: { ar: 'ستائر زيبرا', en: 'Zebra' },
  filter_slatted: { ar: 'ستائر شرائح وعمودية', en: 'Slatted & Vertical' },
  filter_specialty: { ar: 'موديلات خاصة', en: 'Specialty Models' },
  search_placeholder: { ar: 'ابحث باسم المنتج أو المقاس أو الرقم (مثال: P2x2، زيبرا، 15)...', en: 'Search by product name, size or number (e.g. P2x2, Zebra, 15)...' },
  btn_inquire_whatsapp: { ar: 'طلب استفسار عبر الواتساب', en: 'Inquire on WhatsApp' },
  btn_quick_view: { ar: 'تفاصيل الطراز', en: 'Model Details' },
  modal_dimensions: { ar: 'المقاس / الأبعاد', en: 'Dimensions / Size' },
  modal_material: { ar: 'نوع القماش والخامة', en: 'Fabric & Material' },
  modal_rooms: { ar: 'الاستخدامات المقترحة', en: 'Recommended Rooms' },
  modal_features: { ar: 'المميزات والمواصفات', en: 'Key Features' },
  modal_close: { ar: 'إغلاق', en: 'Close' },
  reference_sheet_btn: { ar: 'عرض لوحة الطرازات المعتمدة (20 منتجاً)', en: 'View Reference Sheet (20 Products)' },
  no_products_found: { ar: 'لم يتم العثور على منتجات مطابقة لبحثك', en: 'No products matched your search' },
  reset_filter: { ar: 'عرض جميع المنتجات', en: 'Show All Products' },
  custom_order_note: { ar: 'جميع الموديلات متوفرة بمقاسات جاهزة وتفصيل دقيق حسب طلبك مع خدمات التركيب في بريدة والقصيم.', en: 'All models are available in standard or bespoke custom dimensions with professional installation across Buraydah & Al Qassim.' },
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
