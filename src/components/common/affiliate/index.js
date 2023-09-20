import React from "react";
import affiliate_img from "../../../../public/assets/images/banner/affiliate.png";
import { useTranslation } from "react-i18next";

const Affiliate = () => {
  const [t] = useTranslation("common");
  return (
    <main>
      {/* <!--Page Banner Start--> */}
      <section className="page-banner affiliate-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">
              {t("Affiliate.affiliate.text")}
            </h1>
            <h2 className="page-banner-excerpt">
              {t("Affiliate.tellOther.text")}
            </h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <picture>
              <source media="(min-width: 768px)" srcset={affiliate_img} />
              <img src={affiliate_img} alt="Karisma Salons Banner" />
            </picture>
          </div>
        </div>
        <div className="page-banner-strip">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("Affiliate.highQuality.text")}</li>
              <li>{t("Affiliate.vegan.text")}</li>
              <li>{t("Affiliate.crueltyFree.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Page Banner End--> */}
      {/* <!--White Section Start--> */}
      <section className="section-white section-white-affiliate">
        <div className="container">
          <div className="section-white-wrapper">
            <h2 className="section-white-title">
              {t("Affiliate.itPretty.text")}
            </h2>
            <div className="section-white-content hr-top section-white-content-sm">
              <p>{t("Affiliate.itPrettyPara.text")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--White Section End--> */}
      {/* <!--Black cards attached to White Section Start--> */}
      <section className="black-card-section black-card-content-pages black-card-affiliate black-card-karisma-salons">
        <div className="black-card-wrapper">
          <div className="container">
            <h2 className="visually-hidden">Affiliate Cards</h2>
            <div className="black-card-grid">
              <div className="black-card-item black-card-content-pages-item">
                <div className="black-card-content-pages-content-wrapper">
                  <div className="black-card-content-pages-icon">
                    <i className="icon icon-cosmetics"></i>
                  </div>
                  <h3 className="black-card-content-pages-title">
                    {t("Affiliate.15Commission.text")}
                  </h3>
                </div>
              </div>
              <div className="black-card-item black-card-content-pages-item">
                <div className="black-card-content-pages-content-wrapper">
                  <div className="black-card-content-pages-icon">
                    <i className="icon icon-cart"></i>
                  </div>
                  <h3 className="black-card-content-pages-title">
                    {t("Affiliate.exclusiveAccess.text")}
                  </h3>
                </div>
              </div>
              <div className="black-card-item black-card-content-pages-item">
                <div className="black-card-content-pages-content-wrapper">
                  <div className="black-card-content-pages-icon">
                    <i className="icon icon-stars"></i>
                  </div>
                  <h3 className="black-card-content-pages-title">
                    {t("Affiliate.accessBanners.text")}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Black cards attached to White Section End--> */}
      {/* <!--Inscription Form Section Start--> */}
      <section className="inscription-form-section section-content-bordered-bg">
        <h2 className="visually-hidden">Affiliate</h2>
        <div className="container">
          <div className="section-content-bordered">
            <div className="content-pages-product-box">
              <div className="content-pages-product-thumbnail">
                <img
                  src="https://placehold.co/872x526"
                  alt="Product Thumbnail"
                />
              </div>
              <h3 className="content-pages-product-title">
                {t("Affiliate.itsFreeJoin.text")}
              </h3>
              <p>{t("Affiliate.itsFreeJoinPara.text")}</p>
            </div>
            <div className="affiliate-form-wrapper">
              <form className="inscription-form">
                <legend className="visually-hidden">Inscription Form</legend>
                <fieldset>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="name" className="visually-hidden">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder={t("Affiliate.name.text")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="lastName" className="visually-hidden">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder={t("Affiliate.lastName.text")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="phone" className="visually-hidden">
                          Phone
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder={t("Affiliate.phone.text")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="email" className="visually-hidden">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder={t("Affiliate.email.text")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="city" className="visually-hidden">
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          placeholder={t("Affiliate.city.text")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="dob" className="visually-hidden">
                          Date of Birth
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="dob"
                          placeholder={t("Affiliate.DOB.text")}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label for="message" className="visually-hidden">
                          Message
                        </label>
                        <textarea
                          className="form-control form-text-area"
                          id="message"
                          placeholder={t("Affiliate.message.text")}
                          rows="5"
                        ></textarea>
                      </div>
                    </div>
                    <div className="inscription-form-footer">
                      <button className="btn-dark">
                        {t("Affiliate.submit.value")}
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <h3 className="section-title-start">
              {t("Affiliate.affiliate.text")}
            </h3>
            <h3 className="section-title-end">
              {t("Affiliate.affiliate.text")}
            </h3>
          </div>
        </div>
      </section>
      {/* <!--Inscription Form Section End--> */}
    </main>
  );
};

export default Affiliate;
