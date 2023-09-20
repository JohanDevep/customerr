import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const QuizResult = () => {
  const subscriptionList = useSelector(
    (state) => state.fetch.subscriptionsList
  );
  return (
    <div className="page-wrapper bg-pi-800">
      <header className="site-header-secondary ">
        <div className="container">
          <div className="site-header-secondary-wrapper">
            <div className="site-header-secondary-logo-container">
              <img
                src="/assets/images/logo-dark.png"
                alt="Site Brand"
                width="100%"
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="quiz-section">
          <div className="container">
            <div className="quiz-section-wrapper">
              <div className="link-back-wrapper">
                <Link to="/" className="link-back">
                  <i className="icon icon-arrow-left"></i>
                  <span>back</span>
                </Link>
              </div>
              <div className="quiz-progress-header">
                <h2 className="quiz-progress-title">A TEST INSPIRED BY YOU</h2>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div className="quiz-result-content">
                <div className="quiz-result-col-start">
                  <div className="quiz-result-thumbnail">
                    <img
                      src="/assets/images/subscriptions/unlimited-beauty.png"
                      alt="Quiz Result Thumbnail"
                    />
                  </div>
                </div>
                <div className="quiz-result-col-end">
                  <h2 className="quiz-result-title">Unlimited Beauty</h2>
                  <h3 className="quiz-result-excerpt">SUBSCRIPTION PLAN</h3>
                  <p>
                    With the membership you will have the option to choose any
                    of our offered beauty services. For only 90$ per month, you
                    will have unlimited care services whether it be hair
                    treatments, or esthetic treatments, we have it all!
                  </p>
                  <div className="quiz-result-icon-display">
                    <i className="icon icon-beauty-facial-treatment"></i>
                    <span>UNLIMITED BEAUTY SERVICES</span>
                  </div>
                  <div className="quiz-result-footer d-flex justify-content-end">
                    <Link
                      to={`/subscriptions/checkout?id=${subscriptionList[0]?.uuid}`}
                      className="btn-dark outline-transparent"
                    >
                      Shop Now
                    </Link>
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
                <img src="/assets/images/logo-white.png" alt="White Brand" />
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

export default QuizResult;
