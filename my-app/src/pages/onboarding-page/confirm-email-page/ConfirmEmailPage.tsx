import styles from "../confirm-email-page/ConfirmEmailPage.module.css";
import { OnboardingTemplate } from "../../../templates/onboarding/OnboadingTemplate";
import { Title } from "../../../ui/title/Title";
import { PrimaryButton } from "../../../ui/button/primary-button/PrimaryButton";

type ConfirmEmailPageProps = {};

export const ConfirmEmailPage: React.FC<ConfirmEmailPageProps> = () => {
  return (
    <div className={styles.wrapper}>
      <OnboardingTemplate
        title={<Title>Registration Confirmation</Title>}
        actionButton={
          <PrimaryButton type="button" className={styles.button}>
            Home
          </PrimaryButton>
        }
      >
        <p className={styles.text}>
          Please activate your account with the activation link in the
          <span className={styles.span}> email@email.com</span>. Please, check
          your email.
        </p>
      </OnboardingTemplate>
    </div>
  );
};
