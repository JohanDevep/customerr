/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo_white from "../../../../public/assets/images/logo-white.png";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCollectionProduct,
  getSalonLocations,
  getSubscriptions,
} from "../../../redux/slices/Fetch";
import { getCartItem } from "../../../redux/slices/Cart";
import { UseFetch } from "../../../api/fetch/useFetch";
import { API_END_POINTS } from "../../../api/config";

function Header() {
  const dispatch = useDispatch();
  const subscriptionList = useSelector(
    (state) => state.fetch.subscriptionsList
  );
  const { user } = useSelector((state) => state.login);

  const token = localStorage.getItem("token");

  const isSubscribe = useSelector((state) => state.cart.isSubscribe);

  const count = useSelector((state) => state.cart.count);
  const [t, i18n] = useTranslation("common");

  useEffect(() => {
    const navbar = document.getElementById("js-site-navbar");
    window.onscroll = function () {
      window.pageYOffset >= 10
        ? navbar.classList.add("navbar-scrolled")
        : navbar.classList.remove("navbar-scrolled");
    };
  }, [0]);
  useEffect(() => {
    window.scrollTo(0, 0); //back to top on component load
  });

  const setGuestAccessToken = async () => {
    const accessToken = await UseFetch(API_END_POINTS.GUEST_USER_AUTH_TOKEN);
    localStorage.setItem("token", accessToken.token);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setGuestAccessToken();
    }
    /** get salons location */
    dispatch(getSalonLocations());
    /** get products & collection */
    dispatch(GetCollectionProduct());
    dispatch(getSubscriptions());
    dispatch(getCartItem());
  }, []);

  const closeHamwburgerMenu = () => {
    const width = window.innerWidth;
    if (width <= 992) {
      document.getElementById("toggleMenu").click();
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top site-navbar"
      aria-label="Offcanvas navbar large"
      id="js-site-navbar"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            loading="lazy"
            src={logo_white}
            alt="Karisma White Logo"
            width="1444"
            height="412"
            className="brand-img"
          />
        </Link>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close btn-close-black"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="icon icon-close"></i>
            </button>
          </div>
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close btn-close-black"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={() => {
                    closeHamwburgerMenu();
                  }}
                >
                  {t("Header.home.value")}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link"
                  to="/subscriptions"
                  onClick={() => {
                    closeHamwburgerMenu();
                  }}
                >
                  {t("Header.subscription.value")}
                </Link>
                <i
                  className="icon icon-chevron-down dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></i>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`subscription-unlimited-beauty/${subscriptionList ? subscriptionList[0]?.uuid : null
                        }`}
                      onClick={() => {
                        closeHamwburgerMenu();
                      }}
                    >
                      {t("Header.unlimitBeauty.value")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/subscription-unlimited-self-care?id=${subscriptionList ? subscriptionList[1]?.uuid : null
                        }`}
                      onClick={() => {
                        closeHamwburgerMenu();
                      }}
                    >
                      {t("Header.unlimitSelfCare.value")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/subscription-unlimited-wellness?id=${subscriptionList ? subscriptionList[2]?.uuid : null
                        }`}
                      onClick={() => {
                        closeHamwburgerMenu();
                      }}
                    >
                      {t("Header.unlimitWellness.value")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/store"
                  onClick={() => {
                    closeHamwburgerMenu();
                  }}
                >
                  {t("Header.store.value")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about-us"
                  onClick={() => {
                    closeHamwburgerMenu();
                  }}
                >
                  {t("Header.aboutUs.value")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact-us"
                  onClick={() => {
                    closeHamwburgerMenu();
                  }}
                >
                  {t("Header.contact.value")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/our-salons"
                  onClick={() => {
                    closeHamwburgerMenu();
                  }}
                >
                  {t("Header.locations.value")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-right">
          <ul className="list-header-icons">
            <li className="dropdown dropdown-header-right">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label="Language"
              >
                <i className="icon icon-language"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-ctas">
                <div className="dropdown-menu-wrapper dropdown-menu-dark">
                  <ul className="dropdown-menu-list">
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => i18n.changeLanguage("en")}
                        href="#"
                      >
                        English
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => i18n.changeLanguage("fr")}
                        href="#"
                      >
                        French
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => i18n.changeLanguage("es")}
                        href="#"
                      >
                        Spanish
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link to="/cart" className="badge-link">
                <i className="icon icon-cart"></i>
                <span className="badge-count">{!isSubscribe ? count : 1}</span>
                {/*<span className="badge-count"> {count}</span>*/}
              </Link>
            </li>
            <li className="dropdown dropdown-header-right d-none">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label="Search"
              >
                <i className="icon icon-search"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-form">
                <div className="dropdown-menu-wrapper">
                  <input
                    type="text"
                    placeholder="Search"
                    className="form-control"
                  />
                </div>
              </div>
            </li>
            <li className="dropdown dropdown-header-right">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label="User"
              >
                <i className="icon icon-user-circle-o"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-ctas">
                <div className="dropdown-menu-wrapper dropdown-menu-dark">
                  <ul className="dropdown-menu-list">
                    {/*<li>*/}
                    {/*    <a*/}
                    {/*        className="dropdown-item"*/}
                    {/*        href="javascript:void();"*/}
                    {/*    >*/}
                    {/*        Logout*/}
                    {/*    </a>*/}
                    {/*</li>*/}

                    <li>
                      {token !== null ? (
                        <a className="dropdown-item" href="/dashboard">
                          My-Account
                        </a>
                      ) : (
                        <a className="dropdown-item" href="/customer/login">
                          Login
                        </a>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            id="toggleMenu"
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
