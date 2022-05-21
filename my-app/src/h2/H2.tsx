import styles from "./H2.module.css";

type H2Props = {
  children: React.ReactNode;
};

export const H2: React.FC<H2Props> = ({ children }) => {
  return <h2 className={styles.h2}>{children}</h2>;
};
