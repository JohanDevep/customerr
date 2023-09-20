import React, {useEffect, useState} from "react";
import {
    useStripe,
    useElements,
    PaymentElement,
} from "@stripe/react-stripe-js";
import {useDispatch, useSelector} from "react-redux";
import {loading} from "../../../redux/slices/UserStates";
import {useNavigate} from "react-router-dom";
import {API_END_POINTS, API_STATUS_CODE} from "../../../api/config";
import {UseFetch} from "../../../api/fetch/useFetch";
import {toast} from "react-toastify";
import {APP_ROUTES} from "../../../routes/Routes";
import {setSubscriptionPaymentStatus} from "../../../redux/slices/Cart";
import {useTranslation} from "react-i18next";

export const _SplitFieldsForm = ({clientSecret}) => {
    const [t, i18n] = useTranslation("common");
    /** redux store */
    const dispatch = useDispatch();
    const {uuid} = useSelector(state => state.login)
    const {paymentIntent, subscriptionPaymentIntent, isSubscribe} = useSelector(state => state.cart)
    const {subscription} = useSelector(state => state.fetch)

    /** stripe hooks */
    const stripe = useStripe();
    const elements = useElements();

    /** react hooks */
    const navigate = useNavigate();
    const [list, setList] = useState([]) // payment method list
    const [active, setActive] = useState(1)
    const [isCardPayment, setIsCardPayment] = useState(false)


    /** get payment method */
    const getPaymentMethod = async () => {
        let params = {
            userUuid:uuid
        }
        let response = UseFetch(API_END_POINTS.GET_SAVED_PAYMENT_METHOD,null,params)
        response.then((data)=>{
            data.statusCode === API_STATUS_CODE.SUCCESS ? setList(data.paymentMethods):setList([])
        })
    }
    useEffect(() => {
        getPaymentMethod()
    }, [])
    const handleSubmit = async (event) => {
        /**
         * We don't want to let default form submission happen here,
         * which would refresh the page.
         **/
        dispatch(loading(true));
        event.preventDefault();
        if (!stripe || !elements) {
            /**
             * Stripe.js has not yet loaded.
             * Make sure to disable form submission until Stripe.js has loaded.
             */
            return;
        }

        /** get saved Payment method */

        if (isSubscribe) {
            /** confirm setupIntent */
            const {error} = await stripe.confirmSetup({
                //`Elements` instance that was used to create the Payment Element
                elements,
                confirmParams: {
                    return_url: "https://example.com/order/123/complete",
                },
                redirect: "if_required"
            }).then((result) => {
                switch (result.setupIntent.status) {
                    case 'succeeded':
                        subscriptionPayment(result.setupIntent.payment_method)
                        break;
                    case 'processing':
                        dispatch(loading(false))
                        toast.info("Processing payment details. We'll update you when processing is complete.");
                        break;

                    case 'requires_payment_method':
                        dispatch(loading(false))
                        // Redirect your user back to your payment page to attempt collecting
                        // payment again
                        toast.error('Failed to process payment details. Please try another payment method.');
                        break;
                }
            });

            if (error) {
                // This point will only be reached if there is an immediate error when
                // confirming the payment. Show error to your customer (for example, payment
                // details incomplete)
                dispatch(loading(false))
                toast.error(error.message);
            } else {
                dispatch(loading(false))
                // Your customer will be redirected to your `return_url`. For some payment
                // methods like iDEAL, your customer will be redirected to an intermediate
                // site first to authorize the payment, then redirected to the `return_url`.
            }
        } else {
            const {error} = await stripe.confirmSetup({
                //`Elements` instance that was used to create the Payment Element
                elements,
                confirmParams: {
                    return_url: "https://example.com/order/123/complete",
                },
                redirect: "if_required"
            }).then((result) => {
                switch (result.setupIntent.status) {
                    case 'succeeded':
                        dispatch(loading(false))
                        orderCardPayment(result.setupIntent?.payment_method)
                        break;
                    case 'processing':
                        dispatch(loading(false))
                        toast.info("Processing payment details. We'll update you when processing is complete.");
                        break;

                    case 'requires_payment_method':
                        // Redirect your user back to your payment page to attempt collecting
                        // payment again
                        dispatch(loading(false))
                        toast.error('Failed to process payment details. Please try another payment method.');
                        break;
                }
            });
            if (error) {
                // This point will only be reached if there is an immediate error when
                // confirming the payment. Show error to your customer (for example, payment
                // details incomplete)
                dispatch(loading(false))
                toast.error(error.message);
            } else {
                dispatch(loading(false))
                // Your customer will be redirected to your `return_url`. For some payment
                // methods like iDEAL, your customer will be redirected to an intermediate
                // site first to authorize the payment, then redirected to the `return_url`.
            }
        }
    };
    const handleClick = (data) => {
        setActive(data?.id);
    }
    /** Payment with already exist payment methods */
    /** card payment */
    const orderCardPayment = async (payment_method)=>{
        await stripe.confirmCardPayment(paymentIntent.clientSecret, {
            payment_method: payment_method
        }).then(function(result) {
            if (result.error) {
                dispatch(loading(false))
                // Show error to your customer
                toast.error(result.error.message);
            } else {
                dispatch(loading(false))
                if (result.paymentIntent.status === 'succeeded') {
                    toast.success("Success! Your payment has been succeeded.");
                    dispatch(setSubscriptionPaymentStatus(false))
                    navigate(APP_ROUTES.CART_SUCCESS+paymentIntent?.orderUuid)
                }
            }
        })
    }
    const subscriptionPayment = async (paymentMethod)=>{
        await stripe.confirmCardPayment(subscriptionPaymentIntent.clientSecret, {
            payment_method: paymentMethod
        }).then(function(result) {
            if (result.error) {
                dispatch(loading(false))
                // Show error to your customer
                toast.error(result.error.message);
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    dispatch(loading(false))
                    dispatch(setSubscriptionPaymentStatus(true))
                    toast.success("Success! Your payment has been succeeded.");
                    navigate(APP_ROUTES.CART_SUCCESS+subscription.uuid)
                }
            }
        });
    }
    const handlePaymentClick = async ()=>{
        dispatch(loading(true))
        if (isSubscribe) {
        // Pass the failed PaymentIntent to your client from your server
            await  subscriptionPayment(active)
        }else {
            await orderCardPayment(active)
        }
    }
    return (
        <React.Fragment className={"mt-2"}>
            {list.length === 0 ?
                <form onSubmit={handleSubmit} className={"mt-3"}>
                    <PaymentElement />
                    <button disabled={!stripe} className="btn-dark active my-4">
                        Submit
                    </button>
                </form>
                :
                <>
                    <span className={"btn-dark"} onClick={()=> {
                        !isCardPayment?
                        setIsCardPayment(true):
                        setIsCardPayment(false)
                    }}>{t("Global.button.addCard")} +</span>
                    {isCardPayment ?
                        <div>
                            <form onSubmit={handleSubmit} className={"mt-3"}>
                                <PaymentElement/>
                                <button disabled={!stripe} className="btn-dark active my-4">
                                    Submit
                                </button>
                            </form>
                        </div>
                        :
                        <>
                            <div className="map-locations-card-grid mt-3">
                            {list &&
                                list?.map((data) => {
                                    return (
                                        <div
                                            className={`map-locations-item ${
                                                active == data?.id ? "active" : ""
                                            }`}
                                            onClick={() => {
                                                handleClick(data)
                                            }}
                                        >
                                            <div className="map-locations-item-content">
                                                <p className="map-locations-item-timing">
                                                    **** **** **** {data.card.last4}
                                                    <i> <img src={`/assets/images/card/${data.card.brand}.png`} width={30}/></i>
                                                </p>
                                            </div>
                                            <span
                                                className="map-locations-item-timing"
                                            >
                                  EXP: {data.card.exp_month}/{data.card.exp_year}
                                </span>
                                        </div>
                                    );
                                })}
                        </div>
                            <button disabled={!stripe} className="btn-dark active my-4" onClick={()=>handlePaymentClick()}>
                                Submit
                            </button>
                        </>
                        }
                </>
            }
        </React.Fragment>
    );
};
