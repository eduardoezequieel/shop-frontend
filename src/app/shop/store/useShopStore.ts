import { create } from "zustand";
import { IShopStore } from "../interfaces/IShopStore";
import { useProductStore } from "@/app/dashboard/products/store";
import { useAuthStore, useNotificationStore } from "@/store";
import { getOrdersByUser, saveOrder } from ".";

export const useShopStore = create<IShopStore>((set, get) => {
  const { notificate } = useNotificationStore.getState();
  return {
    isLoading: false,
    cartIsShown: false,
    orders: [],
    cart: [],
    toggleCart: () => set((state) => ({ cartIsShown: !state.cartIsShown })),
    addToCart: (productId) => {
      const { products } = useProductStore.getState();
      const { cart } = get();

      if (cart.find((product) => product.id === productId)) {
        notificate({
          type: "warning",
          message: "Warning",
          description: "Product already in cart",
        });

        return;
      }

      const product = products.find((product) => product.id === productId);

      if (product) {
        set((state) => ({ cart: [...state.cart, product] }));
      }
    },
    deleteFromCart: (productID) => {
      set((state) => ({
        cart: state.cart.filter((product) => product.id !== productID),
      }));
    },

    saveCart: async () => {
      set({ isLoading: true });

      const { user } = useAuthStore.getState();
      const { cart } = get();

      const cartIds = cart.map((product) => product.id);

      const { ok, notificationBody } = await saveOrder(user!.id, cartIds);

      if (ok) {
        set({ cart: [], isLoading: false });
        notificate({
          type: "success",
          message: "Success",
          description: "Cart saved successfully",
        });

        get().toggleCart();
      } else {
        notificate(notificationBody!);
        set({ isLoading: false });
      }
    },

    getOrdersByUser: async () => {
      set({ isLoading: true });

      const { user } = useAuthStore.getState();

      const { ok, notificationBody, data } = await getOrdersByUser(user!.id);

      if (ok) {
        set({ orders: data, isLoading: false });

        console.log(data);
      } else {
        notificate(notificationBody!);
        set({ isLoading: false });
      }
    },
  };
});
