import React from "react";
import styles from "./quickreads.module.css";

const QuickReads = ({ description, list }) => {
  return (
    <div className={styles.quick_reads}>
      <h2>Quick reads</h2>
      {description && <p className={styles.description}>{description}</p>}
      <ul className={styles.reads}>
        {list.map((item, index) => (
          <li className={styles.read} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default QuickReads;
