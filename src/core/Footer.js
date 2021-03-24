import React from "react";
import Link from "@docusaurus/Link";
import logo from "../../static/img/ymLogo_white.png";
import styles from "./footer.module.css";

const Footer = () => {
  const documents = [
    {
      title: "Concepts",
      to: "/docs/documentation/concepts/overview",
    },
    {
      title: "Compliances",
      to: "/docs/documentation/compliances/certifications",
    },
    {
      title: "App configuration",
      to: "/docs/documentation/appConfiguration/azure-ad",
    },
    {
      title: "Channel configuration",
      to: "/docs/documentation/channelConfiguration/overview",
    },
  ];

  const cookbooks = [
    { title: "Building your first bot", to: "/docs/cookbooks/lead-gen-bot" },
    { title: "Document cognition", to: "/docs/cookbooks/document_cognition" },
    { title: "Agent augmentation", to: "/docs/cookbooks/transfer_chat" },
    { title: "Yellow messenger academy", to: "/docs/cookbooks/Academy" },
  ];

  const developer = [
    { title: "Function reference", to: "/docs/developer/app/overview" },
    { title: "API reference", to: "/docs/developer/app/apis/audience-api" },
    { title: "Event reference", to: "/docs/developer/app/events/agent-events" },
  ];

  const howtos = [
    { title: "How to create a bot?", to: "/docs/howtos/basics/create-a-bot" },
    {
      title: "How to publish a bot",
      to: "",
    },
    {
      title: "How to create a new function?",
      to: "/docs/howtos/create/cloud-function",
    },
    {
      title: "How to setup context at any point?",
      to: "/docs/howtos/context/add-contextual-response",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <img src={logo} alt="yellow messenger logo" />
          <p className={styles.description}>
            “Globalization is simply opening the free marketplace to encompass
            the entire world.”
          </p>
        </div>
        <div className={styles.list_container}>
          <h2 className={styles.title}>Documentation</h2>
          <ul className={styles.list_items}>
            {documents.map((item, index) => (
              <li className={styles.item} key={index}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.list_container}>
          <h2 className={styles.title}>Cookbooks</h2>
          <ul className={styles.list_items}>
            {cookbooks.map((item, index) => (
              <li className={styles.item} key={index}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.list_container}>
          <h2 className={styles.title}>Developer</h2>
          <ul className={styles.list_items}>
            {developer.map((item, index) => (
              <li className={styles.item} key={index}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.list_container}>
          <h2 className={styles.title}>How to’s</h2>
          <ul className={styles.list_items}>
            {howtos.map((item, index) => (
              <li className={styles.item} key={index}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.company_info}>
        <div className={styles.info}>
          <a href="https://yellowmessenger.com/privacy-policy/" target="_blank">
            Privacy Policy
          </a>
          <span>Sitemaps</span>
          <span>FAQs</span>
          <span>
            @2020 Yellow Messenger, a trading division of Biotonic Labs Ltd. All
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
