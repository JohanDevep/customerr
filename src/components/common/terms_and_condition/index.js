import React from "react";
import tc_img from "../../../../public/assets/images/banner/tc.png";
import tc_mobile_img from "../../../../public/assets/images/banner/tc-mobile.png";
import { useTranslation } from "react-i18next";

function TermsAndCondition() {
  const [t] = useTranslation("common");

  return (
    <main>
      {/* <!--Page Banner Start--> */}
      <section className="page-banner legal-page-banner tc-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">
              {t("TermsCondition.terms&Condition.text")}
            </h1>
            <h2 className="page-banner-excerpt">
              {t("TermsCondition.haveQuestion.text")}
            </h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <picture>
              <source media="(min-width: 768px)" srcset={tc_img} />
              <img src={tc_mobile_img} alt="Terms and Conditions Banner" />
            </picture>
          </div>
        </div>
        <div className="page-banner-strip">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("TermsCondition.highQuality.text")}</li>
              <li>{t("TermsCondition.unlimitBeautyServ.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Page Banner End--> */}
      {/* <!--Legal Content Section Start--> */}
      <section className="legal-content">
        <div className="container">
          <div className="legal-content-wrapper">
            <h2 className="legal-content-title">
              {t("TermsCondition.termsConditionUse.text")}
            </h2>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title visually-hidden">
                TERMS AND CONDITIONS OF USE
              </h3>
              <p>{t("TermsCondition.termsConditionUsePara1.text")}</p>
              <p>{t("TermsCondition.termsConditionUsePara2.text")}</p>
              <p className="text-uppercase">
                {t("TermsCondition.termsConditionUsePara3.text")}
              </p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("TermsCondition.legalNotice.text")}
              </h3>
              <ul className="list-unstyled">
                <li>{t("TermsCondition.legalNoticePara1.text")}</li>
                <li>{t("TermsCondition.legalNoticePara2.text")}</li>
                <li>{t("TermsCondition.legalNoticePara3.text")}</li>
                <li>{t("TermsCondition.legalNoticePara4.text")}</li>
                <li>{t("TermsCondition.legalNoticePara5.text")}</li>
                <li>{t("TermsCondition.legalNoticePara6.text")}</li>
              </ul>
              <p>{t("TermsCondition.legalNoticePara7.text")}</p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("TermsCondition.serviceProvider.text")}
              </h3>
              <p>{t("TermsCondition.serviceProviderPara.text")}</p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("TermsCondition.preamble.text")}
              </h3>
              <ul className="list-unstyled">
                <li>{t("TermsCondition.preamblePara1.text")}</li>
                <li>{t("TermsCondition.preamblePara2.text")}</li>
                <li>{t("TermsCondition.preamblePara3.text")}</li>
              </ul>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("TermsCondition.ageRequirement.text")}
              </h3>
              <p>{t("TermsCondition.ageRequirementPara.text")}</p>
              <p className="mb-0">
                <strong className="d-flex flex-column">
                  <span>{t("TermsCondition.soinsKarismaService.text")}</span>
                  <span className="light">
                    {t("TermsCondition.soinsKarismaServiceHeading.text")}
                  </span>
                </strong>
              </p>
              <p className="mt-0">
                {t("TermsCondition.soinsKarismaServicePara1.text")}
              </p>
              <p className="mb-0">
                <strong>
                  <span className="light">
                    {t("TermsCondition.soinsKarismaServicePara2.text")}
                  </span>
                </strong>
              </p>
              <p className="mt-0">
                {t("TermsCondition.soinsKarismaServicePara3.text")}
              </p>
              <p className="mb-0">
                <strong>
                  <span className="light">
                    {t("TermsCondition.soinsKarismaServicePara4.text")}
                  </span>
                </strong>
              </p>
              <p className="mt-0">
                {t("TermsCondition.soinsKarismaServicePara5.text")}
              </p>
              <p className="mb-0">
                <strong>
                  <span className="light">
                    {t("TermsCondition.soinsKarismaServicePara6.text")}
                  </span>
                </strong>
              </p>
              <p className="mt-0">
                {t("TermsCondition.soinsKarismaServicePara7.text")}
              </p>
              <ul className="list-unstyled">
                <li>{t("TermsCondition.soinsKarismaServicePara8.text")}</li>
                <li>{t("TermsCondition.soinsKarismaServicePara9.text")}</li>
                <li>{t("TermsCondition.soinsKarismaServicePara10.text")}</li>
              </ul>
              <p>{t("TermsCondition.soinsKarismaServicePara11.text")}</p>
              <p className="mb-0">
                <strong className="d-flex flex-column">
                  <span>{t("TermsCondition.yourUseSoinsKarisma.text")}</span>
                  <span className="light">
                    {t("TermsCondition.yourUseSoinsKarismaHeading.text")}
                  </span>
                </strong>
              </p>
              <p className="mt-0">
                {t("TermsCondition.yourUseSoinsKarismaPara1.text")}
              </p>
              <p>{t("TermsCondition.yourUseSoinsKarismaPara2.text")}</p>
              <ul className="list-unstyled">
                <li>{t("TermsCondition.yourUseSoinsKarismaPara3.text")}</li>
                <li>{t("TermsCondition.yourUseSoinsKarismaPara4.text")}</li>
              </ul>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("TermsCondition.appointmentBooking.text")}
              </h3>
              <p>{t("TermsCondition.appointmentBookingPara1.text")}</p>
              <p>{t("TermsCondition.appointmentBookingPara2.text")}</p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("TermsCondition.approvedAppointment.text")}
              </h3>
              <ul className="list-unstyled">
                <li>{t("TermsCondition.approvedAppointmentPara1.text")}</li>
                <li>{t("TermsCondition.approvedAppointmentPara2.text")}</li>
                <li>{t("TermsCondition.approvedAppointmentPara3.text")}</li>
                <li>{t("TermsCondition.approvedAppointmentPara4.text")}</li>
              </ul>
              <p>{t("TermsCondition.approvedAppointmentPara5.text")}</p>
              <p className="mb-0">
                <strong>
                  <span className="light">
                    {t("TermsCondition.approvedAppointmentPara6.text")}
                  </span>
                </strong>
              </p>
              <p className="mt-0">
                {t("TermsCondition.approvedAppointmentPara7.text")}
              </p>
              <p>{t("TermsCondition.approvedAppointmentPara8.text")}</p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("TermsCondition.monthlySubs90.text")}
              </h3>
              <p>{t("TermsCondition.monthlySubs90Para1.text")}</p>
              <p>{t("TermsCondition.monthlySubs90Para2.text")}</p>
              <p>{t("TermsCondition.monthlySubs90Para3.text")}</p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("TermsCondition.annualSubs1080.text")}
              </h3>
              <p>{t("TermsCondition.annualSubs1080Para1.text")}</p>
              <p>{t("TermsCondition.annualSubs1080Para2.text")}</p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("TermsCondition.soinsKarismaProprietary.text")}
              </h3>
              <p>{t("TermsCondition.soinsKarismaProprietaryPara.text")}</p>
              <p className="mb-0">
                <strong className="d-flex flex-column">
                  <span>{t("TermsCondition.paymentCancel.text")}</span>
                  <span className="light">{t("TermsCondition.billing.text")}</span>
                </strong>
              </p>
              <ul className="list-unstyled mt-0">
                <li>{t("TermsCondition.billingPara1.text")}</li>
                <li>{t("TermsCondition.billingPara2.text")}</li>
                <li>{t("TermsCondition.billingPara3.text")}</li>
                <li>{t("TermsCondition.billingPara4.text")}</li>
              </ul>
              <p>{t("TermsCondition.billingPara5.text")}</p>
              <p className="mb-0">
                <strong>
                  <span className="light">
                    {t("TermsCondition.priceTaxChanges.text")}
                  </span>
                </strong>
              </p>
              <p className="mt-0">
                {t("TermsCondition.priceTaxChangesPara1.text")}
              </p>
              <p>{t("TermsCondition.priceTaxChangesPara2.text")}</p>
              <p className="mb-0">
                <strong>
                  <span className="light">
                    {t("TermsCondition.renewalCancellation.text")}
                  </span>
                </strong>
              </p>
              <p className="mt-0">
                {t("TermsCondition.renewalCancellationPara1.text")}
                <strong>
                  {" "}
                  {t("TermsCondition.renewalCancellationPara2.text")}
                </strong>
              </p>
              <p className="mb-0">
                <strong>
                  <span className="light">
                    {t("TermsCondition.userGuideline.text")}
                  </span>
                </strong>
              </p>
              <p className="mt-0">{t("TermsCondition.userGuidelinePara.text")}</p>
              <p className="mb-0">
                <strong>
                  <span className="light">
                    {t("TermsCondition.exportControl.text")}
                  </span>
                </strong>
              </p>
              <p className="mt-0">{t("TermsCondition.exportControlPara1.text")}</p>
              <p>{t("TermsCondition.exportControlPara2.text")}</p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("TermsCondition.contentIntellectual.text")}
              </h3>
              <p className="mb-0">
                <strong>
                  <span className="light">
                    {t("TermsCondition.userContent.text")}
                  </span>
                </strong>
              </p>
              <p className="mt-0">{t("TermsCondition.userContentPara1.text")}</p>
              <p>{t("TermsCondition.userContentPara2.text")}</p>
              <p>{t("TermsCondition.userContentPara3.text")}</p>
              <p>{t("TermsCondition.userContentPara4.text")}</p>
              <p>{t("TermsCondition.userContentPara5.text")}</p>
              <p className="mb-0">
                <strong>
                  <span className="light">
                    {t("TermsCondition.monitoringUser.text")}
                  </span>
                </strong>
              </p>
              <p className="mt-0">{t("TermsCondition.monitoringUserPara1.text")}</p>
              <p>{t("TermsCondition.monitoringUserPara2.text")}</p>
              <p className="mb-0">
                <strong>
                  <span className="light">{t("TermsCondition.feedback.text")}</span>
                </strong>
              </p>
              <p className="mt-0">{t("TermsCondition.feedbackPara.text")}</p>
              <p className="mb-0">
                <strong>
                  <span className="light">
                    {t("TermsCondition.yourDevice.text")}
                  </span>
                </strong>
              </p>
              <p className="mt-0">{t("TermsCondition.yourDevicePara.text")}</p>
              <p className="mb-0">
                <strong>
                  <span className="light">
                    {t("TermsCondition.contentExperience.text")}
                  </span>
                </strong>
              </p>
              <p className="mt-0">
                {t("TermsCondition.contentExperiencePara1.text")}
              </p>
              <p>{t("TermsCondition.contentExperiencePara2.text")}</p>
              <p className="mb-0">
                <strong>
                  <span className="light">
                    {t("TermsCondition.infringementClaims.text")}
                  </span>
                </strong>
              </p>
              <p className="mt-0">
                {t("TermsCondition.infringementClaimsPara.text")}
              </p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("TermsCondition.confidentialityPolicy.text")}
              </h3>
              <ul className="list-unstyled">
                <li>{t("TermsCondition.confidentialityPolicyPara1.text")}</li>
                <li>{t("TermsCondition.confidentialityPolicyPara2.text")}</li>
              </ul>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("TermsCondition.deviceInfo.text")}
              </h3>
              <p>{t("TermsCondition.deviceInfoPara.text")}</p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("TermsCondition.legalBasis.text")}
              </h3>
              <ul className="list-unstyled">
                <li>{t("TermsCondition.legalBasisPara1.text")}</li>
                <li>{t("TermsCondition.legalBasisPara2.text")}</li>
              </ul>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("TermsCondition.autoDecision.text")}
              </h3>
              <ul className="list-unstyled">
                <li>{t("TermsCondition.autoDecisionPara1.text")}</li>
                <li>{t("TermsCondition.autoDecisionPara2.text")}</li>
                <li>{t("TermsCondition.autoDecisionPara3.text")}</li>
                <li>{t("TermsCondition.autoDecisionPara4.text")}</li>
                <li>{t("TermsCondition.autoDecisionPara5.text")}</li>
                <li>{t("TermsCondition.autoDecisionPara6.text")}</li>
              </ul>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("TermsCondition.aboutTheseTerms.text")}
              </h3>
              <p>{t("TermsCondition.aboutTheseTermsPara.text")}</p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("TermsCondition.applicableLaw.text")}
              </h3>
              <p>{t("TermsCondition.applicableLawPara.text")}</p>
            </article>
            <article className="legal-content-block">
              <h3 className="legal-content-block-title">
                {t("TermsCondition.contactUs.text")}
              </h3>
              <p>{t("TermsCondition.contactUsPara.text")}</p>
            </article>
          </div>
        </div>
      </section>
      {/* <!--Legal Content Section End--> */}
    </main>
  );
}
export default TermsAndCondition;
