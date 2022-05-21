import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={styles.button}
      onClick={() => onClick?.()}
    >
      {children}
    </button>
  );
};
