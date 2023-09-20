import React from "react";
import logo_dark from "../../../../public/assets/images/logo-dark.png";
import logo_white from "../../../../public/assets/images/logo-white.png";
import { Link, useNavigate } from "react-router-dom";

const SubscriptionFailedPage = () => {
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
                  <span>Home</span>
                </Link>
              </div>
              <div className="application-custom-tabs custom-tabs">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="confirmation-tab-pane"
                    role="tabpanel"
                    aria-labelledby="confirmation-tab"
                    tabIndex="0"
                  >
                    <div className="tab-pane-content-wrapper w-100 text-center">
                      <div className="in-process-control">
                        <i className="icon ">Failed</i>
                        <div className="modal-body">
                          <div className="modal-success text-center">
                            <div className="modal-body-header modal-success-header">
                              <h2 className="modal-title">
                                Your Request can't be Process
                              </h2>
                              <h3 className="modal-subtitle">REQUEST FAILED</h3>
                              <p>
                                We are regret to say that your request can't be
                                processed
                              </p>
                            </div>
                          </div>
                        </div>
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

export default SubscriptionFailedPage;
