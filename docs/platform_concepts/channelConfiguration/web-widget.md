---
title: Chat widget
sidebar_label : Chat widget
---

Chat widget is a window that you can embed on a website to interact with your website users real-time.




## 1. Access Chat widget

To access Web widget, follow these steps - 

1. Log on to [Yellow.ai Platform](https://cloud.yellow.ai).
2. Click **More** > **Chat widget**.

![](https://i.imgur.com/evTAjTW.png)

The Chat widget screen appears as shown below.

![](https://i.imgur.com/fDaMztT.png)
 
## 2. Customize Chat widget

### 2.1 Customize bot look & feel (Design)

The Design screen helps you customize the look and feel of the chat widget.

To customize the design, make the required changes as per the descriptions provided in the following table and click **Save changes**.

Option | Description
-------- | ---------
Custom Bot logo | Click Add icon and set the logo for the bot.
Font style | Choose the default font for the bot.
Font size | Set the default font size.
Widget size | Set your preferred widget size - Small, Medium or Large.
Primary color | Set the color of the header. Match the widget colour with that of the client's website. See the screenshot below.
Secondary color | Set the color of other components of the bot such as chat. See the screenshot below.
  ![](https://i.imgur.com/SDcwnAw.png)


***

### 2.2 Set bot position (Settings)


This tab lets you configure the position of the bot in different devices and enable or disable several bot features.

![](https://i.imgur.com/t79KXFd.png)

Option | Description
-------- | ---------
Position | Set the position of the widget on the web application - Bottom left or Bottom right.
Icon type | Set the desired bot icon type for web and mobile apps. <br/>For web application, you can select Circle, Square or Bar, and for mobile app, you can select Circle or Square.<br/>
Initial state - for web | Set the initial display mode of the widget on websites -  Half opened, Minimised, or Conversational layout.
Font size | Set the font size of the widget on the website - Small, Medium or Large.

### 2.3 Define bot features (Other settings)

You can enable or disable the following features on the bot. By default, these options are disabled.

Option | Description
-------- | ---------
Auto-complete | Enable auto-complete to allow auto-predict words as the bot user types. 
Message feedback | Enable to allow capturing feedback for every bot message in a conversation.
Show history of the conversation | Disable this to refresh the bot's chat history when the page is reloaded. Enable to show the chat history even after the page is refreshed.
Attachment | Enable this option to allow adding attachments via. the chat widget.
Always scroll chat window to bottom | Enable this option to navigate to the last message when there are multiple messages in a single step as each message loads one by one.
Create fresh session for every new tab | Enable this option to refresh (not retain) the chat history when the bot is opened in a new tab/window.
Slow messages | Enable this option to add a small delay to bot messages, a typing indicator is displayed to make it look more natural. It is recommended to use this for all bot messages for a better experience. 



***

### 2.4 Preview chat widget

When you design and set the bot, you can preview the bot in the **Preview** tab before you save it.

### 2.5 Deploy chat widget 


Now, your widget is set up with your preferred style and settings. To deploy the widget on your website - 

1. Navigate to the **Deploy** tab.
2. Copy the code using the respective icon and paste it on your website.  

   <img src="https://i.imgur.com/3ij9rQG.png" width="70%"/>


2. In the same code, near bot ID add the following -

  

`{ bot: 'YOUR BOT ID',alignLeft: true }`

  

The final code would look something like -

```js

<script type = "text/javascript" >
    window.ymConfig = {
        "bot": "x1659503658437",
        "host": "https://cloud.yellow.ai"
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



:::note
To display the bot in full screen mode, you can use the following link: https://cloud.yellowmessenger.com/pwa/live/YOUR_BOT_ID/?fullScreen=true
:::

***

## 3. Customize Chat bot using functions

Yellow.ai offers a wide range of options to customize features for its web widget. However, sometimes our clients might need even more flexibility in crafting the widget’s design, and functionality unique to their use cases. There are certain tricks that you can use to customize your web widget to suit your business needs. 

This section guides you with different ways to customize your chat widget’s look & feel,  functionality, and capture bot events.


### 3.1 Customize bot display

If the bot’s default customisation settings do not match your brand guidelines, or if you do not want to display the bot right after the page load, you can use the following steps to set up the bot in a way so that it is displayed only when you want it to.

First you will have to insert the default script given to you by yellow.ai at the `<footer>` of your website. Below is a sample script for reference -

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



### 3.2 Hide the bot by default

Inside `window.ymConfig` in the above script, add `hideChatButton: true`. When the website loads, you will not see the bot icon on the web page.

```js
<script type="text/javascript">
  window.ymConfig = {
    bot: 'x1601234512345',
    host: 'https://cloud.yellow.ai',
    hideChatButton: true
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

> Example: [icicilombard.com](http://icicilombard.com/) uses its own custom button to allow users to select if they want to converse with a live agent or chat with Ria (bot). If the user clicks the Ask Ria option, they initialise the bot and start the conversation. To do this, you can use the `window.YellowMessengerPlugin.show()` or `window.YellowMessengerPlugin.init()` plugin.

```js
// Use init() only if you need to reinitialize the bot with a new config, like user token   and other params. If you don't need to reinitialize the bot with any new parameters, you can directly use the show() method.

window.YellowMessengerPlugin.init
	({
		config // Same config you would pass to the window.ymConfig object.
	});
window.YellowMessengerPlugin.show();
```


#### List of available functions

Yellow AI currently supports following functions -

| Function | Functionality |
| --- | --- |
| window.YellowMessengerPlugin.hide() | Hides bot icon |
| window.YellowMessengerPlugin.show() | Unhides/Shows bot icon |
| window.YellowMessengerPlugin.openBot() | Opens chat widget |
| window.YellowMessengerPlugin.closeBot() | Closes chat widget |
| window.YellowMessengerPlugin.toggleChat() | Toggles chat widget to opposite state. That is, Opens chat widget if already closed. Closes chat widget if already open. |


If you have integrated Yellow AI’s chat widget on Android/iOS app, see - 

* [Android chatbot SDK](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/android)
* [iOS chatbot SDK](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/ios/)


## 4. Chat widget events

Yellow.ai offers a wide range of options to customize features for its web widget. However, sometimes, our clients need even more flexibility in crafting the widget’s design, and functionality as per their use cases. 

You can use certain tricks to customize your web widget to suit your needs. This section helps you with different ways to customize your chat widget’s look and feel,  functionality, and capture bot events.

When your bot is operational, it generates various events. You can use them to capture those occurrences and trigger a journey or automation workflow.

### 4.1 Send event to bot

```js
// find the yellow.ai widget iframe
const ymIframe = document.getElementById('ymIframe');
// event_name should be a valid name supported by the widget.
const message = JSON.stringify({code: 'event_name', data: {...}});
// send a cross-site message using 
// window.postMessage(message, targetOrigin, transfer) API.
ymIframe.contentWindow?.postMessage(message, window.location.origin);
```

### 4.2 Listen to a bot event

```js
<script type="text/javascript">
         window.addEventListener('message', function(eventData) {
							// make sure to verify origin to prevent XSS attacks.
							// https://blog.yeswehack.com/yeswerhackers/introduction-postmessage-vulnerabilities/
							// if (event.origin !== <your_origin>) throw new Error('Message not allowed");
            console.log(eventData,"eventData");
         })
</script>
```

### 4.3 Available events


| Event | Functionality |
| --- | --- |
| ym-bot-opened | Bot opened |
| ym-bot-closed | Bot closed |
| ym_event_quick_reply | Quick Reply clicked |
| ym_event_image_clicked | Image opened in preview |
| ym_event_card_action | Card action button clicked |
| ym-bot-loaded-on-page-reload | When the refresh context is false, the bot will receive events as soon as the page reloads |
| ym_home | Home button clicked |
| message-received | New message received by user i.e., sent by the bot |
| page-url-based-trigger | Whenever a notification is sent in the bot (for electron apps) |