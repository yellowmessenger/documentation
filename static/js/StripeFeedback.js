// Modern feedback component
if (typeof window !== 'undefined') {
  
  // CSS styles for the feedback component
  const feedbackStyles = `
    :root {
      --accent: #635bff;
      --grayscale-11: #3b3b3b;
      --grayscale-12: #1a1a1a;
      --grayscale-a4: rgba(0, 0, 0, 0.04);
      --red-11: #d32f2f;
      --border-default: rgba(0, 0, 0, 0.1);
    }
    
    .feedback-container {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.9rem;
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border-default);
      color: var(--grayscale-11);
      font-family: 'Inter', system-ui, sans-serif;
    }
    
    .feedback-content {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      width: 100%;
    }
    
    .feedback-title {
      font-size: 0.9rem;
      color: var(--grayscale-11);
      margin: 0;
      white-space: nowrap;
    }
    
    .feedback-buttons {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .feedback-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.9rem;
      border-radius: 8px;
      padding: 0.4rem 0.9rem;
      background: transparent;
      cursor: pointer;
      border: 1px solid var(--border-default);
      color: var(--grayscale-11);
      transition: all 0.2s ease;
      outline: none;
    }
    
    .feedback-btn:hover {
      background: var(--grayscale-a4);
    }
    
    .feedback-btn:focus {
      outline: none;
      box-shadow: 0 0 0 2px var(--accent);
    }
    
    .feedback-btn svg {
      width: 1rem;
      height: 1rem;
      stroke: currentColor;
    }
    
    .feedback-btn.yes svg {
      stroke: var(--accent);
    }
    
    .feedback-btn.no svg {
      stroke: var(--red-11);
    }
    
    .feedback-options {
      display: none;
      margin-top: 0.75rem;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    
    .feedback-options.show {
      display: flex;
    }
    
    .feedback-option {
      border: 1px solid var(--border-default);
      background: var(--grayscale-a4);
      border-radius: 8px;
      padding: 0.3rem 0.8rem;
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.2s ease;
      color: var(--grayscale-11);
      outline: none;
    }
    
    .feedback-option:hover {
      background: var(--accent);
      color: white;
      border-color: var(--accent);
    }
    
    .feedback-message {
      display: none;
      margin-top: 1rem;
      font-weight: 500;
      color: var(--accent);
      font-size: 0.9rem;
    }
    
    .feedback-message.show {
      display: block;
    }
    
    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      :root {
        --grayscale-11: #e5e5e5;
        --grayscale-12: #ffffff;
        --grayscale-a4: rgba(255, 255, 255, 0.04);
        --border-default: rgba(255, 255, 255, 0.1);
      }
    }
    
    /* Responsive design */
    @media (max-width: 640px) {
      .feedback-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }
      
      .feedback-content {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        width: 100%;
      }
      
      .feedback-options {
        width: 100%;
      }
      
      .feedback-option {
        flex: 1;
        min-width: 0;
      }
    }
  `;

  // Add styles to document
  function addStyles() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = feedbackStyles;
    document.head.appendChild(styleSheet);
  }

  // Create feedback HTML
  function createFeedbackHTML() {
    return `
      <div class="feedback-container">
        <div class="feedback-content">
          <span class="feedback-title">Was this article helpful?</span>
          <div class="feedback-buttons">
            <button class="feedback-btn yes" data-action="positive">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              Yes
            </button>
            <button class="feedback-btn no" data-action="negative">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.096c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
              </svg>
              No
            </button>
          </div>
        </div>
        
        <div class="feedback-options">
          <button class="feedback-option" data-issue="outdated">The content is outdated</button>
          <button class="feedback-option" data-issue="unclear">The article didn't answer my question</button>
          <button class="feedback-option" data-issue="confusing">The explanation was unclear</button>
          <button class="feedback-option" data-issue="other">Something else</button>
        </div>
        
        <div class="feedback-message"></div>
      </div>
    `;
  }

  // Handle feedback interactions
  function setupFeedbackHandlers(container) {
    const yesBtn = container.querySelector('.feedback-btn.yes');
    const noBtn = container.querySelector('.feedback-btn.no');
    const options = container.querySelector('.feedback-options');
    const message = container.querySelector('.feedback-message');
    const content = container.querySelector('.feedback-content');

    yesBtn.addEventListener('click', () => {
      content.style.display = 'none';
      options.style.display = 'none';
      message.innerHTML = '🎉 Thanks for your feedback!';
      message.classList.add('show');
      
      // Analytics tracking
      console.log('Positive feedback submitted for:', window.location.pathname);
    });

    noBtn.addEventListener('click', () => {
      options.classList.add('show');
    });

    container.querySelectorAll('.feedback-option').forEach((option) => {
      option.addEventListener('click', () => {
        const issue = option.dataset.issue;
        content.style.display = 'none';
        options.style.display = 'none';
        message.innerHTML = 'We appreciate your feedback!';
        message.classList.add('show');
        
        // Analytics tracking
        console.log('Negative feedback submitted for:', window.location.pathname, 'Issue:', issue);
      });
    });
  }

  // Check if we should show feedback
  function shouldShowFeedback() {
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

  // Find content container
  function findContentContainer() {
    const selectors = [
      '[class*="docItemContainer"]',
      '[class*="main"]',
      'main',
      '[class*="content"]',
      '.container',
      '#__docusaurus > div'
    ];
    
    for (const selector of selectors) {
      const container = document.querySelector(selector);
      if (container) {
        return container;
      }
    }
    
    return document.body;
  }

  // Render feedback component
  function renderFeedback() {
    if (!shouldShowFeedback()) {
      return;
    }
    
    // Remove existing feedback
    const existing = document.querySelector('.feedback-container');
    if (existing) {
      existing.remove();
    }
    
    const container = findContentContainer();
    if (!container) return;
    
    // Create and add feedback
    const feedbackHTML = createFeedbackHTML();
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = feedbackHTML;
    const feedbackElement = tempDiv.firstElementChild;
    
    container.appendChild(feedbackElement);
    setupFeedbackHandlers(feedbackElement);
    
    console.log('Modern feedback component rendered');
  }

  // Initialize
  function init() {
    addStyles();
    
    // Render on page load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', renderFeedback);
    } else {
      renderFeedback();
    }
    
    // Re-render on navigation (for SPA)
    let currentPath = window.location.pathname;
    const observer = new MutationObserver(() => {
      if (window.location.pathname !== currentPath) {
        currentPath = window.location.pathname;
        setTimeout(renderFeedback, 100);
      }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // Start the feedback system
  init();
}
