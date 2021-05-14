import React from "react";
import Link from "@docusaurus/Link";
import styles from "./topics.module.css";

const Topics = ({ title, description, icon, url }) => {
  return (
    <div className={styles.topic_container}>
      <div className={styles.header}>
        <div className={styles.topic_logo}>
          <i className={icon} />
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <Link className={styles.footer} to={url}>
        <span>Read resource</span>
        <i className="ri-arrow-right-line" />
      </Link>
    </div>
  );
};

export default Topics;
