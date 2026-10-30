import { MessageSquare, Calendar, Palette, ShieldCheck, ArrowRight } from 'lucide-react';

export function BespokeCustomSection() {
  return (
    <section id="bespoke-custom" className="py-16 md:py-24 bg-stone-100/70 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-rose-800">
              Bespoke Floristry Service
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight leading-snug">
              Punya Preferensi Bunga Khusus atau Budget Tertentu?
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Kami menyadari setiap momen memiliki makna personal yang unik. Florist profesional kami siap merangkai bunga custom sesuai warna kesukaan penerima, jenis bunga langka, hingga dekorasi meja makan private dinner.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <Palette className="w-5 h-5 text-rose-700 mb-2 stroke-[1.75]" />
                <h4 className="font-semibold text-xs text-stone-900 uppercase tracking-wide">
                  Palet Warna Bebas
                </h4>
                <p className="text-xs text-stone-500 mt-1">
                  Pilih kombinasi warna wrap, pita satin, dan nuansa bunga.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <Calendar className="w-5 h-5 text-rose-700 mb-2 stroke-[1.75]" />
                <h4 className="font-semibold text-xs text-stone-900 uppercase tracking-wide">
                  Jadwal Khusus
                </h4>
                <p className="text-xs text-stone-500 mt-1">
                  Atur jam pengantaran kejutan di hari ulang tahun atau anniversary.
                </p>
              </div>
            </div>
          </div>

          {/* Right Action Box */}
          <div className="lg:col-span-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200/80 flex items-center justify-center text-rose-700 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-lg text-stone-900">
                    Konsultasi Desain dengan Florist Kami
                  </h3>
                  <p className="text-xs text-stone-500">
                    Respon cepat dalam hitungan menit via WhatsApp
                  </p>
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                Ceritakan tema acara atau budget Anda, florist kami akan memberikan 2-3 rekomendasi sketsa kombinasi bunga segar lengkap dengan estimasi harga transparan.
              </p>

              <a
                href="https://wa.me/62895705032933?text=Halo%20Flor%C3%A9a%20Florist,%20saya%20ingin%20konsultasi%20rangkaian%20buket%20custom%20(budget/tema%20khusus)"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-lg bg-[#E60067] hover:bg-[#CC005A] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-150 active:scale-[0.98] shadow-sm"
              >
                <span>Mulai Konsultasi WhatsApp Gratis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
