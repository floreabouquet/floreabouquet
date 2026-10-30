'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Eye, MessageCircle, Sparkles } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onOrderDirect: (product: Product) => void;
}

export function ProductCard({ product, onQuickView, onOrderDirect }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-white rounded-xl border border-stone-200/90 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-stone-400 hover:shadow-sm"
    >
      {/* Badge Populer */}
      <div className="absolute top-6 left-6 z-10 flex flex-col gap-1.5 items-start pointer-events-none">
        {product.isPopular && (
          <span className="bg-stone-900 text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded shadow-2xs">
            Favorit
          </span>
        )}
      </div>

      {/* Wadah Foto Buket */}
      <div className="relative w-full aspect-[4/5] bg-stone-100 rounded-lg overflow-hidden mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Hover Desktop Quick Detail */}
        <div
          className={`absolute inset-0 bg-stone-950/20 backdrop-blur-[2px] hidden sm:flex items-center justify-center transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <button
            onClick={() => onQuickView(product)}
            className="px-4 py-2 bg-white text-stone-900 text-xs font-semibold rounded-lg shadow-sm hover:bg-stone-50 flex items-center gap-1.5 transition active:scale-95"
          >
            <Eye className="w-3.5 h-3.5" />
            Detail Buket
          </button>
        </div>
      </div>

      {/* Info Rangkaian Buket */}
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between text-[11px] text-stone-500 font-medium mb-1">
          <span className="uppercase tracking-wider text-rose-800 font-semibold">{product.categoryLabel}</span>
          <span>{product.durability}</span>
        </div>

        <h3 className="text-base font-serif font-medium text-stone-900 group-hover:text-rose-800 transition-colors line-clamp-1 mb-1">
          {product.name}
        </h3>

        <p className="text-xs text-stone-500 line-clamp-1 mb-3">
          Bahan: {product.material}
        </p>

        {/* Harga */}
        <div className="flex items-baseline gap-2 mb-4 pt-2 border-t border-stone-100">
          <span className="text-base font-semibold text-stone-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-stone-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Tombol Aksi Taktil */}
        <div className="mt-auto pt-1">
          <button
            onClick={() => onOrderDirect(product)}
            className="w-full py-2.5 px-3 rounded-lg bg-[#E60067] hover:bg-[#CC005A] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-150 active:scale-[0.98] shadow-2xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Pesan via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
