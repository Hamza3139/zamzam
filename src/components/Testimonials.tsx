import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonialsData = [
  {
    name: 'سارة العتيبي',
    role: 'عميلة في بريدة',
    text: 'تعامل راقي جداً وأقمشة ذات جودة عالية جداً. اشتريت قماش لزواجي وكان خياراً رائعاً، كل من رآه سأل عنه.',
    rating: 5
  },
  {
    name: 'نورة السيف',
    role: 'مصممة أزياء',
    text: 'أفضل مكان للأقمشة في القصيم. تشكيلة الكريب والشيفون عندهم لا يعلى عليها. أنصح بهم بشدة.',
    rating: 5
  },
  {
    name: 'أم محمد',
    role: 'عميلة دائمة',
    text: 'المحل واسع ومرتب، وأسعارهم ممتازة مقارنة بالجودة. الموقع في بريدة سهل الوصول إليه والتعاون رائع.',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-neutral py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            {t('nav_about') === 'About Us' ? 'Customer Stories' : 'آراء عميلاتنا'}
          </h2>
          <div className="mx-auto h-1 w-24 bg-secondary"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-secondary text-secondary" />
                ))}
              </div>
              <Quote className="absolute top-6 right-6 text-neutral/40" size={48} />
              <p className="mb-8 flex-1 text-lg italic leading-relaxed text-ink/80">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-sans text-lg font-bold text-primary">{item.name}</h4>
                <p className="text-sm text-ink/60">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
