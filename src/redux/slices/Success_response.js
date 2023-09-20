import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UseFetch } from "../../api/fetch/useFetch";
import { API_END_POINTS } from "../../api/config";

export const CreateSubscription = createAsyncThunk(
  "cart/create/subscription",
  async (payload) => {
    const response = await UseFetch(API_END_POINTS.STRIPE_CHECKOUT, payload);
    return response;
  }
);

export const CardSuccessSlice = createSlice({
  name: "CardSuccess",
  initialState: {
    subscriptionResponse: {},
  },
  reducers: {
    subscriptionResponse: (state, action) => {
      state.subscriptionResponse = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateSubscription.pending, (state, action) => {})
      .addCase(CreateSubscription.fulfilled, (state, action) => {
        // state.subscriptionResponse = action.payload;
      })
      .addCase(CreateSubscription.rejected, (state, action) => {});
  },
});

export const { subscriptionResponse } = CardSuccessSlice.actions;
export default CardSuccessSlice.reducer;
