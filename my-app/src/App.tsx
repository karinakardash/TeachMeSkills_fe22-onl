import React from "react";

import "./App.css";
import { MypostsPage } from "./pages/content-main-page/MypostsPage";
import { LoginPage } from "./pages/onboarding-page/login-page/LoginPage";
import { RegistrationConfirmationPage } from "./pages/onboarding-page/registration-confirmation-page/RegistrationConfirmationPage";
import { ConfirmEmailPage } from "./pages/onboarding-page/confirm-email-page/ConfirmEmailPage";
import { SelectedPostPage } from "./pages/selected-post-page/SelectedPostPage";

function App() {
  return (
    <div className="App">
      <SelectedPostPage></SelectedPostPage>
    </div>
  );
}

export default App;
