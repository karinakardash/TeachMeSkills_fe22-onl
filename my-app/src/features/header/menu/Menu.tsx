import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import { AppPages } from "../../../types";

type NavProps = {
  children?: React.ReactNode;
  isLogggedIn: true | false;
};

export const ListLoggedIn: React.FC = () => {
  return (
    <ul className={styles.list}>
      <li>
        {" "}
        <Link to={AppPages.MY_POSTS} className={styles.link}>
          All posts
        </Link>
      </li>
      <li>
        {" "}
        <Link to={AppPages.MY_POSTS} className={styles.link}>
          My posts
        </Link>
      </li>
      <li className={styles.link}>Add posts</li>
      <li className={styles.link}>Log out</li>
    </ul>
  );
};

export const ListNotLoggedIn: React.FC = () => {
  return (
    <ul className={styles.list}>
      <li>
        <Link to={AppPages.LOGIN} className={styles.link}>
          Login
        </Link>
      </li>
      <li className={styles.link}>
        <Link to={AppPages.REGISTRATION} className={styles.link}>
          Registration
        </Link>
      </li>
    </ul>
  );
};

export const Menu: React.FC<NavProps> = ({ isLogggedIn }) => {
  return (
    <nav className={styles.nav}>
      {isLogggedIn === true ? <ListLoggedIn /> : <ListNotLoggedIn />}
    </nav>
  );
};
