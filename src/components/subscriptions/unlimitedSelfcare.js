import React from "react";
import unlimited_self_care_img from "../../../public/assets/images/subscriptions/unlimited-self-care/unlimited-self-care.png";
import subscription_beauty_haircut_img from "../../../public/assets/images/home/subscription-beauty-haircut.png";
import subscription_beauty_nails_img from "../../../public/assets/images/home/subscription-beauty-nails.png";
import subscription_beauty_makeup_img from "../../../public/assets/images/home/subscription-beauty-makeup.png";
import subscription_beauty_permanent_makeup_img from "../../../public/assets/images/home/subscription-beauty-permanent-makeup.png";
import subscription_beauty_skin_care_img from "../../../public/assets/images/home/subscription-beauty-skin-care.png";
import subscription_beauty_hair_care_img from "../../../public/assets/images/home/subscription-beauty-hair-care.png";
import subscription_beauty_coloration_img from "../../../public/assets/images/home/subscription-beauty-coloration.png";
import subscription_wellness_yoga_img from "../../../public/assets/images/home/subscription-wellness-yoga.png";
import subscription_wellness_hiit_img from "../../../public/assets/images/home/subscription-wellness-hiit.png";
import subscription_wellness_functional_img from "../../../public/assets/images/home/subscription-wellness-functional.png";
import subscription_wellness_zumba_img from "../../../public/assets/images/home/subscription-wellness-zumba.png";
import subscription_wellness_pilates_img from "../../../public/assets/images/home/subscription-wellness-pilates.png";
import subscription_travel_soon_img from "../../../public/assets/images/home/subscription-travel-soon.png";
import sl_1_img from "../../../public/assets/images/subscriptions/unlimited-self-care/sl-1.png";
import sl_2_img from "../../../public/assets/images/subscriptions/unlimited-self-care/sl-2.png";
import sl_3_img from "../../../public/assets/images/subscriptions/unlimited-self-care/sl-3.png";
import masonry_1_img from "../../../public/assets/images/subscriptions/unlimited-self-care/masonry-1.png";
import masonry_2_img from "../../../public/assets/images/subscriptions/unlimited-self-care/masonry-2.png";
import masonry_3_img from "../../../public/assets/images/subscriptions/unlimited-self-care/masonry-3.png";
import masonry_4_img from "../../../public/assets/images/subscriptions/unlimited-self-care/masonry-4.png";
import masonry_5_img from "../../../public/assets/images/subscriptions/unlimited-self-care/masonry-5.png";
import masonry_6_img from "../../../public/assets/images/subscriptions/unlimited-self-care/masonry-6.png";
import masonry_7_img from "../../../public/assets/images/subscriptions/unlimited-self-care/masonry-7.png";
import masonry_8_img from "../../../public/assets/images/subscriptions/unlimited-self-care/masonry-8.png";
import OwlCarousel from "react-owl-carousel";
import { UseClient } from "../../api/agent";
import {
  API_END_POINTS,
  API_STATUS_CODE,
  AXIOS_HEADER,
} from "../../api/config";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SubscriptionList from "./SubscriptionList";
import {toast} from "react-toastify";

