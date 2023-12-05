"use client";

import Image from "next/image";
import airpods from "public/resources/airpods.png";
import styles from "./selectedProduct.module.scss";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelectedProductPage } from "./hooks";
import { BACKEND_URL } from "@/constants";
import { Image as IImage } from "@/interfaces";
import { useShopStore } from "../store";
import { useParams } from "next/navigation";

const SelectedProductPage = () => {
  const { selectedProduct } = useSelectedProductPage();
  const { addToCart } = useShopStore();
  const { id } = useParams();

  const handleAddToCart = () => {
    addToCart(Number(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={`${BACKEND_URL}${(
            selectedProduct?.image as IImage
          )?.url.substring(1)}`}
          alt="product-image"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
        />
      </div>
      <div className={styles.productInfo}>
        <div>
          <h1>{selectedProduct?.name}</h1>
          <p>${selectedProduct?.price.toFixed(2)}</p>
        </div>
        <hr />
        <div>
          <p>{selectedProduct?.description}</p>
        </div>
        <Button type="dashed" size="large" block onClick={handleAddToCart}>
          <ShoppingCartOutlined />
          Add to cart
        </Button>
      </div>
    </div>
  );
};
export default SelectedProductPage;
