import styles from "../registration-confirmation-page/RegistrationConfirmationPage.module.css";
import { OnboardingTemplate } from "../../../templates/onboarding/OnboadingTemplate";
import { Title } from "../../../ui/title/Title";
import { PrimaryButton } from "../../../ui/button/primary-button/PrimaryButton";

type RegistrationConfirmationProps = {};

export const RegistrationConfirmationPage: React.FC<
  RegistrationConfirmationProps
> = () => {
  return (
    <div className={styles.wrapper}>
      <OnboardingTemplate
        title={<Title>Success</Title>}
        actionButton={
          <PrimaryButton className={styles.button}>Login</PrimaryButton>
        }
      >
        <p className={styles.text}>
          Email confirmed.
          <br />
          Your registration is now completed
        </p>
      </OnboardingTemplate>
    </div>
  );
};
