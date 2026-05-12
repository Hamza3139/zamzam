import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Briefcase, TrendingUp, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const TrustBuilder: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Award className="text-secondary" size={40} />,
      title: t('why_quality'),
      desc: t('why_quality_desc'),
    },
    {
      icon: <Briefcase className="text-secondary" size={40} />,
      title: t('why_price'),
      desc: t('why_price_desc'),
    },
    {
      icon: <TrendingUp className="text-secondary" size={40} />,
      title: t('why_trends'),
      desc: t('why_trends_desc'),
    },
    {
      icon: <MapPin className="text-secondary" size={40} />,
      title: t('location_title'),
      desc: t('address'),
    },
  ];

  return (
    <section id="about" className="bg-white py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            {t('why_title')}
          </h2>
          <div className="mx-auto h-1 w-24 bg-secondary"></div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-neutral shadow-inner">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">
                {feature.title}
              </h3>
              <p className="text-ink/70 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Saudi Business Center Authentication Badge Placeholder */}
        <div className="mt-20 flex flex-col items-center justify-center border-t border-neutral pt-12">
          <div className="flex items-center gap-4 rounded-xl border border-neutral p-6 shadow-sm">
            <div className="h-16 w-16 bg-neutral rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-ink/40">SBC</span>
            </div>
            <div>
              <p className="font-sans text-sm font-bold text-primary">توثيق المركز السعودي للأعمال</p>
              <p className="font-sans text-xs text-ink/60">Saudi Business Center Authenticated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBuilder;