const UnlimitedSelfCare = () => {
  const [t] = useTranslation("common");
  const location = useLocation();
  const SubscriptionCenterSlider = {
    loop: true,
    dots: false,
    nav: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    navText: [
      '<i className="icon icon-chevron-left" aria-hidden="true"></i>',
      '<i className="icon icon-chevron-right" aria-hidden="true"></i>',
    ],
    items: 1,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
  };

  const selfAfterCardSlider = {
    loop: true,
    dots: false,
    nav: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    navText: [
      '<i className="icon icon-chevron-left" aria-hidden="true"></i>',
      '<i className="icon icon-chevron-right" aria-hidden="true"></i>',
    ],
    items: 3,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    responsive: {
      400: {
        items: 1,
      },
      720: {
        items: 2,
      },
      900: {
        items: 2,
      },
      990: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  };
  return (
    <main>
      {/* <!--Subscription Detail Banner Start--> */}
      <section className="single-item-banner-section">
        <div className="single-item-banner-wrapper single-item-banner-subscription bg-e2d">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="single-item-banner-visual">
                  <img src={unlimited_self_care_img} alt="Unlimited Beauty" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-item-banner-detail">
                  <div className="single-item-banner-rating-wrapper">
                    <ul className="single-item-banner-rating-list">
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
                    <p className="single-item-banner-rating-count">
                      {t("UnlimitedSelfCare.reviews.text")}
                    </p>
                  </div>
                  <div className="single-item-banner-header">
                    <h1 className="single-item-banner-title">
                      {t("UnlimitedSelfCare.unlimitSelfCare.text")}
                    </h1>
                    <h2 className="single-item-banner-category">
                      {t("UnlimitedSelfCare.subscriptionPlan.text")}
                    </h2>
                    <h2 className="single-item-banner-price">
                      {t("UnlimitedSelfCare.Price.text")}
                    </h2>
                  </div>
                  <div className="single-item-banner-btn-group">
                    <h2 className="btn-group-title">
                      {t("UnlimitedSelfCare.comingSoon.text")}
                    </h2>
                  </div>
                  <div className="single-item-banner-custom-tabs custom-tabs">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="benefits-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#benefits-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="benefits-tab-pane"
                          aria-selected="true"
                        >
                          {t("UnlimitedSelfCare.benefits.value")}
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="benefits-tab-pane"
                        role="tabpanel"
                        aria-labelledby="benefits-tab"
                        tabIndex="0"
                      >
                        <ul className="list-item-check-list">
                          <li>
                            <strong>
                              {t("UnlimitedSelfCare.treatYourSelf.text")}
                            </strong>
                            {t("UnlimitedSelfCare.treatYourSelfPara.text")}
                          </li>
                          <li>
                            <strong>
                              {t("UnlimitedSelfCare.advanceTechnology.text")}
                            </strong>
                            {t("UnlimitedSelfCare.advanceTechnologyPara.text")}
                          </li>
                          <li>
                            <strong>
                              {t("UnlimitedSelfCare.cancellation.text")}
                            </strong>
                            {t("UnlimitedSelfCare.cancellationPara.text")}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-item-banner-footer">
                    <ul className="single-item-banner-cta-list">
                      <li>
                        <button
                          className="single-item-banner-footer-cta btn-dark disabled"
                          disabled={true}
                        >
                          Join Waitlist
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-banner-strip block-vh">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("UnlimitedSelfCare.highQuality.text")}</li>
              <li>{t("UnlimitedSelfCare.unlimitBeautySev.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Subscription Detail Banner End--> */}
      {/* <!--Subscription Slider Start--> */}
      <section className="subscription-carousel-section">
        <div className="container">
          <div className="subscription-carousel-wrapper">
            <div className="subscription-carousel-custom-tabs custom-tabs">
              <ul
                className="nav nav-tabs"
                id="subscriptionCarouselTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="beauty-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#beauty-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="beauty-tab-pane"
                    aria-selected="false"
                  >
                    {t("UnlimitedSelfCare.beauty.text")}
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="wellness-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#wellness-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="wellness-tab-pane"
                    aria-selected="false"
                  >
                    {t("UnlimitedSelfCare.wellness.text")}
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="subscriptionCarouselTabContent">
                <div
                  className="tab-pane fade show active"
                  id="beauty-tab-pane"
                  role="tabpanel"
                  aria-labelledby="beauty-tab"
                  tabIndex="0"
                >
                  <div className="subscription-center-slider-area wellness-section">
                    <div className="owl-slider">
                      <OwlCarousel
                        className="subscription-center-slider-js owl-carousel owl-theme"
                        {...SubscriptionCenterSlider}
                      >
                        <div className="row w-100">
                          <div className="col-xl-3 subscription-corner-slider start">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-eyelashes"></i>
                                      <span>
                                        {t(
                                          "UnlimitedSelfCare.permanentMake.text"
                                        )}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-nail-polish"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.nails.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-12 subscription-center-slider">
                            <div className="subscription-slider-block">
                              <div className="subscription-slider-block-header">
                                <h2 className="subscription-slider-block-title">
                                  {t("UnlimitedSelfCare.hairCut.text")}
                                </h2>
                              </div>
                              <div className="subscription-slider-block-thumbnail block-haircut">
                                <img
                                  src={subscription_beauty_haircut_img}
                                  alt="Haircut Image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 subscription-corner-slider end">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-make-up-kit"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.makeup.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-hair-dye"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.coloration.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row w-100">
                          <div className="col-xl-3 subscription-corner-slider start">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-facial-treatment"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.hairTreat.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-skin-care"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.skinCare.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-12 subscription-center-slider">
                            <div className="subscription-slider-block">
                              <div className="subscription-slider-block-header">
                                <h2 className="subscription-slider-block-title">
                                  {t("UnlimitedSelfCare.nails.text")}
                                </h2>
                              </div>
                              <div className="subscription-slider-block-thumbnail block-nails">
                                <img
                                  src={subscription_beauty_nails_img}
                                  alt="Nails Image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 subscription-corner-slider end">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-make-up-kit"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.makeup.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-make-up-kit"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.makeup.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row w-100">
                          <div className="col-xl-3 subscription-corner-slider start">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-facial-treatment"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.hairTreat.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-skin-care"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.skinCare.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-12 subscription-center-slider">
                            <div className="subscription-slider-block">
                              <div className="subscription-slider-block-header">
                                <h2 className="subscription-slider-block-title">
                                  {t("UnlimitedSelfCare.permanentMake.text")}
                                </h2>
                              </div>
                              <div className="subscription-slider-block-thumbnail block-permanent-makeup">
                                <img
                                  src={subscription_beauty_permanent_makeup_img}
                                  alt="Permanent Makeup Image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 subscription-corner-slider end">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-nail-polish"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.nails.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-scissors"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.hairCut.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row w-100">
                          <div className="col-xl-3 subscription-corner-slider start">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-make-up-kit"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.makeup.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-hair-dye"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.coloration.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-12 subscription-center-slider">
                            <div className="subscription-slider-block">
                              <div className="subscription-slider-block-header">
                                <h2 className="subscription-slider-block-title">
                                  {t("UnlimitedSelfCare.hairCare.text")}
                                </h2>
                              </div>
                              <div className="subscription-slider-block-thumbnail block-hair-care">
                                <img
                                  src={subscription_beauty_hair_care_img}
                                  alt="Hair Care Image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 subscription-corner-slider end">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-skin-care"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.skinCare.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-eyelashes"></i>
                                      <span>
                                        {t(
                                          "UnlimitedSelfCare.permanentMake.text"
                                        )}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row w-100">
                          <div className="col-xl-3 subscription-corner-slider start">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-hair-dye"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.coloration.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-facial-treatment"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.hairTreat.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-12 subscription-center-slider">
                            <div className="subscription-slider-block">
                              <div className="subscription-slider-block-header">
                                <h2 className="subscription-slider-block-title">
                                  {t("UnlimitedSelfCare.skinCare.text")}
                                </h2>
                              </div>
                              <div className="subscription-slider-block-thumbnail block-skin-care">
                                <img
                                  src={subscription_beauty_skin_care_img}
                                  alt="Skin Care Image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 subscription-corner-slider end">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-eyelashes"></i>
                                      <span>
                                        {t(
                                          "UnlimitedSelfCare.permanentMake.text"
                                        )}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-nail-polish"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.nails.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row w-100">
                          <div className="col-xl-3 subscription-corner-slider start">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-scissors"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.hairCut.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-make-up-kit"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.makeup.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-12 subscription-center-slider">
                            <div className="subscription-slider-block">
                              <div className="subscription-slider-block-header">
                                <h2 className="subscription-slider-block-title">
                                  {t("UnlimitedSelfCare.coloration.text")}
                                </h2>
                              </div>
                              <div className="subscription-slider-block-thumbnail block-coloration">
                                <img
                                  src={subscription_beauty_coloration_img}
                                  alt="Coloration Image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 subscription-corner-slider end">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-facial-treatment"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.hairTreat.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-skin-care"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.skinCare.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row w-100">
                          <div className="col-xl-3 subscription-corner-slider start">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-nail-polish"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.nails.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-scissors"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.hairCut.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-12 subscription-center-slider">
                            <div className="subscription-slider-block">
                              <div className="subscription-slider-block-header">
                                <h2 className="subscription-slider-block-title">
                                  {t("UnlimitedSelfCare.makeup.text")}
                                </h2>
                              </div>
                              <div className="subscription-slider-block-thumbnail block-makeup">
                                <img
                                  src={subscription_beauty_makeup_img}
                                  alt="Makeup Image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 subscription-corner-slider end">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-hair-dye"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.coloration.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-facial-treatment"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.hairTreat.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="wellness-tab-pane"
                  role="tabpanel"
                  aria-labelledby="wellness-tab"
                  tabIndex="0"
                >
                  {/* <div className='wallness-web'> */}
                  <div className="subscription-center-slider-area wellness-section">
                    <div className="owl-slider">
                      <OwlCarousel
                        className="subscription-center-slider-js owl-carousel owl-theme"
                        {...SubscriptionCenterSlider}
                      >
                        <div className="row w-100">
                          <div className="col-xl-3 subscription-corner-slider start">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-zumba"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.zumba.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-pilates"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.pilates.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-12 subscription-center-slider">
                            <div className="subscription-slider-block">
                              <div className="subscription-slider-block-header">
                                <h2 className="subscription-slider-block-title">
                                  {t("UnlimitedSelfCare.yoga.text")}
                                </h2>
                              </div>
                              <div className="subscription-slider-block-thumbnail block-yoga">
                                <img
                                  src={subscription_wellness_yoga_img}
                                  alt="Yoga Image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 subscription-corner-slider end">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-hiit"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.hiit.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-functional"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.functional.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row w-100">
                          <div className="col-xl-3 subscription-corner-slider start">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-pilates"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.pilates.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-yoga"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.yoga.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-12 subscription-center-slider">
                            <div className="subscription-slider-block">
                              <div className="subscription-slider-block-header">
                                <h2 className="subscription-slider-block-title">
                                  {t("UnlimitedSelfCare.hiit.text")}
                                </h2>
                              </div>
                              <div className="subscription-slider-block-thumbnail block-hiit">
                                <img
                                  src={subscription_wellness_hiit_img}
                                  alt="Hiit Image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 subscription-corner-slider end">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-functional"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.functional.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-zumba"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.zumba.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row w-100">
                          <div className="col-xl-3 subscription-corner-slider start">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-yoga"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.yoga.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-hiit"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.hiit.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-12 subscription-center-slider">
                            <div className="subscription-slider-block">
                              <div className="subscription-slider-block-header">
                                <h2 className="subscription-slider-block-title">
                                  {t(
                                    "UnlimitedSelfCare.functionalTraining.text"
                                  )}
                                </h2>
                              </div>
                              <div className="subscription-slider-block-thumbnail block-functional">
                                <img
                                  src={subscription_wellness_functional_img}
                                  alt="Functional Training Image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 subscription-corner-slider end">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-zumba"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.zumba.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-pilates"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.pilates.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row w-100">
                          <div className="col-xl-3 subscription-corner-slider start">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-hiit"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.hiit.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-functional"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.functional.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-12 subscription-center-slider">
                            <div className="subscription-slider-block">
                              <div className="subscription-slider-block-header">
                                <h2 className="subscription-slider-block-title">
                                  {t("UnlimitedSelfCare.zumba.text")}
                                </h2>
                              </div>
                              <div className="subscription-slider-block-thumbnail block-zumba">
                                <img
                                  src={subscription_wellness_zumba_img}
                                  alt="Zumba Image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 subscription-corner-slider end">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-pilates"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.pilates.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-yoga"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.yoga.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row w-100">
                          <div className="col-xl-3 subscription-corner-slider start">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-functional"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.functional.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-zumba"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.zumba.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-12 subscription-center-slider">
                            <div className="subscription-slider-block">
                              <div className="subscription-slider-block-header">
                                <h2 className="subscription-slider-block-title">
                                  {t("UnlimitedSelfCare.pilates.text")}
                                </h2>
                              </div>
                              <div className="subscription-slider-block-thumbnail block-pilates">
                                <img
                                  src={subscription_wellness_pilates_img}
                                  alt="Pilates Image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 subscription-corner-slider end">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-yoga"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.yoga.text")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-hiit"></i>
                                      <span>
                                        {t("UnlimitedSelfCare.hiit.text")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                  {/* </div> */}
                </div>

                <div
                  className="tab-pane fade"
                  id="travel-tab-pane"
                  role="tabpanel"
                  aria-labelledby="travel-tab"
                  tabIndex="0"
                >
                  <div className="subscription-center-slider-area wellness-section">
                    <div className="owl-slider">
                      <OwlCarousel
                        className="subscription-center-slider-js owl-carousel owl-theme"
                        {...SubscriptionCenterSlider}
                      >
                        <div className="row w-100">
                          <div className="col-xl-3 subscription-corner-slider start">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-travel-cocktail"></i>
                                      <span>Soon</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-travel-coconut"></i>
                                      <span>Soon</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-12 subscription-center-slider">
                            <div className="subscription-slider-block">
                              <div className="subscription-slider-block-header">
                                <h2 className="subscription-slider-block-title soon-title">
                                  Coming Soon
                                </h2>
                              </div>
                              <div className="subscription-slider-block-thumbnail block-soon">
                                <img
                                  src={subscription_travel_soon_img}
                                  alt="Coming Soon Image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 subscription-corner-slider end">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-travel-bikini"></i>
                                      <span>Soon</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-travel-beach-ball"></i>
                                      <span>Soon</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Subscription Slider End--> */}
      {/* <!--Services Grid Start--> */}
      <section className="section-bleed-cards subscription-bleed-cards">
        <h2 className="visually-hidden">Services</h2>
        <div className="container">
          <div className="section-bleed-cards-wrapper">
            <div className="black-card-grid black-card-grid-subscription-service">
              <div className="black-card-item black-card-item-subscription-service">
                <div className="black-card-item-icon">
                  <i className="icon icon-facial-treatment"></i>
                </div>
                <h3 className="black-card-title">
                  {t("UnlimitedSelfCare.unlimitedCareServ.text")}
                </h3>
                <div className="black-card-content-wrapper">
                  <p>{t("UnlimitedSelfCare.unlimitedCareServPara.text")}</p>
                </div>
              </div>
              <div className="black-card-item black-card-item-subscription-service">
                <div className="black-card-item-icon">
                  <i className="icon icon-access"></i>
                </div>
                <h3 className="black-card-title">
                  {t("UnlimitedSelfCare.accessPlatform.text")}
                </h3>
                <div className="black-card-content-wrapper">
                  <p>{t("UnlimitedSelfCare.accessPlatformPara.text")}</p>
                </div>
              </div>
              <div className="black-card-item black-card-item-subscription-service">
                <div className="black-card-item-icon">
                  <i className="icon icon-easy-booking"></i>
                </div>
                <h3 className="black-card-title">
                  {t("UnlimitedSelfCare.unlimitedWellnessServ.text")}
                </h3>
                <div className="black-card-content-wrapper">
                  <p>{t("UnlimitedSelfCare.unlimitedWellnessServPara.text")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Services Grid End--> */}
      {/* <!--Bordered Travel Services Grid Start--> */}
      {/* <!--
      <section className="section-content-bordered-bg section-content-bordered-travel-services">
        <h2 className="visually-hidden">Products Slider</h2>
        <div className="container">
          <div className="section-content-bordered subscription-travel-services-wrapper">
            <div className="subscription-travel-services-grid">
              <div className="subscription-travel-services-item">
                <div className="travel-service-icon-wrapper">
                  <i className="icon icon-globe"></i>
                </div>
                <p className="travel-service-text">EXCLUSIVE ACCESS TO OUR DESTINATIONS</p>
              </div>
              <div className="subscription-travel-services-item">
                <div className="travel-service-icon-wrapper">
                  <i className="icon icon-umbrella-sun"></i>
                </div>
                <p className="travel-service-text">ALL-INCLUSIVE STAY 5 DAYS, 4 NIGHTS</p>
              </div>
              <div className="subscription-travel-services-item">
                <div className="travel-service-icon-wrapper">
                  <i className="icon icon-cardio"></i>
                </div>
                <p className="travel-service-text">WELLNESS INSTRUCTORS AND classNameES</p>
              </div>
              <div className="subscription-travel-services-item">
                <div className="travel-service-icon-wrapper">
                  <i className="icon icon-massage"></i>
                </div>
                <p className="travel-service-text">BEAUTY SERVICES WHILE TRAVELING</p>
              </div>
              <div className="subscription-travel-services-item">
                <div className="travel-service-icon-wrapper">
                  <i className="icon icon-waiter"></i>
                </div>
                <p className="travel-service-text">SUPPORT STAFF (CHEF, BARTENDER)</p>
              </div>
              <div className="subscription-travel-services-item">
                <div className="travel-service-icon-wrapper">
                  <i className="icon icon-travel-bag"></i>
                </div>
                <p className="travel-service-text">AIRPORT PICK UP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
       */}
      {/* <!--Bordered Travel Services Grid End--> */}
      {/* <!--Bordered Grid Start--> */}
      <section className="section-content-bordered-bg section-content-bordered-product-slider">
        <h2 className="visually-hidden">Products Slider</h2>
        <div className="container">
          <div className="section-content-bordered">
            <div className="subscription-products-slider-wrapper">
              <div className="owl-slider">
                <OwlCarousel
                  className="subscription-products-slider-js owl-carousel owl-theme "
                  {...selfAfterCardSlider}
                >
                  <div className="owl-carousel-item">
                    <div className="product-slider-item">
                      <img src={sl_1_img} alt="Product Slider item" />
                    </div>
                  </div>
                  <div className="owl-carousel-item">
                    <div className="product-slider-item">
                      <img src={sl_2_img} alt="Product Slider item" />
                    </div>
                  </div>
                  <div className="owl-carousel-item">
                    <div className="product-slider-item">
                      <img src={sl_3_img} alt="Product Slider item" />
                    </div>
                  </div>
                  <div className="owl-carousel-item">
                    <div className="product-slider-item">
                      <img src={sl_3_img} alt="Product Slider item" />
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Bordered Grid End--> */}
      {/* <!--White Section Start--> */}
      <section className="section-white section-white-subscription-detail detail-1">
        <div className="container">
          <div className="section-white-wrapper section-white-price-plan-wrapper">
            <h2 className="section-white-title">
              <small>{t("UnlimitedSelfCare.about.text")}</small>
              <span>{t("UnlimitedSelfCare.unlimitedSelfCareSubs.text")}</span>
            </h2>
            <div className="section-white-content hr-bottom section-white-content-sxl">
              <p>{t("UnlimitedSelfCare.unlimitedSelfCareSubsPara.text")}</p>
            </div>
            <div className="section-white-footer">
              <h3 className="section-white-footer-title">
                {t("UnlimitedSelfCare.inspiredByYou.text")}
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* <!--White Section End--> */}
      {/* <!--Bordered Grid Start--> */}
      <section className="section-content-bordered-bg section-content-bordered-slider">
        <h2 className="visually-hidden">Black Cards Grid</h2>
        <div className="container">
          <div className="section-content-bordered section-content-bordered-slider-wrapper">
            <div className="black-card-grid section-content-bordered-grid">
              <div className="black-card-item black-card-item-review">
                <ul className="list-black-card-rating">
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
                    <i className="icon icon-star"></i>
                  </li>
                </ul>
                <h3 className="black-card-title">
                  {t("UnlimitedSelfCare.bestMembership.text")}
                </h3>
                <div className="black-card-content-wrapper">
                  <p>{t("UnlimitedSelfCare.bestMembershipPara.text")}</p>
                </div>
                <p className="black-card-item-review-author">
                  {t("UnlimitedSelfCare.authorName.text")}
                </p>
              </div>
              <div className="black-card-item black-card-item-review">
                <ul className="list-black-card-rating">
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
                    <i className="icon icon-star"></i>
                  </li>
                </ul>
                <h3 className="black-card-title">
                  {t("UnlimitedSelfCare.amazingService.text")}
                </h3>
                <div className="black-card-content-wrapper">
                  <p>{t("UnlimitedSelfCare.amazingServicePara.text")}</p>
                </div>
                <p className="black-card-item-review-author">
                  {t("UnlimitedSelfCare.authorName1.text")}
                </p>
              </div>
              <div className="black-card-item black-card-item-review">
                <ul className="list-black-card-rating">
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
                    <i className="icon icon-star"></i>
                  </li>
                </ul>
                <h3 className="black-card-title">
                  {t("UnlimitedSelfCare.uniqueOffer.text")}
                </h3>
                <div className="black-card-content-wrapper">
                  <p>{t("UnlimitedSelfCare.uniqueOfferPara.text")}</p>
                </div>
                <p className="black-card-item-review-author">
                  {t("UnlimitedSelfCare.authorName2.text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Bordered Grid End--> */}
      {/* <!--Masonry Gallery Start--> */}
      <section className="masonry-section section-content-bordered-bg">
        <h2 className="visually-hidden">OUR Salons</h2>
        <div className="container">
          <div className="section-content-bordered masonry-wrapper">
            <div className="masonry-grid">
              {/* <!--Add max 8 .masonry-grid-items in 1 masonry-grid-box--> */}
              {/* <!--For more items create new masonry grid box and add max 8 masonry items in it--> */}
              <div className="masonry-grid-box">
                <div className="masonry-grid-item">
                  <img src={masonry_1_img} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_2_img} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_3_img} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_4_img} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_5_img} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_6_img} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_7_img} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_8_img} alt="Masonry Item" />
                </div>
              </div>
            </div>
            <h3 className="section-title-start">
              {t("UnlimitedSelfCare.ourWellnessCenter.text")}
            </h3>
            <h3 className="section-title-end">
              {t("UnlimitedSelfCare.ourWellnessCenter.text")}
            </h3>
          </div>
        </div>
      </section>
      {/* <!--Masonry Gallery End--> */}
      {/* <!--White Section Start--> */}
      <section className="section-white section-white-price-plan section-white-subscription-detail detail-2">
        <div className="container">
          <div className="section-white-wrapper section-white-price-plan-wrapper">
            <h2 className="section-white-title">
              <span>{t("UnlimitedSelfCare.chooseSubs.text")}</span>
            </h2>
            <div className="section-white-content hr-bottom section-white-content-sxl">
              <p>{t("UnlimitedSelfCare.chooseSubsPara.text")}</p>
            </div>
            <div className="section-white-footer"></div>
          </div>
        </div>
      </section>
      {/* <!--White Section End--> */}
      {/* <!--Price Plans Section Start--> */}
      <SubscriptionList />
      {/* <!--Price Plans Section End--> */}
    </main>
  );
};

export default UnlimitedSelfCare;
