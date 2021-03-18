import React from "react";
import styles from "./topics.module.css";

const Topics = ({ title, description, icon }) => {
  return (
    <div className={styles.topic_container}>
      <div className={styles.header}>
        <div className={styles.topic_logo}>
          <i className={icon} />
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.footer}>
        <span>Read resource</span>
        <i className="ri-arrow-right-line" />
      </div>
    </div>
  );
};

export default Topics;
