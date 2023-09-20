import React from "react";
import { useTranslation } from "react-i18next";

const Payments_Security = () => {
  const [t] = useTranslation("common");
  return (
    <div
      className="modal fade"
      id="contentAccordion1"
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
              {t("PaymentSecurity_Modal.payment&Security.text")}
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
                      {t("PaymentSecurity_Modal.whatTypePayment.text")}
                      <i className="icon icon-chevron-down"></i>
                    </button>
                  </h2>
                  <div
                    id="itemAccordion1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingAccordion1"
                  >
                    <div className="accordion-body">
                      <p>
                        {t("PaymentSecurity_Modal.whatTypePaymentPara.text")}
                      </p>
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
                      {t("PaymentSecurity_Modal.myCreditCard.text")}
                      <i className="icon icon-chevron-down"></i>
                    </button>
                  </h2>
                  <div
                    id="itemAccordion2"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingAccordion2"
                  >
                    <div className="accordion-body">
                      <p>{t("PaymentSecurity_Modal.myCreditCardPara1.text")}</p>
                      <p>
                        {" "}
                        {t("PaymentSecurity_Modal.myCreditCardPara2.text")}
                      </p>
                      <p>{t("PaymentSecurity_Modal.myCreditCardPara3.text")}</p>
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
                      {t("PaymentSecurity_Modal.howDoesKarismaProtect.text")}
                      <i className="icon icon-chevron-down"></i>
                    </button>
                  </h2>
                  <div
                    id="itemAccordion3"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingAccordion3"
                  >
                    <div className="accordion-body">
                      <p>
                        {t(
                          "PaymentSecurity_Modal.howDoesKarismaProtectPara.text"
                        )}
                      </p>
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

export default Payments_Security;
