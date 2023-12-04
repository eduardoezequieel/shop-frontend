import { Button } from "antd";
import styles from "./sidebar.module.scss";
import {
  CloseOutlined,
  InboxOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.topSection}>
        <h3>Dashboard</h3>
        <div className={styles.buttonsContainer}>
          <Button type="text" size="large">
            <InboxOutlined />
            Products
          </Button>
          <Button type="text" size="large">
            <ProfileOutlined />
            Orders
          </Button>
          <Button type="text" size="large">
            <UserOutlined />
            Clients
          </Button>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.buttonsContainer}>
          <Button type="text" size="large">
            <CloseOutlined />
            Log out
          </Button>
        </div>
      </div>
    </aside>
  );
};
