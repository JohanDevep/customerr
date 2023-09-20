import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  updateCartItemQuantityAction,
  deleteCartItemAction,
} from "../../../redux/actions/Cart";
import {useTranslation} from "react-i18next";

const CartItemOption = ({ cartItem,isDisabled }) => {
  const [t, i18n] = useTranslation("common");
  const { uuid, image, name, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const [cartItemQuantity, setCartItemQuantity] = useState(+quantity);
  const [showCartItem, setShowCartItem] = useState(true);

  const decrementCartQuantityHandler = () => {
    if (cartItemQuantity > 1) {
      const itemQuantity = cartItemQuantity;
      setCartItemQuantity((currentQuantity) => +currentQuantity - 1);
      dispatch(updateCartItemQuantityAction(uuid, cartItemQuantity - 1)).catch(
        () => {
          setCartItemQuantity(itemQuantity);
        }
      );
    }
  };

  const incrementCartQuantityHandler = () => {
    const itemQuantity = cartItemQuantity;
    setCartItemQuantity((currentQuantity) => +currentQuantity + 1);
    dispatch(updateCartItemQuantityAction(uuid, cartItemQuantity + 1)).catch(
      () => {
        setCartItemQuantity(itemQuantity);
      }
    );
  };

  const deleteCartItemHandler = () => {
    setShowCartItem(false);
    dispatch(deleteCartItemAction(uuid)).catch(() => {
      setShowCartItem(true);
    });
  };

  useEffect(() => {}, [cartItemQuantity]);

  const getTotalPrice = () => {
    return parseFloat(price * cartItemQuantity).toFixed(2);
  };

  return (
    <>
      {showCartItem ? (
        <div className="cart-table-row">
          <div className="cart-table-cell cell-product">
            <div className="cart-product">
              <div className="cart-product-thumbnail">
                <img src={image} alt="" width="45" />
              </div>
              <div className="cart-product-detail">
                <p className="cart-product-title">{name ? name : null}</p>
                <small>{name ? name : null}</small>
              </div>
            </div>
          </div>
          <div className="cart-table-cell cell-price">
            <p>
              <span className="cell-title">Price: e </span> $
              {price ? price : null}
            </p>
          </div>
          <div className="cart-table-cell cell-counter-control">
            <div className="input-group counter-control-group">
              <span
                className="input-group-text"
                onClick={!isDisabled ? decrementCartQuantityHandler:""}
              >
                -
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Item Count"
                value={cartItemQuantity}
                disabled={isDisabled}
              />
              <span
                className="input-group-text"
                onClick={!isDisabled? incrementCartQuantityHandler:""}
              >
                +
              </span>
            </div>
          </div>
          <div className="cart-table-cell cell-total">
            <p>
              <span className="cell-title">Total: </span> ${getTotalPrice()}
            </p>
          </div>
          <div className="cart-table-cell cell-cta">
            <span
              role="button"
              aria-label="Delete Cart item"
              onClick={!isDisabled? deleteCartItemHandler:""}
            >
              <i className="icon icon-close"></i>
            </span>
          </div>
        </div>
      ) : (
        false
      )}
    </>
  );
};

export default CartItemOption;
