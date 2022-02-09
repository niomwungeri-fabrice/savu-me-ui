import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-up/SignUp";
import ForgotPassword from "./forgot-password/ForgotPassword";
import Landing from "./landing/Landing";
import NotFound from "../presentational/not-found/NotFound";
import NavigationBar from '../presentational/nav-bar/NavigationBar'
export const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        {/* TODO: to be moved to component browser */}
        <NavigationBar />
        <div>
          <Routes>
            <Route path="/" exact element={<Landing />} />
            <Route path="/sign-in" exact element={<SignIn />} />
            <Route path="/sign-up" exact element={<SignUp />} />
            <Route path="/forgot-password" exact element={<ForgotPassword />} />
            <Route component={<NotFound />} />
          </Routes>
        </div>
      </Fragment>
    </BrowserRouter>
  );
};