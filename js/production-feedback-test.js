// Production Feedback Test - Simple test to verify feedback system on production
(function() {
  console.log('🚀 PRODUCTION FEEDBACK TEST STARTED');
  
  // Test 1: Check if scripts loaded
  console.log('✅ Script loaded successfully');
  
  // Test 2: Check current page
  const pathname = window.location.pathname;
  console.log('📍 Current path:', pathname);
  
  // Test 3: Check if it's a docs page
  const isDocsPage = pathname.startsWith('/docs/');
  console.log('📚 Is docs page:', isDocsPage);
  
  // Test 4: Check localStorage
  const feedbackKey = `feedback_${pathname}`;
  const stored = localStorage.getItem(feedbackKey);
  console.log('💾 Stored feedback:', stored);
  
  // Test 5: Check existing feedback element
  const existingFeedback = document.querySelector('.feedback-container');
  console.log('🎯 Existing feedback element:', !!existingFeedback);
  
  // Test 6: Create a visible test element
  if (isDocsPage && !existingFeedback) {
    console.log('🔧 Creating test feedback element...');
    
    const testHTML = `
      <div class="feedback-container" style="
        margin: 2rem 0; 
        padding: 1.5rem; 
        border: 3px solid #ff6b35; 
        background: linear-gradient(135deg, #fff5f5, #ffe8e8);
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(255, 107, 53, 0.2);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      ">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
          <div style="
            width: 40px; 
            height: 40px; 
            background: #ff6b35; 
            border-radius: 50%; 
            display: flex; 
            align-items: center; 
            justify-content: center;
            color: white;
            font-size: 20px;
            font-weight: bold;
          ">🧪</div>
          <div>
            <h3 style="margin: 0; color: #ff6b35; font-size: 18px; font-weight: 600;">
              PRODUCTION FEEDBACK TEST
            </h3>
            <p style="margin: 0; color: #666; font-size: 14px;">
              This test element confirms the feedback system is working on production
            </p>
          </div>
        </div>
        
        <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
          <button onclick="alert('✅ Yes button works!')" style="
            padding: 0.75rem 1.5rem; 
            background: #28a745; 
            color: white; 
            border: none; 
            border-radius: 8px; 
            cursor: pointer;
            font-weight: 500;
            transition: all 0.2s ease;
          " onmouseover="this.style.background='#218838'" onmouseout="this.style.background='#28a745'">
            ✅ Yes - Working!
          </button>
          <button onclick="alert('❌ No button works!')" style="
            padding: 0.75rem 1.5rem; 
            background: #dc3545; 
            color: white; 
            border: none; 
            border-radius: 8px; 
            cursor: pointer;
            font-weight: 500;
            transition: all 0.2s ease;
          " onmouseover="this.style.background='#c82333'" onmouseout="this.style.background='#dc3545'">
            ❌ No - Working!
          </button>
        </div>
        
        <div style="
          background: #f8f9fa; 
          padding: 1rem; 
          border-radius: 8px; 
          border-left: 4px solid #ff6b35;
          font-size: 13px;
          color: #495057;
        ">
          <strong>Debug Info:</strong><br>
          Path: ${pathname}<br>
          Stored: ${stored || 'none'}<br>
          Docs Page: ${isDocsPage}<br>
          Timestamp: ${new Date().toLocaleString()}
        </div>
      </div>
    `;
    
    // Try to insert the test element
    const paginationNav = document.querySelector('.pagination-nav');
    if (paginationNav) {
      paginationNav.insertAdjacentHTML('beforebegin', testHTML);
      console.log('✅ Test element created above pagination');
    } else {
      const main = document.querySelector('main');
      if (main) {
        main.insertAdjacentHTML('beforeend', testHTML);
        console.log('✅ Test element created in main');
      } else {
        document.body.insertAdjacentHTML('beforeend', testHTML);
        console.log('✅ Test element created in body');
      }
    }
  } else if (existingFeedback) {
    console.log('✅ Real feedback element already exists');
  } else {
    console.log('❌ Not a docs page or other issue');
  }
  
  // Test 7: Show all localStorage feedback entries
  console.log('📋 All feedback localStorage entries:');
  let foundAny = false;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('feedback_')) {
      console.log(`  ${key}: ${localStorage.getItem(key)}`);
      foundAny = true;
    }
  }
  if (!foundAny) {
    console.log('  (none found)');
  }
  
  console.log('🏁 PRODUCTION FEEDBACK TEST COMPLETED');
  
  // Add global function to clear all feedback
  window.clearAllProductionFeedback = function() {
    console.log('🧹 Clearing all production feedback...');
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('feedback_')) {
        keysToRemove.push(key);
        localStorage.removeItem(key);
      }
    }
    console.log('🗑️ Cleared keys:', keysToRemove);
    console.log('🔄 Reloading page...');
    setTimeout(() => window.location.reload(), 1000);
  };
  
  console.log('💡 Available function: clearAllProductionFeedback()');
})();
