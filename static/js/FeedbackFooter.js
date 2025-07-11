// This check ensures the code only runs in a browser environment, not during the server-side build
if (typeof window !== 'undefined') {
  window.addEventListener("load", () => {
    console.log("Feedback JS: Script loaded.");

    const observer = new MutationObserver(() => {
      const parentDOM = document.getElementById("__docusaurus");
      if (!parentDOM) {
        return;
      }

      const container = parentDOM.querySelector('[class*="docItemContainer"]');
      
      const existingFooter = document.getElementById("feedbackFooter");
      const isHomepage = document.body.classList.contains("homepage");

      // Only render if we are on a doc page and the footer doesn't already exist
      if (container && !isHomepage && !existingFooter) {
        console.log("Feedback JS: Rendering footer inside docItemContainer.");
        renderFeedbackFooter(container);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });

  // This function is called when a user clicks a feedback button
  function handleFeedbackClick(type) {
    const feedbackContent = document.getElementById("feedbackFooter");
    if (!feedbackContent) return;

    console.log(`Feedback JS: Clicked ${type}`);

    // Call the original tracking function based on the button clicked
    if (type === 'up') {
      thumb_up_flow();
    } else {
      thumb_down_flow();
    }

    // Provide immediate visual feedback to the user by changing the HTML
    feedbackContent.innerHTML = `
      <div class="feedbackThanks">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M10.07,16.42l-4.5-4.5l1.414-1.414L10.07,13.59l6.5-6.5l1.414,1.414L10.07,16.42z"></path></svg>
        <h3>Thank you for your feedback!</h3>
      </div>
    `;
  }

  // Original function for "thumb up"
  function thumb_up_flow() {
    console.log("Feedback JS: thumb_up_flow triggered");
    window.YellowMessengerPlugin?.openBot();
    window.frames?.ymIframe?.postMessage(
      JSON.stringify({
        event_code: "trigger-journey",
        data: { journeySlug: "likes_sxpmll" },
      })
    );
  }

  // Original function for "thumb down"
  function thumb_down_flow() {
    console.log("Feedback JS: thumb_down_flow triggered");
    window.frames?.ymIframe?.postMessage(
      JSON.stringify({
        event_code: "trigger-journey",
        data: { journeySlug: "dislikes_dsxlbu" },
      })
    );
  }

  // Renders the initial state of the feedback footer
  function renderFeedbackFooter(container) {
    const wrapper = document.createElement("div");
    wrapper.className = "feedbackFooter__cont";
    wrapper.innerHTML = `
      <div id="feedbackFooter" class="feedbackFooter__content">
        <h3>Was this article helpful?</h3>
        <div class="feedbackButtons">
          <button id="liked_docs" onclick="handleFeedbackClick('up')">
            <i class="ri-thumb-up-fill"></i>
          </button>
          <button id="disliked_docs" onclick="handleFeedbackClick('down')">
            <i class="ri-thumb-down-fill"></i>
          </button>
        </div>
      </div>
    `;

    container.appendChild(wrapper);
  }
}
