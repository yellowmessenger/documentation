// Enhanced Feedback Capture System
if (typeof window !== 'undefined') {
  // Feedback state management
  const FeedbackManager = {
    hasSubmitted: false,
    currentPage: window.location.pathname,
    
    // Check if user has already submitted feedback for this page
    hasAlreadySubmitted() {
      const stored = localStorage.getItem(`feedback_${this.currentPage}`);
      console.log('Checking localStorage for feedback:', `feedback_${this.currentPage}`, '=', stored);
      return stored === 'true';
    },
    
    // Mark feedback as submitted
    markAsSubmitted() {
      this.hasSubmitted = true;
      localStorage.setItem(`feedback_${this.currentPage}`, 'true');
    },
    
    // Track feedback analytics
    trackFeedback(type, additionalData = {}) {
      const feedbackData = {
        type,
        page: this.currentPage,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        ...additionalData
      };
      
      // Send to analytics
      if (window.gtag) {
        window.gtag('event', 'feedback_submitted', {
          feedback_type: type,
          page_path: this.currentPage,
          ...additionalData
        });
      }
      
      // Store locally for debugging
      console.log('Feedback submitted:', feedbackData);
    }
  };

  // Function to check if we should show feedback on current page
  function shouldShowFeedback() {
    const pathname = window.location.pathname;
    
    // Reset feedback rendered flag if pathname changed
    if (pathname !== lastPathname) {
      feedbackRendered = false;
      lastPathname = pathname;
    }
    
    console.log('Checking if should show feedback for path:', pathname);
    
    // Don't show on homepage or specific excluded pages
    const excludedPaths = [
      '/',
      '/whats-new',
      '/api',
      '/search',
      '/404.html'
    ];
    
    // Check if current path starts with any excluded path
    const isExcluded = excludedPaths.some(path => pathname === path || pathname.startsWith(path + '/'));
    
    // Don't show on homepage class
    const isHomepage = document.body.classList.contains("homepage");
    
    // Don't show if already submitted
    const alreadySubmitted = FeedbackManager.hasAlreadySubmitted();
    
    // Check if feedback already exists
    const existingFooter = document.getElementById("feedbackFooter");
    
    // Show feedback on docs pages (paths starting with /docs/) or test pages
    const isDocsPage = pathname.startsWith('/docs/') || pathname.includes('test-feedback');
    
    // Show if it's a docs page (we'll handle existing footer in tryRenderFeedback)
    const shouldShow = !isExcluded && !isHomepage && !alreadySubmitted && isDocsPage;
    
    console.log('Feedback visibility check:', {
      pathname,
      isExcluded,
      isHomepage,
      alreadySubmitted,
      existingFooter: !!existingFooter,
      isDocsPage,
      shouldShow
    });
    
    return shouldShow;
  }

  // Function to find the best container for feedback
  function findFeedbackContainer() {
      const parentDOM = document.getElementById("__docusaurus");
    if (!parentDOM) return null;

    // Try to find the main article content container
    const selectors = [
      '[class*="docItemContainer"]',
      '[class*="main"]',
      'main',
      '[class*="content"]',
      '.container',
      '#__docusaurus > div'
    ];
    
    for (const selector of selectors) {
      const container = parentDOM.querySelector(selector);
      if (container) {
        console.log('Feedback container found with selector:', selector);
        return container;
      }
    }
    
    console.log('No suitable container found for feedback');
    return null;
  }

  // Throttle function to prevent excessive calls
  let renderThrottleTimeout = null;
  function throttledTryRenderFeedback() {
    if (renderThrottleTimeout) {
      clearTimeout(renderThrottleTimeout);
    }
    renderThrottleTimeout = setTimeout(() => {
      tryRenderFeedback();
    }, 100);
  }

  // Track if feedback has been successfully rendered
  let feedbackRendered = false;
  let lastPathname = window.location.pathname;

  // Function to render feedback with retry logic
  function tryRenderFeedback() {
    try {
      if (!shouldShowFeedback()) {
        return;
      }

      // Check if feedback element already exists
      const existingFooter = document.getElementById("feedbackFooter");
      if (existingFooter) {
        // If feedback is already rendered and working, don't re-render
        if (feedbackRendered) {
          console.log('Feedback already rendered and working, skipping');
          return;
        }
        
        console.log('Existing feedback element found, repositioning after article content');
        
        // Look for pagination navigation first (this indicates end of article)
        const paginationNav = document.querySelector('.pagination-nav');
        if (paginationNav) {
          // Move the existing feedback element above pagination nav (after article)
          paginationNav.parentNode.insertBefore(existingFooter, paginationNav);
          existingFooter.style.display = 'block';
          feedbackRendered = true;
          console.log('Feedback element repositioned after article content (above pagination)');
          return;
        }
        
        // Fallback: Look for article content end markers
        let articleEnd = null;
        
        // Try different selectors to find the end of article content
        const endSelectors = [
          '[class*="docItemContainer"] > div:last-child',
          'main > div:last-child',
          '[class*="docItemContainer"] > *:last-child',
          'main > *:last-child',
          '[class*="docItemContainer"]',
          'main'
        ];
        
        for (const selector of endSelectors) {
          articleEnd = document.querySelector(selector);
          if (articleEnd) {
            console.log('Found article end with selector:', selector);
            break;
          }
        }
        
        if (articleEnd) {
          // Insert after the last article element
          articleEnd.parentNode.insertBefore(existingFooter, articleEnd.nextSibling);
          existingFooter.style.display = 'block';
          feedbackRendered = true;
          console.log('Feedback element repositioned after article content');
          return;
        } else {
          // If no clear article end found, just ensure it's visible
          existingFooter.style.display = 'block';
          feedbackRendered = true;
          return;
        }
      }
    
    const container = findFeedbackContainer();
    if (container) {
      console.log('Rendering feedback component in container:', container);
      renderEnhancedFeedbackFooter(container);
      feedbackRendered = true;
    } else {
      console.log('Primary container not found, trying fallback...');
      
      // Fallback: try to append to body as last resort
      const fallbackContainer = document.body;
      if (fallbackContainer) {
        console.log('Using fallback container (body)');
        renderEnhancedFeedbackFooter(fallbackContainer);
        feedbackRendered = true;
      } else {
        console.error('No suitable container found for feedback');
      }
    }
    } catch (error) {
      console.error('Error in tryRenderFeedback:', error);
    }
  }

  // Function to initialize feedback system
  function initFeedbackSystem() {
    try {
      console.log('Initializing feedback system...');
      
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          console.log('DOM ready, attempting to render feedback');
          tryRenderFeedback();
        });
      } else {
        console.log('DOM already ready, attempting to render feedback');
        tryRenderFeedback();
      }
      
      // Set up observer for dynamic content (throttled to prevent performance issues)
      const observer = new MutationObserver((mutations) => {
        // Only trigger if there are significant changes (not just text changes)
        const hasSignificantChanges = mutations.some(mutation => 
          mutation.type === 'childList' && 
          (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0)
        );
        
        if (hasSignificantChanges) {
          throttledTryRenderFeedback();
        }
      });

      // Observe the entire document for changes (needed for SPA navigation)
      observer.observe(document.body, { childList: true, subtree: true });
      
      // Handle route changes for SPA navigation
      window.addEventListener('popstate', () => {
        console.log('Route change detected (popstate)');
        setTimeout(() => {
          feedbackRendered = false; // Reset flag to allow re-rendering
          tryRenderFeedback();
        }, 200);
      });
      
      // Also listen for pushstate/replacestate (Docusaurus navigation)
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;
      
      history.pushState = function(...args) {
        originalPushState.apply(history, args);
        console.log('Route change detected (pushState)');
        setTimeout(() => {
          feedbackRendered = false;
          tryRenderFeedback();
        }, 200);
      };
      
      history.replaceState = function(...args) {
        originalReplaceState.apply(history, args);
        console.log('Route change detected (replaceState)');
        setTimeout(() => {
          feedbackRendered = false;
          tryRenderFeedback();
        }, 200);
      };
      
      // Additional check for Docusaurus-specific navigation
      if (window.docusaurus) {
        window.docusaurus.onRouteUpdate = () => {
          console.log('Docusaurus route update detected');
          setTimeout(() => {
            feedbackRendered = false;
            tryRenderFeedback();
          }, 300);
        };
      }
      
      // Periodic check for route changes (fallback for missed navigation events)
      setInterval(() => {
        const currentPathname = window.location.pathname;
        if (currentPathname !== lastPathname) {
          console.log('Route change detected (periodic check):', lastPathname, '->', currentPathname);
          lastPathname = currentPathname;
          feedbackRendered = false;
          tryRenderFeedback();
        }
      }, 1000);
      
    } catch (error) {
      console.error('Error initializing feedback system:', error);
    }
  }

  // Initialize when window loads
  window.addEventListener("load", initFeedbackSystem);
  
  // Also try to initialize immediately if DOM is already ready
  if (document.readyState !== 'loading') {
    initFeedbackSystem();
  }

  // Add a simple test to verify script is running
  console.log('FeedbackFooter.js loaded and ready');
  
  // Make debug functions available immediately
  window.debugFeedback = function() {
    console.log('=== FEEDBACK SYSTEM STATUS ===');
    console.log('Script loaded: ✓');
    console.log('Current URL:', window.location.href);
    console.log('DOM ready state:', document.readyState);
    console.log('Body exists:', !!document.body);
    console.log('Should show feedback:', shouldShowFeedback());
    console.log('==============================');
  };

  // Function to clear feedback localStorage for testing
  window.clearFeedbackStorage = function() {
    const currentPage = window.location.pathname;
    localStorage.removeItem(`feedback_${currentPage}`);
    console.log('Cleared feedback storage for:', currentPage);
    // Try to render feedback again
    setTimeout(() => {
      feedbackRendered = false;
      tryRenderFeedback();
    }, 100);
  };

  // Function to test article positioning
  window.testArticlePositioning = function() {
    console.log('=== TESTING ARTICLE POSITIONING ===');
    
    // Check for pagination nav (indicates article end)
    const paginationNav = document.querySelector('.pagination-nav');
    if (paginationNav) {
      console.log('✓ Pagination nav found:', paginationNav);
      console.log('✓ This indicates where article ends');
    } else {
      console.log('✗ No pagination nav found');
    }
    
    // Check for article content containers
    const articleContainers = document.querySelectorAll('[class*="docItemContainer"], main, [class*="content"]');
    console.log('✓ Article containers found:', articleContainers.length);
    articleContainers.forEach((el, i) => {
      console.log(`  ${i + 1}. ${el.tagName} with classes: ${el.className}`);
    });
    
    // Check current feedback position
    const existingFeedback = document.getElementById("feedbackFooter");
    if (existingFeedback) {
      console.log('✓ Existing feedback element found');
      console.log('✓ Current parent:', existingFeedback.parentElement?.tagName, existingFeedback.parentElement?.className);
    } else {
      console.log('✗ No existing feedback element found');
    }
    
    console.log('===============================');
  };

  // Function to force feedback on current page (for testing navigation)
  window.forceFeedbackOnPage = function() {
    console.log('Forcing feedback on current page...');
    feedbackRendered = false;
    lastPathname = window.location.pathname;
    tryRenderFeedback();
  };

  // Function to debug positioning
  window.debugFeedbackPositioning = function() {
    console.log('=== FEEDBACK POSITIONING DEBUG ===');
    
    // Check for pagination nav
    const paginationNav = document.querySelector('.pagination-nav');
    console.log('Pagination nav found:', !!paginationNav);
    if (paginationNav) {
      console.log('Pagination nav parent:', paginationNav.parentElement?.tagName, paginationNav.parentElement?.className);
    }
    
    // Check for article content
    const endSelectors = [
      '[class*="docItemContainer"] > div:last-child',
      'main > div:last-child',
      '[class*="docItemContainer"] > *:last-child',
      'main > *:last-child',
      '[class*="docItemContainer"]',
      'main'
    ];
    
    console.log('Article content selectors:');
    endSelectors.forEach(selector => {
      const element = document.querySelector(selector);
      console.log(`  ${selector}:`, !!element, element?.tagName, element?.className);
    });
    
    // Check current feedback position
    const existingFeedback = document.getElementById("feedbackFooter");
    if (existingFeedback) {
      console.log('Current feedback position:');
      console.log('  Parent:', existingFeedback.parentElement?.tagName, existingFeedback.parentElement?.className);
      console.log('  Next sibling:', existingFeedback.nextElementSibling?.tagName, existingFeedback.nextElementSibling?.className);
      console.log('  Previous sibling:', existingFeedback.previousElementSibling?.tagName, existingFeedback.previousElementSibling?.className);
    }
    
    console.log('===============================');
  };

  // Enhanced feedback functions with better UX
  function thumb_up_flow() {
    if (FeedbackManager.hasSubmitted) return;
    
    console.log("Feedback JS: thumb_up_flow triggered");
    
    // Track positive feedback
    FeedbackManager.trackFeedback('positive');
    FeedbackManager.markAsSubmitted();
    
    // Show enhanced thank you message
    showFeedbackThanks('positive');
    
    // Trigger existing analytics
    window.YellowMessengerPlugin?.openBot();
    window.frames?.ymIframe?.postMessage(
      JSON.stringify({
        event_code: "trigger-journey",
        data: { journeySlug: "likes_sxpmll" },
      })
    );
  }

  function thumb_down_flow() {
    if (FeedbackManager.hasSubmitted) return;
    
    console.log("Feedback JS: thumb_down_flow triggered");
    
    // Show follow-up options for negative feedback
    showNegativeFeedbackOptions();
  }

  function showNegativeFeedbackOptions() {
    const feedbackContent = document.getElementById("feedbackFooter");
    if (!feedbackContent) return;
    
    feedbackContent.innerHTML = `
      <div class="feedback-followup">
        <h3>What could we improve?</h3>
        <form class="feedback-form">
          <div class="feedback-radio-group">
            <label class="feedback-radio-option">
              <input type="radio" name="feedback-reason" value="unclear" class="feedback-radio">
              <span class="feedback-radio-label">
                <i class="ri-question-line"></i>
                Unclear or confusing
              </span>
            </label>
            
            <label class="feedback-radio-option">
              <input type="radio" name="feedback-reason" value="incomplete" class="feedback-radio">
              <span class="feedback-radio-label">
                <i class="ri-file-list-line"></i>
                Missing information
              </span>
            </label>
            
            <label class="feedback-radio-option">
              <input type="radio" name="feedback-reason" value="outdated" class="feedback-radio">
              <span class="feedback-radio-label">
                <i class="ri-time-line"></i>
                Outdated content
              </span>
            </label>
            
            <label class="feedback-radio-option">
              <input type="radio" name="feedback-reason" value="other" class="feedback-radio">
              <span class="feedback-radio-label">
                <i class="ri-more-line"></i>
                Something else
              </span>
            </label>
          </div>
          
          <div class="feedback-form-actions">
            <button type="button" class="feedback-submit-btn" onclick="submitNegativeFeedback()">
              Submit feedback
            </button>
            <button type="button" class="feedback-skip-btn" onclick="showFeedbackThanks('negative')">
              Skip
            </button>
          </div>
        </form>
      </div>
    `;
  }

  function submitNegativeFeedback() {
    if (FeedbackManager.hasSubmitted) return;
    
    const selectedOption = document.querySelector('input[name="feedback-reason"]:checked');
    if (!selectedOption) {
      alert('Please select an option before submitting.');
      return;
    }
    
    const option = selectedOption.value;
    
    // Track specific negative feedback
    FeedbackManager.trackFeedback('negative', { reason: option });
    FeedbackManager.markAsSubmitted();
    
    // Show thank you message
    showFeedbackThanks('negative', option);
    
    // Trigger existing analytics
    window.YellowMessengerPlugin?.openBot();
    window.frames?.ymIframe?.postMessage(
      JSON.stringify({
        event_code: "trigger-journey",
        data: { journeySlug: "dislikes_dsxlbu" },
      })
    );
  }

  // Keep the old function for backward compatibility
  function selectFeedbackOption(option) {
    if (FeedbackManager.hasSubmitted) return;
    
    // Track specific negative feedback
    FeedbackManager.trackFeedback('negative', { reason: option });
    FeedbackManager.markAsSubmitted();
    
    // Show thank you message
    showFeedbackThanks('negative', option);
    
    // Trigger existing analytics
    window.YellowMessengerPlugin?.openBot();
    window.frames?.ymIframe?.postMessage(
      JSON.stringify({
        event_code: "trigger-journey",
        data: { journeySlug: "dislikes_dsxlbu" },
      })
    );
  }

  function showFeedbackThanks(type, reason = null) {
     const feedbackContent = document.getElementById("feedbackFooter");
    if (!feedbackContent) return;
    
    const messages = {
      positive: {
        title: "Thank you!",
        message: "We're glad this page was helpful."
      },
      negative: {
        title: "Thank you for your feedback!",
        message: reason ? `We'll work on improving the ${reason} aspect.` : "We appreciate you taking the time to help us improve."
      }
    };
    
    const { title, message } = messages[type];
    
    feedbackContent.innerHTML = `
      <div class="feedback-thanks">
        <div class="feedback-thanks-icon">
          <i class="ri-checkbox-circle-fill"></i>
        </div>
        <h3>${title}</h3>
        <p>${message}</p>
      </div>
    `;
    
    // Add animation class
    feedbackContent.classList.add('feedback-thanks-animate');
  }

  // Enhanced feedback footer with professional design (inspired by Humanloop)
  function renderEnhancedFeedbackFooter(container) {
    console.log('Creating feedback component for container:', container);
    
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <div style="text-align: center; margin: 2rem 0;">
        <div id="feedbackFooter" class="feedbackFooter__content">
          <div class="feedback-header">
            <h3>Was this page helpful?</h3>
          </div>
          <div class="feedbackButtons">
            <button id="liked_docs" onclick="thumb_up_flow()" title="Yes" aria-label="Yes, this page was helpful" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-up">
                <path d="M7 10v12"></path>
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
              </svg>
              Yes
            </button>
            <button id="disliked_docs" onclick="thumb_down_flow()" title="No" aria-label="No, this page needs improvement" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-down">
                <path d="M17 14V2"></path>
                <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path>
              </svg>
              No
            </button>
          </div>
        </div>
      </div>
    `;
    
    // Try to position after article content (above pagination nav)
    const paginationNav = document.querySelector('.pagination-nav');
    if (paginationNav) {
      paginationNav.parentNode.insertBefore(wrapper, paginationNav);
      console.log('Feedback component positioned after article content (above pagination)');
    } else {
      // Fallback: Try to find article content end in multiple ways
      let articleEnd = null;
      
      // Try different selectors to find the end of article content
      const endSelectors = [
        '[class*="docItemContainer"] > div:last-child',
        'main > div:last-child',
        '[class*="docItemContainer"] > *:last-child',
        'main > *:last-child',
        '[class*="docItemContainer"]',
        'main'
      ];
      
      for (const selector of endSelectors) {
        articleEnd = document.querySelector(selector);
        if (articleEnd) {
          console.log('Found article end with selector:', selector);
          break;
        }
      }
      
      if (articleEnd) {
        // Insert after the last article element
        articleEnd.parentNode.insertBefore(wrapper, articleEnd.nextSibling);
        console.log('Feedback component positioned after article content');
      } else {
        // Try to find the main content area and append at the end
        const mainContent = document.querySelector('main, [class*="docItemContainer"], [class*="content"]');
        if (mainContent) {
          mainContent.appendChild(wrapper);
          console.log('Feedback component added to main content area');
        } else {
          // Final fallback to container
          container.appendChild(wrapper);
          console.log('Feedback component added to container (no clear article end found)');
        }
      }
    }
    
    console.log('Feedback component successfully added to page');
  }

  // Make functions globally available
  window.thumb_up_flow = thumb_up_flow;
  window.thumb_down_flow = thumb_down_flow;
  window.selectFeedbackOption = selectFeedbackOption;
  window.submitNegativeFeedback = submitNegativeFeedback;
  
  // Add manual trigger for testing
  window.triggerFeedback = function() {
    console.log('Manually triggering feedback render...');
    tryRenderFeedback();
  };
  
  // Add function to force show feedback (for testing)
  window.forceShowFeedback = function() {
    console.log('Force showing feedback...');
    const container = document.body;
    if (container) {
      renderEnhancedFeedbackFooter(container);
    }
  };

  // Add function to debug feedback visibility
  window.debugFeedbackVisibility = function() {
    console.log('=== FEEDBACK DEBUG ===');
    console.log('Current path:', window.location.pathname);
    console.log('Body classes:', document.body.className);
    console.log('Should show feedback:', shouldShowFeedback());
    console.log('Has already submitted:', FeedbackManager.hasAlreadySubmitted());
    console.log('Existing feedback element:', !!document.getElementById("feedbackFooter"));
    console.log('Feedback rendered flag:', feedbackRendered);
    console.log('=== END DEBUG ===');
  };
}