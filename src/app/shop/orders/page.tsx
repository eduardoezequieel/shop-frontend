"use client";

import styles from "./orders.module.scss";
import { Collapse } from "antd";
import { useOrderPage } from "./hooks";

const OrdersPage = () => {
  const { items } = useOrderPage();

  return (
    <div className={styles.container}>
      <Collapse items={items} />
    </div>
  );
};
export default OrdersPage;
