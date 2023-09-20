import React from "react";
import {useSelector} from "react-redux";
import {TAX} from "../data";
import {useTranslation} from "react-i18next";

function SubscriptionDetail({isPaymentIntent}) {
    const [t, i18n] = useTranslation("common");
    const subscription = useSelector((state) => state.fetch?.subscription);
    const {subscriptionPaymentIntent} = useSelector((state) => state.cart);
    const {subTotal, totalPrice, QST,
        GST,
        PST,
        HST, totalTaxes, transactionFee} = {
        subTotal: parseFloat(subscription?.price).toFixed(2),
        totalPrice: subscriptionPaymentIntent?.userSubscription?.totalAmount,
        QST: subscriptionPaymentIntent?.userSubscription?.taxQst,
        GST: subscriptionPaymentIntent?.userSubscription?.taxGst,
        PST: subscriptionPaymentIntent?.userSubscription?.taxPst,
        HST: subscriptionPaymentIntent?.userSubscription?.taxHst,
        totalTaxes: parseFloat((subscription?.price * TAX.total) / 100).toFixed(2),
        transactionFee: "3.50"
    };
    return (
        <div className="checkout-section-col col-xl-6 checkout-cart-col">
            <div className="checkout-cart-col-wrapper">
                <div className="cart-table-wrapper">
                    <div className="cart-table-title-wrapper">
                        <h1 className="cart-table-title">{t("Checkout.cart.title")}</h1>
                    </div>
                    <div className="cart-table">
                        <div className="cart-table-header">
                            <div className="cart-table-row">
                                <div className="cart-table-cell">
                                    <p>{t("Checkout.cart.table.column_one")}</p>
                                </div>
                                <div className="cart-table-cell cell-price">
                                    <p>{t("Checkout.cart.table.column_two")}</p>
                                </div>
                                <div className="cart-table-cell">
                                    <p></p>
                                </div>
                                <div className="cart-table-cell">
                                    <p>{t("Checkout.cart.table.column_four")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="cart-table-body">
                            <div className="cart-table-row">
                                <div className="cart-table-cell cell-product">
                                    <div className="cart-product">
                                        <div className="cart-product-detail">
                                            <p className="cart-product-title">{subscription?.name}</p>
                                            <small>{subscription?.description}</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-table-cell cell-price">
                                    <p>
                                        <span className="cell-title">Price: </span> $
                                        {subscription?.price}
                                    </p>
                                </div>
                                <div className="cart-table-cell cell-counter-control">
                                    <span>{subscription?.description?.duration?.interval}</span>
                                </div>
                                <div className="cart-table-cell cell-total">
                                    <p>
                                        <span className="cell-title">Total: </span>{" "}
                                        {subscription?.duration}
                                    </p>
                                </div>
                                <div className="cart-table-cell cell-cta"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="discount-code-block">
                    <div className="discount-code-form">
                        <div className="form-group form-group-control">
                            <label htmlFor="discountCode" className="visually-hidden">
                                {t("Checkout.cart.gift_card")}
                            </label>
                            <input
                                type="text"
                                id="discountCode"
                                className="form-control"
                                placeholder={t("Checkout.cart.gift_card")}
                            />
                        </div>
                        <div className="form-group-cta">
                            <button className="btn-dark outline-transparent"> {t("Global.button.apply")}</button>
                        </div>
                    </div>
                </div>
                <div className="grand-total-divisions-block">

                        <ul className="list-grand-total-divisions">

                        <li>
                            <span className="division-label"> {t("Checkout.cart.subtotal")}</span>
                            <span className="division-amount">${subTotal}</span>
                        </li>
                        <hr/>
                            {isPaymentIntent?
                                <>
                                    {QST !== 0?
                                        <li>
                              <span className="division-label">
                                QST <small className="text-sm"> (Quebec)</small>
                              </span>
                                            <span className="division-amount">${QST}</span>
                                        </li>
                                        :null
                                    }
                                    {GST !== 0?
                                        <li>
                              <span className="division-label">
                                GST <small className="text-sm"></small>
                              </span>
                                            <span className="division-amount">${GST}</span>
                                        </li>
                                        :null
                                    }
                                    {PST !== 0?
                                        <li>
                              <span className="division-label">
                                PST <small className="text-sm"></small>
                              </span>
                                            <span className="division-amount">${PST}</span>
                                        </li>
                                        :null
                                    }
                                    {HST !== 0?
                                        <li>
                              <span className="division-label">
                                HST <small className="text-sm"></small>
                              </span>
                                            <span className="division-amount">${HST}</span>
                                        </li>
                                        : null}
                                </>
                                :null}
                        {/*<li>*/}
                        {/*      <span className="division-label">*/}
                        {/*        Transaction Fee <small className="text-sm"></small>*/}
                        {/*      </span>*/}
                        {/*    <span className="division-amount">${transactionFee}</span>*/}
                        {/*</li>                        */}

                    </ul>
                </div>
                <div className="grand-total-block">
                    <div className="grand-total-block-labels">
                        <p>
                            Total
                            <small> {t("Checkout.cart.total_tax_text")}</small>
                        </p>
                    </div>
                    <div className="grand-total-block-amount">
                        <p>${isPaymentIntent ? subscriptionPaymentIntent?.userSubscription?.totalAmount:subscription?.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionDetail;
