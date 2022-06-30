import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { actions } from "../searchSlice";
import { Dropdown } from "./dropdown/Dropdown";

type SearchBarProps = {
  children?: React.ReactNode;
};

export const SearchBar: React.FC<SearchBarProps> = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.search.response?.results ?? []);
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
      <div>
        <input
          className={styles.input}
          type="text"
          onInput={(e) => {
            dispatch(actions.search({ text: e.currentTarget.value }));
          }}
        ></input>
        {list.length > 0 ? (
          <div className={styles.dropdownContainer}>
            <Dropdown
              list={list}
              onSelectedItem={() => dispatch(actions.reset)}
            ></Dropdown>
          </div>
        ) : null}
      </div>
    </div>
  );
};
