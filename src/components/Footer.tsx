import Image from 'next/image';
import { MapPin, Clock, Phone, ShieldCheck, HeartHandshake } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info (Col 5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="relative h-12 w-32">
              <Image
                src="/logo-transparent.png"
                alt="Floréa Florist Logo"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Studio perangkai buket bunga buatan (artificial) & preserved flower. Tahan selamanya, tanpa repot perawatan, dengan tampilan elegan menyerupai bunga asli.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-stone-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-rose-400" />
                <span>Bunga Artificial Premium</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-rose-400" />
                <span>Bisa Kirim Se-Indonesia</span>
              </div>
            </div>
          </div>

          {/* Quick Nav (Col 3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Koleksi Favorit
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#catalog" className="hover:text-white transition">Buket Silk Peony & Rose</a></li>
              <li><a href="#catalog" className="hover:text-white transition">Everlasting Bloom Box</a></li>
              <li><a href="#catalog" className="hover:text-white transition">Buket Bunga Wisuda</a></li>
              <li><a href="#bespoke-custom" className="hover:text-white transition">Custom Warna Wrap & Pita</a></li>
            </ul>
          </div>

          {/* Studio & Order Info (Col 4) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Pemesanan & Konsultasi
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Studio Pembuatan: Pengiriman instan & ekspedisi ke seluruh Indonesia dengan packing aman.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Jam Layanan Chat: 08.30 - 21.00 WIB setiap hari.</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/62895705032933?text=Halo%20Flor%C3%A9a%20Florist,%20saya%20ingin%20tanya%20informasi%20pemesanan%20buket"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#E60067] hover:bg-[#CC005A] text-white text-xs font-semibold transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Chat WhatsApp Admin</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Florea Bouquet. All rights reserved.</p>
          <p className="text-stone-400">
            Crafted for lasting memories • Anti-AI Slop Minimalist Design.
          </p>
        </div>

      </div>
    </footer>
  );
}
