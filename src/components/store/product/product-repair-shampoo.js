import React from "react";
import product_img from "../../../../public/assets/images/single-product/repair-shampoo/product.png";
import gellery_1_img from "../../../../public/assets/images/single-product/repair-shampoo/gallery-1.png";
import gellery_2_img from "../../../../public/assets/images/single-product/repair-shampoo/gallery-2.png";
import gellery_3_img from "../../../../public/assets/images/single-product/repair-shampoo/gallery-3.png";
import htu_img from "../../../../public/assets/images/single-product/repair-shampoo/htu.png";
import g_1_img from "../../../../public/assets/images/single-product/repair-shampoo/g-1.png";
import g_2_img from "../../../../public/assets/images/single-product/repair-shampoo/g-2.png";
import g_3_img from "../../../../public/assets/images/single-product/repair-shampoo/g-3.png";
import OwlCarousel from "react-owl-carousel";
import { useTranslation } from "react-i18next";

function ProductRepairShampoo() {
  const [t] = useTranslation("common");
  const repairShampooSlider = {
    loop: true,
    dots: false,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      768: {
        items: 2,
        margin: 30,
      },
      992: {
        items: 3,
        margin: 63,
      },
    },
  };
  return (
    <main>
      {/* <!--Collection Detail Banner Start--> */}
      <section className="single-item-banner-section">
        <div className="single-item-banner-wrapper single-item-banner-purple bg-dbd">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="single-item-banner-visual">
                  <img loading="lazy" src={product_img} alt="Single Product" />
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
                      {t("RepairShampoo.120Reviews.text")}
                    </p>
                  </div>
                  <div className="single-item-banner-header">
                    <h1 className="single-item-banner-title">
                      {t("RepairShampoo.repair.text")}
                    </h1>
                    <h2 className="single-item-banner-category">
                      {t("RepairShampoo.shampoo.text")}
                    </h2>
                    <h2 className="single-item-banner-price">
                      {t("RepairShampoo.30Price.text")}
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
                          {t("RepairShampoo.benefits.value")}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="ingredients-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#ingredients-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="ingredients-tab-pane"
                          aria-selected="false"
                        >
                          {t("RepairShampoo.ingredients.value")}
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
                              {t("RepairShampoo.moisturizing.text")}
                            </strong>
                            {t("RepairShampoo.moisturizingPara.text")}
                          </li>
                          <li>
                            <strong>
                              {t("RepairShampoo.nourishing.text")}
                            </strong>
                            {t("RepairShampoo.nourishingPara.text")}
                          </li>
                          <li>
                            <strong>
                              {t("RepairShampoo.restoration.text")}
                            </strong>
                            {t("RepairShampoo.restorationPara.text")}
                          </li>
                        </ul>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="ingredients-tab-pane"
                        role="tabpanel"
                        aria-labelledby="ingredients-tab"
                        tabIndex="0"
                      >
                        <ul className="list-item-definition">
                          <li>
                            <strong>
                              {t("RepairShampoo.repairShampoo.text")}
                            </strong>
                            {t("RepairShampoo.repairShampooPara.text")}
                          </li>
                          <li>
                            <strong>
                              {t("RepairShampoo.repairConditioner.text")}
                            </strong>
                            {t("RepairShampoo.repairConditionerPara.text")}
                          </li>
                          <li>
                            <strong>
                              {t("RepairShampoo.repairMask.text")}
                            </strong>
                            {t("RepairShampoo.repairMaskPara.text")}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-item-banner-footer">
                    <div className="single-item-banner-counter">
                      <div className="input-group counter-control-group">
                        <span className="input-group-text">-</span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Item Count"
                          value="1"
                        />
                        <span className="input-group-text">+</span>
                      </div>
                    </div>
                    <ul className="single-item-banner-cta-list">
                      <li>
                        <button className="single-item-banner-footer-cta btn-dark">
                          {t("RepairShampoo.shopNow.value")}
                        </button>
                      </li>
                      <li>
                        <button className="single-item-banner-footer-cta btn-dark outline">
                          {t("RepairShampoo.addToCart.value")}
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
              <li>{t("RepairShampoo.highQuality.text")}</li>
              <li>{t("RepairShampoo.vegan.text")}</li>
              <li>{t("RepairShampoo.crueltyFree.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Collection Detail Banner End--> */}
      {/* <!--Gallery Section Start--> */}
      <section className="gallery-section section-content-bordered-bg">
        <h2 className="visually-hidden">Gallery</h2>
        <div className="container">
          <div className="section-content-bordered gallery-wrapper">
            <div className="gallery-grid">
              <div className="gallery-item">
                <img
                  loading="lazy"
                  src={gellery_1_img}
                  alt="Gallery Item"
                  width="403"
                  height="568"
                />
              </div>
              <div className="gallery-item">
                <img
                  loading="lazy"
                  src={gellery_2_img}
                  alt="Gallery Item"
                  width="403"
                  height="568"
                />
              </div>
              <div className="gallery-item">
                <img
                  loading="lazy"
                  src={gellery_3_img}
                  alt="Gallery Item"
                  width="403"
                  height="568"
                />
              </div>
            </div>
            <h3 className="section-title-start">
              {t("RepairShampoo.gallery.text")}
            </h3>
            <h3 className="section-title-end">{t("RepairShampoo.gallery.text")}</h3>
          </div>
        </div>
      </section>
      {/* <!--Gallery Section End--> */}
      {/* <!--How to use Section Start--> */}
      <section className="htu-section single-item-htu">
        <div className="htu-banner htu-banner-repair">
          <div className="container">
            <div className="htu-banner-wrapper">
              <div className="htu-banner-content">
                <h3 className="htu-banner-title-light">
                  {t("RepairShampoo.howTo.text")}
                </h3>
                <h2 className="htu-banner-title-strong">
                  {t("RepairShampoo.use.text")}
                </h2>
              </div>
              <div className="htu-banner-visual">
                <img
                  loading="lazy"
                  src={htu_img}
                  alt="How to Use section Visual"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="htu-cards-wrapper">
          <div className="container htu-cards-container">
            <div className="htu-cards">
              <div className="black-card-grid black-card-htu-grid">
                <div className="black-card-item black-card-htu-item">
                  <h3 className="black-card-htu-title">1</h3>
                  {/* <p className="black-card-htu-content-title"></p> */}
                  <div className="black-card-htu-content">
                    <p>{t("RepairShampoo.cardPara1.text")}</p>
                  </div>
                </div>
                <div className="black-card-item black-card-htu-item">
                  <h3 className="black-card-htu-title">2</h3>
                  {/* <p className="black-card-htu-content-title"></p> */}
                  <div className="black-card-htu-content">
                    <p>{t("RepairShampoo.cardPara2.text")}</p>
                  </div>
                </div>
                <div className="black-card-item black-card-htu-item">
                  <h3 className="black-card-htu-title">3</h3>
                  {/* <p className="black-card-htu-content-title"></p> */}
                  <div className="black-card-htu-content">
                    <p>{t("RepairShampoo.cardPara3.text")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--How to use Section End--> */}
      {/* <!--White Section Start--> */}
      <section className="section-white section-white-product-detail">
        <div className="container">
          <div className="section-white-wrapper">
            <h2 className="section-white-title">
              <small>{t("RepairShampoo.about.text")}</small>
              <span>{t("RepairShampoo.repCollection.text")}</span>
            </h2>
            <div className="section-white-content hr-bottom section-white-content-lg">
              <p>{t("RepairShampoo.repCollectionPara.text")}</p>
            </div>
            <div className="section-white-footer">
              <h3 className="section-white-footer-title">
                {t("RepairShampoo.inspiredByYou.text")}
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* <!--White Section End--> */}
      {/* <!--Section White Gallery Grid Start--> */}
      <section className="section-content-bordered-bg section-content-bordered-gallery">
        <h2 className="visually-hidden">White Section Gallery</h2>
        <div className="container">
          <div className="section-content-bordered section-content-bordered-gallery-wrapper">
            <div className="owl-slider">
              <OwlCarousel
                className="section-content-bordered-gallery-grid reviews-gallery-slider-js owl-carousel owl-theme"
                {...repairShampooSlider}
              >
                <div className="section-content-bordered-gallery-item">
                  <img
                    loading="lazy"
                    src={g_1_img}
                    alt="Unknown Alt Text"
                    width="448"
                    height="341"
                  />
                </div>
                <div className="section-content-bordered-gallery-item">
                  <img
                    loading="lazy"
                    src={g_2_img}
                    alt="Unknown Alt Text"
                    width="448"
                    height="341"
                  />
                </div>
                <div className="section-content-bordered-gallery-item">
                  <img
                    loading="lazy"
                    src={g_3_img}
                    alt="Unknown Alt Text"
                    width="448"
                    height="341"
                  />
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Section White Gallery Grid End--> */}
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
                <p className="review-text">
                  {t("RepairShampoo.reviewsPara1.text")}
                </p>
                <h3 className="review-author">{t("RepairShampoo.author1.text")}</h3>
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
                <p className="review-text">
                  {t("RepairShampoo.reviewsPara2.text")}
                </p>
                <h3 className="review-author">{t("RepairShampoo.author2.text")}</h3>
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
                <p className="review-text">
                  {t("RepairShampoo.reviewsPara3.text")}
                </p>
                <h3 className="review-author">{t("RepairShampoo.author3.text")}</h3>
              </div>
            </div>
            <div className="custom-pagination-wrapper">
              <ul className="custom-pagination-list">
                <li className="custom-pagination-item prev">
                  <a href="#" aria-label="Previous Page">
                    <i className="icon icon-chevron-left"></i>
                  </a>
                </li>
                <li className="custom-pagination-item">
                  <a href="#" className="active">
                    1
                  </a>
                </li>
                <li className="custom-pagination-item">
                  <a href="#">2</a>
                </li>
                <li className="custom-pagination-item">
                  <a href="#">3</a>
                </li>
                <li className="custom-pagination-item">
                  <a href="#">4</a>
                </li>
                <li className="custom-pagination-item next">
                  <a href="#" aria-label="Next Page">
                    <i className="icon icon-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </div>
            <h3 className="section-title-start">
              {t("RepairShampoo.reviews.text")}
            </h3>
            <h3 className="section-title-end">{t("RepairShampoo.reviews.text")}</h3>
          </div>
        </div>
      </section>
      {/* <!--Reviews Section End--> */}
    </main>
  );
}

export default ProductRepairShampoo;
