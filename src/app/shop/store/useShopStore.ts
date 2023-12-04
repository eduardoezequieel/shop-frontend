import { create } from "zustand";
import { IShopStore } from "../interfaces/IShopStore";

export const useShopStore = create<IShopStore>((set) => ({
  cartIsShown: false,
  toggleCart: () => set((state) => ({ cartIsShown: !state.cartIsShown })),
}));
