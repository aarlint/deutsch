import React from 'react';
import styles from './styles.module.css';

export default function AudioPlayer({ src }) {
  return (
    <div className={styles.audioContainer}>
      <audio controls className={styles.audioPlayer}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button 
        className={styles.downloadButton}
        onClick={() => window.open(src, '_blank')}
      >
        ⬇️ Download
      </button>
    </div>
  );
} 