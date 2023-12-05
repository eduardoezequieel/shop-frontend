import { useShopStore } from "@/app/shop/store";
import styles from "./cart.module.scss";
import { Button, Drawer } from "antd";
import { CartItem } from "..";
import { useAuthStore } from "@/store";
import { useRouter } from "next/navigation";

export const Cart = () => {
  const { cartIsShown, toggleCart, cart, saveCart, isLoading } = useShopStore();
  const { user } = useAuthStore();
  const router = useRouter();
  const handlePay = () => {
    if (!user) {
      router.push("/login");
    } else {
      saveCart();
    }
  };
  return (
    <Drawer
      title="Cart"
      placement="right"
      onClose={toggleCart}
      open={cartIsShown}
    >
      <div className={styles.container}>
        {cart.map((item) => (
          <CartItem {...item} key={item.id} />
        ))}
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <Button
            loading={isLoading}
            onClick={handlePay}
            type="primary"
            block
            size="large"
          >
            Pay
          </Button>
        )}
      </div>
    </Drawer>
  );
};
