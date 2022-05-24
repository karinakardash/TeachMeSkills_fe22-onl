import styles from "./OnboardingTemplate.module.css";

type OnboardingTemplateProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  actionButton: React.ReactNode;
  description?: React.ReactNode;
};

export const OnboardingTemplate: React.FC<OnboardingTemplateProps> = ({
  title,
  children,
  actionButton,
  description,
}) => {
  return (
    <div className={styles.container}>
      {title}
      {children}
      {actionButton}
      {description}
    </div>
  );
};
