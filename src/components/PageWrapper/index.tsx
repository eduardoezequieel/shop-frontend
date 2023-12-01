import styles from "./pageWrapper.module.scss";

interface Props {
  children: React.ReactNode;
  icon: React.ReactNode;
  width?: string;
}

export const PageWrapper = ({ children, icon, width }: Props) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.formContainer}
        style={{
          width: width || "100%",
        }}
      >
        <div className={styles.iconContainer}>{icon}</div>
        {children}
      </div>
    </div>
  );
};
