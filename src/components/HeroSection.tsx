'use client';

import Image from 'next/image';
import { Star, Zap, Heart } from 'lucide-react';

export function HeroSection() {
  const customerAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 md:py-20 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Kolom Kiri: Teks & Aksi */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Kicker subtitle */}
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#E60067] uppercase mb-4">
              Fresh Flowers, Happy Moments
            </span>

            {/* Headline besar dengan perpaduan Serif dan accent The Heart */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-stone-900 leading-[1.12] tracking-tight mb-5">
              Flowers That <br />
              Speak From <br />
              <span className="font-serif italic text-[#E60067] inline-flex items-center gap-2">
                The Heart
                {/* Floating Heart Outline Icon */}
                <span className="inline-block animate-pulse-subtle">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-rose-300 stroke-[1.5] fill-none" />
                </span>
              </span>
            </h1>

            <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-md mb-8">
              Handpicked fresh flowers & premium everlasting floral, beautifully arranged and delivered to your loved ones.
            </p>

            {/* Tombol Aksi Kiri */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="#catalog"
                className="px-6 py-3.5 rounded-md bg-[#E60067] hover:bg-[#CC005A] text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
              >
                Shop Bouquets
              </a>

              <a
                href="#bespoke-custom"
                className="px-6 py-3.5 rounded-md bg-white border border-stone-300 hover:border-[#E60067] text-stone-700 hover:text-[#E60067] text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 active:scale-[0.98]"
              >
                Explore Occasions
              </a>
            </div>

            {/* Rating & Social Proof */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {customerAvatars.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-xs"
                  >
                    <Image
                      src={src}
                      alt={`Customer ${i + 1}`}
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-[11px] font-semibold text-stone-700 tracking-wide">
                  10,000+ Happy Customers
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Arch Shape Background & Floating Floral Elements */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
            
            {/* The Arch Shape (Soft Pink Curved Arch Background) */}
            <div className="relative w-[280px] sm:w-[350px] md:w-[380px] h-[390px] sm:h-[470px] bg-[#FCE8F0] rounded-t-full rounded-b-2xl flex items-end justify-center transition-transform duration-500">
              
              {/* Floating Petal Kiri Atas */}
              <div className="absolute -top-4 -left-6 w-9 h-9 sm:w-11 sm:h-11 animate-petal-1 pointer-events-none z-20">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs fill-[#F472B6]/90 rotate-[-25deg]">
                  <path d="M50 0 C75 25 100 50 75 75 C50 100 25 75 25 50 C25 25 25 0 50 0 Z" />
                </svg>
              </div>

              {/* Floating Petal/Leaf Kiri Tengah */}
              <div className="absolute top-1/2 -left-8 w-6 h-8 sm:w-7 sm:h-10 animate-petal-2 pointer-events-none z-20">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs fill-emerald-600/90 rotate-[45deg]">
                  <path d="M50 0 C80 30 80 70 50 100 C20 70 20 30 50 0 Z" />
                </svg>
              </div>

              {/* Floating Petal Kanan Bunga */}
              <div className="absolute top-2/5 -right-5 w-8 h-8 sm:w-10 sm:h-10 animate-petal-3 pointer-events-none z-20">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs fill-[#FB7185]/90 rotate-[35deg]">
                  <path d="M50 0 C75 25 100 50 75 75 C50 100 25 75 25 50 C25 25 25 0 50 0 Z" />
                </svg>
              </div>

              {/* Buket Bunga Berbentuk Hati Utama */}
              <div className="relative w-[300px] sm:w-[380px] h-[370px] sm:h-[450px] z-10 -mb-4 animate-float-slow">
                <Image
                  src="/hero-bouquet.png"
                  alt="Heart Shaped Floral Arrangement"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 450px"
                  className="object-contain object-bottom drop-shadow-xl"
                />
              </div>

              {/* Badge Floating: Fresh Delivery in 90 minutes */}
              <div className="absolute bottom-10 -right-2 sm:-right-8 z-30 bg-white/95 backdrop-blur-xs py-2.5 px-4 rounded-xl shadow-md border border-stone-200/80 flex items-center gap-2.5 animate-pulse-subtle">
                <div className="w-7 h-7 rounded-lg bg-stone-100 flex items-center justify-center text-stone-900">
                  <Zap className="w-4 h-4 fill-stone-900 text-stone-900" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-stone-900 block leading-tight">
                    Fresh Delivery
                  </span>
                  <span className="text-[10px] text-stone-500 block leading-tight">
                    in 90 minutes
                  </span>
                </div>
              </div>

            </div>

            {/* Floating Petal Kiri Bawah Dekat Review */}
            <div className="absolute -bottom-2 left-6 w-7 h-7 animate-petal-1 pointer-events-none z-20">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs fill-[#F472B6]/80 rotate-[60deg]">
                <path d="M50 0 C75 25 100 50 75 75 C50 100 25 75 25 50 C25 25 25 0 50 0 Z" />
              </svg>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}