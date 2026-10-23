import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ChevronDown, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Roller Blinds"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 md:px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <span className="mb-4 inline-block font-sans text-xs font-bold uppercase tracking-[0.3em] text-secondary md:text-sm">
            Luxurious Textiles • Buraydah
          </span>
          <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
            {t('hero_title')}
          </h1>
          <p className="mb-10 max-w-2xl font-sans text-lg text-white/80 md:text-xl">
            {t('hero_subtitle')}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#collections"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-secondary bg-secondary px-8 py-4 font-sans font-bold text-primary transition-all hover:bg-transparent hover:text-secondary"
            >
              {t('hero_cta_browse')}
            </a>
            <a
              href="https://maps.google.com/?q=26.33252549,43.96526418"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 font-sans font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <MapPin size={20} />
              {t('hero_cta_directions')}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
