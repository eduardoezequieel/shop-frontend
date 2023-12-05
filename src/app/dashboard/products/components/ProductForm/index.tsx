import { useRef } from "react";
import { Modal, Upload } from "antd";
import styles from "./productForm.module.scss";
import { PlusOutlined } from "@ant-design/icons";
import { useProductFormValidation } from "./hooks";

export const ProductForm = () => {
  const {
    isModalOpen,
    closeModal,
    modalTitle,
    onSubmit,
    handleSubmit,
    register,
    imageUrl,
    setImageUrl,
    notificate,
    errors,
    setValue,
    clearErrors,
    isLoading,
  } = useProductFormValidation();
  const submitButton = useRef<HTMLButtonElement>(null);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Modal
      confirmLoading={isLoading}
      open={isModalOpen}
      onCancel={() => {
        if (!isLoading) {
          closeModal();
        }
      }}
      onOk={() => {
        if (submitButton.current) {
          submitButton.current.click();
        }
      }}
    >
      <h3>{modalTitle}</h3>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className="inputGroup">
          <input
            type="text"
            autoComplete="off"
            {...register("name")}
            required
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="inputGroup">
          <input
            type="text"
            autoComplete="off"
            {...register("price")}
            required
          />
          <label htmlFor="identifier">Price</label>
        </div>
        <div className={styles.innerContainer}>
          <div>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={(file) => {
                if (file instanceof File) {
                  if (file.type.match(/^image\/(jpeg|png|gif|bmp|webp)$/)) {
                    const blobUrl = URL.createObjectURL(file);
                    setImageUrl(blobUrl);
                    setValue("image", file);
                    clearErrors("image");
                  } else {
                    notificate({
                      type: "error",
                      message: "File type not supported",
                      description: "Please upload an image file",
                    });
                  }

                  return false;
                }
              }}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
          <div className="inputGroup">
            <textarea
              autoComplete="off"
              {...register("description")}
              required
              style={{ height: "100.4px" }}
            />
            <label htmlFor="identifier">Description</label>
          </div>
        </div>
        {errors?.image && (
          <span className="errorLabel">{errors?.image?.message}</span>
        )}
        <button type="submit" hidden ref={submitButton}></button>
      </form>
    </Modal>
  );
};
