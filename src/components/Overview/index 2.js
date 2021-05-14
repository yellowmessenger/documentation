import React from "react";
import Link from "@docusaurus/Link";
import styles from "./overview.module.css";

const Overview = ({ title, description, path }) => {
  return (
    <Link to={path} className={styles.overview_container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </Link>
  );
};

export default Overview;
