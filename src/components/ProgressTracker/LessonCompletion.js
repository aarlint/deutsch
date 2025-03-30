import React from 'react';
import { useProgress } from './ProgressContext';
import styles from './styles.module.css';

export default function LessonCompletion({ lessonId, title }) {
  const { progress, markLessonComplete } = useProgress();
  const isCompleted = progress.completedLessons.includes(lessonId);

  return (
    <div className={`${styles.lessonStatus} ${isCompleted ? styles.completed : styles.inProgress}`}>
      <span>{isCompleted ? '✅' : '📝'}</span>
      <span>{title}</span>
      {!isCompleted && (
        <button
          onClick={() => markLessonComplete(lessonId)}
          className="button button--primary button--sm"
          style={{ marginLeft: 'auto' }}
        >
          Mark Complete
        </button>
      )}
      {isCompleted && (
        <span style={{ marginLeft: 'auto' }}>
          Completed
        </span>
      )}
    </div>
  );
} 