import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import Paginator from "../../../common/pagination";
import AddToCartItems from "../../../cart/AddToCart";
import repair_img from "../../../../../public/assets/images/collections/banner/repair.png";
import repair_1_img from "../../../../../public/assets/images/collections/steps/repair-1.png";
import repair_single_img from "../../../../../public/assets/images/products/repair-single.png";
import repair_2_img from "../../../../../public/assets/images/collections/steps/repair-2.png";
import repair_3_img from "../../../../../public/assets/images/collections/steps/repair-3.png";
import repair_htu_img from "../../../../../public/assets/images/collections/htu/repair.png";
import repair_1_gallery_img from "../../../../../public/assets/images/collections/gallery/repair-1.png";
import repair_2_gallery_img from "../../../../../public/assets/images/collections/gallery/repair-2.png";
import repair_3_gallery_img from "../../../../../public/assets/images/collections/gallery/repair-3.png";
import { useTranslation } from "react-i18next";

function CollectionRepair() {
  const [t] = useTranslation("common");
  const repairSlider = {
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
  const [totalPage, seTotalPage] = useState(30);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main>
      {/* <!--Collection Detail Banner Start--> */}
      <section className="single-item-banner-section">
        <div className="single-item-banner-wrapper single-item-banner-purple bg-dbd">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="single-item-banner-visual">
                  <img
                    loading="lazy"
                    src={repair_img}
                    alt="Repair Collection"
                    width="644"
                    height="724"
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
                      {t("RepairCollection.120Reviews.text")}
                    </p>
                  </div>
                  <div className="single-item-banner-header">
                    <h1 className="single-item-banner-title">
                      {t("RepairCollection.repair.text")}
                    </h1>
                    <h2 className="single-item-banner-category">
                      {t("RepairCollection.collection.text")}
                    </h2>
                    <h2 className="single-item-banner-price">
                      {t("RepairCollection.72Price.text")}
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
                          {t("RepairCollection.benefits.value")}
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
                          {t("RepairCollection.ingredients.value")}
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="benefits-tab-pane"
                        role="tabpanel"
                        aria-labelledby="benefits-tab"
                        tabindex="0"
                      >
                        <ul className="list-item-check-list">
                          <li>
                            <strong>
                              {t("RepairCollection.moisturizing.text")}
                            </strong>
                            {t("RepairCollection.moisturizingPara.text")}
                          </li>
                          <li>
                            <strong>
                              {t("RepairCollection.nourishing.text")}
                            </strong>
                            {t("RepairCollection.nourishingPara.text")}
                          </li>
                          <li>
                            <strong>
                              {t("RepairCollection.restoration.text")}
                            </strong>
                            {t("RepairCollection.restorationPara.text")}
                          </li>
                        </ul>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="ingredients-tab-pane"
                        role="tabpanel"
                        aria-labelledby="ingredients-tab"
                        tabindex="0"
                      >
                        <ul className="list-item-definition">
                          <li>
                            <strong>
                              {t("RepairCollection.repairShampoo.text")}
                            </strong>
                            {t("RepairCollection.repairShampooPara.text")}
                          </li>
                          <li>
                            <strong>
                              {t("RepairCollection.repairConditioner.text")}
                            </strong>
                            {t("RepairCollection.repairConditionerPara.text")}
                          </li>
                          <li>
                            <strong>
                              {t("RepairCollection.repairMask.text")}
                            </strong>
                            {t("RepairCollection.repairMaskPara.text")}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*    add to cart component */}
                  <AddToCartItems />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-banner-strip block-vh">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("RepairCollection.highQuality.text")}</li>
              <li>{t("RepairCollection.vegan.text")}</li>
              <li>{t("RepairCollection.crueltyFree.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Collection Detail Banner End--> */}
      {/* <!--Steps Section Start--> */}
      <section className="step-section section-content-bordered-bg">
        <h2 className="visually-hidden">Steps</h2>
        <div className="container">
          <div className="section-content-bordered step-wrapper">
            <div className="step-items-wrapper">
              <div className="step-item">
                <div className="step-item-thumbnail">
                  <img
                    loading="lazy"
                    src={repair_1_img}
                    alt="Repair Single Product Thumbnail"
                    width="403"
                    height="568"
                  />
                </div>
                <div className="step-item-content">
                  <h3 className="step-item-title">
                    {t("RepairCollection.repairShampoo1.text")}
                  </h3>
                  <p className="step-item-text">
                    {t("RepairCollection.repairShampoo1Para.text")}
                  </p>
                  <div className="step-item-product">
                    <img
                      loading="lazy"
                      src={repair_single_img}
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
                    src={repair_2_img}
                    alt="Repair Single Product Thumbnail"
                    width="403"
                    height="568"
                  />
                </div>
                <div className="step-item-content">
                  <h3 className="step-item-title">
                    {t("RepairCollection.repairConditioner2.text")}
                  </h3>
                  <p className="step-item-text">
                    {t("RepairCollection.repairConditioner2Para.text")}
                  </p>
                  <div className="step-item-product">
                    <img
                      loading="lazy"
                      src={repair_single_img}
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
                    src={repair_3_img}
                    alt="Repair Single Product Thumbnail"
                    width="403"
                    height="568"
                  />
                </div>
                <div className="step-item-content">
                  <h3 className="step-item-title">
                    {t("RepairCollection.repairMask3.text")}
                  </h3>
                  <p className="step-item-text">
                    {t("RepairCollection.repairMask3Para.text")}
                  </p>
                  <div className="step-item-product">
                    <img
                      loading="lazy"
                      src={repair_single_img}
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
              {t("RepairCollection.steps.text")}
            </h3>
            <h3 className="section-title-end">
              {t("RepairCollection.steps.text")}
            </h3>
          </div>
        </div>
      </section>
      {/* <!--Steps Section End--> */}
      {/* <!--How to use Section Start--> */}
      <section className="htu-section single-item-htu">
        <div className="htu-banner htu-banner-repair">
          <div className="container">
            <div className="htu-banner-wrapper">
              <div className="htu-banner-content">
                <h3 className="htu-banner-title-light">
                  {t("RepairCollection.howTo.text")}
                </h3>
                <h2 className="htu-banner-title-strong">
                  {t("RepairCollection.use.text")}
                </h2>
              </div>
              <div className="htu-banner-visual">
                <img
                  src={repair_htu_img}
                  alt="How to Use section Visual"
                  loading="lazy"
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
                  <div className="black-card-htu-content">
                    <p>{t("RepairCollection.1CardPara1.text")}</p>
                    <p>{t("RepairCollection.1CardPara2.text")}</p>
                  </div>
                </div>
                <div className="black-card-item black-card-htu-item">
                  <h3 className="black-card-htu-title">2</h3>
                  <div className="black-card-htu-content">
                    <p>{t("RepairCollection.2CardPara1.text")}</p>
                    <p>{t("RepairCollection.2CardPara2.text")}</p>
                  </div>
                </div>
                <div className="black-card-item black-card-htu-item">
                  <h3 className="black-card-htu-title">3</h3>
                  <div className="black-card-htu-content">
                    <p>{t("RepairCollection.3CardPara1.text")}</p>
                    <p> {t("RepairCollection.3CardPara2.text")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--How to use Section End--> */}
      {/* <!--White Section Start--> */}
      <section className="section-white section-white-page-collection">
        <div className="container">
          <div className="section-white-wrapper section-white-page-collection-wrapper">
            <h2 className="section-white-title section-white-page-collection-title">
              <small>{t("RepairCollection.about.text")}</small>
              <span>{t("RepairCollection.repCollection.text")}</span>
            </h2>
            <div className="section-white-content hr-bottom section-white-content-lg">
              <p>{t("RepairCollection.repCollectionPara.text")}</p>
            </div>
            <div className="section-white-footer">
              <h3 className="section-white-footer-title">
                {t("RepairCollection.inspiredByYou.text")}
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
                {...repairSlider}
              >
                <div className="section-content-bordered-gallery-item">
                  <img
                    loading="lazy"
                    src={repair_1_gallery_img}
                    alt="Best Keratin Treatment"
                    width="448"
                    height="341"
                  />
                </div>
                <div className="section-content-bordered-gallery-item">
                  <img
                    loading="lazy"
                    src={repair_2_gallery_img}
                    alt="What is Keratin Treatment"
                    width="448"
                    height="341"
                  />
                </div>
                <div className="section-content-bordered-gallery-item">
                  <img
                    loading="lazy"
                    src={repair_3_gallery_img}
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
                  {t("RepairCollection.reviewsPara1.text")}
                </p>
                <h3 className="review-author">
                  {t("RepairCollection.author1.text")}
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
                  {t("RepairCollection.reviewsPara2.text")}
                </p>
                <h3 className="review-author">
                  {t("RepairCollection.author2.text")}
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
                  {t("RepairCollection.reviewsPara3.text")}
                </p>
                <h3 className="review-author">
                  {t("RepairCollection.author3.text")}
                </h3>
              </div>
            </div>
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
              {t("RepairCollection.reviews.text")}
            </h3>
            <h3 className="section-title-end">
              {t("RepairCollection.reviews.text")}
            </h3>
          </div>
        </div>
      </section>
      {/* <!--Reviews Section End--> */}
    </main>
  );
}

export default CollectionRepair;
