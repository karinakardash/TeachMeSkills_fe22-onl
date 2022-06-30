import { Link } from "react-router-dom";
import { AppPages, Post } from "../../../../types";
import styles from "./Dropdown.module.css";

type DropdownProps = {
  list: Post[];
  onSelectedItem?: (id: number | string) => void;
};
export const Dropdown: React.FC<DropdownProps> = ({ list, onSelectedItem }) => {
  return (
    <ul className={styles.ul}>
      {list.map((item) => (
        <Link
          to={`${AppPages.POST_PAGE}/${item.id}`}
          key={item.id}
          //onClick={() => onSelectedItem(item.id)}
        >
          <li className={styles.li} key={item.id}>
            <img className={styles.img} src={item.image} alt={item.title} />
            {item.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};
