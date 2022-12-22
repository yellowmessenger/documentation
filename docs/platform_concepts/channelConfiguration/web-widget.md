---
title: Chat widget
sidebar_label : Set up Chat widget
keywords : [iframe]
---

Chat widget is a window that you can embed on a website to interact with your website users real-time.

## 1. Access Chat widget

To access Web widget, follow these steps - 

1. Log in to [Yellow.ai Platform](https://cloud.yellow.ai).
2. On the switcher, click **Channels**.

![](https://i.imgur.com/UuFZ2eR.png)

3. Click on **Chat widget**.

![](https://i.imgur.com/SoTsfK0.png)

The Chat widget screen appears as shown below.

![](https://i.imgur.com/Xfvvg3O.png)
 
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