import { Product } from "..";
import styles from "./productGrid.module.scss";

export const ProductGrid = () => {
  return (
    <div className={styles.container}>
      <h1>Available products</h1>
      <Product />
    </div>
  );
};
