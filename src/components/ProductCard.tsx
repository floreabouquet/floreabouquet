'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Eye } from 'lucide-react';
import { Product, getCategoryLabel } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  onOrderDirect?: (product: Product) => void;
}

export function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="group relative flex flex-col w-full bg-white rounded-xl border border-stone-200/90 p-3 sm:p-4 transition-transform duration-150 hover:-translate-y-1 hover:border-stone-400 hover:shadow-sm will-change-transform">
      {/* Badge Favorit Pink */}
      {product.isPopular && (
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 pointer-events-none">
          <span className="bg-[#E60067] text-white text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded shadow-2xs">
            Favorit
          </span>
        </div>
      )}

      {/* Wadah Foto Buket */}
      <Link
        href={`/product/${product.id}`}
        prefetch={true}
        className="relative w-full aspect-[4/5] bg-stone-100 rounded-lg overflow-hidden mb-3 sm:mb-4 block"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          unoptimized
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
        />

        {/* Hover Desktop Quick Detail */}
        <div className="absolute inset-0 bg-stone-950/20 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
          <span className="px-4 py-2 bg-white text-stone-900 text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5" />
            Lihat Detail
          </span>
        </div>
      </Link>

      {/* Info Rangkaian Buket */}
      <div className="flex flex-col flex-grow">
        <div className="text-[10px] sm:text-[11px] text-[#E60067] font-semibold uppercase tracking-wider mb-1 truncate">
          {getCategoryLabel(product)}
        </div>

        <Link href={`/product/${product.id}`} prefetch={true} className="block">
          <h3 className="text-sm sm:text-base font-serif font-medium text-stone-900 group-hover:text-[#E60067] transition-colors line-clamp-1 mb-1">
            {product.name}
          </h3>
        </Link>

        {/* Harga */}
        <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-2 mb-3 sm:mb-4 pt-1.5 sm:pt-2 border-t border-stone-100">
          <span className="text-sm sm:text-base font-semibold text-stone-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-[11px] sm:text-xs text-stone-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Tombol Aksi Menuju Halaman Detail (Ringan, Instant Transition) */}
        <div className="mt-auto pt-1 flex items-center gap-2">
          <Link
            href={`/product/${product.id}`}
            prefetch={true}
            className="flex-1 py-2 sm:py-2.5 px-3 rounded-lg sm:rounded-xl bg-[#E60067] hover:bg-[#CC005A] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 transition-colors duration-100 active:scale-[0.98] shadow-2xs"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Lihat Koleksi</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
