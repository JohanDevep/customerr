import React from "react";
import { useTranslation } from "react-i18next";

const Shipping = () => {
  const [t] = useTranslation("common");
  const shipping_style = {
    display: "block",
    paddingLeft: "0px",
  };
  return (
    <div
      className="modal fade"
      id="contentAccordion"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="contentAccordionLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-lg">
        <div className="modal-content">
          <div className="modal-header modal-header-fixed">
            <h2 className="modal-title">Shipping</h2>
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
                      {t("Shipping_Modal.whichCountries.text")}
                      <i className="icon icon-chevron-down"></i>
                    </button>
                  </h2>
                  <div
                    id="itemAccordion1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingAccordion1"
                  >
                    <div className="accordion-body">
                      <p>{t("Shipping_Modal.whichCountriesPara.text")}</p>
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
                      {t("Shipping_Modal.freeOffer.text")}
                      <i className="icon icon-chevron-down"></i>
                    </button>
                  </h2>
                  <div
                    id="itemAccordion2"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingAccordion2"
                  >
                    <div className="accordion-body">
                      <p>{t("Shipping_Modal.freeOfferPara.text")}</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingAccordion3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#itemAccordion3"
                      aria-expanded="false"
                      aria-controls="itemAccordion3"
                    >
                      {t("Shipping_Modal.howLongDoes.text")}
                      <i className="icon icon-chevron-down"></i>
                    </button>
                  </h2>
                  <div
                    id="itemAccordion3"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingAccordion3"
                  >
                    <div className="accordion-body">
                      <p>{t("Shipping_Modal.howLongDoesPara1.text")}</p>
                      <p>{t("Shipping_Modal.howLongDoesPara2.text")}</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingAccordion4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#itemAccordion4"
                      aria-expanded="false"
                      aria-controls="itemAccordion4"
                    >
                      {t("Shipping_Modal.freeRegularShipping.text")}
                      <i className="icon icon-chevron-down"></i>
                    </button>
                  </h2>
                  <div
                    id="itemAccordion4"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingAccordion4"
                  >
                    <div className="accordion-body">
                      <p>{t("Shipping_Modal.freeRegularShippingPara1.text")}</p>
                      <p>{t("Shipping_Modal.freeRegularShippingPara2.text")}</p>
                      <p>{t("Shipping_Modal.freeRegularShippingPara3.text")}</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingAccordion5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#itemAccordion5"
                      aria-expanded="false"
                      aria-controls="itemAccordion5"
                    >
                      {t("Shipping_Modal.deliveryDelay.text")}
                      <i className="icon icon-chevron-down"></i>
                    </button>
                  </h2>
                  <div
                    id="itemAccordion5"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingAccordion5"
                  >
                    <div className="accordion-body">
                      <p>{t("Shipping_Modal.deliveryDelayPara1.text")}</p>
                      <p>{t("Shipping_Modal.deliveryDelayPara2.text")}</p>
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

export default Shipping;
