import { Pagination } from "@/interfaces/Pagination";
import { IProduct } from ".";

export interface IProductStore {
  isLoading: boolean;
  products: IProduct[];
  pagination: Pagination;
  fetchProducts: () => Promise<void>;
}
