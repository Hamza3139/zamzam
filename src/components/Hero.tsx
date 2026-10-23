import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ChevronDown, MapPin, Compass } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-primary flex items-center py-24 sm:py-32">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Roller Blinds"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover opacity-50 sm:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/30"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-3xl"
        >
          <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3 sm:px-4 py-1 backdrop-blur-md border border-secondary/30">
            <Compass size={13} className="text-secondary" />
            <span className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-wider text-secondary">
              معرض زمزم للستائر • بريدة
            </span>
          </div>

          <h1 className="mb-4 sm:mb-6 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] text-white">
            {t('hero_title')}
          </h1>

          <p className="mb-8 sm:mb-10 max-w-2xl font-sans text-sm sm:text-lg text-white/85 leading-relaxed">
            {t('hero_subtitle')}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#collections"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-secondary bg-secondary px-7 py-3.5 sm:py-4 font-sans text-sm sm:text-base font-bold text-primary shadow-lg transition-all hover:bg-transparent hover:text-secondary active:scale-[0.98]"
            >
              {t('hero_cta_browse')}
            </a>
            <a
              href="https://maps.google.com/?q=26.33252549,43.96526418"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-7 py-3.5 sm:py-4 font-sans text-sm sm:text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.98]"
            >
              <MapPin size={18} />
              <span>{t('hero_cta_directions')}</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/40 pointer-events-none"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;
