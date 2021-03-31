import React from "react";
import styles from "./stillnotfind.module.css";

const StillNotFind = () => {
  return (
    <section className={styles.not_find_container}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Still not finding what you need?</p>
        <p className={styles.desc}>
          No problem! If you need any further help, the support team is always
          here to help you out.
        </p>
        <button type="secondary">Contact support</button>
      </div>
    </section>
  );
};

export default StillNotFind;
