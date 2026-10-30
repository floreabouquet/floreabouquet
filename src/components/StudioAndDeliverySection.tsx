import { ShieldCheck, Sparkles, Send, Heart, PackageCheck, Palette } from 'lucide-react';

export function StudioAndDeliverySection() {
  return (
    <section id="delivery-info" className="py-16 md:py-24 border-t border-stone-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-rose-800 block mb-1">
            Kelebihan Bunga Artificial
          </span>
          <h2 className="text-3xl font-serif font-medium text-stone-900 tracking-tight">
            Kenapa Memilih Buket Bunga Buatan Florea?
          </h2>
          <p className="text-stone-600 text-sm mt-2 leading-relaxed">
            Menghadirkan keindahan visual bunga asli dengan ketahanan abadi tanpa repot perawatan.
          </p>
        </div>

        {/* 3 Keunggulan Utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-stone-200">
          <div className="space-y-3">
            <span className="text-xs font-mono font-semibold text-rose-800">01 / ABADI & MEMORI</span>
            <h3 className="text-base font-serif font-semibold text-stone-900">
              Kenang-Kenangan Seumur Hidup
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Buket wisuda dan hadiah anniversary Anda tidak akan layu atau berubah warna, menjadi pajangan indah di kamar tidur atau meja kantor.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-mono font-semibold text-rose-800">02 / MATERIAL PREMIUM</span>
            <h3 className="text-base font-serif font-semibold text-stone-900">
              Sentuhan Sutra & Velvet Halus
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Dibuat dari kain silk bermutu tinggi dengan gradasi kelopak alami, tidak terlihat kaku atau plastik murahan.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-mono font-semibold text-rose-800">03 / AMAN PENGIRIMAN</span>
            <h3 className="text-base font-serif font-semibold text-stone-900">
              Kirim ke Luar Kota Bebas Khawatir
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Dikemas dalam boks kokoh dengan proteksi anti-penyok, siap dikirim ke seluruh Indonesia tanpa risiko layu.
            </p>
          </div>
        </div>

        {/* Tentang Studio Florea */}
        <div id="about-studio" className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Tentang Studio Kami
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-stone-900 mt-1 mb-4">
              Florea Bouquet Studio
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
              Florea Bouquet adalah studio perangkai buket bunga buatan (artificial) & preserved flower terkurasi. Kami memadukan seni wrapping Korea yang minimalis dengan bunga silk premium untuk memberikan kado istimewa yang tak lekang oleh waktu.
            </p>
            <div className="flex items-center gap-3 text-xs font-medium text-stone-800">
              <ShieldCheck className="w-4 h-4 text-rose-800" />
              <span>Bisa Request Kombinasi Warna Kertas Wrap & Tambahan Boneka Wisuda</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <span className="text-2xl font-serif font-bold text-stone-900">Abadi</span>
              <p className="text-xs text-stone-500 mt-1">Tanpa Butuh Air</p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <span className="text-2xl font-serif font-bold text-stone-900">Bebas Alergi</span>
              <p className="text-xs text-stone-500 mt-1">Aman & Tanpa Serbuk Sari</p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 col-span-2 sm:col-span-1">
              <span className="text-2xl font-serif font-bold text-stone-900">Custom Ready</span>
              <p className="text-xs text-stone-500 mt-1">Bebas Pilih Warna Wrap</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
