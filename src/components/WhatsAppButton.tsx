import React from 'react';
import { MessageCircle } from 'lucide-react';
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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform md:bottom-10 md:right-10"
      id="whatsapp-floating-widget"
    >
      <MessageCircle size={32} />
      <span className="sr-only">WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;
