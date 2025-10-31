/**
 * Add method-specific classes to HTTP method tags in API documentation
 * This allows proper styling via CSS
 */

export default (function () {
  if (typeof window === 'undefined') {
    return null;
  }

  function addMethodClasses() {
    // Find all pre tags within API method articles
    const preTags = document.querySelectorAll('article.api-method pre, .openapi-markdown pre');
    
    preTags.forEach(pre => {
      const firstSpan = pre.querySelector('span:first-child');
      if (firstSpan && firstSpan.textContent) {
        const method = firstSpan.textContent.trim().toUpperCase();
        
        // Add class based on method type
        switch(method) {
          case 'POST':
            firstSpan.classList.add('method-post');
            break;
          case 'GET':
            firstSpan.classList.add('method-get');
            break;
          case 'DELETE':
            firstSpan.classList.add('method-delete');
            break;
          case 'PUT':
            firstSpan.classList.add('method-put');
            break;
          case 'PATCH':
            firstSpan.classList.add('method-patch');
            break;
        }
      }
    });
  }

  // Run on initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addMethodClasses);
  } else {
    addMethodClasses();
  }

  // Re-run when navigating between pages (for SPA navigation)
  if (window.addEventListener) {
    window.addEventListener('load', addMethodClasses);
    // Listen for Docusaurus route changes
    window.addEventListener('popstate', () => {
      setTimeout(addMethodClasses, 100);
    });
  }

  // For Docusaurus, also hook into route updates
  if (typeof window !== 'undefined' && window.docusaurus) {
    const originalPush = window.history.pushState;
    window.history.pushState = function() {
      originalPush.apply(window.history, arguments);
      setTimeout(addMethodClasses, 100);
    };
  }

  return null;
})();

