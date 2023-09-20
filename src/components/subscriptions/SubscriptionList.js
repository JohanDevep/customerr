import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SubscriptionList() {
  const [t] = useTranslation("common");
  const subscriptions = useSelector((state) => state.fetch.subscriptionsList);
  return (
    <section className="price-plans-section pb-lg">
      <h2 className="visually-hidden">Price Plans</h2>
      <div className="container">
        <div className="price-plans-wrapper">
          <div className="price-plans-grid black-card-grid">
            <div className="price-plans-grid-item state-inactive">
              <div className="price-plans-black-block black-card-item">
                <div className="black-block-icon">
                  <i className="icon icon-facial-treatment"></i>
                </div>
                <div className="black-block-content">
                  <h2 className="black-block-title">
                    {t("SubscriptionBeauty.unlimited.text")}
                    <br />
                    {t("SubscriptionBeauty.beauty.text")}
                  </h2>
                  <p className="black-card-package-plan">
                    {t("SubscriptionBeauty.90Price.text")}
                    <small>{t("SubscriptionBeauty.month.text")}</small>
                  </p>
                </div>
              </div>
              <div className="price-plans-white-block">
                <ul className="price-plans-details-list">
                  <li className="">UNLIMITED BEAUTY CARE SERVICES.</li>
                  <li className="">ACCESS TO SOINS KARISMÄ SALONS.</li>
                  <li className="">
                    ACCESS TO VIRTUAL APPOINTMENTS WITH BEAUTY PROFESSIONALS.
                  </li>
                  <li className="">ACCESS TO PLATFORM</li>
                  <li className="">ACCESS TO SOINS KARISMÄ SOCIAL MEDIA.</li>
                  <li className="">CUSTOMER SERVICE 24H/7</li>
                  <li className="disabled">UNLIMITED WELLNESS SERVICES</li>
                  <li className="disabled">
                    ACCESS TO SOINS KARISMÄ WELLNESS CENTERS
                  </li>
                  <li className="disabled">SOINS KARISMÄ TRAVEL EXPERIENCE*</li>
                  <li className="disabled">ACCESS TO ALL INCLUSIVE VILLAS</li>
                  <li className="disabled">
                    LARGE DESTINATION CATALOG TO VISIT EACH MONTH
                  </li>
                  <li className="disabled">
                    PERSONALIZED WELLNESS INSTRUCTORS IN THE VILLAS
                  </li>
                  <li className="disabled">
                    ACCESS TO BEAUTY SERVICES DURING THE TRIP.
                  </li>
                </ul>
                <p className="price-plans-legal-text disabled">
                  *CHECK THE TERMS AND CONDITIONS TO TRAVEL WITH SOINS KARISMÄ.
                </p>
                <div className="price-plans-footer">
                  <Link
                    className="btn-dark"
                    to={`/subscription-unlimited-beauty/${
                      subscriptions ? subscriptions[0]?.uuid : "active"
                    }`}
                  >
                    GET NOW{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="price-plans-grid-item state-inactive">
              <div className="price-plans-black-block black-card-item">
                <div className="black-block-icon">
                  <i className="icon icon-lotus"></i>
                </div>
                <div className="black-block-content">
                  <h2 className="black-block-title">
                    {t("SubscriptionBeauty.unlimited.text")}
                    <br />
                    {t("SubscriptionBeauty.selfCare.text")}
                  </h2>
                  <p className="black-card-package-plan">
                    {t("SubscriptionBeauty.180Price.text")}
                    <small>{t("SubscriptionBeauty.month.text")}</small>
                  </p>
                </div>
              </div>
              <div className="price-plans-white-block">
                <ul className="price-plans-details-list">
                  <li className="">UNLIMITED BEAUTY CARE SERVICES.</li>
                  <li className="">ACCESS TO SOINS KARISMÄ SALONS.</li>
                  <li className="">
                    ACCESS TO VIRTUAL APPOINTMENTS WITH BEAUTY PROFESSIONALS.
                  </li>
                  <li className="">ACCESS TO PLATFORM</li>
                  <li className="">ACCESS TO SOINS KARISMÄ SOCIAL MEDIA.</li>
                  <li className="">CUSTOMER SERVICE 24H/7</li>
                  <li className="">UNLIMITED WELLNESS SERVICES</li>
                  <li className="">ACCESS TO SOINS KARISMÄ WELLNESS CENTERS</li>
                  <li className="disabled">SOINS KARISMÄ TRAVEL EXPERIENCE*</li>
                  <li className="disabled">ACCESS TO ALL INCLUSIVE VILLAS</li>
                  <li className="disabled">
                    LARGE DESTINATION CATALOG TO VISIT EACH MONTH
                  </li>
                  <li className="disabled">
                    PERSONALIZED WELLNESS INSTRUCTORS IN THE VILLAS
                  </li>
                  <li className="disabled">
                    ACCESS TO BEAUTY SERVICES DURING THE TRIP.
                  </li>
                </ul>
                <p className="price-plans-legal-text disabled">
                  *CHECK THE TERMS AND CONDITIONS TO TRAVEL WITH SOINS KARISMÄ.
                </p>
                <div className="price-plans-footer">
                  <button className="btn-dark disabled">
                    {t("SubscriptionBeauty.joinWaitlist.value")}
                  </button>
                  <button className="btn-white btn-hidden">
                    {t("SubscriptionBeauty.joinWaitlist.value")}
                  </button>
                </div>
              </div>
            </div>
            <div className="price-plans-grid-item state-inactive">
              <div className="price-plans-black-block black-card-item">
                <div className="black-block-icon">
                  <i className="icon icon-aeroplane"></i>
                </div>
                <div className="black-block-content">
                  <h2 className="black-block-title">
                    {t("SubscriptionBeauty.unlimited.text")}
                    <br />
                    {t("SubscriptionBeauty.wellness.text")}
                  </h2>
                  <p className="black-card-package-plan">
                    {t("SubscriptionBeauty.500Price.text")}
                    <small>{t("SubscriptionBeauty.month.text")}</small>
                  </p>
                </div>
              </div>
              <div className="price-plans-white-block">
                <ul className="price-plans-details-list">
                  <li className="">UNLIMITED BEAUTY CARE SERVICES.</li>
                  <li className="">ACCESS TO SOINS KARISMÄ SALONS.</li>
                  <li className="">
                    ACCESS TO VIRTUAL APPOINTMENTS WITH BEAUTY PROFESSIONALS.
                  </li>
                  <li className="">ACCESS TO PLATFORM</li>
                  <li className="">ACCESS TO SOINS KARISMÄ SOCIAL MEDIA.</li>
                  <li className="">CUSTOMER SERVICE 24H/7</li>
                  <li className="">UNLIMITED WELLNESS SERVICES</li>
                  <li className="">ACCESS TO SOINS KARISMÄ WELLNESS CENTERS</li>
                  <li className="">SOINS KARISMÄ TRAVEL EXPERIENCE*</li>
                  <li className="">ACCESS TO ALL INCLUSIVE VILLAS</li>
                  <li className="">
                    LARGE DESTINATION CATALOG TO VISIT EACH MONTH
                  </li>
                  <li className="">
                    PERSONALIZED WELLNESS INSTRUCTORS IN THE VILLAS
                  </li>
                  <li className="">
                    ACCESS TO BEAUTY SERVICES DURING THE TRIP.
                  </li>
                </ul>
                <p className="price-plans-legal-text">
                  *CHECK THE TERMS AND CONDITIONS TO TRAVEL WITH SOINS KARISMÄ.
                </p>
                <div className="price-plans-footer">
                  <button className="btn-dark disabled">
                    {t("SubscriptionBeauty.joinWaitlist.value")}
                  </button>
                  <button className="btn-white btn-hidden ">
                    {t("SubscriptionBeauty.joinWaitlist.value")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SubscriptionList;
