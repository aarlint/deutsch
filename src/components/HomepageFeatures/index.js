import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Beginner Friendly',
    description: 'Start from the basics with clear explanations and plenty of examples. Perfect for those just starting their German journey.',
    icon: '🎯',
  },
  {
    title: 'Interactive Learning',
    description: 'Practice with exercises, quizzes, and real-world examples. Learn by doing, not just reading.',
    icon: '🎮',
  },
  {
    title: 'Grammar Made Simple',
    description: 'Complex German grammar broken down into easy-to-understand lessons with practical examples.',
    icon: '📚',
  },
  {
    title: 'Community Support',
    description: 'Join our community of learners, share experiences, and practice together.',
    icon: '👥',
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <h2 className={styles.featureTitle}>{title}</h2>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
} 