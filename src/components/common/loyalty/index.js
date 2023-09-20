import React, { useState } from "react";
import loyalty_img from "../../../../public/assets/images/banner/loyality.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { loyalityRedeem } from "./data";

const Loyalty = () => {
  const [t] = useTranslation("common");
  const [active, setActive] = useState(0);
  const tabSwitch = (id) => {
    setActive(id);
  };
  return (
    <main>
      {/* <!--Page Banner Start--> */}
      <section className="page-banner loyality-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title sm">
              {t("Loyalty.loyalty.text")}
            </h1>
            <h2 className="page-banner-excerpt">
              {t("Loyalty.earnReward.text")}
            </h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <picture>
              <source media="(min-width: 768px)" srcset={loyalty_img} />
              <img src={loyalty_img} alt="Loyality Banner" />
            </picture>
          </div>
        </div>
        <div className="page-banner-strip">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("Loyalty.highQuality.text")}</li>
              <li>{t("Loyalty.unlimitBeautyServ.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Page Banner End--> */}
      {/* <!--White Section Start--> */}
      <section className="section-white section-white-loyality">
        <div className="container">
          <div className="section-white-wrapper">
            <h2 className="section-white-title">
              {t("Loyalty.earnStars.text")}
            </h2>
            <div className="section-white-content hr-top section-white-content-sm">
              <p>{t("Loyalty.earnStarsPara.text")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--White Section End--> */}
      {/* <!--Black cards Start--> */}
      <section className="black-card-section black-card-content-pages black-card-loyality black-card-karisma-salons">
        <div className="black-card-wrapper">
          <div className="container">
            <h2 className="visually-hidden">Investors Relations Cards</h2>
            <div className="black-card-grid">
              <div className="black-card-item black-card-content-pages-item">
                <div className="black-card-content-pages-content-wrapper">
                  <div className="black-card-content-pages-count">
                    <p>1</p>
                  </div>
                  <h3 className="black-card-content-pages-title">
                    {t("Loyalty.joinLoyalty.text")}
                  </h3>
                  <p>{t("Loyalty.joinLoyaltyPara.text")}</p>
                </div>
              </div>
              <div className="black-card-item black-card-content-pages-item">
                <div className="black-card-content-pages-content-wrapper">
                  <div className="black-card-content-pages-count">
                    <p>2</p>
                  </div>
                  <h3 className="black-card-content-pages-title">
                    {t("Loyalty.earnStar.text")}
                  </h3>
                  <p>{t("Loyalty.earnStarPara.text")}</p>
                </div>
              </div>
              <div className="black-card-item black-card-content-pages-item">
                <div className="black-card-content-pages-content-wrapper">
                  <div className="black-card-content-pages-count">
                    <p>3</p>
                  </div>
                  <h3 className="black-card-content-pages-title">
                    {t("Loyalty.getReward.text")}
                  </h3>
                  <p>{t("Loyalty.getRewardPara.text")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Black cards End--> */}
      {/* <!--Loyality Benefits Section Start--> */}
      <div className="loyality-benefits-section">
        <div className="container">
          <h2 className="block-title">{t("Loyalty.endlessBenefits.text")}</h2>
          <p className="block-excerpt text-center">
            {t("Loyalty.endlessBenefitsPara.text")}
          </p>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="item-wrapper">
                <div className="item-thumbnail">
                  <i className="icon icon-education"></i>
                </div>
                <h3 className="item-title">{t("Loyalty.uniqueReward.text")}</h3>
                <p className="item-text">
                  {t("Loyalty.uniqueRewardPara.text")}
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="item-wrapper">
                <div className="item-thumbnail">
                  <i className="icon icon-loyality-card"></i>
                </div>
                <h3 className="item-title">{t("Loyalty.preloadCard.text")}</h3>
                <p className="item-text">{t("Loyalty.preloadCardPara.text")}</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="item-wrapper">
                <div className="item-thumbnail">
                  <i className="icon icon-loyality-win"></i>
                </div>
                <h3 className="item-title">{t("Loyalty.shareWin.text")}</h3>
                <p className="item-text">{t("Loyalty.shareWinPara.text")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Loyality Benefits Section End--> */}
      {/* <!--Media Section Start--> */}
      <div className="media-section">
        <div className="redeeme-option-wrapper">
          <div className="container">
            <div className="redeeme-option-block">
              <h2 className="block-title">{t("Loyalty.redeemFav.text")}</h2>

              <div className="block-list-wrapper nav nav-tabs" role="tablist">
                <ul className="block-list">
                  {loyalityRedeem
                    ? Object.keys(loyalityRedeem[0]).map((data, id) => {
                        return (
                          <li
                            className={
                              active === id ? "nav-item active" : "nav-item"
                            }
                            onClick={() => {
                              tabSwitch(id);
                            }}
                          >
                            <span>
                              {t(`Loyalty.loyalityRedeem` + `.${data}.name`)}
                            </span>
                            <i className="icon icon-star"></i>
                          </li>
                        );
                      })
                    : false}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="loyality-media-item-wrapper d-flex justify-content-center align-items-center flex-column tab-content">
            {loyalityRedeem
              ? Object.values(loyalityRedeem[0]).map((data) => {
                  return (
                    <div
                      className={
                        active === data?.id
                          ? "d-flex fade show loyality-media-item tab-pane"
                          : "loyality-media-item tab-pane"
                      }
                    >
                      <div className="flex-shrink-0 media-thumbnail">
                        <i className={data?.icon}></i>
                      </div>
                      <div className="flex-grow-1 media-content">
                        <h2 className="media-title text-uppercase">
                          {t(`Loyalty.loyalityRedeem` + `.${data.name}.title`)}
                        </h2>
                        <p>
                          {t(
                            `Loyalty.loyalityRedeem` +
                              `.${data.name}.description`
                          )}
                        </p>
                      </div>
                    </div>
                  );
                })
              : false}
          </div>

          <div className="copy-right-info">
            <p>
              {t("Loyalty.checkThe.text")}{" "}
              <Link to="/soins-karisma/terms-and-conditions">
                {t("Loyalty.termsCondition.text")}
              </Link>{" "}
              {t("Loyalty.loyaltyProgram.text")}
            </p>
          </div>
        </div>
      </div>
      {/* <!--Media Section End--> */}
    </main>
  );
};

export default Loyalty;
