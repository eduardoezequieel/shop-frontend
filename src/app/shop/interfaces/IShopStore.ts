import { IProduct } from "@/app/dashboard/products/interfaces";
import { ICart } from ".";

export interface IShopStore {
  orders: ICart[];
  isLoading: boolean;
  cartIsShown: boolean;
  toggleCart: () => void;
  cart: IProduct[];
  addToCart: (productId: number) => void;
  deleteFromCart: (productId: number) => void;
  saveCart: () => Promise<void>;
  getOrdersByUser: () => Promise<void>;
}
