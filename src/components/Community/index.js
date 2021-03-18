import React from "react";
import styles from "./community.module.css";

const Community = () => {
  return (
    <div className={styles.community_wrapper}>
      <h3>YM community</h3>
      <p>
        We always love to hear about projects being built on our platform. There
        is usually someone available to answer questions
      </p>
      <button>Ask the community</button>
    </div>
  );
};

export default Community;
