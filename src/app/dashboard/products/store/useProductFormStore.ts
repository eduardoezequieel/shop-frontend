import { create } from "zustand";
import { IProductFormStore } from "../interfaces";
import { useProductStore } from ".";

export const useProductFormStore = create<IProductFormStore>((set) => ({
  isModalOpen: false,
  modalTitle: "Add a new product",
  modalMode: "add",
  openModal: (modalMode, title, id) => {
    set({ modalMode, modalTitle: title });
    set({ isModalOpen: true });

    if (id) {
      const { setSelectedProduct } = useProductStore.getState();
      setSelectedProduct(id);
    }
  },
  closeModal: () => set({ isModalOpen: false }),
}));
