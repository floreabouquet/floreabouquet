'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  Minus,
  Plus,
  MessageCircle,
  Share2,
  Check,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { Product } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  // Gallery images: fallback ke 3 variasi gambar jika belum diset agar selalu ada 3 slide
  const images = product.gallery && product.gallery.length >= 3
    ? product.gallery.slice(0, 3)
    : [
        product.image,
        'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=85'
      ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const selectedImage = images[currentSlideIndex];

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    product.colors && product.colors.length > 0 ? product.colors[0].name : 'Default'
  );
  const [cardMessage, setCardMessage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'description' | 'shipping'>('details');
  const [copiedLink, setCopiedLink] = useState(false);

  // Sizes logic
  const sizes = product.sizes && product.sizes.length > 0 ? product.sizes : [
    { id: 'standard', name: 'Standard', price: product.price },
    { id: 'deluxe', name: 'Deluxe (+Rp 50.000)', price: product.price + 50000 },
    { id: 'premium', name: 'Premium (+Rp 100.000)', price: product.price + 100000 },
  ];

  const currentPrice = sizes[selectedSizeIndex]?.price || product.price;

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleOrderWhatsApp = () => {
    const phoneNumber = '62895705032933'; // CS WhatsApp
    const selectedSizeName = sizes[selectedSizeIndex]?.name || 'Standard';

    const message = `Halo Floréa Florist, saya ingin memesan buket berikut:

*PRODUK*: ${product.name}
• *Kategori*: ${product.categoryLabel}
• *Ukuran*: ${selectedSizeName}
${product.colors ? `• *Warna Rangkaian*: ${selectedColor}\n` : ''}• *Jumlah*: ${quantity} buket
• *Estimasi Total*: ${formatPrice(currentPrice * quantity)}
${cardMessage.trim() ? `• *Pesan Kartu*: "${cardMessage.trim()}"\n` : '• *Pesan Kartu*: (Tanpa kartu / kosong)\n'}
Link: ${typeof window !== 'undefined' ? window.location.href : ''}

Mohon info ketersediaan slot dan jadwal pengirimannya. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-stone-500 mb-5 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-stone-900 transition flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Beranda
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-300" />
        <Link href="/#catalog" className="hover:text-stone-900 transition">
          Katalog
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-300" />
        <span className="text-stone-900 font-medium truncate max-w-[200px] sm:max-w-xs">{product.name}</span>
      </nav>

      {/* Main Section: 2 Columns yang proporsional dan pas di layar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 mb-12 items-start">
        
        {/* Left Column: Image Gallery Slider (5 cols desktop, ukuran pas & compact) */}
        <div className="md:col-span-5 flex flex-col gap-2.5 max-w-md mx-auto md:max-w-none w-full">
          {/* Main Photo Showcase dengan tinggi terkontrol agar pas di viewport desktop */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/4] lg:aspect-[4/4] max-h-[380px] bg-stone-100 rounded-2xl overflow-hidden border border-stone-200/80 shadow-2xs group">
            <Image
              src={selectedImage}
              alt={`${product.name} - Foto ${currentSlideIndex + 1}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 380px"
              className="object-cover transition-opacity duration-300"
            />

            {/* Badge Populer */}
            {product.isPopular && (
              <span className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded tracking-wider uppercase z-10">
                Favorit
              </span>
            )}

            {/* Indikator Slide */}
            <div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
              {currentSlideIndex + 1} / {images.length}
            </div>

            {/* Arrow Prev Button */}
            <button
              type="button"
              onClick={handlePrevSlide}
              aria-label="Foto Sebelumnya"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 hover:bg-white text-stone-800 flex items-center justify-center shadow-md transition-all opacity-90 sm:opacity-0 group-hover:opacity-100 active:scale-90 z-10 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Arrow Next Button */}
            <button
              type="button"
              onClick={handleNextSlide}
              aria-label="Foto Selanjutnya"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 hover:bg-white text-stone-800 flex items-center justify-center shadow-md transition-all opacity-90 sm:opacity-0 group-hover:opacity-100 active:scale-90 z-10 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Frame Thumbnail di bawah Foto Utama yang compact & proporsional */}
          <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlideIndex(idx)}
                className={`relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-150 cursor-pointer group/thumb ${
                  currentSlideIndex === idx
                    ? 'border-[#E60067] shadow-xs ring-1 ring-[#E60067]/30 scale-[1.01]'
                    : 'border-stone-200/90 hover:border-stone-400 opacity-60 hover:opacity-100'
                }`}
                aria-label={`Lihat Slide Foto ${idx + 1}`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail Frame ${idx + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover transition-transform duration-200 group-hover/thumb:scale-105"
                />
                {currentSlideIndex === idx && (
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-[#E60067]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Product Detail & Ordering (7 cols) */}
        <div className="md:col-span-7 flex flex-col justify-start">
          {/* Category & Durability Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="text-[11px] uppercase font-semibold tracking-wider text-[#E60067]">
              {product.categoryLabel}
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">
              {product.durability}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-stone-900 mb-2 tracking-tight">
            {product.name}
          </h1>

          {/* Rating & Review */}
          <div className="flex items-center gap-1.5 mb-3 text-xs text-stone-500">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-stone-800">4.9</span>
            <span>(245 Ulasan Terverifikasi)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2.5 mb-4 pb-4 border-b border-stone-200/80">
            <span className="text-2xl sm:text-3xl font-semibold text-stone-900">
              {formatPrice(currentPrice * quantity)}
            </span>
            {product.originalPrice && (
              <span className="text-xs sm:text-sm text-stone-400 line-through">
                {formatPrice(product.originalPrice * quantity)}
              </span>
            )}
            {quantity > 1 && (
              <span className="text-xs text-stone-500">
                ({formatPrice(currentPrice)} / buket)
              </span>
            )}
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
            {product.description}
          </p>

          {/* Size Options */}
          <div className="mb-4">
            <label className="block text-[11px] font-semibold text-stone-900 uppercase tracking-wider mb-2">
              Pilihan Ukuran Buket
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
              {sizes.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedSizeIndex(idx)}
                  className={`p-2.5 sm:p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    selectedSizeIndex === idx
                      ? 'border-[#E60067] bg-[#E60067]/5 ring-1 ring-[#E60067]'
                      : 'border-stone-200 bg-white hover:border-stone-300'
                  }`}
                >
                  <span className="text-xs font-semibold text-stone-900 mb-0.5">{s.name}</span>
                  <span className="text-[10px] sm:text-[11px] text-stone-500">{formatPrice(s.price)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Color Options (if exists) */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-4">
              <label className="block text-[11px] font-semibold text-stone-900 uppercase tracking-wider mb-1.5">
                Pilihan Nuansa Warna: <span className="text-stone-600 font-normal">{selectedColor}</span>
              </label>
              <div className="flex items-center gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-7 h-7 rounded-full border-2 transition cursor-pointer flex items-center justify-center ${
                      selectedColor === c.name ? 'border-[#E60067] scale-110' : 'border-stone-300'
                    }`}
                    style={{ backgroundColor: c.value }}
                    title={c.name}
                  >
                    {selectedColor === c.name && (
                      <Check className="w-3 h-3 text-white drop-shadow-sm" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Card Message Input */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="card-msg" className="text-[11px] font-semibold text-stone-900 uppercase tracking-wider">
                Kartu Ucapan Florist (Free)
              </label>
              <span className="text-[10px] text-stone-400">Termasuk amplop & wax seal</span>
            </div>
            <textarea
              id="card-msg"
              rows={2}
              value={cardMessage}
              onChange={(e) => setCardMessage(e.target.value)}
              placeholder="Tulis pesan manis di sini (contoh: Happy Graduation Sarah, sukses selalu!)..."
              className="w-full text-xs p-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#E60067] focus:ring-1 focus:ring-[#E60067] bg-white resize-none transition"
            />
          </div>

          {/* Quantity & CTA Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-3 border-t border-stone-200/80 mb-4">
            {/* Quantity Selector */}
            <div className="flex items-center border border-stone-200 rounded-xl bg-white p-0.5 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-stone-100 text-stone-700 transition"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-9 text-center text-xs font-semibold text-stone-900">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-stone-100 text-stone-700 transition"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Tombol Pesan via WhatsApp */}
            <button
              onClick={handleOrderWhatsApp}
              className="flex-1 py-3 px-5 rounded-xl bg-[#E60067] hover:bg-[#CC005A] text-white text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition duration-150 active:scale-[0.98] shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Pesan Sekarang via WhatsApp</span>
            </button>

            {/* Share / Copy Link */}
            <button
              onClick={handleCopyLink}
              title="Bagikan Tautan Produk"
              className="p-3 rounded-xl border border-stone-200 hover:border-stone-300 text-stone-700 bg-white transition flex items-center justify-center active:scale-95 cursor-pointer shrink-0 self-end sm:self-auto"
            >
              {copiedLink ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/70 text-[11px] text-stone-600">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E60067] shrink-0" />
              <span>Garansi bentuk persis katalog</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E60067] shrink-0" />
              <span>Siap kirim same-day express</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs: Specifications & Information (Mirip Gambar 2) */}
      <div className="mb-16 border border-stone-200/90 rounded-2xl bg-white overflow-hidden shadow-2xs">
        {/* Tab Headers */}
        <div className="flex border-b border-stone-200/90 bg-stone-50/50">
          <button
            onClick={() => setActiveTab('details')}
            className={`py-3.5 px-6 text-xs font-semibold transition border-b-2 -mb-px cursor-pointer ${
              activeTab === 'details'
                ? 'border-[#E60067] text-[#E60067] bg-white'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            Informasi Tambahan (Spesifikasi)
          </button>
          <button
            onClick={() => setActiveTab('description')}
            className={`py-3.5 px-6 text-xs font-semibold transition border-b-2 -mb-px cursor-pointer ${
              activeTab === 'description'
                ? 'border-[#E60067] text-[#E60067] bg-white'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            Deskripsi Lengkap
          </button>
          <button
            onClick={() => setActiveTab('shipping')}
            className={`py-3.5 px-6 text-xs font-semibold transition border-b-2 -mb-px cursor-pointer ${
              activeTab === 'shipping'
                ? 'border-[#E60067] text-[#E60067] bg-white'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            Pengiriman & Studio
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'details' && (
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <tbody>
                  <tr className="border-b border-stone-100">
                    <td className="py-2.5 text-stone-500 font-medium w-1/3">Tipe Bunga</td>
                    <td className="py-2.5 text-stone-900 font-semibold">{product.categoryLabel} ({product.material})</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-2.5 text-stone-500 font-medium">Ketahanan Rangkaian</td>
                    <td className="py-2.5 text-stone-900 font-semibold">{product.durability}</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-2.5 text-stone-500 font-medium">Gaya Rangkaian</td>
                    <td className="py-2.5 text-stone-900 font-semibold">Korean Modern Floral Style</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-2.5 text-stone-500 font-medium">Kemasan / Packaging</td>
                    <td className="py-2.5 text-stone-900 font-semibold">Eco-Friendly Premium Wrapping Paper & Ribbon Finish</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-stone-500 font-medium">Rekomendasi Acara</td>
                    <td className="py-2.5 text-stone-900 font-semibold">Wisuda, Ulang Tahun, Anniversary, Kado Sahabat & Lamaran</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'description' && (
            <div className="text-xs text-stone-600 space-y-3 leading-relaxed max-w-3xl">
              <p>{product.description}</p>
              <p>
                Semua rangkaian dibuat secara handmade oleh florist berpengalaman Floréa Florist. 
                Kami memastikan setiap helai kelopak tertata rapi, kokoh, dan tahan benturan saat proses pengiriman motor/mobil express.
              </p>
              <p>
                Buket buatan tidak memerlukan perawatan air khusus, cukup bersihkan debu halus dengan kuas atau hembusan udara secara berkala.
              </p>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="text-xs text-stone-600 space-y-3 leading-relaxed max-w-3xl">
              <p>
                <strong>Pengiriman Instan & Sameday:</strong> Siap dikirim melalui Gosend / GrabExpress setiap hari mulai pukul 09.00 - 19.00 WIB.
              </p>
              <p>
                <strong>Free Kartu Ucapan:</strong> Silakan ketik isi pesan pada form di atas saat pemesanan WhatsApp agar langsung kami cetak dan sematkan.
              </p>
              <p>
                <strong>Pengambilan Langsung di Studio:</strong> Anda juga dapat mengambil langsung pesanan buket di workshop Floréa Florist setelah konfirmasi via WhatsApp.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section (Mirip Bagian Bawah Gambar 2) */}
      {relatedProducts.length > 0 && (
        <section className="pt-8 border-t border-stone-200/80">
          <div className="flex flex-col mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#E60067] mb-1">
              Produk Terkait
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-medium text-stone-900">
              Koleksi Serupa Pilihan Florist
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}