import styles from "../header/Header.module.css";
import { Burger } from "./burger/Burger";
import { Menu } from "./menu/Menu";
import { useState } from "react";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={isOpen ? `${styles.headerIsOpen}` : `${styles.header}`}>
      <Burger onClick={() => setIsOpen(!isOpen)}>
        <Menu></Menu>
      </Burger>
    </header>
  );
};
