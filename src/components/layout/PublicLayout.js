import React from "react";
import { Outlet } from "react-router-dom";
import PublicHeader from "./header/PublicHeader";
import PublicFooter from "./footer/PublicFooter";

const PublicLayout = () => {
  return (
    <div className="page-wrapper bg-pi-800">
      <PublicHeader />
      <Outlet />
      <PublicFooter />
    </div>
  );
};
export default PublicLayout;
