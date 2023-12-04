import { create } from "zustand";
import { IProductForm } from "../interfaces";

export const useProductForm = create<IProductForm>((set) => ({
  isModalOpen: false,
  isLoading: false,
  modalTitle: "Add a new product",
  modalMode: "add",
  openModal: (modalMode, title) => {
    set({ modalMode, modalTitle: title });
    set({ isModalOpen: true });
  },
  closeModal: () => set({ isModalOpen: false }),
}));
