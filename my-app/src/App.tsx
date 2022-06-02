import React from "react";

import "./App.css";
import { MypostsPage } from "./pages/my-posts-page/MypostsPage";
import { LoginPage } from "./pages/onboarding-page/login-page/LoginPage";
import { RegistrationConfirmationPage } from "./pages/onboarding-page/registration-confirmation-page/RegistrationConfirmationPage";
import { ConfirmEmailPage } from "./pages/onboarding-page/confirm-email-page/ConfirmEmailPage";
import { SelectedPostPage } from "./pages/selected-post-page/SelectedPostPage";
import { RegistrationPage } from "./pages/onboarding-page/registration-page/RegistrationPage";
import { AppContext } from "./AppContext";
import { InformationPage } from "./pages/information-page/InformationPage";
import { MainPage } from "./pages/main-page/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppPages } from "./types";

function App() {
  const appRef = React.createRef<HTMLDivElement>();
  return (
    <div className="App" ref={appRef}>
      <AppContext.Provider value={appRef}>
        <Routes>
          <Route
            path={AppPages.EMAIL_CONFIRMATION}
            element={<ConfirmEmailPage></ConfirmEmailPage>}
          ></Route>
          <Route
            path={AppPages.INFORMATION}
            element={<InformationPage></InformationPage>}
          ></Route>
          <Route
            path={AppPages.LOGIN}
            element={<LoginPage></LoginPage>}
          ></Route>
          <Route
            path={AppPages.POSTS}
            element={<MypostsPage></MypostsPage>}
          ></Route>
          <Route
            path={AppPages.POSTS_ITEM}
            element={<SelectedPostPage></SelectedPostPage>}
          ></Route>
          <Route
            path={AppPages.REGISTRATION}
            element={<RegistrationPage></RegistrationPage>}
          ></Route>
          <Route path={AppPages.RESET_PASSWORD} element={null}></Route>
          <Route
            path={AppPages.SUCCESS_PAGE}
            element={
              <RegistrationConfirmationPage></RegistrationConfirmationPage>
            }
          ></Route>
          <Route
            path={AppPages.MAIN_PAGE}
            element={<MainPage></MainPage>}
          ></Route>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
