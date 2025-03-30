import React from 'react';
import styles from './styles.module.css';

export default function Pronunciation({ word, ipa }) {
  return (
    <div className={styles.pronunciationContainer}>
      <div className={styles.word}>{word}</div>
      <div className={styles.divider}>•</div>
      <div className={styles.ipa}>[{ipa}]</div>
      <button 
        className={styles.playButton}
        onClick={() => {
          // In a real implementation, this would trigger text-to-speech
          console.log(`Playing pronunciation for: ${word}`);
        }}
      >
        🔊
      </button>
    </div>
  );
} 