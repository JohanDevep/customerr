import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const IsProtected = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  return token ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default IsProtected;