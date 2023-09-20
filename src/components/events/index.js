import React from "react";
import events_img from "../../../public/assets/images/banner/events.png";
import events_mobile_img from "../../../public/assets/images/banner/events-mobile.png";
import diary_1 from "../../../public/assets/images/diary/diary-1.png";
import { useTranslation } from "react-i18next";

const Events = () => {
  const [t] = useTranslation("common");
  return (
    <main>
      {/* <!--Page Banner Start--> */}
      <section className="page-banner social-impact-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">{t("Events.events.text")}</h1>
            <h2 className="page-banner-excerpt">
              {t("Events.exploreWithUs.text")}
            </h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <picture>
              <source media="(min-width: 768px)" srcset={events_img} />
              <img src={events_mobile_img} alt="Events Banner" />
            </picture>
          </div>
        </div>
        <div className="page-banner-strip">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("Events.highQuality.text")}</li>
              <li>{t("Events.unlimitBeautyServ.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Page Banner End--> */}
      {/* <!--White Section Start--> */}
      <section className="section-white">
        <div className="container">
          <div className="section-white-wrapper">
            <h2 className="section-white-title">{t("Events.event&More.text")}</h2>
            <div className="section-white-content hr-top section-white-content-sm">
              <p>{t("Events.event&MorePara.text")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--White Section End--> */}
      <div className="page-banner-strip scrollable block-vh">
        <div className="container">
          <ul className="page-banner-strip-list">
            <li className="active">
              <span role="button">{t("Events.all.text")}</span>
            </li>
            <li>
              <span role="button">{t("Events.lorem.text")}</span>
            </li>
            <li>
              <span role="button">{t("Events.lorem.text")}</span>
            </li>
            <li>
              <span role="button">{t("Events.lorem.text")}</span>
            </li>
            <li>
              <span role="button">{t("Events.lorem.text")}</span>
            </li>
          </ul>
        </div>
      </div>
      {/* <!--Diary Section Start--> */}
      <section className="diary-section section-content-bordered-bg">
        <h2 className="visually-hidden">Events</h2>
        <div className="container">
          <div className="section-content-bordered diary-wrapper">
            <div className="diary-items-grid">
              <div className="diary-item">
                <div className="diary-item-wrapper">
                  <div className="diary-item-banner">
                    <img
                      src={diary_1}
                      alt="Event Thumbnail"
                      width="1367"
                      height="932"
                    />
                  </div>
                  <div className="diary-item-content-wrapper">
                    <div className="diary-item-content">
                      <ul className="list-badges">
                        <li>
                          <span className="badge-dark">
                            {t("Events.beauty.text")}
                          </span>
                        </li>
                        <li>
                          <span className="badge-dark">
                            {t("Events.hairCare.text")}
                          </span>
                        </li>
                      </ul>
                      <h3 className="diary-item-title">
                        {t("Events.loremIpsum.text")}
                      </h3>
                      <ul className="diary-item-detail-list">
                        <li>
                          <i className="icon icon-calendar"></i>
                          <span>{t("Events.date.text")}</span>
                        </li>
                        <li>
                          <i className="icon icon-clock-o"></i>
                          <span>{t("Events.time.text")}</span>
                        </li>
                        <li>
                          <i className="icon icon-location"></i>
                          <span>{t("Events.location.text")}</span>
                        </li>
                      </ul>
                      <div className="diary-item-text-content">
                        <p>{t("Events.singleBlogPara.text")}</p>
                      </div>
                    </div>
                    <div className="diary-item-cta">
                      <button className="btn-white outline">
                        {t("Events.learnMore.value")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="diary-wrapper-footer">
              <button className="btn-dark outline-transparent">
                {t("Events.loadMore.value")}
              </button>
            </div>
            <h3 className="section-title-start">{t("Events.events.text")}</h3>
            <h3 className="section-title-end">{t("Events.events.text")}</h3>
          </div>
        </div>
      </section>
      {/* <!--Diary Section End--> */}
    </main>
  );
};

export default Events;
