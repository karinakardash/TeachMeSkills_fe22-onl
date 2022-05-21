import styles from "./Menu.module.css";

type NavProps = {
  children?: React.ReactNode;
};

export const Menu: React.FC<NavProps> = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.link}>Lorem</li>
        <li className={styles.link}>Lorem</li>
        <li className={styles.link}>Lorem</li>
        <li className={styles.link}>Lorem</li>
        <li className={styles.link}>Lorem</li>
        <li className={styles.link}>Lorem</li>
        <li className={styles.link}>Lorem</li>
        <li className={styles.link}>Lorem</li>
      </ul>
    </nav>
  );
};
