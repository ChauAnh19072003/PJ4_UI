import React from "react";
import ReactDOM from "react-dom";
// import 'assets/css/App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import UserLayout from "layouts/user";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import * as serviceWorker from "serviceWorker";
import Homepage from "layouts/visitor/Homepage";
import Login from "auth/SigninUp";
import AuthService from "services/auth/auth.service";
import ForgotPassword from "auth/ForgotPassword";
import ResetPassword from "auth/ResetPassword";
import { myAtom } from "config/recoil";
import { RecoilRoot } from "recoil";
import OAuth2RedirectHandler from "auth/oauth2/OAuth2RedirectHandler";
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <RecoilRoot
      initializeState={({ set }) => {
        set(myAtom, null);
      }}
      isDuplicateAtom={() => false}
    >
      <React.StrictMode>
        <ThemeEditorProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/visitor" component={Homepage} />
              <Route path="/auth/signin" component={Login} />
              <Route
                path="/oauth2/redirect"
                component={OAuth2RedirectHandler}
              />
              {/* Signup and Signin */}
              <Redirect
                exact
                from="/"
                to={AuthService.isLoggedIn() ? "/user" : "/visitor"}
              />
              <Route path="/user" component={UserLayout} />
              <Route path="/auth/forgot-password" component={ForgotPassword} />
              <Route
                path="/auth/reset-password/:token"
                component={ResetPassword}
              />
            </Switch>
          </BrowserRouter>
        </ThemeEditorProvider>
      </React.StrictMode>
    </RecoilRoot>
  </ChakraProvider>,
  document.getElementById("root")
);
serviceWorker.Unregister();
