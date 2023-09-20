import React from "react";
import invester_relation_img from "../../../../public/assets/images/banner/investors-relations.png";
import { useTranslation } from "react-i18next";

const Invester_Relation = () => {
  const [t] = useTranslation("common");
  return (
    <main>
      {/* <!--Page Banner Start--> */}
      <section className="page-banner ir-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title sm">
              {t("InvestorRelation.investRelation.text")}
            </h1>
            <h2 className="page-banner-excerpt">
              {t("InvestorRelation.redefineBeauty.text")}
            </h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <picture>
              <source
                media="(min-width: 768px)"
                srcset={invester_relation_img}
              />
              <img
                src={invester_relation_img}
                alt="Investors Relations Banner"
              />
            </picture>
          </div>
        </div>
        <div className="page-banner-strip">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("InvestorRelation.highQuality.text")}</li>
              <li>{t("InvestorRelation.unlimitBeautyServ.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Page Banner End--> */}
      {/* <!--White Section Start--> */}
      <section className="section-white section-white-ir">
        <div className="container">
          <div className="section-white-wrapper">
            <h2 className="section-white-title">
              {t("InvestorRelation.ourMission.text")}
            </h2>
            <div className="section-white-content hr-top section-white-content-sm">
              <p>{t("InvestorRelation.ourMissionPara1.text")}</p>
              <p style={{ color: "#a27a69" }}>
                {t("InvestorRelation.ourMissionPara2.text")}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--White Section End--> */}
      {/* <!--Black cards Start--> */}
      <section className="black-card-section black-card-content-pages black-card-ir black-card-karisma-salons">
        <div className="black-card-wrapper">
          <div className="container">
            <h2 className="visually-hidden">Investors Relations Cards</h2>
            <div className="black-card-grid">
              <div className="black-card-item black-card-content-pages-item">
                <div className="black-card-content-pages-content-wrapper">
                  <h3 className="black-card-content-pages-title">
                    {t("InvestorRelation.diversityInclusion.text")}
                  </h3>
                  <p>{t("InvestorRelation.diversityInclusionPara.text")}</p>
                </div>
              </div>
              <div className="black-card-item black-card-content-pages-item">
                <div className="black-card-content-pages-content-wrapper">
                  <h3 className="black-card-content-pages-title">
                    {t("InvestorRelation.accessibility.text")}
                  </h3>
                  <p>{t("InvestorRelation.accessibilityPara.text")}</p>
                </div>
              </div>
              <div className="black-card-item black-card-content-pages-item">
                <div className="black-card-content-pages-content-wrapper">
                  <h3 className="black-card-content-pages-title">
                    {t("InvestorRelation.privacy.text")}
                  </h3>
                  <p>{t("InvestorRelation.privacyPara.text")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Black cards End--> */}
      {/* <!--Latest Updates Section Start--> */}
      <section className="latest-updates-section section-content-bordered-bg">
        <div className="container">
          <div className="latest-updates-wrapper">
            <h2 className="section-title">
              {t("InvestorRelation.latestNews.text")}
            </h2>
            <div className="update-grid">
              <div className="update-item">
                <p className="date">{t("InvestorRelation.date1.text")}</p>
                <h3 className="title">
                  {t("InvestorRelation.soinsKarisma1.text")}
                </h3>
                <a href="#" className="link-more">
                  {t("InvestorRelation.readMore.value")}
                </a>
              </div>
              <div className="update-item">
                <p className="date">{t("InvestorRelation.date2.text")}</p>
                <h3 className="title">
                  {t("InvestorRelation.soinsKarisma2.text")}
                </h3>
                <a href="#" className="link-more">
                  {t("InvestorRelation.readMore.value")}
                </a>
              </div>
              <div className="update-item">
                <p className="date">{t("InvestorRelation.date3.text")}</p>
                <h3 className="title">
                  {t("InvestorRelation.readMore.value")}
                </h3>
                <a href="#" className="link-more">
                  {t("InvestorRelation.soinsKarisma3.text")}
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-dark outline-transparent">
                {t("InvestorRelation.viewAll.value")}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Latest Updates Section End--> */}
      {/* <!--Latest Updates Section Start--> */}
      <section className="financials-section">
        <div className="container">
          <div className="financials-wrapper">
            <h2 className="block-title">
              {t("InvestorRelation.financial.text")}
            </h2>
            <div className="financials-grid">
              <table className="financials-table">
                <thead>
                  <tr>
                    <th>
                      <select className="year-select">
                        <option value="1">
                          {t("InvestorRelation.year1.text")}
                        </option>
                        <option value="2">
                          {t("InvestorRelation.year2.text")}
                        </option>
                        <option value="3">
                          {t("InvestorRelation.year3.text")}
                        </option>
                        <option value="4">
                          {t("InvestorRelation.year4.text")}
                        </option>
                      </select>
                    </th>
                    <th colspan="4">
                      {t("InvestorRelation.downloadView.text")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t("InvestorRelation.q1.text")}</td>
                    <td>
                      <a href="#">{t("InvestorRelation.presentation.text")}</a>
                    </td>
                    <td>
                      <a href="#">
                        {t("InvestorRelation.supplimentInfo.text")}
                      </a>
                    </td>
                    <td>
                      <a href="#">{t("InvestorRelation.webCast.text")}</a>
                    </td>
                    <td>
                      <a href="#">{t("InvestorRelation.pressRelease.text")}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>{t("InvestorRelation.q2.text")}</td>
                    <td>
                      <a href="#">{t("InvestorRelation.presentation.text")}</a>
                    </td>
                    <td>
                      <a href="#">
                        {t("InvestorRelation.supplimentInfo.text")}
                      </a>
                    </td>
                    <td>
                      <a href="#">{t("InvestorRelation.webCast.text")}</a>
                    </td>
                    <td>
                      <a href="#">{t("InvestorRelation.pressRelease.text")}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>{t("InvestorRelation.q3.text")}</td>
                    <td>
                      <a href="#">{t("InvestorRelation.presentation.text")}</a>
                    </td>
                    <td>
                      <a href="#">
                        {t("InvestorRelation.supplimentInfo.text")}
                      </a>
                    </td>
                    <td>
                      <a href="#">{t("InvestorRelation.webCast.text")}</a>
                    </td>
                    <td>
                      <a href="#">{t("InvestorRelation.pressRelease.text")}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>{t("InvestorRelation.q4.text")}</td>
                    <td>
                      <a href="#">{t("InvestorRelation.presentation.text")}</a>
                    </td>
                    <td>
                      <a href="#">
                        {t("InvestorRelation.supplimentInfo.text")}
                      </a>
                    </td>
                    <td>
                      <a href="#">{t("InvestorRelation.webCast.text")}</a>
                    </td>
                    <td>
                      <a href="#">{t("InvestorRelation.pressRelease.text")}</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Latest Updates Section End--> */}
    </main>
  );
};

export default Invester_Relation;
