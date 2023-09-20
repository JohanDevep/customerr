import React from "react";
import faq_img from "../../../../public/assets/images/banner/faq.png";
import faq_mobile_img from "../../../../public/assets/images/banner/faq-mobile.png";
import { useTranslation } from "react-i18next";
import Shipping from "../modals/shipping";
import PaymentSecurity from "../modals/payments_security";
import ReturnPolicy from "../modals/return_policy_popup";
import Order from "../modals/order_popup";
import SubscriptionPlan from "../modals/subscription_plan";
import Academy from "../modals/academy";
import BecomeSalon from "../modals/become_salon";
import DisputesClaims from "../modals/disputes_claims_popup";
import OurCareProduct from "../modals/karisma_products_popup";

function Index() {
  const [t] = useTranslation("common");
  return (
    <main>
      <section className="page-banner legal-page-banner faq-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">{t("Faq.faq.text")}</h1>
            <h2 className="page-banner-excerpt">
              {t("Faq.haveQuestion.text")}
            </h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <picture>
              <source media="(min-width: 768px)" srcset={faq_img} />
              <img src={faq_mobile_img} alt="FAQ Banner" />
            </picture>
          </div>
        </div>
        <div className="page-banner-strip bg-bl-600">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("Faq.highQuality.text")}</li>
              <li>{t("Faq.unlimitBeautyServ.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--White Section Start--> */}
      <section className="section-white section-white-faq">
        <div className="container">
          <div className="section-white-wrapper">
            <h2 className="section-white-title">{t("Faq.questions.text")}</h2>
            <div className="section-white-content hr-top">
              <p>{t("Faq.questionsPara.text")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--White Section End--> */}
      <section className="faq-card-section section-content-bordered-bg">
        <h2 className="visually-hidden">Faq Cards</h2>
        <div className="container">
          <div className="section-content-bordered faq-card-wrapper">
            <div className="faq-card-grid">
              {/* Shpipping Modal Start */}
              <div className="faq-card-item">
                <Shipping />
                <div className="faq-card-icon">
                  <i className="icon icon-cart"></i>
                </div>
                <h3 className="faq-card-title">{t("Faq.shipping.text")}</h3>
                <p className="faq-card-text">{t("Faq.shippingPara.text")}</p>
                <a
                  href="#"
                  className="faq-card-cta"
                  aria-label="SHIPPING"
                  data-bs-toggle="modal"
                  data-bs-target="#contentAccordion"
                ></a>
              </div>
              {/* Shpipping Modal End */}
              {/* payment and security Modal Start */}
              <div className="faq-card-item">
                <PaymentSecurity />
                <div className="faq-card-icon">
                  <i className="icon icon-security"></i>
                </div>
                <h3 className="faq-card-title">
                  {t("Faq.payment&Security.text")}
                </h3>
                <p className="faq-card-text">
                  {t("Faq.payment&SecurityPara.text")}
                </p>
                <a
                  href="#"
                  className="faq-card-cta"
                  aria-label="PAYMENTS AND SECURITY"
                  data-bs-toggle="modal"
                  data-bs-target="#contentAccordion1"
                ></a>
              </div>
              {/* payment and security Modal End */}
              {/* Return policy Modal Start */}
              <div className="faq-card-item">
                <ReturnPolicy />
                <div className="faq-card-icon">
                  <i className="icon icon-flag"></i>
                </div>
                <h3 className="faq-card-title">{t("Faq.returnPolicy.text")}</h3>
                <p className="faq-card-text">
                  {t("Faq.returnPolicyPara.text")}
                </p>
                <a
                  href="#"
                  className="faq-card-cta"
                  aria-label="RETURN POLICY"
                  data-bs-toggle="modal"
                  data-bs-target="#contentAccordion2"
                ></a>
              </div>
              {/* Return Policy Modal End */}
              {/* order Modal Start */}
              <div className="faq-card-item">
                <Order />
                <div className="faq-card-icon">
                  <i className="icon icon-warning"></i>
                </div>
                <h3 className="faq-card-title">{t("Faq.order.text")}</h3>
                <p className="faq-card-text">{t("Faq.orderPara.text")}</p>
                <a
                  href="#"
                  className="faq-card-cta"
                  aria-label="Order"
                  data-bs-toggle="modal"
                  data-bs-target="#contentAccordion3"
                ></a>
              </div>
              {/* order Modal End */}
              {/* subscription plan Modal Start */}
              <div className="faq-card-item">
                <SubscriptionPlan />
                <div className="faq-card-icon">
                  <i className="icon icon-badge"></i>
                </div>
                <h3 className="faq-card-title">{t("Faq.subsPlans.text")}</h3>
                <p className="faq-card-text">{t("Faq.subsPlansPara.text")}</p>
                <a
                  href="#"
                  className="faq-card-cta"
                  aria-label="SUBSCRIPTION PLAN"
                  data-bs-toggle="modal"
                  data-bs-target="#contentAccordion4"
                ></a>
              </div>
              {/* subscription plan Modal End */}
              {/* Academy Modal Start */}
              <div className="faq-card-item">
                <Academy />
                <div className="faq-card-icon">
                  <i className="icon icon-education"></i>
                </div>
                <h3 className="faq-card-title">{t("Faq.academy.text")}</h3>
                <p className="faq-card-text">{t("Faq.academyPara.text")}</p>
                <a
                  href="#"
                  className="faq-card-cta"
                  aria-label="ACADEMY"
                  data-bs-toggle="modal"
                  data-bs-target="#contentAccordion5"
                ></a>
              </div>
              {/* Academy Modal End */}
              {/* Become Salon Modal Start */}
              <div className="faq-card-item">
                <BecomeSalon />
                <div className="faq-card-icon">
                  <i className="icon icon-scissors"></i>
                </div>
                <h3 className="faq-card-title">{t("Faq.becomeSalon.text")}</h3>
                <p className="faq-card-text">{t("Faq.becomeSalonPara.text")}</p>
                <a
                  href="#"
                  className="faq-card-cta"
                  aria-label="BECOMING A SALON"
                  data-bs-toggle="modal"
                  data-bs-target="#contentAccordion6"
                ></a>
              </div>
              {/* Become Salon Modal End */}
              {/* Disputes and Claims Modal Start */}
              <div className="faq-card-item">
                <DisputesClaims />
                <div className="faq-card-icon">
                  <i className="icon icon-exclamation-circle"></i>
                </div>
                <h3 className="faq-card-title">
                  {t("Faq.disputes&Claims.text")}
                </h3>
                <p className="faq-card-text">
                  {t("Faq.disputes&ClaimsPara.text")}
                </p>
                <a
                  href="#"
                  className="faq-card-cta"
                  aria-label="DISPUTES AND CLAIMS"
                  data-bs-toggle="modal"
                  data-bs-target="#contentAccordion7"
                ></a>
              </div>
              {/* Disputes and Claims Modal End */}
              {/* Our Care Line Modal Start */}
              <div className="faq-card-item">
                <OurCareProduct />
                <div className="faq-card-icon">
                  <i className="icon icon-cosmetics"></i>
                </div>
                <h3 className="faq-card-title">
                  {t("Faq.careLineProducts.text")}
                </h3>
                <p className="faq-card-text">
                  {t("Faq.careLineProductsPara.text")}
                </p>
                <a
                  href="#"
                  className="faq-card-cta"
                  aria-label="OUR CARE LINES AND PRODUCTS"
                  data-bs-toggle="modal"
                  data-bs-target="#contentAccordion8"
                ></a>
              </div>
              {/* Our Care Line Modal End */}
            </div>
            <h3 className="section-title-start">{t("Faq.faqs.text")}</h3>
            <h3 className="section-title-end">{t("Faq.faqs.text")}</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Index;
