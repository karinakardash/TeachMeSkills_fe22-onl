import { Input } from "../../../ui/form/inputs/Input";
import styles from "../login-page/LoginPage.module.css";
import { OnboardingTemplate } from "../../../templates/onboarding/OnboadingTemplate";
import { useState } from "react";
import { Title } from "../../../ui/title/Title";
import { PrimaryButton } from "../../../ui/button/primary-button/PrimaryButton";
import { Link } from "react-router-dom";
import { AppPages } from "../../../types";
import App from "../../../App";

type LoginPageProps = {};

export const LoginPage: React.FC<LoginPageProps> = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  return (
    <div className={styles.wrapper}>
      <OnboardingTemplate
        title={
          <Title>
            Login |{" "}
            <Link to={AppPages.REGISTRATION} className={styles.transferPage}>
              Registration
            </Link>
          </Title>
        }
        actionButton={
          <Link to={AppPages.POSTS}>
            <PrimaryButton
              className={styles.button}
              type="button"
              role="presentation"
            >
              Login
            </PrimaryButton>
          </Link>
        }
        description={
          <p className={styles.text}>
            Forgot your password?{" "}
            <a href="#" className={styles.link}>
              Reset password
            </a>
          </p>
        }
      >
        <form>
          <Input
            label="Email"
            type="email"
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
          ></Input>
          <Input
            label="Password"
            type="password"
            value={passwordValue}
            onChange={(event) => setPasswordValue(event.target.value)}
          ></Input>
        </form>
        <PrimaryButton
          className={styles.button}
          type="reset"
          onClick={() => {
            setEmailValue("");
            setPasswordValue("");
          }}
        >
          Reset
        </PrimaryButton>
      </OnboardingTemplate>
    </div>
  );
};
