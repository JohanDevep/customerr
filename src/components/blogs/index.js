import React from "react";
import { Link } from "react-router-dom";
import diary_img from "../../../public/assets/images/diary/diary-1.png";
import diary_2_img from "../../../public/assets/images/diary/diary-2.png";
import diary_3_img from "../../../public/assets/images/diary/diary-3.png";
import blog_img from "../../../public/assets/images/banner/blogs.png";
import blog_mobile_img from "../../../public/assets/images/banner/blogs-mobile.png";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const [t] = useTranslation("common");
  return (
    <main>
      {/* Page Banner Start */}
      <section className="page-banner social-impact-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">{t("Blog.blogs.text")}</h1>
            <h2 className="page-banner-excerpt">
              {t("Blog.newsArticles.text")}
            </h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            {/* For mobile view */}
            <picture>
              <source media="(min-width: 768px)" srcset={blog_img} />
              <img src={blog_mobile_img} alt="Blogs Banner" />
            </picture>
            {/* For Mobile View End */}
            {/* <img loading="lazy" src={blog_img} alt="Privacy Policy Banner" draggable={false} width="1643" height="860"/> */}
          </div>
        </div>
        <div className="page-banner-strip">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("Blog.highQuality.text")}</li>
              <li>{t("Blog.unlimitBeautyServ.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Page Banner End--> */}
      {/* <!--White Section Start--> */}
      <section className="section-white section-white-page-diary">
        <div className="container">
          <div className="section-white-wrapper">
            <h2 className="section-white-title">{t("Blog.update&More.text")}</h2>
            <div className="section-white-content hr-top section-white-content-sm">
              <p>{t("Blog.update&MorePara.text")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--White Section End--> */}
      <div className="page-banner-strip scrollable block-vh">
        <div className="container">
          <ul className="page-banner-strip-list">
            <li className="active">
              <span role="button">{t("Blog.all.text")}</span>
            </li>
            <li>
              <span role="button">{t("Blog.hair.text")}</span>
            </li>
            <li>
              <span role="button">{t("Blog.beauty.text")}</span>
            </li>
            <li>
              <span role="button">{t("Blog.hairCare.text")}</span>
            </li>
            <li>
              <span role="button">{t("Blog.selfCare.text")}</span>
            </li>
          </ul>
        </div>
      </div>
      {/* <!--Diary Section Start--> */}
      <section className="diary-section section-content-bordered-bg">
        <h2 className="visually-hidden">Blogs</h2>
        <div className="container">
          <div className="section-content-bordered diary-wrapper">
            <div className="diary-items-grid">
              <div className="diary-item">
                <div className="diary-item-wrapper">
                  <div className="diary-item-banner">
                    <img
                      src={diary_img}
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
                            {t("Blog.hair.text")}
                          </span>
                        </li>
                      </ul>
                      <h3 className="diary-item-title">
                        {t("Blog.hairBlogHeading.text")}
                      </h3>
                      <div className="diary-item-text-content">
                        <p>{t("Blog.hairBlogHeadingPara.text")}</p>
                      </div>
                    </div>
                    <div className="diary-item-cta">
                      <button
                        className="btn-white outline"
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        {t("Blog.readMore.value")}
                        <Link to="/blog/hair"></Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="diary-items-grid mt-5">
              <div className="diary-item">
                <div className="diary-item-wrapper">
                  <div className="diary-item-banner">
                    <img
                      src={diary_2_img}
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
                            {t("Blog.nails.text")}
                          </span>
                        </li>
                      </ul>
                      <h3 className="diary-item-title">
                        {t("Blog.nailsBlogHeading.text")}
                      </h3>
                      <div className="diary-item-text-content">
                        <p>{t("Blog.nailsBlogHeadingPara.text")}</p>
                      </div>
                    </div>
                    <div className="diary-item-cta">
                      <button
                        className="btn-white outline"
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        {t("Blog.readMore.value")}
                        <Link to="/blog/nail"></Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="diary-items-grid mt-5">
              <div className="diary-item">
                <div className="diary-item-wrapper">
                  <div className="diary-item-banner">
                    <img
                      src={diary_3_img}
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
                            {t("Blog.eyebrows.text")}
                          </span>
                        </li>
                        <li>
                          <span className="badge-dark">
                            {t("Blog.aesthetics.text")}
                          </span>
                        </li>
                      </ul>
                      <h3 className="diary-item-title">
                        {t("Blog.eyebrowsBlogHeading.text")}
                      </h3>
                      <div className="diary-item-text-content">
                        <p>{t("Blog.eyebrowsBlogHeadingPara.text")}</p>
                      </div>
                    </div>
                    <div className="diary-item-cta">
                      <button
                        className="btn-white outline"
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        {t("Blog.readMore.value")}
                        <Link to="/blog/eyebrows-aesthetics"></Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="diary-wrapper-footer">
              <button className="btn-dark outline-transparent">
                {t("Blog.loadMore.value")}
              </button>
            </div>
            <h3 className="section-title-start">{t("Blog.blogs.text")}</h3>
            <h3 className="section-title-end">{t("Blog.blogs.text")}</h3>
          </div>
        </div>
      </section>
      {/* <!--Diary Section End--> */}
    </main>
  );
};

export default Blog;
