import React from 'react';
import { useProgress } from './ProgressContext';
import styles from './styles.module.css';

export default function ProgressBar() {
  const { progress } = useProgress();

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressInfo}>
        <span>Course Progress</span>
        <span>{progress.totalProgress}%</span>
      </div>
      <div className={styles.progressBarOuter}>
        <div 
          className={styles.progressBarInner}
          style={{ width: `${progress.totalProgress}%` }}
        />
      </div>
      <div className={styles.progressStats}>
        <div className={styles.stat}>
          <span>Lessons Completed</span>
          <span>{progress.completedLessons.length}</span>
        </div>
        <div className={styles.stat}>
          <span>Quizzes Taken</span>
          <span>{Object.keys(progress.quizScores).length}</span>
        </div>
        <div className={styles.stat}>
          <span>Avg. Quiz Score</span>
          <span>
            {Object.values(progress.quizScores).length > 0
              ? Math.round(
                  Object.values(progress.quizScores).reduce(
                    (acc, curr) => acc + curr.percentage,
                    0
                  ) / Object.values(progress.quizScores).length
                )
              : 0}%
          </span>
        </div>
      </div>
    </div>
  );
} 