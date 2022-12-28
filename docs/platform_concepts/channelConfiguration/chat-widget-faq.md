---
title : Chat widget FAQs 
sidebar_label : Chat widget FAQs
---

1. **How to improve the website's performance after installing the bot?**

   Ensure that the chatbot script is pasted in the &lt;body&gt; of the website rather than the &lt;head&gt;. This will ensure the bot loads only when the website is fully loaded without affecting its performance.

2. **Why is the bot not displaying or loading any of the configured messages??**

   Make sure you have configured Welcome message in the <a href="https://docs.yellow.ai/docs/platform_concepts/studio/overview">Studio</a> . Login to cloud.yellow.ai platform. Navigate to  <b>Studio -> Welcome Message -> Add welcome message</b>. To know more, click <a href="https://docs.yellow.ai/docs/platform_concepts/studio/overview#3-conversation-settings">here</a> .

3. **How to enable chat history conversation?**

   To enable chat history, follow these steps:
      1. Ensure that you need to pass ymAuthenticationToken in the config before presenting the bot.
     ```
     if (app.data.event && app.data.event.code === 'authenticate') {
     return app.sendEvent({
        code: "verifiedUser",
        data: app.data.event.payload
     });
     }
     ```
     2. Ensure the **Reset Context for every load** checkbox is unchecked in the dashboard settings for "app.yellowmessenger.com" or "app.yellow.ai".

     ![](https://i.imgur.com/VVSmy15.png)
     3. Ensure **Show history of the conersation** is enabled for [cloud.yellow.ai](https://cloud.yellow.ai).

     <img src="https://i.imgur.com/PoHJ0Yh.png)" alt="drawing" width="90%"/>

4. **Is it possible to deploy two bots on a single website?**    

     No, you cannot deploy 2 bots on a single website.

5. **How to set the position of the bot dynamically?**

      The bot's position is set to right by default. On the **Chat widget settings** page, you can change it to left.
      To dynamically set the position of the bot on a website, set the position to **right** on the **Settings** page and pass `alignLeft:true` inside **ymConfig** of the chatbot script on the respective webpage.

6. **Does the Chat widget or PWA contain a pop-up component?**  

     No, the pop-up component appears only when an error message such as "device not connected to network" or "file upload limit exceeded" is displayed.

7. **Is the drop-down option supported in the Chat widget?**
   
     Currently, drop-down is not supported for the Chat widget bot.

8. **Chatbot is auto-scrolling upwards after navigating to a different tab by clicking the URL from the chatbot. How to resolve this issue**?

     You need to enable the "Scroll the chat window to the bottom" option in the Chat widget's **Settings** tab. Navigate to the **Channels > Chat widget > Settings**.

9. **How to trigger the closeBot() function when a specific flow ends or when you reach a specific node?**  

     You must initiate an event at the end of the specific flow and will receive a callback in onEventFromBot(_ response: YMBotEventResponse) function of YMChatDelegate, where you can add the closeBot. 

10. **Is it possible to change the bot title and description when the bot switches from parent bot to child bot?**

     In orchestrator setup, you cannot interact with the child bot directly, and the UI loaded will be that of the parent bot. Therefore, there cannot be a separate Title, Description, or Icon for the child bot.

11. **What to do if buttons are not loading on the parent website?**    

     This happens when a website blocks CDNs (Content Delivery Network). You need to whitelist these by updating content security policy:
     * cdn.jsdelivr.net (to load the font)
     * https://cdn.yellowmessenger.com (to load buttons)


     
     
