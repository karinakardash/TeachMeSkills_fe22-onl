import styles from "./Menu.module.css";

type NavProps = {
  children?: React.ReactNode;
};

export const Menu: React.FC<NavProps> = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.link}>All posts</li>
        <li className={styles.link}>My posts</li>
        <li className={styles.link}>Add posts</li>
        <li className={styles.link}>Log out</li>
      </ul>
    </nav>
  );
};
