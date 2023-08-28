---
title: Set up Chat widget
sidebar_label : Set up Chat widget
tags : [iframe]
---

This document helps you understand how to access the Chat widget and will guide you through how to customize, deploy, and preview it before setting it up on the website.

**Watch the video on how to setup a chat widget:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q5uKVYSeKh4" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen></iframe>

## 1. Access Chat widget

To access Chat widget, follow these steps: 

1. Log in to [Yellow.ai Platform](https://cloud.yellow.ai).
2. On the module switcher, click **Channels**.

  ![](https://i.imgur.com/UuFZ2eR.png)

3. Click on **Chat widget**.

   ![](https://i.imgur.com/1KzP77W.png)

4. The Chat widget screen appears as shown below.

   ![](https://i.imgur.com/h9QYJDi.png)

 
## 2. Customize Chat widget

### 2.1 Customize bot look & feel (Design)

The **Widget Panel** helps you customize the look and feel of the chat widget.

   <img src="https://i.imgur.com/67BPLwY.png" alt="drawing" width="90%"/>
   


To customize the design, make the required changes as per the descriptions provided in the following table, and click **Save changes**.

Option | Description
-------- | ---------
Custom Bot logo | Click **Add** icon and set the logo for the bot. <br/> **Note:** It is recommended to upload images with a size of 150 x 150 pixels. |
Bot name | Enter the name of the bot as per your business requirement. | 
| Bot description | Enter the description of your bot. |
Colors & theme | You can set a **Light** or **Dark** theme for your widget.
Brand color | You can select the following options to set the color for the header of the widget: <br/> * **Solid** -  When you select this option, you can view only the Color 1 option (single color will be applied to the title bar).<br/> * **Gradient** - When you select this option, Color 1 and Color 2 options are displayed (two colours forming gradient will be applied to title bar).
Color 1   | This option is dispalyed when solid/gradient is seleced. Match the widget colour with that of the client's website. See the screenshot below.
Color 2   | This option is displayed only when a gradient is selected.
Complementary color | Set the color of other components of the bot such as Quick Replies, Multi-select, and so on.|
Accent color | You can set accent color across all components by choosing one of the colors from the drop-down. These colors are fretched from Color 1 or Color 2 (only when a gradient is selected).  
Font style | Choose the default font for the bot.
Font size | Set the font size of the widget on the website - Small, Medium, or Large.
Widget size | Set your preferred widget size - Small, Medium, or Large. 
| Position | Set the position of the widget on the website - Bottom Left and Bottom Right. |
| Initial state for desktop and mobile | The initial state helps you to set the chatbot’s appearance when the user visits the website and views the bot for the first time. The following are the initial display modes for the chat widgets:<br/>• **Half opened**: Selecting this option will place the bot in a partially opened state.<br/><img src="https://i.imgur.com/ziYilKB.png" alt="drawing" width="40%"/> <br/>• **Minimized**: Selecting this option will place the bot in a minimized or closed state.<br/><img src="https://i.imgur.com/F31qAiv.png" alt="drawing" width="40%"/><br/>• **Conversational layover**: Selecting this option will display a welcome message, input bar, and other components to the user. Once the user interacts, the bot will fully open.<br/><img src="https://i.imgur.com/4Hldu5U.png" alt="drawing" width="40%"/> <br/>• **Chat bubble**: Selecting this option will display a small bubble on top of the bot icon, showing a welcome message.<br/><img src="https://i.imgur.com/fFGBCVj.png" alt="drawing" width="40%"/><br/>**Note:**<br/>• For **Mobile** devices or browsers only **Minimized** and **Chat bubble** options are supported. <br/>•  When user interacts with initial state options such as Half opened, Minimised, Conversational layover, and Chat bubble, the bot will transition to a fully opened state. |

<img src="https://i.imgur.com/I8XaGOh.png" alt="drawing" width="60%"/>

***

### 2.2 Set bot icon

The **Bot Icon** tab allows you to set the desired logo for your bot. You can also set the bot icon from the **Preview screen** by clicking on the bot icon.

<img src="https://i.imgur.com/lCetTMt.png" alt="drawing" width="60%"/>
<br/>


Option | Description
--------|---------
Icon Shape | Set the desired bot icon type for web and mobile apps. <br/>For web applications, you can select Circle, Square, or Bar, and for mobile app, you can select Circle or Square.<br/>You can set the bot icon by choosing one of the following options. <br/> **Same as avatar**: Set the shape of the bot icon. <br/> <img src="https://i.imgur.com/OgVl8Dm.png" alt="drawing" width="60%"/> <br/> **Upload custom icon**: Set the customised logo for the bot by clicking the **Add** icon. <br/> <img src="https://i.imgur.com/E8dBn9d.png" alt="drawing" width="40%"/>
 Bot icon animations | Select the **Animation type** from the drop-down to add animation to your bot icon. <br/> <img src="https://i.imgur.com/wC0q6Yt.png" alt="drawing" width="40%"/>
 | 

***


### 2.3 Configure bot features (Other settings)

You can configure your chatbot by enabling or disabling the following features on the bot. 

<img src="https://i.imgur.com/mf2KAGl.png)" alt="drawing" width="80%"/>


#### General settings

You can set up basic configurations for your chat widget.

Option | Description
-------- | ---------
Auto-complete | Enable auto-complete to allow the bot to auto-predict words as the user types. 
Message feedback | Enable to allow capturing feedback for every bot message in a conversation.
Attachment | Enable this option to allow adding attachments via the chat widget.
Slow messages | Enable this option to add a small delay to bot messages, a typing indicator is displayed to make it look more natural. It is recommended to use this for all bot messages for a better experience. 
Multiline input | Enable this option to enter multiple lines of text in a single input. After enabling this option, by clicking on the enter key, it will take the cursor to next line instead of sending the message.
Validate attachments | The chat widget provides an option to allow or block specific file formats for users to upload documents, images, and other files. <br/> **Note:** <br/> The file size limit is 20 MB.<br/> <img src="https://i.imgur.com/0GU94m6.png" width="50%"/>	|
Scroll behavior | When users receive a new message from the bot/agent, the chat window scrolls to bottom by default. However, you can configure this behaviour as per your requirement. Available scroll behavior for new messages:<br/>• **Bottom**: Select this option to scroll the widget automatically to the bottom of the new message.<br/>• **Top**: Select this option to scroll the widget automatically to the top of the new message.<br/>• **Off**: Select this option to disable scrolling, the widget will remain at the same message when a new message is received. <img src="https://i.imgur.com/zJaqyB6.png" width="50%"/>


#### **Chat history**

Displays the user’s chat history with bot and agent.

Option | Description
-------- | ---------
Show history of the conversation | Disable this to refresh the bot's chat history when the page is reloaded. Enable to show the chat history even after the page is refreshed. By default, this option is disabled. 
Create fresh session for every new tab | Enable this option to refresh (not retain) the chat history when the bot is opened in a new tab/window.

#### **Notifications**

Notifies the users when they receive a new message.

Option | Description
-------- | ---------
Unread message(s) badge | Enable this option to display the count of unread messages on the bot icon. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/chat-widget-notification). | 
Unread notification in browser tab | Enable this option to display a favicon and text in the browser tab (desktop) when users have unread messages from a bot or agent.
Message Sound | Enable this option to notify users when there are new messages from a bot or agent.

#### **Speech & Dictation**

Option | Description
-------- | ---------
Speech to text | Enable this option to allow users to respond to the bot with a human voice. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/speech-to-text).
Auto send | Enable this option to automatically send the translated text without clicking on send button.
Text to speech | Enable this option to allow the bot to respond to the user's queries with a human voice. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/text-to-speech).


***


### 2.4 Deploy chat widget 

Your widget has been set up with your preferred style and settings, you can deploy it on your website and mobile application.

#### Deploy chat widget on website

To deploy the widget on your website, follow these steps:

1. Navigate to the **Deploy** tab.
2. Copy the code using the respective icon, and paste it on your website.  

   <img src="https://i.imgur.com/G9ZU6PI.png" width="70%"/>


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

#### Deploy chat widget on your mobile application

To deploy a chat widget on your mobile application, follow the instructions in the help documentation provided for the corresponding SDK under the Deploy section on the Setup page. The documentation links include [Android](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/android), [iOS](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/ios), [React Native](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/react-native), [Flutter](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/flutter), [Cordova](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/cordova), and [Xamarin](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/xamarin).

To access mobile SDKs help doc links, follow these steps.
   
1. Navigate to the **Deploy** tab and click **Mobile SDK**. 

      <img src="https://i.imgur.com/p4ZPjCn.png" width="80%"/>

2. To install the chat widget on your mobile application, click **Read docs** links corresponding to the respective mobile SDKs. 

     <img src="https://i.imgur.com/ZRE43N3.png" width="80%"/>
	
3. Upon clicking the links, it navigates you to the respective Mobile SDK documentation.

#### To preview your PWA bot, follow these steps:

1. Navigate to the **Deploy** tab and click **PWA**.

    <img src="https://i.imgur.com/mN5p5fO.png" alt="drawing" width="80%"/>

2. To preview your PWA bot on the platform itself, click on <img src="https://i.imgur.com/RG1RUmC.png)" alt="drawing" width="10%"/>. 
3. Copy the link by clicking on <img src="https://i.imgur.com/dv3k6vh.png)" alt="drawing" width="10%"/>. You can share the PWA live bot link directly with your users or you can embed it on your website.

### 2.5 Preview chat widget 

As you design the bot, you can preview the changes in real time in the **Preview Screen** tab before you save it. When you choose colors, the chat preview updates automatically so that you can see what your widget will look like.

  ![](https://i.imgur.com/ZKEUTwy.png)


To preview your bot on a website, click **Deploy** > **Web** > **Experience on a Website**.

   <img src="https://i.imgur.com/r3eNUCT.png" width="70%"/> 


:::info
To share chatbot with other users, copy the bot link.
<img src="https://i.imgur.com/unAJYEl.png" width="30%"/>
:::
***

