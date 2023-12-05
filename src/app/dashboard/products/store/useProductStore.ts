import { create } from "zustand";
import { IProductStore } from "../interfaces";
import { uploadFile, useNotificationStore } from "@/store";
import { createProduct, editProduct, getProduct, getProducts } from ".";
import { useProductFormStore } from "./useProductFormStore";

export const useProductStore = create<IProductStore>((set, get) => {
  const { notificate } = useNotificationStore.getState();

  return {
    isLoading: false,
    productWasNotFound: false,
    products: [],
    selectedProduct: null,
    pagination: {
      page: 1,
      pageSize: 10,
      pageCount: 1,
      total: 0,
    },
    fetchProduct: async (id) => {
      const { products } = get();

      if (products.length > 0) {
        const product = products.find((product) => product.id === id);

        if (product) {
          set({ selectedProduct: product });
          return;
        } else {
          set({ productWasNotFound: true });
          return;
        }
      }

      set({ isLoading: true });

      const { ok, data } = await getProduct(id);

      if (ok && data) {
        set({ selectedProduct: data });
      } else {
        set({ productWasNotFound: true });
      }

      set({ isLoading: false });
    },
    setSelectedProduct: (id) => {
      const product = get().products.find((product) => product.id === id);
      if (!product) return;

      set({ selectedProduct: product });
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

    addProduct: async (product) => {
      const { closeModal } = useProductFormStore.getState();
      set({ isLoading: true });

      const imageResponse = await uploadFile(product.image as File);

      if (!imageResponse.ok) {
        notificate(imageResponse.notificationBody!);
        set({ isLoading: false });
        return;
      }

      const { ok, notificationBody } = await createProduct(
        product,
        imageResponse.data!.id
      );

      if (!ok) {
        notificate(notificationBody!);
        set({ isLoading: false });
        return;
      } else {
        set({ isLoading: false });
      }

      notificate({
        type: "success",
        message: "Success",
        description: "Product added successfully",
      });

      closeModal();

      get().fetchProducts();
    },
    updateProduct: async (product) => {
      const { closeModal } = useProductFormStore.getState();
      set({ isLoading: true });

      let imageId;

      if (product?.image) {
        const imageResponse = await uploadFile(product.image as File);

        if (!imageResponse.ok) {
          notificate(imageResponse.notificationBody!);
          set({ isLoading: false });
          return;
        }

        imageId = imageResponse.data!.id;
      }

      const { ok, notificationBody } = await editProduct(
        product,
        get().selectedProduct!.id!,
        imageId
      );

      if (!ok) {
        notificate(notificationBody!);
        set({ isLoading: false });
        return;
      } else {
        set({ isLoading: false });
      }

      notificate({
        type: "success",
        message: "Success",
        description: "Product updated successfully",
      });

      closeModal();

      get().fetchProducts();
    },
  };
});
