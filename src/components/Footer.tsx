import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Twitter } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

const Footer: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-primary pt-20 pb-10 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-10 border-b border-white/10 pb-20 md:flex-row md:items-start">
          <div className="max-w-xs text-center md:text-right">
            <div className="mb-6 flex items-center justify-center gap-2 md:justify-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-primary">
                <span className="font-serif text-2xl font-bold">Z</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">معرض زمزم للستائر</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              {t('hero_subtitle')}
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="font-sans font-bold uppercase tracking-widest text-secondary">{t('nav_home')}</h4>
              <nav className="flex flex-col gap-2 text-sm text-white/60">
                <a href="#home" className="transition-colors hover:text-white">{t('nav_home')}</a>
                <a href="#collections" className="transition-colors hover:text-white">{t('nav_collections')}</a>
                <a href="#about" className="transition-colors hover:text-white">{t('nav_about')}</a>
                <a href="#contact" className="transition-colors hover:text-white">{t('nav_contact')}</a>
              </nav>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="font-sans font-bold uppercase tracking-widest text-secondary">تابعونا</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/maarazzamzam/?__pwa=1" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10 hover:text-secondary">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/966581544819" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10 hover:text-[#25D366]">
                  <WhatsAppIcon size={20} />
                </a>
                <a href="https://www.facebook.com/share/17kbQ6RY5Q/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10 hover:text-secondary">
                  <span className="font-bold">f</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} {t('footer_rights')}.</p>
          <p>Created with excellence for Al Qassim Luxury Market.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
