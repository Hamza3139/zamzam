import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const WhatsAppButton: React.FC = () => {
  const { lang } = useLanguage();
  const phoneNumber = '966581544819'; 
  const message = lang === 'ar' ? 'مرحباً زمزم للستائر، أود الاستفسار عن ستائر الرول والخدمات المتوفرة.' : 'Hello Zamzam Blinds, I would like to inquire about your roller blinds and services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:bg-[#1EBE5D] active:scale-95"
      id="whatsapp-floating-widget"
      aria-label="Contact on WhatsApp"
    >
      <WhatsAppIcon size={30} className="w-7 h-7 sm:w-8 sm:h-8" />
      <span className="sr-only">WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;
