import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';


// --- SVG Icons for Feature Cards (from lucide.dev) ---
const RocketIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.33-.04-3.1-.74-.77-2.26-.79-3.1-.04-1.26 1.5-2 2-2 2s.74-.5 2-2" />
    <path d="M17.5 2.5c1.5 1.26 2 5 2 5s-3.74-.5-5-2c-.71-.84-.7-2.33.04-3.1.74-.77 2.26-.79 3.1-.04 1.26 1.5 2 2 2 2s-.74-.5-2-2" />
    <path d="M14 10l-4 4" /><path d="M10 14l-4 4" /><path d="M20 4l-4 4" />
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

const PackageIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16.5 9.4a2 2 0 1 1 0 3.2M3.8 12a2 2 0 1 1 0 3.2M12 3.8a2 2 0 1 1 3.2 0M12 16.5a2 2 0 1 1 3.2 0"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>
    </svg>
);

const ShieldCheckIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>
    </svg>
);

const LibraryIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m16 6 4 14" /><path d="M12 6v14" /><path d="M8 8v12" /><path d="M4 4v16" />
    </svg>
);

const NewspaperIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2V4" />
        <path d="M16 8h-6" /><path d="M16 12h-6" /><path d="M12 16h-6" />
    </svg>
);


// Combined and corrected topics array
const topics = [
  {
    Icon: RocketIcon,
    title: 'Get Started',
    description: 'Set up your environment, access your account, and create your first AI Agent in minutes.',
    url: '/docs/platform_concepts/getting-started'
  },
  {
    Icon: BrainCircuitIcon,
    title: 'Build AI Agents',
    description: 'Effortlessly create powerful AI agents that think, decide, and act.',
    url: '/docs/platform_concepts/get_started/createfirstbot'
  },
   {
    Icon: LibraryIcon,
    title: 'Use Case Library',
    description: 'Explore curated solutions across industries to see how Yellow.ai can solve real business problems.',
    url: '/docs/cookbooks/getting_started'
  },
   {
    Icon: NewspaperIcon,
    title: 'API Reference',
    description: 'Access detailed specifications for every endpoint, including authentication and request/response schemas.',
    url: '/api'
  },
  {
    Icon: NewspaperIcon,
    title: 'Release Notes',
    description: 'Stay updated with the latest platform enhancements, feature releases, and bug fixes.',
    url: '/docs/updates/overview'
  },
  {
    Icon: PackageIcon,
    title: 'SDKs & Samples',
    description: 'Use our language and framework-specific SDKs and samples to integrate with your apps and services.',
    url: '/docs/platform_concepts/mobile/inbox/android',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'OpenID & OAuth 2',
    description: 'Deep-dive into all OpenID Connect (OIDC) and OAuth 2 compliant platform features using our advanced guides.',
    url: "/docs/platform_concepts/mobile/inbox/android",
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Comprehensive documentation for Yellow.ai platform."
    >
      <main className={styles.homeWrapper}>
        <header className={styles.homeHero}>
          <div className={styles.homeHeroInner}>
            <h1 className={styles.homeHeroTitle}>Agentic AI for Autonomous, Human-Like Conversations
</h1>
            <p className={styles.homeHeroSubtitle}>
              Explore comprehensive guides, API references, and step-by-step tutorials to unlock the full potential of the Yellow.ai Agentic Platform.
            </p>
          </div>
        </header>

        <section className={styles.homeSection}>
          <div className={styles.homeGrid}>
            {topics.map((topic, idx) => (
              <a key={idx} href={topic.url} className={styles.homeCard}>
                <div className={styles.homeIconWrapper}>
                  {topic.Icon ? (
                    <topic.Icon className={styles.homeIcon} />
                  ) : (
                    <img src={topic.imageUrl} alt={topic.title} className={styles.homeIcon} />
                  )}
                </div>
                <div className={styles.homeCardContent}>
                  <h2 className={styles.homeCardTitle}>{topic.title}</h2>
                  <p className={styles.homeCardDesc}>{topic.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
