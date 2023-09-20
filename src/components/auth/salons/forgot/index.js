import { Link } from "react-router-dom";
import React from "react";
function SalonsForgot() {
  return (
    <main>
      <div className="layout-auth">
        <div className="auth-visual-wrapper auth-visual-saloon">
          <div className="auth-visual">
            <img
              loading="lazy"
              src="/assets/images/auth/salons-bg.png"
              alt="Salons Background Visual"
              width="1132"
              height="1318"
            />
          </div>
        </div>
        <div className="lang-switcher">
          <div className="dropdown">
            <button
              className="dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>EN (US)</span>
              <i className="icon icon-chevron-down"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  EN (US)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  FR (FR)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="auth-content">
          <div className="logo">
            <img
              loading="lazy"
              src="/assets/images/logo-salon-white.png"
              alt="Karisma White Logo"
              width="3885"
              height="1487"
            />
          </div>
          <div className="auth-form pallet-salon">
            <div className="controls-group">
              <div className="form-group">
                <label className="visually-hidden">Email or User</label>
                <input
                  type="text"
                  className="form-control form-control-rounded"
                  placeholder="Email or User"
                />
              </div>
            </div>
            <button className="btn btn-rounded d-block w-100  text-uppercase mt-4">
              Send Reset Link
            </button>
            <div className="form-info text-center">
              <p className="text-sm">
                Go back to
                <Link to="/salon/login" className="cta">
                  Login
                </Link>{" "}
                or
                <Link to="/salon/signup" className="cta">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default SalonsForgot;
