import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeSubscription} from "../../../redux/slices/Fetch";
import {isSubscribe} from "../../../redux/slices/Cart";

function SubscriptionItemDetails() {
    /** store */
    const subscription = useSelector(state => state.fetch.subscription)
    const dispatch = useDispatch();
    const deleteCartItemHandler = ()=>{
        dispatch(isSubscribe(false))
        dispatch(removeSubscription())
    }
   return (
       <div className="cart-table-row">
        <div className="cart-table-cell cell-product">
            <div className="cart-product">
                <div className="cart-product-thumbnail">
                    <img src="" alt="" width="45" />
                </div>
                <div className="cart-product-detail">
                    <p className="cart-product-title">{subscription?.name}</p>
                    <small>{subscription?.description}</small>
                </div>
            </div>
        </div>
        <div className="cart-table-cell cell-price">
            <p>
                <span className="cell-title">Price: e </span> $
                {subscription?.price}
            </p>
        </div>
        <div className="cart-table-cell cell-counter-control">
            <div className="input-group counter-control-group">
              <span
                  className="input-group-text"
              >
                -
              </span>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Item Count"
                    value={1}
                />
                <span
                    className="input-group-text"
                >
                +
              </span>
            </div>
        </div>
        <div className="cart-table-cell cell-total">
            <p>
                <span className="cell-title">Total: </span> $ {subscription?.price}
            </p>
        </div>
        <div className="cart-table-cell cell-cta">
            <span
                role="button"
                aria-label="Delete Cart item"
                onClick={deleteCartItemHandler}
            >
              <i className="icon icon-close"></i>
            </span>
        </div>
    </div>
   )
}
export default SubscriptionItemDetails