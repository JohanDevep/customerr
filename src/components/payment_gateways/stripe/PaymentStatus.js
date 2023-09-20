import React, {useEffect} from "react";
import {loadStripe} from "@stripe/stripe-js";
import {ElementsConsumer, Elements, useStripe} from "@stripe/react-stripe-js";
import {_SplitFieldsForm} from "./StripeCardFrom";
import {createPaymentIntet} from "../../../redux/slices/Cart";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";

// recreating the Stripe object on every render.
// Test publishable API key.
const stripePromise = loadStripe(process.env.REACT_STRIPE_PUBLISHABLE_KEY);
export default function Payment() {
    /** redux store */
    const dispatch = useDispatch();
    const paymentIntent = useSelector((state) => state.cart.paymentIntent);
    const subscriptionPaymentIntent = useSelector((state) => state.cart.subscriptionPaymentIntent);
    const isSubscribe = useSelector((state) => state.cart.isSubscribe);

    /** user states */
    const [clientSecret, setClientSecret] = React.useState("");
    const [paymentMethodID, setPaymentMethodID] = React.useState("");
    useEffect(() => {
        /** check if payment intent is not null */
        if (!isSubscribe) {
            if (paymentIntent !== null) {
                setPaymentMethodID(paymentIntent?.paymentIntentId);
                setClientSecret(paymentIntent?.setupIntent);
            } else {
                toast.info("Your payment request declined!")
            }
        } else {
            if (subscriptionPaymentIntent !== null) {
                setPaymentMethodID(subscriptionPaymentIntent?.paymentIntentId);
                setClientSecret(subscriptionPaymentIntent?.setupIntent);
            } else {
                toast.info("Your payment request declined!")
            }
        }
    }, [paymentIntent, subscriptionPaymentIntent])

    const appearance = {
        // If you are planning to extensively customize rules, use the "none"
        // theme. This theme provides a minimal number of rules by default to avoid
        // interfering with your custom rule definitions.
        theme: "none",
        style: {
            borderColor: '2px solid black',
            base: {
                borderColor: '2px solid black',
                iconColor: '#c4f0ff',
                color: '#fff',
                fontWeight: '500',
                fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                fontSize: '16px',
                fontSmoothing: 'antialiased',
                ':-webkit-autofill': {
                    color: '#fce883',
                },
                '::placeholder': {
                    color: '#87BBFD',
                },
            },
            invalid: {
                iconColor: '#FFC7EE',
                color: '#FFC7EE',
            },
        },
        rules: {
            ".Tab": {
                border: "1px solid #E0E6EB",
                boxShadow:
                    "0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02)",
            },

            ".Tab:hover": {
                color: "var(--colorText)",
            },

            ".Tab--selected": {
                borderColor: "#E0E6EB",
                boxShadow:
                    "0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02), 0 0 0 2px var(--colorPrimary)",
            },

            ".Input--invalid": {
                boxShadow:
                    "0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 0 0 2px var(--colorDanger)",
            },
            ".Input": {
                boxShadow:
                    "0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 0 0 2px #3c3841bf",
            },
            // See all supported class names and selector syntax below
        },
    };
    const options = {
        clientSecret,
        appearance,
    };
    // const stripe = useStripe();
    // var elements = stripe.elements({
    //     clientSecret: clientSecret,
    // });
    // const paymentElement = elements.create('payment', {
    //     layout: {
    //         type: 'tabs',
    //         defaultCollapsed: false,
    //     }
    // });
    return (
        <div>
            {clientSecret && (
                <Elements stripe={stripePromise} options={options} >
                    <ElementsConsumer>
                        {({elements, stripe}) => (
                            <_SplitFieldsForm
                                paymentMethodID={paymentMethodID}
                                clientSecret={clientSecret}
                                elements={elements}
                                stripe={stripe}
                            />
                        )}
                    </ElementsConsumer>
                </Elements>
            )}
        </div>
    );
}
