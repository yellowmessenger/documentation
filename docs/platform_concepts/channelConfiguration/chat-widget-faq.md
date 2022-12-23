---
title : Chat widget FAQs 
sidebar_label : Chat widget FAQs
---

1. **How to improve the website's performance after installing the bot?**

   Ensure that the chatbot script is pasted in the &lt;body&gt; of the website rather than the &lt;head&gt;. This will ensure the bot loads only when the website is fully loaded without affecting its performance.

2. **Why is the bot not displaying or loading any of the configured messages??**

   Make sure you have configured Welcome message in the <a href="https://docs.yellow.ai/docs/platform_concepts/studio/overview">Studio</a> . Login to cloud.yellow.ai platform. Navigate to  <b>Studio -> Welcome Message -> Add welcome message</b>. To know more, click <a href="https://docs.yellow.ai/docs/platform_concepts/studio/overview#3-conversation-settings">here</a> .

3. **How to enable chat history?**

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
