import React from "react";

import { useTranslation } from "react-i18next";
import Rating from "react-rating";

function SalonsDetailsModal(props) {
  const [t] = useTranslation("common");
  return (
    <div
      className="modal fade"
      id="singleSalon"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="singleSalonLabel"
      aria-hidden="true"
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
                <Rating
                  initialRating={props?.salonsDetails?.rating}
                  emptySymbol="icon icon-star-o"
                  fullSymbol="icon icon-star"
                  fractions={2}
                  readonly={true}
                />
                <p>({props?.salonsDetails?.total_reviews} Reviews)</p>
              </div>
              <div className="modal-single-header">
                <h2 className="modal-title">{props?.salonsDetails?.name}</h2>
                <ul className="modal-single-definition-list">
                  <li>
                    <i className="icon icon-location"></i>
                    <span>{props?.salonsDetails?.location}</span>
                  </li>
                  <li>
                    <i className="icon icon-clock icon-font-sm"></i>
                    <span>
                      {props?.salonsDetails?.timing?.fromTime} -{" "}
                      {props?.salonsDetails?.timing?.toTime}
                      <br />
                      {props?.salonsDetails?.timing?.fromDay} -{" "}
                      {props?.salonsDetails?.timing?.toDay}
                      <br />
                    </span>
                  </li>
                </ul>
              </div>
              {props?.salonsDetails?.media
                ? props?.salonsDetails?.media.map((media) => {
                    return (
                      <div className="modal-single-video-container">
                        <img src={media?.path} alt="Video placeholder" />
                      </div>
                    );
                  })
                : null}

              <div className="modal-single-media">
                <div className="modal-single-media-thumbnail">
                  <img
                    src={props?.salonsDetails?.owner_image}
                    alt="User Avatar"
                    width="85"
                    height="85"
                  />
                </div>
                <div className="modal-single-media-content">
                  <h3 className="modal-single-media-title">
                    {props?.salonsDetails?.owner_name}
                  </h3>
                  <p>{props?.salonsDetails?.owner_review}</p>
                </div>
              </div>
              <div className="modal-single-detail-text">
                <p>{props?.salonsDetails?.salons_description}</p>
              </div>
              <div className="modal-single-footer">
                <button className="btn-dark btn-block">
                  {t("BeauteMarc_Modal.bookNow.value")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalonsDetailsModal;
