'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Product } from '@/data/products';
import {
  getProducts as fetchProductsFromSupabase,
  createProduct as createProductInSupabase,
  updateProduct as updateProductInSupabase,
  deleteProduct as deleteProductInSupabase,
} from '@/lib/supabase/products';

interface AdminContextType {
  products: Product[];
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  addProduct: (product: Omit<Product, 'id'>) => Promise<void>;
  updateProduct: (id: string, product: Partial<Product>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  refreshProducts: () => Promise<void>;
}

const STORAGE_KEY_AUTH = 'florea_admin_auth';
const ADMIN_SECRET = 'admin123';

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Ambil data langsung dari Supabase
  const refreshProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchProductsFromSupabase();
      setProducts(data);
    } catch (err) {
      console.error('Failed to load products:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    try {
      const storedAuth = localStorage.getItem(STORAGE_KEY_AUTH);
      if (storedAuth === 'true') {
        setIsAuthenticated(true);
      }
    } catch {
      // Ignore
    }
    refreshProducts();
  }, [refreshProducts]);

  const login = (password: string): boolean => {
    if (password === ADMIN_SECRET) {
      setIsAuthenticated(true);
      localStorage.setItem(STORAGE_KEY_AUTH, 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(STORAGE_KEY_AUTH);
  };

  // CRUD Supabase
  const addProduct = async (newProd: Omit<Product, 'id'>) => {
    try {
      const created = await createProductInSupabase(newProd);
      if (created) {
        setProducts((prev) => [created, ...prev]);
      }
    } catch (err) {
      console.error('Error adding product:', err);
      throw err;
    }
  };

  const updateProduct = async (id: string, updatedFields: Partial<Product>) => {
    try {
      const updated = await updateProductInSupabase(id, updatedFields);
      if (updated) {
        setProducts((prev) =>
          prev.map((item) => (item.id === id ? updated : item))
        );
      }
    } catch (err) {
      console.error('Error updating product:', err);
      throw err;
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      await deleteProductInSupabase(id);
      setProducts((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error('Error deleting product:', err);
      throw err;
    }
  };

  return (
    <AdminContext.Provider
      value={{
        products,
        isLoading,
        isAuthenticated,
        login,
        logout,
        addProduct,
        updateProduct,
        deleteProduct,
        refreshProducts,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
