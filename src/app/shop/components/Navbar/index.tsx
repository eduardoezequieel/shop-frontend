"use client";

import { Button, Dropdown, Spin } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { useNavbar } from "./hooks";

export const Navbar = () => {
  const { isLoading, user, items, push, toggleCart } = useNavbar();

  return (
    <nav className={styles.navbar}>
      <div className={styles.startSection}>
        <Link href="/shop">
          <h3>The Shop</h3>
        </Link>
      </div>
      {isLoading ? (
        <Spin />
      ) : (
        <div className={styles.endSection}>
          {user ? (
            <Dropdown menu={{ items }} trigger={["click"]}>
              <Button type="text">
                <UserOutlined />
                {user.username}
              </Button>
            </Dropdown>
          ) : (
            <Button type="text" onClick={() => push("/login")}>
              <UserOutlined />
              Account
            </Button>
          )}
          <Button type="text" onClick={toggleCart}>
            <ShoppingCartOutlined />
            Cart
          </Button>
        </div>
      )}
    </nav>
  );
};
