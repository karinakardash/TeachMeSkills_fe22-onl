import styles from "./Burger.module.css";
import { Menu } from "../menu/Menu";
import { useState } from "react";

type BurgerProps = {
  children?: React.ReactNode;
  onClick: () => void;
};

export const Burger: React.FC<BurgerProps> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={isOpen ? `${styles.burgerIsOpen}` : `${styles.burger}`}
      onClick={() => {
        setIsOpen(!isOpen);
        onClick();
      }}
    >
      <div className={styles.line}></div>
      <div className={isOpen ? `${styles.menu}` : `${styles.menuNone}`}>
        <Menu isLogggedIn={false}></Menu>
      </div>
    </div>
  );
};
