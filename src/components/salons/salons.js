import React, { useState } from "react";
import {
  InitialeState,
  SalonRegisterationSchema,
} from "../../helpers/validations/salons";
import { UseClient } from "../../api/agent";
import { API_END_POINTS, API_STATUS_CODE } from "../../api/config";
import karisma_salons_img from "../../../public/assets/images/banner/karisma-salons.png";
import karisma_salons_mobile_img from "../../../public/assets/images/banner/karisma-salons-mobile.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Loading from "../../api/loading";
import { useTranslation } from "react-i18next";

function Salons() {
  const [t] = useTranslation("common");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (data) => {
    setLoading(true);
    let client = await UseClient();
    client[API_END_POINTS.SALON_REGISTER](null, data)
      .then((response) => {
        if (response.data.statusCode === API_STATUS_CODE.SIGNUP_SUCCESS) {
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  return (
    <main>
      <Loading active={loading} />
      <section className="page-banner social-impact-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">
              {t("BecomeSalon.becomeSalon.text")}
            </h1>
            <h2 className="page-banner-excerpt">
              {t("BecomeSalon.allYouNeed.text")}
            </h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <picture>
              <source media="(min-width: 768px)" srcset={karisma_salons_img} />
              <img
                src={karisma_salons_mobile_img}
                alt="Karisma Salons Banner"
              />
            </picture>
          </div>
        </div>
        <div className="page-banner-strip bg-bl-600">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("BecomeSalon.highQuality.text")}</li>
              <li>{t("BecomeSalon.vegan.text")}</li>
              <li>{t("BecomeSalon.crueltyFree.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--White Section Start--> */}
      <section className="section-white section-white-karisma-salons">
        <div className="container">
          <div className="section-white-wrapper">
            <h2 className="section-white-title">
              {t("BecomeSalon.becomeSoins.text")}
              <br />
              {t("BecomeSalon.karismaSalon.text")}
            </h2>
            <div className="section-white-content hr-top section-white-content-xl">
              <p>{t("BecomeSalon.karismaSalonPara.text")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--White Section End--> */}
      <section className="black-card-section black-card-karisma-salons">
        <div className="black-card-wrapper">
          <div className="container">
            <h2 className="visually-hidden">Becoming a soins cards</h2>
            <div className="black-card-grid">
              <div className="black-card-item black-card-karisma-salons-item">
                <div className="black-card-karisma-salons-content-wrapper">
                  <h3 className="black-card-karisma-salons-title">
                    {t("BecomeSalon.simplifiedManagment.text")}
                  </h3>
                  <p className="black-card-karisma-salons-text">
                    {t("BecomeSalon.simplifiedManagmentPara.text")}
                  </p>
                  <p className="black-card-karisma-salons-bottom-text">
                    {t("BecomeSalon.optimize.text")} &amp;{" "}
                    {t("BecomeSalon.simplify.text")}
                  </p>
                </div>
              </div>
              <div className="black-card-item black-card-karisma-salons-item">
                <div className="black-card-karisma-salons-content-wrapper">
                  <h3 className="black-card-karisma-salons-title">
                    {t("BecomeSalon.clientAcquistion.text")} &amp;{" "}
                    {t("BecomeSalon.retention.text")}
                  </h3>
                  <p className="black-card-karisma-salons-text">
                    {t("BecomeSalon.retentionPara.text")}
                  </p>
                  <p className="black-card-karisma-salons-bottom-text">
                    {t("BecomeSalon.acquire.text")} &amp;{" "}
                    {t("BecomeSalon.retain.text")}
                  </p>
                </div>
              </div>
              <div className="black-card-item black-card-karisma-salons-item">
                <div className="black-card-karisma-salons-content-wrapper">
                  <h3 className="black-card-karisma-salons-title">
                    {t("BecomeSalon.education.text")} &amp;{" "}
                    {t("BecomeSalon.community.text")}
                  </h3>
                  <p className="black-card-karisma-salons-text">
                    {t("BecomeSalon.communityPara.text")}
                  </p>
                  <p className="black-card-karisma-salons-bottom-text">
                    {t("BecomeSalon.stayConnected.text")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-section section-content-bordered-bg">
        <h2 className="visually-hidden">INSCRIPTION</h2>
        <div className="container">
          <div className="section-content-bordered inscription-form-wrapper">
            <Formik
              initialValues={InitialeState}
              validationSchema={SalonRegisterationSchema}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              <Form>
                <div className="inscription-form">
                  <legend className="visually-hidden">Inscription Form</legend>
                  <fieldset>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name" className="visually-hidden">
                            Name
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder={t("BecomeSalon.name.text")}
                            name="name"
                          />
                          <span className="text-danger mt-4">
                            <ErrorMessage name="name" />
                          </span>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="lastName" className="visually-hidden">
                            First Name
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder={t("BecomeSalon.firstName.text")}
                            name="firstName"
                          />
                          <span className="text-danger mt-4">
                            <ErrorMessage name="firstName" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="lastName" className="visually-hidden">
                            Last Name
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder={t("BecomeSalon.lastName.text")}
                            name="lastName"
                          />
                          <span className="text-danger mt-4">
                            <ErrorMessage name="lastName" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email" className="visually-hidden">
                            Email
                          </label>
                          <Field
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder={t("BecomeSalon.email.text")}
                            name="email"
                          />
                          <span className="text-danger mt-4">
                            <ErrorMessage name="email" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor="otherEmail"
                            className="visually-hidden"
                          >
                            Other Email
                          </label>
                          <Field
                            type="email"
                            className="form-control"
                            id="otherEmail"
                            placeholder={t("BecomeSalon.otherEmail.text")}
                            name="otherEmail"
                          />
                          <span className="text-danger mt-4">
                            <ErrorMessage name="otherEmail" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="phone" className="visually-hidden">
                            Phone
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder={t("BecomeSalon.phone.text")}
                            name="phone"
                          />
                          <span className="text-danger mt-4">
                            <ErrorMessage name="phone" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="phone" className="visually-hidden">
                            Mobile Phone
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder={t("BecomeSalon.mobilePhone.text")}
                            name="mobilePhone"
                          />
                          <span className="text-danger mt-4">
                            <ErrorMessage name="mobilePhone" />
                          </span>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor="salonsCount"
                            className="visually-hidden"
                          >
                            HOW MANY SALONS DO YOU HAVE?
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="salonsCount"
                            placeholder={t("BecomeSalon.howmanySalons.text")}
                            name="noOfSalons"
                          />
                          <span className="text-danger mt-4">
                            <ErrorMessage name="noOfSalons" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label
                            htmlFor="salonsDescription"
                            className="visually-hidden"
                          >
                            DESCRIBE YOUR SALON
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="salonsDescription"
                            placeholder={t("BecomeSalon.describeSalon.text")}
                            name="describeSalon"
                          />
                          <span className="text-danger mt-4">
                            <ErrorMessage name="describeSalon" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor="chairsCount"
                            className="visually-hidden"
                          >
                            Number of Chairs
                          </label>
                          <Field
                            type="number"
                            className="form-control"
                            id="chairsCount"
                            placeholder={t("BecomeSalon.noOfChairs.text")}
                            name="noOfChairs"
                          />
                          <span className="text-danger mt-4">
                            <ErrorMessage name="noOfChairs" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor="employesCount"
                            className="visually-hidden"
                          >
                            Number of Employes
                          </label>
                          <Field
                            type="number"
                            className="form-control"
                            id="employesCount"
                            placeholder={t("BecomeSalon.noOfEmployees.text")}
                            name="noOfEmployees"
                          />
                          <span className="text-danger mt-4">
                            <ErrorMessage name="noOfEmployees" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label
                            htmlFor="servicesDescription"
                            className="visually-hidden"
                          >
                            WHAT SERVICES DO YOU PROVIDE?
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="servicesDescription"
                            placeholder={t("BecomeSalon.whatService.text")}
                            name="servicesProvide"
                          />
                          <span className="text-danger mt-4">
                            <ErrorMessage name="servicesProvide" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor="yourLocation"
                            className="visually-hidden"
                          >
                            WHERE ARE YOU LOCATED?
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="yourLocation"
                            placeholder={t("BecomeSalon.whereLocated.text")}
                            name="location"
                          />
                          <span className="text-danger mt-4">
                            <ErrorMessage name="location" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor="approxRevenue"
                            className="visually-hidden"
                          >
                            APPROX. MONTHLY REVENUE
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="approxRevenue"
                            placeholder={t("BecomeSalon.approxRevenue.text")}
                            name="approxMonthlyRevenue"
                          />
                          <span className="text-danger mt-4">
                            <ErrorMessage name="approxMonthlyRevenue" />
                          </span>
                        </div>
                      </div>
                      <div className="inscription-form-footer">
                        <button className="btn-dark">
                          {t("BecomeSalon.submit.value")}
                        </button>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </Form>
            </Formik>
            <h3 className="section-title-start">
              {t("BecomeSalon.inscription.text")}
            </h3>
            <h3 className="section-title-end">
              {t("BecomeSalon.inscription.text")}
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Salons;
