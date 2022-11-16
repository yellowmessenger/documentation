window.onload = function () {
  setInterval(() => {
    renderFeedbackFooter();
  }, 2000);
};

function renderFeedbackFooter() {
  const parentDOM = document.getElementById("__docusaurus");
  const container = parentDOM.querySelectorAll(
    '[class^="docMainContainer"]'
  )[0];
  const footer = document.getElementById("feedbackFooter");
  const feedbackFooterHTML =
    "<div id='feedbackFooter' style='padding-left: 48px; padding-bottom: 20px;'><h3>Was the article helpful?</h3><a style='padding: 10px; text-decoration: none;' href='#'><i class='ri-thumb-up-fill'></i></a><a style='padding: 10px; text-decoration: none;' href='#'><i class='ri-thumb-down-fill'></i></a></div>";
  if (container && !footer) container.innerHTML += feedbackFooterHTML;
}
