import React, {useState, useEffect} from 'react';
import {useStripe} from '@stripe/react-stripe-js';
import {toast} from "react-toastify";

const PaymentInfo = () => {
    const stripe = useStripe();
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (!stripe) {
            return;
        }

        // Retrieve the "setup_intent_client_secret" query parameter appended to
        // your return_url by Stripe.js
        const clientSecret = new URLSearchParams(window.location.search).get(
            'setup_intent_client_secret'
        );

        // Retrieve the SetupIntent

    }, [stripe]);


    return message
};

export default PaymentInfo;