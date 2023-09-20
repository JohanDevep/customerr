import React from "react";
import { useSelector } from "react-redux";
export function GetToken() {
  let token = useSelector((state) => state.login.token);
  token = `Bearer ${token}`;
  return token;
}
