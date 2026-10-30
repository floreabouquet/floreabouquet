'use client';

import { useState } from 'react';
import { ChevronDown, Loader2 } from 'lucide-react';
import { Product, getCategoryLabel } from '@/data/products';
import { useAdmin } from '@/context/AdminContext';
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
  const { products, isLoading } = useAdmin();
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const filterTabs = [
    { id: 'all', label: 'Semua Koleksi' },
    { id: 'artistic', label: 'Buket Bunga Artistik' },
    { id: 'celebration', label: 'Perayaan & Momen' },
    { id: 'personal', label: 'Personalisasi & Hadiah' },
  ];

  // Filter produk dari data Supabase yang ada di context
  const filteredProducts = products.filter((item) => {
    const label = getCategoryLabel(item);
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      !searchTerm ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
      label.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalog" className="py-12 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Katalog */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-5 mb-6 sm:mb-10 pb-5 border-b border-stone-200/80">
        <div>
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#E60067] block mb-1">
            Galeri Sampel Eksklusif
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-stone-900 tracking-tight">
            Koleksi Rangkaian Mahakarya Abadi
          </h2>
          <p className="text-xs text-stone-500 mt-1 max-w-xl">
            Pilihan desain berkarakter yang siap dikirim langsung atau disesuaikan dengan palet warna impian Anda. Elegan, prestisius, dan tak akan pernah layu.
          </p>
        </div>

        {/* Filter Kategori: Dropdown di Mobile, Tabs Pill di Desktop/Tablet */}
        <div className="w-full sm:w-auto">
          {/* Dropdown Mobile */}
          <div className="relative sm:hidden w-full">
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              aria-label="Pilih Kategori Buket"
              className="w-full appearance-none bg-white border border-stone-200 text-stone-800 text-xs font-semibold py-2.5 pl-3.5 pr-10 rounded-xl shadow-2xs focus:outline-none focus:border-[#E60067] transition-colors"
            >
              {filterTabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Tab Filter Taktil Desktop/Tablet */}
          <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
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
      </div>

      {/* Loading State */}
      {isLoading ? (
        <div className="py-20 flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-[#E60067]" />
          <p className="text-xs text-stone-500">Memuat koleksi mahakarya...</p>
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-none">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-[calc((100vw-32px-12px)/2)] min-w-[150px] max-w-[210px] sm:w-auto sm:min-w-0 sm:max-w-none shrink-0 snap-start flex"
            >
              <ProductCard
                product={product}
                onQuickView={(p) => setActiveModalProduct(p)}
                onOrderDirect={(p) => setActiveModalProduct(p)}
              />
            </div>
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
