window.onload = function () {
  setInterval(renderFeedbackFooter, 2000);
  // => {
  // renderFeedbackFooter();
  // }, 2000);
};

function renderFeedbackFooter() {
  const parentDOM = document.getElementById("__docusaurus");
  const container = parentDOM.querySelectorAll(
    '[class^="docMainContainer"]'
  )[0];
  const footer = document.getElementById("feedbackFooter");
  const feedbackFooterHTML =
    "<div id='feedbackFooter' style='width: 100%; padding-left: 48px; padding-bottom: 20px; text-align:center;'><h3>Was the article helpful?</h3><button id='liked_docs' style='padding: 10px; text-decoration: none;'><i class='ri-thumb-up-fill'></i></button><button id='disliked_docs' style='padding: 10px; text-decoration: none;' href=''><i class='ri-thumb-down-fill'></i></button></div>";

  const div = document.createElement("div");
  div.setAttribute("class", "feedbackFooter__cont");
  div.style.width = "75%";
  div.innerHTML = feedbackFooterHTML;
  if (container && !footer) container.appendChild(div);
}
