import React from "react";
import Supplier_Network_img from "../../../../public/assets/images/banner/supplier-network.png";
import distributer_map_img from "../../../../public/assets/images/distributors-map.png";
import { useTranslation } from "react-i18next";

const Supplier_Network = () => {
  const [t] = useTranslation("common");
  return (
    <main>
      {/* <!--Page Banner Start--> */}
      <section className="page-banner supplier-distribution bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">
              {t("SupplierNetwork.supplyNetwork.text")}
            </h1>
            <h2 className="page-banner-excerpt">
              {t("SupplierNetwork.efficientDistribute.text")}
            </h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <picture>
              <source
                media="(min-width: 768px)"
                srcset={Supplier_Network_img}
              />
              <img src={Supplier_Network_img} alt="Karisma Salons Banner" />
            </picture>
          </div>
        </div>
        <div className="page-banner-strip">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("SupplierNetwork.highQuality.text")}</li>
              <li>{t("SupplierNetwork.unlimitBeautyServ.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Page Banner End--> */}
      {/* <!--White Section Start--> */}
      <section className="section-white section-white-distribution">
        <div className="container">
          <div className="section-white-wrapper">
            <h2 className="section-white-title">
              {t("SupplierNetwork.ourSupply.text")}
            </h2>
            <div className="section-white-content hr-top section-white-content-sm">
              <p>{t("SupplierNetwork.ourSupplyPara.text")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--White Section End--> */}
      {/* <!--Black cards attached to White Section Start--> */}
      <section className="black-card-section black-card-content-pages black-card-distribution black-card-karisma-salons">
        <div className="black-card-wrapper">
          <div className="container">
            <h2 className="visually-hidden">Affiliate Cards</h2>
            <div className="black-card-grid">
              <div className="black-card-item black-card-content-pages-item">
                <div className="black-card-content-pages-content-wrapper">
                  <div className="black-card-content-pages-icon">
                    <i className="icon icon-warning"></i>
                  </div>
                  <h3 className="black-card-content-pages-title">
                    {t("SupplierNetwork.alliances.text")}
                  </h3>
                  <p>{t("SupplierNetwork.alliancesPara.text")}</p>
                </div>
              </div>
              <div className="black-card-item black-card-content-pages-item">
                <div className="black-card-content-pages-content-wrapper">
                  <div className="black-card-content-pages-icon">
                    <i className="icon icon-security"></i>
                  </div>
                  <h3 className="black-card-content-pages-title">
                    {t("SupplierNetwork.portfolio.text")}
                  </h3>
                  <p>{t("SupplierNetwork.portfolioPara.text")}</p>
                </div>
              </div>
              <div className="black-card-item black-card-content-pages-item">
                <div className="black-card-content-pages-content-wrapper">
                  <div className="black-card-content-pages-icon">
                    <i className="icon icon-cart"></i>
                  </div>
                  <h3 className="black-card-content-pages-title">
                    {t("SupplierNetwork.strategy.text")}
                  </h3>
                  <p>{t("SupplierNetwork.strategyPara.text")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Black cards attached to White Section End--> */}
      {/* <!--Inscription Form Section Start--> */}
      <section className="inscription-form-section section-content-bordered-bg">
        <h2 className="visually-hidden">Distribution</h2>
        <div className="container">
          <div className="section-content-bordered">
            <div className="content-pages-product-box padding-t-lg padding-b-lg">
              <div className="content-pages-product-thumbnail">
                <img src={distributer_map_img} alt="Distributors Thumbnail" />
              </div>
              <h3 className="content-pages-product-title">
                {t("SupplierNetwork.contactUs.text")}
              </h3>
              <p>{t("SupplierNetwork.contactUsPara.text")}</p>
            </div>
            <h3 className="section-title-start">
              {t("SupplierNetwork.distribution.text")}
            </h3>
            <h3 className="section-title-end">
              {t("SupplierNetwork.distribution.text")}
            </h3>
          </div>
        </div>
      </section>
      {/* <!--Inscription Form Section End--> */}
    </main>
  );
};

export default Supplier_Network;
