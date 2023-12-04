import { Button } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { useShopStore } from "@/app/shop/store";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const { toggleCart } = useShopStore();
  const { replace } = useRouter();
  return (
    <nav className={styles.navbar}>
      <div className={styles.startSection}>
        <Link href="/shop">
          <h3>The Shop</h3>
        </Link>
      </div>
      <div className={styles.endSection}>
        <form>
          <div className="inputGroup">
            <input type="text" required autoComplete="off" />
            <label>Search</label>
          </div>
        </form>
        <Button type="text" onClick={() => replace("/login")}>
          <UserOutlined />
          Account
        </Button>
        <Button type="text" onClick={toggleCart}>
          <ShoppingCartOutlined />
          Cart
        </Button>
      </div>
    </nav>
  );
};
