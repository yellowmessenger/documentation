---
title : Deploy WhatsApp bot on website and Mobile application
sidebar_label : Deploy WhatsApp bot
---

Let's say that you have built a bot for the WhatsApp channel and now want to deploy it on your website or mobile application using a chat widget. This document will provide you with step-by-step instructions on how to port your WhatsApp bot to your website or mobile application using a chat widget.

:::note
* You can use the V2 widget using the bot script from the cloud.yellow.ai platform even if the bot code is in the app platform.
* You can use Mobile SDKs for deploying WhatsApp bot on [iOS](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/ios) and [Android](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/android) apps.
:::


To deploy an existing WhatsApp bot on a website or mobile application, follow these steps:

1. To create a separate flow using the WhatsApp specific components such as WhatsApp quick reply and list card.
2. Use the provided code snippet in the [function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) while creating the flows based on your use case:

```js
if (app.source == "whatsapp") {

// actions or message list which you want to display
}
if(app.source == "yellowmessenger"){
// actions or the quick replies which you want to display.
}
```

3. On the overview page, select your bot and enter your respective bot ID in the browser URL.
4. Navigate to **Channels** > **Chat widget** > **Deploy** > Copy the bot script provided.
5. Paste the bot script on your website where you want the bot to appear. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/web-widget#24-deploy-chat-widget).

   * You can also configure the appearance of your bot on the cloud platform. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/web-widget).