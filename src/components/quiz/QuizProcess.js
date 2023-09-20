import React from "react";
import { Link, useNavigate } from "react-router-dom";
const QuizProcess = () => {
  const navigate = useNavigate();
  setTimeout(myGreeting, 5000);

  function myGreeting() {
    navigate("/quiz/quiz-result");
  }
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
              <div className="quiz-processing">
                <div className="in-process-control">
                  <span className="loader"></span>
                  <p className="spinner-text">
                    We are processing your test results!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default QuizProcess;
