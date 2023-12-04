"use client";

import styles from "./products.module.scss";
import { Button, Table } from "antd";
import { columns } from "./utils";
import { useProductPage } from "./hooks";
import { ProductForm } from "./components";
import { useProductForm } from "./store/useProductForm";

const ProductsPage = () => {
  const { dataSource, isLoading } = useProductPage();
  const { openModal } = useProductForm();

  return (
    <div className={styles.container}>
      <ProductForm />
      <Button
        style={{ marginBottom: "10px" }}
        onClick={() => openModal("add", "Add a new product")}
      >
        Add product
      </Button>
      <Table columns={columns} dataSource={dataSource} loading={isLoading} />
    </div>
  );
};
export default ProductsPage;
