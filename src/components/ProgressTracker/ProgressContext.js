import React, { createContext, useState, useContext, useEffect } from 'react';

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('courseProgress');
      return saved ? JSON.parse(saved) : {
        completedLessons: [],
        quizScores: {},
        exerciseProgress: {},
        totalProgress: 0
      };
    }
    return {
      completedLessons: [],
      quizScores: {},
      exerciseProgress: {},
      totalProgress: 0
    };
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('courseProgress', JSON.stringify(progress));
    }
  }, [progress]);

  const markLessonComplete = (lessonId) => {
    setProgress(prev => ({
      ...prev,
      completedLessons: [...new Set([...prev.completedLessons, lessonId])],
      totalProgress: calculateTotalProgress([...new Set([...prev.completedLessons, lessonId])])
    }));
  };

  const saveQuizScore = (quizId, score, total) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [quizId]: { score, total, percentage: (score / total) * 100 }
      }
    }));
  };

  const updateExerciseProgress = (exerciseId, completed) => {
    setProgress(prev => ({
      ...prev,
      exerciseProgress: {
        ...prev.exerciseProgress,
        [exerciseId]: completed
      }
    }));
  };

  const calculateTotalProgress = (completedLessons) => {
    // You can adjust this based on total number of lessons
    const totalLessons = 20; // Example total
    return Math.round((completedLessons.length / totalLessons) * 100);
  };

  const resetProgress = () => {
    setProgress({
      completedLessons: [],
      quizScores: {},
      exerciseProgress: {},
      totalProgress: 0
    });
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      markLessonComplete,
      saveQuizScore,
      updateExerciseProgress,
      resetProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
} 