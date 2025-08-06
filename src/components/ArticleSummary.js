import React, { useState, useEffect } from 'react';
import styles from './ArticleSummary.module.css';

// --- SVG Icons for the component ---
const SparklesIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

const LoaderIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
);

// Helper function to format the summary text into an HTML list
const formatSummary = (text) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const listItems = lines.map(line => `<li>${line.replace(/^\s*[\*\-]\s*/, '')}</li>`).join('');
    return `<ul>${listItems}</ul>`;
};


export default function ArticleSummary() {
  // By returning null, this component will render nothing to the DOM.
  return null;

  /*
  // --- Original component logic is kept here, commented out for safety ---
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generateSummary = async () => {
    console.log("Summary generation is temporarily disabled.");
    // setIsLoading(true);
    // setError('');
    // setSummary('');

    // try {
    //   // 1. Get the main content of the page
    //   const mainContentElement = document.querySelector('article');
    //   if (!mainContentElement) {
    //     throw new Error("Could not find article content to summarize.");
    //   }
    //   const articleText = mainContentElement.innerText;

    //   // 2. Prepare the prompt for the Gemini API
    //   const prompt = `Summarize the following article into a few key bullet points for a quick overview. Format the output as a simple list:\n\n---\n\n${articleText}`;
      
    //   const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
    //   const payload = { contents: chatHistory };
    //   const apiKey = ""; // API key is handled by the environment
    //   const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    //   // 3. Make the API call
    //   const response = await fetch(apiUrl, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(payload)
    //   });

    //   if (!response.ok) {
    //     throw new Error(`API request failed with status ${response.status}`);
    //   }

    //   const result = await response.json();

    //   // 4. Process the response and update the state
    //   if (result.candidates && result.candidates.length > 0 && result.candidates[0].content.parts.length > 0) {
    //     const summaryText = result.candidates[0].content.parts[0].text;
    //     setSummary(summaryText);
    //   } else {
    //     // Handle cases where the API returns a success status but no content
    //     if (result.promptFeedback && result.promptFeedback.blockReason) {
    //         throw new Error(`Content blocked by the API. Reason: ${result.promptFeedback.blockReason}`);
    //     }
    //     throw new Error("Received an invalid or empty response from the summary API.");
    //   }

    // } catch (e) {
    //   console.error("Error generating summary:", e);
    //   // Update the error state with a more descriptive message
    //   setError(`Sorry, an error occurred: ${e.message}. Please try again later.`);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <div className={styles.summaryContainer}>
      <div className={styles.summaryHeader}>
        <SparklesIcon className={styles.summaryIcon} />
        <h3 className={styles.summaryTitle}>Quick Summary</h3>
      </div>
      <div className={styles.summaryContent}>
        <p>The AI-powered summary feature is temporarily unavailable. We're working on it!</p>
      </div>
    </div>
  );
  */
}
