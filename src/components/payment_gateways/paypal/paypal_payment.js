import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TAX } from "../../cart/data.js";

const PaypalPayment = () => {
  const navigate = useNavigate();
  const totalCartPrice = useSelector(({ cart }) => {
    let totalPrice = 0;
    if (cart.cartItems) {
      const cartItems = Object.values(cart.cartItems);
      cartItems.forEach((cartItem) => {
        const {
          product: { price },
          quantity,
        } = cartItem;
        totalPrice += +price * +quantity;
      });
    }
    totalPrice = totalPrice + (totalPrice * TAX?.total) / 100;
    return parseFloat(totalPrice).toFixed(2);
  });
  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.REACT_PAYPAL_CLIENT_ID }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalCartPrice,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            navigate(`/cart/success/${name}`);
          });
        }}
      />
    </PayPalScriptProvider>
  );
};
export default PaypalPayment;
