import Image from "next/image";
import styles from "./cartItem.module.scss";
import airpods from "public/resources/airpods.png";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useShopStore } from "../../store";
import { IProduct } from "@/app/dashboard/products/interfaces";
import { usePathname } from "next/navigation";

export const CartItem = ({ name, price, id }: IProduct) => {
  const { deleteFromCart } = useShopStore();
  const pathname = usePathname();

  console.log(pathname);

  const handleDeleteFromCart = () => {
    deleteFromCart(id);
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <Image src={airpods} alt="item" />
        </div>
        <div className={styles.itemInfo}>
          <h3>{name}</h3>
          <p>${price.toFixed(2)}</p>
        </div>
      </div>
      {pathname !== "/shop/orders" && (
        <Button type="text" onClick={handleDeleteFromCart}>
          <DeleteOutlined style={{ fontSize: "24px", color: "red" }} />
        </Button>
      )}
    </div>
  );
};
