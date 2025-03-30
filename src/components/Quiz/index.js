import React, { useState } from 'react';
import { useProgress } from '../ProgressTracker/ProgressContext';
import styles from './styles.module.css';

export default function Quiz({ questions, quizId }) {
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const { saveQuizScore } = useProgress();

  const handleAnswer = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const handleSubmit = () => {
    const score = calculateScore();
    saveQuizScore(quizId, score, questions.length);
    setShowResults(true);
  };

  return (
    <div className={styles.quizContainer}>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className={styles.questionContainer}>
          <h4 className={styles.questionText}>{question.question}</h4>
          <div className={styles.optionsContainer}>
            {question.options.map((option, optionIndex) => (
              <button
                key={optionIndex}
                className={`${styles.optionButton} ${
                  answers[questionIndex] === optionIndex ? styles.selected : ''
                } ${
                  showResults
                    ? optionIndex === question.correctAnswer
                      ? styles.correct
                      : answers[questionIndex] === optionIndex
                      ? styles.incorrect
                      : ''
                    : ''
                }`}
                onClick={() => handleAnswer(questionIndex, optionIndex)}
                disabled={showResults}
              >
                {option}
              </button>
            ))}
          </div>
          {showResults && (
            <div className={styles.explanation}>
              {answers[questionIndex] === question.correctAnswer ? (
                <p className={styles.correct}>✅ Correct!</p>
              ) : (
                <p className={styles.incorrect}>
                  ❌ The correct answer was: {question.options[question.correctAnswer]}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
      
      <div className={styles.quizControls}>
        {!showResults ? (
          <button
            className={styles.submitButton}
            onClick={handleSubmit}
            disabled={answers.includes(null)}
          >
            Check Answers
          </button>
        ) : (
          <div className={styles.results}>
            <p>Your score: {calculateScore()} out of {questions.length}</p>
            <button
              className={styles.resetButton}
              onClick={() => {
                setAnswers(new Array(questions.length).fill(null));
                setShowResults(false);
              }}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 