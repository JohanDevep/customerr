import { createSlice } from "@reduxjs/toolkit";
export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quizQuestionsState: [
      {
        id: 1,
        questionText: "Whats is your age range?",
        answerOptions: [
          { id: 47, answerText: "16-35 years old", isCorrect: false },
          { id: 470, answerText: "36-49 years old", isCorrect: false },
          { id: 147, answerText: "50+ years old", isCorrect: false },
        ],
      },
      {
        id: 2,
        questionText: "How often do you take care of yourself?",
        answerOptions: [
          { id: 417, answerText: "Never/Rarly", isCorrect: false },
          { id: 437, answerText: "Sometimes/Occasionally", isCorrect: false },
          { id: 475, answerText: "Regularly/Frequently", isCorrect: false },
        ],
      },
      {
        id: 3,
        questionText:
          "What are the most common concerns you have about taking time for yourself?",
        answerOptions: [
          { id: 4237, answerText: "Lack of motivation", isCorrect: false },
          { id: 4217, answerText: "Lack of time", isCorrect: false },
          { id: 4754, answerText: "Lack of money", isCorrect: false },
        ],
      },
      {
        id: 4,
        questionText: "What type of self-care do you enjoy the most?",
        answerOptions: [
          { id: 407, answerText: "Beauty Care", isCorrect: false },
          { id: 77, answerText: "Physical well-being", isCorrect: false },
          { id: 477, answerText: "Emotional health", isCorrect: false },
          { id: 478, answerText: "Meeting new people", isCorrect: false },
          { id: 4799, answerText: "Travel experiences", isCorrect: false },
          { id: 4766, answerText: "Meditation", isCorrect: false },
        ],
      },
      {
        id: 5,
        questionText: "What is your motivation for taking care of yourself?",
        answerOptions: [
          {
            id: 4747,
            answerText: "Empowerment and Self-love",
            isCorrect: false,
          },
          {
            id: 4747,
            answerText: "Relaxation and Self-esteem",
            isCorrect: false,
          },
          { id: 102, answerText: "Balance and Health", isCorrect: false },
        ],
      },
      {
        id: 6,
        questionText: "In your opinion, what is Self-care?",
        answerOptions: [
          { id: 103, answerText: "Being pampered", isCorrect: false },
          { id: 104, answerText: "Be relaxed and healthy", isCorrect: false },
          { id: 105, answerText: "Discover new places", isCorrect: false },
        ],
      },
      {
        id: 7,
        questionText: "Which philosophy is more relevant to you?",
        answerOptions: [
          {
            id: 106,
            answerText: "Beauty is for everyone and is a universal language",
            isCorrect: false,
          },
          {
            id: 107,
            answerText: "Self-care is even in the smallest acts",
            isCorrect: false,
          },
          {
            id: 1087,
            answerText: "Self-care means connecting to other people and places",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  reducers: {
    quizOptionsReducer: (state, data) => {
      state.quizQuestionsState[data.payload.currentQuestion].answerOptions[
        data.payload.findElementIndex
      ].isCorrect = true;
    },
  },
});

export const { quizOptionsReducer } = quizSlice.actions;
export default quizSlice.reducer;
