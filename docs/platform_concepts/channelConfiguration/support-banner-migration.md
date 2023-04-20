---
title: Support banners on migrating from V1 to V2 widget
sidebar_label: V2 migration guide
---

A callout banner allows you to add a banner to chatbot's conversation. Before starting a chat with the user, the callout banner is shown at the top of the chat window with a description of the chatbot’s purpose. To know more, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/overview#1-access-studio).

Banners can used to alert the users about new products, services, special offers, and promotions.

<img src="https://i.imgur.com/KT7cd0U.png" alt="drawing" width="50%"/>

Consider that you have built a bot on the V1 ("app.yellowmessenger.com" or "app.yellow.ai" platform) and want to move it to the V2 (cloud.yellow.ai platform). If the V1 bot consists of a banner and you want to move to V2, then you need to add a function to display the same banner in V2.

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