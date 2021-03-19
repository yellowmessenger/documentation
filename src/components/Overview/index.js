import React from "react";
import styles from "./overview.module.css";

const Overview = ({ title, description }) => {
  return (
    <div className={styles.overview_container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Overview;
