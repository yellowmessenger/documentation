// Feedback System Debug Helper
// Run this in browser console to debug feedback system

if (typeof window !== 'undefined') {
  window.debugFeedback = function() {
    console.log('=== FEEDBACK SYSTEM DEBUG ===');
    
    // Check if script is loaded
    console.log('1. Script loaded:', typeof window.thumb_up_flow === 'function');
    
    // Check current page info
    console.log('2. Current page:', window.location.pathname);
    console.log('3. Body classes:', document.body.className);
    
    // Check for existing feedback
    const existingFooter = document.getElementById("feedbackFooter");
    console.log('4. Existing feedback element:', !!existingFooter);
    
    // Check localStorage
    const feedbackKey = `feedback_${window.location.pathname}`;
    const stored = localStorage.getItem(feedbackKey);
    console.log('5. LocalStorage feedback:', stored);
    
    // Check for containers
    const parentDOM = document.getElementById("__docusaurus");
    console.log('6. Docusaurus container:', !!parentDOM);
    
    if (parentDOM) {
      const selectors = [
        '[class*="docItemContainer"]',
        '[class*="main"]',
        'main',
        '[class*="content"]',
        '.container',
        '#__docusaurus > div'
      ];
      
      console.log('7. Available containers:');
      selectors.forEach(selector => {
        const element = parentDOM.querySelector(selector);
        console.log(`   ${selector}:`, !!element, element?.className || '');
      });
    }
    
    // Check if should show feedback
    const pathname = window.location.pathname;
    const excludedPaths = ['/', '/whats-new', '/api', '/search', '/404.html'];
    const isExcluded = excludedPaths.some(path => pathname === path || pathname.startsWith(path + '/'));
    const isHomepage = document.body.classList.contains("homepage");
    const isDocsPage = pathname.startsWith('/docs/');
    
    console.log('8. Should show feedback:');
    console.log('   - Path excluded:', isExcluded);
    console.log('   - Is homepage:', isHomepage);
    console.log('   - Is docs page:', isDocsPage);
    console.log('   - Final result:', !isExcluded && !isHomepage && !existingFooter && isDocsPage);
    
    console.log('=== END DEBUG ===');
  };
  
  // Auto-run debug on load
  window.addEventListener('load', () => {
    setTimeout(() => {
      console.log('Auto-running feedback debug...');
      window.debugFeedback();
    }, 1000);
  });
  
  console.log('Feedback debug helper loaded. Run debugFeedback() to check system status.');
}
