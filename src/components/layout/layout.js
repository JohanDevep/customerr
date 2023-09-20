import React from "react";
import Header from "./header/MainHeader";
import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";
import "./style/Style.css";


const Layout = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;