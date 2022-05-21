import styles from "../h1/H1.module.css";

type H1Props = {
  children: React.ReactNode;
};

export const H1: React.FC<H1Props> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};
