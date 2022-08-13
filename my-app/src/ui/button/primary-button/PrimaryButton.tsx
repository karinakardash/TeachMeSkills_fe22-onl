import styles from "./PrimaryButton.module.css";
type PrimaryButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  role?: string;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className = "",
  type,
  onClick,
  role,
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
      role={role}
    >
      {children}
    </button>
  );
};
