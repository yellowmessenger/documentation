// src/components/ArticleCardGrid.js

import React from 'react';
import styles from './ArticleCardGrid.module.css';

export default function ArticleCardGrid({children}) {
  return (
    <div className={styles.inArticleCardGrid}>
      {children}
    </div>
  );
}
