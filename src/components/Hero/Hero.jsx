import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { DocSearch } from '@docsearch/react';
import { useThemeConfig } from '@docusaurus/theme-common';
import styles from './Hero.module.css';

const Hero = () => {
  const { algolia } = useThemeConfig();

  const quickStartCards = [
    {
      title: "Sign Up & Create an Account",
      description: "Get into the platform as quickly as possible with your new account",
      icon: "👤",
      link: "/docs/platform_concepts/getting-started",
      step: "1"
    },
    {
      title: "Understand the Core Concepts",
      description: "Get a 2-minute overview of the main platform components",
      icon: "🧠",
      link: "/docs/platform_concepts/getting-started",
      step: "2"
    },
    {
      title: "Build Your First AI Agent",
      description: "Follow our 'Hello, World' guide to create your first agent",
      icon: "🤖",
      link: "/docs/platform_concepts/get_started/createfirstbot",
      step: "3"
    }
  ];




  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Hero Content */}
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Documentation</span>
          </div>
          
          <h1 className={styles.title}>
            <span className={styles.gradient}>Agentic AI</span> for Autonomous,
            <br />
            Human-Like Conversations
          </h1>
          
          <p className={styles.subtitle}>
            Explore comprehensive guides, API references, and step-by-step tutorials 
            to unlock the full potential of the Yellow.ai Agentic Platform.
          </p>

          {/* Search Bar with Algolia DocSearch */}
          <div className={styles.searchContainer}>
            {algolia && (
              <DocSearch
                appId={algolia.appId}
                apiKey={algolia.apiKey}
                indexName={algolia.indexName}
                placeholder="Search documentation..."
                searchParameters={algolia.searchParameters}
              />
            )}
          </div>

          {/* Quick Setup Steps */}
          <div className={styles.quickStart}>
            <h3 className={styles.quickStartTitle}>Quick Setup</h3>
            <div className={styles.cardsGrid}>
              {quickStartCards.map((card, index) => (
                <Link
                  key={index}
                  to={card.link}
                  className={styles.card}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={styles.cardStep}>{card.step}</div>
                  <div className={styles.cardIcon}>{card.icon}</div>
                  <div className={styles.cardContent}>
                    <h4 className={styles.cardTitle}>{card.title}</h4>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </div>
                  <svg className={styles.cardArrow} viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>


          {/* Code Preview */}
          
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundGrid}></div>
      <div className={styles.backgroundGradient}></div>
    </section>
  );
};

export default Hero;

