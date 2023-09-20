import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {UseFetch} from "../../api/fetch/useFetch";
import {API_END_POINTS} from "../../api/config";
import {toast} from "react-toastify";

const setState = (state, payload) => {
    if (payload) {
        const {cartItems} = payload;
        const cartItemsData = {};
        cartItems?.forEach((cartItem) => {
            const {uuid} = cartItem;
            cartItemsData[uuid] = cartItem;
        });
        state.cartItems = cartItemsData;

        delete payload.cartItems;
        delete payload.user;
        state.detail = payload;
    }
    return state;
};
/** get cart items */
export const getCartItem = createAsyncThunk(
    "get/carts/",
    async (payload, {getState}) => {
        const userUuid = getState()?.login?.uuid;
        if (userUuid) {
            const param = {
                userUuid: userUuid,
                group: "cartItems",
            };
            const response = await UseFetch(
                API_END_POINTS.GET_CART_COLLECTION,
                null,
                param
            );
            return response?.carts?.[0];
        }
    }
);
/** add cart items */
export const addCartItems = createAsyncThunk(
    "add/cart/items",
    async (payload, {getState}) => {
        const state = getState();
        if (state?.cart?.detail?.uuid) {
            payload.cartUuid = state.cart.detail.uuid;
        }
        const response = await UseFetch(
            API_END_POINTS.POST_CART_ITEM_ITEM,
            payload,
            {}
        );
        return response;
    }
);
/**  Create order */
export const createPayment = createAsyncThunk(
    "create/payment",
    async (payload, thunkAPI) => {
        const response = await UseFetch(
            API_END_POINTS.STRIPE_ORDER_CHECKOUT_ITEM,
            payload,
            {}
        );
        return response;
    }
);

/**  Create order payment intent */
export const createPaymentIntet = createAsyncThunk(
    "create/payment_intent",
    async (payload,) => {
        const response = await UseFetch(
            API_END_POINTS.STRIPE_ORDER_PAYMENT_INTENT,
            payload,
            {}
        );
        return response;
    }
);

/**  Create subscription payment sheet */
export const subscriptionCheckout = createAsyncThunk(
    "subscription/Checkout/",
    async (payload) => {
        const response = await UseFetch(
            API_END_POINTS.STRIPE_SUBSCRIPTION_PAYMENT_INTENT,
            payload
        );
        return response;
    }
);
/**  charge order payment */
export const chargeOrderPayment = createAsyncThunk(
    "charge/order-payment",
    async (payload,) => {
        const response = await UseFetch(
            API_END_POINTS.STRIPE_CHARGE_ORDER_PAYMENT,
            payload,
            {}
        );
        return response;
    }
);

/**  stripe payment intent sheet */
export const createSubscriptionPaymentIntent = createAsyncThunk(
    "get/order/information",
    async (payload,) => {
        const response = await UseFetch(
            API_END_POINTS.STRIPE_SUBSCRIPTION_SHEET, payload
        );
        return response;
    }
);

/**  stripe payment intent sheet */
export const getUserShippingAddresses = createAsyncThunk(
    "get/addresses",
    async (payload,{getState}) => {
        const userUuid = getState()?.login?.uuid;
        const response = await UseFetch(
            API_END_POINTS.GET_SHIPPING_ADDRESSES, null,{uuid:userUuid},
        );
        return response;
    }
);

/**  get subscription success order */
export const getSubscriptionSuccessResult = createAsyncThunk(
    "get/subscription/success",
    async (payload,{getState}) => {
        const uuid = getState()?.fetch?.subscription.uuid;
        const response = await UseFetch(
            API_END_POINTS.GET_USER_SUBSCRIPTION, null,{subscriptionUuid:uuid,groups:"paymentDetail"},
        );
        return response;
    }
);

