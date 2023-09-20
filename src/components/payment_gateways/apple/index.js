import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { createPaymentIntet } from "../../../redux/slices/Cart";

function ApplePay() {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [paymentRequest, setPaymentRequest] = useState(null);

  const payload = {
    cartUuid: cart?.detail?.uuid,
    shippingAddress: cart?.shipping_information,
  };
  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }
    const pr = stripe.paymentRequest({
      currency: "CAD",
      country: "",
      requestPayerEmail: "",
      requestPayerNamea: "",
      total: {
        label: "Demo payment",
        amount: 1999,
      },
    });
    pr.canMakePayment().then((result) => {
      if (result) {
        // show payment button
        setPaymentRequest(pr);
      }
    });
    /** Create Payment intent */
    pr.on("paymentmethod", async (e) => {
      const paymentMethod = await dispatch(createPaymentIntet(payload));
      const { error, payment } = stripe.confirmPayment((e) => {});
    });
    /** */
  }, [stripe, elements]);
  return (
    <div>
      <h1>Apple Pay</h1>
      {paymentRequest && <paymentRequest />}
    </div>
  );
}

export default ApplePay;
