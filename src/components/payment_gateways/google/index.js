/**
 * step one: Configure the Payment Method
 * step two : Define the API Version
 * step three: Determine Readiness to Pay With Google Pay
 */
/**
 * Define the version of the Google Pay API referenced when creating your
 * configuration
 *
 * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#PaymentDataRequest|apiVersion in PaymentDataRequest}
 */
import React, { useState, useEffect } from "react";
import pay_google from "../../../../public/assets/images/checkout/pay-google.jpg";
import { useSelector } from "react-redux";
import { TAX } from "../../cart/data.js";

const { googlePayClient } = window;

const baseCardPaymentMethod = {
  type: "CARD",
  parameters: {
    allowedCardNetworks: [
      "AMEX",
      "DISCOVER",
      "INTERAC",
      "JCB",
      "MASTERCARD",
      "VISA",
    ],
    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
  },
};

const googlePayBaseConfiguration = {
  apiVersion: 2,
  apiVersionMinor: 0,
  allowedPaymentMethods: [baseCardPaymentMethod],
};

export default function GooglePay() {
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

  function processPayment() {
    const tokenizationSpecification = {
      type: "PAYMENT_GATEWAY",
      parameters: {
        gateway: "stripe",
        gatewayMerchantId: "",
      },
    };

    const cardPaymentMethod = {
      type: "CARD",
      tokenizationSpecification: tokenizationSpecification,
      parameters: {
        allowedCardNetworks: [
          "AMEX",
          "DISCOVER",
          "INTERAC",
          "JCB",
          "MASTERCARD",
          "VISA",
        ],
        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
        billingAddressRequired: false,
        billingAddressParameters: {
          format: "FULL",
          phoneNumberRequired: false,
        },
      },
    };

    const transactionInfo = {
      countryCode: "US",
      currencyCode: "CAD",
      totalPriceStatus: "FINAL",
      totalPrice: totalCartPrice,
      totalPriceLabel: "Total",
    };

    const merchantInfo = {
      merchantName: "Example Merchant Name",
    };

    const paymentDataRequest = {
      ...googlePayBaseConfiguration,
      ...{
        allowedPaymentMethods: [cardPaymentMethod],
        transactionInfo,
        merchantInfo,
      },
    };

    googlePayClient
      .loadPaymentData(paymentDataRequest)
      .then(function (paymentData) {})
      .catch(function (err) {});
  }

  useEffect(() => {
    try {
      googlePayClient
        .isReadyToPay(googlePayBaseConfiguration)
        .then(function (response) {
          if (response.result) {
          } else {
            alert("Unable to pay using Google Pay");
          }
        })
        .catch(function (err) {
          console.error("Error determining readiness to use Google Pay: ", err);
        });
    } catch (e) {}
  }, []);
  return (
    <a
      href="#"
      role="button"
      className="payment-type-cta"
      onClick={processPayment}
    >
      <img src={pay_google} alt="Pay via google pay" />
    </a>
  );
}
