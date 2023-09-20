import React from "react";
import contact_us_img from "../../../../public/assets/images/banner/contact-us.png";
import contact_us_mobile_img from "../../../../public/assets/images/banner/contact-us-mobile.png";
import htu_img from "../../../../public/assets/images/contact/htu.png";
import {
  MAIN_LOCATION,
} from "../../../global/config";
import { useTranslation } from "react-i18next";
import MapComponent from "../../map";

function ContactUs() {
  const [t] = useTranslation("common");
  const location = 0;
  return (
    <main>
      {/* <!--Page Banner Start--> */}
      <section className="page-banner contact-us-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">{t("Contact.contact.text")}</h1>
            <h2 className="page-banner-excerpt">
              {t("Contact.karismaSupportTeam.text")}
            </h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <picture>
              <source media="(min-width: 768px)" srcset={contact_us_img} />
              <img src={contact_us_mobile_img} alt="Contact Us Banner" />
            </picture>
          </div>
        </div>
        <div className="page-banner-strip">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("Contact.highQuality.text")}</li>
              <li>{t("Contact.unlimitBeautyServ.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Page Banner End--> */}
      {/* <!--Section White Start--> */}
      <section className="section-white contact-us-section-white">
        <div className="container">
          <div className="section-white-wrapper">
            <h2 className="section-white-title">
              {t("Contact.hereToHelp.text")}
            </h2>
            <div className="section-white-content hr-top section-white-content-lg">
              <p>{t("Contact.hereToHelpPara.text")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Section White End--> */}
      {/* <!--Black cards attached to White Section Start--> */}
      <section className="black-card-section black-card-contact-us">
        <div className="black-card-wrapper">
          <div className="container">
            <h2 className="visually-hidden">PROUD TO BE Cards</h2>
            <div className="black-card-grid">
              <div className="black-card-item black-card-social-impact-item">
                <div className="black-card-social-impact-icon">
                  <i className="icon icon-envelope"></i>
                </div>
                <h3 className="black-card-social-impact-title">
                  {t("Contact.emailUs.text")}
                </h3>
                <p className="black-card-social-impact-text">
                  {t("Contact.emailAddress.text")}
                </p>
              </div>
              <div className="black-card-item black-card-social-impact-item">
                <div className="black-card-social-impact-icon">
                  <i className="icon icon-phone"></i>
                </div>
                <h3 className="black-card-social-impact-title">
                  {t("Contact.callUs.text")}
                </h3>
                <p className="black-card-social-impact-text">+1 514 665 7059</p>
              </div>
              <div className="black-card-item black-card-social-impact-item">
                <div className="black-card-social-impact-icon">
                  <i className="icon icon-chatbox"></i>
                </div>
                <h3 className="black-card-social-impact-title">
                  {t("Contact.chatNow.text")}
                </h3>
                <p className="black-card-social-impact-btn" role="button">
                  {t("Contact.directChat.value")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Black cards attached to White Section End--> */}
      {/* <!--Contact Us Form Section Start--> */}
      <section className="site-form-section contact-us-form-section section-content-bordered-bg">
        <h2 className="visually-hidden">Contact Us</h2>
        <div className="container">
          <div className="section-content-bordered site-form-wrapper contact-us-form-wrapper">
            <form className="site-form contact-us-form">
              <legend className="visually-hidden">Contact Us Form</legend>
              <fieldset>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="name" className="visually-hidden">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="lastName" className="visually-hidden">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="phone" className="visually-hidden">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="email" className="visually-hidden">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label for="message" className="visually-hidden">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows="5"
                        className="form-control form-text-area"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="inscription-form-footer">
                    <button className="btn-dark">
                      {t("Contact.submit.value")}
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
            <h3 className="section-title-start">
              {t("Contact.contactUs.text")}
            </h3>
            <h3 className="section-title-end">{t("Contact.contactUs.text")}</h3>
          </div>
        </div>
      </section>
      {/* <!--Contact Us Form Section End--> */}
      {/* <!--How to use Section Start--> */}
      <section className="htu-section our-office-top-section">
        <div className="htu-banner no-overlap htu-banner-repair">
          <div className="container">
            <div className="htu-banner-wrapper">
              <div className="htu-banner-content">
                <h3 className="htu-banner-title-light">{t("Contact.our.text")}</h3>
                <h2 className="htu-banner-title-strong">
                  {t("Contact.office.text")}
                </h2>
              </div>
              <div className="htu-banner-visual">
                <img
                  loading="lazy"
                  src={htu_img}
                  alt="Our Office section Visual"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--How to use Section End--> */}
      {/* <!--Our Office Section Start--> */}
      <section className="our-office-bottom-section section-content-bordered-bg">
        <h2 className="visually-hidden">Contact Us</h2>
        <div className="container">
          <div className="section-content-bordered our-office-bottom-wrapper">
            <div className="our-office-bottom-card">
              <div className="row">
                <div className="col-map-info col-lg-6">
                  <div className="map-info-container">
                    <h3 className="map-info-title">
                      {t("Contact.mainOffice.text")}
                    </h3>
                    <ul className="map-info-list">
                      <li>
                        <i className="icon icon-location"></i>
                        <span>{t("Contact.address.text")}</span>
                      </li>
                      <li>
                        <i className="icon icon-envelope-o"></i>
                        <span>{t("Contact.email.text")}</span>
                      </li>
                      <li>
                        <i className="icon icon-clock-o"></i>
                        <span>{t("Contact.day&Time.text")}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-map col-lg-6">
                  <div className="map-container">
                    <MapComponent
                      isMarkerShown={true}
                      key={location}
                      center={{
                        lat: parseFloat(MAIN_LOCATION[location].latitude),
                        lng: parseFloat(MAIN_LOCATION[location].longitude),
                      }}
                      zoom={15}
                      places={[MAIN_LOCATION[location]]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Our Office Section End--> */}
    </main>
  );
}

export default ContactUs;
