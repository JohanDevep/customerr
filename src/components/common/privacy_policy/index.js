import React from "react";
import privacy_policy_img from "../../../../public/assets/images/banner/privacy-policy.png";
import privacy_policy_mobile_img from "../../../../public/assets/images/banner/privacy-policy-mobile.png";
import { useTranslation } from "react-i18next";
function PrivacyPolicy() {
  const [t] = useTranslation("common");
  return (
    <main>
      <section className="page-banner legal-page-banner privacy-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">
              {t("Privacy_Policy_Modal.privacyPolicy.text")}
            </h1>
            <h2 className="page-banner-excerpt">
              {t("Privacy_Policy_Modal.haveQuestions.text")}
            </h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <picture>
              <source media="(min-width: 768px)" srcset={privacy_policy_img} />
              <img src={privacy_policy_mobile_img} alt="FAQ Banner" />
            </picture>
          </div>
        </div>
        <div className="page-banner-strip bg-bl-600">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("Privacy_Policy_Modal.highQuality.text")}</li>
              <li>{t("Privacy_Policy_Modal.unlimitedServices.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="legal-content">
        <div className="container">
          <div className="legal-content-wrapper">
            <h2 className="legal-content-title">
              {t("Privacy_Policy_Modal.privacyPolicy.text")}
            </h2>
            <p className="privacy-policy-content-help-text">
              {t("Privacy_Policy_Modal.privacyPolicyPara.text")}
            </p>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("Privacy_Policy_Modal.contact.text")}
              </h3>
              <p>{t("Privacy_Policy_Modal.contactPara.text")}</p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("Privacy_Policy_Modal.collectPersonalInfo.text")}
              </h3>
              <p>{t("Privacy_Policy_Modal.collectPersonalInfoPara.text")}</p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("Privacy_Policy_Modal.deviceInfo.text")}
              </h3>
              <p>
                <strong>
                  {t("Privacy_Policy_Modal.purposeCollection.text")}
                </strong>{" "}
                {t("Privacy_Policy_Modal.purposeCollectionPara.text")} <br />
                <strong>
                  {t("Privacy_Policy_Modal.sourceCollection.text")}
                </strong>
                {t("Privacy_Policy_Modal.sourceCollectionPara.text")}
                <br />
                <strong>
                  {t("Privacy_Policy_Modal.personalInfoCollect.text")}
                </strong>{" "}
                {t("Privacy_Policy_Modal.personalInfoCollectPara.text")}
                <br />
                <strong>
                  {t("Privacy_Policy_Modal.purposeOfCollection.text")}
                </strong>{" "}
                {t("Privacy_Policy_Modal.purposeOfCollectionPara.text")}
                <br />
                <strong>
                  {t("Privacy_Policy_Modal.sourceOfCollection.text")}
                </strong>{" "}
                {t("Privacy_Policy_Modal.sourceOfCollectionPara.text")}
                <br />
                <strong>
                  {t("Privacy_Policy_Modal.personalInformCollect.text")}
                </strong>{" "}
                {t("Privacy_Policy_Modal.personalInformCollectPara.text")}
              </p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("Privacy_Policy_Modal.minors.text")}
              </h3>
              <p>{t("Privacy_Policy_Modal.minorsPara.text")}</p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("Privacy_Policy_Modal.sharePersonalInfo.text")}
              </h3>
              <p>
                {t("Privacy_Policy_Modal.sharePersonalInfoPara1.text")}
                <br />
                {t("Privacy_Policy_Modal.sharePersonalInfoPara2.text")}
                <br />
                {t("Privacy_Policy_Modal.sharePersonalInfoPara3.text")}
              </p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("Privacy_Policy_Modal.behaviouralAds.text")}
              </h3>
              <p>
                {t("Privacy_Policy_Modal.behaviouralAdsPara1.text")}
                <br />
                {t("Privacy_Policy_Modal.behaviouralAdsPara2.text")}
                <br />
                {t("Privacy_Policy_Modal.behaviouralAdsPara3.text")}
                <br />
                {t("Privacy_Policy_Modal.behaviouralAdsPara4.text")}
                <br />
                {t("Privacy_Policy_Modal.behaviouralAdsPara5.text")}
                <br />
                {t("Privacy_Policy_Modal.behaviouralAdsPara6.text")}
                <br />
                {t("Privacy_Policy_Modal.behaviouralAdsPara7.text")}
              </p>
              <p>
                <strong>{t("Privacy_Policy_Modal.commonLinks.text")}</strong>
                <br />
                {t("Privacy_Policy_Modal.commonLinksPara1.text")}
                <br />
                {t("Privacy_Policy_Modal.commonLinksPara2.text")}
                <br />
                {t("Privacy_Policy_Modal.commonLinksPara3.text")}
                <br />
                {t("Privacy_Policy_Modal.commonLinksPara4.text")}
              </p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("Privacy_Policy_Modal.usingPersonalInfo.text")}
              </h3>
              <p>{t("Privacy_Policy_Modal.usingPersonalInfoPara.text")}</p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("Privacy_Policy_Modal.lawfulBasis.text")}
              </h3>
              <p>
                {t("Privacy_Policy_Modal.lawfulBasisPara1.text")}
                <br />
                {t("Privacy_Policy_Modal.lawfulBasisPara2.text")}
              </p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("Privacy_Policy_Modal.retention.text")}
              </h3>
              <p>{t("Privacy_Policy_Modal.retentionPara.text")}</p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("Privacy_Policy_Modal.autoDecisionMaking.text")}
              </h3>
              <p>
                {t("Privacy_Policy_Modal.autoDecisionMakingPara1.text")}
                <br />
                {t("Privacy_Policy_Modal.autoDecisionMakingPara2.text")}
                <br />
                {t("Privacy_Policy_Modal.autoDecisionMakingPara3.text")}
                <br />
                {t("Privacy_Policy_Modal.autoDecisionMakingPara4.text")}
                <br />
                {t("Privacy_Policy_Modal.autoDecisionMakingPara5.text")}
                <br />
                {t("Privacy_Policy_Modal.autoDecisionMakingPara6.text")}
              </p>
            </article>
            <h2 className="legal-content-title">
              {t("Privacy_Policy_Modal.yourRights.text")}
            </h2>
            <article className="legal-content-block mt-0">
              <h3 className="legal-content-block-title">
                {t("Privacy_Policy_Modal.gdpr.text")}
              </h3>
              <p>
                {t("Privacy_Policy_Modal.gdprPara1.text")}
                <br />
                {t("Privacy_Policy_Modal.gdprPara2.text")}
                <br />
                {t("Privacy_Policy_Modal.gdprPara3.text")}
                <br />
                {t("Privacy_Policy_Modal.gdprPara4.text")}
                <br />
                {t("Privacy_Policy_Modal.gdprPara5.text")}
                <br />
                {t("Privacy_Policy_Modal.gdprPara6.text")}
              </p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("Privacy_Policy_Modal.ccpa.text")}
              </h3>
              <p>
                {t("Privacy_Policy_Modal.ccpaPara1.text")}
                <br />
                {t("Privacy_Policy_Modal.ccpaPara2.text")}
              </p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("Privacy_Policy_Modal.cookies.text")}
              </h3>
              <p>
                {t("Privacy_Policy_Modal.cookiesPara1.text")}
                <br />
                {t("Privacy_Policy_Modal.cookiesPara2.text")}
                <br />
                {t("Privacy_Policy_Modal.cookiesPara3.text")}
                <br />
                {t("Privacy_Policy_Modal.cookiesPara4.text")}
                <br />
                {t("Privacy_Policy_Modal.cookiesPara5.text")}
                <br />
                {t("Privacy_Policy_Modal.cookiesPara6.text")}
              </p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("Privacy_Policy_Modal.doNotTrack.text")}
              </h3>
              <p>{t("Privacy_Policy_Modal.doNotTrackPara.text")}</p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("Privacy_Policy_Modal.changes.text")}
              </h3>
              <p>{t("Privacy_Policy_Modal.changesPara.text")}</p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("Privacy_Policy_Modal.complaints.text")}
              </h3>
              <p>{t("Privacy_Policy_Modal.complaintsPara.text")}</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
