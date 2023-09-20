import React from "react";
import home_img from "../../../../public/assets/images/banner/home.png";
import subscription_beauty_haircut_img from "../../../../public/assets/images/home/subscription-beauty-haircut.png";
import subscription_beauty_nails_img from "../../../../public/assets/images/home/subscription-beauty-nails.png";
import subscription_beauty_permanent_makeup_img from "../../../../public/assets/images/home/subscription-beauty-permanent-makeup.png";
import subscription_beauty_skin_care_img from "../../../../public/assets/images/home/subscription-beauty-skin-care.png";
import subscription_beauty_hair_care_img from "../../../../public/assets/images/home/subscription-beauty-hair-care.png";
import subscription_beauty_coloration_img from "../../../../public/assets/images/home/subscription-beauty-coloration.png";
import subscription_beauty_makeup_img from "../../../../public/assets/images/home/subscription-beauty-makeup.png";
import appointment_img from "../../../../public/assets/images/home/appointment.png";
import product_repair_img from "../../../../public/assets/images/store/products/product-repair.png";
import impact_img from "../../../../public/assets/images/home/impact.png";
import academy_g_1_img from "../../../../public/assets/images/home/academy-g-1.png";
import academy_g_2_img from "../../../../public/assets/images/home/academy-g-2.png";
import academy_g_3_img from "../../../../public/assets/images/home/academy-g-3.png";
import academy_img from "../../../../public/assets/images/home/academy.png";
import reviews_img from "../../../../public/assets/images/home/reviews.png";
import community_img from "../../../../public/assets/images/home/community.png";
import home_mobile_img from "../../../../public/assets/images/banner/home-mobile.png";

import "../../../../public/assets/js/jquery.min";
import "../../../../public/assets/js/owl.carousel.min";
import "../../../../public/assets/js/script";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HomePagePopUp from "../modals/homepage_popup";
import ReferSalon from "../modals/refer_salon";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "./style/Style.css";
import {
  GetCollectionProduct,
  getSubscriptions,
} from "../../../redux/slices/Fetch";
import { useDispatch, useSelector } from "react-redux";
import { getCartItem } from "../../../redux/slices/Cart";
import CollectionProduct from "../../store/collection";

