import React from "react";
import video_placeholder_img from "../../../../public/assets/images/video-placeholder.png";
import avatar_img from "../../../../public/assets/images/avatar-2.png";
import { useTranslation } from "react-i18next";

const Tequila_Rhum_Popup = () => {
  const [t] = useTranslation("common");
  return (
    <div
      className="modal fade show"
      id="singleSalon"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="singleSalonLabel"
      aria-hidden="true"
      style={{ display: "block" }}
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
            <div className="modal-single-item">
              <div className="modal-rating-counter">
                <ul className="modal-list-rating">
                  <li>
                    <i className="icon icon-star"></i>
                  </li>
                  <li>
                    <i className="icon icon-star"></i>
                  </li>
                  <li>
                    <i className="icon icon-star"></i>
                  </li>
                  <li>
                    <i className="icon icon-star"></i>
                  </li>
                  <li>
                    <i className="icon icon-star-o"></i>
                  </li>
                </ul>
                <p>{t("TequilaRhum_Modal.120Reviews.text")}</p>
              </div>
              <div className="modal-single-header">
                <h2 className="modal-title">
                  {t("TequilaRhum_Modal.TequilaRhum.text")}
                </h2>
                <ul className="modal-single-definition-list">
                  <li>
                    <i className="icon icon-location"></i>
                    <span>{t("TequilaRhum_Modal.address.text")}</span>
                  </li>
                  <li>
                    <i className="icon icon-clock icon-font-sm"></i>
                    <span>
                      {t("TequilaRhum_Modal.dayTime1.text")} <br />
                      {t("TequilaRhum_Modal.dayTIme2.text")} <br />
                      {t("TequilaRhum_Modal.dayTime3.text")}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="modal-single-video-container">
                <img src={video_placeholder_img} alt="Video placeholder" />
              </div>
              <div className="modal-single-media">
                <div className="modal-single-media-thumbnail">
                  <img
                    src={avatar_img}
                    alt="User Avatar"
                    width="85"
                    height="85"
                  />
                </div>
                <div className="modal-single-media-content">
                  <h3 className="modal-single-media-title">
                    {t("TequilaRhum_Modal.yvenaHenry.text")}
                  </h3>
                  <p>{t("TequilaRhum_Modal.yvenaHenryPara.text")}</p>
                </div>
              </div>
              <div className="modal-single-detail-text">
                <p>{t("TequilaRhum_Modal.yvenaHenryPara2.text")}</p>
              </div>
              <div className="modal-single-footer">
                <button className="btn-dark btn-block">
                  {t("TequilaRhum_Modal.bookNow.value")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tequila_Rhum_Popup;
