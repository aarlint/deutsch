import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import path from 'path';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Deutsch Learning Hub',
  tagline: 'Your comprehensive guide to learning German',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://german.arlint.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'arlint', // Usually your GitHub org/user name.
  projectName: 'deutsch', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    webpack: {
      resolve: {
        alias: {
          '@site': path.resolve(__dirname),
        },
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Deutsch Learning Hub',
      logo: {
        alt: 'Deutsch Learning Hub Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Home',
        },
        {
          to: '/docs/courses',
          label: 'Courses',
          position: 'left',
        },
        {
          to: '/docs/grammar',
          label: 'Grammar',
          position: 'left',
        },
        {
          to: '/docs/vocabulary',
          label: 'Vocabulary',
          position: 'left',
        },
        {
          to: '/docs/templates',
          label: 'Templates',
          position: 'left',
        },
        {
          href: 'https://github.com/arlint/deutsch',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learning Resources',
          items: [
            {
              label: 'Courses',
              to: '/docs/courses',
            },
            {
              label: 'Grammar',
              to: '/docs/grammar',
            },
            {
              label: 'Vocabulary',
              to: '/docs/vocabulary',
            },
            {
              label: 'Templates',
              to: '/docs/templates',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/arlint/deutsch',
            },
            {
              label: 'Contribute',
              href: 'https://github.com/arlint/deutsch/blob/main/CONTRIBUTING.md',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About',
              to: '/docs/introduction',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/arlint/deutsch',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deutsch Learning Hub. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
