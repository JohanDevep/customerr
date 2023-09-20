import React from "react";
import diary_5_img from "../../../public/assets/images/diary/diary-5.png";
import { useTranslation } from "react-i18next";

const Salons = () => {
  const [t] = useTranslation("common");
  return (
    <main>
      {/* <!--Blog Detail Page Banner Start--> */}
      <div className="diary-item">
        <div className="diary-item-wrapper lg">
          <div className="diary-item-banner">
            <img src={diary_5_img} alt="Event Thumbnail" />
          </div>
          <div className="diary-item-content-wrapper container">
            <div className="diary-item-content">
              <ul className="list-badges">
                <li>
                  <span className="badge-dark badge-lg">
                    {t("SalonBlog.salon.text")}
                  </span>
                </li>
              </ul>
              <h3 className="diary-item-title lg">
                {t("SalonBlog.ourSalon.text")}
              </h3>
              <div className="diary-item-text-content lg">
                <p>{t("SalonBlog.ourSalonPara1.text")}</p>
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
              <p>{t("SalonBlog.ourSalonPara2.text")}</p>
              <p>{t("SalonBlog.ourSalonPara3.text")}</p>
              <p>{t("SalonBlog.ourSalonPara4.text")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Diary Section End--> */}
    </main>
  );
};

export default Salons;
