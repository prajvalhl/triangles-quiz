import React, { useState } from "react";
import { quizData } from "../quiz-data";

export function Quiz() {
  const [totalScore, setTotalScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const quizComponents = quizData.map((quiz) => (
    <div key={quiz.id} className="quiz">
      <p>{quiz.question}</p>
      <div>
        <input
          type="radio"
          value={quiz.option1}
          name={quiz.id}
          onChange={(e) => {
            if (e.target.value === quiz.correctAnswer) {
              setTotalScore((prevScore) => prevScore + 1);
            } else {
              setTotalScore((prevScore) => prevScore + 0);
            }
          }}
        />{" "}
        {quiz.option1}
        <input
          type="radio"
          value={quiz.option2}
          name={quiz.id}
          onChange={(e) => {
            if (e.target.value === quiz.correctAnswer) {
              setTotalScore((prevScore) => prevScore + 1);
            } else {
              setTotalScore((prevScore) => prevScore + 0);
            }
          }}
        />{" "}
        {quiz.option2}
        <input
          type="radio"
          value={quiz.option3}
          name={quiz.id}
          onChange={(e) => {
            if (e.target.value === quiz.correctAnswer) {
              setTotalScore((prevScore) => prevScore + 1);
            } else {
              setTotalScore((prevScore) => prevScore + 0);
            }
          }}
        />{" "}
        {quiz.option3}
      </div>
    </div>
  ));
  return (
    <div>
      <h1>Quiz on Triangles</h1>
      <h3>You'll gain one point for each correct answer</h3>
      {quizComponents}
      <button
        className="btn-submit"
        onClick={() => {
          setShowScore(true);
        }}
      >
        Submit
      </button>
      <div className="div-output">
        <p>Result 👇</p>
        <p style={{ display: showScore ? "block" : "none" }}>
          You Scored: {totalScore}
        </p>
      </div>
    </div>
  );
}
