import React from "react";
import { Link } from "react-router-dom";
import news_img from "../../../../public/assets/images/banner/news.png";
import diary_4_img from "../../../../public/assets/images/diary/diary-4.png";
import diary_5_img from "../../../../public/assets/images/diary/diary-5.png";
import { useTranslation } from "react-i18next";

const News = () => {
  const [t] = useTranslation("common");
  return (
    <main>
      {/* <!--Page Banner Start--> */}
      <section className="page-banner affiliate-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">{t("News.news.text")}</h1>
            <h2 className="page-banner-excerpt">{t("News.newsMore.text")}</h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            {/* For mobile view Start*/}
            <picture>
              <source media="(min-width: 768px)" srcset={news_img} />
              <img src={news_img} alt="Karisma Salons Banner" />
            </picture>
            {/* For mobile view End*/}
          </div>
        </div>
        <div className="page-banner-strip">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("News.highQuality.text")}</li>
              <li>{t("News.unlimitBeautyServ.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Page Banner End--> */}
      {/* <!--White Section Start--> */}
      <section className="section-white section-white-page-diary">
        <div className="container">
          <div className="section-white-wrapper">
            <h2 className="section-white-title">{t("News.updateMore.text")}</h2>
            <div className="section-white-content hr-top section-white-content-sm">
              <p>{t("News.updateMorePara.text")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--White Section End--> */}
      {/* <!--Tabs Strip Start--> */}
      <div className="page-banner-strip scrollable block-vh">
        <div className="container">
          <ul className="page-banner-strip-list">
            <li className="active">
              <span role="button">{t("News.all.text")}</span>
            </li>
            <li>
              <span role="button">{t("News.hair.text")}</span>
            </li>
            <li>
              <span role="button">{t("News.beauty.text")}</span>
            </li>
            <li>
              <span role="button">{t("News.hairCare.text")}</span>
            </li>
            <li>
              <span role="button">{t("News.selfCare.text")}</span>
            </li>
          </ul>
        </div>
      </div>
      {/* <!--Tabs Strip End--> */}
      {/* <!--Diary Section Start--> */}
      <section className="diary-section section-content-bordered-bg">
        <h2 className="visually-hidden">News</h2>
        <div className="container">
          <div className="section-content-bordered diary-wrapper">
            <div className="diary-items-grid">
              {/* <!--Repeat .diary-item--> */}
              <div className="diary-item">
                <div className="diary-item-wrapper">
                  <div className="diary-item-banner">
                    <img
                      src={diary_4_img}
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
                            {t("News.soinsKarisma.text")}
                          </span>
                        </li>
                      </ul>
                      <h3 className="diary-item-title">
                        {t("News.soinsKarismaHeading.text")}
                      </h3>
                      <div className="diary-item-text-content">
                        <p>{t("News.soinsKarismaPara.text")}</p>
                      </div>
                    </div>
                    <div className="diary-item-cta">
                      <button
                        className="btn-white outline"
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        {t("News.readMore.value")}
                        <Link to="/blog/soins-karisma"></Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="diary-items-grid mt-5">
              {/* <!--Repeat .diary-item--> */}
              <div className="diary-item">
                <div className="diary-item-wrapper">
                  <div className="diary-item-banner">
                    <img
                      src={diary_5_img}
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
                            {t("News.salons.text")}
                          </span>
                        </li>
                      </ul>
                      <h3 className="diary-item-title">
                        {t("News.salonsHeading.text")}
                      </h3>
                      <div className="diary-item-text-content">
                        <p>{t("News.salonsPara.text")}</p>
                      </div>
                    </div>
                    <div className="diary-item-cta">
                      <button
                        className="btn-white outline"
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        {t("News.readMore.value")}
                        <Link to="/blog/salons"></Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="diary-wrapper-footer">
              <button className="btn-dark outline-transparent">
                {t("News.loadMore.value")}
              </button>
            </div>
            <h3 className="section-title-start">{t("News.news.text")}</h3>
            <h3 className="section-title-end">{t("News.news.text")}</h3>
          </div>
        </div>
      </section>
      {/* <!--Diary Section End--> */}
    </main>
  );
};

export default News;
