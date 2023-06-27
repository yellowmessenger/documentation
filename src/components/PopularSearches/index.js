import React from "react";
import styles from "./popularsearches.module.css";
import SearchTag from "../SearchTag";
import IFrameModal from "./IFrameModal";

const PopularSearches = ({ items }) => {
  return (
    <div className={styles.popularsearches_container}>
      <div className={styles.popularsearches_container__title}>

      </div>
      <div className={styles.popularsearches_container__content_wrapper}>
        {items.map(({ title, url }) => (
          <SearchTag key={title} url={url} title={title} />
        ))}
      </div>
    </div>
  );
};

export default PopularSearches;
