/* eslint-disable react/jsx-pascal-case */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Route } from "react-router-dom";
import NotFoundPage from "../../components/common/404_not_found";
import ResetPassword from "../../components/auth/reset";
import CustomerOtpPassVerification from "../../components/auth/customer/otp";
import SubscriptionSuccessPage from "../../components/subscriptions/success";
import SubscriptionFailedPage from "../../components/subscriptions/failed";
import Cart from "../../components/cart";
import Success from "../../components/cart/success";
import Checkout from "../../components/cart/checkout";
import Layout from "../../components/layout/layout";
import PrivacyPolicy from "../../components/common/privacy_policy";
import TermsAndCondition from "../../components/common/terms_and_condition";
import Job_Application from "../../components/job_application";
import Quiz from "../../components/quiz";
import QuizIntro from "../../components/quiz/QuzIntro";

import Order_Popup from "../../components/common/modals/order_popup";
import Karisma_Products_Popup from "../../components/common/modals/karisma_products_popup";
import Disputes_Claims_Popup from "../../components/common/modals/disputes_claims_popup";
import Subscription_Plan from "../../components/common/modals/subscription_plan";
import Academy from "../../components/common/modals/academy";
import Become_Salon from "../../components/common/modals/become_salon";
import Shipping from "../../components/common/modals/shipping";
import Payments_Security from "../../components/common/modals/payments_security";
import QuizProcess from "../../components/quiz/QuizProcess";
import QuizResult from "../../components/quiz/quizResult";
import PaypalPayment from "../../components/payment_gateways/paypal/paypal_payment";

export default [
  
  <Route exact path="*" element={<NotFoundPage />} />,
  <Route exact path="reset-password" element={<ResetPassword />} />,
  <Route exact path="/otp-verify" element={<CustomerOtpPassVerification />} />,
  <Route
    exact
    path="/subscription/success"
    element={<SubscriptionSuccessPage />}
  />,
  <Route
    exact
    path="/subscription/cancel"
    element={<SubscriptionFailedPage />}
  />,
  <Route
    exact
    path="/subscription/failed"
    element={<SubscriptionFailedPage />}
  />,
  <Route path="quiz/">
    <Route exact path="" element={<Quiz />} />,
    <Route exact path="intro" element={<QuizIntro />} />,
    <Route exact path="quiz-processing" element={<QuizProcess />} />
    <Route exact path="quiz-result" element={<QuizResult />} />
  </Route>,
  <Route path="cart/">
    <Route exact path="" element={<Cart />} />
    <Route exact path="success/:id" element={<Success />} />
    <Route exact path="paypal" element={<PaypalPayment />} />
    <Route exact path="checkout" element={<Checkout />} />
  </Route>,
  <Route path="soins-karisma/" element={<Layout />}>
    <Route exact path="privacy-policy" element={<PrivacyPolicy />} />
    <Route exact path="terms-and-conditions" element={<TermsAndCondition />} />
  </Route>,
  <Route>
    <Route exact path="/job-application" element={<Job_Application />} />
  </Route>,
  // Popup Modals Routes
  <Route exact path="/order-popup" element={<Order_Popup />} />,
  <Route exact path="/karisma-products" element={<Karisma_Products_Popup />} />,
  <Route exact path="/disputes-claims" element={<Disputes_Claims_Popup />} />,
  <Route exact path="/subscription-plan" element={<Subscription_Plan />} />,
  <Route exact path="/academy" element={<Academy />} />,
  <Route exact path="/become-salon" element={<Become_Salon />} />,
  <Route exact path="/shipping" element={<Shipping />} />,
  <Route exact path="/payments-security" element={<Payments_Security />} />,
];
