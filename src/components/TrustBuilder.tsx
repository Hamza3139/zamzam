import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Briefcase, TrendingUp, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const TrustBuilder: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Award className="text-secondary" size={36} />,
      title: t('why_quality'),
      desc: t('why_quality_desc'),
    },
    {
      icon: <Briefcase className="text-secondary" size={36} />,
      title: t('why_price'),
      desc: t('why_price_desc'),
    },
    {
      icon: <TrendingUp className="text-secondary" size={36} />,
      title: t('why_trends'),
      desc: t('why_trends_desc'),
    },
    {
      icon: <MapPin className="text-secondary" size={36} />,
      title: t('location_title'),
      desc: t('address'),
    },
  ];

  return (
    <section id="about" className="bg-white py-14 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="mb-3 text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
            {t('why_title')}
          </h2>
          <div className="mx-auto h-1 w-20 bg-secondary rounded-full"></div>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col items-center text-center rounded-2xl bg-neutral/40 p-6 sm:p-7 border border-ink/5"
            >
              <div className="mb-4 sm:mb-5 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-white shadow-sm">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-bold text-primary">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-ink/70 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Saudi Business Center Authentication Badge */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center border-t border-neutral pt-8">
          <div className="flex items-center gap-3 sm:gap-4 rounded-xl border border-neutral bg-white p-4 sm:p-5 shadow-sm max-w-md w-full justify-center">
            <div className="h-12 w-12 sm:h-14 sm:w-14 bg-neutral rounded-lg flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-ink/50">SBC</span>
            </div>
            <div>
              <p className="font-sans text-xs sm:text-sm font-bold text-primary">توثيق المركز السعودي للأعمال</p>
              <p className="font-sans text-[11px] text-ink/60">Saudi Business Center Authenticated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBuilder;
