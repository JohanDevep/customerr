import React, { useEffect, useRef } from "react";
import logo_dark from "../../../public/assets/images/logo-dark.png";
import logo_white from "../../../public/assets/images/logo-white.png";
import { Link, useNavigate } from "react-router-dom";
import { getCartItem } from "../../redux/slices/Cart";
import { useDispatch, useSelector } from "react-redux";
import CartItemOption from "./subComponents/CartItemOption";
import { APP_ROUTES } from "../../routes/Routes";
import SubscriptionItemDetails from "./subComponents/SubscriptionItemDetails";
import {useTranslation} from "react-i18next";

const Cart = () => {
  const [t, i18n] = useTranslation("common");
  /** store */
  const uuid = useSelector(state => state.login?.uuid)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSubscription = useSelector(state => state.cart.isSubscribe)
  const subscription = useSelector((state) => state.fetch?.subscription);
  const cartItems = useSelector(({ cart }) => {
    if (cart?.cartItems) {
      return Object.values(cart?.cartItems);
    }
    return [];
  });

  const totalCartPrice = useSelector(({ cart }) => {
    let totalPrice = 0;
    if (cart?.cartItems) {
      const cartItems = Object.values(cart?.cartItems);
      cartItems.forEach((cartItem) => {
        try {
          const price = cartItem?.product?.price;
          const quantity = cartItem?.quantity;
          totalPrice += +price * +quantity;
        } catch (e) {
          console.info("--------- Error -------", e);
        }
      });
    }
    return parseFloat(totalPrice).toFixed(2);
  });
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted?.current) {
      dispatch(
        getCartItem({
          userUuid: uuid,
          group: "cartItems",
        })
      );
    }
  }, []);

  /** checkout to cart  */
  const checkoutToCart = () => {
    navigate(APP_ROUTES.CART_CHECKOUT);
  };
  return (
    <div className="page-wrapper bg-pi-800">
      <header className="site-header-secondary ">
        <div className="container">
          <div className="site-header-secondary-wrapper">
            <div className="site-header-secondary-logo-container">
              <img src={logo_dark} alt="Site Brand" width="100%" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="cart-section">
          <div className="container">
            <div className="link-back-wrapper">
              <Link to="/" className="link-back">
                <i className="icon icon-arrow-left"></i>
                <span>{t("Global.button.back")} </span>
              </Link>
            </div>
            <div className="cart-table-wrapper cart-ui-mobile">
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
                      <p>{t("Checkout.cart.table.column_three")}</p>
                    </div>
                    <div className="cart-table-cell">
                      <p>{t("Checkout.cart.table.column_four")}</p>
                    </div>
                    <div className="cart-table-cell">
                      <p>&nbsp;</p>
                    </div>
                  </div>
                </div>
                <div className="cart-table-body">

                  {!isSubscription?
                    cartItems
                    ? cartItems.map((cartItem) => {
                        const {
                          product: { name, price, imageUrl },
                          uuid,
                          quantity,
                        } = cartItem;
                        return (
                          <CartItemOption
                            key={uuid}
                            cartItem={{
                              uuid,
                              image: imageUrl,
                              name,
                              price,
                              quantity,
                            }}
                          />
                        );
                      })
                    : false:
                      <SubscriptionItemDetails/>
                  }
                </div>
                <div className="cart-table-caption">
                  <div className="cart-table-row cart-table-caption-row">
                    <div className="cart-table-caption-text">
                      <p>SUBTOTAL</p>
                      <small>{t("Checkout.cart.tax_note")}</small>
                    </div>
                    <div className="cart-table-caption-amount">
                      <p>${ isSubscription ? subscription?.price :totalCartPrice}</p>
                    </div>
                  </div>
                </div>
                <div className="cart-table-cta">
                  <button
                    role="button"
                    className="btn-dark"
                    onClick={() => checkoutToCart()}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-secondary-content">
          <div className="container">
            <div className="footer-secondary-col-center">
              <div className="footer-secondary-logo-container">
                <img src={logo_white} alt="White Brand" />
              </div>
            </div>
            <div className="footer-secondary-col-end">
              <p>2022 ©KARISMA. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
