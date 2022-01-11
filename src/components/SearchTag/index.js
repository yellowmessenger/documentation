import React from "react";
import Link from "@docusaurus/Link";
import styles from "./searchtag.module.css";

const SearchTag = ({ title, url }) => {
  return (
    <div className={styles.searchtag_container}>
      <Link to={url} className={styles.searchtag_container__link}>
        <div className={styles.searchtag_container__content}>
          <div className={styles.searchtag_container__content__title}>
            {title}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchTag;
