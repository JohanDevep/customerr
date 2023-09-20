import React from "react";
import { useTranslation } from "react-i18next";

const Reserve_Spot_Success = () => {
  const [t] = useTranslation("common");
  return (
    <div
      className="modal fade"
      id="reserveSpotSuccess"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="reserveSpotSuccessLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-sm">
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
          <div className="modal-body">
            <div className="modal-success text-center">
              <div className="modal-body-header modal-success-header">
                <h2 className="modal-title">
                  {t("ReserveSpotSuccess_Modal.reserveSpot.text")}
                </h2>
                <h3 className="modal-subtitle">
                  {t("ReserveSpotSuccess_Modal.requestSuccessMade.text")}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserve_Spot_Success;
