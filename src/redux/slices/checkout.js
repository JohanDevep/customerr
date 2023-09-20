import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UseFetch } from "../../api/fetch/useFetch";
import { API_END_POINTS } from "../../api/config";

export const CheckoutCart = createAsyncThunk(
  "cart/Checkout/",
  async (payload) => {
    const response = await UseFetch(
      API_END_POINTS.STRIPE_ORDER_CHECKOUT_ITEM,
      payload,
      {}
    );
    return response;
  }
);

/** post subscribe */

export const CheckoutSlice = createSlice({
  name: "checkout",
  initialState: {
    billingaddress: [],
    shippingaddress: [],
    subscriptionPaymentIntent: [],
    cart: [],
  },
  reducers: {
    billingaddressReducer: (state, data) => {
      state.billingaddress = data.payload;
    },
    shippingaddressReducer: (state, data) => {
      state.shippingaddress = data.payload;
    },
    cartReducer: (state, data) => {
      state.cart = data.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CheckoutCart.pending, (state, action) => {})
      .addCase(CheckoutCart.fulfilled, (state, action) => {})
      .addCase(CheckoutCart.rejected, (state, action) => {})
  },
});

export default CheckoutSlice.reducer;
