'use client';

import { useState } from 'react';
import { Search, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  onSearchChange?: (term: string) => void;
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export function Navbar({ onSearchChange, activeCategory = 'all', onSelectCategory }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  // Menu navigasi yang bersih & relevan untuk website florist profesional
  const navLinks = [
    { label: 'Katalog Bunga', href: '#catalog', type: 'scroll' },
    { label: 'Tentang Studio & Pengiriman', href: '#delivery-info', type: 'scroll' },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchValue(val);
    if (onSearchChange) onSearchChange(val);
  };

  const handleClearSearch = () => {
    setSearchValue('');
    if (onSearchChange) onSearchChange('');
    setSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Micro Notice Bar */}
      <div className="bg-stone-900 text-stone-200 text-[11px] py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>Same-Day Delivery Siap Kirim Hari Ini • Free Custom Greeting Card & Box</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo Brand Asli Tanpa Shape Background */}
          <Link
            href="/"
            aria-label="Floréa Florist Home"
            className="flex items-center group focus:outline-none transition-transform duration-200 hover:scale-105 active:scale-95 shrink-0"
          >
            <div className="relative h-12 w-28 sm:h-14 sm:w-36">
              <Image
                src="/logo-transparent.png"
                alt="Floréa Florist Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Menu: Terstruktur & Relevan */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-stone-600">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-rose-600 transition-colors duration-150 py-1 border-b border-transparent hover:border-rose-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons: Search Icon + Pink Floral CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Search Icon Trigger: Murni Tanpa Shape Background, Warna Pink */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Cari bunga"
              className="p-2 text-[#E60067] hover:text-[#B80053] transition-colors duration-150 active:scale-95 shrink-0 focus:outline-none"
            >
              <Search className="w-5 h-5 stroke-[2.25]" />
            </button>

            {/* Direct WhatsApp Call to Action: Desktop Only */}
            <a
              href="https://wa.me/62895705032933?text=Halo%20Flor%C3%A9a%20Florist,%20saya%20ingin%20konsultasi%20pemesanan%20bunga"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#E60067] hover:bg-[#CC005A] text-white text-xs font-semibold tracking-wide transition-all duration-150 active:scale-[0.98] shadow-sm whitespace-nowrap"
            >
              <span>Konsultasi Florist</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>

            {/* Mobile Hamburger Menu Toggle: Murni Tanpa Shape Background, Warna Pink */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#E60067] hover:text-[#B80053] transition-colors duration-150 shrink-0 focus:outline-none"
              aria-label="Menu navigasi"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[2.25]" />
              ) : (
                <div className="space-y-1.5 w-5">
                  <span className="block h-0.5 w-full bg-[#E60067] rounded-full"></span>
                  <span className="block h-0.5 w-full bg-[#E60067] rounded-full"></span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Minimalist Expandable Search Bar on Icon Click */}
        {searchOpen && (
          <div className="py-3 border-t border-stone-200/80 animate-fadeIn">
            <div className="relative max-w-xl mx-auto flex items-center">
              <input
                type="text"
                placeholder="Cari buket mawar, tulip, anggrek, atau bloom box..."
                value={searchValue}
                onChange={handleSearchChange}
                className="w-full text-xs pl-9 pr-8 py-2.5 rounded-lg bg-white border border-stone-300 focus:outline-none focus:border-stone-900 transition shadow-2xs"
                autoFocus
              />
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3.5" />
              {searchValue && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-2.5 top-2.5 text-stone-400 hover:text-stone-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white/95 backdrop-blur-md px-4 py-4 space-y-2">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-xs font-semibold text-stone-800 hover:bg-stone-50"
            >
              {item.label}
            </a>
          ))}

          {/* Button Konsultasi Florist Khusus Mobile (Tepat di Bawah Menu Tentang Studio) */}
          <div className="pt-2">
            <a
              href="https://wa.me/62895705032933?text=Halo%20Flor%C3%A9a%20Florist,%20saya%20ingin%20konsultasi%20pemesanan%20bunga"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#E60067] hover:bg-[#CC005A] text-white text-xs font-semibold tracking-wide transition-all duration-150 active:scale-[0.98] shadow-sm"
            >
              <span>Konsultasi Florist</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
