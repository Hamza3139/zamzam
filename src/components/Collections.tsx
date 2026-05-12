import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const collectionsData = [
  {
    id: 'blackout',
    titleKey: 'cat_silk',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
  },
  {
    id: 'zebra',
    titleKey: 'cat_crepe',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80',
  },
  {
    id: 'sunscreen',
    titleKey: 'cat_velvet',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80',
  },
  {
    id: 'smart',
    titleKey: 'cat_evening',
    image: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?w=800&q=80',
  },
];

const Collections: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="collections" className="bg-neutral px-4 py-24 md:px-6">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            {t('nav_collections')}
          </h2>
          <div className="mx-auto h-1 w-24 bg-secondary"></div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {collectionsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={t(item.titleKey)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-2xl font-bold text-primary">
                  {t(item.titleKey)}
                </h3>
                <p className="mb-6 flex-1 text-ink/70">
                  {t('cat_desc')}
                </p>
                <a
                  href={`https://wa.me/966581544819?text=${encodeURIComponent(
                    lang === 'ar' 
                      ? `مرحباً، أود الاستفسار عن ${t(item.titleKey)}` 
                      : `Hello, I would like to inquire about ${t(item.titleKey)}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-primary px-4 py-3 font-sans font-bold text-primary transition-all hover:bg-primary hover:text-white"
                >
                  <MessageCircle size={18} />
                  {t('price_request')}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