const Home = () => {
  const navigate = useNavigate();
  const [t] = useTranslation("common");
  const products = useSelector((state) => state.fetch.collectionProducts);
  const bottomSlider = {
    loop: true,
    dots: false,
    nav: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    navText: [
      '<i className="icon icon-chevron-left" aria-hidden="true"></i>',
      '<i className="icon icon-chevron-right" aria-hidden="true"></i>',
    ],
    items: 4,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    responsive: {
      360: {
        items: 1,
      },
      414: {
        items: 1,
      },
      640: {
        items: 2,
      },
      990: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1220: {
        items: 3,
      },
      1400: {
        items: 4,
      },
      1920: {
        items: 4,
      },
      2160: {
        items: 4,
      },
    },
  };
  const productsSlider = {
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
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
    responsive: {
      280: {
        items: 1,
      },
      500: {
        items: 1,
      },
      800: {
        items: 2,
      },
      990: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1220: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  };

  return (
    <main>
      <ReferSalon />
      <HomePagePopUp />
      {/* <!--Home - Page Banner Start--> */}
      <section className="page-banner home-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <div className="header-block">
              <h1 className="page-banner-title">
                {t("Home.welcome.title", { framework: "React" })}
              </h1>
              <h2 className="page-banner-excerpt">{t("Home.toExperience.text")}</h2>
              <Link className="button btn-white outline" to="/quiz/intro">
                Take The Quiz
              </Link>
            </div>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <img src={home_img} alt="Home Banner" className="mobile-hidden" />
            <img
              src={home_mobile_img}
              alt="Home Banner"
              className="desktop-hidden"
            />
          </div>
        </div>
        <div className="container">
          <ul className="page-banner-social-icons-list">
            <li>
              <a href="https://www.instagram.com/soins.karisma/" target="_blank"  aria-label="Instagram">
                <i className="icon icon-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/soinskarisma" target="_blank" aria-label="twitter">
                <i className="icon icon-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/soins.karisma/" target="_blank"aria-label="facebook">
                <i className="icon icon-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="page-banner-strip">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>
                {t("Home.bannerBottomDarkStrip.text", { framework: "React" })}
              </li>
              <li>
                {t("Home.bannerBottomDarkStrip.text2", { framework: "React" })}
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Home - Page Banner End--> */}
      {/* <!--Home - Slider Start--> */}
      <section className="section-home-slider">
        <div className="section-home-slider-wrapper">
          <div className="container">
            <div className="home-slider-wrapper">
              <div className="row">
                <div className="col-xl-4 col-home-slider-content">
                  <div className="home-slider-content-block">
                    <h2 className="home-slider-content-title">
                      <small>SUBSCRIPTIONS PLANS</small>
                      <span>Unlimited Beauty</span>
                    </h2>
                    <p className="home-slider-content-excerpt">$90.00</p>
                    <div className="home-slider-content-cta">
                      <button className="btn-dark outline-transparent">
                        SAVE MY SPOT
                      </button>
                    </div>
                  </div>
                  <div className="home-slider-thumbnails-sm-carousel-js owl-carousel">
                    <div className="home-slider-content-icons subscription-slider-icons">
                      <div className="item-block active">
                        <i className="icon icon-beauty-facial-treatment"></i>
                        <span>Hair Treatment</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-skin-care"></i>
                        <span>Skin Care</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-eyelashes"></i>
                        <span>Permanent Makeup</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-nail-polish"></i>
                        <span>Nails</span>
                      </div>
                    </div>
                    <div className="home-slider-content-icons subscription-slider-icons">
                      <div className="item-block active">
                        <i className="icon icon-beauty-hair-dye"></i>
                        <span>Coloration</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-facial-treatment"></i>
                        <span>Hair Treatment</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-skin-care"></i>
                        <span>Skin Care</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-eyelashes"></i>
                        <span>Permanent Makeup</span>
                      </div>
                    </div>
                    <div className="home-slider-content-icons subscription-slider-icons">
                      <div className="item-block active">
                        <i className="icon icon-beauty-make-up-kit"></i>
                        <span>Makeup</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-hair-dye"></i>
                        <span>Coloration</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-facial-treatment"></i>
                        <span>Hair Treatment</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-skin-care"></i>
                        <span>Skin Care</span>
                      </div>
                    </div>
                    <div className="home-slider-content-icons subscription-slider-icons">
                      <div className="item-block active">
                        <i className="icon icon-beauty-scissors"></i>
                        <span>Hair Cut</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-make-up-kit"></i>
                        <span>Makeup</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-hair-dye"></i>
                        <span>Coloration</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-facial-treatment"></i>
                        <span>Hair Treatment</span>
                      </div>
                    </div>
                    <div className="home-slider-content-icons subscription-slider-icons">
                      <div className="item-block active">
                        <i className="icon icon-beauty-nail-polish"></i>
                        <span>Nails</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-facial-treatment"></i>
                        <span>Hair Treatment</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-make-up-kit"></i>
                        <span>Makeup</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-hair-dye"></i>
                        <span>Coloration</span>
                      </div>
                    </div>
                    <div className="home-slider-content-icons subscription-slider-icons">
                      <div className="item-block active">
                        <i className="icon icon-beauty-eyelashes"></i>
                        <span>Permanent Makeup</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-nail-polish"></i>
                        <span>Nails</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-facial-treatment"></i>
                        <span>Hair Treatment</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-make-up-kit"></i>
                        <span>Makeup</span>
                      </div>
                    </div>
                    <div className="home-slider-content-icons subscription-slider-icons">
                      <div className="item-block active">
                        <i className="icon icon-beauty-skin-care"></i>
                        <span>Skin Care</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-eyelashes"></i>
                        <span>Permanent Makeup</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-nail-polish"></i>
                        <span>Nails</span>
                      </div>
                      <div className="item-block active">
                        <i className="icon icon-beauty-scissors"></i>
                        <span>Hair Cut</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-8 col-home-slider-thumbnails">
                  <div className="home-slider-thumbnails-block">
                    <div className="owl-slider">
                      <div className="home-slider-thumbnails-carousel home-slider-thumbnails-carousel-js owl-carousel owl-theme">
                        <div className="item-thumbnail-block">
                          <div className="item-thumbnail block-haircut">
                            <img
                              src={subscription_beauty_haircut_img}
                              alt="Haircut Image"
                            />
                          </div>
                          <div className="item-thumbnail-text">
                            <p>Haircut</p>
                          </div>
                        </div>
                        <div className="item-thumbnail-block">
                          <div className="item-thumbnail block-nails">
                            <img
                              src={subscription_beauty_nails_img}
                              alt="Nails Image"
                            />
                          </div>
                          <div className="item-thumbnail-text">
                            <p>Nails</p>
                          </div>
                        </div>
                        <div className="item-thumbnail-block">
                          <div className="item-thumbnail block-permanent-makeup">
                            <img
                              src={subscription_beauty_permanent_makeup_img}
                              alt="Permanent Makeup Image"
                            />
                          </div>
                          <div className="item-thumbnail-text">
                            <p>Permanent Makeup</p>
                          </div>
                        </div>
                        <div className="item-thumbnail-block">
                          <div className="item-thumbnail block-skin-care">
                            <img
                              src={subscription_beauty_skin_care_img}
                              alt="Skin Care Image"
                            />
                          </div>
                          <div className="item-thumbnail-text">
                            <p>Skin Care</p>
                          </div>
                        </div>
                        <div className="item-thumbnail-block">
                          <div className="item-thumbnail block-hair-care">
                            <img
                              src={subscription_beauty_hair_care_img}
                              alt="Hair Care Image"
                            />
                          </div>
                          <div className="item-thumbnail-text">
                            <p>Hair Care</p>
                          </div>
                        </div>
                        <div className="item-thumbnail-block">
                          <div className="item-thumbnail block-coloration">
                            <img
                              src={subscription_beauty_coloration_img}
                              alt="Coloration Image"
                            />
                          </div>
                          <div className="item-thumbnail-text">
                            <p>Coloration</p>
                          </div>
                        </div>
                        <div className="item-thumbnail-block">
                          <div className="item-thumbnail block-makeup">
                            <img
                              src={subscription_beauty_makeup_img}
                              alt="Makeup Image"
                            />
                          </div>
                          <div className="item-thumbnail-text">
                            <p>Makeup</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Home - Slider End-->  */}
      {/* <!--Home - White Section 1 Start--> */}
      <section className="section-white section-white-home home-2 section-white-home-1">
        <div className="container">
          <div className="section-white-wrapper section-white-home-wrapper">
            <h2 className="section-white-title">
              <span>{t("Home.whoWeAre.text")}</span>
            </h2>
            <div className="section-white-content hr-bottom section-white-content-lg">
              <p>{t("Home.whoWeArePara.text", { framework: "React" })}</p>
            </div>
            <div className="section-white-footer">
              <h3 className="section-white-footer-title">
                {t("Home.inspiredByYou.text")}
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Home - White Section 1 End--> */}
      {/* <!--Home - Appointment Start--> */}
      <section className="section-right-banner section-appointment">
        <div className="container">
          <div className="row section-appointment-row">
            <div className="col-lg-6">
              <div className="col-content-wrapper">
                <h2 className="section-right-banner-title">
                  <small>{t("Home.virtual.text")}</small>
                  <span>{t("Home.appointment.text")}</span>
                </h2>
                <p>{t("Home.appointmentParagraph.text")}</p>
                <button className="btn-dark outline-transparent">
                  {t("Home.appointmentButton.value")}
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="col-banner-wrapper">
                <img src={appointment_img} alt="Community Section Banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Home - Appointment End--> */}
      {/* <!--Home - HTU Cards 1 Start--> */}
      <section className="section-content-bordered-bg bleed-cards-appointment">
        <h2 className="visually-hidden">Services</h2>
        <div className="container">
          <div className="section-content-bordered section-content-bordered-slider-wrapper">
            <div className="section-bleed-cards-wrapper">
              <div className="black-card-grid black-card-htu-grid bleed">
                <div className="black-card-item black-card-htu-item">
                  <h3 className="black-card-htu-title">1</h3>
                  <p className="black-card-htu-content-title">
                    {t("Home.virtualCardHeading1.text")}
                  </p>
                  <div className="black-card-htu-content">
                    <p>{t("Home.virtualCardParagraph1.text")}</p>
                  </div>
                </div>
                <div className="black-card-item black-card-htu-item">
                  <h3 className="black-card-htu-title">2</h3>
                  <p className="black-card-htu-content-title">
                    {t("Home.virtualCardHeading2.text")}
                  </p>
                  <div className="black-card-htu-content">
                    <p>{t("Home.virtualCardParagraph2.text")}</p>
                  </div>
                </div>
                <div className="black-card-item black-card-htu-item">
                  <h3 className="black-card-htu-title">3</h3>
                  <p className="black-card-htu-content-title">
                    {t("Home.virtualCardHeading3.text")}
                  </p>
                  <div className="black-card-htu-content">
                    <p>{t("Home.virtualCardParagraph3.text")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Home - HTU Cards 1 End--> */}
      {/* <!--Home - Collections Listing Section Start--> */}
      <CollectionProduct />
      {/* <!--Home - Collections Listing Section End--> */}
      {/* <!--Home - Products Listing Section Start--> */}
      <section className="product-listing-section section-content-bordered-bg home-products-listing">
        <h2 className="visually-hidden">Products</h2>
        <div className="container">
          <div className="section-content-bordered product-listing store-listing">
            <div className="owl-slider">
              <OwlCarousel
                className="product-listing-grid-slider-js owl-carousel owl-theme"
                {...productsSlider}
              >
                {products?.length > 0 &&
                  products.map((product) => (
                    <div className="owl-carousel-item">
                      <div className="product-listing-item store-listing-item">
                        <div className="product-listing-item-thumbnail">
                          <img
                            loading="lazy"
                            src={
                              product?.imageUrl
                                ? product?.imageUrl
                                : product_repair_img
                            }
                            alt="Product Item"
                          />
                        </div>
                        <h3 className="product-listing-item-title store-listing-title">
                          <span className="store-listing-title-text">
                            {product?.name}
                          </span>
                          <span className="store-listing-title-category">
                            {product?.description}
                          </span>
                        </h3>
                        <p className="product-listing-item-price store-listing-price">
                          {product?.price}
                        </p>
                        <Link
                          to={`/store/collection/product/${product?.uuid}`}
                          className="store-listing-item-link"
                        >
                          <span className="visually-hidden">
                            {product?.description}
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
              </OwlCarousel>
            </div>
            <div className="home-products-listing-footer">
              <button
                className="btn-dark outline-transparent"
                onClick={() => {
                  navigate("/store");
                }}
              >
                Shop Now
              </button>
            </div>
            <h3 className="section-title-start">Products</h3>
            <h3 className="section-title-end">Products</h3>
          </div>
        </div>
      </section>
      {/* <!--Home - Products Listing Section End--> */}
      {/* <!--Home - Community Start--> */}
      <section className="section-right-banner section-impact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-content">
              <div className="col-content-wrapper">
                <h2 className="section-right-banner-title">
                  <small>{t("Home.social.text")}</small>
                  <span>{t("Home.impact.text")}</span>
                </h2>
                <p>{t("Home.socialImpactParagraph.text")}</p>
                <button className="btn-dark outline-transparent">
                  {t("Home.discover.value")}
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="col-banner-wrapper">
                <img src={impact_img} alt="Social Impact Section Banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Home - Community End--> */}
      {/* <!--Home - HTU Cards 2 Start--> */}
      <section className="section-bleed-cards home-bleed-cards bleed-cards-impact">
        <h2 className="visually-hidden">Social Impact Black Cards</h2>
        <div className="container">
          <div className="section-bleed-cards-wrapper">
            <div className="black-card-grid black-card-htu-grid">
              <div className="black-card-item black-card-htu-item">
                <p className="black-card-htu-content-title">
                  {t("Home.trustedBrandCard.text")}
                </p>
              </div>
              <div className="black-card-item black-card-htu-item">
                <p className="black-card-htu-content-title">
                  {t("Home.ecoFriendlyCard.text")}
                </p>
              </div>
              <div className="black-card-item black-card-htu-item">
                <p className="black-card-htu-content-title">
                  {t("Home.communityCard.text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Home - HTU Cards 2 End--> */}
      {/* <!--Home - White Section 2 Start--> */}
      <section className="section-white section-white-home home-2">
        <div className="container">
          <div className="section-white-wrapper section-white-home-wrapper">
            <h2 className="section-white-title">
              <span>{t("Home.InspiredByYou.text")}</span>
            </h2>
            <div className="section-white-content hr-bottom section-white-content-xlg">
              <p>{t("Home.inspiredByYouParagraph.text")}</p>
            </div>
            <div className="section-white-footer">
              <h3 className="section-white-footer-title">
                {t("Home.aBetterFuture.text")}
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Home - White Section 2 End--> */}
      {/* <!--Home - Academy Start--> */}
      <section className="section-right-banner section-academy">
        <div className="container">
          <div className="row section-academy-row">
            <div className="col-x3l-5 col-lg-6 col-content">
              <div className="col-content-wrapper">
                <h2 className="section-right-banner-title">
                  <span>{t("Home.academy.text")}</span>
                </h2>
                <p>{t("Home.academyParagraph.text")}</p>
                <button className="btn-dark outline-transparent">
                  {t("Home.improveSkill.value")}
                </button>
                <div className="academy-content-gallery">
                  <div className="academy-content-gallery-item">
                    <img src={academy_g_1_img} alt="Academy Gallery Item" />
                  </div>
                  <div className="academy-content-gallery-item">
                    <img src={academy_g_2_img} alt="Academy Gallery Item" />
                  </div>
                  <div className="academy-content-gallery-item">
                    <img src={academy_g_3_img} alt="Academy Gallery Item" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-x3l-7 col-lg-6 col-banner">
              <div className="col-banner-wrapper">
                <img src={academy_img} alt="Academy Section Banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Home - Academy End--> */}
      {/* <!--Home - HTU Cards 3 Start--> */}
      <section className="section-bleed-cards home-bleed-cards bleed-cards-academy">
        <h2 className="visually-hidden">Services</h2>
        <div className="container">
          <div className="section-bleed-cards-wrapper">
            <div className="black-card-grid black-card-htu-grid bleed">
              <div className="black-card-item black-card-htu-item">
                <div className="black-card-htu-icon">
                  <i className="icon icon-workshop"></i>
                </div>
                <p className="black-card-htu-content-title">
                  {t("Home.workshop.text")}
                </p>
                <div className="black-card-htu-content">
                  <p>{t("Home.workshopCardPara.text")}</p>
                </div>
              </div>
              <div className="black-card-item black-card-htu-item">
                <div className="black-card-htu-icon">
                  <i className="icon icon-certificate"></i>
                </div>
                <p className="black-card-htu-content-title">
                  {t("Home.certificate.text")}
                </p>
                <div className="black-card-htu-content">
                  <p>{t("Home.certificateCardPara.text")}</p>
                </div>
              </div>
              <div className="black-card-item black-card-htu-item">
                <div className="black-card-htu-icon">
                  <i className="icon icon-virtual"></i>
                </div>
                <p className="black-card-htu-content-title">
                  {t("Home.virtualCard.text")}
                </p>
                <div className="black-card-htu-content">
                  <p>{t("Home.virtualCardPara.text")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Home - HTU Cards 3 End--> */}
      {/* <!--Home - Bordered Slider Start--> */}
      <section className="section-content-bordered-bg section-content-bordered-reviews">
        <div className="container">
          <div className="section-content-bordered section-content-bordered-reviews-wrapper">
            <div className="section-reviews-thumbnail">
              <img src={reviews_img} alt="Review thumbnail" />
            </div>
          </div>
        </div>
      </section>
      {/* <!--Home - Bordered Slider End--> */}
      {/* <!--Home - Community Start--> */}
      <section className="section-right-banner section-community">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="col-content-wrapper">
                <h2 className="section-right-banner-title">
                  <small>{t("Home.our.text")}</small>
                  <span>{t("Home.community.text")}</span>
                </h2>
                <p>{t("Home.communityParagraph.text")}</p>
                <button className="btn-dark outline-transparent">
                  {t("Home.joinNow.value")}
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="col-banner-wrapper">
                <img src={community_img} alt="Community Section Banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Home - Community End--> */}
      {/* <!--Home - HTU Cards 4 Start--> */}
      <section className="section-bleed-cards home-bleed-cards home-bleed-cards-community">
        <h2 className="visually-hidden">Services</h2>
        <div className="container">
          <div className="section-bleed-cards-wrapper">
            <div className="black-card-grid black-card-htu-grid bleed">
              <div className="black-card-item black-card-htu-item">
                <h3 className="black-card-htu-title">1</h3>
                <p className="black-card-htu-content-title">
                  {t("Home.shareCard.text")}
                </p>
                <div className="black-card-htu-content">
                  <p>{t("Home.shareCardPara.text")}</p>
                </div>
              </div>
              <div className="black-card-item black-card-htu-item">
                <h3 className="black-card-htu-title">2</h3>
                <p className="black-card-htu-content-title">
                  {t("Home.connectCard.text")}
                </p>
                <div className="black-card-htu-content">
                  <p>{t("Home.connectCardPara.text")}</p>
                </div>
              </div>
              <div className="black-card-item black-card-htu-item">
                <h3 className="black-card-htu-title">3</h3>
                <p className="black-card-htu-content-title">
                  {t("Home.enjoyCard.text")}
                </p>
                <div className="black-card-htu-content">
                  <p>{t("Home.enjoyCardPara.text")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Home - HTU Cards 4 End--> */}
      {/* <!--Home - White Section 3 Start--> */}
      <section className="section-white section-white-home home-3">
        <div className="container">
          <div className="section-white-wrapper section-white-home-wrapper">
            <h2 className="section-white-title">
              <small>{t("Home.referSalon.text")}</small>
              <span>{t("Home.recieve1000.text")}</span>
            </h2>
            <div className="section-white-content hr-top section-white-content-sxl">
              <button
                className="btn-dark"
                data-bs-target="#referASalon"
                data-bs-toggle="modal"
              >
                {t("Home.ShareAndRefer.value")}
              </button>
              <small>{t("Home.rewardAvailable.text")}</small>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Home - White Section 3 End--> */}
      {/* <!--Home - Bordered Quote Start--> */}
      <section className="section-content-bordered-bg section-content-bordered-quote">
        <h2 className="visually-hidden">Black Cards Grid</h2>
        <div className="container">
          <div className="section-content-bordered section-content-bordered-slider-wrapper">
            <div className="black-card-item black-card-item-quote">
              <div className="black-card-content-wrapper">
                <p>{t("Home.bottomCardPara.text")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Home - Bordered Quote End--> */}
    </main>
  );
};

export default Home;
