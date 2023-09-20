import React from "react";
import careers_img from "../../../../public/assets/images/banner/careers.png";
import careers_mobile_img from '../../../../public/assets/images/banner/careers-mobile.png';
import htu_img from "../../../../public/assets/images/careers/htu.png";
import masonry_1_img from "../../../../public/assets/images/careers/masonry-1.png";
import masonry_2_img from "../../../../public/assets/images/careers/masonry-2.png";
import masonry_3_img from "../../../../public/assets/images/careers/masonry-3.png";
import masonry_4_img from "../../../../public/assets/images/careers/masonry-4.png";
import masonry_5_img from "../../../../public/assets/images/careers/masonry-5.png";
import masonry_6_img from "../../../../public/assets/images/careers/masonry-6.png";
import masonry_7_img from "../../../../public/assets/images/careers/masonry-7.png";
import masonry_8_img from "../../../../public/assets/images/careers/masonry-8.png";
import { useTranslation } from "react-i18next";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [t] = useTranslation("common");
  return (
    <main>
      {/* <!--Page Banner Start--> */}
      <section className="page-banner career-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">{t("Career.careers.text")}</h1>
            <h2 className="page-banner-excerpt">{t("Career.joinUs.text")}</h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <picture>
              <source media="(min-width: 768px)" srcset={careers_img}/>
              <img src={careers_mobile_img} alt="Careers Banner"/>
            </picture>
          </div>
        </div>
        <div className="page-banner-strip">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("Career.highQuality.text")}</li>
              <li>{t("Career.unlimitBeautyServ.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Page Banner End--> */}
      {/* <!--White Section Start--> */}
      <section className="section-white">
        <div className="container">
          <div className="section-white-wrapper">
            <h2 className="section-white-title">{t("Career.joinOurTeam.text")}</h2>
            <div className="section-white-content hr-top section-white-content-sm">
              <p>
              {t("Career.joinOurTeamPara.text")}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--White Section End--> */}
      {/* <!--HTU Reverse Section Start--> */}
      <section className="htu-section htu-reverse-section career-htu-reverse-section single-item-htu">
        <div className="htu-banner htu-reverse-banner">
          <div className="container">
            <div className="htu-banner-wrapper htu-reverse-banner-wrapper">
              <div className="htu-banner-content htu-reverse-banner-content">
                <div className="content-wrapper">
                  <h3 className="htu-banner-title-light">{t("Career.why.text")}</h3>
                  <h2 className="htu-banner-title-strong htu-reverse-title-strong">{t("Career.joinUs!.text")}</h2>
                </div>
              </div>
              <div className="htu-banner-visual htu-reverse-banner-visual lg">
                <img loading="lazy" src={htu_img} alt="Why Join Us banner Visual"/>
              </div>
            </div>
          </div>
        </div>
        <div className="htu-cards-wrapper">
          <div className="container htu-cards-container">
            <div className="htu-cards">
              <div className="black-card-grid black-card-htu-grid bleed">
                <div className="black-card-item black-card-htu-item">
                  <h3 className="black-card-htu-title">1</h3>
                  <p className="black-card-htu-content-title">{t("Career.challenge.text")}</p>
                  <div className="black-card-htu-content">
                    <p>{t("Career.challengePara.text")}</p>
                  </div>
                </div>
                <div className="black-card-item black-card-htu-item">
                  <h3 className="black-card-htu-title">2</h3>
                  <p className="black-card-htu-content-title">{t("Career.diversity.text")}</p>
                  <div className="black-card-htu-content">
                    <p>{t("Career.diversityPara.text")}</p>
                  </div>
                </div>
                <div className="black-card-item black-card-htu-item">
                  <h3 className="black-card-htu-title">3</h3>
                  <p className="black-card-htu-content-title">{t("Career.balance.text")}</p>
                  <div className="black-card-htu-content">
                    <p>{t("Career.balancePara.text")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--HTU Reverse Section End--> */}
      {/* <!--Masonry Gallery Start--> */}
      <section className="masonry-section section-content-bordered-bg">
        <h2 className="visually-hidden">Jobs Listing</h2>
        <div className="container">
          <div className="section-content-bordered masonry-wrapper">
            <div className="masonry-grid">
              {/* <!--Add max 8 .masonry-grid-items in 1 masonry-grid-box--> */}
              {/* <!--For more items create new masonry grid box and add max 8 masonry items in it--> */}
              <div className="masonry-grid-box">
                <div className="masonry-grid-item">
                  <img src={masonry_1_img} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_2_img} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_3_img} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_4_img} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_5_img} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_6_img} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_7_img} alt="Masonry Item" />
                </div>
                <div className="masonry-grid-item">
                  <img src={masonry_8_img} alt="Masonry Item" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Masonry Gallery End--> */}
      {/* <!--White Section Start--> */}
      <section className="section-white">
        <div className="container">
          <div className="section-white-wrapper">
            <h2 className="section-white-title">{t("Career.howToApply.text")}</h2>
            <div className="section-white-content hr-top section-white-content-sm">
              <p>
              {t("Career.howToApplyPara.text")}
              </p>
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
              <span role="button">{t("Career.headOffice.text")}</span>
            </li>
            <li>
              <span role="button">{t("Career.stylist.text")}</span>
            </li>
            <li>
              <span role="button">{t("Career.colorist.text")}</span>
            </li>
            <li>
              <span role="button">{t("Career.esthetician.text")}</span>
            </li>
            <li>
              <span role="button">{t("Career.manicurist.text")}</span>
            </li>
          </ul>
        </div>
      </div>
      {/* <!--Tabs Strip End--> */}
      {/* <!--Diary Section Start--> */}
      <section className="career-section section-content-bordered-bg">
        <h2 className="visually-hidden">Jobs Listing</h2>
        <div className="container">
          <div className="section-content-bordered career-search-wrapper">
            <div className="job-search-form">
              <div className="form-group">
                <label for="keyword" className="visually-hidden">Keyword</label>
                <input type="text" className="form-control" id="keyword" placeholder={t("Career.keyword.text")}/>
              </div>
              <div className="form-group">
                <label for="city" className="visually-hidden">City</label>
                <input type="text" className="form-control" id="city" placeholder={t("Career.city.text")}/>
              </div>
              <div className="form-cta">
                <button className="btn-dark outline-transparent form-cta-control">{t("Career.search.text")}</button>
              </div>
            </div>
            <div className="career-search-grid-wrapper">
              <div className="jobs-grid">
                <div className="jobs-grid-item">
                  <div className="career-item-card-info">
                    <p className="small mb-1"><strong>{t("Career.4HoursAgo.text")}</strong></p>
                    <p className="location-item mb-1">
                      <i className="icon icon-location"></i>
                      <span>{t("Career.monrealCanada.text")}</span>
                    </p>
                    <h2 className="modal-title">{t("Career.cooMarketing.text")}</h2>
                    <ul className="modal-single-definition-list">
                      <li>
                        <i className="icon icon-work"></i>
                        <span>{t("Career.tempPlein.text")}</span>
                      </li>
                      <li>
                        <i className="icon icon-dollar"></i>
                        <span>{t("Career.57K.text")}</span>
                      </li>
                      <li>
                        <i className="icon icon-chalkboard-user"></i>
                        <span>{t("Career.2AnsMinimum.text")}</span>
                      </li>
                    </ul>
                    <a href="#" className="career-item-card-cta" aria-label="Coordinateur marketing"></a>
                  </div>
                </div>
                <div className="jobs-grid-item">
                  <div className="career-item-card-info">
                    <p className="small mb-1"><strong>{t("Career.4HoursAgo.text")}</strong></p>
                    <p className="location-item mb-1">
                      <i className="icon icon-location"></i>
                      <span>{t("Career.monrealCanada.text")}</span>
                    </p>
                    <h2 className="modal-title">{t("Career.customerSupport.text")}</h2>
                    <ul className="modal-single-definition-list">
                      <li>
                        <i className="icon icon-work"></i>
                        <span>{t("Career.fullTime.text")}</span>
                      </li>
                      <li>
                        <i className="icon icon-dollar"></i>
                        <span>{t("Career.45K.text")}</span>
                      </li>
                      <li>
                        <i className="icon icon-chalkboard-user"></i>
                        <span>{t("Career.noExperienceNeeded.text")}</span>
                      </li>
                    </ul>
                    <a href="#" className="career-item-card-cta" aria-label="Coordinateur marketing"></a>
                  </div>
                </div>
                <div className="jobs-grid-item">
                  <div className="career-item-card-info">
                    <p className="small mb-1"><strong>{t("Career.4HoursAgo.text")}</strong></p>
                    <p className="location-item mb-1">
                      <i className="icon icon-location"></i>
                      <span>{t("Career.monrealCanada.text")}</span>
                    </p>
                    <h2 className="modal-title">{t("Career.representantService.text")}</h2>
                    <ul className="modal-single-definition-list">
                      <li>
                        <i className="icon icon-work"></i>
                        <span>{t("Career.tempPlein.text")}</span>
                      </li>
                      <li>
                        <i className="icon icon-dollar"></i>
                        <span>{t("Career.45K/An.text")}</span>
                      </li>
                      <li>
                        <i className="icon icon-chalkboard-user"></i>
                        <span>{t("Career.aucuneExperience.text")}</span>
                      </li>
                    </ul>
                    <a href="#" className="career-item-card-cta" aria-label="Coordinateur marketing"></a>
                  </div>
                </div>
                <div className="jobs-grid-item">
                  <div className="career-item-card-info">
                    <p className="small mb-1"><strong>{t("Career.4HoursAgo.text")}</strong></p>
                    <p className="location-item mb-1">
                      <i className="icon icon-location"></i>
                      <span>{t("Career.monrealCanada.text")}</span>
                    </p>
                    <h2 className="modal-title">{t("Career.estheticianSpecialist.text")}</h2>
                    <ul className="modal-single-definition-list">
                      <li>
                        <i className="icon icon-work"></i>
                        <span>{t("Career.partTime.text")}</span>
                      </li>
                      <li>
                        <i className="icon icon-dollar"></i>
                        <span>{t("Career.30K.text")}</span>
                      </li>
                      <li>
                        <i className="icon icon-chalkboard-user"></i>
                        <span>{t("Career.5YearsExperience.text")}</span>
                      </li>
                    </ul>
                    <a href="#" className="career-item-card-cta" aria-label="Coordinateur marketing"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="career-search-footer">
              <button className="btn-dark outline-transparent mx-auto">{t("Career.loadMore.value")}</button>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Diary Section End--> */}
    </main>
  );
};

export default index;
