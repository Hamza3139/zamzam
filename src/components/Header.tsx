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
    window.addEventListener('scroll', handleScroll);
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

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
      id="main-header"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-secondary">
              <span className="font-serif text-2xl font-bold">Z</span>
            </div>
            <span className={`font-serif text-xl font-bold tracking-tight md:text-2xl ${isScrolled ? 'text-primary' : 'text-primary'}`}>
              معرض زمزم للستائر
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-ink/80 transition-colors hover:text-secondary"
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 rounded-full border border-ink/10 px-3 py-1 text-sm font-medium transition-all hover:bg-ink/5"
            >
              <Globe size={16} />
              {lang === 'ar' ? 'English' : 'العربية'}
            </button>

            <a
              href="https://wa.me/966581544819"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#1EBE5D]"
            >
              <WhatsAppIcon size={18} />
              {t('cta_whatsapp')}
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <button 
              onClick={toggleLang}
              className="p-2 text-primary"
              aria-label="Toggle Language"
            >
              <Globe size={20} />
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-primary"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-full w-full bg-white shadow-xl lg:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-sans text-lg font-medium text-ink border-b border-neutral py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/966581544819"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-4 text-lg font-bold text-white hover:bg-[#1EBE5D]"
              >
                <WhatsAppIcon size={22} />
                {t('cta_whatsapp')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
