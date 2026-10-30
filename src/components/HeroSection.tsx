import Image from 'next/image';
import { ArrowDown, Sparkles, Infinity, Sparkle, ShieldCheck, Heart } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:py-24 border-b border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Kolom Teks: 60% Focus */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Kicker Tag Tipografi Murni */}
            <div className="flex items-center gap-2 mb-4 text-xs font-medium uppercase tracking-widest text-stone-500">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-700" />
              <span>Florea Bouquet • Premium Artificial & Everlasting Floral</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-stone-900 leading-[1.12] tracking-tight mb-6">
              Keindahan Yang Abadi, <br />
              <span className="italic font-normal text-rose-800">
                Tanpa Perlu Takut Layu.
              </span>
            </h1>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-normal">
              Spesialis rangkaian buket bunga buatan (artificial) & silk flower berkualitas tinggi. Tampilan nyata yang anggun, tahan bertahun-tahun sebagai kenang-kenangan wisuda, anniversary, dan hadiah orang terkasih.
            </p>

            {/* Tombol Taktil Berbobot */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#E60067] hover:bg-[#CC005A] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-150 active:scale-[0.98] shadow-sm hover:-translate-y-0.5"
              >
                <span>Lihat Sampel Buket</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#bespoke-custom"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-rose-200 hover:border-rose-400 text-rose-800 text-xs font-semibold tracking-wider uppercase transition-all duration-150 active:scale-[0.98] hover:-translate-y-0.5"
              >
                <span>Request Buket Custom</span>
              </a>
            </div>

            {/* Nilai Plus Bunga Tiruan Florea */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-stone-200/80 w-full">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-stone-900 block">Abadi & Anti Layu</span>
                <p className="text-[11px] text-stone-500">Bisa disimpan selamanya sebagai memori manis.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-stone-900 block">Bahan Silk Premium</span>
                <p className="text-[11px] text-stone-500">Tekstur kelopak lembut & warna natural seperti asli.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-stone-900 block">Aman Dikirim</span>
                <p className="text-[11px] text-stone-500">Kirim ke mana saja tanpa risiko rusak di perjalanan.</p>
              </div>
            </div>
          </div>

          {/* Kolom Visual: 40% Asymmetric Balance */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100 group">
              <Image
                src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85"
                alt="Buket Bunga Artificial Silk Florea Bouquet"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-stone-900/10" />

              {/* Taktil Floating Info */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200/80 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-rose-700 font-semibold">
                      Signature Collection
                    </p>
                    <h3 className="text-sm font-serif font-semibold text-stone-900">
                      Blush Silk Peony & Rose
                    </h3>
                  </div>
                  <span className="text-[11px] font-medium text-stone-700 bg-stone-100 px-2.5 py-1 rounded-md">
                    Tahan Selamanya
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
