import { MessageCircle, ArrowUpRight } from 'lucide-react';

export function StudioAndDeliverySection() {
  const whatsappUrl =
    'https://wa.me/62895705032933?text=Halo%20Flor%C3%A9a%20Florist,%20saya%20ingin%20konsultasi%20pemesanan%20buket%20custom';

  return (
    <section id="konsultasi" className="py-20 sm:py-28 bg-[#FCFBF9] border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Category/Context Label */}
        <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] text-[#E60067] uppercase mb-4">
          Layanan Kustomisasi Personal
        </p>

        {/* Clean Editorial Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-[42px] font-serif text-stone-900 tracking-tight leading-snug mb-4">
          Punya Rangkaian Impian atau Butuh Rekomendasi?
        </h2>

        {/* Clean Body Text */}
        <p className="text-xs sm:text-sm md:text-base text-stone-600 font-light leading-relaxed max-w-xl mx-auto mb-8">
          Diskusikan nuansa warna, jenis bunga sutra, hingga pesan kaligrafi kartu ucapan langsung bersama florist kami.
        </p>

        {/* Minimalist Tactile CTA Button */}
        <div className="flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#E60067] hover:bg-[#CC005A] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] shadow-sm hover:shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white stroke-[1.5]" />
            <span>Konsultasi Gratis</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </a>
        </div>
      </div>
    </section>
  );
}
