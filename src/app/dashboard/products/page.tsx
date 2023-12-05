"use client";

import styles from "./products.module.scss";
import { Button, Table } from "antd";
import { columns } from "./utils";
import { useProductPage } from "./hooks";
import { ProductForm } from "./components";
import { useProductFormStore } from "./store/useProductFormStore";

const ProductsPage = () => {
  const { dataSource, isLoading } = useProductPage();
  const { openModal } = useProductFormStore();

  return (
    <div className={styles.container}>
      <h1>Products</h1>
      <ProductForm />
      <div style={{ alignSelf: "flex-end" }}>
        <Button onClick={() => openModal("add", "Add a new product")}>
          Add product
        </Button>
      </div>
      <Table columns={columns()} dataSource={dataSource} loading={isLoading} />
    </div>
  );
};
export default ProductsPage;
