import { useEffect, useState } from "react";
import { useProductStore } from "../store";
import { IProduct } from "../interfaces";

export const useProductPage = () => {
  const { fetchProducts, products, isLoading } = useProductStore();
  const [dataSource, setDataSource] = useState<Partial<IProduct>[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setDataSource(products.map((product) => ({ ...product, key: product.id })));
  }, [products]);

  return {
    dataSource,
    isLoading,
  };
};
