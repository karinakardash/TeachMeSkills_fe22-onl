import { Input } from "../../../ui/form/inputs/Input";
import styles from "../registration-page/RegistrationPage.module.css";
import { OnboardingTemplate } from "../../../templates/onboarding/OnboadingTemplate";
import { useState } from "react";
import { Title } from "../../../ui/title/Title";
import { PrimaryButton } from "../../../ui/button/primary-button/PrimaryButton";
import { useNavigate } from "react-router";
import { AppPages } from "../../../types";
import { Link } from "react-router-dom";

type RegistrationPageProps = {};

export const RegistrationPage: React.FC<RegistrationPageProps> = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [userNameValue, setuserNameValue] = useState("");
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <OnboardingTemplate
        title={
          <Title>
            <Link to={AppPages.LOGIN} className={styles.transferPage}>
              Login
            </Link>{" "}
            | Registration
          </Title>
        }
        actionButton={
          <PrimaryButton
            type="button"
            className={styles.button}
            onClick={() => navigate(AppPages.SUCCESS_PAGE)}
          >
            Registration
          </PrimaryButton>
        }
        description={
          <p className={styles.text}>
            If you have account, you can{" "}
            <Link to={AppPages.LOGIN} className={styles.link}>
              login
            </Link>
          </p>
        }
      >
        <form>
          <Input
            label="Username"
            type="text"
            value={userNameValue}
            onChange={(event) => setuserNameValue(event.target.value)}
          ></Input>
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
          <Input
            label="Confirm email"
            type="email"
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
          ></Input>
        </form>
      </OnboardingTemplate>
    </div>
  );
};
