import { MessageSquare, Calendar, Palette, ShieldCheck, ArrowRight } from 'lucide-react';

export function BespokeCustomSection() {
  return (
    <section id="bespoke-custom" className="py-12 sm:py-16 md:py-24 bg-stone-100/70 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#E60067]">
              Layanan Pesanan Khusus (Bespoke)
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-stone-900 tracking-tight leading-snug">
              Punya Preferensi Bunga Khusus atau Menyesuaikan Budget?
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Setiap momen punya cerita istimewa. Florist kami siap merangkai buket custom sesuai nuansa warna kesukaan penerima, paduan boneka wisuda, hingga bloom box untuk anniversary.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-stone-200 hover:border-stone-300 transition shadow-2xs">
                <Palette className="w-5 h-5 text-[#E60067] mb-2 stroke-[1.75]" />
                <h4 className="font-semibold text-xs text-stone-900 uppercase tracking-wide">
                  Palet Warna & Wrap Bebas
                </h4>
                <p className="text-xs text-stone-500 mt-1">
                  Pilih nuansa kertas wrap Korea, warna pita satin, dan bunga kesukaan.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-stone-200 hover:border-stone-300 transition shadow-2xs">
                <Calendar className="w-5 h-5 text-[#E60067] mb-2 stroke-[1.75]" />
                <h4 className="font-semibold text-xs text-stone-900 uppercase tracking-wide">
                  Jadwal Pengiriman Tepat
                </h4>
                <p className="text-xs text-stone-500 mt-1">
                  Bisa booking tanggal dan jam kirim kejutan untuk hari H istimewa.
                </p>
              </div>
            </div>
          </div>

          {/* Right Action Box */}
          <div className="lg:col-span-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-rose-50 border border-rose-200/80 flex items-center justify-center text-[#E60067] shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-base sm:text-lg text-stone-900">
                    Konsultasi Desain Buket Impian
                  </h3>
                  <p className="text-xs text-stone-500">
                    Respon ramah & cepat via WhatsApp langsung dengan Florist
                  </p>
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                Ceritakan budget atau foto referensi yang Anda sukai. Kami akan memberikan 2-3 rekomendasi paduan warna dan jenis bunga dengan estimasi harga yang transparan.
              </p>

              <a
                href="https://wa.me/62895705032933?text=Halo%20Flor%C3%A9a%20Florist,%20saya%20ingin%20konsultasi%20rangkaian%20buket%20custom%20(budget/tema%20khusus)"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-[#E60067] hover:bg-[#CC005A] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-150 active:scale-[0.98] shadow-sm hover:shadow-md"
              >
                <span>Mulai Konsultasi WhatsApp Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
