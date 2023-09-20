import React from "react";
import { useTranslation } from "react-i18next";

const Inscription_Popup = () => {
  const [t] = useTranslation("common");
  return (
    <div
      className="modal fade show"
      id="inscriptionSuccess"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="inscriptionSuccessLabel"
      aria-hidden="true"
      style={{ display: "block" }}
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
                  {t("Inscription_Modal.inscription.text")}
                </h2>
                <h3 className="modal-subtitle">
                  {t("Inscription_Modal.successfullyMade.text")}
                </h3>
                <p>{t("Inscription_Modal.successfullyMadePara.text")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscription_Popup;
