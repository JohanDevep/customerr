import React from "react";
import salon_otp_img from "../../../../../public/assets/images/auth/salons-bg.png";
import white_salon_logo from "../../../../../public/assets/images/logo-salon-white.png";

const index = () => {
  return (
    <main>
      <div className="layout-auth">
        <div className="auth-visual-wrapper auth-visual-saloon">
          <div className="auth-visual">
            <img
              loading="lazy"
              src={salon_otp_img}
              draggable={false}
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
              src={white_salon_logo}
              draggable={false}
              alt="Karisma White Logo"
              width="3885"
              height="1487"
            />
          </div>
          <div className="auth-form pallet-salon">
            <div className="otp-controls-group">
              <div className="form-group">
                <label className="visually-hidden" for="otp-1">
                  Otp Character 1
                </label>
                <input
                  id="otp-1"
                  type="text"
                  className="form-control form-control-rounded"
                  maxlength="1"
                />
              </div>
              <div className="form-group">
                <label className="visually-hidden" for="otp-2">
                  Otp Character 2
                </label>
                <input
                  id="otp-2"
                  type="text"
                  className="form-control form-control-rounded"
                  maxlength="1"
                />
              </div>
              <div className="form-group">
                <label className="visually-hidden" for="otp-3">
                  Otp Character 3
                </label>
                <input
                  id="otp-3"
                  type="text"
                  className="form-control form-control-rounded"
                  maxlength="1"
                />
              </div>
              <div className="form-group">
                <label className="visually-hidden" for="otp-4">
                  Otp Character 4
                </label>
                <input
                  id="otp-4"
                  type="text"
                  className="form-control form-control-rounded"
                  maxlength="1"
                />
              </div>
            </div>
            <button className="btn btn-rounded d-block w-100  text-uppercase mt-4">
              Verify OTP
            </button>
            <div className="form-info text-center">
              <p className="text-sm">
                Didn't Get OTP ?{" "}
                <a href="#" className="cta">
                  Resend
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default index;
