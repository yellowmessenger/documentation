import React from "react";
import styles from "./stillnotfind.module.css";

const StillNotFind = () => {
  return (
    <section className={styles.not_find_container}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Still not finding what you need?</p>
        <p className={styles.desc}>
          No problem! If you need any further help, you can check the YM
          Community.
        </p>
        <a href="https://community.yellow.ai/" target="_blank">
          Ask the community
        </a>
      </div>
    </section>
  );
};

export default StillNotFind;
