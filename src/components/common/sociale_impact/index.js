import React from "react";
import social_impact_img from "../../../../public/assets/images/banner/social-impact.png";
import social_impact_mobile_img from "../../../../public/assets/images/banner/social-impact-mobile.png";
import { useTranslation } from "react-i18next";

function SocialeImpact() {
  const [t] = useTranslation("common");
  return (
    <main>
      <section className="page-banner social-impact-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">
              {t("SocialImpact.socialImpact.text")}
            </h1>
            <h2 className="page-banner-excerpt">
              {t("SocialImpact.haveQuestion.text")}
            </h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <picture>
              <source media="(min-width: 768px)" srcset={social_impact_img} />
              <img src={social_impact_mobile_img} alt="Contact Us Banner" />
            </picture>
          </div>
        </div>
        <div className="page-banner-strip bg-bl-600">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("SocialImpact.highQuality.text")}</li>
              <li>{t("SocialImpact.vegan.text")}</li>
              <li>{t("SocialImpact.crueltyFree.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Section White Start--> */}
      <section className="section-white section-white-social-impact">
        <div className="container">
          <div className="section-white-wrapper">
            <h2 className="section-white-title">
              {t("SocialImpact.proudToBe.text")}
            </h2>
            <div className="section-white-content hr-top section-white-content-sm">
              <p>{t("SocialImpact.proudToBePara.text")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Section White End--> */}
      {/* <!--Black cards attached to White Section Start--> */}
      <section className="black-card-section black-card-social-impact black-card-social-impact-mobile">
        <div className="black-card-wrapper">
          <div className="container">
            <h2 className="visually-hidden">PROUD TO BE Cards</h2>
            <div className="black-card-grid">
              <div className="black-card-item black-card-social-impact-item">
                <div className="black-card-social-impact-icon">
                  <i className="icon icon-stars"></i>
                </div>
                <h3 className="black-card-social-impact-title">
                  {t("SocialImpact.highQuality.text")}
                </h3>
                <p className="black-card-social-impact-text">
                  {t("SocialImpact.highQualityPara.text")}
                </p>
              </div>
              <div className="black-card-item black-card-social-impact-item">
                <div className="black-card-social-impact-icon">
                  <i className="icon icon-leaf"></i>
                </div>
                <h3 className="black-card-social-impact-title">
                  {t("SocialImpact.vegan.text")}
                </h3>
                <p className="black-card-social-impact-text">
                  {t("SocialImpact.veganPara.text")}
                </p>
              </div>
              <div className="black-card-item black-card-social-impact-item">
                <div className="black-card-social-impact-icon">
                  <i className="icon icon-heart-jewellery"></i>
                </div>
                <h3 className="black-card-social-impact-title">
                  {t("SocialImpact.crueltyFree.text")}
                </h3>
                <p className="black-card-social-impact-text">
                  {t("SocialImpact.crueltyFreePara.text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Black cards attached to White Section End--> */}
      <section className="gallery-section section-content-bordered-bg">
        <h2 className="visually-hidden">Gallery</h2>
        <div className="container">
          <div className="section-content-bordered gallery-wrapper">
            <div className="gallery-grid">
              <div className="gallery-item">
                <img
                  src="/assets/images/gallery/1.png"
                  alt="Gallery Item"
                  width="403"
                  height="568"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/assets/images/gallery/2.png"
                  alt="Gallery Item"
                  width="403"
                  height="568"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/assets/images/gallery/3.png"
                  alt="Gallery Item"
                  width="403"
                  height="568"
                />
              </div>
            </div>
            <h3 className="section-title-start">
              {t("SocialImpact.gallery.text")}
            </h3>
            <h3 className="section-title-end">
              {t("SocialImpact.gallery.text")}
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SocialeImpact;
