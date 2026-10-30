import { createClient } from './client';

export const BUCKET_NAME = 'florea-products';

/**
 * Upload gambar produk ke Supabase Storage
 * @param file File binary dari input form
 * @param pathName path atau nama file khusus (opsional)
 * @returns public URL dari gambar yang diupload
 */
export async function uploadProductImage(file: File, pathName?: string): Promise<string> {
  const supabase = createClient();
  const fileExt = file.name.split('.').pop();
  const fileName = pathName || `product-${Date.now()}-${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
  const filePath = `uploads/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: true,
    });

  if (uploadError) {
    console.error('Storage Upload Error:', uploadError.message);
    throw new Error(uploadError.message);
  }

  // Ambil URL Publik
  const { data } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(filePath);

  return data.publicUrl;
}

/**
 * Helper untuk mendapatkan public URL langsung berdasarkan filePath
 */
export function getProductImageUrl(filePath: string): string {
  const supabase = createClient();
  const { data } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(filePath);
  return data.publicUrl;
}
