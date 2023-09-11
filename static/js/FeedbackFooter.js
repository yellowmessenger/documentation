window.onload = function () {
  setInterval(renderFeedbackFooter, 2000);
  // => {
  // renderFeedbackFooter();
  // }, 2000);
};

function thumb_up_flow () {
  console.log("thumb_up_flow")
  window.YellowMessengerPlugin.openBot()
  window?.frames?.ymIframe?.postMessage(JSON.stringify({
    event_code: 'trigger-journey',
    data: {
      journeySlug: "likeflow_vjrebs"
    }
  }));
}

function thumb_down_flow () {
  console.log("thumb_down_flow")
  window.YellowMessengerPlugin.openBot()
  window?.frames?.ymIframe?.postMessage(JSON.stringify({
    event_code: 'trigger-journey',
    data: {
      journeySlug: "dislikeflow_wkcfhv"
    }
  }));
}

function renderFeedbackFooter() {
  const parentDOM = document.getElementById("__docusaurus");
  const container = parentDOM.querySelectorAll(
    '[class^="docMainContainer"]'
  )[0];
  const footer = document.getElementById("feedbackFooter");
  const feedbackFooterHTML =
    "<div id='feedbackFooter' style='width: 100%; padding-left: 48px; padding-bottom: 20px; text-align:center;'><h3>Was the article helpful?</h3><button id='liked_docs' style='padding: 10px; text-decoration: none;' onclick='thumb_up_flow()'><i class='ri-thumb-up-fill'></i></button><button id='disliked_docs' onclick='thumb_down_flow()' style='padding: 10px; text-decoration: none;' href=''><i class='ri-thumb-down-fill'></i></button></div>";

  const div = document.createElement("div");
  div.setAttribute("class", "feedbackFooter__cont");
  div.style.width = "75%";
  div.innerHTML = feedbackFooterHTML;
  if (container && !footer) container.appendChild(div);
}