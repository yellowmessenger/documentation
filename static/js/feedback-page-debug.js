// Debug script to check feedback visibility on specific pages
if (typeof window !== 'undefined') {
  window.debugFeedbackPage = function() {
    console.log('=== FEEDBACK PAGE DEBUG ===');
    
    const pathname = window.location.pathname;
    console.log('Current path:', pathname);
    
    // Check excluded paths
    const excludedPaths = ['/', '/whats-new', '/api', '/search', '/404.html'];
    const isExcluded = excludedPaths.some(path => pathname === path || pathname.startsWith(path + '/'));
    console.log('Is excluded:', isExcluded);
    
    // Check homepage class
    const isHomepage = document.body.classList.contains("homepage");
    console.log('Is homepage:', isHomepage);
    
    // Check if docs page
    const isDocsPage = pathname.startsWith('/docs/') || pathname.includes('test-feedback');
    console.log('Is docs page:', isDocsPage);
    
    // Check localStorage
    const feedbackKey = `feedback_${pathname}`;
    const stored = localStorage.getItem(feedbackKey);
    console.log('Stored feedback for this page:', stored);
    console.log('Feedback key:', feedbackKey);
    
    // Check existing feedback element
    const existingFooter = document.querySelector(".feedback-container");
    console.log('Existing feedback element:', !!existingFooter);
    
    // Check all localStorage feedback entries
    console.log('All feedback entries in localStorage:');
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('feedback_')) {
        console.log(`  ${key}: ${localStorage.getItem(key)}`);
      }
    }
    
    // Final decision
    const shouldShow = !isExcluded && !isHomepage && !stored && isDocsPage;
    console.log('Should show feedback:', shouldShow);
    
    return {
      pathname,
      isExcluded,
      isHomepage,
      isDocsPage,
      stored,
      shouldShow
    };
  };
  
  // Function to clear all feedback localStorage
  window.clearFeedbackStorage = function() {
    console.log('Clearing all feedback localStorage entries...');
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('feedback_')) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));
    console.log('Cleared feedback entries:', keysToRemove);
    console.log('Page will reload to test feedback visibility...');
    setTimeout(() => window.location.reload(), 1000);
  };
  
  // Auto-run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.debugFeedbackPage);
  } else {
    window.debugFeedbackPage();
  }
}
