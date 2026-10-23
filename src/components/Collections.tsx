import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS, Product } from '../data/products';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Search, 
  SlidersHorizontal, 
  Eye, 
  X, 
  CheckCircle2, 
  Maximize2, 
  Layers, 
  Sparkles,
  Image as ImageIcon
} from 'lucide-react';

const Collections: React.FC = () => {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [showReferenceSheet, setShowReferenceSheet] = useState<boolean>(false);

  // Category filter tabs
  const categories = [
    { id: 'all', labelKey: 'filter_all', count: PRODUCTS.length },
    { id: 'roller', labelKey: 'filter_roller', count: PRODUCTS.filter(p => p.category === 'roller').length },
    { id: 'plain', labelKey: 'filter_plain', count: PRODUCTS.filter(p => p.category === 'plain').length },
    { id: 'zebra', labelKey: 'filter_zebra', count: PRODUCTS.filter(p => p.category === 'zebra').length },
    { id: 'slatted', labelKey: 'filter_slatted', count: PRODUCTS.filter(p => p.category === 'slatted').length },
    { id: 'specialty', labelKey: 'filter_specialty', count: PRODUCTS.filter(p => p.category === 'specialty').length },
  ];

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch = 
        product.nameAr.toLowerCase().includes(q) ||
        product.nameEn.toLowerCase().includes(q) ||
        product.code.toLowerCase().includes(q) ||
        product.number.toString() === q ||
        product.dimensions.toLowerCase().includes(q) ||
        product.materialAr.toLowerCase().includes(q) ||
        product.descriptionAr.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Construct WhatsApp inquiry link
  const getWhatsAppLink = (product: Product) => {
    const productName = lang === 'ar' ? product.nameAr : product.nameEn;
    const msg = lang === 'ar'
      ? `مرحباً معرض زمزم للستائر، أود الاستفسار عن تفاصيل وطلب طراز:\n*${product.nameAr}*\nالرمز: ${product.code}\nالمقاس: ${product.dimensions}`
      : `Hello Zamzam Blinds, I would like to inquire about and order:\n*${product.nameEn}*\nCode: ${product.code}\nSize: ${product.dimensions}`;
    return `https://wa.me/966581544819?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="collections" className="bg-[#FAF8F5] px-4 py-20 md:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent mb-3">
            <Sparkles size={14} />
            <span>{lang === 'ar' ? 'تشكيلة 20 طرازاً حصرياً' : 'Exclusive 20 Model Catalog'}</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
            {t('products_heading')}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-ink/70 md:text-lg">
            {t('products_subheading')}
          </p>
          <div className="mx-auto mt-4 h-1 w-24 bg-secondary rounded-full"></div>

          {/* Reference Sheet Toggle Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowReferenceSheet(true)}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-5 py-2 text-xs font-semibold text-primary shadow-sm transition-all hover:bg-primary hover:text-white"
            >
              <ImageIcon size={16} />
              <span>{t('reference_sheet_btn')}</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Controls */}
        <div className="mb-10 space-y-4">
          {/* Search bar */}
          <div className="relative mx-auto max-w-xl">
            <Search 
              className={`absolute top-1/2 -translate-y-1/2 text-ink/40 ${
                lang === 'ar' ? 'right-4' : 'left-4'
              }`} 
              size={20} 
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('search_placeholder')}
              className={`w-full rounded-full border border-ink/15 bg-white py-3.5 shadow-sm transition-all focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 ${
                lang === 'ar' ? 'pr-12 pl-10' : 'pl-12 pr-10'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`absolute top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink ${
                  lang === 'ar' ? 'left-4' : 'right-4'
                }`}
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                    isActive
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-ink/70 hover:bg-neutral hover:text-primary border border-ink/10'
                  }`}
                >
                  <span>{t(cat.labelKey)}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] ${
                      isActive ? 'bg-secondary text-primary font-bold' : 'bg-neutral text-ink/60'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom Order Banner */}
        <div className="mb-8 rounded-2xl border border-secondary/30 bg-gradient-to-r from-secondary/10 via-white to-secondary/10 p-4 text-center">
          <p className="text-xs font-medium text-ink/80 md:text-sm">
            ✨ {t('custom_order_note')}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-ink/20 bg-white py-16 text-center">
            <SlidersHorizontal className="mx-auto mb-3 text-ink/30" size={40} />
            <h3 className="mb-2 text-xl font-bold text-primary">{t('no_products_found')}</h3>
            <p className="mb-4 text-sm text-ink/60">جرب البحث بكلمة مختلفة مثل: زيبرا، 200، شرائح، أو P2x2</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="rounded-full bg-primary px-6 py-2.5 text-xs font-bold text-white transition-all hover:bg-primary/90"
            >
              {t('reset_filter')}
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.4) }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                {/* Image Section - Fully visible, uncropped with clean stage */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gradient-to-b from-[#FBFBFA] via-[#F6F5F2] to-[#ECEAE4] p-3 flex items-center justify-center border-b border-ink/5">
                  <img
                    src={product.image}
                    alt={lang === 'ar' ? product.nameAr : product.nameEn}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03] drop-shadow-sm"
                  />

                  {/* Top Badges (sleek & non-obstructive) */}
                  <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between pointer-events-none">
                    <span className="rounded-md bg-primary/85 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-white shadow-sm">
                      {product.code}
                    </span>
                    <span className="rounded-md bg-secondary px-2.5 py-1 text-[11px] font-bold text-primary shadow-sm">
                      {lang === 'ar' ? product.categoryAr : product.categoryEn}
                    </span>
                  </div>

                  {/* Bottom Bar: Dimensions & Quick View */}
                  <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between">
                    <span className="rounded-md bg-white/95 backdrop-blur-md px-2 py-0.5 text-[11px] font-bold text-primary shadow-sm border border-ink/5">
                      📏 {product.dimensions}
                    </span>
                    <button
                      onClick={() => setActiveProduct(product)}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-all hover:bg-primary hover:text-white"
                      title={t('btn_quick_view')}
                    >
                      <Eye size={14} />
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2">
                    <h3 className="font-serif text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {lang === 'ar' ? product.nameAr : product.nameEn}
                    </h3>
                  </div>

                  <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-ink/70">
                    {lang === 'ar' ? product.descriptionAr : product.descriptionEn}
                  </p>

                  {/* Features mini pills */}
                  <div className="mb-5 flex flex-wrap gap-1.5 mt-auto">
                    {(lang === 'ar' ? product.featuresAr : product.featuresEn).slice(0, 2).map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="inline-flex items-center gap-1 rounded-md bg-neutral px-2 py-0.5 text-[10px] font-medium text-ink/75"
                      >
                        <CheckCircle2 size={11} className="text-secondary" />
                        <span>{feat}</span>
                      </span>
                    ))}
                  </div>

                  {/* Action buttons (No prices mentioned as requested) */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-ink/5">
                    <button
                      onClick={() => setActiveProduct(product)}
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-primary/20 bg-neutral/50 py-2.5 text-xs font-bold text-primary transition-all hover:bg-primary hover:text-white"
                    >
                      <Maximize2 size={13} />
                      <span>{t('btn_quick_view')}</span>
                    </button>

                    <a
                      href={getWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] py-2.5 text-xs font-bold text-white shadow transition-all hover:bg-[#1EBE5D] hover:shadow-md"
                    >
                      <MessageCircle size={14} />
                      <span>{lang === 'ar' ? 'استفسار' : 'Inquire'}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Total count indicator */}
        <div className="mt-12 text-center text-xs text-ink/50">
          {lang === 'ar'
            ? `معروض ${filteredProducts.length} من إجمالي 20 طرازاً معتمداً في معرض زمزم للستائر ببريدة`
            : `Displaying ${filteredProducts.length} of 20 certified models at Zamzam Blinds Buraydah`}
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {activeProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProduct(null)}
                className="absolute top-4 ltr:right-4 rtl:left-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/90 shadow-md"
              >
                <X size={18} />
              </button>

              {/* Modal Full Product Showcase Stage - 100% visible */}
              <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-gradient-to-b from-[#FAF9F5] via-[#F4F2EC] to-[#ECE9E0] p-6 flex items-center justify-center border-b border-ink/10">
                <img
                  src={activeProduct.image}
                  alt={lang === 'ar' ? activeProduct.nameAr : activeProduct.nameEn}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain drop-shadow-md transition-transform duration-300"
                />
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Header Information */}
                <div className="border-b border-ink/10 pb-4">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="rounded-md bg-primary px-3 py-1 text-xs font-bold text-white shadow-sm">
                      {activeProduct.code}
                    </span>
                    <span className="rounded-md bg-secondary px-3 py-1 text-xs font-bold text-primary shadow-sm">
                      {lang === 'ar' ? activeProduct.categoryAr : activeProduct.categoryEn}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                    {lang === 'ar' ? activeProduct.nameAr : activeProduct.nameEn}
                  </h3>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-ink/80 sm:text-base">
                    {lang === 'ar' ? activeProduct.descriptionAr : activeProduct.descriptionEn}
                  </p>
                </div>

                {/* Specs Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl bg-neutral/60 p-4 border border-ink/5">
                  <div>
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-1">
                      {t('modal_dimensions')}
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      {activeProduct.dimensions}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-1">
                      {t('modal_material')}
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      {lang === 'ar' ? activeProduct.materialAr : activeProduct.materialEn}
                    </span>
                  </div>
                </div>

                {/* Recommended Rooms */}
                <div>
                  <h4 className="mb-2 text-xs font-bold text-primary uppercase tracking-wider">
                    {t('modal_rooms')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(lang === 'ar' ? activeProduct.roomsAr : activeProduct.roomsEn).map((room, rIdx) => (
                      <span
                        key={rIdx}
                        className="rounded-lg bg-primary/5 px-3 py-1 text-xs font-medium text-primary border border-primary/10"
                      >
                        📍 {room}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div>
                  <h4 className="mb-2 text-xs font-bold text-primary uppercase tracking-wider">
                    {t('modal_features')}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(lang === 'ar' ? activeProduct.featuresAr : activeProduct.featuresEn).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-ink/80">
                        <CheckCircle2 size={14} className="text-secondary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Order Action */}
                <div className="pt-4 border-t border-ink/10 flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppLink(activeProduct)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-[#1EBE5D]"
                  >
                    <MessageCircle size={18} />
                    <span>{t('btn_inquire_whatsapp')}</span>
                  </a>
                  <button
                    onClick={() => setActiveProduct(null)}
                    className="rounded-2xl border border-ink/20 px-6 py-3.5 text-sm font-bold text-ink/70 hover:bg-neutral transition-colors"
                  >
                    {t('modal_close')}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Reference Sheet Fullscreen Modal */}
      <AnimatePresence>
        {showReferenceSheet && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowReferenceSheet(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary">
                    {lang === 'ar' ? 'لوحة المنتجات المعتمدة (20 طرازاً)' : 'Certified Products Sheet (20 Items)'}
                  </h3>
                  <p className="text-xs text-ink/60">
                    {lang === 'ar' ? 'المرجع الرسمي لكتالوج الستائر المعروضة في المتجر' : 'Official catalog reference list of the 20 featured items'}
                  </p>
                </div>
                <button
                  onClick={() => setShowReferenceSheet(false)}
                  className="rounded-full p-2 text-ink/50 hover:bg-neutral hover:text-ink transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="overflow-hidden rounded-2xl border border-ink/10 bg-neutral/30">
                <img
                  src="/assets/aistudio/image_7bbced9e.png"
                  alt="Certified 20 Products Reference"
                  className="w-full object-contain"
                />
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowReferenceSheet(false)}
                  className="rounded-full bg-primary px-6 py-2.5 text-xs font-bold text-white transition-all hover:bg-primary/90"
                >
                  {t('modal_close')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Collections;