export const cart = createSlice({
    name: "cart",
    initialState: {
        count: 0,
        detail: null,
        cartItems: [], // add to cart item list
        products: [], // product list
        orderUuid: null,
        cartTotalCount: null,
        cartSubtotal: null,
        paymentResponse: null,
        isSubscribe: false,
        paymentIntent: null,
        subscriptionPaymentIntent: null,
        /** payment order payload */
        shipping_information:{
            firstName: "",
            lastName: "",
            address: "",
            country: "Canada",
            state: "Quebec",
            city: "",
            postCode: "",
            phoneNumber: "",
        },
        billing_information: {
            address: "",
            country: "Canada",
            state: "Quebec",
            city: "",
            postCode: "",
            phoneNumber: "",
        },
        addresses: null,
        card_information: {},
        subscriptionPaymentStatus: false,
        payment_order_payload: {}, // final payload to do payment request
        /** end */
    },

    reducers: {
        /** subscription checkout switch */
        setSubscriptionPaymentStatus:(state,data)=>{
            state.subscriptionPaymentStatus = data.payload;
        },
        isSubscribe: (state, data) => {
            state.isSubscribe = data.payload;
        },
        /** Shipping reducers */
        shippingInformation: (state, data) => {
            state.shipping_information = data.payload;
        },
        resetCart: (state, count) => {
            state.cartItems = [];
            state.count = 0;
            state.detail = null;
            state.payment_order_payload = {};
            state.orderUuid = null;
            state.isSubscribe=false;
        },
        billingInformation: (state, data) => {
            state.billing_information = data.payload;
        },
        updateCartItemReducer: (state, data) => {
            const {payload: cartItem} = data;
            const {uuid} = cartItem;
            const {cartItems} = state;

            if (cartItems && cartItems[uuid]) {
                cartItems[uuid] = cartItem;
            }
        },
        deleteCartItemReducer: (state, data) => {
            const {payload: cartItem} = data;
            const {uuid} = cartItem;

            const cartItems = {...state.cartItems};

            if (cartItems && cartItems[uuid]) {
                delete cartItems[uuid];
                state.cartItems = cartItems;
            }
        },
        payment_intent_call: (state, data) => {
            const {
                payload: {isPaymentIntent},
            } = data;
            state.paymentIntentCall = isPaymentIntent;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCartItem.pending, (state, action) => {
                setState(state, action.payload);
            })
            .addCase(getCartItem.fulfilled, (state, action) => {
                let totalItems = 0;
                for (const uuid in state.cartItems) {
                    const cItem = state.cartItems[uuid];
                    totalItems += +cItem.quantity;
                }
                state.count = totalItems;
                state.cartTotalCount = totalItems;

            })
            .addCase(getCartItem.rejected, (state, action) => {
                setState(state, action.payload);
            })
            .addCase(addCartItems.fulfilled, (state, action) => {
                const {
                    cartItem,
                    cartItem: {uuid: cartItemUuid},
                } = action.payload;
                const {product, quantity, cart} = cartItem;

                if (!state.cartItems) {
                    state.cartItems = {};
                }
                state.cartItems = {...state.cartItems, [cartItemUuid]: cartItem};
                state.products.push(product);
                state.detail = cart;

                let totalItems = 0;
                for (const uuid in state.cartItems) {
                    const cItem = state.cartItems[uuid];
                    totalItems += +cItem.quantity;
                }
                state.count = totalItems;
                state.cartTotalCount = totalItems;
            })
            .addCase(createPayment.fulfilled, (state, action) => {
                state.paymentResponse = action.payload;
            })
            .addCase(createPaymentIntet.fulfilled, (state, action) => {
                const data = action.payload;
                state.paymentIntent = data;
                state.orderUuid = data.orderUuid;
            })
            .addCase(createSubscriptionPaymentIntent.fulfilled, (state, action) => {
                state.subscriptionPaymentIntent = action?.payload;
            })
            .addCase(getUserShippingAddresses.fulfilled, (state, action) => {
                if (action?.payload?.addresses?.shippingAddresses?.length !== 0) {
                    state.adresses = action?.payload?.addresses;
                    state.shipping_information = action?.payload?.addresses.shippingAddresses.slice(-1)[0];
                }
                if (action?.payload?.addresses?.billingAddresses?.length !== 0) {
                    state.adresses = action?.payload?.addresses;
                    state.billing_information = action?.payload?.addresses.billingAddresses.slice(-1)[0];
                }

            })
    },
});
// Action creators are generated for each case reducer function
export const {
    resetCart,
    isSubscribe,
    shippingInformation,
    billingInformation,
    updateCartItemReducer,
    deleteCartItemReducer,
    payment_intent_call,
    setSubscriptionPaymentStatus,
} = cart.actions;
export default cart.reducer;
