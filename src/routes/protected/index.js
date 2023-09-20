/* eslint-disable import/no-anonymous-default-export */
import { Route } from "react-router-dom";
import CustomerLogin from "../../components/auth/customer/login";
import CustomerSignup from "../../components/auth/customer/signup";
import CustomerForgot from "../../components/auth/customer/forgot";
import SalonsForgot from "../../components/auth/salons/forgot";
import SalonsLogin from "../../components/auth/salons/login";
import SalonsSignup from "../../components/auth/salons/signup";
import OtpVerification from "../../components/auth/customer/otp";
import ResetPassword from "../../components/auth/reset";
import RequireNoAuth from "../../auth/require/RequireNoAuth";
import SalonOtpPassVerification from "../../components/auth/salons/otp";
import React from "react";

export default [
  /** Customer routes */
  <Route path="customer/">
    <Route element={<RequireNoAuth />}>
    <Route exact path="login" element={<CustomerLogin />} />
    </Route>
    <Route element={<RequireNoAuth />}>
    <Route exact path="signup" element={<CustomerSignup />} />
    </Route>
    <Route element={<RequireNoAuth />}>
    <Route exact path="forgot" element={<CustomerForgot />} />
    </Route>
    <Route element={<RequireNoAuth />}>
    <Route exact path="otp" element={<OtpVerification />} />
    </Route>
    <Route element={<RequireNoAuth />}>
    <Route exact path="reset" element={<ResetPassword />} />
    </Route>
  </Route>,
  /** Salons Routes */
  <Route path="salon/">
    <Route exact path="forgot" element={<SalonsForgot />} />
    <Route exact path="login" element={<SalonsLogin />} />
    <Route exact path="signup" element={<SalonsSignup />} />
    <Route
      exact
      path="verify-salon-otp"
      element={<SalonOtpPassVerification />}
    />
  </Route>,
];
