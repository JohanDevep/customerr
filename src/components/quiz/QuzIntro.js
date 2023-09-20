import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { UseFetch } from "../../api/fetch/useFetch";
import { API_END_POINTS } from "../../api/config";
function QuizIntro() {
  const getQuizData = async () => {
    try {
      const response = await UseFetch(API_END_POINTS.GET_QUIZ, null, {
        groups: "questionOptions,userAnswers",
      });
      sessionStorage.setItem("quizdata", JSON.stringify(response.questions));
    } catch (error) {}
  };
  useEffect(() => {
    getQuizData();
  }, []);
  return (
    <main>
      <section className="quiz-intro-section">
        <div className="page-wrapper bg-pi-900">
          <header className="site-header-secondary site-header-secondary-light">
            <div className="container">
              <div className="site-header-secondary-wrapper">
                <div className="site-header-secondary-logo-container">
                  <img
                    src="/assets/images/logo-white.png"
                    alt="Site Brand"
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </header>
          <main>
            <section className="quiz-intro-section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 quiz-intro-col-banner">
                    <div className="quiz-intro-banner">
                      <img
                        src="/assets/images/quiz/quiz.png"
                        alt="Quiz Intro Banner"
                        width="100%"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 quiz-intro-col-content">
                    <div className="quiz-intro-content">
                      <h1 className="quiz-intro-title">Test</h1>
                      <h2 className="quiz-intro-excerpt">Inspired by YOU</h2>
                      <div className="quiz-intro-text">
                        <p>
                          This test will help you discover the subscription that
                          best suits your needs, you will be able to know your
                          perception of self-care and learn about all the
                          quality services that you can experience at Soins
                          Karismä.
                        </p>
                      </div>
                      <Link
                        to="/quiz"
                        className="btn-white outline quiz-intro-cta"
                      >
                        Start Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </section>
    </main>
  );
}
export default QuizIntro;
