import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  description: string;
  link: string;
  icon: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Introduction',
    description: 'Get started with learning German - an overview of the language and learning approach.',
    link: '/docs/introduction',
    icon: '🎯',
  },
  {
    title: 'Courses',
    description: 'Structured learning paths and courses to help you master German.',
    link: '/docs/courses',
    icon: '📚',
  },
  {
    title: 'Vocabulary',
    description: 'Essential German vocabulary lists and learning resources.',
    link: '/docs/vocabulary',
    icon: '📝',
  },
  {
    title: 'Grammar',
    description: 'Comprehensive German grammar guides and explanations.',
    link: '/docs/grammar',
    icon: '🔍',
  },
];

function Feature({title, description, link, icon}: FeatureItem) {
  return (
    <Link to={link} className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h2 className={styles.featureTitle}>{title}</h2>
      <p className={styles.featureDescription}>{description}</p>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
} 