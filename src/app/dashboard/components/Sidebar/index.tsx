"use client";

import { Button } from "antd";
import styles from "./sidebar.module.scss";
import {
  CloseOutlined,
  InboxOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAuthStore } from "@/store";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export const Sidebar = () => {
  const { logout, getLoggedUser, user } = useAuthStore();
  const { replace } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    getLoggedUser();
  }, []);

  const handleLogout = () => {
    logout();
    replace("/login");
  };
  return (
    <aside className={styles.sidebar}>
      <div className={styles.topSection}>
        <Link href="/dashboard">
          <h3>Dashboard</h3>
        </Link>
        <div className={styles.buttonsContainer}>
          <Link href="dashboard/products">
            <Button
              type="text"
              size="large"
              className={`${
                pathname === "/dashboard/products" && styles.active
              }`}
            >
              <InboxOutlined />
              Products
            </Button>
          </Link>
          <Link href="dashboard/orders">
            <Button type="text" size="large">
              <ProfileOutlined />
              Orders
            </Button>
          </Link>
          <Link href="dashboard/clients">
            <Button type="text" size="large">
              <UserOutlined />
              Clients
            </Button>
          </Link>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <h4>{user?.username}</h4>
        <div className={styles.buttonsContainer}>
          <Button type="text" size="large" onClick={handleLogout}>
            <CloseOutlined />
            Log out
          </Button>
        </div>
      </div>
    </aside>
  );
};
