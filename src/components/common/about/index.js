import React, { useState } from "react";
import about_us_img from "../../../../public/assets/images/banner/about-us.png";
import about_us_mobile_img from "../../../../public/assets/images/banner/about-us-mobile.png";
import michel_sig from "../../../../public/assets/images/about/signature-michel.png";
import yannick_sig from "../../../../public/assets/images/about/signature-yannick.png";
import yannick_img from "../../../../public/assets/images/team-members/yannick.png";
import melissa_img from "../../../../public/assets/images/team-members/melissa.png";
import michel_img from "../../../../public/assets/images/team-members/micheal.png";
import seema_img from "../../../../public/assets/images/team-members/seema.png";
import mariaT_img from "../../../../public/assets/images/team-members/mariaT.png";
import luis_img from "../../../../public/assets/images/team-members/luis.png";
import fatima_img from "../../../../public/assets/images/team-members/fatima.png";
import ricardoC_img from "../../../../public/assets/images/team-members/ricardoC.png";
import daniel_img from "../../../../public/assets/images/team-members/daniel.png";
import ada_img from "../../../../public/assets/images/team-members/ada.png";
import vaibhav_img from "../../../../public/assets/images/team-members/vaibhav.png";
import yvena_img from "../../../../public/assets/images/team-members/yvena.png";
import andres_img from "../../../../public/assets/images/team-members/andres.png";
import sarahL_img from "../../../../public/assets/images/team-members/sarahL.png";
import amanda_img from "../../../../public/assets/images/team-members/amanda.png";
import ricardoG_img from "../../../../public/assets/images/team-members/ricardoG.png";
import angie_img from "../../../../public/assets/images/team-members/angie.png";
import jade_img from "../../../../public/assets/images/team-members/jade.png";
import sarahB_img from "../../../../public/assets/images/team-members/sarahB.png";
import professional_img from "../../../../public/assets/images/about/professionals.png";
import value_img from "../../../../public/assets/images/about/values.png";
import { useTranslation } from "react-i18next";
import PaginatedItems from "./pagination";
function AboutUs() {
  const [t] = useTranslation("common");

  return (
    <main>
      {/* <!--Page Banner Start--> */}
      <section className="page-banner about-us-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">{t("AboutUs.aboutUs.text")}</h1>
            <h2 className="page-banner-excerpt">
              {t("AboutUs.innovativeBrand.text")}
            </h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <picture>
              <source media="(min-width: 768px)" srcset={about_us_img} />
              <img src={about_us_mobile_img} alt="About Us Banner" />
            </picture>
          </div>
        </div>
        <div className="page-banner-strip">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("AboutUs.highQuality.text")}</li>
              <li>{t("AboutUs.unlimitedBeauty.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Page Banner End--> */}
      {/* <!--White Section Start--> */}
      <section className="section-white section-white-about-1">
        <div className="container">
          <div className="section-white-wrapper section-white-page-about-wrapper">
            <h2 className="section-white-title">
              <span>{t("AboutUs.whoAreWe.text")}</span>
            </h2>
            <div className="section-white-content hr-bottom section-white-content-xl">
              <p>{t("AboutUs.whoAreWePara.text")}</p>
              <p>{t("AboutUs.whoAreWePara1.text")}</p>
              <p>{t("AboutUs.whoAreWePara2.text")}</p>
            </div>
            <div className="section-white-footer">
              <h3 className="section-white-footer-title">
                {t("AboutUs.karismaInspiredYou.text")}
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* <!--White Section End--> */}
      {/* <!--Black Card Attached with Section White Start--> */}
      <section className="section-content-bordered-bg black-card-about-section">
        <h2 className="visually-hidden">White Section Gallery</h2>
        <div className="container">
          <div className="section-content-bordered section-content-bordered-gallery-wrapper">
            <div className="black-card-item black-card-about-item">
              <h3 className="black-card-about-title">
                {t("AboutUs.meetFounders.text")}
              </h3>
              <div className="black-card-about-content">
                <p>{t("AboutUs.meetFoundersPara.text")}</p>
              </div>
              <div className="black-card-about-footer">
                <ul className="list-signatures">
                  <li>
                    <img
                      src={michel_sig}
                      alt="Michel Signature"
                      width="482"
                      height="176"
                    />
                  </li>
                  <li>
                    <img
                      src={yannick_sig}
                      alt="Yannick Signature"
                      width="230"
                      height="156"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Black Card Attached with Section White End--> */}
      {/* <!--Head Office Team Section Start--> */}
      <section className="section-content-bordered-bg ho-team-section">
        <h2 className="visually-hidden">Head office team</h2>
        <div className="container">
          <div className="section-content-bordered ho-team-wrapper">
            <div className="ho-team-grid">
              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={yannick_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.yannick.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.yannickRank.text")}
                </p>
              </div>
              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={melissa_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.melissa.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.melissaRank.text")}
                </p>
              </div>
              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={michel_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.michel.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.michelRank.text")}
                </p>
              </div>
              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={seema_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.seema.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.seemaRank.text")}
                </p>
              </div>
              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src="" alt="" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.gianni.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.gianniRank.text")}
                </p>
              </div>
              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={mariaT_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.mariajose.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.mariajoseRank.text")}
                </p>
              </div>
              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={luis_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">{t("AboutUs.luis.text")}</h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.luisRank.text")}
                </p>
              </div>
              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={fatima_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.fatima.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.fatimaRank.text")}
                </p>
              </div>
              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={ricardoC_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.ricardoC.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.ricardoCRank.text")}
                </p>
              </div>
              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={daniel_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.daniel.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.danielRank.text")}
                </p>
              </div>
              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={ada_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">{t("AboutUs.ada.text")}</h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.adaRank.text")}
                </p>
              </div>
              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={vaibhav_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.vaibhav.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.vaibhavRank.text")}
                </p>
              </div>

              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={yvena_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.yvena.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.yvenaRank.text")}
                </p>
              </div>

              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={andres_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.andres.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.andresRank.text")}
                </p>
              </div>

              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={sarahL_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.sarahL.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.sarahLRank.text")}
                </p>
              </div>

              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={amanda_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.amanda.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.amandaRank.text")}
                </p>
              </div>

              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={ricardoG_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.ricardo.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.ricardoRank.text")}
                </p>
              </div>

              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={angie_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.angie.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.angieRank.text")}
                </p>
              </div>

              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src="" alt="" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.unknown.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.unknownRank.text")}
                </p>
              </div>

              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={jade_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">{t("AboutUs.jade.text")}</h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.jadeRank.text")}
                </p>
              </div>

              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src={sarahB_img} alt="Head Office team member" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.sarahB.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.sarahBRank.text")}
                </p>
              </div>

              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src="" alt="" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.unknown.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.unknownRank.text")}
                </p>
              </div>

              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src="" alt="" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.unknown.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.unknownRank.text")}
                </p>
              </div>

              <div className="ho-team-item">
                <div className="ho-team-item-thumbnail">
                  <img src="" alt="" />
                </div>
                <h3 className="ho-team-item-title">
                  {t("AboutUs.unknown.text")}
                </h3>
                <p className="ho-team-item-designation">
                  {t("AboutUs.unknownRank.text")}
                </p>
              </div>
            </div>
            <h3 className="section-title-start">
              {t("AboutUs.headOfficeTeam.text")}
            </h3>
            <h3 className="section-title-end">
              {t("AboutUs.headOfficeTeam1.text")}
            </h3>
          </div>
        </div>
      </section>
      {/* <!--Head Office Team Section End--> */}
      {/* <!--HTU Reverse Section Start--> */}
      <section className="htu-section htu-reverse-section htu-reverse-lg single-item-htu clr-end-bottom">
        <div className="htu-banner htu-reverse-banner">
          <div className="container">
            <div className="htu-banner-wrapper htu-reverse-banner-wrapper">
              <div className="htu-banner-content htu-reverse-banner-content">
                <div className="content-wrapper">
                  <h3 className="htu-banner-title-light">
                    {t("AboutUs.our.text")}
                  </h3>
                  <h2 className="htu-banner-title-strong htu-reverse-title-strong">
                    {t("AboutUs.professionals.text")}
                  </h2>
                </div>
              </div>
              <div className="htu-banner-visual htu-reverse-banner-visual lg">
                <img
                  loading="lazy"
                  src={professional_img}
                  alt="Our Professionals"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="htu-cards-wrapper">
          <div className="container htu-cards-container">
            <div className="htu-cards">
              <div className="black-card-grid black-card-htu-grid bleed">
                <div className="black-card-item black-card-htu-item">
                  <p className="black-card-htu-content-title bar-top">
                    {t("AboutUs.talent.text")}
                  </p>
                  <div className="black-card-htu-content">
                    <p>{t("AboutUs.talentPara.text")}</p>
                  </div>
                </div>
                <div className="black-card-item black-card-htu-item">
                  <p className="black-card-htu-content-title bar-top">
                    {t("AboutUs.integrity.text")}
                  </p>
                  <div className="black-card-htu-content">
                    <p>{t("AboutUs.integrityPara.text")}</p>
                  </div>
                </div>
                <div className="black-card-item black-card-htu-item">
                  <p className="black-card-htu-content-title bar-top">
                    {t("AboutUs.growth.text")}
                  </p>
                  <div className="black-card-htu-content">
                    <p>{t("AboutUs.growthPara.text")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--HTU Reverse Section End--> */}
      {/* <!--Success Stories Section Start--> */}
      <section className="section-content-bordered-bg success-stories-section">
        <h2 className="visually-hidden">Success Stories</h2>
        <div className="container">
          <div className="section-content-bordered success-stories-wrapper">
            <PaginatedItems itemsPerPage={2} />
            {/*{items ? items?.data.slice(currentPage,PerPage)?.map(*/}
            {/*    (data)=> <div className="success-stories-item">*/}
            {/*      <div className="success-stories-item-wrapper">*/}
            {/*        <div className="success-stories-item-thumbnail">*/}
            {/*          <img loading="lazy" src={data?.profileImage} alt="Success Story Item Banner" width="403" height="568"/>*/}
            {/*        </div>*/}
            {/*        <div className="success-stories-item-content">*/}
            {/*          <h3 className="success-stories-item-title">{data?.name}</h3>*/}
            {/*          <h4 className="success-stories-item-subtitle">{data?.title}</h4>*/}
            {/*          <p>{data?.about}</p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    )*/}
            {/*:false}*/}
            {/*<div className="custom-pagination-wrapper">*/}
            {/*  <Paginator*/}
            {/*      paginate={paginate}*/}
            {/*      PerPage={PerPage}*/}
            {/*      totalPage={totalPage - 1}*/}
            {/*  />*/}
            {/*</div>*/}
            <h3 className="section-title-start">
              {t("AboutUs.successStory.text")}
            </h3>
            <h3 className="section-title-end">
              {t("AboutUs.successStory.text")}
            </h3>
          </div>
        </div>
      </section>
      {/* <!--Success Stories Section End--> */}
      {/* <!--Our Values Section Start--> */}
      <section className="htu-section single-item-htu">
        <div className="htu-banner htu-banner-repair">
          <div className="container">
            <div className="htu-banner-wrapper">
              <div className="htu-banner-content">
                <h3 className="htu-banner-title-light">{t("AboutUs.our.text")}</h3>
                <h2 className="htu-banner-title-strong text-capitalize">
                  {t("AboutUs.values.text")}
                </h2>
              </div>
              <div className="htu-banner-visual">
                <img loading="lazy" src={value_img} alt="Our Values Visual" />
              </div>
            </div>
          </div>
        </div>
        <div className="htu-cards-wrapper">
          <div className="container htu-cards-container">
            <div className="htu-cards">
              <div className="black-card-grid black-card-htu-grid">
                <div className="black-card-item black-card-htu-item">
                  <h3 className="black-card-htu-title">1</h3>
                  <p className="black-card-htu-content-title">
                    {t("AboutUs.diversity.text")} &amp;{" "}
                    {t("AboutUs.inclusion.text")}
                  </p>
                  <div className="black-card-htu-content">
                    <p>{t("AboutUs.diversityPara.text")}</p>
                  </div>
                </div>
                <div className="black-card-item black-card-htu-item">
                  <h3 className="black-card-htu-title">2</h3>
                  <p className="black-card-htu-content-title">
                    {t("AboutUs.stability.text")} &amp;{" "}
                    {t("AboutUs.adaptability.text")}
                  </p>
                  <div className="black-card-htu-content">
                    <p>{t("AboutUs.stabilityPara.text")}</p>
                  </div>
                </div>
                <div className="black-card-item black-card-htu-item">
                  <h3 className="black-card-htu-title">3</h3>
                  <p className="black-card-htu-content-title">
                    {t("AboutUs.respect.text")} &amp;{" "}
                    {t("AboutUs.modesty.text")}
                  </p>
                  <div className="black-card-htu-content">
                    <p>{t("AboutUs.respectPara.text")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Our Values Section End--> */}
      {/* <!--White Section Start--> */}
      <section className="section-white section-white-about-2">
        <div className="container">
          <div className="section-white-wrapper">
            <h2 className="section-white-title">
              <span>
                {t("AboutUs.theSoinsKarisma.text")}
                <br />
                {t("AboutUs.culture.text")}
              </span>
            </h2>
            <div className="section-white-content hr-bottom section-white-content-lg">
              <p>{t("AboutUs.culturePara.text")}</p>
            </div>
            <div className="section-white-footer">
              <button className="btn-dark">{t("AboutUs.findSalon.value")}</button>
            </div>
          </div>
        </div>
      </section>
      {/* <!--White Section End--> */}
      {/* <!--About Quote Section Start--> */}
      <section className="section-content-bordered-bg about-quote-section">
        <h2 className="visually-hidden">Head office team</h2>
        <div className="container">
          <div className="section-content-bordered about-quote-wrapper">
            <div className="about-quote-content">
              <h3 className="about-quote-text">
                {t("AboutUs.bottomPara.text")}
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* <!--About Quote Section End--> */}
    </main>
  );
}

export default AboutUs;
