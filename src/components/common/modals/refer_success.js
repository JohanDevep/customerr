import React from "react";
import { useTranslation } from "react-i18next";

const ReferSuccess = () => {
  const [t] = useTranslation("common");
  return (
    <div
      className="modal fade"
      id="referASalonSuccess"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="referASalonSuccessLabel"
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
                  {t("ReferSuccess.referSalon.text")}
                </h2>
                <h3 className="modal-subtitle">
                  {t("ReferSuccess.requestSuccessfully.text")}
                </h3>
                <p>{t("ReferSuccess.requestSuccessfullyPara.text")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferSuccess;
