// Simple Feedback System - Original Working Version
if (typeof window !== 'undefined') {
  console.log('FeedbackFooter.js loaded at:', new Date().toISOString(), 'Version: 20241220');
  
  // Ensure gtag is available to prevent runtime errors
  if (!window.gtag) {
    window.gtag = function() {
      console.log('gtag fallback called:', arguments);
    };
  }

  const FeedbackManager = {
    hasSubmitted: false,
    currentPage: window.location.pathname,

    getCurrentPath() {
      return window.location.pathname.replace(/\/$/, ''); // normalize trailing slash
    },

    // Utility function for smooth fade-in animation
    fadeIn(element, duration = 300) {
      element.style.opacity = '0';
      element.style.transform = 'translateY(-10px)';
      element.style.transition = `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`;
      
      // Force reflow
      element.offsetHeight;
      
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    },

    // Utility function for smooth fade-out animation
    fadeOut(element, duration = 200) {
      element.style.transition = `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`;
      element.style.opacity = '0';
      element.style.transform = 'translateY(-5px)';
      
      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }, duration);
    },

    hasAlreadySubmitted() {
      const currentPage = this.getCurrentPath();
      const storageKey = `article_feedback_${currentPage}`;
      const stored = localStorage.getItem(storageKey);
      console.log('Checking submission status for key:', storageKey, 'Value:', stored);
      return stored === 'true';
    },

    markAsSubmitted() {
      this.hasSubmitted = true;
      const currentPage = this.getCurrentPath();
      const storageKey = `article_feedback_${currentPage}`;
      localStorage.setItem(storageKey, 'true');
      console.log('Marked as submitted with storage key:', storageKey);
    },

    trackFeedback(type, additionalData = {}) {
      const currentPage = this.getCurrentPath();
      // Send to analytics with improved error handling and GA4 structure
      this.safeGtag('event', 'feedback_submitted', {
        event_category: 'Documentation Feedback',
        event_label: type,
        page_path: currentPage,
        feedback_type: type,
        timestamp: new Date().toISOString(),
        ...additionalData
      });
      


// Get current H1 title
const pageTitle = document.querySelector('h1')?.innerText?.trim() || 'N/A';

// Combine all feedback data into one object
const feedbackPayload = {
  type,
  page: currentPage,
  title: pageTitle,
  ...additionalData
};

// Log it (for debugging)
console.log('Feedback submitted:', feedbackPayload);

// Prepare the API body
const apiBody = {
  from: "10097070117759084270201634115",  // you can make these dynamic if needed
  to: "x1694470796328",
  message: JSON.stringify({
    event: {
      code: "docs-feedback",
      data: {
        customerData: {
          customdata: feedbackPayload
        }
      }
    }
  })
};

// Send feedback to Yellow.ai API
fetch("https://r4.cloud.yellow.ai/integrations/yellowmessenger/receive", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(apiBody)
})
  .then(response => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then(data => {
    console.log("Feedback successfully sent to Yellow.ai API:", data);
  })
  .catch(error => {
    console.error("Error sending feedback to API:", error);
  });








      console.log('Storage key:', `article_feedback_${currentPage}`);
    },
    
    // Safe gtag wrapper with proper error handling
    safeGtag(...args) {
      try {
        // Check if gtag is available
        if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === 'function') {
          window.gtag(...args);
        } else {
          // Fallback: try to initialize gtag if it's not available
          if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push(arguments);
          } else {
            console.log('Analytics not available, logging locally:', args);
          }
        }
      } catch (error) {
        console.warn('Analytics error (non-critical):', error);
        // Don't throw the error, just log it
      }
    }
  };

  let feedbackRendered = false;
  let lastPathname = window.location.pathname;

  function shouldShowFeedback() {
    const pathname = FeedbackManager.getCurrentPath();
    if (pathname !== lastPathname) {
      feedbackRendered = false;
      lastPathname = pathname;
      // Reset global feedback state when navigating to different articles
      FeedbackManager.hasSubmitted = false;
    }

    const excludedPaths = ['/', '/whats-new', '/api', '/search', '/404.html'];
    const isExcluded = excludedPaths.some(path => pathname === path || pathname.startsWith(path + '/'));
    const isHomepage = document.body.classList.contains("homepage");
    const isDocsPage = pathname.startsWith('/docs/');

    // Always show feedback on docs pages (article level) - don't hide after submission
    return !isExcluded && !isHomepage && isDocsPage;
  }

  function renderFeedbackElement() {
    const existingFooter = document.querySelector(".feedback-container");
    if (existingFooter) {
      existingFooter.remove(); // Remove existing to prevent duplicates
    }

    // Simple positioning - just above pagination nav
    const paginationNav = document.querySelector('.pagination-nav');
    if (!paginationNav) {
      console.warn('Could not find pagination navigation for feedback placement.');
      return;
    }

    // Check if feedback has already been submitted for this specific article
    const currentPage = FeedbackManager.getCurrentPath();
    const storageKey = `article_feedback_${currentPage}`;
    const alreadySubmitted = localStorage.getItem(storageKey) === 'true';

    const wrapper = document.createElement("div");
    
    if (alreadySubmitted) {
      // Show thank you message if feedback was already submitted for this article
      wrapper.innerHTML = `
        <div class="feedback-container" style="display: flex; align-items: center; gap: 1rem; font-size: 0.9rem; margin-top: 2rem; padding-top: 1.75rem; border-top: 1px solid var(--ifm-color-emphasis-300); color: var(--ifm-font-color-base); flex-wrap: wrap;">
          <span class="feedback-question" style="font-weight: 500; color: var(--ifm-font-color-base); font-size: 1.25rem;">Was this article helpful?</span>
          <div class="feedback-thanks" style="display: flex; align-items: center; gap: 0.5rem; color: var(--ifm-color-primary); font-weight: 500;">
            <span>✅</span>
            <span>Thank you for your feedback!</span>
          </div>
        </div>
      `;
    } else {
      // Show normal feedback buttons for this article
      wrapper.innerHTML = `
        <div class="feedback-container" style="display: flex; align-items: center; gap: 1rem; font-size: 0.9rem; margin-top: 2rem; padding-top: 1.75rem; border-top: 1px solid var(--ifm-color-emphasis-300); color: var(--ifm-font-color-base); flex-wrap: wrap;">
          <span class="feedback-question" style="font-weight: 500; color: var(--ifm-font-color-base); font-size: 1.25rem;">Was this article helpful?</span>
          <div class="feedback-options" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button class="feedback-btn yes" id="liked_docs" onclick="thumb_up_flow()" type="button" style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.9rem; border-radius: 8px; padding: 0.45rem 1rem; background: transparent; cursor: pointer; border: 1px solid var(--ifm-color-emphasis-300); color: var(--ifm-font-color-base); transition: all 0.2s ease; font-weight: 500; position: relative;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.2s ease;" aria-hidden="true">
                <path d="M7 10v12"></path>
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
              </svg>
              Yes
            </button>
            <button class="feedback-btn no" id="disliked_docs" onclick="thumb_down_flow()" type="button" style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.9rem; border-radius: 8px; padding: 0.45rem 1rem; background: transparent; cursor: pointer; border: 1px solid var(--ifm-color-emphasis-300); color: var(--ifm-font-color-base); transition: all 0.2s ease; font-weight: 500; position: relative;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.2s ease;" aria-hidden="true">
                <path d="M17 14V2"></path>
                <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path>
              </svg>
              No
            </button>
          </div>
          <div class="feedback-message" style="display: none; margin-left: 0.5rem; animation: fadeIn 0.3s ease-in;"></div>
        </div>
      `;
    }

    paginationNav.parentNode.insertBefore(wrapper, paginationNav);
    addHoverEffects(wrapper);
    feedbackRendered = true;
    console.log('Feedback element rendered above pagination.');
  }

  function addHoverEffects(wrapper) {
    const yesBtn = wrapper.querySelector('.feedback-btn.yes');
    const noBtn = wrapper.querySelector('.feedback-btn.no');

    if (yesBtn) {
      yesBtn.addEventListener('mouseenter', () => {
        yesBtn.style.background = 'var(--ifm-color-emphasis-100)';
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
    }

    if (noBtn) {
      noBtn.addEventListener('mouseenter', () => {
        noBtn.style.background = 'var(--ifm-color-emphasis-100)';
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
    }
  }

  function thumb_up_flow() {
    // Check if feedback already submitted for THIS specific article
    if (FeedbackManager.hasAlreadySubmitted()) return;
    
    const feedbackContainer = document.querySelector('.feedback-container');
    if (!feedbackContainer) return;
    
    showPositiveFeedbackOptions(feedbackContainer);
  }

  function thumb_down_flow() {
    // Check if feedback already submitted for THIS specific article
    if (FeedbackManager.hasAlreadySubmitted()) return;
    
    const feedbackContainer = document.querySelector('.feedback-container');
    if (!feedbackContainer) return;
    
    showNegativeFeedbackOptions(feedbackContainer);
  }

  function showPositiveFeedbackOptions(feedbackContainer = null) {
    if (!feedbackContainer) {
      feedbackContainer = document.querySelector('.feedback-container');
    }
    if (!feedbackContainer) return;

    const feedbackOptions = feedbackContainer.querySelector('.feedback-options');
    const feedbackMessage = feedbackContainer.querySelector('.feedback-message');
    
    if (feedbackOptions) {
      feedbackOptions.style.display = 'none';
    }
    
    if (feedbackMessage) {
      feedbackMessage.innerHTML = `
        <div class="feedback-followup">
          <h3 id="positive-feedback-title" style="color: var(--ifm-font-color-base); margin-bottom: 1rem;">Great! Any additional feedback?</h3>
          <form class="feedback-form">
            <div class="feedback-text-group" style="margin-bottom: 1.5rem;">
              <textarea 
                name="feedback-text" 
                placeholder="Tell us more about what you liked (optional)"
                class="feedback-textarea"
                aria-label="Additional feedback about what you liked"
                aria-labelledby="positive-feedback-title"
                style="width: 100%; min-height: 80px; padding: 0.75rem; border: 1px solid var(--ifm-color-emphasis-300); border-radius: 8px; font-size: 0.9rem; font-family: inherit; resize: vertical; background: var(--ifm-color-emphasis-100); color: var(--ifm-font-color-base);"
              ></textarea>
            </div>
            
            <div class="feedback-form-actions" style="display: flex; gap: 0.75rem;">
              <button type="button" class="feedback-submit-btn" onclick="submitPositiveFeedback()" style="background: var(--ifm-color-primary); color: white; border: none; border-radius: 8px; padding: 0.75rem 1.5rem; font-size: 0.9rem; cursor: pointer; transition: all 0.2s ease; font-weight: 500;">
                Submit feedback
              </button>
              <button type="button" class="feedback-skip-btn" onclick="showFeedbackThanks('positive')" style="background: transparent; color: var(--ifm-font-color-base); border: 1px solid var(--ifm-color-emphasis-300); border-radius: 8px; padding: 0.75rem 1.5rem; font-size: 0.9rem; cursor: pointer; transition: all 0.2s ease; font-weight: 500;">
                Skip
              </button>
            </div>
          </form>
        </div>
      `;
      feedbackMessage.style.display = 'block';
      
      // Focus the textarea for better keyboard accessibility
      const textarea = feedbackContainer.querySelector('textarea[name="feedback-text"]');
      if (textarea) {
        textarea.focus();
        
        // Add keyboard accessibility for textarea
        textarea.addEventListener('keydown', function(e) {
          if (e.key === 'Escape') {
            // Close feedback form on Escape
            showFeedbackThanks('positive');
          }
        });
      }
    }
  }

  function showNegativeFeedbackOptions(feedbackContainer = null) {
    if (!feedbackContainer) {
      feedbackContainer = document.querySelector('.feedback-container');
    }
    if (!feedbackContainer) return;

    const feedbackOptions = feedbackContainer.querySelector('.feedback-options');
    const feedbackMessage = feedbackContainer.querySelector('.feedback-message');

    if (feedbackOptions) feedbackOptions.style.display = 'none';
    if (feedbackMessage) {
      feedbackMessage.innerHTML = `
        <div class="feedback-followup">
          <h3 id="negative-feedback-title" style="color: var(--ifm-font-color-base); margin-bottom: 1rem;">What could we improve?</h3>
          <form class="feedback-form">
            <div class="feedback-radio-group" role="radiogroup" aria-labelledby="negative-feedback-title" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">
              <label class="feedback-radio-option" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border: 1px solid var(--ifm-color-emphasis-300); border-radius: 8px; cursor: pointer; transition: all 0.2s ease; background: var(--ifm-color-emphasis-100);">
                <input type="radio" name="feedback-reason" value="unclear" class="feedback-radio" style="margin: 0;">
                <span class="feedback-radio-label" style="display: flex; align-items: center; gap: 0.5rem; color: var(--ifm-font-color-base);">
                  <i class="ri-question-line" style="font-size: 1.2rem; color: var(--ifm-color-primary);"></i>
                  Unclear or confusing
                </span>
              </label>
              
              <label class="feedback-radio-option" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border: 1px solid var(--ifm-color-emphasis-300); border-radius: 8px; cursor: pointer; transition: all 0.2s ease; background: var(--ifm-color-emphasis-100);">
                <input type="radio" name="feedback-reason" value="incomplete" class="feedback-radio" style="margin: 0;">
                <span class="feedback-radio-label" style="display: flex; align-items: center; gap: 0.5rem; color: var(--ifm-font-color-base);">
                  <i class="ri-file-list-line" style="font-size: 1.2rem; color: var(--ifm-color-primary);"></i>
                  Missing information
                </span>
              </label>
              
              <label class="feedback-radio-option" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border: 1px solid var(--ifm-color-emphasis-300); border-radius: 8px; cursor: pointer; transition: all 0.2s ease; background: var(--ifm-color-emphasis-100);">
                <input type="radio" name="feedback-reason" value="outdated" class="feedback-radio" style="margin: 0;">
                <span class="feedback-radio-label" style="display: flex; align-items: center; gap: 0.5rem; color: var(--ifm-font-color-base);">
                  <i class="ri-time-line" style="font-size: 1.2rem; color: var(--ifm-color-primary);"></i>
                  Outdated content
                </span>
              </label>
              
              <label class="feedback-radio-option" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border: 1px solid var(--ifm-color-emphasis-300); border-radius: 8px; cursor: pointer; transition: all 0.2s ease; background: var(--ifm-color-emphasis-100);">
                <input type="radio" name="feedback-reason" value="other" class="feedback-radio" style="margin: 0;">
                <span class="feedback-radio-label" style="display: flex; align-items: center; gap: 0.5rem; color: var(--ifm-font-color-base);">
                  <i class="ri-more-line" style="font-size: 1.2rem; color: var(--ifm-color-primary);"></i>
                  Something else
                </span>
              </label>
            </div>
            
            <div class="feedback-text-group" style="margin-bottom: 1.5rem;">
              <textarea 
                name="feedback-text" 
                placeholder="Tell us more about what we can improve (optional)"
                class="feedback-textarea"
                aria-label="Additional feedback about what we can improve"
                aria-labelledby="negative-feedback-title"
                style="width: 100%; min-height: 80px; padding: 0.75rem; border: 1px solid var(--ifm-color-emphasis-300); border-radius: 8px; font-size: 0.9rem; font-family: inherit; resize: vertical; background: var(--ifm-color-emphasis-100); color: var(--ifm-font-color-base);"
              ></textarea>
            </div>
            
            <div class="feedback-form-actions" style="display: flex; gap: 0.75rem;">
              <button type="button" class="feedback-submit-btn" onclick="submitNegativeFeedback()" style="background: var(--ifm-color-primary); color: white; border: none; border-radius: 8px; padding: 0.75rem 1.5rem; font-size: 0.9rem; cursor: pointer; transition: all 0.2s ease; font-weight: 500;">
                Submit feedback
              </button>
              <button type="button" class="feedback-skip-btn" onclick="showFeedbackThanks('negative')" style="background: transparent; color: var(--ifm-font-color-base); border: 1px solid var(--ifm-color-emphasis-300); border-radius: 8px; padding: 0.75rem 1.5rem; font-size: 0.9rem; cursor: pointer; transition: all 0.2s ease; font-weight: 500;">
                Skip
              </button>
            </div>
          </form>
        </div>
      `;
      feedbackMessage.style.display = 'block';
      
      // Focus the first radio button for better keyboard accessibility
      const firstRadio = feedbackContainer.querySelector('input[name="feedback-reason"]');
      if (firstRadio) {
        firstRadio.focus();
        
        // Add keyboard accessibility for radio buttons
        const radioButtons = feedbackContainer.querySelectorAll('input[name="feedback-reason"]');
        radioButtons.forEach((radio, index) => {
          radio.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
              e.preventDefault();
              const nextIndex = (index + 1) % radioButtons.length;
              radioButtons[nextIndex].focus();
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
              e.preventDefault();
              const prevIndex = (index - 1 + radioButtons.length) % radioButtons.length;
              radioButtons[prevIndex].focus();
            } else if (e.key === 'Escape') {
              // Close feedback form on Escape
              showFeedbackThanks('negative');
            }
          });
          
          // Clear error message when user selects a radio button
          radio.addEventListener('change', function() {
            const existingError = feedbackContainer.querySelector('.feedback-error-message');
            if (existingError) {
              FeedbackManager.fadeOut(existingError, 200);
            }
          });
        });
        
        // Add keyboard accessibility for textarea
        const textarea = feedbackContainer.querySelector('textarea[name="feedback-text"]');
        if (textarea) {
          textarea.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
              // Close feedback form on Escape
              showFeedbackThanks('negative');
            }
          });
        }
      }
    }
  }

  function submitPositiveFeedback() {
    // Check if feedback already submitted for THIS specific article
    if (FeedbackManager.hasAlreadySubmitted()) return;
    
    const feedbackContainer = document.querySelector('.feedback-container');
    if (!feedbackContainer) return;
    
    const textInput = feedbackContainer.querySelector('textarea[name="feedback-text"]');
    const feedbackText = textInput ? textInput.value.trim() : '';
    
    // Track positive feedback with optional text
    FeedbackManager.trackFeedback('positive', { 
      feedback_text: feedbackText,
      has_text: feedbackText.length > 0,
      text_length: feedbackText.length,
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`
    });
    FeedbackManager.markAsSubmitted();
    
    // Show thank you message
    showFeedbackThanks('positive', null, feedbackText, feedbackContainer);
  }

  function submitNegativeFeedback() {
    // Check if feedback already submitted for THIS specific article
    if (FeedbackManager.hasAlreadySubmitted()) return;
    
    const feedbackContainer = document.querySelector('.feedback-container');
    if (!feedbackContainer) return;
    
    const selectedOption = feedbackContainer.querySelector('input[name="feedback-reason"]:checked');
    if (!selectedOption) {
      // Remove any existing error message
      const existingError = feedbackContainer.querySelector('.feedback-error-message');
      if (existingError) {
        FeedbackManager.fadeOut(existingError, 150);
      }
      
      // Create and show inline validation message
      const errorMsg = document.createElement('p');
      errorMsg.className = 'feedback-error-message';
      errorMsg.textContent = 'Please select a reason before submitting.';
      errorMsg.style.cssText = 'color: var(--ifm-color-danger, #dc2626); font-size: 0.85rem; margin: 0.5rem 0 0 0; padding: 0.5rem; background: var(--ifm-color-danger-lightest, rgba(220, 38, 38, 0.1)); border: 1px solid var(--ifm-color-danger-light, rgba(220, 38, 38, 0.3)); border-radius: 6px;';
      
      // Insert error message after the radio group
      const radioGroup = feedbackContainer.querySelector('.feedback-radio-group');
      if (radioGroup) {
        radioGroup.insertAdjacentElement('afterend', errorMsg);
        
        // Apply smooth fade-in animation
        FeedbackManager.fadeIn(errorMsg, 300);
      }
      
      // Focus the first radio button to help user
      const firstRadio = feedbackContainer.querySelector('input[name="feedback-reason"]');
      if (firstRadio) {
        firstRadio.focus();
      }
      
      return;
    }
    
    const reason = selectedOption.value;
    const textInput = feedbackContainer.querySelector('textarea[name="feedback-text"]');
    const feedbackText = textInput ? textInput.value.trim() : '';
    
    // Track specific negative feedback with optional text
    FeedbackManager.trackFeedback('negative', { 
      reason,
      feedback_text: feedbackText,
      has_text: feedbackText.length > 0,
      text_length: feedbackText.length,
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`
    });
    FeedbackManager.markAsSubmitted();
    
    // Show thank you message
    showFeedbackThanks('negative', reason, feedbackText, feedbackContainer);
  }

  function showFeedbackThanks(type, reason = null, feedbackText = null, feedbackContainer = null) {
    if (!feedbackContainer) {
      feedbackContainer = document.querySelector('.feedback-container');
    }
    if (!feedbackContainer) return;

    const messages = {
      positive: "🎉 Thanks for your feedback!",
      negative: reason ? `💡 We appreciate your feedback on "${reason}"!` : "💡 We appreciate your feedback!"
    };

    const feedbackOptions = feedbackContainer.querySelector('.feedback-options');
    const feedbackMessage = feedbackContainer.querySelector('.feedback-message');

    if (feedbackOptions) feedbackOptions.style.display = 'none';
    if (feedbackMessage) {
      feedbackMessage.innerHTML = `<p class="feedback-thanks" style="font-weight: 500; color: var(--ifm-font-color-base);">${messages[type]}</p>`;
      feedbackMessage.style.display = 'block';
      
      // Add ARIA attributes for screen reader announcements
      feedbackMessage.setAttribute('role', 'status');
      feedbackMessage.setAttribute('aria-live', 'polite');
      feedbackMessage.setAttribute('aria-atomic', 'true');
    }
  }

  function initFeedbackSystem() {
    if (!shouldShowFeedback()) {
      return;
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', renderFeedbackElement);
    } else {
      renderFeedbackElement();
    }

    const observer = new MutationObserver(() => {
      if (!feedbackRendered && shouldShowFeedback()) {
        renderFeedbackElement();
      }
    });
    observer.observe(document.querySelector('.main-wrapper') || document.body, { childList: true, subtree: true });

    window.addEventListener('popstate', () => {
      feedbackRendered = false;
      // Reset global feedback state when navigating
      FeedbackManager.hasSubmitted = false;
      setTimeout(renderFeedbackElement, 100);
    });

    const originalPushState = history.pushState;
    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      feedbackRendered = false;
      // Reset global feedback state when navigating
      FeedbackManager.hasSubmitted = false;
      setTimeout(renderFeedbackElement, 100);
    };

    const originalReplaceState = history.replaceState;
    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      feedbackRendered = false;
      // Reset global feedback state when navigating
      FeedbackManager.hasSubmitted = false;
      setTimeout(renderFeedbackElement, 100);
    };
  }

  window.addEventListener("load", initFeedbackSystem);
  if (document.readyState !== 'loading') {
    initFeedbackSystem();
  }

  window.thumb_up_flow = thumb_up_flow;
  window.thumb_down_flow = thumb_down_flow;
  window.submitPositiveFeedback = submitPositiveFeedback;
  window.submitNegativeFeedback = submitNegativeFeedback;
  window.initFeedbackSystem = initFeedbackSystem;

  window.debugFeedback = function() {
    console.log('=== FEEDBACK SYSTEM STATUS ===');
    console.log('Script loaded: ✓');
    console.log('Current URL:', window.location.href);
    console.log('DOM ready state:', document.readyState);
    console.log('Body exists:', !!document.body);
    console.log('Should show feedback:', shouldShowFeedback());
    console.log('Has already submitted:', FeedbackManager.hasAlreadySubmitted());
    console.log('Existing feedback element:', !!document.querySelector(".feedback-container"));
    console.log('Feedback rendered flag:', feedbackRendered);
    console.log('==============================');
  };

  window.clearFeedbackStorage = function() {
    const currentPage = FeedbackManager.getCurrentPath();
    localStorage.removeItem(`article_feedback_${currentPage}`);
    console.log('Cleared feedback storage for:', currentPage);
    feedbackRendered = false;
    setTimeout(renderFeedbackElement, 100);
  };

  // Clear all feedback storage for debugging
  window.clearAllFeedbackStorage = function() {
    const keys = Object.keys(localStorage).filter(key => key.startsWith('article_feedback_'));
    keys.forEach(key => localStorage.removeItem(key));
    console.log('Cleared all feedback storage:', keys);
    feedbackRendered = false;
    setTimeout(renderFeedbackElement, 100);
  };
}