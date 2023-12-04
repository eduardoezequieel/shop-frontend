import { useShopStore } from "@/app/shop/store";
import styles from "./cart.module.scss";
import { Button, Drawer } from "antd";
import { CartItem } from "..";

export const Cart = () => {
  const { cartIsShown, toggleCart } = useShopStore();
  return (
    <Drawer
      title="Cart"
      placement="right"
      onClose={toggleCart}
      open={cartIsShown}
    >
      <div className={styles.container}>
        <CartItem />
        <Button type="primary" block size="large">
          Pay
        </Button>
      </div>
    </Drawer>
  );
};
