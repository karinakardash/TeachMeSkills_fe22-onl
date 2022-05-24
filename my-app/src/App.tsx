import React from "react";

import "./App.css";
import { MypostsPage } from "./pages/my-posts-page/MypostsPage";
import { LoginPage } from "./pages/onboarding-page/login-page/LoginPage";
import { RegistrationConfirmationPage } from "./pages/onboarding-page/registration-confirmation-page/RegistrationConfirmationPage";
import { ConfirmEmailPage } from "./pages/onboarding-page/confirm-email-page/ConfirmEmailPage";
import { SelectedPostPage } from "./pages/selected-post-page/SelectedPostPage";
import { RegistrationPage } from "./pages/onboarding-page/registration-page/RegistrationPage";

function App() {
  return (
    <div className="App">
      <RegistrationConfirmationPage></RegistrationConfirmationPage>
    </div>
  );
}

export default App;
