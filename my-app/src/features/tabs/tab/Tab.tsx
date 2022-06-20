import { PrimaryButton } from "../../../ui/button/primary-button/PrimaryButton";
import styles from "../tab/Tab.module.css";

type TabProps = {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export const Tab: React.FC<TabProps> = ({ selected, onClick, children }) => {
  return (
    <PrimaryButton
      onClick={onClick}
      className={`${styles.btn} ${selected ? styles.btn__active : ""}`}
    >
      {children}
    </PrimaryButton>
  );
};
