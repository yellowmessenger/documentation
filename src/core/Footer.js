import React from "react";
import logo from "../../static/img/logo.png";
import styles from "./footer.module.css";

const Footer = () => {
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
            <li className={styles.item}>Concepts</li>
            <li className={styles.item}>Compliances</li>
            <li className={styles.item}>App configuration</li>
            <li className={styles.item}>Channel configuration</li>
          </ul>
        </div>
        <div className={styles.list_container}>
          <h2 className={styles.title}>Cookbooks</h2>
          <ul className={styles.list_items}>
            <li className={styles.item}>Building your first bot</li>
            <li className={styles.item}>Document cognition</li>
            <li className={styles.item}>Agent augmentation</li>
            <li className={styles.item}>Yellow messenger academy</li>
          </ul>
        </div>
        <div className={styles.list_container}>
          <h2 className={styles.title}>Developer</h2>
          <ul className={styles.list_items}>
            <li className={styles.item}>Function reference</li>
            <li className={styles.item}>API reference</li>
            <li className={styles.item}>Event reference</li>
          </ul>
        </div>
        <div className={styles.list_container}>
          <h2 className={styles.title}>How to’s</h2>
          <ul className={styles.list_items}>
            <li className={styles.item}>How to create a bot?</li>
            <li className={styles.item}>How to publish a bot</li>
            <li className={styles.item}>How to create a new function?</li>
            <li className={styles.item}>How to setup context at any point?</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
