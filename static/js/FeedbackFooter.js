// This check ensures the code only runs in a browser environment
if (typeof window !== 'undefined') {
  window.addEventListener("load", () => {
    const observer = new MutationObserver(() => {
      const parentDOM = document.getElementById("__docusaurus");
      if (!parentDOM) return;

      // This targets the container that holds the main article content
      const container = parentDOM.querySelector('[class*="docItemContainer"]');
      const existingFooter = document.getElementById("feedbackFooter");
      const isHomepage = document.body.classList.contains("homepage");

      if (container && !isHomepage && !existingFooter) {
        renderFeedbackFooter(container);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  });

  // Original analytics functions
  function thumb_up_flow() {
    console.log("Feedback JS: thumb_up_flow triggered");
    // Your existing analytics/bot trigger code
    window.YellowMessengerPlugin?.openBot();
    window.frames?.ymIframe?.postMessage(
      JSON.stringify({
        event_code: "trigger-journey",
        data: { journeySlug: "likes_sxpmll" },
      })
    );
    // You can optionally change the UI after click
    const feedbackContent = document.getElementById("feedbackFooter");
    if(feedbackContent) {
        feedbackContent.innerHTML = `<h3 class="feedback-thanks-simple">Thank you!</h3>`;
    }
  }

  function thumb_down_flow() {
    console.log("Feedback JS: thumb_down_flow triggered");
    // Your existing analytics/bot trigger code
    window.YellowMessengerPlugin?.openBot();
    window.frames?.ymIframe?.postMessage(
      JSON.stringify({
        event_code: "trigger-journey",
        data: { journeySlug: "dislikes_dsxlbu" },
      })
    );
     // You can optionally change the UI after click
     const feedbackContent = document.getElementById("feedbackFooter");
     if(feedbackContent) {
         feedbackContent.innerHTML = `<h3 class="feedback-thanks-simple">Thank you for your feedback.</h3>`;
     }
  }

  // Renders the feedback footer with HTML-based layout adjustments
  function renderFeedbackFooter(container) {
    const wrapper = document.createElement("div");
    // The innerHTML now includes a horizontal rule for spacing and a centered div
    wrapper.innerHTML = `
      <hr style="margin: 4rem 0 2rem 0; border-top: 1px solid #eee; border-bottom: none;" />
      <div align="center">
        <div id="feedbackFooter" class="feedbackFooter__content">
          <h3>Was this article helpful?</h3>
          <div class="feedbackButtons">
            <button id="liked_docs" onclick="thumb_up_flow()" title="Yes">
              <i class="ri-thumb-up-fill"></i>
            </button>
            <button id="disliked_docs" onclick="thumb_down_flow()" title="No">
              <i class="ri-thumb-down-fill"></i>
            </button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(wrapper);
  }
}
