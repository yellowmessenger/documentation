---
title : Customize chat bot using functions
sidebar_label : Chat widget functions
---

Yellow.ai offers a wide range of options to customize features for its web widget. However, sometimes our clients might need even more flexibility in crafting the widget’s design, and functionality unique to their use cases. There are certain tricks that you can use to customize your web widget to suit your business needs.

If you have integrated Yellow AI’s chat widget on Android/iOS app, see [Android chatbot SDK](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/android) and [iOS chatbot SDK](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/ios).

This section guides you with different ways to customize your chat widget’s visibility and functionality.

In this article, you will learn:

* [How to customize the visiblity of bot icon on the website?](#1-customise-the-appearance-of-your-chat-widget)
* [How to trigger a flow using functions?](#2-trigger-specific-flow-via-payload)

## 1. Customise the appearance of your chat widget 

If the bot’s default customization settings do not match your brand guidelines, or if you do not want to display the bot right after the page load, you can use the following steps to set up the bot in a way so that it is displayed only when you want it to.

First you will have to insert the default script given to you by yellow.ai at the `<footer>` of your website. Below is a sample script for reference:

```js
<script type="text/javascript">
  window.ymConfig = {
    bot: 'x1601234512345',
    host: 'https://cloud.yellow.ai'
  };
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
          e.type = "text/javascript", e.async = !0, e.src = "https: //cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js>";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}i.q=[],i.c=function(e){i.q.push(e)},w.YellowMessenger=i,w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})(); 
</script>
```

:::note
Host depends on the region where the bot is deployed. If this is not deployed region-wise, the host will be https://cloud.yellow.ai
:::


| Region Code | Region | Host |
| --- | --- | --- |
| R0 | INDIA - Azure Central India | https://cloud.yellow.ai |
| R1 | MEA - Azure UAE North | https://r1.cloud.yellow.ai |
| R2 | AKARTA - GCP Asia-Southeast2 | https://r2.cloud.yellow.ai |
| R3 | SINGAPORE - AWS ap-Southeast-1 | https://r3.cloud.yellow.ai |
| R4 | USA - AWS us-west-2 | https://r4.cloud.yellow.ai |
| R5 | EUROPE - AWS eu-west-1 | https://r5.cloud.yellow.ai |

### 1.1 Hide the bot by default

Inside `window.ymConfig` in the above script, add `hideChatButton: true`. When the website loads, you will not see the bot icon on the web page.

```js
<script type="text/javascript">
  window.ymConfig = {
    bot: 'x1601234512345',
    host: 'https://cloud.yellow.ai',
    "hideChatButton": true
  };
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
          e.type = "text/javascript", e.async = !0, e.src = "https: //cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js>";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}i.q=[],i.c=function(e){i.q.push(e)},w.YellowMessenger=i,w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})(); 
</script>
```

You can create your own button or add a custom flow that the user has to go through to reach the point where you can initialise the bot to start the conversation. 

For example, [icicilombard.com](http://icicilombard.com/) uses its own custom button to allow users to select if they want to converse with a live agent or chat with Ria (bot). If the user clicks the Ask Ria option, they initialise the bot and start the conversation. To do this, you can use the `window.YellowMessengerPlugin.show()` or `window.YellowMessengerPlugin.init()` plugin.

#### List of available functions

You can make use of the following out-of-the-box functions with our bot based on your specific use case. Yellow AI currently supports the following functions:

| Function | Functionality |
| --- | --- |
| window.YellowMessengerPlugin.hide() | Hides bot icon |
| window.YellowMessengerPlugin.show() | Unhides/Shows bot icon |
| window.YellowMessengerPlugin.openBot() | Opens chat widget |
| window.YellowMessengerPlugin.closeBot() | Closes chat widget |
| window.YellowMessengerPlugin.toggleChat() | Toggles chat widget to opposite state. That is, Opens chat widget if already closed. Closes chat widget if already open. |

## 2. Trigger specific flow using function in the payload

A flow slug or journey slug is the combination of the flow name with auto-generated characters in the format -  `/flow-name_{auto-generated characters}`.

It appends to the URL and you can see it when you select a specific flow.

   ![](https://i.imgur.com/e8MjGPV.png)

You can trigger a specific flow using the function `triggerJourney` in the payload as explained here.

```c
<script type="text/javascript">
window.ymConfig = {"bot":"x1657623696077","host":"https://cloud.yellow.ai", "payload": {
                triggerJourney: 'your journey slug'
            },}; //add your journey slug 
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
        }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)
    }
})(); 
</script>
```