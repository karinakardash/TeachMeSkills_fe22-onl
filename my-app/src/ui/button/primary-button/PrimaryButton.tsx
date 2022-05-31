import styles from "./PrimaryButton.module.css";
type PrimaryButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className = "",
  type,
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
