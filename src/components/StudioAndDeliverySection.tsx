import { ShieldCheck, Sparkles, Send, Heart, PackageCheck, Palette } from 'lucide-react';

export function StudioAndDeliverySection() {
  return (
    <section id="delivery-info" className="py-12 sm:py-16 md:py-24 border-t border-stone-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#E60067] block mb-1">
            Kelebihan Bunga Artificial
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-stone-900 tracking-tight">
            Kenapa Memilih Buket Bunga Buatan Florea?
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
            Menghadirkan pesona visual anggun layaknya bunga segar dengan ketahanan abadi tanpa repot disiram atau diberi nutrisi.
          </p>
        </div>

        {/* 3 Keunggulan Utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pb-12 sm:pb-16 border-b border-stone-200">
          <div className="space-y-2.5 p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/70 hover:border-stone-400 transition-all duration-200 hover:-translate-y-1">
            <span className="text-[11px] font-mono font-semibold text-[#E60067]">01 / MEMORI ABADI</span>
            <h3 className="text-base font-serif font-semibold text-stone-900">
              Kenang-Kenangan Selamanya
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Buket wisuda dan kado ulang tahun Anda tidak akan pernah layu, kering, atau kecokelatan. Tetap cantik menghiasi kamar tidur atau rak pajangan.
            </p>
          </div>

          <div className="space-y-2.5 p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/70 hover:border-stone-400 transition-all duration-200 hover:-translate-y-1">
            <span className="text-[11px] font-mono font-semibold text-[#E60067]">02 / KAIN SUTRA PREMIUM</span>
            <h3 className="text-base font-serif font-semibold text-stone-900">
              Sentuhan Lembut Real Touch
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Dibuat dari kain silk bermutu tinggi dengan gradasi kelopak halus dan tangkai lentur, bebas dari kesan kaku plastik murah.
            </p>
          </div>

          <div className="space-y-2.5 p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/70 hover:border-stone-400 transition-all duration-200 hover:-translate-y-1">
            <span className="text-[11px] font-mono font-semibold text-[#E60067]">03 / PACKING SAFETY BOX</span>
            <h3 className="text-base font-serif font-semibold text-stone-900">
              Aman Kirim Ke Seluruh Kota
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Dikemas menggunakan double-wall box kokoh dengan penyangga anti-penyok, siap dikirim ke seluruh Indonesia tanpa risiko bunga layu.
            </p>
          </div>
        </div>

        {/* Tentang Studio Florea */}
        <div id="about-studio" className="pt-12 sm:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Studio Florist Terpercaya
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-stone-900 mt-1 mb-4">
              Florea Bouquet Studio
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
              Florea Bouquet adalah studio perangkai buket bunga buatan (artificial) & preserved floral terkurasi. Kami memadukan seni wrapping Korea yang manis & clean dengan bahan silk grade A untuk kado paling berkesan.
            </p>
            <div className="flex items-center gap-2.5 text-xs font-medium text-stone-800">
              <ShieldCheck className="w-4 h-4 text-[#E60067]" />
              <span>Bisa Request Kombinasi Warna Kertas Wrap & Kartu Ucapan Custom</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
            <div className="p-4 sm:p-5 bg-[#FAF8F5] rounded-2xl border border-stone-200 hover:border-stone-300 transition">
              <span className="text-xl sm:text-2xl font-serif font-bold text-stone-900">100% Abadi</span>
              <p className="text-xs text-stone-500 mt-1">Bebas Air & Tanpa Perawatan</p>
            </div>
            <div className="p-4 sm:p-5 bg-[#FAF8F5] rounded-2xl border border-stone-200 hover:border-stone-300 transition">
              <span className="text-xl sm:text-2xl font-serif font-bold text-stone-900">Bebas Alergi</span>
              <p className="text-xs text-stone-500 mt-1">Aman Tanpa Serbuk Sari</p>
            </div>
            <div className="p-4 sm:p-5 bg-[#FAF8F5] rounded-2xl border border-stone-200 hover:border-stone-300 transition col-span-2 sm:col-span-1">
              <span className="text-xl sm:text-2xl font-serif font-bold text-stone-900">Custom Ready</span>
              <p className="text-xs text-stone-500 mt-1">Bebas Request Warna Wrap</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
