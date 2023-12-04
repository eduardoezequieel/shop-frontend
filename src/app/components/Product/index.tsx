import { Button } from "antd";
import airpods from "public/resources/airpods.png";
import styles from "./product.module.scss";
import Image from "next/image";
import { StyledPrice } from "..";
import { trimParagraph } from "@/utils";
import { useRouter } from "next/navigation";

const text = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias
qui vel aliquid cumque ab reprehenderit eaque eveniet explicabo
blanditiis facilis assumenda autem, nostrum repellendus architecto
odio repudiandae, unde voluptatem.
`;

export const Product = () => {
  const { replace } = useRouter();
  const handleAddToCart = (e: any) => {
    e.stopPropagation();
  };

  const handleContainerClick = () => {
    replace("/shop/1");
  };

  return (
    <div className={styles.container} onClick={handleContainerClick}>
      <div className={styles.imageContainer}>
        <Image src={airpods} width={300} height={300} alt="product-image" />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.generalInfo}>
          <h4>AirPods Max</h4>
          <StyledPrice price="200.00" />
        </div>
        <p>{trimParagraph(text, 80)}</p>
        <Button onClick={handleAddToCart} type="dashed">
          Add to cart
        </Button>
      </div>
    </div>
  );
};
