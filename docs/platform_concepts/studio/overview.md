---
title: Studio overview
sidebar_label: Overview
id: overview
---

The studio provides a no-code bot-building platform that helps anyone create a bot for their business needs easily. With Studio, you can collect information from your customers, update their information, launch actions, show them the necessary information, have a live chat with an agent and do a lot more.

This article briefs you on understanding various components of Studio and helps you to get started with creating a bot.


 In this article, you will learn:
 1. [Where to find Studio on the yellow platform](#1-access-studio)
 2. [What are the UI elements available on Studio](#2-understand-studio-elements)
 3. [Conversation settings](#3-conversation-settings)
 4. [How to build a bot](#4-steps-to-build-a-bot)
 5. [Keyboard shortcuts](#5-keyboard-shortcuts)




<iframe width="560" height="315" src="https://www.youtube.com/embed/Qwga7KLj-zM" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen></iframe>


---

  

## <a name="as"></a>  1. Access studio



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

## <a name="ui"></a> 2. Understand Studio elements

![](https://i.imgur.com/yCTY5Dz.png)

Option | Description
------ | -----------
**Menu/Switcher** | Access all the Yellow.ai modules here.
**Search box** | Search for specific information from our [Knowledge base](https://docs.yellow.ai)
**Help** | Click to directly access our Knowledge base.
**Marketplace** | Save time and increase productivity with our preconfigured templates for your bot. A template contains flows, validators, integrators and more.
**Access control** | Share your bot access with your team members or superiors who would be contributing to the bot building.
**Notifications** | Get notified of the invites sent by others. You will see the notification alert when there is someone shares bot access with you.
![](https://i.imgur.com/g8ZnFxE.png) | Check if each step of the flow is working as expected as building your bot. It shows what is happening in each step such as values stored, action triggered, condition, and prompt. To see the actual preview, click on the icon next to the Preview bot.
![](https://i.imgur.com/4u8ra3O.png) | Access conversation logs directly from the preview pane.
![](https://i.imgur.com/mcvEPae.png) | Preview your bot in different channels.

  

---

## <a name="home"></a> 3. Conversation settings 

This is a general (**Home**) flow that the bot follows, irrespective of the training given to it. 
- There is always a welcome message configured and displayed for the user.
- The bot responds to the queries it **understands** and **does not understand**.

You can use global options for each node or flow that you build based on your use case.

![](https://i.imgur.com/cFTYsIg.jpg)


The following are the various **Conversation settings** that are available on the **Studio** page:

| Global Options | Description |
|---------|----------|
| Welcome message | This is the first message that is automatically sent by the bot to the user. To configure the **Welcome message**, click **Edit** icon. <br/> <img src="https://i.imgur.com/yO7UCZG.png)" alt="drawing" width="60%"/><br/> You can enter the text or select the type of message that you wish to display to the user.<br/>![](https://i.imgur.com/Qvg9zEi.png) <br/>**Note**:Welcome message is supported only for web and app SDK and it is not supported for any of the [Channels](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview). |
| Fallback | Displays a message when the bot is unable to provide the solution to the user's query. To trigger a specific flow when the bot does not understand the user message, click **Edit** icon and select the flow to be executed from the drop-down.<br/> <img src="https://i.imgur.com/JAfCJMX.png)" alt="drawing" width="60%"/> <br/> You can enter the fallback message and select a flow from the **Execute Flow** drop-down. <br/> <img src="https://i.imgur.com/rbkD6Zw.png)" alt="drawing" width="60%"/> | 
| FAQs | Here, you can [add FAQs](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs#-1-add-faqs) to your bot by clicking **+ Add** and you can also upload the [FAQs in bulk](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs/#2-add-faqs-in-bulk) by clicking **Upload**.<br/> <img src="https://i.imgur.com/iMtSWB2.png)" alt="drawing" width="60%"/> |
| Channels | You can add various [Channels](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview) to your bot based on your requirements.<br/> <img src="https://i.imgur.com/OHNrPmO.png)" alt="drawing" width="60%"/> |
| Document Search | The bot responds to the user based on the data from the [uploaded document](https://docs.yellow.ai/docs/platform_concepts/studio/train/what-is-document-cognition). To add a new document, click **+ Add** document. <br/> <img src="https://i.imgur.com/YIc6nap.png)" alt="drawing" width="60%"/> | 
| Suggestion | This can be used when you want to redirect a user when the requested answer is not found.<br/>For example, you have asked a bot, "I want to know my order status for the day". If bot does not understand or not sure about your question, then the relevant suggestions are displayed. <br/> In these cases, bot replies with a message, "My apologies, I was not able to understand what you have asked." and provides relevant suggestions to the user. Also, it provides an option, "Not Satisfied". When user selects "Not satisfied" option if they are not satisfied with any of the bot suggestions, bot searches for the answer from the **Document Search** if it is configured; otherwise, a fallback message is displayed.<br/>**Note**:<br/> * If the confidence is between 0.6 and 0.9, then the bot provides suggestions. <br/> * If the confidence is below 0.6, then the bot displays a fallback message. <br/> <img src="https://i.imgur.com/7OZv1Q4.png)" alt="drawing" width="60%"/> |
| Language settings | You can add multiple languages to your bot based on your business needs. Click **Edit** icon to add languages.<br/> <img src="https://i.imgur.com/sfyTVZj.png)" alt="drawing" width="60%"/> <br/> Select languages from drop-down and click **Save**. <br/> <img src="https://i.imgur.com/572R72g.png)" alt="drawing" width="60%"/> | 
| Callout | These banners on top of the chat can be used to promote a brand and/or get visitors from the host website to go to the advertiser's website.<br/> <img src="https://i.imgur.com/f4LbObf.png)" alt="drawing" width="60%"/><br/> **Note**: You can add four callouts with two buttons each. Buttons can be further customised by clicking **Advanced Settings**. <br/> ![](https://i.imgur.com/qWMxeYl.png) | 

:::info
Text can be entered in **Bot says** field. 
**Images**, **Carousel**, **Videos**, **Files** and **Quick replies** can also be added. 
When **Execute Flow** is selected, the start of the flow will be directed to the selected flow. 

<img src="https://i.imgur.com/Ko3Gzzy.png)" alt="drawing" width="60%"/> 

:::


----  

## <a name="sb"></a> 4. Steps to build a bot

A bot consists of one or more conversation flows. A flow is a set of events carried out in sequential order according to the conditions set.

1. **Create a bot**
 
    You can **create a bot from scratch** or by using the preexisting templates on **Marketplace**. 

    **Marketplace**: Use ready-to-use templates to quickly create your bots easily. There are several templates available to cater to different business scenarios. You can then modify the template flow as per your requirement.

![](https://i.imgur.com/2x15F1q.png)


2. **Add Welcome message**

    You first need to configure the welcome message to prompt when the user opens the bot. Click on the **Start** node to set the welcome message.

> Examples:
> - Hey! How can I help you today?
> - Welcome to the XYZ company, I am Boty! How can I assist you?

![](https://i.imgur.com/ZXnEbaY.png)


3. **Define Studio functionalities**

    Define your bot using various Studio functionalities.



| Functionality                                                                                                                                                    | Description                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Add a Flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys)                                                                              | A conversational flow is a set of events that are carried out in sequential order according to the conditions set. Create multiple flows and [trigger each flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow) logically as per the requirement. |
| Organise your conversational logic                                                                                                                              | Each node is a point of flow. Use [Nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes) to ask questions, store values, show information, perform math functions, trigger condition-based actions, and make API calls.                                     |
| Use [Database](https://docs.yellow.ai/docs/platform_concepts/studio/database)                                                                                    | To store information (such as location, address, and user information) in the Yellow.ai Platform and retrieve the details wherever required in the flow.                                                                                                                             |
| Use [Document cognition](https://docs.yellow.ai/docs/platform_concepts/studio/train/what-is-document-cognition/)                                                 | To enable bot to answer user queries from the documents that you have.                                                                                                                                                                                                               |
| Make your bot smart by triggering actions or flows based on user activities or [Events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub)  | For example, send a predefined text when no agent is online, or when assigned to an agent; when a user closes a promotion shown in the bot; trigger flows when a user opens a specific URL.                                                                                       |
| Make your bot handle unintended replies wisely through [Context management](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-contextual-response) | For example, what if a customer types a new question when the bot asks for the mobile number?                                                                                                                                                                                        |
| Use [Localization](https://docs.yellow.ai/docs/platform_concepts/studio/build/localization)                                                                    | To serve users worldwide by making the bot interact in the user's native language. Yellow supports over 100 [languages](https://docs.yellow.ai/docs/platform_concepts/studio/languages-supported/).                                                                                                                                                               |
| Function                                                                                                                                                             | If you are a developer, use [Code](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) to define custom functionalities.                                                                                                                                               |
| Connect third-party systems through [APIs](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api) to retrieve data directly from that system         | For example, you can show user details that are available in your database which is the need of importing the entire data to Yellow Platform.                                                                                                                                        |
| Fallback                                                                                                                                                         | There could be instances where your bot does not understand how to respond to your user intent. Use Fallback to provide suggestions, answer from documents, connect to an agent, or show a message.  |
|     Testing the bot  | [Test each flow](https://docs.yellow.ai/docs/platform_concepts/getting-started/#26-trigger-a-flow) as and when you create it to ensure it is working as desired. |

:::note
Create all the flows required for your use case and ensure these flows are properly connected. Test each flow to improvise it.
:::
  

4. **Train the bot**

    Train your bot to understand common user utterances through NLU (Natural Language Understanding), identify [intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents), [entities](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities) and more.

![](https://i.imgur.com/A7GqpLw.jpg)


5. **Test the bot**

    [Test your bot](https://docs.yellow.ai/docs/platform_concepts/studio/tools#21-test-your-bot) to ensure it's functioning as expected.



6. **Debug**

    [Debug](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/debug-flow) if there are any issues and [Publish](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes) the bot.

7. **Conversation log**

    Keep your bot effective over time through Self-learning and analysing [Conversation logs](https://docs.yellow.ai/docs/platform_concepts/studio/analyze/chat-logs).
    
    
---

## 5. Keyboard shortcuts

We have introduced shortcut keys to make it easy for you to access key options and increase the productivity of repetetive tasks.

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
