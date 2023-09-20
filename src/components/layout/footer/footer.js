import React from "react";
import { Link } from "react-router-dom";
import logo_white from "../../../../public/assets/images/logo-white.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const [t] = useTranslation("common");
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-content-wrapper">
            <div className="row">
              <div className="col-lg-8 col-left">
                <div className="row">
                  <div className="col-xl-3 col-6 col">
                    <div className="footer-block">
                      <h2 className="footer-block-title">
                        {t("Footer.company.text")}
                      </h2>
                      <ul className="footer-block-list">
                        <li>
                          <Link
                            to="/career"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.company.careers.value")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/karisma-salons"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.company.becomeSalon.value")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            to="/reviews"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.company.reviews.value")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/contact-us"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.company.contactUs.value")}
                          </Link>
                        </li>
                        <li>
                          <a href="#">
                            {t("Footer.company.sustainability.value")}
                          </a>
                        </li>
                        <li>
                          <Link
                            href="#"
                            to="/loyalty"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.company.loyalty.value")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            to="/invester-relation"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.company.investorRelation.value")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/social-impact"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.company.socialImpact.value")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-6 col">
                    <div className="footer-block">
                      <h2 className="footer-block-title">
                        {t("Footer.resources.text")}
                      </h2>
                      <ul className="footer-block-list">
                        <li>
                          <Link
                            to="/our-locations"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.resources.ourLocations.value")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/blog"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.resources.blogs.value")}
                          </Link>
                        </li>
                        <li>
                          <a href="#">
                            {t("Footer.resources.karismaCommunity.value")}
                          </a>
                        </li>
                        <li>
                          <Link
                            to="/events"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.resources.events.value")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/blog/news"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.resources.newsRoom.value")}
                          </Link>
                        </li>
                        <li>
                          <a href="#">{t("Footer.resources.academy.value")}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-6 col">
                    <div className="footer-block">
                      <h2 className="footer-block-title">
                        {t("Footer.partners.text")}
                      </h2>
                      <ul className="footer-block-list">
                        <li>
                          <Link
                            href="#"
                            to="/affiliate"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.partners.affiliate.value")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            to="/supplier-network"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.partners.supplierNetwork.value")}
                          </Link>
                        </li>
                        <li>
                          <a href="#">
                            {t("Footer.partners.becomePartner.value")}
                          </a>
                        </li>
                        <li>
                          <a href="#">{t("Footer.partners.toolkit.value")}</a>
                        </li>
                        <li>
                          <Link
                            to="/job-application"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.partners.jobApplication.value")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-6 col">
                    <div className="footer-block">
                      <h2 className="footer-block-title">
                        {t("Footer.customerServ.text")}
                      </h2>
                      <ul className="footer-block-list">
                        <li>
                          <Link
                            to="/faq"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.customerServ.faq.value")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/return-policy"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.customerServ.returnPolicy.value")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="footer-block mobile-up">
                      <h2 className="footer-block-title">
                        {t("Footer.legal.text")}
                      </h2>
                      <ul className="footer-block-list">
                        <li>
                          <Link
                            to="/soins-karisma/privacy-policy"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.legal.privacyPolicy.value")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/soins-karisma/terms-and-conditions"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.legal.termsCondition.value")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-6 col mobile-down">
                    <div className="footer-block">
                      <h2 className="footer-block-title">
                        {t("Footer.legal.text")}
                      </h2>
                      <ul className="footer-block-list">
                        <li>
                          <Link
                            to="/soins-karisma/privacy-policy"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.legal.privacyPolicy.value")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/soins-karisma/terms-and-conditions"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {t("Footer.legal.termsCondition.value")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 align-self-center col-right">
                <div className="footer-subscription-wrapper">
                  <img
                    loading="lazy"
                    src={logo_white}
                    className="footer-logo"
                    alt="Karisma White Logo"
                    width="1444"
                    height="412"
                  />
                  <p className="text-lmd text-uppercase logo-helper">
                    {t("Footer.inspiredByYou.text")}
                  </p>
                  <p className="text-xsm form-helper">
                    {t("Footer.inspiredByYouPara.text")}
                  </p>
                  <div className="subscription-form">
                    <div className="form-group">
                      <label className="visually-hidden" for="subscribeForm">
                        Some Label
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subscribeForm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="form-cta"
                      aria-label="Subscribe"
                    >
                      <i className="icon icon-chevron-right"></i>
                    </button>
                  </div>
                  <ul className="list-inline">
                    <li>
                      <a href="#" aria-label="Instagram">
                        <i className="icon icon-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Twitter">
                        <i className="icon icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Facebook">
                        <i className="icon icon-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="footer-copyright-wrapper">
            <p className="copyright-info">{t("Footer.allRightsReserved.text")}</p>
            <div className="footer-icons">
              <ul className="list-footer-icons">
                <li>
                  <i className="icon icon-american-express"></i>
                </li>
                <li>
                  <i className="icon icon-apple-pay"></i>
                </li>
                <li>
                  <i className="icon icon-google-pay"></i>
                </li>
                <li>
                  <i className="icon icon-discover"></i>
                </li>
                <li>
                  <i className="icon icon-cc-paypal"></i>
                </li>
                <li>
                  <i className="icon icon-mastercard"></i>
                </li>
                <li>
                  <i className="icon icon-visa"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  {/*    <script
        type="text/javascript"
        src={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_GOOGLE_MAP_PLACE_KEY}`}
      ></script>*/}

    </footer>
  );
}

export default Footer;
