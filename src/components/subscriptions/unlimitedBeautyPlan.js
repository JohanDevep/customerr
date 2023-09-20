import React, { useEffect } from "react";
import unlimited_beauty from "../../../public/assets/images/subscriptions/unlimited-beauty/unlimited-beauty.png";
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
import sl_1_img from "../../../public/assets/images/subscriptions/unlimited-beauty/sl-1.jpg";
import sl_2_img from "../../../public/assets/images/subscriptions/unlimited-beauty/sl-2.jpg";
import sl_3_img from "../../../public/assets/images/subscriptions/unlimited-beauty/sl-3.jpg";
import masonry_1_img from "../../../public/assets/images/subscriptions/unlimited-beauty/masonry-1.png";
import masonry_2_img from "../../../public/assets/images/subscriptions/unlimited-beauty/masonry-2.png";
import masonry_3_img from "../../../public/assets/images/subscriptions/unlimited-beauty/masonry-3.png";
import masonry_4_img from "../../../public/assets/images/subscriptions/unlimited-beauty/masonry-4.png";
import masonry_5_img from "../../../public/assets/images/subscriptions/unlimited-beauty/masonry-5.png";
import masonry_6_img from "../../../public/assets/images/subscriptions/unlimited-beauty/masonry-6.png";
import masonry_7_img from "../../../public/assets/images/subscriptions/unlimited-beauty/masonry-7.png";
import masonry_8_img from "../../../public/assets/images/subscriptions/unlimited-beauty/masonry-8.png";
import { useTranslation } from "react-i18next";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptionById } from "../../redux/slices/Fetch";

import SubscriptionList from "./SubscriptionList";
import { isSubscribe } from "../../redux/slices/Cart";
import { APP_ROUTES } from "../../routes/Routes";

