type ModalMode = "add" | "edit";

export interface IProductFormStore {
  isModalOpen: boolean;
  modalTitle: string;
  modalMode: ModalMode;
  openModal: (mode: ModalMode, title: string, id?: number) => void;
  closeModal: () => void;
}
