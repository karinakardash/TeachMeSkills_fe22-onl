import styles from "../registration-confirmation-page/RegistrationConfirmationPage.module.css";
import { OnboardingTemplate } from "../../../templates/onboarding/OnboadingTemplate";
import { Title } from "../../../ui/title/Title";
import { PrimaryButton } from "../../../ui/button/primary-button/PrimaryButton";
import { Link } from "react-router-dom";
import { AppPages } from "../../../types";

type RegistrationConfirmationProps = {};

export const RegistrationConfirmationPage: React.FC<
  RegistrationConfirmationProps
> = () => {
  return (
    <div className={styles.wrapper}>
      <OnboardingTemplate
        title={<Title>Success</Title>}
        actionButton={
          <Link to={AppPages.LOGIN}>
            <PrimaryButton
              type="button"
              className={styles.button}
              role="presentation"
            >
              Login
            </PrimaryButton>
          </Link>
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
