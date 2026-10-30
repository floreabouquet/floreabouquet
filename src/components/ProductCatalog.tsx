'use client';

import { useState } from 'react';
import { PRODUCTS, Product } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { QuickOrderModal } from '@/components/QuickOrderModal';

interface ProductCatalogProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchTerm?: string;
}

export function ProductCatalog({
  selectedCategory,
  onCategoryChange,
  searchTerm = '',
}: ProductCatalogProps) {
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const filterTabs = [
    { id: 'all', label: 'Semua Koleksi' },
    { id: 'artificial', label: 'Buket Artificial' },
    { id: 'bloombox', label: 'Bloom Box' },
    { id: 'graduation', label: 'Buket Wisuda' },
  ];

  // Filter produk
  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      !searchTerm ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalog" className="py-12 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Katalog */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-10 pb-5 border-b border-stone-200/80">
        <div>
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#E60067] block mb-1">
            Katalog Sampel Terkurasi
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-stone-900 tracking-tight">
            Koleksi Buket Bunga Buatan (Artificial)
          </h2>
          <p className="text-xs text-stone-500 mt-1 max-w-xl">
            Pilihan desain buket siap kirim atau custom warna bunganya. Tahan selamanya tanpa khawatir layu.
          </p>
        </div>

        {/* Tab Filter Taktil Mobile Scrollable */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onCategoryChange(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-[#E60067] text-white shadow-sm'
                  : 'bg-white text-stone-600 border border-stone-200/90 hover:border-stone-400 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Kartu Sampel (Responsif 1 kol mobile -> 2 sm -> 4 desktop) */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setActiveModalProduct(p)}
              onOrderDirect={(p) => setActiveModalProduct(p)}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center border border-dashed border-stone-300 rounded-2xl p-6">
          <p className="text-stone-500 text-xs mb-3">
            Tidak ada buket yang sesuai kata kunci pencarian.
          </p>
          <button
            onClick={() => onCategoryChange('all')}
            className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold"
          >
            Tampilkan Semua Sampel
          </button>
        </div>
      )}

      {/* Modal Pemesanan WhatsApp */}
      <QuickOrderModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
}
