import React from "react";
import Link from "@docusaurus/Link";
import styles from "./topicCard.module.css";

const TopicCard = ({ title, description, icon, url }) => {
  return (
    <Link className={styles.topic_link} to={url}>
      <div className={styles.topic_container}>
        <div className={styles.header}>
          <div className={styles.topic_logo}>
            <i className={icon} />
          </div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.footer}>
          <span>Learn more</span>
          <i className="ri-arrow-right-line" />

        </div>
      </div>
    </Link>
  );
};

export default TopicCard;
