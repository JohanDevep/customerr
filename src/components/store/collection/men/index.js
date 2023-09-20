import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import men_1_img from "../../../../../public/assets/images/collections/gallery/men-1.png";
import men_2_img from "../../../../../public/assets/images/collections/gallery/men-2.png";
import men_3_img from "../../../../../public/assets/images/collections/gallery/men-3.png";
import htu_men_img from "../../../../../public/assets/images/collections/htu/men.png";
import { useLocation } from "react-router-dom";
import Paginator from "../../../common/pagination";
import AddToCartItems from "../../../cart/AddToCart";
import { useTranslation } from "react-i18next";

function CollectionMen() {
  const [t] = useTranslation("common");
  const location = useLocation();
  let uuid = location?.search?.split("=")[1]; //uuid
  const menSlider = {
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
  const [currentPage, setCurrentPage] = useState(1);
  const [PerPage] = useState(10);
  const [totalPage] = useState(30);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    // pagination
    <main>
      {/*Collection Detail Banner Start */}
      <section className="single-item-banner-section text-white">
        <div className="single-item-banner-wrapper single-item-banner-men bg-616">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="single-item-banner-visual">
                  <img
                    loading="lazy"
                    src="/assets/images/collections/banner/men.png"
                    alt="Men Collection"
                    width="599"
                    height="728"
                  />
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
                      {t("MenCollection.120Reviews.text")}
                    </p>
                  </div>
                  <div className="single-item-banner-header">
                    <h1 className="single-item-banner-title">
                      {t("MenCollection.men.text")}
                    </h1>
                    <h2 className="single-item-banner-category">
                      {t("MenCollection.collection.text")}
                    </h2>
                    <h2 className="single-item-banner-price">
                      {t("MenCollection.50Price.text")}
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
                          {t("MenCollection.benefits.value")}
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
                          {t("MenCollection.ingredients.value")}
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
                            <strong>{t("MenCollection.vitality.text")}</strong>
                            {t("MenCollection.vitalityPara.text")}
                          </li>
                          <li>
                            <strong>
                              {t("MenCollection.nourishing.text")}
                            </strong>
                            {t("MenCollection.nourishingPara.text")}
                          </li>
                          <li>
                            <strong>{t("MenCollection.hydration.text")}</strong>
                            {t("MenCollection.hydrationPara.text")}
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
                              {t("MenCollection.shampooForMen.text")}
                            </strong>
                            {t("MenCollection.shampooForMenPara.text")}
                          </li>
                          <li>
                            <strong>
                              {t("MenCollection.showerGelMen.text")}
                            </strong>
                            {t("MenCollection.showerGelMenPara.text")}
                          </li>
                          <li>
                            <strong>P{t("MenCollection.pomade.text")}</strong>
                            {t("MenCollection.pomadePara.text")}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <AddToCartItems />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-banner-strip block-vh">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("MenCollection.highQuality.text")}</li>
              <li>{t("MenCollection.vegan.text")}</li>
              <li>{t("MenCollection.crueltyFree.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/*Collection Detail Banner End */}
      {/*Steps Section Start */}
      <section className="step-section section-content-bordered-bg">
        <h2 className="visually-hidden">Steps</h2>
        <div className="container">
          <div className="section-content-bordered step-wrapper">
            <div className="step-items-wrapper">
              <div className="step-item">
                <div className="step-item-thumbnail">
                  <img
                    loading="lazy"
                    src="/assets/images/collections/steps/men-1.png"
                    alt="Repair Single Product Thumbnail"
                    width="403"
                    height="568"
                  />
                </div>
                <div className="step-item-content">
                  <h3 className="step-item-title">
                    {t("MenCollection.menShampoo1.text")}
                  </h3>
                  <p className="step-item-text">
                    {t("MenCollection.menShampoo1Para.text")}
                  </p>
                  <div className="step-item-product">
                    <img
                      loading="lazy"
                      src="/assets/images/products/men-single.png"
                      alt="Repair Single Product"
                      width="90"
                      height="251"
                    />
                    <p className="step-item-count">1</p>
                  </div>
                </div>
              </div>
              <div className="step-item">
                <div className="step-item-thumbnail">
                  <img
                    loading="lazy"
                    src="/assets/images/collections/steps/men-2.png"
                    alt="Repair Single Product Thumbnail"
                    width="403"
                    height="568"
                  />
                </div>
                <div className="step-item-content">
                  <h3 className="step-item-title">
                    {t("MenCollection.menShowerGel2.text")}
                  </h3>
                  <p className="step-item-text">
                    {t("MenCollection.menShowerGel2Para.text")}
                  </p>
                  <div className="step-item-product">
                    <img
                      loading="lazy"
                      src="/assets/images/products/men-single.png"
                      alt="Repair Single Product"
                      width="90"
                      height="251"
                    />
                    <p className="step-item-count">2</p>
                  </div>
                </div>
              </div>
              <div className="step-item">
                <div className="step-item-thumbnail">
                  <img
                    loading="lazy"
                    src="/assets/images/collections/steps/men-3.png"
                    alt="Repair Single Product Thumbnail"
                    width="403"
                    height="568"
                  />
                </div>
                <div className="step-item-content">
                  <h3 className="step-item-title">
                    {t("MenCollection.pomade3.text")}
                  </h3>
                  <p className="step-item-text">
                    {t("MenCollection.pomade3Para.text")}
                  </p>
                  <div className="step-item-product">
                    <img
                      loading="lazy"
                      src="/assets/images/products/men-single-3.png"
                      alt="Repair Single Product"
                      width="90"
                      height="251"
                    />
                    <p className="step-item-count">3</p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="section-title-start">
              {t("MenCollection.steps.text")}
            </h3>
            <h3 className="section-title-end">
              {t("MenCollection.steps.text")}
            </h3>
          </div>
        </div>
      </section>
      {/*Steps Section End */}
      {/* <!--How to use Section Start--> */}
      <section className="htu-section text-white single-item-htu">
        <div className="htu-banner htu-banner-men">
          <div className="container">
            <div className="htu-banner-wrapper">
              <div className="htu-banner-content">
                <h3 className="htu-banner-title-light">
                  {t("MenCollection.howTo.text")}
                </h3>
                <h2 className="htu-banner-title-strong">
                  {t("MenCollection.use.text")}
                </h2>
              </div>
              <div className="htu-banner-visual">
                <img
                  loading="lazy"
                  src={htu_men_img}
                  alt="How to Use section Visual"
                  width="767"
                  height="811"
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
                  <p className="black-card-htu-content-title">
                    {t("MenCollection.performanceShampoo.text")}
                  </p>
                  <div className="black-card-htu-content">
                    <p>{t("MenCollection.performanceShampooPara1.text")}</p>
                    <p>{t("MenCollection.performanceShampooPara2.text")}</p>
                  </div>
                </div>
                <div className="black-card-item black-card-htu-item">
                  <h3 className="black-card-htu-title">2</h3>
                  <p className="black-card-htu-content-title">
                    {t("MenCollection.showerGelMenCard.text")}
                  </p>
                  <div className="black-card-htu-content">
                    <p>{t("MenCollection.showerGelMenCardPara1.text")}</p>
                    <p>{t("MenCollection.showerGelMenCardPara2.text")}</p>
                  </div>
                </div>
                <div className="black-card-item black-card-htu-item">
                  <h3 className="black-card-htu-title">3</h3>
                  <p className="black-card-htu-content-title">
                    {t("MenCollection.pomadeCard.text")}
                  </p>
                  <div className="black-card-htu-content">
                    <p>{t("MenCollection.pomadeCardPara.text")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--How to use Section End--> */}
      {/*White Section Start */}
      <section className="section-white section-white-page-collection">
        <div className="container">
          <div className="section-white-wrapper section-white-page-collection-wrapper">
            <h2 className="section-white-title section-white-page-collection-title">
              <small>{t("MenCollection.about.text")}</small>
              <span>{t("MenCollection.menCollection.text")}</span>
            </h2>
            <div className="section-white-content hr-bottom section-white-content-lg">
              <p>{t("MenCollection.menCollectionPara.text")}</p>
            </div>
            <div className="section-white-footer">
              <h3 className="section-white-footer-title">
                {t("MenCollection.inspiredByYou.text")}
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/*White Section End */}
      {/* <!--Section White Gallery Grid Start--> */}
      <section className="section-content-bordered-bg section-content-bordered-gallery">
        <h2 className="visually-hidden">White Section Gallery</h2>
        <div className="container">
          <div className="section-content-bordered section-content-bordered-gallery-wrapper">
            <div className="owl-slider">
              <OwlCarousel
                className="section-content-bordered-gallery-grid reviews-gallery-slider-js owl-carousel owl-theme"
                {...menSlider}
              >
                <div className="section-content-bordered-gallery-item">
                  <img
                    loading="lazy"
                    src={men_1_img}
                    alt="Unknown Alt Text"
                    width="448"
                    height="341"
                  />
                </div>
                <div className="section-content-bordered-gallery-item">
                  <img
                    loading="lazy"
                    src={men_2_img}
                    alt="Unknown Alt Text"
                    width="448"
                    height="341"
                  />
                </div>
                <div className="section-content-bordered-gallery-item">
                  <img
                    loading="lazy"
                    src={men_3_img}
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
      {/*Reviews Section Start */}
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
                  {t("MenCollection.reviewsPara1.text")}
                </p>
                <h3 className="review-author">
                  {t("MenCollection.author1.text")}
                </h3>
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
                  {t("MenCollection.reviewsPara2.text")}
                </p>
                <h3 className="review-author">
                  {t("MenCollection.author2.text")}D
                </h3>
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
                  {t("MenCollection.reviewsPara3.text")}
                </p>
                <h3 className="review-author">
                  {t("MenCollection.author3.text")}
                </h3>
              </div>
            </div>

            <h3 className="section-title-start">Reviews</h3>
            <h3 className="section-title-end">Reviews</h3>
            <div className="custom-pagination-wrapper">
              <Paginator
                paginate={paginate}
                PerPage={PerPage}
                totalPage={totalPage - 1}
              />
              {/*<ul className="custom-pagination-list">*/}
              {/*  <li className="custom-pagination-item prev">*/}
              {/*    <a href="#" aria-label="Previous Page">*/}
              {/*      <i className="icon icon-chevron-left"></i>*/}
              {/*    </a>*/}
              {/*  </li>*/}
              {/*  <li className="custom-pagination-item">*/}
              {/*    <a href="#" className="active">*/}
              {/*      1*/}
              {/*    </a>*/}
              {/*  </li>*/}
              {/*  <li className="custom-pagination-item">*/}
              {/*    <a href="#">2</a>*/}
              {/*  </li>*/}
              {/*  <li className="custom-pagination-item">*/}
              {/*    <a href="#">3</a>*/}
              {/*  </li>*/}
              {/*  <li className="custom-pagination-item">*/}
              {/*    <a href="#">4</a>*/}
              {/*  </li>*/}
              {/*  <li className="custom-pagination-item next">*/}
              {/*    <a href="#" aria-label="Next Page">*/}
              {/*      <i className="icon icon-chevron-right"></i>*/}
              {/*    </a>*/}
              {/*  </li>*/}
              {/*</ul>*/}
            </div>
            <h3 className="section-title-start">
              {t("MenCollection.reviews.text")}
            </h3>
            <h3 className="section-title-end">
              {t("MenCollection.reviews.text")}
            </h3>
          </div>
        </div>
      </section>
      {/*Reviews Section End */}
    </main>
  );
}

export default CollectionMen;
