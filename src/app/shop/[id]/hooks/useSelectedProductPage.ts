import { useProductStore } from "@/app/dashboard/products/store";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export const useSelectedProductPage = () => {
  const { fetchProduct, productWasNotFound, selectedProduct } =
    useProductStore();
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(Number(id));
  }, []);

  const { push } = useRouter();
  useEffect(() => {
    if (productWasNotFound) {
      push("/shop");
    }
  }, [productWasNotFound]);

  return {
    selectedProduct,
  };
};
