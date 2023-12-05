import { Button } from "antd";
import airpods from "public/resources/airpods.png";
import styles from "./product.module.scss";
import Image from "next/image";
import { StyledPrice } from "..";
import { trimParagraph } from "@/utils";
import { useRouter } from "next/navigation";
import { IProduct } from "@/app/dashboard/products/interfaces";
import { Image as IImage } from "@/interfaces";
import { BACKEND_URL } from "@/constants";
import { useShopStore } from "../../store";

export const Product = ({ name, description, price, id, image }: IProduct) => {
  const { replace } = useRouter();
  const { addToCart } = useShopStore();
  const handleAddToCart = (e: any) => {
    e.stopPropagation();

    addToCart(id);
  };

  const handleContainerClick = () => {
    replace(`/shop/${id}`);
  };

  return (
    <div className={styles.container} onClick={handleContainerClick}>
      <div className={styles.imageContainer}>
        <Image
          src={`${BACKEND_URL}${(image as IImage)?.url.substring(1)}`}
          width={300}
          height={300}
          alt="product-image"
        />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.generalInfo}>
          <h4>{name}</h4>
          <StyledPrice price={price.toString()} />
        </div>
        <p>{trimParagraph(description, 80)}</p>
        <Button onClick={handleAddToCart} type="dashed">
          Add to cart
        </Button>
      </div>
    </div>
  );
};
