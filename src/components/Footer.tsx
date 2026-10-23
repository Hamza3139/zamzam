import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Instagram } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary pt-14 pb-28 sm:pb-12 text-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-12 sm:pb-16 md:flex-row md:items-start">
          {/* Brand Info */}
          <div className="max-w-xs text-center md:text-right">
            <div className="mb-4 flex items-center justify-center gap-2 md:justify-start">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-primary">
                <span className="font-serif text-xl font-bold">Z</span>
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">معرض زمزم للستائر</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-white/60">
              {t('hero_subtitle')}
            </p>
          </div>

          {/* Links & Socials */}
          <div className="flex flex-wrap justify-center gap-10 sm:gap-16 text-center sm:text-right">
            <div className="flex flex-col gap-3">
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-secondary">{t('nav_home')}</h4>
              <nav className="flex flex-col gap-2 text-xs sm:text-sm text-white/70">
                <a href="#home" className="transition-colors hover:text-white">{t('nav_home')}</a>
                <a href="#collections" className="transition-colors hover:text-white">{t('nav_collections')}</a>
                <a href="#about" className="transition-colors hover:text-white">{t('nav_about')}</a>
                <a href="#contact" className="transition-colors hover:text-white">{t('nav_contact')}</a>
              </nav>
            </div>
            
            <div className="flex flex-col gap-3 items-center sm:items-start">
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-secondary">تابعونا</h4>
              <div className="flex gap-3">
                <a 
                  href="https://www.instagram.com/maarazzamzam/?__pwa=1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10 hover:text-secondary"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://wa.me/966581544819" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10 hover:text-[#25D366]"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon size={18} />
                </a>
                <a 
                  href="https://www.facebook.com/share/17kbQ6RY5Q/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10 hover:text-secondary font-bold text-sm"
                  aria-label="Facebook"
                >
                  f
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-center text-[11px] sm:text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} {t('footer_rights')}.</p>
          <p>معرض زمزم للستائر والديكور • بريدة، القصيم</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
