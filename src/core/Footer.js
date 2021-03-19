import React from "react";
import logo from "../../static/img/ymLogo_white.png";
import styles from "./footer.module.css";

const Footer = () => {
  const documents = [
    "Concepts",
    "Compliances",
    "App configuration",
    "Channel configuration",
  ];

  const cookbooks = [
    "Building your first bot",
    "Document cognition",
    "Agent augmentation",
    "Yellow messenger academy",
  ];

  const developer = ["Function reference", "API reference", "Event reference"];

  const howtos = [
    "How to create a bot?",
    "How to publish a bot",
    "How to create a new function?",
    "How to setup context at any point?",
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
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.list_container}>
          <h2 className={styles.title}>Cookbooks</h2>
          <ul className={styles.list_items}>
            {cookbooks.map((item, index) => (
              <li className={styles.item} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.list_container}>
          <h2 className={styles.title}>Developer</h2>
          <ul className={styles.list_items}>
            {developer.map((item, index) => (
              <li className={styles.item} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.list_container}>
          <h2 className={styles.title}>How to’s</h2>
          <ul className={styles.list_items}>
            {howtos.map((item, index) => (
              <li className={styles.item} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.company_info}>
        <div className={styles.info}>
          <span>Privacy Policy</span>
          <span>Sitemaps</span>
          <span>FAQs</span>
          <span>
            @2020 Yellow Messenger, a trading division of Biotonic Labs Ltd. All
            rights reserved worldwide.
          </span>
        </div>
        <div className={styles.social_links}>
          <i className="ri-facebook-fill" />
          <i className="ri-twitter-fill" />
          <i className="ri-instagram-fill" />
          <i className="ri-linkedin-fill" />
          <i className="ri-youtube-fill" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
