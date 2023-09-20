import React from "react";
import return_policy_img from "../../../../public/assets/images/banner/return-policy.png";
import return_policy_mobile_img from "../../../../public/assets/images/banner/return-policy-mobile.png";
import { useTranslation } from "react-i18next";

function ReturnPolicy() {
  const [t] = useTranslation("common");
  return (
    <main>
      <section className="page-banner legal-page-banner return-policy-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">
              {t("ReturnPolicy.returnPolicy.text")}
            </h1>
            <h2 className="page-banner-excerpt">
              {t("ReturnPolicy.haveQuestion.text")}
            </h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <picture>
              <source media="(min-width: 768px)" srcset={return_policy_img} />
              <img src={return_policy_mobile_img} alt="Return Banner" />
            </picture>
          </div>
        </div>
        <div className="page-banner-strip bg-bl-600">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("ReturnPolicy.highQuality.text")}</li>
              <li>{t("ReturnPolicy.unlimitBeautyServ.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="legal-content">
        <div className="container">
          <div className="legal-content-wrapper">
            <h2 className="legal-content-title">
              {t("ReturnPolicy.overview.text")}
            </h2>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title visually-hidden">
                Return Policy
              </h3>
              <p>{t("ReturnPolicy.overviewPara1.text")}</p>
              <p>{t("ReturnPolicy.overviewPara2.text")}</p>
              <p>
                {" "}
                {t("ReturnPolicy.overviewPara3.text")}{" "}
                <strong>{t("ReturnPolicy.overviewBoldPara.text")}</strong>
              </p>
              <p>{t("ReturnPolicy.overviewPara4.text")}</p>
              <p>{t("ReturnPolicy.overviewPara5.text")}</p>
              <p>{t("ReturnPolicy.overviewPara6.text")}</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ReturnPolicy;
