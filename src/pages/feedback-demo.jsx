import React from 'react';
import ArticleFeedback from '../components/ArticleFeedback';

const FeedbackDemo = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Article Feedback Component Demo</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2>Sample Article Content</h2>
        <p>
          This is a sample documentation article that demonstrates how the feedback component 
          works. The component appears at the bottom of the article and provides a clean, 
          minimal way to collect user feedback.
        </p>
        
        <h3>Features</h3>
        <ul>
          <li>Clean, minimal design inspired by Stripe Docs</li>
          <li>Two-button interface: Yes/No</li>
          <li>Follow-up options for negative feedback</li>
          <li>Success messages with icons</li>
          <li>Fully client-side implementation</li>
          <li>Ready for analytics integration</li>
        </ul>
        
        <h3>Usage</h3>
        <p>
          Simply import the component and use it at the bottom of your documentation pages:
        </p>
        <pre style={{ 
          background: '#f5f5f5', 
          padding: '1rem', 
          borderRadius: '4px',
          overflow: 'auto'
        }}>
{`import ArticleFeedback from '../components/ArticleFeedback';

<ArticleFeedback articleId="getting-started" />`}
        </pre>
      </div>
      
      {/* The feedback component */}
      <ArticleFeedback articleId="demo-article" />
    </div>
  );
};

export default FeedbackDemo;
