import React from "react";
import { useTranslation } from "react-i18next";

const Disputes_Claims_Popup = () => {
  const [t] = useTranslation("common");
  return (
    <div
      className="modal fade"
      id="contentAccordion7"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="contentAccordionLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-lg">
        <div className="modal-content">
          <div className="modal-header modal-header-fixed">
            <h2 className="modal-title">
              {t("DisputesClaims_Modal.disputesClaims.text")}
            </h2>
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
            <div className="modal-accordion-content">
              <div className="accordion accordion-flush" id="siteAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingAccordion1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#itemAccordion1"
                      aria-expanded="false"
                      aria-controls="itemAccordion1"
                    >
                      {t("DisputesClaims_Modal.disputesClaims.text")}
                      <i className="icon icon-chevron-down"></i>
                    </button>
                  </h2>
                  <div
                    id="itemAccordion1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingAccordion1"
                  >
                    <div className="accordion-body">
                      <p>{t("DisputesClaims_Modal.disputesClaimsPara.text")}</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingAccordion2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#itemAccordion2"
                      aria-expanded="false"
                      aria-controls="itemAccordion2"
                    >
                      {t("DisputesClaims_Modal.howCanConnect.text")}
                      <i className="icon icon-chevron-down"></i>
                    </button>
                  </h2>
                  <div
                    id="itemAccordion2"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingAccordion2"
                  >
                    <div className="accordion-body">
                      <p>{t("DisputesClaims_Modal.howCanConnectPara.text")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disputes_Claims_Popup;
