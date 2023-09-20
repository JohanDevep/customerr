import React from "react";
import { useTranslation } from "react-i18next";

const Subscription_Plan = () => {
  const [t] = useTranslation("common");

  return (
    <div
      className="modal fade"
      id="contentAccordion4"
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
              {t("SubscriptionPlan_Modal.subsPlan.text")}
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
                      {t("SubscriptionPlan_Modal.howPlanWorks.text")}
                      <i className="icon icon-chevron-down"></i>
                    </button>
                  </h2>
                  <div
                    id="itemAccordion1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingAccordion1"
                  >
                    <div className="accordion-body">
                      <p>{t("SubscriptionPlan_Modal.howPlanWorksPara.text")}</p>
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
                      {t("SubscriptionPlan_Modal.whatServices.text")}
                      <i className="icon icon-chevron-down"></i>
                    </button>
                  </h2>
                  <div
                    id="itemAccordion2"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingAccordion2"
                  >
                    <div className="accordion-body">
                      <p>{t("SubscriptionPlan_Modal.whatServicesPara.text")}</p>
                      <ul className="text-start">
                        <li>
                          {t("SubscriptionPlan_Modal.whatServicesitem1.text")}
                        </li>
                        <li>
                          {t("SubscriptionPlan_Modal.whatServicesitem2.text")}
                        </li>
                        <li>
                          {t("SubscriptionPlan_Modal.whatServicesitem3.text")}
                        </li>
                        <li>
                          {t("SubscriptionPlan_Modal.whatServicesitem4.text")}
                        </li>
                        <li>
                          {t("SubscriptionPlan_Modal.whatServicesitem5.text")}
                        </li>
                        <li>
                          {t("SubscriptionPlan_Modal.whatServicesitem6.text")}
                        </li>
                        <li>
                          {t("SubscriptionPlan_Modal.whatServicesitem7.text")}
                        </li>
                        <li>
                          {t("SubscriptionPlan_Modal.whatServicesitem8.text")}
                        </li>
                        <li>
                          {t("SubscriptionPlan_Modal.whatServicesitem9.text")}
                        </li>
                        <li>
                          {t("SubscriptionPlan_Modal.whatServicesitem10.text")}
                        </li>
                        <li>
                          {t("SubscriptionPlan_Modal.whatServicesitem11.text")}
                        </li>
                        <li>
                          {t("SubscriptionPlan_Modal.whatServicesitem12.text")}
                        </li>
                      </ul>
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
                      {t("SubscriptionPlan_Modal.HowLongCan.text")}
                      <i className="icon icon-chevron-down"></i>
                    </button>
                  </h2>
                  <div
                    id="itemAccordion3"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingAccordion3"
                  >
                    <div className="accordion-body">
                      <p>{t("SubscriptionPlan_Modal.HowLongCanPara.text")}</p>
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
                      {t("SubscriptionPlan_Modal.allSalonsOffer.text")}
                      <i className="icon icon-chevron-down"></i>
                    </button>
                  </h2>
                  <div
                    id="itemAccordion4"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingAccordion4"
                  >
                    <div className="accordion-body">
                      <p>
                        {t("SubscriptionPlan_Modal.allSalonsOfferPara.text")}
                      </p>
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
                      {t("SubscriptionPlan_Modal.isItNecessary.text")}
                      <i className="icon icon-chevron-down"></i>
                    </button>
                  </h2>
                  <div
                    id="itemAccordion5"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingAccordion5"
                  >
                    <div className="accordion-body">
                      <p>
                        {t("SubscriptionPlan_Modal.isItNecessaryPara.text")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingAccordion6">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#itemAccordion6"
                      aria-expanded="false"
                      aria-controls="itemAccordion6"
                    >
                      {t("SubscriptionPlan_Modal.canIAccess.text")}
                      <i className="icon icon-chevron-down"></i>
                    </button>
                  </h2>
                  <div
                    id="itemAccordion6"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingAccordion6"
                  >
                    <div className="accordion-body">
                      <p>{t("SubscriptionPlan_Modal.canIAccessPara.text")}</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingAccordion7">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#itemAccordion7"
                      aria-expanded="false"
                      aria-controls="itemAccordion7"
                    >
                      {t("SubscriptionPlan_Modal.expirationSubscription.text")}
                      <i className="icon icon-chevron-down"></i>
                    </button>
                  </h2>
                  <div
                    id="itemAccordion7"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingAccordion7"
                  >
                    <div className="accordion-body">
                      <p>
                        {t(
                          "SubscriptionPlan_Modal.expirationSubscriptionPara.text"
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingAccordion8">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#itemAccordion8"
                      aria-expanded="false"
                      aria-controls="itemAccordion8"
                    >
                      {t("SubscriptionPlan_Modal.paymentConfirmation.text")}
                      <i className="icon icon-chevron-down"></i>
                    </button>
                  </h2>
                  <div
                    id="itemAccordion8"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingAccordion8"
                  >
                    <div className="accordion-body">
                      <p>
                        {t(
                          "SubscriptionPlan_Modal.paymentConfirmationPara.text"
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

export default Subscription_Plan;
