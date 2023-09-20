import React from "react";
import diary_1_img from "../../../public/assets/images/diary/diary-1.png";
import one_detail_1_img from "../../../public/assets/images/diary/1-detail-1.png";
import one_detail_2_img from "../../../public/assets/images/diary/1-detail-2.png";
import { useTranslation } from "react-i18next";

const Hair_Blog = () => {
  const [t] = useTranslation("common");
  return (
    <main>
      {/* <!--Blog Detail Page Banner Start--> */}
      <div className="diary-item">
        <div className="diary-item-wrapper lg">
          <div className="diary-item-banner">
            <img src={diary_1_img} alt="Event Thumbnail" />
          </div>
          <div className="diary-item-content-wrapper container">
            <div className="diary-item-content">
              <ul className="list-badges">
                <li>
                  <span className="badge-dark badge-lg">
                    {t("HairBlog.hair.text")}
                  </span>
                </li>
              </ul>
              <h3 className="diary-item-title lg">
                {t("HairBlog.hairHeading.text")}
              </h3>
              <div className="diary-item-text-content lg">
                <p>{t("HairBlog.hairPara.text")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Blog Detail Page Banner End--> */}
      {/* <!--Diary Section Start--> */}
      <section className="diary-detail-section section-content-bordered-bg">
        <h2 className="visually-hidden">Single Blog Detail</h2>
        <div className="container">
          <div className="section-content-bordered diary-detail-wrapper">
            <div className="diary-detail-grid">
              <h3>{t("HairBlog.whatKeratin.text")}</h3>
              <p>{t("HairBlog.whatKeratinPara1.text")}</p>
              <p>{t("HairBlog.whatKeratinPara2.text")}</p>
              <div className="grid-container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="diary-detail-banner">
                      <img src={one_detail_1_img} alt="Diary Detail Banner" />
                    </div>
                  </div>
                </div>
              </div>
              <h3>{t("HairBlog.do.text")}</h3>
              <h4>{t("HairBlog.doHeading1.text")}</h4>
              <p>{t("HairBlog.doPara1.text")}</p>
              <h4>{t("HairBlog.doHeading2.text")}</h4>
              <p>{t("HairBlog.doPara2.text")}</p>
              <h4>{t("HairBlog.doHeading3.text")}</h4>
              <p>{t("HairBlog.doPara3.text")}</p>
              <h4>{t("HairBlog.doHeading4.text")}</h4>
              <p>{t("HairBlog.doPara4.text")}</p>
              <h4>{t("HairBlog.doHeading5.text")}</h4>
              <p>{t("HairBlog.doPara5.text")}</p>
              <div className="grid-container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="diary-detail-banner">
                      <img src={one_detail_2_img} alt="Diary Detail Banner" />
                    </div>
                  </div>
                </div>
              </div>
              <h3>{t("HairBlog.dont.text")}</h3>
              <ol>
                <li>{t("HairBlog.dontItem1.text")}</li>
                <li>{t("HairBlog.dontItem2.text")}</li>
                <li>{t("HairBlog.dontItem3.text")}</li>
                <li>{t("HairBlog.dontItem4.text")}</li>
              </ol>
              <h3>{t("HairBlog.dontHeading.text")}</h3>
              <p>{t("HairBlog.dontPara1.text")}</p>
              <p>{t("HairBlog.dontPara2.text")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Diary Section End--> */}
    </main>
  );
};

export default Hair_Blog;
