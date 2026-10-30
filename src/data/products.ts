export interface Product {
  id: string;
  name: string;
  category: 'artificial' | 'preserved' | 'bloombox' | 'graduation';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  image: string;
  gallery?: string[];
  isPopular?: boolean;
  material: string;
  durability: string;
  description: string;
  inStock?: boolean;
  rating?: number;
  reviewCount?: number;
  sku?: string;
  sizes?: { id: string; name: string; price: number }[];
  colors?: { name: string; value: string }[];
  details?: {
    flowerType?: string;
    bouquetSize?: string;
    arrangementStyle?: string;
    packaging?: string;
    occasion?: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: 'blush-silk-peony',
    name: 'Blush Velvet Silk Peony & Rose',
    category: 'artificial',
    categoryLabel: 'Artificial Bouquet',
    price: 245000,
    originalPrice: 285000,
    isPopular: true,
    material: 'Premium Silk & Velvet Touch',
    durability: 'Abadi / Tidak Layu',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=85',
    ],
    description: 'Buket bunga tiruan premium berbahan kain silk halus dengan gradasi warna blush natural. Tahan selamanya sebagai kenang-kenangan manis tanpa perlu disiram air.',
  },
  {
    id: 'timeless-white-hydrangea',
    name: 'Timeless White Botanical Ensemble',
    category: 'artificial',
    categoryLabel: 'Artificial Bouquet',
    price: 220000,
    material: 'Textured Fabric & Real Touch Stem',
    durability: 'Abadi / Anti Rontok',
    image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=900&q=85',
    ],
    description: 'Rangkaian artificial hydrangea putih bersih dipadu baby breath tiruan bertekstur matte. Dibungkus kertas wrap ala Korean minimalis.',
  },
  {
    id: 'everlasting-rose-casket',
    name: 'Everlasting Preserved Rose Box',
    category: 'bloombox',
    categoryLabel: 'Bloom Box',
    price: 360000,
    isPopular: true,
    material: 'Preserved & Artificial Accent',
    durability: 'Tahan 3-5 Tahun',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=85',
    ],
    description: 'Mawar artificial berkualitas tinggi dalam silinder luxury round box hitam beraksen pita satin emas. Sangat elegan untuk hadiah meja kerja.',
  },
  {
    id: 'graduation-sunflower-joy',
    name: 'Graduation Golden Artificial Sunflower',
    category: 'graduation',
    categoryLabel: 'Graduation Bouquet',
    price: 195000,
    material: 'High-Grade Artificial Silk',
    durability: 'Abadi & Ringan',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=900&q=85',
    ],
    description: 'Bunga matahari buatan warna cerah melambangkan kesuksesan, siap dibawa foto wisuda seharian tanpa risiko layu atau patah.',
  },
  {
    id: 'korean-tulip-pastel',
    name: 'Korean Pastel Silk Tulip Melody',
    category: 'artificial',
    categoryLabel: 'Artificial Bouquet',
    price: 210000,
    originalPrice: 240000,
    isPopular: true,
    material: 'Real-Touch Polyurethane & Silk Leaf',
    durability: 'Abadi / Fleksibel',
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=85',
    ],
    description: 'Buket tulip artificial bernuansa pastel lembut ala florist Seoul. Batang fleksibel dengan kelopak elastis yang tidak mudah lecek.',
  },
  {
    id: 'lavender-eucalyptus-box',
    name: 'French Lavender & Silk Bloom Box',
    category: 'bloombox',
    categoryLabel: 'Bloom Box',
    price: 315000,
    material: 'Dried Lavender & Premium Silk Rose',
    durability: 'Abadi & Wangi Ringan',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=85',
    ],
    description: 'Kombinasi bunga silk rose dan dried lavender aromatik dalam kotak keranjang estetik. Menghias sudut meja kerja dengan nuansa damai.',
  },
  {
    id: 'vintage-autumn-rose',
    name: 'Autumn Terracotta Garden Bouquet',
    category: 'artificial',
    categoryLabel: 'Artificial Bouquet',
    price: 265000,
    material: 'Silk Flower & Preserved Foliage',
    durability: 'Abadi / Anti Pudar',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=900&q=85',
    ],
    description: 'Perpaduan mawar artificial bernuansa terracotta, burnt orange, dan daun eucalyptus kering untuk kesan rustic elegan yang hangat.',
  },
  {
    id: 'deluxe-graduation-bear-rose',
    name: 'Deluxe Graduation Teddy & Silk Rose',
    category: 'graduation',
    categoryLabel: 'Graduation Bouquet',
    price: 250000,
    originalPrice: 290000,
    isPopular: true,
    material: 'Plush Doll & Premium Silk Rose',
    durability: 'Abadi / Kenangan Wisuda',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=900&q=85',
    ],
    description: 'Buket wisuda komplit dengan boneka toga mini berbulu lembut dan mawar artificial abadi, lengkap dengan selempang nama custom.',
  }
];

export const CATEGORIES = [
  {
    id: 'artificial',
    title: 'Buket Bunga Artificial',
    subtitle: 'Abadi & Tahan Selamanya',
    description: 'Kelopak kain sutra & velvet dengan sentuhan visual realistis menyerupai bunga asli.',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=85',
    tag: 'Paling Diminati',
  },
  {
    id: 'bloombox',
    title: 'Everlasting Bloom Box',
    subtitle: 'Elegan Untuk Dekorasi Meja',
    description: 'Rangkaian mawar buatan dalam kotak mewah tahan lama tanpa perlu perawatan.',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=900&q=85',
    tag: 'Long Lasting Gift',
  },
  {
    id: 'graduation',
    title: 'Buket Wisuda & Momen Spesial',
    subtitle: 'Ringan & Anti Rontok',
    description: 'Pilihan buket praktis untuk foto kelulusan, anniversary, dan hadiah kado sahabat.',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=900&q=85',
    tag: 'Photo Ready',
  },
];
