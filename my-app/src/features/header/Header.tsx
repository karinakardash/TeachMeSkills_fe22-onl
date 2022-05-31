import styles from "../header/Header.module.css";
import { Burger } from "./burger/Burger";
import { Menu } from "./menu/Menu";
import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const appRef = useContext(AppContext);
  return (
    <header className={`${styles.header} ${isOpen ? styles.headerIsOpen : ""}`}>
      <Burger onClick={() => setIsOpen(!isOpen)}>
        <Menu></Menu>
      </Burger>
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
    </header>
  );
};
