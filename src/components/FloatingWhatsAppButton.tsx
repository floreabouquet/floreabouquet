'use client';

import { MessageCircle } from 'lucide-react';

export function FloatingWhatsAppButton() {
  const whatsappUrl =
    'https://wa.me/62895705032933?text=Halo%20Flor%C3%A9a%20Florist,%20saya%20ingin%20konsultasi%20pemesanan%20bunga';

  return (
    <aside aria-label="WhatsApp Chat" className="fixed bottom-6 right-6 z-40 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Florea Florist"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#E60067] hover:bg-[#CC005A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 ease-tactile"
      >
        <MessageCircle className="w-5 h-5 fill-white stroke-[1.5]" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          Chat WhatsApp
        </span>
      </a>
    </aside>
  );
}
