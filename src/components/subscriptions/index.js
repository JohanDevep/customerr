import React from "react";
import subscription_img from "../../../public/assets/images/banner/subscriptions.png";
import subscription_mobile_img from "../../../public/assets/images/banner/subscriptions-mobile.png";
import masonry_1 from "../../../public/assets/images/gallery/masonry/masonry-1.png";
import masonry_2 from "../../../public/assets/images/gallery/masonry/masonry-2.png";
import masonry_3 from "../../../public/assets/images/gallery/masonry/masonry-3.png";
import masonry_4 from "../../../public/assets/images/gallery/masonry/masonry-4.png";
import masonry_5 from "../../../public/assets/images/gallery/masonry/masonry-5.png";
import masonry_6 from "../../../public/assets/images/gallery/masonry/masonry-6.png";
import masonry_7 from "../../../public/assets/images/gallery/masonry/masonry-7.png";
import masonry_8 from "../../../public/assets/images/gallery/masonry/masonry-8.png";
import masonry_9 from "../../../public/assets/images/gallery/masonry/masonry-9.png";
import masonry_10 from "../../../public/assets/images/gallery/masonry/masonry-10.png";
import masonry_11 from "../../../public/assets/images/gallery/masonry/masonry-11.png";
import masonry_12 from "../../../public/assets/images/gallery/masonry/masonry-12.png";
import masonry_13 from "../../../public/assets/images/gallery/masonry/masonry-13.png";
import masonry_14 from "../../../public/assets/images/gallery/masonry/masonry-14.png";
import masonry_15 from "../../../public/assets/images/gallery/masonry/masonry-15.png";
import masonry_16 from "../../../public/assets/images/gallery/masonry/masonry-16.png";
import { useTranslation } from "react-i18next";
import SubscriptionList from "./SubscriptionList";

const Subscriptions = () => {
  const [t] = useTranslation("common");
  return (
    <main>
      {/* <!--Page Banner Start--> */}
      <section className="page-banner subscriptions-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">
              {t("Subscription.mainBannerHeader.text")}
            </h1>
            <h2 className="page-banner-excerpt">
              {t("Subscription.subsInspired.text")}
            </h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <picture>
              <source media="(min-width: 768px)" srcset={subscription_img} />
              <img src={subscription_mobile_img} alt="Subscriptions Banner" />
            </picture>
          </div>
        </div>
        <div className="page-banner-strip">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("Subscription.highQuality.text")}</li>
              <li>{t("Subscription.unlimitBeauty.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Page Banner End--> */}
      {/* <!--White Section Start--> */}
      <section className="section-white section-white-price-plan">
        <div className="container">
          <div className="section-white-wrapper section-white-price-plan-wrapper">
            <h2 className="section-white-title">
              <small>{t("Subscription.about.text")}</small>
              <span>{t("Subscription.soinsKarisma.text")}</span>
            </h2>
            <div className="section-white-content hr-bottom section-white-content-xl">
              <p>{t("Subscription.soinsKarismaPara.text")}</p>
            </div>
            <div className="section-white-footer">
              <h3 className="section-white-footer-title">
                {t("Subscription.inspiredByYou.text")}
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* <!--White Section End--> */}
      {/* <!--Price Plans Section Start--> */}
      <SubscriptionList />
      {/* <!--Price Plans Section End--> */}
      {/* <!--Masonry Gallery Start--> */}
      <section className="masonry-section section-content-bordered-bg">
        <h2 className="visually-hidden">OUR SUBSCRIPTIONS</h2>
        <div className="container">
          <div className="section-content-bordered masonry-wrapper">
            <div className="masonry-grid">
              {/* <!--Add max 8 .masonry-grid-items in 1 masonry-grid-box--> */}
              {/* <!--For more items create new masonry grid box and add max 8 masonry items in it--> */}
              <div className="masonry-grid-box">
                <div className="masonry-grid-item">
                  <img src={masonry_1} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_2} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_3} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_4} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_5} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_6} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_7} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_8} alt="Masonry Item" />
                </div>
              </div>
              <div className="masonry-grid-box">
                <div className="masonry-grid-item">
                  <img src={masonry_9} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_10} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_11} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_12} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_13} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_14} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_15} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_16} alt="Masonry Item" />
                </div>
              </div>
            </div>
            <h3 className="section-title-start">
              {t("Subscription.ourSubs.text")}
            </h3>
            <h3 className="section-title-end">
              {t("Subscription.ourSubs.text")}
            </h3>
          </div>
        </div>
      </section>
      {/* <!--Masonry Gallery End--> */}
    </main>
  );
};

export default Subscriptions;
