import styles from "../registration-confirmation-page/RegistrationConfirmationPage.module.css";
import { OnboardingTemplate } from "../../../templates/onboarding/OnboadingTemplate";

type RegistrationConfirmationProps = {};

export const RegistrationConfirmationPage: React.FC<
  RegistrationConfirmationProps
> = () => {
  return (
    <div className={styles.wrapper}>
      <OnboardingTemplate title="Success" textButton="Login">
        <p className={styles.text}>
          Email confirmed.
          <br />
          Your registration is now completed
        </p>
      </OnboardingTemplate>
    </div>
  );
};
