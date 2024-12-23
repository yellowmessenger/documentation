// script to integrate support bot to docs.yellow.ai pages 


// Old code to deploy MIA (Tech writing team) bot


/*const addDocTitleToPayload = () => {
    const titlePathData = document.querySelectorAll('span.breadcrumbs__link');
    if (titlePathData.length) {
        const titleText = titlePathData[titlePathData.length-1].innerText
        if (window.ymConfig.payload) {
            window.ymConfig.payload.title = titleText;
        } else {
            window.ymConfig.payload = {title: titleText};
        }
    }
    console.log("BOT.JS", window.ymConfig.payload)
}
*/

// window.ymConfig = {"bot":"x1696422652998","host":"https://r0.cloud.yellow.ai"};
// (function() {
//   var w = window,
//       ic = w.YellowMessenger;
//   if ("function" === typeof ic) ic("reattach_activator"), ic("update", ymConfig);
//   else {
//       var d = document,
//           i = function() {
//               i.c(arguments)
//           };
//       function l() {
//           var e = d.createElement("script");
//           e.type = "text/javascript", e.async = !0, e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";
//           var t = d.getElementsByTagName("script")[0];
//           t.parentNode.insertBefore(e, t)
//         //  addDocTitleToPayload();
//       }
//       i.q = [], i.c = function(e) {
//           i.q.push(e)
//       }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)}
// })();


// New code to deploy MIA bot (created by the support team)


      window.ymConfig = {"bot":"x1694470797745","host":"https://r4.cloud.yellow.ai"};
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