import { PrimaryButton } from "../../ui/button/primary-button/PrimaryButton";
import { Title } from "../../ui/title/Title";
import styles from "./OnboardingTemplate.module.css";
import { Header } from "../../features/header/Header";

type OnboardingTemplateProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  textButton: React.ReactNode;
};

export const OnboardingTemplate: React.FC<OnboardingTemplateProps> = ({
  title,
  children,
  textButton,
}) => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Title>{title}</Title>
      <div>{children}</div>
      <PrimaryButton className={styles.button}>{textButton}</PrimaryButton>
    </div>
  );
};
