---
title: Studio overview
sidebar_label: Overview
id: overview
---

The studio provides a no-code bot-building platform that helps anyone create a bot for their business needs easily. With Studio, you can collect information from your customers, update their information, launch actions, show them the necessary information, have a live chat with an agent and do a lot more.

This article briefs you on understanding various components of Studio and helps you to get started with creating a bot.

--- 

## 1. Access studio

:::info
Before designing your bot, you need to have the bot set up as mentioned [here](https://docs.yellow.ai/docs/cookbooks/getting_started).
:::

1. Log in to https://cloud.yellow.ai.
2. On the switcher, click **Studio**.

![](https://i.imgur.com/gPU08xO.png)

:::tip
You can access Studio using the keyboard shortcut `g` + `s`.
:::
---

## 2. Navigate the Studio homepage

![](https://i.imgur.com/yGIqAbE.png)

The studio homepage showcases a collection of created and imported flows. It offers the following options to enhance your bot-building experience:

1. [Conversation Settings](#conversation-settings): Customize the way your bot engages with end users.
2. [Preview](#preview): Take a sneak peek at how your bot will interact before deploying it.
3. [Publish changes](#publish-changes): Make your bot live and unleash its full potential.
4. [Welcome (Start flow)](#welcome-start-flow)
5. [Fallback (Fallback flow)](#fallback-fallback-flow)


### Conversation Settings
Fine-tune the conversational behavior of your bot to align with your desired user experience. The following are the various conversation settings that are available on the **Studio** page:

| Global Options | Description |
|---------|----------|
| Welcome message | This is the first message that is automatically sent by the bot to the user. To configure the **Welcome message**, click **Edit** icon. <br/> <img src="https://i.imgur.com/yO7UCZG.png" alt="drawing" width="60%"/><br/> You can enter the text or select the type of message that you wish to display to the user.<br/>![](https://i.imgur.com/Qvg9zEi.png) <br/>**Note**:Welcome message is supported only for web and app SDK and it is not supported for any of the [Channels](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview). |
| Fallback | Displays a message when the bot is unable to provide the solution to the user's query. To trigger a specific flow when the bot does not understand the user message, click **Edit** icon and select the flow to be executed from the drop-down.<br/> <img src="https://i.imgur.com/JAfCJMX.png" alt="drawing" width="60%"/> <br/> You can enter the fallback message and select a flow from the **Execute Flow** drop-down. <br/> <img src="https://i.imgur.com/rbkD6Zw.png" alt="drawing" width="60%"/> | 
| FAQs | Here, you can [add FAQs](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs#-1-add-faqs) to your bot by clicking **+ Add** and you can also upload the [FAQs in bulk](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs#2-add-faqs-in-bulk) by clicking **Upload**.<br/> <img src="https://i.imgur.com/iMtSWB2.png" alt="drawing" width="60%"/> |
| Channels | You can add various [Channels](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview) to your bot based on your requirements.<br/> <img src="https://i.imgur.com/OHNrPmO.png" alt="drawing" width="60%"/> |
| Document Search | The bot responds to the user based on the data from the [uploaded document](https://docs.yellow.ai/docs/platform_concepts/studio/train/what-is-document-cognition). To add a new document, click **+ Add** document. <br/> <img src="https://i.imgur.com/YIc6nap.png" alt="drawing" width="60%"/> | 
| Suggestion | This can be used when you want to redirect a user when the requested answer is not found.<br/>For example, you have asked a bot, "I want to know my order status for the day". If bot does not understand or not sure about your question, then the relevant suggestions are displayed. <br/> In these cases, bot replies with a message, "My apologies, I was not able to understand what you have asked." and provides relevant suggestions to the user. Also, it provides an option, "Not Satisfied". When user selects "Not satisfied" option if they are not satisfied with any of the bot suggestions, bot searches for the answer from the **Document Search** if it is configured; otherwise, a fallback message is displayed.<br/> Suggestion triggers when an utterance doesn't reach minimum confidence. It extracts the similar intents that match any intent and exposes the 20 matches with the highest similarity confidence. It then calls another API internally to extract the descriptions of the journeys and display them. <br/>**Note**:<br/> * If the confidence is between 0.6 and 0.9, then the bot provides suggestions. <br/> * If the confidence is below 0.6, then the bot displays a fallback message. <br/> <img src="https://i.imgur.com/7OZv1Q4.png" alt="drawing" width="60%"/> |
| Language settings | You can add multiple languages to your bot based on your business needs. Click **Edit** icon to add languages.<br/> <img src="https://i.imgur.com/sfyTVZj.png" alt="drawing" width="60%"/> <br/> Select languages from drop-down and click **Save**. <br/> <img src="https://i.imgur.com/572R72g.png" alt="drawing" width="60%"/> | 
| Callout | These banners on top of the chat can be used to promote a brand and/or get visitors from the host website to go to the advertiser's website.<br/> <img src="https://i.imgur.com/f4LbObf.png" alt="drawing" width="60%"/><br/> **Note**: You can add four callouts with two buttons each. Buttons can be further customised by clicking **Advanced Settings**. <br/> ![](https://i.imgur.com/qWMxeYl.png) | 

:::note
Welcome message is supported only for web and app SDK and it is not supported for any of the [Channels](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview).
:::

:::info
Text can be entered in **Bot says** field. 
**Images**, **Carousel**, **Videos**, **Files** and **Quick replies** can also be added. 
When **Execute Flow** is selected, the start of the flow will be directed to the selected flow. 

<img src="https://i.imgur.com/Ko3Gzzy.png" alt="drawing" width="60%"/> 

:::

### Preview

The preview option lets you take a preview of the entire bot, giving you a look at how the bot would look, function, and converse with the end user.

![](https://i.imgur.com/ePnYure.png)

When you click the **Preview** button, it opens on the right side. You can also click the arrow on the top to open the bot on a different page and test it.

![](https://i.imgur.com/CfWWPcN.png)

### Publish changes

Publish changes has the following options:

![](https://i.imgur.com/pTYufMt.png)

#### Publish bot live

Publishes the entire bot live. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes) to learn more about publish.

#### Export bot as templates

Export the bot as a template to be reused in the future. Flows, databases and FAQs of the  bot can be exported.

To export a bot template:

1. Click **Export bot as template**.
2. To set up export, fill the following fields:

| Name | Description |
|------|-------------|
| Template name | Name of the template. This is auto-filled and you can modify the name of the template according to your business needs. |
| Overview | Give a gist of the selected flow, this appears on the template. |
| Component type | Select the component type based on the selected.<br/> <img src="https://i.imgur.com/44tq00E.png" alt="drawing" width="50%"/> |
| Template icon | Select a preconfigured template icon or you can upload the icon of your choice. ![](https://i.imgur.com/hPTOxCL.png) |
| Description | Describe the template. |
| Flows | You can include other flows in the same template by selecting the flows from the dropdown. ![](https://i.imgur.com/7deVwfk.png) |
|Export table data | Include database tables to your template by selecting the respective database from the dropdown. <br/> <img src="https://i.imgur.com/DlwlOg3.png" alt="drawing" width="80%"/>|
| Add FAQs | To export FAQs along with your template, simply toggle the corresponding button. ![](https://i.imgur.com/4fpQd4a.png) |
| Key features | You can include up to three key features in your template, which will be shown on the template cover.|
| Template tags | Tags entered in this field can enhance search results when looking for specific keywords related to your use case. |
| Use cases | You can select up to three categories that are available in the drop-down that suit your template. ![](https://i.imgur.com/aVZJ3M7.png) |
| Languages | To view your template in multiple languages, you can select the language of your choice. |
| Industries | You can choose up to three industries that match your flow. |
| Channels | Choose the channel you wish to integrate your template with.| 


3. Click **Next**.
4. If you've selected multiple flows, you can switch between them and preview the one you want to export.

   <img src="https://i.imgur.com/VbIYpfD.png" alt="drawing" width="50%"/>

5. Choose who can access your template using these options:

* **Myself**: Publish and reuse the template for your own use.
* **Training**: Only users with access to the specific subscription can use the exported template.
* **Public**: The template is published in the Marketplace and publicly available within the bot after admin approval.

   <img src="https://i.imgur.com/Oy5FoDN.png" alt="drawing" width="50%"/>

6. Templates submitted for review can be viewed under **User account** > **Exports**.


 <img src="https://i.imgur.com/B3U98x6.png" alt="drawing" width="100%"/>

 You can view the status of the template on this page.

 ![](https://i.imgur.com/oynJE4x.png)

 7. Templates exported to a private marketplace are automatically published without review. For subscription exports, they require review and are displayed on this page. The subscription admin can view, test, and publish them. Similarly, templates exported to the public marketplace also undergo review and appear here. The public marketplace admin can view, test, and publish those templates.

 ![](https://i.imgur.com/aAR4eF3.png)

 8. After selecting the access option for the template, the system will list the approved templates under the corresponding category.

 ![](https://i.imgur.com/e6T16cV.png)


### Welcome (Start Flow)

This is the flow any user would encounter when they access the bot. Here, you can assign a flow the bot should carry out when a new user uses the bot for the first time.

![](https://i.imgur.com/AkqCkIa.png)

To set a welcome flow:

1. Click the **Welcome** option.
2. [Create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys).

:::note
If you had previously set a welcome flow in our previous UI, you will see a legacy node that contains the old welcome flow settings. It cannot be edited.
![](https://i.imgur.com/BN4TTGy.png)
:::

Any of the flows can be set as a welcome flow.

![](https://i.imgur.com/TUZVCdt.png)

### Fallback (Fallback Flow)

The bot switches to this flow when it doesn't understand the user input.

![](https://i.imgur.com/ej9HWfL.png)

To set a fallback flow:

1. Click the **Fallback** option.
2. [Create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys).

:::note
If you had previously set a fallback flow in our previous UI, you will see a legacy node that contains the old fallback flow settings. It cannot be edited.
![](https://i.imgur.com/OwHXy4c.png)
:::

Any of the flows can be set as a fallback flow.

![](https://i.imgur.com/L3nTKAv.png)

## 3. Keyboard shortcuts

We have shortcut keys to make it easy for you to access key options and increase the productivity of repetetive tasks.

:::note
You can directly use the keys to access the function from the screen where that particular option is available.
:::

The following table lists the keyboard shortcuts for Studio module -

Action | Shortcut | Access from
------ | -------- | -----------
Open new node selector | n | Studio
Go to Intents page | i | Studio
Go to Entities page | e | Studio
Opens select flow/journey dropdown | s + f | Studio
Go back (wherever you are) | b | Global
Opens select bot dropdown | s + b| Global
Go to Studio module | g + s| Global
Go to Overview page | g + o| Global


----


**What Next?**

Understand the different types of flows and create a  bot flow for your use case, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) to learn more. 
