import React from "react";
import reviews_img from "../../../../public/assets/images/banner/reviews.png";
import { useTranslation } from "react-i18next";

const Reviews = () => {
  const [t] = useTranslation("common");
  return (
    <main>
      {/* <!--Page Banner Start--> */}
      <section className="page-banner reviews-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">{t("Reviews.reviews.text")}</h1>
            <h2 className="page-banner-excerpt">
              {t("Reviews.ratingReviews.text")}
            </h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <picture>
              <source media="(min-width: 768px)" srcset={reviews_img} />
              <img src={reviews_img} alt="Karisma Salons Banner" />
            </picture>
          </div>
        </div>
        <div className="page-banner-strip">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("Reviews.highQuality.text")}</li>
              <li>{t("Reviews.unlimitBeautyServ.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Page Banner End--> */}
      {/* <!--White Section Start--> */}
      <section className="section-white section-white-reviews">
        <div className="container">
          <div className="section-white-wrapper">
            <h2 className="section-white-title">{t("Reviews.weCare.text")}</h2>
            <div className="section-white-content hr-top section-white-content-sm">
              <p>{t("Reviews.weCarePara.text")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--White Section End--> */}
      {/* <!--Tabs Strip Start--> */}
      <div className="page-banner-strip scrollable block-vh">
        <div className="container">
          <ul className="page-banner-strip-list">
            <li className="active">
              <span role="button">{t("Reviews.all.text")}</span>
            </li>
            <li>
              <span role="button">{t("Reviews.subscription.text")}</span>
            </li>
            <li>
              <span role="button">{t("Reviews.product.text")}</span>
            </li>
          </ul>
        </div>
      </div>
      {/* <!--Tabs Strip End--> */}
      {/* <!--Reviews Section Start--> */}
      <section className="review-section section-content-bordered-bg">
        <h2 className="visually-hidden">Reviews</h2>
        <div className="container">
          <div className="section-content-bordered review-wrapper">
            <div className="review-items-wrapper">
              <div className="review-item">
                <ul className="review-rating">
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
                <p className="review-text">{t("Reviews.reviewsPara1.text")}</p>
                <h3 className="review-author">{t("Reviews.author1.text")}</h3>
              </div>
              <div className="review-item">
                <ul className="review-rating">
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
                <p className="review-text">{t("Reviews.reviewsPara2.text")}</p>
                <h3 className="review-author">{t("Reviews.author2.text")}</h3>
              </div>
              <div className="review-item">
                <ul className="review-rating">
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
                <p className="review-text">A{t("Reviews.reviewsPara3.text")}</p>
                <h3 className="review-author">{t("Reviews.author3.text")}</h3>
              </div>
              <div className="review-item">
                <ul className="review-rating">
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
                <p className="review-text">{t("Reviews.reviewsPara4.text")}</p>
                <h3 className="review-author">{t("Reviews.author4.text")}</h3>
              </div>

              <div className="review-item">
                <ul className="review-rating">
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
                <p className="review-text">{t("Reviews.reviewsPara5.text")}</p>
                <h3 className="review-author">{t("Reviews.author5.text")}</h3>
              </div>

              <div className="review-item">
                <ul className="review-rating">
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
                <p className="review-text">{t("Reviews.reviewsPara6.text")}</p>
                <h3 className="review-author">{t("Reviews.author6.text")}</h3>
              </div>

              <div className="review-item">
                <ul className="review-rating">
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
                <p className="review-text">{t("Reviews.reviewsPara7.text")}</p>
                <h3 className="review-author">{t("Reviews.author7.text")}</h3>
              </div>

              <div className="review-item">
                <ul className="review-rating">
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
                <p className="review-text">{t("Reviews.reviewsPara8.text")}</p>
                <h3 className="review-author">{t("Reviews.author8.text")}</h3>
              </div>

              <div className="review-item">
                <ul className="review-rating">
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
                <p className="review-text">{t("Reviews.reviewsPara9.text")}</p>
                <h3 className="review-author">{t("Reviews.author9.text")}</h3>
              </div>
            </div>
            <div className="custom-pagination-wrapper d-flex justify-content-center">
              <button className="btn btn-dark outline-transparent">
                {t("Reviews.loadMore.value")}
              </button>
            </div>
            <h3 className="section-title-start">{t("Reviews.reviews.text")}</h3>
            <h3 className="section-title-end">{t("Reviews.reviews.text")}</h3>
          </div>
        </div>
      </section>
      {/* <!--Reviews Section End--> */}
    </main>
  );
};

export default Reviews;
