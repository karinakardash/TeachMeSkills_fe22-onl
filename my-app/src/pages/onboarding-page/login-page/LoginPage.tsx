import { Input } from "../../../ui/form/inputs/Input";
import styles from "../login-page/LoginPage.module.css";
import { OnboardingTemplate } from "../../../templates/onboarding/OnboadingTemplate";
import { useEffect, useState } from "react";
import { Title } from "../../../ui/title/Title";
import { PrimaryButton } from "../../../ui/button/primary-button/PrimaryButton";
import { Link } from "react-router-dom";
import { AppPages } from "../../../types";
import App from "../../../App";
import { useAppDispatch } from "../../../hooks";
import { login } from "../../../features/auth/authSlice";
import { Header } from "../../../features/header/Header";
import { getUser } from "../../../features/user/userSlice";

type LoginPageProps = {};

export const LoginPage: React.FC<LoginPageProps> = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const dispatch = useAppDispatch();

  return (
    <div className={styles.wrapper}>
      <Header isLogin={true} />
      <OnboardingTemplate
        title={
          <Title>
            Login |{" "}
            <Link to={AppPages.REGISTRATION} className={styles.transferPage}>
              Registration
            </Link>
          </Title>
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(login({ email: emailValue, password: passwordValue }));
            dispatch(getUser());
          }}
        >
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
          <PrimaryButton className={styles.button} type="submit">
            Login
          </PrimaryButton>
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
