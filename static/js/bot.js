// script to integrate support bot

const titlePathData = document.querySelectorAll('span.breadcrumbs__link');
if (titlePathData.length) {
    window.titleText = titlePathData[titlePathData.length-1].innerText
}


window.ymConfig = {"bot":"x1687158407670","host":"https://r0.cloud.yellow.ai","payload": {"title": window.titleText}};
(function() {
  var w = window,
      ic = w.YellowMessenger;
  if ("function" === typeof ic) ic("reattach_activator"), ic("update", ymConfig);
  else {
      var d = document,
          i = function() {
              i.c(arguments)
          };
      function l() {
          var e = d.createElement("script");
          e.type = "text/javascript", e.async = !0, e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";
          var t = d.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(e, t)
      }
      i.q = [], i.c = function(e) {
          i.q.push(e)
      }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)}
})();



/* 
window.ymConfig = {
    bot: "x1687158407670",
   bot: "x1635319613183", 
    host: "https://r0.cloud.yellow.ai",
    partiallyOpen: false,
    alignRight: "right",
};
(function () {
    var w = window,
        ic = w.YellowMessenger;
    if ("function" === typeof ic)
        ic("reattach_activator"), ic("update", ymConfig);
    else {
        var d = document,
            i = function () {
                i.c(arguments);
            };
        function l() {
            var e = d.createElement("script");
            (e.type = "text/javascript"),
                (e.async = !0),
                (e.src =
                    "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js");
            var t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t);
        }
        (i.q = []),
            (i.c = function (e) {
                i.q.push(e);
            }),
            (w.YellowMessenger = i),
            w.attachEvent
                ? w.attachEvent("onload", l)
                : w.addEventListener("load", l, !1);
    }
})();
*/
// window.ymConfig = {"bot":"x1635319613183","host":"https://cloud.yellowmessenger.com","partiallyOpen":false,"alignRight":"right"};(function () {var w=window,ic=w.YellowMessenger;if("function"===typeof ic)ic("reattach_activator"),ic("update",ymConfig);else{var d=document,i=function(){i.c(arguments)};function l(){var e=d.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}i.q=[],i.c=function(e){i.q.push(e)},w.YellowMessenger=i,w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})();