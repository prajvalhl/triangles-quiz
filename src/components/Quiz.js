import React, { useState } from "react";
import { quizData } from "../quiz-data";

export function Quiz() {
  const [totalScore, setTotalScore] = useState(0);
  const quizComponents = quizData.map((quiz) => (
    <div key={quiz.id}>
      <p></p>
    </div>
  ));
  return (
    <div>
      <h1>Quiz on Triangles</h1>
      <h3>You'll gain one point for each correct answer</h3>
      <h2>Under Development ⚠️.</h2>
    </div>
  );
}
