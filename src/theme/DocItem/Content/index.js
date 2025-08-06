// src/theme/DocItem/Content/index.js

import React from 'react';
import Content from '@theme-original/DocItem/Content';
import ArticleSummary from '@site/src/components/ArticleSummary'; // Import your component

export default function ContentWrapper(props) {
  return (
    <>
      {/* This automatically adds the summary component to the top of every doc page */}
      
      {/* This renders the original page content below the summary */}
      <Content {...props} />
    </>
  );
}