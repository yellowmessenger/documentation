// Simple Feedback System - Original Working Version
if (typeof window !== 'undefined') {
  console.log('FeedbackFooter.js loaded');
  
  // Ensure gtag is available to prevent runtime errors
  if (!window.gtag) {
    window.gtag = function() {
      console.log('gtag fallback called:', arguments);
    };
  }

  const FeedbackManager = {
    hasSubmitted: false,
    currentPage: window.location.pathname,

    hasAlreadySubmitted() {
      const stored = localStorage.getItem(`article_feedback_${this.currentPage}`);
      return stored === 'true';
    },

    markAsSubmitted() {
      this.hasSubmitted = true;
      localStorage.setItem(`article_feedback_${this.currentPage}`, 'true');
    },

    trackFeedback(type, additionalData = {}) {
      // Send to analytics with improved error handling
      this.safeGtag('event', 'feedback_submitted', {
        feedback_type: type,
        page_path: this.currentPage,
        ...additionalData
      });
      
      console.log('Feedback submitted:', { type, page: this.currentPage, ...additionalData });
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
    const pathname = window.location.pathname;
    if (pathname !== lastPathname) {
      feedbackRendered = false;
      lastPathname = pathname;
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

    // Check if feedback has already been submitted for this article
    const alreadySubmitted = FeedbackManager.hasAlreadySubmitted();
    const submittedFeedback = localStorage.getItem(`article_feedback_${FeedbackManager.currentPage}`);

    const wrapper = document.createElement("div");
    
    if (alreadySubmitted && submittedFeedback) {
      // Show thank you message if feedback was already submitted
      wrapper.innerHTML = `
        <div class="feedback-container" style="display: flex; align-items: center; gap: 1rem; font-size: 0.9rem; margin-top: 2rem; padding-top: 1.75rem; border-top: 1px solid var(--ifm-color-emphasis-300, #e5e7eb); color: var(--ifm-font-color-base, #374151); flex-wrap: wrap;">
          <span style="font-weight: 500; color: var(--ifm-font-color-base, #111827); font-size: 1.25rem;">Was this article helpful?</span>
          <div class="feedback-thanks" style="display: flex; align-items: center; gap: 0.5rem; color: var(--ifm-color-primary, #0066cc); font-weight: 500;">
            <span>✅</span>
            <span>Thank you for your feedback!</span>
          </div>
        </div>
      `;
    } else {
      // Show normal feedback buttons
      wrapper.innerHTML = `
        <div class="feedback-container" style="display: flex; align-items: center; gap: 1rem; font-size: 0.9rem; margin-top: 2rem; padding-top: 1.75rem; border-top: 1px solid var(--ifm-color-emphasis-300, #e5e7eb); color: var(--ifm-font-color-base, #374151); flex-wrap: wrap;">
          <span style="font-weight: 500; color: var(--ifm-font-color-base, #111827); font-size: 1.25rem;">Was this article helpful?</span>
          <div class="feedback-options" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button class="feedback-btn yes" id="liked_docs" onclick="thumb_up_flow()" title="Yes" aria-label="Yes, this page was helpful" type="button" style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.9rem; border-radius: 8px; padding: 0.45rem 1rem; background: transparent; cursor: pointer; border: 1px solid var(--ifm-color-emphasis-300, #e5e7eb); color: var(--ifm-font-color-base, #111827); transition: all 0.2s ease; font-weight: 500;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.2s ease;">
                <path d="M7 10v12"></path>
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
              </svg>
              Yes
            </button>
            <button class="feedback-btn no" id="disliked_docs" onclick="thumb_down_flow()" title="No" aria-label="No, this page needs improvement" type="button" style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.9rem; border-radius: 8px; padding: 0.45rem 1rem; background: transparent; cursor: pointer; border: 1px solid var(--ifm-color-emphasis-300, #e5e7eb); color: var(--ifm-font-color-base, #111827); transition: all 0.2s ease; font-weight: 500;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.2s ease;">
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
        yesBtn.style.background = 'var(--ifm-color-emphasis-100, rgba(0, 0, 0, 0.04))';
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
        noBtn.style.background = 'var(--ifm-color-emphasis-100, rgba(0, 0, 0, 0.04))';
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
  }

  function thumb_up_flow() {
    if (FeedbackManager.hasSubmitted) return;
    FeedbackManager.trackFeedback('positive');
    FeedbackManager.markAsSubmitted();
    showFeedbackThanks('positive');
  }

  function thumb_down_flow() {
    if (FeedbackManager.hasSubmitted) return;
    showNegativeFeedbackOptions();
  }

  function showNegativeFeedbackOptions() {
    const feedbackContainer = document.querySelector('.feedback-container');
    if (!feedbackContainer) return;

    const feedbackOptions = feedbackContainer.querySelector('.feedback-options');
    const feedbackMessage = feedbackContainer.querySelector('.feedback-message');

    if (feedbackOptions) feedbackOptions.style.display = 'none';
    if (feedbackMessage) {
      feedbackMessage.innerHTML = `
        <div class="feedback-followup">
          <h3 style="color: var(--ifm-font-color-base, #111827); margin-bottom: 1rem;">What could we improve?</h3>
          <form class="feedback-form">
            <div class="feedback-radio-group" style="display: flex; flex-direction: column; gap: 0.75rem;">
              <label class="feedback-radio-option" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border: 1px solid var(--ifm-color-emphasis-300, #e5e7eb); border-radius: 8px; cursor: pointer; transition: all 0.2s ease; background: var(--ifm-color-emphasis-100, #f9fafb);">
                <input type="radio" name="feedback-reason" value="unclear" class="feedback-radio" style="margin: 0;">
                <span class="feedback-radio-label" style="display: flex; align-items: center; gap: 0.5rem; color: var(--ifm-font-color-base, #111827);">
                  <i class="ri-question-line" style="font-size: 1.2rem; color: var(--ifm-color-primary, #0066cc);"></i>
                  Unclear or confusing
                </span>
              </label>
              
              <label class="feedback-radio-option" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border: 1px solid var(--ifm-color-emphasis-300, #e5e7eb); border-radius: 8px; cursor: pointer; transition: all 0.2s ease; background: var(--ifm-color-emphasis-100, #f9fafb);">
                <input type="radio" name="feedback-reason" value="incomplete" class="feedback-radio" style="margin: 0;">
                <span class="feedback-radio-label" style="display: flex; align-items: center; gap: 0.5rem; color: var(--ifm-font-color-base, #111827);">
                  <i class="ri-file-list-line" style="font-size: 1.2rem; color: var(--ifm-color-primary, #0066cc);"></i>
                  Missing information
                </span>
              </label>
              
              <label class="feedback-radio-option" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border: 1px solid var(--ifm-color-emphasis-300, #e5e7eb); border-radius: 8px; cursor: pointer; transition: all 0.2s ease; background: var(--ifm-color-emphasis-100, #f9fafb);">
                <input type="radio" name="feedback-reason" value="outdated" class="feedback-radio" style="margin: 0;">
                <span class="feedback-radio-label" style="display: flex; align-items: center; gap: 0.5rem; color: var(--ifm-font-color-base, #111827);">
                  <i class="ri-time-line" style="font-size: 1.2rem; color: var(--ifm-color-primary, #0066cc);"></i>
                  Outdated content
                </span>
              </label>
              
              <label class="feedback-radio-option" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border: 1px solid var(--ifm-color-emphasis-300, #e5e7eb); border-radius: 8px; cursor: pointer; transition: all 0.2s ease; background: var(--ifm-color-emphasis-100, #f9fafb);">
                <input type="radio" name="feedback-reason" value="other" class="feedback-radio" style="margin: 0;">
                <span class="feedback-radio-label" style="display: flex; align-items: center; gap: 0.5rem; color: var(--ifm-font-color-base, #111827);">
                  <i class="ri-more-line" style="font-size: 1.2rem; color: var(--ifm-color-primary, #0066cc);"></i>
                  Something else
                </span>
              </label>
            </div>
            
            <div class="feedback-form-actions" style="display: flex; gap: 0.75rem; margin-top: 1.5rem;">
              <button type="button" class="feedback-submit-btn" onclick="submitNegativeFeedback()" style="background: var(--ifm-color-primary, #0066cc); color: white; border: none; border-radius: 8px; padding: 0.75rem 1.5rem; font-size: 0.9rem; cursor: pointer; transition: all 0.2s ease; font-weight: 500;">
                Submit feedback
              </button>
              <button type="button" class="feedback-skip-btn" onclick="showFeedbackThanks('negative')" style="background: transparent; color: var(--ifm-font-color-base, #111827); border: 1px solid var(--ifm-color-emphasis-300, #e5e7eb); border-radius: 8px; padding: 0.75rem 1.5rem; font-size: 0.9rem; cursor: pointer; transition: all 0.2s ease; font-weight: 500;">
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
    
    const reason = selectedOption.value;
    
    // Track specific negative feedback
    FeedbackManager.trackFeedback('negative', { reason });
    FeedbackManager.markAsSubmitted();
    
    // Show thank you message
    showFeedbackThanks('negative', reason);
  }

  function showFeedbackThanks(type, reason = null) {
    const feedbackContainer = document.querySelector('.feedback-container');
    if (!feedbackContainer) return;

    const messages = {
      positive: "🎉 Thanks for your feedback!",
      negative: reason ? `💡 We appreciate your feedback on "${reason}"!` : "💡 We appreciate your feedback!"
    };

    const feedbackOptions = feedbackContainer.querySelector('.feedback-options');
    const feedbackMessage = feedbackContainer.querySelector('.feedback-message');

    if (feedbackOptions) feedbackOptions.style.display = 'none';
    if (feedbackMessage) {
      feedbackMessage.innerHTML = `<p style="font-weight: 500; color: var(--ifm-font-color-base, #111827);">${messages[type]}</p>`;
      feedbackMessage.style.display = 'block';
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
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('popstate', () => {
      feedbackRendered = false;
      setTimeout(renderFeedbackElement, 100);
    });

    const originalPushState = history.pushState;
    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      feedbackRendered = false;
      setTimeout(renderFeedbackElement, 100);
    };

    const originalReplaceState = history.replaceState;
    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      feedbackRendered = false;
      setTimeout(renderFeedbackElement, 100);
    };
  }

  window.addEventListener("load", initFeedbackSystem);
  if (document.readyState !== 'loading') {
    initFeedbackSystem();
  }

  window.thumb_up_flow = thumb_up_flow;
  window.thumb_down_flow = thumb_down_flow;
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
    const currentPage = window.location.pathname;
    localStorage.removeItem(`article_feedback_${currentPage}`);
    console.log('Cleared feedback storage for:', currentPage);
    feedbackRendered = false;
    setTimeout(renderFeedbackElement, 100);
  };
}