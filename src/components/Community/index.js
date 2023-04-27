import React from "react";
import styles from "./community.module.css";

const Community = () => {
  return (
    <div className={styles.community_wrapper}>
      <h3>yellow.ai community</h3>
      <p>
        We always love to hear about projects being built on our platform. There
        is usually someone available to answer questions.
      </p>
      <a href="https://community.yellow.ai/" target="_blank">
        Ask the community
      </a>
    </div>
  );
};

export default Community;
