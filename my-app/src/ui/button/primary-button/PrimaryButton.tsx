import styles from './PrimaryButton.module.css';
type PrimaryButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className = '',
}) => {
  return (
    <button className={`${styles.button} ${className}`} type="button">
      {children}
    </button>
  );
};
