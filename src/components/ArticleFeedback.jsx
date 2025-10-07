import React, { useState } from 'react';
import styles from './ArticleFeedback.module.css';

const ArticleFeedback = ({ articleId }) => {
  const [feedbackState, setFeedbackState] = useState('initial'); // 'initial', 'positive', 'negative', 'submitted'
  const [selectedIssue, setSelectedIssue] = useState('');

  const handlePositiveFeedback = () => {
    setFeedbackState('positive');
    // Here you can add analytics tracking
    console.log('Positive feedback for article:', articleId);
  };

  const handleNegativeFeedback = () => {
    setFeedbackState('negative');
  };

  const handleIssueSelection = (issue) => {
    setSelectedIssue(issue);
    setFeedbackState('submitted');
    // Here you can add analytics tracking
    console.log('Negative feedback for article:', articleId, 'Issue:', issue);
  };

  const negativeOptions = [
    'The content is outdated',
    'The article didn\'t answer my question',
    'The explanation was unclear',
    'Something else'
  ];

  if (feedbackState === 'positive') {
    return (
      <div className={styles.feedbackContainer}>
        <div className={`${styles.feedbackMessage} ${styles.show}`}>
          🎉 Thanks for your feedback!
        </div>
      </div>
    );
  }

  return (
    <div className={styles.feedbackContainer}>
      <div className={styles.feedbackContent}>
        <span className={styles.feedbackTitle}>
          Was this article helpful?
        </span>
        <div className={styles.feedbackButtons}>
          <button
            onClick={handlePositiveFeedback}
            className={`${styles.feedbackButton} ${styles.yes}`}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            Yes
          </button>
          <button
            onClick={handleNegativeFeedback}
            className={`${styles.feedbackButton} ${styles.no}`}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.096c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
            </svg>
            No
          </button>
        </div>
      </div>

      {/* Negative Feedback Options */}
      {feedbackState === 'negative' && (
        <div className={`${styles.feedbackOptions} ${styles.show}`}>
          {negativeOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleIssueSelection(option)}
              className={styles.feedbackOption}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {/* Success Message */}
      {feedbackState === 'submitted' && (
        <div className={`${styles.feedbackMessage} ${styles.show}`}>
          We appreciate your feedback!
        </div>
      )}
    </div>
  );
};

export default ArticleFeedback;
