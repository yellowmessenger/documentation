---
title: Launch your bot across channels
sidebar_label: Overview
---

Yellow.ai facilitates omnichannel support, enabling you to create and deploy bots across various channels.

When you connect a channel to Yellow.ai platform, it establishes a connection between the bot and the communication app. This connection allows you to engage with your business customers across multiple channels, to improve your business and increase brand visibility.

To deploy your bot on a particular channel, you need to follow channel-specific setup procedures and configurations. Each channel has its own unique requirements, including obtaining authentication keys and conducting testing. 

**Watch the introductory video on Channels:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/HiFaT5R4ppY" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen></iframe>

## Supported channels

The following table provides a list of available channels along with the supported message types and configuration details. <br/>For a detailed guide on how to set up each channel, click on the respective channel name.

Channel | Configuration details | Supported message types | Communication type | 
-------|-------------|----|------------------|
[Apple Business Chat (ABC)](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/abc#connect-abc-channel-to-your-bot) | Business ID |  Text, Image, Video, File, QuicK reply | Two-way communication
[Email](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/email-outbound) | Email address (sender ID) and server (host URL) |  Plain text and HTML	| Both one-way and two-way communication
[Facebook Messenger](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/facebook-messenger) | Facebook business page | Text, Image, Videos, File, Carousel, and Quick replies | Two-way communication
[Facebook Workplace](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/fb-workplace) | App ID, App secret, and Access token | Text, Image, Video, Audio, and other file types | Two-way communication
[Facebook comments](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/facebook-comments) | Facebook business page |Text, Images, File sharing, and Quick replies (which get converted into text messages) | Two-way communication
[Google Business Messages (GBM)](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/google-message) | Brand details, bot details, and business location | Text, Image, Video, Buttons, Cards, Entry points, Locations | Two-way communication
[Google Chat](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/googleChat#connect-google-chat-to-your-bot) |Client email and Private key | Text, Image, Quick replies and Cards | Two-way communication |
[Instagram](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/instagram) |  Instagram business account and Facebook business page | Text, Image, Cards | Two-way communication
[Line](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/line) | Line channel token and Line channel secret ID  |  Text, QuickReplies, Carousel, Images, Audio, Video, and Stickers | Both one-way and two-way communication
[Lazada](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/lazada)  | Shop Admin Access | Text, Image, and Video | Two-way communication |
[Microsoft Teams](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/teams) | Profile ID, Client ID, and Client Secret | Text, Images, Adaptive cards, and Files | Both one-way and 2-way communication
[Slack](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/slack2) | Slack tokens | Text and Image | Two-way communication
[SMS](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/SMS-channel) | [Registered phone numbers based on the country](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/sms-channel-registration) | Text and Image |One-way or 2-way communication will be based on the provider that is being used |
[Shopee](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/shopee) | To connect your Shopee account to Yellow bot, get the link from the Channels product team | Text and Image | Two-way communication
[Sunshine Conversations](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/sunshine) | App ID and API keys secret | Text, Image, Files, Cards, and Quick replies | Two-way communication
[Telegram](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/telegram) | OAuth token | Text, Images, Quick replies | Both one-way and two-way communication
[Tokopedia](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/tokopedia) | Client ID, Client Secret, and App ID | Text and Image | Two-way communication
[Twilio SMS](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/twilio-sms) | Account SID, Auth token, and Phone number | Text and Image | Both one-way and two-way communication
[Twitter](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/twitter) | Access token, Access token secret, Consumer key, and Consumer secret | Text | Two-way communication
[Viber](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/viber) |  Viber business service ID |Text, Image, Video, File, Quick replies, Cards | Two-way communication |
[Viber for business](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/viber-for-business) | Viber business service ID and Message TTL | Text, Image, File | Both one-way and two-way communication
[WhatsApp](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-channel) | WhatsApp Business account and Facebook Business Manager account | Image, Video, file, Quick reply, Carousel, WA quick reply, Dynamic WA list message, and WA list | Supports two-way communication in case of live agents. | 
[Webex](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/webex) | App token | Text, Image, Video, and Cards | Two-way communication
[Zalo](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/zalo) | Application Server Key, Refresh token, App ID, and Zalo DNS TXT  | Text, Image, File, and Carousel| Two-way communication  

## Access Channels

To navigate to the Channels module, follow these steps:

1. On the left navigation bar, click **Extensions**.

    ![](https://imgur.com/PIOvT6K.png)    

* You can see all the channel categories and available channels in each category, including Chat Widget.

   * [Messaging](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/messaging-overview)
   * [Voice](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/voice-overview)
   * [Social](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/social-overview)
   * [Push notifications](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/mobilepush)
   * Additional
   * [Chat widget](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/chat-widget-overview)

    ![](https://imgur.com/BNvssnl.png) 
    
## Understand channel-specific requirements

The following are the points that you need to consider while setting up a channel on the Yellow.ai platform:

1. **Define bot purpose and scope**: Determine the bot's purpose and scope (use case) to create a flow that addresses the types of questions or requests the bot should handle based on your use case. For more detailed information, click [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/createfirstbot).
2. **Choose environment**: Select the appropriate environment for flow creation:
   * Two environments: Development and Live
   * Three environments: Sandbox, Staging, and Production
3. If a flow is configured and published in a specific environment, it will only respond to queries in that environment.
4. **Environment Usage**: If your bot has three environments (sandbox, staging, and production), use the sandbox bot for building the chatbot or making changes to existing flows. Once done, publish the bot from the sandbox to staging.
5. **Add Intents**: Include intents for common questions or requests that align with your conversation flow. This aids in properly training the bot to identify user intent.
6. **Use supported nodes**: Utilize nodes that are supported for the respective channel to ensure seamless integration and functionality.
7. **Channel Switching**: You can switch to another connected channel from within the same flow. The channel filter button is available in the **Automation** > **Build** section.
     ![](https://imgur.com/XTZL1X9.png)
8. **Regional consideration**: Determine your bot region (for example, r1, r2, r3, r4, r5) and add it to the webhook URL. 
   For instance, if the bot's region is r1, the domain URL will be `https://r1.cloud.yellow.ai`. 
   
:::note
For India region, you can use the original domain itself (`https://cloud.yellow.ai`).
:::



     


  

