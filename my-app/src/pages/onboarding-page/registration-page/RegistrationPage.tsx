import { Input } from "../../../ui/form/inputs/Input";
import styles from "../registration-page/RegistrationPage.module.css";
import { OnboardingTemplate } from "../../../templates/onboarding/OnboadingTemplate";
import { useState } from "react";
import { Title } from "../../../ui/title/Title";
import { PrimaryButton } from "../../../ui/button/primary-button/PrimaryButton";

type RegistrationPageProps = {};

export const RegistrationPage: React.FC<RegistrationPageProps> = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [userNameValue, setuserNameValue] = useState("");
  return (
    <div className={styles.wrapper}>
      <OnboardingTemplate
        title={
          <Title>
            <a className={styles.transferPage} href="#">
              {" "}
              Login{" "}
            </a>{" "}
            | Registration
          </Title>
        }
        actionButton={
          <PrimaryButton type="button" className={styles.button}>
            Login
          </PrimaryButton>
        }
        description={
          <p className={styles.text}>
            If you have account, you can{" "}
            <a href="#" className={styles.link}>
              login
            </a>
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
