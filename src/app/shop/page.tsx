"use client";

import { useEffect } from "react";
import { useProductStore } from "../dashboard/products/store";
import { Product } from "./components";
import styles from "./shop.module.scss";

const ShopPage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className={styles.container}>
      <h1>Available products</h1>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
export default ShopPage;
