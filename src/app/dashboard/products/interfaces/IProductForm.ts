type ModalMode = "add" | "edit";

export interface IProductForm {
  isModalOpen: boolean;
  isLoading: boolean;
  modalTitle: string;
  modalMode: ModalMode;
  openModal: (mode: ModalMode, title: string) => void;
  closeModal: () => void;
}
