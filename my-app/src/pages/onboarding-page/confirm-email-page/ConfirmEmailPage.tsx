import styles from "../confirm-email-page/ConfirmEmailPage.module.css";
import { OnboardingTemplate } from "../../../templates/onboarding/OnboadingTemplate";

type ConfirmEmailPageProps = {};

export const ConfirmEmailPage: React.FC<ConfirmEmailPageProps> = () => {
  return (
    <div className={styles.wrapper}>
      <OnboardingTemplate title="Registration Confirmation" textButton="Home">
        <p className={styles.text}>
          Please activate your account with the activation link in the
          <span className={styles.span}> email@email.com</span>. Please, check
          your email.
        </p>
      </OnboardingTemplate>
    </div>
  );
};
