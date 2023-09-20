import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Quiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [nextMover, setNextMover] = useState(false);
  const [quiz_Data, set_Quiz_Data] = useState([]);
  useEffect(() => {
    let dataQuiz = sessionStorage.getItem("quizdata");
    set_Quiz_Data(JSON.parse(dataQuiz));
  }, [nextMover, showScore]);

  const handleAnswerOptionClick = (isCorrect, id) => {
    const checkIsSelected = isCorrect.some((item) => item.isSelected === true);
    if (checkIsSelected) {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quiz_Data.length) {
        const progressBar = (id / quiz_Data.length) * 100;

        setScore(progressBar);
        setCurrentQuestion(nextQuestion);
      } else {
        navigate("/quiz/quiz-processing");
      }
    }
    setNextMover(false);
  };
  const moveBack = () => {
    if (currentQuestion > 0) {
      const nextQuestion = currentQuestion - 1;
      if (nextQuestion <= quiz_Data?.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
      setNextMover(true);
    }
  };

  const getCorrectAnswer = (ArrayOfOptions, isCorrectOption) => {
    let final_Result = [...quiz_Data];
    let optionArrayClone = [...ArrayOfOptions];
    const findElementIndex = optionArrayClone.findIndex(
      (item) => item?.uuid == isCorrectOption?.uuid
    );
    isCorrectOption.isSelected
      ? (final_Result[currentQuestion].questionOptions[
          findElementIndex
        ].isSelected = false)
      : (final_Result[currentQuestion].questionOptions[
          findElementIndex
        ].isSelected = true);
    setShowScore(!showScore);
    sessionStorage.setItem("quizdata", JSON.stringify(final_Result));
    setNextMover(true);
  };

  return (
    <main>
      <section className="quiz-intro-section">
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
            <section className="quiz-tabbed-section">
              <div className="container">
                <div className="quiz-section-wrapper">
                  <div className="link-back-wrapper">
                    <a href="#" className="link-back" onClick={() => navigate(-1)}>
                      <i className="icon icon-arrow-left"></i>
                      <span>back</span>
                    </a>
                  </div>
                  <div className="quiz-progress-header">
                    <h2 className="quiz-progress-title">
                      A TEST INSPIRED BY YOU
                    </h2>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar"
                        style={{ width: `${score}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="quiz-item">
                    <h2 className="quiz-item-title">
                      {quiz_Data[currentQuestion]?.heading}
                    </h2>
                    <div className="row">
                      <div className="col-sm-6 d-flex">
                        <ul className="quiz-item-options">
                          {quiz_Data[currentQuestion]?.questionOptions.map(
                            (options, index) => (
                              <li
                                key={Math.random() + index}
                                onClick={() =>
                                  getCorrectAnswer(
                                    quiz_Data[currentQuestion]?.questionOptions,
                                    options
                                  )
                                }
                              >
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  id={`btn-check-1 ${index}`}
                                  autoComplete="off"
                                />
                                <label
                                  className={
                                    options.isSelected
                                      ? "btn btn-primary selectedOption"
                                      : "btn btn-primary"
                                  }
                                  htmlFor={`btn-check-1 ${index}`}
                                >
                                  {options?.content}
                                </label>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="quiz-footer">
                    <button
                      className="btn-dark outline-transparent mx-2"
                      onClick={() => moveBack()}
                    >
                      Back Step
                    </button>
                    <button
                      className="btn-dark outline-transparent"
                      onClick={() =>
                        handleAnswerOptionClick(
                          quiz_Data[currentQuestion]?.questionOptions,
                          quiz_Data[currentQuestion].position
                        )
                      }
                    >
                      Next Step
                    </button>
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
export default Quiz;
