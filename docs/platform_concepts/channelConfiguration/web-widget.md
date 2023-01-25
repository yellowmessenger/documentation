---
title: Set up Chat widget
sidebar_label : Set up Chat widget
keywords : [iframe]
---

This document helps you understand how to access the Chat widget and will guide you through how to customize, deploy, and preview it before setting it up on the website.

## 1. Access Chat widget

To access Chat widget, follow these steps: 

1. Log in to [Yellow.ai Platform](https://cloud.yellow.ai).
2. On the module switcher, click **Channels**.

   ![](https://i.imgur.com/UuFZ2eR.png)

3. Click on **Chat widget**.

   ![](https://i.imgur.com/1KzP77W.png)

4. The Chat widget screen appears as shown below.

   ![](https://i.imgur.com/K2OFk9z.png)

 
## 2. Customize Chat widget

### 2.1 Customize bot look & feel (Design)

The **Widget Panel** helps you customize the look and feel of the chat widget.

   <img src="https://i.imgur.com/nbztdK4.jpg)" alt="drawing" width="80%"/>


To customize the design, make the required changes as per the descriptions provided in the following table, and click **Save changes**.

Option | Description
-------- | ---------
Custom Bot logo | Click **Add** icon and set the logo for the bot. <br/> **Note:** It is recommended to upload images with a size of 150 x 150 pixels. |
Bot name | Enter the name of the bot as per your business requirement. | 
| Bot description | Enter the description of your bot. |
Font style | Choose the default font for the bot.
Font size | Set the font size of the widget on the website - Small, Medium, or Large.
Widget size | Set your preferred widget size - Small, Medium, or Large. 
Primary color | Set the color of the header. Match the widget colour with that of the client's website. See the screenshot below.
Secondary color | Set the color of other components of the bot such as chat.
| Position | Set the position of the widget on the website - Bottom Left and Bottom Right. |
| Initial state for desktop | Set the initial display mode of the widget on websites -  Half opened, Minimised, or Conversational layout. |

<img src="https://i.imgur.com/r1GHIfj.png)" alt="drawing" width="60%"/>

***

### 2.2 Set bot icon

The **Bot Icon** tab allows you to set the desired logo for your bot. You can also set the bot icon from the **Preview screen** by clicking on the bot icon.

<img src="https://i.imgur.com/lCetTMt.png)" alt="drawing" width="60%"/>
<br/>


Option | Description
--------|---------
Icon Shape | Set the desired bot icon type for web and mobile apps. <br/>For web applications, you can select Circle, Square, or Bar, and for mobile app, you can select Circle or Square.<br/>You can set the bot icon by choosing one of the following options. <br/> **Same as avatar**: Set the shape of the bot icon. <br/> <img src="https://i.imgur.com/OgVl8Dm.png)" alt="drawing" width="60%"/> <br/> **Upload custom icon**: Set the customised logo for the bot by clicking the **Add** icon. <br/> <img src="https://i.imgur.com/E8dBn9d.png))" alt="drawing" width="40%"/>
 Bot icon animations | Select the **Animation type** from the drop-down to add animation to your bot icon. <br/> <img src="https://i.imgur.com/wC0q6Yt.png)" alt="drawing" width="40%"/>
 | 

***


### 2.3 Configure bot features (Other settings)

You can configure your chatbot by enabling or disabling the following features on the bot. 

<img src="https://i.imgur.com/KJaHDDu.png)" alt="drawing" width="40%"/>


Option | Description
-------- | ---------
Auto-complete | Enable auto-complete to allow auto-predict words as the bot user types. 
Message feedback | Enable to allow capturing feedback for every bot message in a conversation.
Show history of the conversation | Disable this to refresh the bot's chat history when the page is reloaded. Enable to show the chat history even after the page is refreshed. By default, this option is disabled. 
Attachment | Enable this option to allow adding attachments via. the chat widget.
Always scroll chat window to bottom | Enable this option to navigate to the last message when there are multiple messages in a single step as each message loads one by one.
Create fresh session for every new tab | Enable this option to refresh (not retain) the chat history when the bot is opened in a new tab/window.
Slow messages | Enable this option to add a small delay to bot messages, a typing indicator is displayed to make it look more natural. It is recommended to use this for all bot messages for a better experience. 



***


### 2.4 Deploy chat widget 

Now, your widget is set up with your preferred style and settings. 

To deploy the widget on your website, follow these steps:

1. Navigate to the **Deploy** tab.
2. Copy the code using the respective icon, and paste it on your website.  

   <img src="https://i.imgur.com/8TnDcjf.png" width="80%"/>


2. In the same code, next to bot ID, add the following:

  

```
{ bot: '{botId}',alignLeft: true }
```

  

**Sample JavaScript to embed the chatbot on a website**:

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
To view the bot in full screen mode, use the following link: https://cloud.yellowmessenger.com/pwa/live/YOUR_BOT_ID/?fullScreen=true
:::

### 2.5 Preview chat widget 

As you design the bot, you can preview the changes in real time in the **Preview Screen** tab before you save it. When you choose colors, the chat preview updates automatically so that you can see what your widget will look like.

![](https://i.imgur.com/evi4d4L.png)


To preview your bot on a website, click **Deploy** > **Experience on a Website**.

<img src="https://i.imgur.com/8o40gQW.png" width="80%"/> 

:::info
To share chatbot with other users, copy the bot link.
<img src="https://i.imgur.com/unAJYEl.png)" width="30%"/>
:::
***