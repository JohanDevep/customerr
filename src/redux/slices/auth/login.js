import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UseFetch } from "../../../api/fetch/useFetch";
import { API_END_POINTS } from "../../../api/config";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Helping from "../../../api/agent/helping";
import { END_POINTS } from "../../../config";
// import { response } from "express";

export const LoginUser = createAsyncThunk("users/login", async (payload) => {
  try {
    const config = Helping.getConfig(); 
    const response = await axios.post(`${END_POINTS.LOGIN}`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: config.authorization,
      },
    });
    if (response.status !== 200) {
      console.log('response.status: ', response);
      throw new Error("Login failed");
    }
    return response.data;
  } catch (error) {
    return error;
  }
});

/** Register basic user */
export const RegisterBasic = createAsyncThunk(
  "/register/basic-user",
  async (payload, thunkAPI) => {
    const response = await UseFetch(API_END_POINTS.REGISTER_BASIC, payload);
    return response;
  }
);


export const sliceLogin = createSlice({
  name: "login",
  initialState: {
    email: "",
    token: "",
    uuid: "",
    user: "",
    role: "",
    selectedSalon: "", // save salon uuid upon location select
    error: true, //
  },
  reducers: {
    selectedSalon: (state, data) => {
      state.selectedSalon = data.payload;
      state.error = false
    },
  },
  extraReducers(builder) {
    /* login reducer */
    builder
      .addCase(LoginUser.pending, (state, action) => {})
      .addCase(LoginUser.fulfilled, (state, action) => {
        let decode = jwtDecode(action.payload.token);
        localStorage.setItem("token", action.payload.token);
        state.email = decode.email;
        state.token = action.payload.token;
        state.uuid = decode.uuid;
        state.user = decode;
          decode?.roles?.forEach((role)=>{
              action.role = role?.name
          })
      })
      .addCase(LoginUser.rejected, (state, action) => {});
  },
});
export const { selectedSalon } = sliceLogin.actions;
export default sliceLogin.reducer;
