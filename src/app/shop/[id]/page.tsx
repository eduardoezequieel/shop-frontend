import Image from "next/image";
import airpods from "public/resources/airpods.png";
import styles from "./selectedProduct.module.scss";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const SelectedProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={airpods} alt="product-image" />
      </div>
      <div className={styles.productInfo}>
        <div>
          <h1>Product Name</h1>
          <p>$9.99</p>
        </div>
        <hr />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            aliquam deleniti vel consequuntur aspernatur dolore repellendus
            cupiditate alias hic quisquam? Optio deleniti dolores modi
            temporibus pariatur labore consequuntur veniam facilis.
          </p>
        </div>
        <Button type="dashed" size="large" block>
          <ShoppingCartOutlined />
          Add to cart
        </Button>
      </div>
    </div>
  );
};
export default SelectedProductPage;
