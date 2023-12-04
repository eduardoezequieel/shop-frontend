import { Sidebar } from "./components";
import styles from "./dashboard.module.scss";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Sidebar />
    <div className={styles.pageWrapper}>{children}</div>
  </>
);
export default DashboardLayout;
