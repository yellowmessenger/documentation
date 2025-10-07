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
      if (window.gtag && typeof window.gtag === 'function') {
        try {
          window.gtag('event', 'feedback_submitted', {
            feedback_type: type,
            page_path: this.currentPage,
            ...additionalData
          });
        } catch (error) {
          console.warn('Google Analytics gtag error:', error);
        }
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
      const existingFooter = document.querySelector(".feedback-container");
      if (existingFooter) {
        // If feedback is already rendered and working, don't re-render
        if (feedbackRendered) {
          console.log('Feedback already rendered and working, skipping');
          return;
        }
        
        console.log('Existing feedback element found, repositioning after article content');
        
        // Function to reposition existing feedback element
        function repositionExistingFeedback() {
          // First, try to find pagination navigation (best indicator of article end)
          const paginationNav = document.querySelector('.pagination-nav');
          if (paginationNav) {
            paginationNav.parentNode.insertBefore(existingFooter, paginationNav);
            existingFooter.style.display = 'block';
            console.log('Existing feedback repositioned above pagination navigation');
            return true;
          }
          
          // Try to find the end of article content using multiple strategies
          const articleSelectors = [
            'article > div:last-child',
            '[class*="docItemContainer"] > div:last-child',
            '[class*="docItemContainer"] > *:last-child',
            'main > div:last-child',
            'main > *:last-child',
            '.markdown > div:last-child',
            '.markdown > *:last-child',
            '[class*="markdown"] > div:last-child',
            '[class*="markdown"] > *:last-child',
            'article',
            '[class*="docItemContainer"]',
            'main'
          ];
          
          for (const selector of articleSelectors) {
            const element = document.querySelector(selector);
            if (element && element.parentNode) {
              element.parentNode.insertBefore(existingFooter, element.nextSibling);
              existingFooter.style.display = 'block';
              console.log('Existing feedback repositioned after element:', selector);
              return true;
            }
          }
          
          return false;
        }
        
        // Try to reposition immediately
        let repositioned = repositionExistingFeedback();
        
        // If repositioning failed, try again after a short delay
        if (!repositioned) {
          setTimeout(() => {
            if (!repositioned) {
              repositioned = repositionExistingFeedback();
            }
            
            // If still not repositioned, just ensure it's visible
            if (!repositioned) {
              existingFooter.style.display = 'block';
              console.log('Existing feedback made visible (could not reposition)');
            }
          }, 100);
        }
        
        feedbackRendered = true;
        return;
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
        }, 300); // Increased delay for better DOM readiness
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
        }, 300);
      };
      
      history.replaceState = function(...args) {
        originalReplaceState.apply(history, args);
        console.log('Route change detected (replaceState)');
        setTimeout(() => {
          feedbackRendered = false;
          tryRenderFeedback();
        }, 300);
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
    const feedbackContainer = document.querySelector('.feedback-container');
    if (!feedbackContainer) return;
    
    // Hide the feedback options and show the form
    const feedbackOptions = feedbackContainer.querySelector('.feedback-options');
    const feedbackMessage = feedbackContainer.querySelector('.feedback-message');
    
    if (feedbackOptions) feedbackOptions.style.display = 'none';
    if (feedbackMessage) {
      feedbackMessage.innerHTML = `
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
      feedbackMessage.style.display = 'block';
    }
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
    const feedbackContainer = document.querySelector('.feedback-container');
    if (!feedbackContainer) return;
    
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
    
    // Hide the feedback options and show the message
    const feedbackOptions = feedbackContainer.querySelector('.feedback-options');
    const feedbackMessage = feedbackContainer.querySelector('.feedback-message');
    
    if (feedbackOptions) feedbackOptions.style.display = 'none';
    if (feedbackMessage) {
      feedbackMessage.innerHTML = `
        <div class="feedback-thanks">
          <div class="feedback-thanks-icon">
            ${type === 'positive' ? '🎉' : '💡'}
          </div>
          <h3>${title}</h3>
          <p>${message}</p>
        </div>
      `;
      feedbackMessage.style.display = 'block';
    }
  }

  // Enhanced feedback footer with professional design (inspired by Humanloop)
  function renderEnhancedFeedbackFooter(container) {
    console.log('Creating feedback component for container:', container);
    
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <div class="feedback-container" style="display: flex; align-items: center; gap: 1rem; font-size: 0.9rem; margin-top: 2rem; padding-top: 1.75rem; border-top: 1px solid var(--border-default, #e5e7eb); color: var(--grayscale-11, #374151); flex-wrap: wrap;">
        <span style="font-weight: 500; color: var(--grayscale-12, #111827);">Was this page helpful?</span>
        <div class="feedback-options" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button class="feedback-btn yes" id="liked_docs" onclick="thumb_up_flow()" title="Yes" aria-label="Yes, this page was helpful" type="button" style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.9rem; border-radius: 8px; padding: 0.45rem 1rem; background: transparent; cursor: pointer; border: 1px solid var(--border-default, #e5e7eb); color: var(--grayscale-12, #111827); transition: all 0.2s ease; font-weight: 500;">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.2s ease;">
              <path d="M7 10v12"></path>
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
            </svg>
            Yes
          </button>
          <button class="feedback-btn no" id="disliked_docs" onclick="thumb_down_flow()" title="No" aria-label="No, this page needs improvement" type="button" style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.9rem; border-radius: 8px; padding: 0.45rem 1rem; background: transparent; cursor: pointer; border: 1px solid var(--border-default, #e5e7eb); color: var(--grayscale-12, #111827); transition: all 0.2s ease; font-weight: 500;">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.2s ease;">
              <path d="M17 14V2"></path>
              <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path>
            </svg>
            No
          </button>
        </div>
        <div class="feedback-message" style="display: none; margin-left: 0.5rem; animation: fadeIn 0.3s ease-in;"></div>
      </div>
    `;
    
    // Add hover effects and interactive styles
    const yesBtn = wrapper.querySelector('.feedback-btn.yes');
    const noBtn = wrapper.querySelector('.feedback-btn.no');
    
    if (yesBtn) {
      yesBtn.addEventListener('mouseenter', () => {
        yesBtn.style.background = 'var(--grayscale-a3, rgba(0, 0, 0, 0.04))';
        yesBtn.style.transform = 'translateY(-1px)';
        const svg = yesBtn.querySelector('svg');
        if (svg) svg.style.transform = 'scale(1.1)';
      });
      yesBtn.addEventListener('mouseleave', () => {
        yesBtn.style.background = 'transparent';
        yesBtn.style.transform = 'translateY(0)';
        const svg = yesBtn.querySelector('svg');
        if (svg) svg.style.transform = 'scale(1)';
      });
      yesBtn.addEventListener('mousedown', () => {
        yesBtn.style.transform = 'translateY(0)';
      });
    }
    
    if (noBtn) {
      noBtn.addEventListener('mouseenter', () => {
        noBtn.style.background = 'var(--grayscale-a3, rgba(0, 0, 0, 0.04))';
        noBtn.style.transform = 'translateY(-1px)';
        const svg = noBtn.querySelector('svg');
        if (svg) svg.style.transform = 'scale(1.1)';
      });
      noBtn.addEventListener('mouseleave', () => {
        noBtn.style.background = 'transparent';
        noBtn.style.transform = 'translateY(0)';
        const svg = noBtn.querySelector('svg');
        if (svg) svg.style.transform = 'scale(1)';
      });
      noBtn.addEventListener('mousedown', () => {
        noBtn.style.transform = 'translateY(0)';
      });
    }
    
    // Function to position the feedback element correctly
    function positionFeedbackElement() {
      // First, try to find pagination navigation (best indicator of article end)
      const paginationNav = document.querySelector('.pagination-nav');
      if (paginationNav) {
        paginationNav.parentNode.insertBefore(wrapper, paginationNav);
        console.log('Feedback positioned above pagination navigation');
        return true;
      }
      
      // Try to find the end of article content using multiple strategies
      const articleSelectors = [
        // Look for common article content containers
        'article > div:last-child',
        '[class*="docItemContainer"] > div:last-child',
        '[class*="docItemContainer"] > *:last-child',
        'main > div:last-child',
        'main > *:last-child',
        // Look for specific content elements
        '.markdown > div:last-child',
        '.markdown > *:last-child',
        '[class*="markdown"] > div:last-child',
        '[class*="markdown"] > *:last-child',
        // Look for any content that might be the end
        'article',
        '[class*="docItemContainer"]',
        'main'
      ];
      
      for (const selector of articleSelectors) {
        const element = document.querySelector(selector);
        if (element) {
          // Try to insert after this element
          if (element.parentNode) {
            element.parentNode.insertBefore(wrapper, element.nextSibling);
            console.log('Feedback positioned after element:', selector);
            return true;
          }
        }
      }
      
      return false;
    }
    
    // Try to position immediately
    let positioned = positionFeedbackElement();
    
    // If positioning failed, try again after a short delay (for SPA navigation)
    if (!positioned) {
      setTimeout(() => {
        if (!positioned) {
          positioned = positionFeedbackElement();
        }
        
        // Final fallback if still not positioned
        if (!positioned) {
          const mainContent = document.querySelector('main, [class*="docItemContainer"], [class*="content"]');
          if (mainContent) {
            mainContent.appendChild(wrapper);
            console.log('Feedback added to main content area (fallback)');
          } else {
            container.appendChild(wrapper);
            console.log('Feedback added to container (final fallback)');
          }
        }
      }, 100);
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
    console.log('Existing feedback element:', !!document.querySelector(".feedback-container"));
    console.log('Feedback rendered flag:', feedbackRendered);
    console.log('=== END DEBUG ===');
  };
}