import React from "react";
import { useTranslation } from "react-i18next";

const Coiffeuse_Popup = () => {
  const [t] = useTranslation("common");
  const style_popup = {
    display: "block",
    paddingLeft: "0px",
  };
  return (
    <div
      className="modal fade show"
      id="singleProduct"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="singleProductLabel"
      aria-hidden="true"
      style={style_popup}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
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
            <div className="modal-single-product">
              <div className="career-item-card-info">
                <p className="small mb-1">
                  <strong>{t("Coiffeuse_Modal.4Hours.text")}</strong>
                </p>
                <p className="location-item mb-1">
                  <i className="icon icon-location"></i>
                  <span className="mx-1">
                    {t("Coiffeuse_Modal.address.text")}
                  </span>
                </p>
                <h2 className="modal-title">
                  {t("Coiffeuse_Modal.coiffeuse.text")}
                </h2>
                <ul className="modal-single-definition-list">
                  <li>
                    <i className="icon icon-work"></i>
                    <span>{t("Coiffeuse_Modal.fullName.text")}</span>
                  </li>
                  <li>
                    <i className="icon icon-dollar"></i>
                    <span>{t("Coiffeuse_Modal.60CAD.text")}</span>
                  </li>
                  <li>
                    <i className="icon icon-chalkboard-user"></i>
                    <span>{t("Coiffeuse_Modal.noExperience.text")}</span>
                  </li>
                </ul>
                <button className="btn-dark modal-single-product-cta">
                  {t("Coiffeuse_Modal.apply.value")}
                </button>
              </div>
              <div className="modal-single-product-content">
                <p>{t("Coiffeuse_Modal.applyPara.text")}</p>
                <p>
                  <strong>{t("Coiffeuse_Modal.loremHeading.text")}</strong>
                </p>
                <p>{t("Coiffeuse_Modal.loremHeadingPara.text")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coiffeuse_Popup;
