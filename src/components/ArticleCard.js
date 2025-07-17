// src/components/ArticleCard.js

import React from 'react';
import Link from '@docusaurus/Link';
import styles from './ArticleCard.module.css';

// --- A comprehensive set of SVG icons for your cards ---

const BookOpenIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
);

const CodeIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
);

const NewspaperIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2V4" />
        <path d="M16 8h-6" /><path d="M16 12h-6" /><path d="M12 16h-6" />
    </svg>
);

const RobotIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
    </svg>
);

const RocketIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.33-.04-3.1-.74-.77-2.26-.79-3.1-.04-1.26 1.5-2 2-2 2s.74-.5 2-2" />
    <path d="M17.5 2.5c1.5 1.26 2 5 2 5s-3.74-.5-5-2c-.71-.84-.7-2.33.04-3.1.74-.77 2.26-.79 3.1-.04 1.26 1.5 2 2 2 2s-.74-.5-2-2" />
    <path d="M14 10l-4 4" /><path d="M10 14l-4 4" /><path d="M20 4l-4 4" />
  </svg>
);

const PackageIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16.5 9.4a2 2 0 1 1 0 3.2M3.8 12a2 2 0 1 1 0 3.2M12 3.8a2 2 0 1 1 3.2 0M12 16.5a2 2 0 1 1 3.2 0"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>
    </svg>
);

const ShieldCheckIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
    </svg>
);

const LibraryIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m16 6 4 14" /><path d="M12 6v14" /><path d="M8 8v12" /><path d="M4 4v16" />
    </svg>
);

const HelpCircleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
);

const WrenchIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
);

const UsersIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const BrainCircuitIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.5 3.765 4 4 0 0 0 .5 7.622" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.5 3.765 4 4 0 0 1-.5 7.622" />
        <path d="M15 13a3 3 0 1 0-6 0" />
        <path d="M12 22v-3" />
        <path d="M12 5V2" />
        <path d="M5 18H3" />
        <path d="M19 18h2" />
    </svg>
);


// Map of icon names to their respective components
const iconMap = {
    book: BookOpenIcon,
    code: CodeIcon,
    newspaper: NewspaperIcon,
    robot: RobotIcon,
    rocket: RocketIcon,
    package: PackageIcon,
    shield: ShieldCheckIcon,
    library: LibraryIcon,
    help: HelpCircleIcon,
    wrench: WrenchIcon,
    users: UsersIcon,
    community: UsersIcon, // Added for Community
    aiAgent: BrainCircuitIcon, // Added for AI Agent
};


export default function ArticleCard({ href, icon, title, description }) {
  const IconComponent = iconMap[icon] || BookOpenIcon; // Default to BookOpenIcon if not found

  return (
    <Link href={href} className={styles.inArticleCard}>
      <div className={styles.inArticleCardIconWrapper}>
        <IconComponent className={styles.inArticleCardIcon} />
      </div>
      <div className={styles.inArticleCardContent}>
        <h4 className={styles.inArticleCardTitle}>{title}</h4>
        <p className={styles.inArticleCardDescription}>{description}</p>
      </div>
    </Link>
  );
}
