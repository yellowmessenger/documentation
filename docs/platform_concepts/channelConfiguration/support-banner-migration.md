---
title: V2 migration guide
sidebar_label: V2 migration guide
---

Bot migration involves transferring a chatbot from V1 (app.yellowmessenger.com or app.yellow.ai platform) to V2 (cloud.yellow.ai platform). While migrating the bot, it is important to carefully evaluate the benefits and limitations to ensure a smooth transition and the continued functionality of the chatbot.

:::note
* V1 chatbot is deprecated.
:::

![](https://i.imgur.com/11kdgvf.png)

Let's say that you have built a bot on [V1](https://app.yellow.ai/api/chat/demo/x1657623696077) and want to migrate it to [V2](https://cloud.yellow.ai/liveBot/x1655358566435?region=). To ensure a successful migration of your bot from V1 to V2, it is important to consider the following:

1. **Copy the V2 script**: Go to cloud.yellow.ai **> Channels > Chat widget > Deploy > copy the bot script**. This script is essential for integrating the V2 bot into your application. For more detailed instructions, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/web-widget#24-deploy-chat-widget).

     <img src="https://i.imgur.com/yvDO4Vq.png" width="70%"/>	
	 
2. **Customize bot appearance**: You have the flexibility to modify various aspects of your chatbot's appearance, including the avatar, icon, name, description, initial state, position, colors, and themes. To make these customizations, navigate to [cloud.yellow.ai](https://cloud.yellow.ai/) **> Channels > Chat widget > Widget panel or Bot icon**. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/web-widget#21-customize-bot-look--feel-design).

     <img src="https://i.imgur.com/67BPLwY.png" alt="drawing" width="90%"/>
  
:::note
* If the colors you have customized are not displayed correctly in the preview screen, you can reach out to [support](mailto:support@yellow.ai) and provide them with the color codes. They will assist you in updating the colors via bot mapping. Once the customization is done through mapping, the colors will be changed in the Widget panel accordingly.
:::

3. **Configure the callout banner**: If your V1 bot includes a banner and you wish to migrate it to V2, you need to configure the callout banner in the Studio module. For information on how to set up the callout banner during the migration process, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/overview#conversation-settings).

    <img src="https://i.imgur.com/KT7cd0U.png" alt="drawing" width="50%"/>

#### Load banners dynamically
 
A callout banner allows you to add a banner to chatbot's conversation. Before starting a chat with the user, the callout banner is shown at the top of the chat window with a description of the chatbot’s purpose. To know more, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/overview#1-access-studio).

Banners can used to alert the users about new products, services, special offers, and promotions.

If the V1 bot consists of a banner and you want to move to V2 dynamically in the middle of th chat conversation, then you need to add a function to display the same banner in V2.

While migrating from V1 to V2 use the following function code to copy the banner from V1 to V2:

```
return new Promise(async (resolve, reject) => {
    try {
        app.log(app.profile,"in profile");
        if (app.profile && app.profile.payload && app.profile.payload.widgetVersion && app.profile.payload.widgetVersion=="v2"){
            await app.sendEvent({
                code: "ui-event-update-promotion",
                data:[{
                    title: app.renderMessage('indiatour', {}, ''),
                    options: [
                        {
                            title: app.renderMessage('activate_now', {}, 'Activate Now'),
                            text: `activate channel`
                        }
                    ]
                
            },
                    {
                        title: app.renderMessage('promotion_2', {}, ''),
                        options: [
                            {
                                title: app.renderMessage('download_now', {}, 'Download Now'),
                                url: `https://watcho.onelink.me/eyNf/4plou2wu`
                            },
                        ]
                    },
                    {
                        title: app.renderMessage('promotion_3', {}, ''),
                        options: [
                            {
                                title: app.renderMessage('subscribe', {}, 'Subscribe'),
                                text: 'Subscribe'
                            }
                        ]
                    },
            ]
        })
        }
        else{
        await app.sendEvent({
            code: "ui-event-update-promotion",
            data: {
                quickReplies: [
                    {
                        title: app.renderMessage('indiatour', {}, ''),
                        options: [
                                                        {
                               title: app.renderMessage('activate_now', {}, 'Activate Now'),
                                text: `activate channel`
                            },
                        ]
                    },
                    {
                        title: app.renderMessage('promotion_2', {}, ''),
                        options: [
                            {
                                title: app.renderMessage('download_now', {}, 'Download Now'),
                                url: `https://watcho.onelink.me/eyNf/4plou2wu`
                            },
                        ]
                    },
                    {
                        title: app.renderMessage('promotion_3', {}, ''),
                        options: [
                            {
                                title: app.renderMessage('subscribe', {}, 'Subscribe'),
                                text: 'Subscribe'
                            }
                        ]
                    },
                ],
                "autoPlay": true,
                "autoPlaySpeed": "4000",
                hide: true,
                showPromotionMessage: 'Hi! I am Dia, your <strong>d</strong>2h <strong>I</strong>ntelligent <strong>A</strong>ssistant.',
                displayShowPromotionBar: true
            }
        });
        }
        return resolve();
    } catch (e) {
        app.log(e, 'error in showPromotion');
        return resolve();
    }

});
```
![](https://i.imgur.com/VyvR6ZD.png)  

### Benefits of V2 migration

The following are the benefits of V2 migration:

* Enhanced UI for an improved user experience.
* Provides options to control Text-to-Speech (TTS), including speaking rate, gender, pitch, and accent. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/text-to-speech)
* Supports inbound engage functionality.
* Offers a domain whitelisting feature to enhance chatbot security and restrict access to authorized domains. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/domain-whitelisting).
 ![](https://i.imgur.com/uJvQ7o1.png)
* Handles incoming chats effectively using queue handling in the Inbox module. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat-queue#queued-chats-inactivity).
  ![](https://i.imgur.com/gataiIs.png)<img src="https://i.imgur.com/OTHFveJ.png" alt="drawing" width="40%"/>
* Enables local testing of your chatbot using the Chrome extension without publishing changes to Live. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/chrome-extension).
   ![](https://i.imgur.com/7C7ubWH.png) ![](https://i.imgur.com/CUUbTev.png)  
* Offers a real-time preview during customization.
* Allows you to add interactive and non-interactive components to your chatbot. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/chat-widget-components).
* Meets accessibility compliant standards as per WCAG 2.1 guidelines.
* Get instant help through our [help docs](https://docs.yellow.ai/), [community](https://community.yellow.ai/), and [support](mailto:support@yellow.ai).

### Limitations of V2 migration
  
The following are the limitations of V2 migration:

* No customization of Advanced options such as button settings, multi-select button settings, padding settings, and card settings.
* There is no support for Zendesk integration.