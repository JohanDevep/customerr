import React from "react";
import subs_modal_thumbnail_img from "../../../../public/assets/images/subscription-modal-thumbnail.png";
import SubscriptionSuccess from "./subscription_success";
import { useTranslation } from "react-i18next";

const HomePagePopUp = (props) => {
  const [t] = useTranslation("common");
  const popup_style = {
    display: "block",
    paddingLeft: "0px",
  };
  return (
    <React.Fragment>
      <div
        className="modal fade modal-subscription"
        id="subscriptionModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="subscriptionModalLabel"
        aria-hidden="true"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-lg">
          <div className="modal-content bg-pi-800">
            <div className="modal-thumbnail">
              <img
                src={subs_modal_thumbnail_img}
                alt="Subscription Modal Thumbnail"
              />
            </div>
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
              <div className="modal-subscription-body">
                <h2 className="modal-title">
                  <small>{t("HomePage_Modal.letsChange.text")}</small>
                  {t("HomePage_Modal.beautyIndustry.text")}
                </h2>
                <form className="modal-subscription-form">
                  <legend className="visually-hidden">
                    Let's change the Beauty industry.
                  </legend>
                  <fieldset>
                    <div className="form-group-text">
                      <p>{t("HomePage_Modal.beautyIndustryPara.text")}</p>
                    </div>
                    <div className="form-group">
                      <label for="email" className="form-label">
                        {t("HomePage_Modal.beautyIndustryPara2.text")}
                      </label>
                      <input
                        type="email"
                        className="form-control w-100"
                        required={true}
                        placeholder={t("HomePage_Modal.email.text")}
                      />
                    </div>
                    <button
                      className="btn-dark btn-block"
                      type="button"
                      data-bs-target="#subscriptionSuccess"
                      data-bs-toggle="modal"
                    >
                      {t("HomePage_Modal.imIn.value")}
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubscriptionSuccess />
    </React.Fragment>
  );
};

export default HomePagePopUp;
