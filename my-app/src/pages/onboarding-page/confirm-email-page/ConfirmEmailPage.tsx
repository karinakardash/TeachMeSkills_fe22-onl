import styles from "../confirm-email-page/ConfirmEmailPage.module.css";
import { OnboardingTemplate } from "../../../templates/onboarding/OnboadingTemplate";
import { Title } from "../../../ui/title/Title";
import { PrimaryButton } from "../../../ui/button/primary-button/PrimaryButton";
import { Link } from "react-router-dom";
import { AppPages } from "../../../types";

type ConfirmEmailPageProps = {};

export const ConfirmEmailPage: React.FC<ConfirmEmailPageProps> = () => {
  return (
    <div className={styles.wrapper}>
      <OnboardingTemplate
        title={<Title>Registration Confirmation</Title>}
        actionButton={
          <Link to={AppPages.MAIN_PAGE}>
            <PrimaryButton
              type="button"
              className={styles.button}
              role="presentation"
            >
              Home
            </PrimaryButton>
          </Link>
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
