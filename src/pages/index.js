import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Hero from '@site/src/components/Hero/Hero';
import { getRecentUpdatesForHomePage, config } from '@site/src/utils/whatsNewData';

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
    <path d="M16.5 9.4a2 2 0 1 1 0 3.2M3.8 12a2 2 0 1 1 0 3.2M12 3.8a2 2 0 1 1 3.2 0M12 16.5a2 2 0 1 1 3.2 0"/>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <path d="m3.3 7 8.7 5 8.7-5"/>
    <path d="M12 22V12"/>
  </svg>
);

const ShieldCheckIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
    <path d="m9 12 2 2 4-4"/>
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
    url: '/docs/platform_concepts/mobile/inbox/android'
  },
  {
    Icon: ShieldCheckIcon,
    title: 'OpenID & OAuth 2',
    description: 'Deep-dive into all OpenID Connect (OIDC) and OAuth 2 compliant platform features using our advanced guides.',
    url: "/docs/platform_concepts/mobile/inbox/android",
  },
];

// What's New Updates Component
const WhatsNewUpdates = () => {
  // Get the most recent updates dynamically from What's New page data
  const allUpdates = getRecentUpdatesForHomePage(config.maxUpdates);
  
  // Filter if needed based on config
  const displayUpdates = config.showOnlyNew 
    ? allUpdates.filter(update => update.badge === 'NEW')
    : allUpdates;

  const getBadgeClass = (badge) => {
    const badgeMap = {
      'NEW': 'updateBadgeNew',
      'ENHANCEMENT': 'updateBadgeUpdated',
      'MAJOR': 'updateBadgeNew',
      'updated': 'updateBadgeUpdated',
      'security': 'updateBadgeSecurity'
    };
    return badgeMap[badge] || 'updateBadgeUpdated';
  };

  return (
    <section className="updatesSection">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="updatesHeader">
          <h3 className="updatesTitle" style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'var(--ifm-color-text-base)',
            margin: '0 0 2rem 0'
          }}>What's New</h3>
          <p className="updatesSubtitle">
            Stay up to date with the latest features, improvements, and enhancements to the Yellow.ai platform.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem', 
          maxWidth: '900px', 
          margin: '0 auto' 
        }}>
          {displayUpdates.map((update, index) => (
            <div key={index} className="updateCard" style={{
              background: 'var(--ifm-color-background-base)',
              border: '1px solid var(--ifm-color-emphasis-200)',
              borderRadius: '12px',
              padding: '1.5rem',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              animationDelay: `${index * 100}ms`,
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = 'var(--ifm-color-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-200)';
            }}
            onClick={() => window.location.href = update.link}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: update.badge === 'NEW' ? 'linear-gradient(90deg, #10b981, #059669)' : 'linear-gradient(90deg, #3b82f6, #2563eb)',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.3s ease'
              }}></div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                gap: '1rem'
              }}>
                <div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--ifm-color-text-secondary)',
                    fontWeight: '500'
                  }}>{update.date}</div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--ifm-color-text-secondary)',
                    fontFamily: 'ui-monospace, "SF Mono", "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                    background: 'var(--ifm-color-emphasis-100)',
                    padding: '0.125rem 0.375rem',
                    borderRadius: '4px',
                    marginTop: '0.25rem',
                    display: 'inline-block'
                  }}>Latest</div>
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  background: update.badge === 'NEW' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #3b82f6, #2563eb)',
                  color: 'white'
                }}>{update.type}</div>
              </div>
              
              <div>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  margin: '0 0 0.5rem 0',
                  color: 'var(--ifm-color-text-base)',
                  lineHeight: '1.4'
                }}>{update.title}</h4>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--ifm-color-text-secondary)',
                  margin: '0 0 1rem 0',
                  lineHeight: '1.4'
                }}>{update.description}</p>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                marginTop: 'auto'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  color: 'var(--ifm-color-text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>{update.category}</div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: 'var(--ifm-color-primary)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--ifm-color-primary-dark)';
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--ifm-color-primary)';
                  e.target.style.textDecoration = 'none';
                }}
                >
                  Learn more
                  <svg style={{ width: '12px', height: '12px', transition: 'transform 0.2s ease' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="updatesFooter">
          <a href="/docs/updates/overview" className="viewAllUpdates">
            View All Updates
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Yellow.ai Documentation"
      description="Comprehensive documentation for Yellow.ai platform - Agentic AI for Autonomous, Human-Like Conversations"
    >
      {/* Hero Section - now contains your preferred content */}
      <Hero />
      
      {/* What's New Updates Section */}
      <WhatsNewUpdates />
      
      {/* Explore More Topics Section 
      <main className={styles.homeWrapper} style={{ paddingTop: '2rem' }}>
        <section className={styles.homeSection}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', fontWeight: '600' }}>
              Explore More Topics
            </h2>
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
                    <h3 className={styles.homeCardTitle}>{topic.title}</h3>
                    <p className={styles.homeCardDesc}>{topic.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main> */}
      
    </Layout>
  );
}