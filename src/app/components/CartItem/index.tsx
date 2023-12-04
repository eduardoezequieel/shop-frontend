import Image from "next/image";
import styles from "./cartItem.module.scss";
import airpods from "public/resources/airpods.png";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export const CartItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <Image src={airpods} alt="item" />
        </div>
        <div className={styles.itemInfo}>
          <h3>Product Name</h3>
          <p>$9.99</p>
        </div>
      </div>
      <Button type="text">
        <DeleteOutlined style={{ fontSize: "24px", color: "red" }} />
      </Button>
    </div>
  );
};
