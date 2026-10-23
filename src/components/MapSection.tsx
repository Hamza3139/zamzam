import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

const MapSection: React.FC = () => {
  const { t } = useLanguage();
  const lat = 26.33252549;
  const lng = 43.96526418;
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3586.6852441991874!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDE5JzU3LjEiTiA0M8KwNTcnNTQuOSJF!5e0!3m2!1sen!2ssa!4v1715505000000!5m2!1sen!2ssa`;

  return (
    <section id="contact" className="bg-white py-14 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Info Card */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-6 text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
              {t('nav_contact')}
            </h2>
            
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-0.5 rounded-xl bg-neutral p-2.5 sm:p-3 text-secondary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-primary">{t('location_title')}</h3>
                  <p className="text-xs sm:text-sm text-ink/70 leading-relaxed">{t('address')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-0.5 rounded-xl bg-neutral p-2.5 sm:p-3 text-secondary shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-primary">{t('working_hours')}</h3>
                  <p className="text-xs sm:text-sm text-ink/70">{t('hours_val')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-0.5 rounded-xl bg-neutral p-2.5 sm:p-3 text-secondary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-primary">اتصل بنا / تواصل مباشرة</h3>
                  <a href="tel:+966581544819" className="text-sm sm:text-base font-bold text-secondary transition-colors hover:text-primary">
                    +966 58 154 4819
                  </a>
                </div>
              </div>
            </div>

            <a
              href={`https://maps.google.com/?q=${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full sm:w-fit items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <Navigation size={18} />
              <span>{t('hero_cta_directions')}</span>
            </a>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="h-[280px] sm:h-[400px] md:h-[480px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl"
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zamzam Blinds Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
