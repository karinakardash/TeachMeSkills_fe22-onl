import styles from "../header/Header.module.css";
import { Burger } from "./burger/Burger";
import { Menu } from "./menu/Menu";
import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import { UserName } from "./userName/userName";
import { SearchBar } from "../search";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { getUser } from "../user/userSlice";

type HeaderProps = {
  isLogin?: boolean;
};

export const Header: React.FC<HeaderProps> = ({ isLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const appRef = useContext(AppContext);
  const username = useAppSelector((state) => state.user.username);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <header className={`${styles.header} ${isOpen ? styles.headerIsOpen : ""}`}>
      <Burger onClick={() => setIsOpen(!isOpen)}>
        <Menu isLogggedIn={false}></Menu>
      </Burger>
      <div className={styles.wrapper}>
        <UserName>{username}</UserName>
        <SearchBar />
        <div>
          <input
            type="checkbox"
            onChange={(event) => {
              const style = appRef?.current!.style!;
              if (event.target.checked) {
                style.setProperty("--primary-text-color", "white");
                style.setProperty("--blue-background-color", "var(--ds-blue)");
                style.setProperty(
                  "--light-blue-background-color",
                  "var(--ds-light-blue)"
                );
              } else {
                style.removeProperty("--primary-text-color");
                style.removeProperty("--blue-background-color");
                style.removeProperty("--light-blue-background-color");
              }
            }}
          />
          Включить темную тему
        </div>
      </div>
    </header>
  );
};
