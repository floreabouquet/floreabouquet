import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProductById, getProducts } from '@/lib/supabase/products';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import ProductDetailClient from '@/components/ProductDetailClient';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// Revalidasi dinamis agar produk baru langsung bisa dibuka
export const revalidate = 0;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return {
      title: 'Produk Tidak Ditemukan | Floréa Florist',
    };
  }

  return {
    title: `${product.name} | Floréa Florist`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  const allProducts = await getProducts();
  const relatedProducts = allProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Navbar />

      <main className="flex-grow">
        <ProductDetailClient product={product} relatedProducts={relatedProducts} />
      </main>

      <Footer />
    </div>
  );
}
