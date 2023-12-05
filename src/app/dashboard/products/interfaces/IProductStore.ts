import { Pagination } from "@/interfaces/Pagination";
import { IProduct } from ".";

export interface IProductStore {
  isLoading: boolean;
  products: IProduct[];
  pagination: Pagination;
  selectedProduct: IProduct | null;
  productWasNotFound: boolean;
  setSelectedProduct: (id: number) => void;
  fetchProducts: () => Promise<void>;
  fetchProduct: (id: number) => Promise<void>;
  addProduct: (product: Partial<IProduct>) => Promise<void>;
  updateProduct: (product: Partial<IProduct>) => Promise<void>;
}
