import React from "react";
import { useTranslation } from "react-i18next";

const Reserve_Spot_Popup = () => {
  const [t] = useTranslation("common");
  const reserve_style = {
    display: "block",
    paddingLeft: "0px",
  };
  return (
    <div
      className="modal fade show"
      id="reserveSpot"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="reserveSpotLabel"
      aria-hidden="true"
      style={reserve_style}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-pi-800">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="icon icon-close"></i>
            </button>
          </div>
          <div className="modal-body text-center">
            <div className="modal-success">
              <h2 className="modal-title">
                {t("ReserveSpot.reserveYourSpot.text")}
              </h2>
              <form className="reserve-spot-form">
                <legend className="visually-hidden">Reserve your spot</legend>
                <fieldset>
                  <div className="form-group">
                    <label for="email" className="visually-hidden">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder={t("ReserveSpot.email.text")}
                    />
                  </div>
                  <button
                    className="btn-dark btn-block"
                    type="button"
                    data-bs-target="#reserveSpotSuccess"
                    data-bs-toggle="modal"
                  >
                    {t("ReserveSpot.joinWaitList.value")}
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserve_Spot_Popup;
