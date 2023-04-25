import React from "react";
import Link from "@docusaurus/Link";
import styles from "./footer.module.css";

const Footer = () => {
  const learn = [
    {
      title: "Journey",
      to: "./docs/platform_concepts/studio/build/Flows/journeys",
    },
    {
      title: "Nodes",
      to: "./docs/platform_concepts/studio/build/nodes",
    },
    {
      title: "Intent",
      to: "./docs/platform_concepts/studio/train/intents",
    },
    {
      title: "Variables",
      to: "./docs/platform_concepts/studio/build/bot-variables",
    },
  ];

  const build = [
    { 
      title: "Building your first bot", 
      to: "./docs/cookbooks/getting_started" 
    },
    { 
      title: "Invoke an API in the bot", 
      to: "./docs/platform_concepts/studio/api/add-api" 
    },
    { 
      title: "Setup Inbox", 
      to: "./docs/platform_concepts/inbox" 
    },
    { 
      title: "Use DocCog", 
      to: "./docs/platform_concepts/studio/train/what-is-document-cognition" 
    },
  ];

  const videos = [
    { 
      title: "Getting Started", 
      to: "https://www.youtube.com/watch?v=gyB697FRLDQ" 
    },
    {
      title: "Signup and Create a bot",
      to: "https://www.youtube.com/watch?v=pT5PpSKTeb8",
    },
    {
      title: "Create a Journey",
      to: "https://www.youtube.com/watch?v=03iTV7bbrYw",
    },
    {
      title: "Using an Action Node",
      to: "https://www.youtube.com/watch?v=HVn8DAOsq3M",
    },
  ];

  return (
    <footer className={styles.custom_footer}>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <a href="https://yellow.ai/" target="_blank"><img src="img/yai-light-mode.svg" alt="logo" /></a>
          <p className={styles.description}>
            “The World’s Leading
            CX Automation Platform.”
          </p>
        </div>
        <div className={styles.list_container}>
          <h2 className={styles.title}>Learn</h2>
          <ul className={styles.list_items}>
            {learn.map((item, index) => (
              <li className={styles.item} key={index}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.list_container}>
          <h2 className={styles.title}>Build</h2>
          <ul className={styles.list_items}>
            {build.map((item, index) => (
              <li className={styles.item} key={index}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.list_container}>
          <h2 className={styles.title}>Videos</h2>
          <ul className={styles.list_items}>
            {videos.map((item, index) => (
              <li className={styles.item} key={index}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.company_info}>
        <div className={styles.info}>
          <a href="https://yellow.ai/privacy-policy" target="_blank">
            Privacy Policy
          </a>
          <span>Sitemaps</span>
          <span>FAQs</span>
          <span>
            @2022 yellow.ai, a trading division of Biotonic Labs Ltd. All
            rights reserved worldwide.
          </span>
        </div>
        <div className={styles.social_links}>
          <a href="https://www.facebook.com/YellowDotAI/" target="_blank">
            <i className="ri-facebook-fill" />
          </a>
          <a href="https://twitter.com/yellowdotai" target="_blank">
            <i className="ri-twitter-fill" />
          </a>
          <a href="https://www.instagram.com/yellowdotai/" target="_blank">
            <i className="ri-instagram-fill" />
          </a>
          <a
            href="https://www.linkedin.com/company/yellowdotai"
            target="_blank"
          >
            <i className="ri-linkedin-fill" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC-tUtoApHArcrfhRH4ufsHA"
            target="_blank"
          >
            <i className="ri-youtube-fill" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
