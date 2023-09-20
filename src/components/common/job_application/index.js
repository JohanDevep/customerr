import React from "react";
import logo_dark from "../../../../public/assets/images/logo-dark.png";
import personal_info from "../../../../public/assets/images/application/personal-info.png";
import upload_img from "../../../../public/assets/images/application/upload.png";
import logo_white from "../../../../public/assets/images/logo-white.png";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const job_application = () => {
  const [t] = useTranslation("common");
  const navigate = useNavigate();
  return (
    <div className="page-wrapper bg-pi-800">
      <header className="site-header-secondary ">
        <div className="container">
          <div className="site-header-secondary-wrapper">
            <div className="site-header-secondary-logo-container">
              <img src={logo_dark} alt="Site Brand" width="100%" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="application-tabbed-section">
          <div className="container">
            <div className="application-tabbed-content-wrapper">
              <div className="link-back-wrapper">
                <Link
                  onClick={() => {
                    navigate(-1);
                  }}
                  className="link-back"
                >
                  <i className="icon icon-arrow-left"></i>
                  <span>{t("JobApplication.back.value")}</span>
                </Link>
              </div>
              <div className="application-custom-tabs custom-tabs">
                <ul
                  className="nav nav-tabs nav-tabs-justified"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="personal-info-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#personal-info-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="personal-info-tab-pane"
                      aria-selected="true"
                    >
                      {t("JobApplication.personInfo.value")}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="upload-files-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#upload-files-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="upload-files-tab-pane"
                      aria-selected="false"
                    >
                      {t("JobApplication.uploadFiles.value")}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="processing-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#processing-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="processing-tab-pane"
                      aria-selected="false"
                    >
                      {t("JobApplication.processing.value")}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="confirmation-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#confirmation-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="confirmation-tab-pane"
                      aria-selected="false"
                    >
                      {t("JobApplication.confirmation.value")}
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="personal-info-tab-pane"
                    role="tabpanel"
                    aria-labelledby="personal-info-tab"
                    tabIndex="0"
                  >
                    <div className="tab-pane-content-wrapper">
                      <div className="row">
                        <div className="col-lg-5 application-tab-thumbnail-col">
                          <div className="application-tab-thumbnail-wrapper">
                            <img
                              src={personal_info}
                              alt="Personal Information Tab Thumbnail"
                              width="100%"
                            />
                          </div>
                        </div>
                        <div className="col-lg-7 application-tab-form-col">
                          <div className="application-tab-form-wrapper">
                            <form className="application-form">
                              <legend>
                                {t("JobApplication.personalInfo.text")}
                              </legend>
                              <fieldset>
                                <div className="row">
                                  <div className="col-12">
                                    <div className="form-group">
                                      <label
                                        for="fullName"
                                        className="form-label"
                                      >
                                        {t("JobApplication.fullName.text")}
                                      </label>
                                      <input
                                        id="fullName"
                                        type="text"
                                        className="form-control"
                                        placeholder="Sarah Parker"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6 col-xxl-7">
                                    <div className="form-group">
                                      <label for="email" className="form-label">
                                        {t("JobApplication.email.text")}
                                      </label>
                                      <input
                                        id="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="sarah@example.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6 col-xxl-5">
                                    <div className="form-group">
                                      <label for="phone" className="form-label">
                                        {t("JobApplication.phone.text")}
                                      </label>
                                      <input
                                        id="phone"
                                        type="tel"
                                        className="form-control"
                                        placeholder="555 444 5555"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="application-form-footer">
                                      <button className="btn-dark">
                                        {t("JobApplication.next.value")}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="upload-files-tab-pane"
                    role="tabpanel"
                    aria-labelledby="upload-files-tab"
                    tabIndex="0"
                  >
                    <div className="tab-pane-content-wrapper">
                      <div className="row">
                        <div className="col-lg-5 application-tab-thumbnail-col">
                          <div className="application-tab-thumbnail-wrapper">
                            <img
                              src={upload_img}
                              alt="Upload Files Tab Thumbnail"
                              width="100%"
                            />
                          </div>
                        </div>
                        <div className="col-lg-7 application-tab-form-col">
                          <div className="application-tab-form-wrapper">
                            <form className="application-form">
                              <legend>UPLOAD FILES</legend>
                              <fieldset>
                                <div className="row">
                                  <div className="col-12">
                                    <div className="form-group">
                                      <label for="addCv" className="form-label">
                                        Resume/CV
                                      </label>
                                      <div className="upload-file-control">
                                        <input
                                          type="text"
                                          id="addCv"
                                          readonly
                                          className="form-control"
                                          placeholder="Attach you CV (.PDF)"
                                        />
                                        <button className="btn-dark outline-transparent">
                                          Upload file
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="form-group">
                                      <label
                                        for="coverLetter"
                                        className="form-label"
                                      >
                                        Resume/CV
                                      </label>
                                      <div className="upload-file-control">
                                        <input
                                          type="text"
                                          id="coverLetter"
                                          readonly
                                          className="form-control"
                                          placeholder="Attach you CV (.PDF)"
                                        />
                                        <button className="btn-dark outline-transparent">
                                          Upload file
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="application-form-footer">
                                      <button className="btn-dark">Next</button>
                                    </div>
                                  </div>
                                </div>
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="processing-tab-pane"
                    role="tabpanel"
                    aria-labelledby="processing-tab"
                    tabIndex="0"
                  >
                    <div className="tab-pane-content-wrapper w-100 text-center">
                      <div className="in-process-control">
                        <span className="loader"></span>
                        <p className="spinner-text">
                          We are processing your results!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="confirmation-tab-pane"
                    role="tabpanel"
                    aria-labelledby="confirmation-tab"
                    tabIndex="0"
                  >
                    <div className="tab-pane-content-wrapper w-100 text-center">
                      <div className="in-process-control">
                        <i className="icon icon-check-circle"></i>
                        <p className="spinner-text">Successful Application</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-secondary-content">
          <div className="container">
            <div className="footer-secondary-col-center">
              <div className="footer-secondary-logo-container">
                <img src={logo_white} alt="White Brand" />
              </div>
            </div>
            <div className="footer-secondary-col-end">
              <p>2022 ©KARISMA. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default job_application;