function UnlimitedBeautyPlan() {
  const [t] = useTranslation("common");
  const location = useLocation();

  const dispatch = useDispatch();
  const subscription = useSelector((state) => state.fetch.subscription);
  const navigate = useNavigate();
  const { id } = useParams();
  let uuid = location?.search?.split("=")[1]; //uuid

  useEffect(() => {
    dispatch(getSubscriptionById(id));
  }, []);

  /** redirect to cart component */
  const checkoutToCart = (values) => {
    if (values) {
      dispatch(isSubscribe(true));
      navigate(APP_ROUTES.CART);
    } else {
    }
  };

  /** owl carousal */
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
  const afterCardSlider = {
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 24,
      },
      1300: {
        items: 3,
        margin: 30,
      },
      1800: {
        items: 3,
        margin: 80,
      },
    },
    navText: [
      '<i className="icon icon-chevron-left" aria-hidden="true"></i>',
      '<i className="icon icon-chevron-right" aria-hidden="true"></i>',
    ],
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
                  <img src={unlimited_beauty} alt="Unlimited Beauty" />
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
                      {t("SubscriptionBeauty.reviews.text")}
                    </p>
                  </div>
                  <div className="single-item-banner-header">
                    <h1 className="single-item-banner-title  text-lowercase">
                      {subscription?.name}
                    </h1>
                    <h2 className="single-item-banner-category">
                      {subscription?.description}
                    </h2>
                    <h2 className="single-item-banner-price">
                      ${subscription?.price}
                    </h2>
                  </div>
                  <div className="single-item-banner-btn-group">
                    <h2 className="btn-group-title">
                      {t("SubscriptionBeauty.renewEvery.text")}
                    </h2>
                    <div className="btn-group-wrapper">
                      {/*{subscription ? subscription?.duration?.map((duration) => {*/}
                      {/*    return <div className="btn-group-item">*/}
                      {/*        <input type="radio" name="subscriptionPackage" id="val1" checked={true}/>*/}
                      {/*        <label htmlFor="val1" className="btn-dark outline"*/}
                      {/*               role="button">{duration}</label>*/}
                      {/*    </div>*/}
                      {/*}) : false}*/}
                      <div className="btn-group-item">
                        <input
                          type="radio"
                          name="subscriptionPackage"
                          id="val1"
                          checked={true}
                        />
                        <label
                          htmlFor="val1"
                          className="btn-dark outline"
                          role="button"
                        >
                          One Month
                        </label>
                      </div>
                      <div className="btn-group-item d-none">
                        <input
                          type="radio"
                          name="subscriptionPackage"
                          id="val1"
                          disabled={"true"}
                          checked={false}
                        />
                        <label
                          htmlFor="val1"
                          className="btn-dark outline"
                          role="button"
                        >
                          6 Month
                        </label>
                      </div>
                      <div className="btn-group-item d-none">
                        <input
                          type="radio"
                          name="subscriptionPackage"
                          id="val1"
                          checked={false}
                        />
                        <label
                          htmlFor="val1"
                          className="btn-dark outline"
                          role="button"
                        >
                          One Year
                        </label>
                      </div>
                    </div>
                    {/* For Mobile View start*/}
                    <div className="btn-group-select">
                      <select className="form-control">
                        <option value="oneMonth">
                          {t("SubscriptionBeauty.oneMonth.value")}
                        </option>
                        <option value="sixMonth">
                          {t("SubscriptionBeauty.6Month.value")}
                        </option>
                        <option value="eightMonth">
                          {t("SubscriptionBeauty.oneYear.value")}
                        </option>
                      </select>
                    </div>
                    {/* For Mobile view End */}
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
                          {t("SubscriptionBeauty.benefits.value")}
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
                              {t("SubscriptionBeauty.treatYourself.text")}
                            </strong>
                            {t("SubscriptionBeauty.treatYourselfPara.text")}
                          </li>
                          <li>
                            <strong>
                              {t("SubscriptionBeauty.advanceTechnology.text")}
                            </strong>
                            {t("SubscriptionBeauty.advanceTechnologyPara.text")}
                          </li>
                          <li>
                            <strong>
                              {t("SubscriptionBeauty.cancellation.text")}
                            </strong>
                            {t("SubscriptionBeauty.cancellationPara.text")}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-item-banner-footer">
                    <ul className="single-item-banner-cta-list">
                      <li>
                        <button
                          className="single-item-banner-footer-cta btn-dark"
                          onClick={() => {
                            checkoutToCart(
                              subscription ? subscription?.uuid : ""
                            );
                          }}
                        >
                          {t("SubscriptionBeauty.getNow.value")}
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
              <li>{t("SubscriptionBeauty.highQuality.text")}</li>
              <li>{t("SubscriptionBeauty.unlimitedBeautyServices.text")}</li>
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
                        <div className="row">
                          <div className="col-xl-3 subscription-corner-slider start">
                            <div className="subscription-corner-slider-area w-100">
                              <div className="home-slider-content-icons subscription-slider-icons w-100">
                                <div className="row w-100">
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-eyelashes"></i>
                                      <span>Permanent Makeup</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-nail-polish"></i>
                                      <span>Nails</span>
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
                                  Haircut
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
                                      <span>Makeup</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-hair-dye"></i>
                                      <span>Coloration</span>
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
                                      <span>Hair Treatment</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-skin-care"></i>
                                      <span>Skin Care</span>
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
                                  Nails
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
                                      <span>Makeup</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-make-up-kit"></i>
                                      <span>Makeup</span>
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
                                      <span>Hair Treatment</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-skin-care"></i>
                                      <span>Skin Care</span>
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
                                  Permanent Makeup
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
                                      <span>Nails</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-scissors"></i>
                                      <span>Hair Cut</span>
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
                                      <span>Makeup</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-hair-dye"></i>
                                      <span>Coloration</span>
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
                                  Hair Care
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
                                      <span>Skin Care</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-eyelashes"></i>
                                      <span>Permanent Makeup</span>
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
                                      <span>Coloration</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-facial-treatment"></i>
                                      <span>Hair Treatments</span>
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
                                  Skin Care
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
                                      <span>Permanent Makeup</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-nail-polish"></i>
                                      <span>Nails</span>
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
                                      <span>Hair Cut</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-make-up-kit"></i>
                                      <span>Makeup</span>
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
                                  Coloration
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
                                      <span>Hair Treatment</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-skin-care"></i>
                                      <span>Skin Care</span>
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
                                      <span>Nails</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-scissors"></i>
                                      <span>Hair Cut</span>
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
                                  Makeup
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
                                      <span>Coloration</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-beauty-facial-treatment"></i>
                                      <span>Hair Treatment</span>
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
                                      <span>Zumba</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-pilates"></i>
                                      <span>Pilates</span>
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
                                  Yoga
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
                                      <span>Hiit</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-functional"></i>
                                      <span>Functional</span>
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
                                      <span>Pilates</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-yoga"></i>
                                      <span>Yoga</span>
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
                                  Hiit
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
                                      <span>Functional</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-zumba"></i>
                                      <span>Zumba</span>
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
                                      <span>Yoga</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-hiit"></i>
                                      <span>Hiit</span>
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
                                  Functional Training
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
                                      <span>Zumba</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-pilates"></i>
                                      <span>Pilates</span>
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
                                      <span>Hiit</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-functional"></i>
                                      <span>Functional</span>
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
                                  Zumba
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
                                      <span>Pilates</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-yoga"></i>
                                      <span>Yoga</span>
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
                                      <span>Functional</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-zumba"></i>
                                      <span>Zumba</span>
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
                                  Pilates
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
                                      <span>Yoga</span>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="item-block active">
                                      <i className="icon icon-wellness-hiit"></i>
                                      <span>Hiit</span>
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
                  {t("SubscriptionBeauty.unlimitCare.text")}
                </h3>
                <div className="black-card-content-wrapper">
                  <p>{t("SubscriptionBeauty.unlimitCarePara.text")}</p>
                </div>
              </div>
              <div className="black-card-item black-card-item-subscription-service">
                <div className="black-card-item-icon">
                  <i className="icon icon-access"></i>
                </div>
                <h3 className="black-card-title">
                  {t("SubscriptionBeauty.accessPlatform.text")}
                </h3>
                <div className="black-card-content-wrapper">
                  <p>{t("SubscriptionBeauty.accessPlatformPara.text")}</p>
                </div>
              </div>
              <div className="black-card-item black-card-item-subscription-service">
                <div className="black-card-item-icon">
                  <i className="icon icon-easy-booking"></i>
                </div>
                <h3 className="black-card-title">
                  {t("SubscriptionBeauty.easyBooking.text")}
                </h3>
                <div className="black-card-content-wrapper">
                  <p>{t("SubscriptionBeauty.easyBookingPara.text")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Services Grid End--> */}
      {/* <!--Bordered Grid Start--> */}
      <section className="section-content-bordered-bg section-content-bordered-product-slider">
        <h2 className="visually-hidden">Products Slider</h2>
        <div className="container">
          <div className="section-content-bordered">
            <div className="subscription-products-slider-wrapper">
              <div className="owl-slider">
                <OwlCarousel
                  className="subscription-products-slider-js owl-carousel owl-theme"
                  {...afterCardSlider}
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
              <small>{t("SubscriptionBeauty.about.text")}</small>
              <span>
                {t("SubscriptionBeauty.unlimitedBeautyservices.text")}
              </span>
            </h2>
            <div className="section-white-content hr-bottom section-white-content-sxl">
              <p>{t("SubscriptionBeauty.unlimitedBeautyservicesPara.text")}</p>
            </div>
            <div className="section-white-footer">
              <h3 className="section-white-footer-title">
                {t("SubscriptionBeauty.inspiredByYou.text")}
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
                  {t("SubscriptionBeauty.imSpeechless.text")}
                </h3>
                <div className="black-card-content-wrapper">
                  <p>{t("SubscriptionBeauty.imSpeechlessPara.text")}</p>
                </div>
                <p className="black-card-item-review-author">
                  {t("SubscriptionBeauty.authorName.text")}
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
                  {t("SubscriptionBeauty.exceptionalService.text")}
                </h3>
                <div className="black-card-content-wrapper">
                  <p>{t("SubscriptionBeauty.exceptionalServicePara.text")}</p>
                </div>
                <p className="black-card-item-review-author">
                  {t("SubscriptionBeauty.authorName1.text")}
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
                  {t("SubscriptionBeauty.crazyOffer.text")}
                </h3>
                <div className="black-card-content-wrapper">
                  <p>{t("SubscriptionBeauty.crazyOfferPara.text")}</p>
                </div>
                <p className="black-card-item-review-author">
                  {t("SubscriptionBeauty.authorName2.text")}
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
              {t("SubscriptionBeauty.ourSalon.text")}
            </h3>
            <h3 className="section-title-end">
              {t("SubscriptionBeauty.ourSalon.text")}
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
              <span>{t("SubscriptionBeauty.chooseSubscription.text")}</span>
            </h2>
            <div className="section-white-content hr-bottom section-white-content-sxl">
              <p>{t("SubscriptionBeauty.chooseSubscriptionPara.text")}</p>
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
}

export default UnlimitedBeautyPlan;
