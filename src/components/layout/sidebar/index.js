/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactSVG } from "react-svg";
// import { useDispatch, useSelector } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useTranslation } from "react-i18next";

function SideBar() {
    const [t] = useTranslation("common");
    const location = useLocation();
    // const dispatch = useDispatch();
    const [sideBar, setSideBar] = useState(true);
    // const {login} = useSelector((state) => state);

    const SideBarToggle = () => {
        // eslint-disable-next-line no-unused-expressions
        setSideBar(!sideBar),
            document.querySelector("body").classList.toggle("side-bar--expend");
    };

    const HideAside = () => {
        document.querySelector("body").classList.toggle("show-mobile-menu");
    };

    return (
        <>
        <div className="cross-icon cursor-pointer" onClick={HideAside}>
                <ReactSVG src="/assets/icons/close.svg"/>
            </div>
            <div className={`dashboard-sidebar  ${sideBar ? "full" : "mini"} `}>
            <div className="toggle-icon" onClick={SideBarToggle}>
                    <ReactSVG src="/assets/icons/arrow-right.svg"/>
                </div>
                <Link to="/" className="logo text-center">
                    <ReactSVG
                        className="hide-on-mini"
                        src={`/assets/images/${sideBar ? "logo" : "logo-sm"}.svg`}
                    />
                    <ReactSVG
                        className="show-on-mini"
                        src={`/assets/images/${"logo-sm"}.svg`}
                    />
                </Link>
                <PerfectScrollbar>
                    <ul className="">
                        <li>
                            <Link
                                to="/dashboard"
                                className={`d-flex align-items-center ${
                                    location.pathname == "/dashboard" ? "active" : ""
                                } `}
                            >
                                <div className="icon">
                                    <ReactSVG src="/assets/icons/left-menu/icon-1.svg"/>
                                </div>
                                <span>{t("Sidebar.dashboard.text")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/beauty"
                                className={`d-flex align-items-center ${
                                    location.pathname == "/dashboard/beauty" ? "active" : ""
                                } `}
                            >
                                <div className="icon">
                                    <ReactSVG src="/assets/icons/left-menu/icon-2.svg"/>
                                </div>
                                <span>{t("Sidebar.beauty.text")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/dashboard/wellness"
                                className={`d-flex align-items-center ${
                                    location.pathname == "/dashboard/wellness" ? "active" : ""
                                } `}
                            >
                                <div className="icon">
                                    <ReactSVG src="/assets/icons/left-menu/icon-3.svg"/>
                                </div>
                                <span>{t("Sidebar.wellness.text")}</span>
                            </Link>
                        </li>
                        <li>
                        <Link 
                                to="/dashboard/self-care"
                                className={`d-flex align-items-center ${
                                    location.pathname == "/dashboard/self-care" ? "active" : ""
                                } `}
                            >
                                <div className="icon">
                                    <ReactSVG src="/assets/icons/left-menu/icon-4.svg"/>
                                </div>
                                <span>{t("Sidebar.self-care.text")}</span>
                            </Link>
                        </li>
                        <li>
                            {/* <Link
                                // to="/customers"
                                className={`d-flex align-items-center ${
                                    location.pathname == "/customers" ||
                                    location.pathname == "/customers-detail"
                                        ? "active"
                                        : ""
                                } `}
                            > */}
                            <Link 
                                to="/dashboard/store"
                                className={`d-flex align-items-center ${
                                    location.pathname == "/dashboard/store" ? "active" : ""
                                } `}
                            >
                                <div className="icon">
                                    <ReactSVG src="/assets/icons/left-menu/icon-5.svg"/>
                                </div>
                                <span>{t("Sidebar.store.text")}</span>
                            </Link>
                        </li>
                        <li>
                        <Link 
                                to="/dashboard/membership"
                                className={`d-flex align-items-center ${
                                    location.pathname == "/dashboard/membership" ? "active" : ""
                                } `}
                            >
                                <div className="icon">
                                    <ReactSVG src="/assets/icons/left-menu/icon-6.svg"/>
                                </div>
                                <span>{t("Sidebar.membership.text")}</span>
                            </Link>
                        </li>
                        <li>
                        <Link 
                                to="/dashboard/loyalty"
                                className={`d-flex align-items-center ${
                                    location.pathname == "/dashboard/loyalty" ? "active" : ""
                                } `}
                            >
                                <div className="icon">
                                    <ReactSVG src="/assets/icons/left-menu/icon-6.svg"/>
                                </div>
                                <span>{t("Sidebar.loyalty.text")}</span>
                            </Link>
                        </li>
                        <li>
                        <Link 
                                to="/dashboard/help"
                                className={`d-flex align-items-center ${
                                    location.pathname == "/dashboard/help" ? "active" : ""
                                } `}
                            >
                            <div className="icon">
                                <ReactSVG src="/assets/icons/help-icon.svg"/>
                            </div>
                            <Link to='/dashboard/help'>{t("Sidebar.help.text")}</Link>
                        </Link>
                    </li>
                        <li>
                        <Link 
                                to="/dashboard/tickets"
                                className={`d-flex align-items-center ${
                                    location.pathname == "/dashboard/tickets" ? "active" : ""
                                } `}
                            >
                                <div className="icon">
                                    <ReactSVG src="/assets/icons/left-menu/icon-6.svg"/>
                                </div>
                                <span>{t("Sidebar.ticket.text")}</span>
                            </Link>
                        </li>
                    </ul>
                </PerfectScrollbar>
                {/* <ul>
                    <li>
                        <Link to="#" className="d-flex align-items-center help-text">
                            <div className="icon">
                                <ReactSVG src="/assets/icons/help-icon.svg"/>
                            </div>
                            <Link to='/help'>{t("Sidebar.help.text")}</Link>
                        </Link>
                    </li>
                </ul> */}
</div>
        </>
    )
}

export default SideBar;