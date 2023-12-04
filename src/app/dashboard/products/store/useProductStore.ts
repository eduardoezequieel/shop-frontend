import { create } from "zustand";
import { IProductStore } from "../interfaces";
import { useNotificationStore } from "@/store";
import { getProducts } from ".";

export const useProductStore = create<IProductStore>((set) => {
  const { notificate } = useNotificationStore.getState();

  return {
    isLoading: false,
    products: [],
    pagination: {
      page: 1,
      pageSize: 10,
      pageCount: 1,
      total: 0,
    },
    fetchProducts: async () => {
      set({ isLoading: true });

      const { ok, data, notificationBody } = await getProducts();

      if (ok && data) {
        set({
          products: data.data,
          pagination: data.meta.pagination,
        });
      } else {
        notificate(notificationBody!);
      }

      set({ isLoading: false });
    },
  };
});
