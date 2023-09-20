import React, { useEffect, useState } from "react";
import purple_1_img from "../../../../../public/assets/images/collections/steps/purple-1.png";
import purple_single_img from "../../../../../public/assets/images/products/purple-single.png";
import purple_2_img from "../../../../../public/assets/images/collections/steps/purple-2.png";
import purple_3_img from "../../../../../public/assets/images/collections/steps/purple-3.png";
import htu_img from "../../../../../public/assets/images/collections/htu/purple.png";
import purple_1_gallery from "../../../../../public/assets/images/collections/gallery/purple-1.png";
import purple_2_gallery from "../../../../../public/assets/images/collections/gallery/purple-2.png";
import purple_3_gallery from "../../../../../public/assets/images/collections/gallery/purple-3.png";
import OwlCarousel from "react-owl-carousel";
import AddToCartItems from "../../../cart/AddToCart";
import Paginator from "../../../common/pagination";
import { useParams } from "react-router-dom";
import { UseFetch } from "../../../../api/fetch/useFetch";
import { API_END_POINTS } from "../../../../api/config";
function CollectionPurple() {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [PerPage] = useState(10);
  const [totalPage, seTotalPage] = useState(30);
  const [product, setProduct] = useState([]);

  const getSingleProduct = async () => {
    let response = await UseFetch(API_END_POINTS.GET_PRODUCT_ITEM, null, id);
    setProduct(response?.product);
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const purpleSlider = {
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
        <div className="single-item-banner-wrapper single-item-banner-purple bg-a8a-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="single-item-banner-visual">
                  <img
                    loading="lazy"
                    src={product?.imageUrl}
                    alt="Purple Collection"
                    width="645"
                    height="799"
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
                      (120 REVIEWS)
                    </p>
                  </div>
                  <div className="single-item-banner-header">
                    <h1 className="single-item-banner-title">
                      {product?.name}
                    </h1>
                    <h2 className="single-item-banner-category">
                      {product?.description}
                    </h2>
                    <h2 className="single-item-banner-price">
                      ${product?.price}
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
                          BENEFITS
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
                          Ingredients
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
                            <strong>Tone — </strong>A brass-reducing shampoo
                            with purple pigments for instant blonde
                            illumination. Instantly neutralizes brassy & yellow
                            undertones.
                          </li>
                          <li>
                            <strong>Restore — </strong>Intensively restores
                            sensitized hair, nourishing the fiber. Instantly
                            smoothes, strengthens and softens sensitized
                            lightened hair while providing deep nutrition. Ideal
                            for all tones of faux-blonde hair. The hair will
                            remain soft, moisturized, lightweight and luminous.
                          </li>
                          <li>
                            <strong>Hydration — </strong>Intense hydration,
                            plumps the hair fiber and deeply strengthens healthy
                            looking hair. This formula optimizes hydration
                            retention, smoothes the cuticle and increases shine.
                            Weakened hair is more resilient and protected from
                            future damage.
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
                            <strong>Repair Shampoo -</strong>Aqua, Sodium
                            Lauroamphoacetate, Cocamidopropyl Betaine, Biotin,
                            Cocamide mea, Oat Amino Acid Derivative, Sodium
                            Lauroyl Glutamate, Fragrance, Citric Acid, Argan
                            Oil, Benzoic Acid, Sodium Benzoate, Potassium
                            Sorbate.
                          </li>
                          <li>
                            <strong>Repair Conditioner -</strong>Aqua, Cetearyl
                            Alcohol, Steartrimonium Chloride, Cyclopentasiloxane
                            and Dimethicone, Hydroxyethylcellulose, Biotine,
                            Fragrance, Argania Spinosa Kernel Oil, Benzoic Acid,
                            Sodium Benzoate, Potassium Sorbate.
                          </li>
                          <li>
                            <strong>Repair Mask -</strong>Aqua, Cetearyl
                            Alcohol, Steartrimonium Chloride, Cyclopentasiloxane
                            and Dimethicone, Hydroxyethylcellulose, Biotine,
                            Fragrance, Argania Spinosa Kernel Oil, Benzoic Acid,
                            Sodium Benzoate, Potassium Sorbate.
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
              <li>HIGH QUALITY</li>
              <li>VEGAN</li>
              <li>CRUELTY FREE</li>
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
                    src={purple_1_img}
                    alt="Repair Single Product Thumbnail"
                    width="403"
                    height="568"
                  />
                </div>
                <div className="step-item-content">
                  <h3 className="step-item-title">purple SHAMPOO</h3>
                  <p className="step-item-text">
                    A color depositing purple shampoo for neutralizing brassy
                    hair and correcting yellow tones in blonde and gray hair to
                    maintain cool blonde color.
                  </p>
                  <div className="step-item-product">
                    <img
                      loading="lazy"
                      src={purple_single_img}
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
                    src={purple_2_img}
                    alt="Repair Single Product Thumbnail"
                    width="403"
                    height="568"
                  />
                </div>
                <div className="step-item-content">
                  <h3 className="step-item-title">purple CONDITIONER</h3>
                  <p className="step-item-text">
                    Protein enriched deep color conditioning, highlights with no
                    dull yellow. Conditioner is specifically formulated for
                    blonde, silver or gray hair to tone down brassiness.
                  </p>
                  <div className="step-item-product">
                    <img
                      loading="lazy"
                      src={purple_single_img}
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
                    src={purple_3_img}
                    alt="Repair Single Product Thumbnail"
                    width="403"
                    height="568"
                  />
                </div>
                <div className="step-item-content">
                  <h3 className="step-item-title">purple MASK</h3>
                  <p className="step-item-text">
                    Purple hair mask for blonde hair that tones in just 5
                    minutes. This hair toner corrects &amp; neutralizes unwanted
                    brassiness and yellow undertones in blonde hair.
                  </p>
                  <div className="step-item-product">
                    <img
                      loading="lazy"
                      src={purple_single_img}
                      alt="Repair Single Product"
                      width="90"
                      height="251"
                    />
                    <p className="step-item-count">3</p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="section-title-start">Steps</h3>
            <h3 className="section-title-end">Steps</h3>
          </div>
        </div>
      </section>
      {/* <!--Steps Section End--> */}
      {/* <!--How to use Section Start--> */}
      <section className="htu-section single-item-htu">
        <div className="htu-banner htu-banner-purple">
          <div className="container">
            <div className="htu-banner-wrapper">
              <div className="htu-banner-content">
                <h3 className="htu-banner-title-light">How to</h3>
                <h2 className="htu-banner-title-strong">Use?</h2>
              </div>
              <div className="htu-banner-visual">
                <img
                  loading="lazy"
                  src={htu_img}
                  alt="How to Use section Visual"
                  width="782"
                  height="832"
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
                    <p>
                      Soins Karismä shampoo should be applied in the shower or
                      during a hair wash. While your hair is wet, apply the
                      shampoo and lather it onto your hair. The amount of
                      shampoo that you use will vary depending on your hair
                      consistency.
                    </p>
                    <p>
                      This same rule applies to how long you should leave the
                      shampoo in for. If your hair is looking like it needs a
                      little extra support, you can add a minute or two to the
                      process.
                    </p>
                  </div>
                </div>
                <div className="black-card-item black-card-htu-item">
                  <h3 className="black-card-htu-title">2</h3>
                  <div className="black-card-htu-content">
                    <p>
                      Soins Karismä shampoo should be applied in the shower or
                      during a hair wash. While your hair is wet, apply the
                      shampoo and lather it onto your hair. The amount of
                      shampoo that you use will vary depending on your hair
                      consistency.
                    </p>
                    <p>
                      This same rule applies to how long you should leave the
                      shampoo in for. If your hair is looking like it needs a
                      little extra support, you can add a minute or two to the
                      process.
                    </p>
                  </div>
                </div>
                <div className="black-card-item black-card-htu-item">
                  <h3 className="black-card-htu-title">3</h3>
                  <div className="black-card-htu-content">
                    <p>
                      Soins Karismä shampoo should be applied in the shower or
                      during a hair wash. While your hair is wet, apply the
                      shampoo and lather it onto your hair. The amount of
                      shampoo that you use will vary depending on your hair
                      consistency.
                    </p>
                    <p>
                      This same rule applies to how long you should leave the
                      shampoo in for. If your hair is looking like it needs a
                      little extra support, you can add a minute or two to the
                      process.
                    </p>
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
              <small>ABOUT</small>
              <span>purple COLLECTION</span>
            </h2>
            <div className="section-white-content hr-bottom section-white-content-lg">
              <p>
                Our Purple Collection was brought to light by all of our
                faux-blonde enthusiasts here at Soins Karismä. The Purple
                Collection is a triad of products that include purple shampoo,
                conditioner and mask. Our goal is to neutralize brassy hair and
                correct yellow tones in blonde and gray hair to maintain cool
                blonde color. We have developed a protein enriched deep color
                conditioning that is made for long lasting results.
              </p>
            </div>
            <div className="section-white-footer">
              <h3 className="section-white-footer-title">INSPIRED BY YOU!</h3>
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
                {...purpleSlider}
              >
                <div className="section-content-bordered-gallery-item">
                  <img
                    loading="lazy"
                    src={purple_1_gallery}
                    alt="Unknown Alt Text"
                    width="448"
                    height="341"
                  />
                </div>
                <div className="section-content-bordered-gallery-item">
                  <img
                    loading="lazy"
                    src={purple_2_gallery}
                    alt="Unknown Alt Text"
                    width="448"
                    height="341"
                  />
                </div>
                <div className="section-content-bordered-gallery-item">
                  <img
                    loading="lazy"
                    src={purple_3_gallery}
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
                  As an individual who had been struggling with dry hair on a
                  constant basis, finding the Soins Karismä Repair Collection
                  was a blessing. It has all the ingredients and step by step
                  process to ensure that you get the right hair treatment.
                  Absolutely wonderful!
                </p>
                <h3 className="review-author">MANON TREMBLAY</h3>
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
                  As an individual who had been struggling with dry hair on a
                  constant basis, finding the Soins Karismä Repair Collection
                  was a blessing. It has all the ingredients and step by step
                  process to ensure that you get the right hair treatment.
                  Absolutely wonderful!
                </p>
                <h3 className="review-author">MANON TREMBLAY</h3>
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
                  As an individual who had been struggling with dry hair on a
                  constant basis, finding the Soins Karismä Repair Collection
                  was a blessing. It has all the ingredients and step by step
                  process to ensure that you get the right hair treatment.
                  Absolutely wonderful!
                </p>
                <h3 className="review-author">MANON TREMBLAY</h3>
              </div>
            </div>
            <Paginator
              paginate={paginate}
              PerPage={PerPage}
              totalPage={totalPage - 1}
            />
            <h3 className="section-title-start">Reviews</h3>
            <h3 className="section-title-end">Reviews</h3>
          </div>
        </div>
      </section>
      {/* <!--Reviews Section End--> */}
    </main>
  );
}

export default CollectionPurple;
