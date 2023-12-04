import styles from "./styledPrice.module.scss";

export const StyledPrice = ({ price }: { price: string }) => {
  const [integer, decimal] = price.split(".");
  return (
    <div className={styles.container}>
      <span className={styles.smallText}>$</span>
      <span>{integer}</span>
      <span className={styles.smallText}>.{decimal}</span>
    </div>
  );
};
