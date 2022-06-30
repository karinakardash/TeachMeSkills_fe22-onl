import styles from "./SortingBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { actions } from "../sortingSlice";

type SortingBarProps = {
  onChange: (e: any) => void;
};

export const SortingBar: React.FC<SortingBarProps> = ({ onChange }) => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faFilter} className={styles.icon} />
      <select className={styles.select} onChange={onChange}>
        <option>Choose filter</option>
        <option>date</option>
        <option>title</option>
        <option>text</option>
      </select>
    </div>
  );
};
