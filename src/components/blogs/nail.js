import React from "react";
import diray_2_img from "../../../public/assets/images/diary/diary-2.png";
import detail_1_img from "../../../public/assets/images/diary/2-detail-1.png";
import detail_2_img from "../../../public/assets/images/diary/2-detail-2.png";
import { useTranslation } from "react-i18next";

const Nail_Blog = () => {
  const [t] = useTranslation("common");
  return (
    <main>
      {/* <!--Blog Detail Page Banner Start--> */}
      <div className="diary-item">
        <div className="diary-item-wrapper lg">
          <div className="diary-item-banner">
            <img src={diray_2_img} alt="Event Thumbnail" />
          </div>
          <div className="diary-item-content-wrapper container">
            <div className="diary-item-content">
              <ul className="list-badges">
                <li>
                  <span className="badge-dark badge-lg">
                    {t("NailBlog.nail.text")}
                  </span>
                </li>
              </ul>
              <h3 className="diary-item-title lg">
                {t("NailBlog.nailHeading.text")}
              </h3>
              <div className="diary-item-text-content lg">
                <p>{t("NailBlog.nailHeadingPara1.text")}</p>
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
              <p>{t("NailBlog.nailHeadingPara2.text")}</p>
              <p>{t("NailBlog.nailHeadingPara3.text")}</p>
              <div className="grid-container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="diary-detail-banner">
                      <img src={detail_1_img} alt="Diary Detail Banner" />
                    </div>
                  </div>
                </div>
              </div>
              <h3>{t("NailBlog.heading1.text")}</h3>
              <p>{t("NailBlog.para1.text")}</p>
              <h3>{t("NailBlog.heading2.text")}</h3>
              <p>{t("NailBlog.para2.text")}</p>
              <h3>{t("NailBlog.heading3.text")}</h3>
              <p>{t("NailBlog.para3.text")}</p>
              <h3>{t("NailBlog.heading4.text")}</h3>
              <p>{t("NailBlog.para4.text")}</p>
              <h3>{t("NailBlog.heading5.text")}</h3>
              <p>{t("NailBlog.para5.text")}</p>
              <h3>{t("NailBlog.heading6.text")}</h3>
              <p>{t("NailBlog.para6.text")}</p>
              <p>{t("NailBlog.para7.text")}</p>
              <div className="grid-container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="diary-detail-banner">
                      <img src={detail_2_img} alt="Diary Detail Banner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Diary Section End--> */}
    </main>
  );
};

export default Nail_Blog;
