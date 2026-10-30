'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ArrowRight, MessageCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-0 pb-0 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Kolom Kiri: Teks & Aksi */}
          <div className="lg:col-span-6 flex flex-col items-start z-10 pt-7 sm:pt-6 lg:pt-0 pb-8 sm:pb-12 lg:pb-14 sm:pl-3 lg:pl-6 mt-0 sm:-mt-8 lg:-mt-12">
            {/* Header Area: Kicker, Headline & Bunga Kecil (di mobile tampil 2 kolom berdampingan) */}
            <div className="flex items-center justify-start gap-3 min-[400px]:gap-4 w-full mb-3 sm:mb-5">
              <div className="shrink-0">
                {/* Kicker subtitle */}
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#E60067] uppercase mb-1 sm:mb-3 block">
                  Buket Bunga Eksklusif
                </span>

                {/* Headline */}
                <h1 className="text-xl min-[390px]:text-2xl sm:text-4xl lg:text-5xl font-serif font-normal text-stone-900 leading-[1.18] tracking-tight">
                  <span className="block whitespace-nowrap">Rasa Tak Pernah Pudar.</span>
                  <span className="block whitespace-nowrap">
                    Begitu Pula{' '}
                    <span className="font-serif italic text-[#E60067] inline-flex items-center gap-1.5 sm:gap-2">
                      Buket Anda.
                      {/* Floating Heart Outline Icon */}
                      <span className="inline-block animate-pulse-subtle">
                        <Heart className="w-4 h-4 sm:w-7 sm:h-7 text-rose-300 stroke-[1.5] fill-none" />
                      </span>
                    </span>
                  </span>
                </h1>
              </div>

              {/* Bunga Kecil Khusus Mobile */}
              <div className="lg:hidden shrink-0 relative flex items-center justify-center -ml-1 sm:ml-0">
                <div className="relative w-[88px] h-[104px] min-[390px]:w-[100px] min-[390px]:h-[116px] bg-[#FCE8F0] rounded-t-full rounded-b-2xl flex items-center justify-center shadow-xs overflow-visible">
                  <div className="relative w-[110%] h-[110%] translate-y-1">
                    <Image
                      src="/hero-flower-new.png"
                      alt="Artisanal Bouquet"
                      fill
                      priority
                      sizes="110px"
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-md mb-6 sm:mb-8 font-normal">
              Kami tidak sekadar merangkai bunga. Kami menghadirkan pengalaman menerima karya seni floral mewah, abadi, dan sarat makna untuk orang paling istimewa.
            </p>

            {/* Tombol Aksi Kiri */}
            <div className="flex flex-row items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto mb-6 sm:mb-8">
              <a
                href="#catalog"
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-[#E60067] hover:bg-[#CC005A] text-white text-[11px] sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] whitespace-nowrap"
              >
                <span>Eksplor Koleksi</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
              </a>

              <Link
                href="/contact"
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-white border border-stone-300/90 hover:border-stone-400 hover:bg-stone-50 text-stone-800 text-[11px] sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E60067] shrink-0" />
                <span>Konsultasi Pribadi</span>
              </Link>
            </div>

            {/* Rating & Social Proof */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <p className="text-xs sm:text-[13px] font-semibold text-stone-700 tracking-wide">
                Dipercaya oleh Pelanggan Istimewa
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Arch Shape Background & Floating Floral Elements (Desktop only) */}
          <div className="hidden lg:flex lg:col-span-6 relative items-end justify-center">
            
            {/* The Arch Shape (Soft Pink Curved Arch Background) */}
            <div className="relative w-[320px] sm:w-[420px] md:w-[460px] lg:w-[490px] h-[440px] sm:h-[530px] lg:h-[570px] bg-[#FCE8F0] rounded-t-full rounded-b-none flex items-center justify-center transition-transform duration-500">
              
              {/* Floating Petal Kiri Atas */}
              <div className="absolute top-2 -left-2 w-8 h-8 sm:w-10 sm:h-10 animate-petal-1 pointer-events-none z-20">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs fill-[#F472B6]/90 rotate-[-25deg]">
                  <path d="M50 0 C75 25 100 50 75 75 C50 100 25 75 25 50 C25 25 25 0 50 0 Z" />
                </svg>
              </div>

              {/* Floating Petal/Leaf Kiri Tengah */}
              <div className="absolute top-1/2 -left-5 sm:-left-6 w-6 h-8 sm:w-7 sm:h-10 animate-petal-2 pointer-events-none z-20">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs fill-emerald-600/90 rotate-[45deg]">
                  <path d="M50 0 C80 30 80 70 50 100 C20 70 20 30 50 0 Z" />
                </svg>
              </div>

              {/* Floating Petal Kanan Bunga */}
              <div className="absolute top-1/3 -right-3 sm:-right-5 w-8 h-8 sm:w-10 sm:h-10 animate-petal-3 pointer-events-none z-20">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs fill-[#FB7185]/90 rotate-[35deg]">
                  <path d="M50 0 C75 25 100 50 75 75 C50 100 25 75 25 50 C25 25 25 0 50 0 Z" />
                </svg>
              </div>

              {/* Buket Bunga Berbentuk Hati Utama */}
              <div className="relative w-[340px] sm:w-[460px] lg:w-[510px] h-[400px] sm:h-[500px] lg:h-[550px] z-10 translate-y-3 sm:translate-y-4 animate-float-slow">
                <Image
                  src="/hero-flower-new.png"
                  alt="Artisanal Luxury Bouquet of Fresh Flowers"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 550px"
                  className="object-contain object-center drop-shadow-2xl"
                />
              </div>

            </div>

            {/* Floating Petal Kiri Bawah Dekat Review */}
            <div className="absolute bottom-1 left-2 sm:left-4 w-7 h-7 sm:w-8 sm:h-8 animate-petal-1 pointer-events-none z-20">
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