import styles from "./userName.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Children, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { getUser } from "../../user/userSlice";

type UserNameProps = {
  children: React.ReactNode;
};

export const UserName: React.FC<UserNameProps> = ({ children }) => {
  return (
    <div className={styles.userName}>
      <a>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        {children}
      </a>
    </div>
  );
};
