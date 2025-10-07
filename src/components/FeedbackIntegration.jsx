import React from 'react';
import ArticleFeedback from './ArticleFeedback';

// Docusaurus integration component
const FeedbackIntegration = () => {
  // Get the current page path for article ID
  const getArticleId = () => {
    if (typeof window !== 'undefined') {
      return window.location.pathname.replace(/^\//, '').replace(/\//g, '-') || 'homepage';
    }
    return 'unknown';
  };

  // Check if we should show feedback on this page
  const shouldShowFeedback = () => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      const excludedPaths = ['/', '/whats-new', '/api', '/search'];
      
      // Don't show on excluded paths
      if (excludedPaths.some(path => pathname === path || pathname.startsWith(path + '/'))) {
        return false;
      }
      
      // Don't show on homepage
      if (document.body.classList.contains('homepage')) {
        return false;
      }
      
      // Show on docs pages
      return pathname.startsWith('/docs/');
    }
    return false;
  };

  // Don't render if we shouldn't show feedback
  if (!shouldShowFeedback()) {
    return null;
  }

  return <ArticleFeedback articleId={getArticleId()} />;
};

export default FeedbackIntegration;
