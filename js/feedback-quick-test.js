// Quick feedback test - runs immediately and shows results
(function() {
  console.log('=== QUICK FEEDBACK TEST ===');
  
  const pathname = window.location.pathname;
  console.log('Current path:', pathname);
  
  // Check if it's a docs page
  const isDocsPage = pathname.startsWith('/docs/');
  console.log('Is docs page:', isDocsPage);
  
  // Check localStorage
  const feedbackKey = `feedback_${pathname}`;
  const stored = localStorage.getItem(feedbackKey);
  console.log('Stored feedback:', stored);
  console.log('Feedback key:', feedbackKey);
  
  // Check if feedback element exists
  const existingFeedback = document.querySelector('.feedback-container');
  console.log('Existing feedback element:', !!existingFeedback);
  
  // Check body classes
  console.log('Body classes:', document.body.className);
  
  // Check if homepage
  const isHomepage = document.body.classList.contains('homepage');
  console.log('Is homepage:', isHomepage);
  
  // Check excluded paths
  const excludedPaths = ['/', '/whats-new', '/api', '/search', '/404.html'];
  const isExcluded = excludedPaths.some(path => pathname === path || pathname.startsWith(path + '/'));
  console.log('Is excluded:', isExcluded);
  
  // Final decision
  const shouldShow = !isExcluded && !isHomepage && !stored && isDocsPage;
  console.log('Should show feedback:', shouldShow);
  
  // If should show but doesn't exist, try to create it
  if (shouldShow && !existingFeedback) {
    console.log('Attempting to create feedback element...');
    
    // Create simple feedback element
    const feedbackHTML = `
      <div class="feedback-container" style="margin: 2rem 0; padding: 1rem; border: 2px solid #007acc; background: #f0f8ff;">
        <h3 style="margin: 0 0 1rem 0; color: #007acc;">🧪 FEEDBACK TEST ELEMENT</h3>
        <p style="margin: 0 0 1rem 0;">This is a test feedback element to verify the system is working.</p>
        <div style="display: flex; gap: 1rem;">
          <button onclick="alert('Yes clicked!')" style="padding: 0.5rem 1rem; background: #007acc; color: white; border: none; border-radius: 4px; cursor: pointer;">Yes</button>
          <button onclick="alert('No clicked!')" style="padding: 0.5rem 1rem; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">No</button>
        </div>
        <p style="margin: 1rem 0 0 0; font-size: 0.8rem; color: #666;">Path: ${pathname}</p>
      </div>
    `;
    
    // Try to find a good place to insert it
    const paginationNav = document.querySelector('.pagination-nav');
    if (paginationNav) {
      paginationNav.insertAdjacentHTML('beforebegin', feedbackHTML);
      console.log('✅ Test feedback element created above pagination');
    } else {
      // Try other locations
      const main = document.querySelector('main');
      if (main) {
        main.insertAdjacentHTML('beforeend', feedbackHTML);
        console.log('✅ Test feedback element created in main');
      } else {
        document.body.insertAdjacentHTML('beforeend', feedbackHTML);
        console.log('✅ Test feedback element created in body');
      }
    }
  }
  
  // Show all localStorage feedback entries
  console.log('All feedback localStorage entries:');
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('feedback_')) {
      console.log(`  ${key}: ${localStorage.getItem(key)}`);
    }
  }
  
  console.log('=== END QUICK TEST ===');
  
  // Add global functions for manual testing
  window.clearAllFeedback = function() {
    console.log('Clearing all feedback localStorage...');
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('feedback_')) {
        keysToRemove.push(key);
        localStorage.removeItem(key);
      }
    }
    console.log('Cleared keys:', keysToRemove);
    console.log('Reloading page...');
    setTimeout(() => window.location.reload(), 1000);
  };
  
  window.forceShowFeedback = function() {
    console.log('Forcing feedback to show...');
    // Remove any existing feedback
    const existing = document.querySelector('.feedback-container');
    if (existing) existing.remove();
    
    // Create and show feedback
    const feedbackHTML = `
      <div class="feedback-container" style="margin: 2rem 0; padding: 1rem; border: 2px solid #28a745; background: #f8fff8;">
        <h3 style="margin: 0 0 1rem 0; color: #28a745;">✅ FORCED FEEDBACK ELEMENT</h3>
        <p style="margin: 0 0 1rem 0;">This feedback element was forced to show for testing.</p>
        <div style="display: flex; gap: 1rem;">
          <button onclick="alert('Yes clicked!')" style="padding: 0.5rem 1rem; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">Yes</button>
          <button onclick="alert('No clicked!')" style="padding: 0.5rem 1rem; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">No</button>
        </div>
      </div>
    `;
    
    const paginationNav = document.querySelector('.pagination-nav');
    if (paginationNav) {
      paginationNav.insertAdjacentHTML('beforebegin', feedbackHTML);
    } else {
      const main = document.querySelector('main');
      if (main) {
        main.insertAdjacentHTML('beforeend', feedbackHTML);
      } else {
        document.body.insertAdjacentHTML('beforeend', feedbackHTML);
      }
    }
    console.log('✅ Forced feedback element created');
  };
  
  console.log('Available functions: clearAllFeedback(), forceShowFeedback()');
})();
