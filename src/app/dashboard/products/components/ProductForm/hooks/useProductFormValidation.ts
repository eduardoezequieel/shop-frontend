import { useForm } from "react-hook-form";
import { IProduct } from "../../../interfaces";
import { useProductFormStore } from "../../../store/useProductFormStore";
import { useNotificationStore } from "@/store";
import { useEffect, useState } from "react";
import { useProductStore } from "../../../store";
import { Image } from "@/interfaces";
import { BACKEND_URL } from "@/constants";

export const useProductFormValidation = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    getValues,
    formState: { errors },
    watch,
  } = useForm<Partial<IProduct>>();
  const { isModalOpen, closeModal, modalTitle, modalMode } =
    useProductFormStore();
  const { addProduct, isLoading, selectedProduct, updateProduct } =
    useProductStore();
  const { notificate } = useNotificationStore();
  const [imageUrl, setImageUrl] = useState("");
  const onSubmit = (data: Partial<IProduct>) => {
    if (modalMode === "add") {
      if (!getValues("image")) {
        setError("image", {
          type: "required",
          message: "Image is required",
        });
        return;
      }

      addProduct(data);
    } else {
      updateProduct(data);
    }
  };

  useEffect(() => {
    setImageUrl("");
    if (isModalOpen) {
      if (modalMode === "add") {
        setImageUrl("");
        setValue("name", "");
        setValue("price", undefined);
        setValue("description", "");
        setValue("image", undefined);
      } else {
        const { image, name, price, description } = selectedProduct || {};
        const savedImage = image as Image;
        setImageUrl(`${BACKEND_URL}${savedImage?.url.substring(1)}`);
        setValue("name", name);
        setValue("price", price);
        setValue("description", description);
      }
    }
  }, [isModalOpen, selectedProduct]);

  useEffect(() => {
    if (!watch("price")) return;

    if (Number.isNaN(Number(watch("price")))) {
      const stringValue = getValues("price")?.toString();

      if (stringValue?.length === 1) {
        setValue("price", undefined);
      } else {
        setValue("price", parseFloat(stringValue?.slice(0, -1)!));
      }
    }
  }, [watch("price")]);

  return {
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    getValues,
    errors,
    isModalOpen,
    closeModal,
    modalTitle,
    onSubmit,
    imageUrl,
    setImageUrl,
    notificate,
    isLoading,
  };
};
