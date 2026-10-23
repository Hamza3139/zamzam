import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WhatsAppIcon } from './WhatsAppIcon';

const Header: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav_home'), href: '#home' },
    { name: t('nav_collections'), href: '#collections' },
    { name: t('nav_about'), href: '#about' },
    { name: t('nav_contact'), href: '#contact' },
  ];

  const toggleLang = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  const isLightHeader = isScrolled || isMenuOpen;

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isLightHeader 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-primary/40 backdrop-blur-sm py-4 sm:py-5'
      }`}
      id="main-header"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 sm:gap-2.5">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-primary text-secondary shadow-sm">
              <span className="font-serif text-xl sm:text-2xl font-bold">Z</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight leading-tight ${
                isLightHeader ? 'text-primary' : 'text-white'
              }`}>
                معرض زمزم للستائر
              </span>
              <span className={`text-[10px] font-sans tracking-widest uppercase hidden sm:block ${
                isLightHeader ? 'text-ink/60' : 'text-white/70'
              }`}>
                Buraydah • Al Qassim
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-sm font-medium transition-colors hover:text-secondary ${
                  isLightHeader ? 'text-ink/80' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleLang}
              className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${
                isLightHeader 
                  ? 'border-ink/15 text-primary hover:bg-neutral' 
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <Globe size={15} />
              <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            <a
              href="https://wa.me/966581544819"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2 text-xs font-bold text-white shadow-md transition-transform hover:scale-105 hover:bg-[#1EBE5D]"
            >
              <WhatsAppIcon size={16} />
              <span>{t('cta_whatsapp')}</span>
            </a>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button 
              onClick={toggleLang}
              className={`flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-bold transition-all ${
                isLightHeader 
                  ? 'border-ink/15 text-primary bg-neutral/50' 
                  : 'border-white/30 text-white bg-white/10'
              }`}
              aria-label="Toggle Language"
            >
              <Globe size={14} />
              <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isLightHeader ? 'text-primary hover:bg-neutral' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-ink/10 bg-white shadow-2xl lg:hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 font-sans text-base font-bold text-primary transition-colors hover:bg-neutral active:bg-neutral"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-ink/30">→</span>
                </a>
              ))}

              <div className="pt-2 border-t border-ink/10 mt-2">
                <a
                  href="https://wa.me/966581544819"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-3.5 text-base font-bold text-white shadow-lg active:scale-[0.98] transition-transform"
                >
                  <WhatsAppIcon size={20} />
                  <span>{t('cta_whatsapp')}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
