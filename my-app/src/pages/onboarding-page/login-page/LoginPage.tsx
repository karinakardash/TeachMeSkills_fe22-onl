import { Input } from "../../../ui/form/inputs/Input";
import styles from "../login-page/LoginPage.module.css";
import { OnboardingTemplate } from "../../../templates/onboarding/OnboadingTemplate";
import { useState } from "react";

type LoginPageProps = {};

export const LoginPage: React.FC<LoginPageProps> = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  return (
    <div className={styles.wrapper}>
      <OnboardingTemplate title="Login | Registration" textButton="Login">
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
      </OnboardingTemplate>
      <p className={styles.text}>
        Forgot your password?{" "}
        <a href="#" className={styles.link}>
          Reset password
        </a>
      </p>
    </div>
  );
};
