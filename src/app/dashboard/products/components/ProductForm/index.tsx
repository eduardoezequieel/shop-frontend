import { Modal } from "antd";
import styles from "./productForm.module.scss";
import { useForm } from "react-hook-form";
import { useProductForm } from "../../store/useProductForm";

export const ProductForm = () => {
  const { register, handleSubmit } = useForm();
  const { isModalOpen, closeModal, modalTitle } = useProductForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <Modal open={isModalOpen} onCancel={closeModal}>
      <h3>{modalTitle}</h3>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className="inputGroup">
          <input
            type="text"
            autoComplete="off"
            {...register("identifier")}
            required
          />
          <label htmlFor="identifier">Identifier</label>
        </div>
      </form>
    </Modal>
  );
};
