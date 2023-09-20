import React from "react";
import diary_3_img from "../../../public/assets/images/diary/diary-3.png";
import detail_3_1_img from "../../../public/assets/images/diary/3-detail-1.png";
import detail_3_2_img from "../../../public/assets/images/diary/3-detail-2.png";
import detail_3_3_img from "../../../public/assets/images/diary/3-detail-3.png";
import detail_3_4_img from "../../../public/assets/images/diary/3-detail-4.png";
import { useTranslation } from "react-i18next";

const Eyebrows_Aesthetics = () => {
  const [t] = useTranslation("common");
  return (
    <main>
      {/* <!--Blog Detail Page Banner Start--> */}
      <div className="diary-item">
        <div className="diary-item-wrapper lg">
          <div className="diary-item-banner">
            <img src={diary_3_img} alt="Event Thumbnail" />
          </div>
          <div className="diary-item-content-wrapper container">
            <div className="diary-item-content">
              <ul className="list-badges">
                <li>
                  <span className="badge-dark badge-lg">
                    {t("Eyebrows_AestheticBlog.eyebrows.text")}
                  </span>
                </li>
                <li>
                  <span className="badge-dark badge-lg">
                    {t("Eyebrows_AestheticBlog.aesthetic.text")}
                  </span>
                </li>
              </ul>
              <h3 className="diary-item-title lg">
                {t("Eyebrows_AestheticBlog.eyebrowHeading.text")}
              </h3>
              <div className="diary-item-text-content lg">
                <p>{t("Eyebrows_AestheticBlog.eyebrowPara1.text")}</p>
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
              <p>{t("Eyebrows_AestheticBlog.eyebrowPara2.text")}</p>
              <h3>{t("Eyebrows_AestheticBlog.microblading.text")}</h3>
              <div className="grid-container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="diary-detail-banner">
                      <img src={detail_3_1_img} alt="Diary Detail Banner" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="diary-detail-banner">
                      <img src={detail_3_2_img} alt="Diary Detail Banner" />
                    </div>
                  </div>
                </div>
              </div>
              <h3>{t("Eyebrows_AestheticBlog.whatMicroblading.text")}</h3>
              <p>{t("Eyebrows_AestheticBlog.whatMicrobladingPara.text")}</p>
              <h3>{t("Eyebrows_AestheticBlog.pros.text")}</h3>
              <ul>
                <li>{t("Eyebrows_AestheticBlog.prosItem1.text")}</li>
                <li>{t("Eyebrows_AestheticBlog.prosItem2.text")}</li>
                <li>{t("Eyebrows_AestheticBlog.prosItem3.text")}</li>
              </ul>
              <h3>{t("Eyebrows_AestheticBlog.cons.text")}</h3>
              <ul>
                <li>{t("Eyebrows_AestheticBlog.consItem.text")}</li>
              </ul>
              <h3>Microshading</h3>
              <div className="grid-container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="diary-detail-banner">
                      <img src={detail_3_3_img} alt="Diary Detail Banner" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="diary-detail-banner">
                      <img src={detail_3_4_img} alt="Diary Detail Banner" />
                    </div>
                  </div>
                </div>
              </div>
              <h3>{t("Eyebrows_AestheticBlog.whatMicroshading.text")}</h3>
              <p>{t("Eyebrows_AestheticBlog.whatMicroshadingPara.text")}</p>
              <h3>{t("Eyebrows_AestheticBlog.pros.text")}</h3>
              <ul>
                <li>{t("Eyebrows_AestheticBlog.prositem1.text")}</li>
                <li>{t("Eyebrows_AestheticBlog.prositem2.text")}</li>
                <li>{t("Eyebrows_AestheticBlog.prositem3.text")}</li>
              </ul>
              <h3>{t("Eyebrows_AestheticBlog.cons.text")}</h3>
              <ul>
                <li>{t("Eyebrows_AestheticBlog.consItems.text")}</li>
              </ul>
              <h3>{t("Eyebrows_AestheticBlog.bladingShading.text")}</h3>
              <p>{t("Eyebrows_AestheticBlog.bladingShadingPara.text")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Diary Section End--> */}
    </main>
  );
};

export default Eyebrows_Aesthetics;
