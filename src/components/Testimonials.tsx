import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonialsData = [
  {
    name: 'سارة العتيبي',
    role: 'عميلة في بريدة',
    text: 'تعامل راقي جداً وأقمشة وستائر ذات جودة عالية جداً. تم تفصيل وتركيب الستائر باحترافية وسرعة فائقة.',
    rating: 5
  },
  {
    name: 'نورة السيف',
    role: 'مصممة ديكور',
    text: 'أفضل مكان للستائر في القصيم. تشكيلة الرول والبلاك آوت عندهم لا يعلى عليها. أنصح بهم بشدة.',
    rating: 5
  },
  {
    name: 'أم محمد',
    role: 'عميلة دائمة',
    text: 'المعرض واسع ومرتب، وأسعارهم ممتازة مقارنة بالجودة. الموقع في بريدة سهل الوصول إليه والتعامل ممتاز.',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-neutral py-14 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="mb-3 text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
            {t('nav_about') === 'About Us' ? 'Customer Stories' : 'آراء عملائنا'}
          </h2>
          <div className="mx-auto h-1 w-20 bg-secondary rounded-full"></div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative flex flex-col rounded-2xl bg-white p-6 sm:p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={15} className="fill-secondary text-secondary" />
                ))}
              </div>
              <Quote className="absolute top-5 right-5 text-neutral/40" size={38} />
              <p className="mb-6 flex-1 text-sm sm:text-base italic leading-relaxed text-ink/80">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-sans text-sm sm:text-base font-bold text-primary">{item.name}</h4>
                <p className="text-xs text-ink/60">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
