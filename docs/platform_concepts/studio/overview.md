---
title: Studio overview
sidebar_label: Overview
---

<!-- This section will make you familiar with the first section you see on top on the platform - Studio. Studio is the section where you design and train your chatbot. 
 -->


---

<!-- This section will make you familiar with the first section you see on top on the platform - Studio. Studio is the section where you design and train your chatbot. 
 -->

## Introduction

Studio provides a no-code bot building platform that helps anyone create a bot for their business needs easily. With Studio, you can collect information from your customers, update their information, launch actions, show them the necessary information, have a live chat with an agent and do lot more. 




This article briefs you understand various components of Studio and helps you to get started with creating a bot. 

:::info
If you're new to creating bots or looking for more practical end-to-end guides on bot building, see [Cookbooks](../../cookbooks/template-bots/customer-support-bot.md).
:::

---

## Access Studio

:::info
Before designing your bot, you need to have the bot set up as mentioned in [Setting up your bot project](../../cookbooks/getting_started). 
:::

1. Log on to https://cloud.yellow.ai.
2. In the Menu options, click **Studio**.

   ![](https://i.imgur.com/QRWCXwr.gif)

### Understand UI elements
   ![](https://i.imgur.com/WNVEpEO.png)


Option | Description
------ | -----------
Menu | Access all the Yellow.ai modules here. 
Search box | Search for a specific information from our [Knowledge base](https://docs.yellow.ai) 
Help | Click to directly access our Knowledge base.
Marketplace | Save time and increase productivity with our preconfigured templates to your bot. A template contains journeys, validators, integrators and more.
Access control | Share your bot access to your team members or superiors who would be contributing to the bot building.
Notifications | Get notified on the invites sent by others. You will see the notification alert when there is someone shares bot access with you.
![](https://i.imgur.com/g8ZnFxE.png) | Check if each step of the flow is working as expected as building your bot. It shows what is happening in each step such as values stored, action triggered, condition, and prompt. To see the actual preview, click on the icon next to Preview bot. 
![](https://i.imgur.com/4u8ra3O.png) | Access conversation logs directly from the preview pane.  
![](https://i.imgur.com/mcvEPae.png) | Preview your bot in different channels. 

---

## Steps to build your bot
A bot consists of one or more conversation flows. A flow is a set of events carried out in a sequential order according to the conditions set.


1. Create a bot.
   There are two ways of creating a bot.

   a. Create from scratch using Add bot. (or)
   b. Use ready-to-use templates to quickly create your bots easily.  There are several templates available to cater different business scenarios. You can then modify the template flow as per your requirement.  
   ![](https://i.imgur.com/jitbjTo.gif)

2. You first need to configure the welcome message to prompt when the user opens the bot. Click on the **Start** node to set the welcome message.
   It could be a simple text like 
   - Hey! How can I help you today,.
   - Welcome to the XYZ company, I am Boty! How can I assist you?.
3. Define your bot functionality using various Studio functionalities.

   a. [Add a Flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys/). A conversational flow is a set of events that are carried out in a sequential order according to the conditions set. Create multiple flows and [trigger each flow](https://docs.yellow.ai/docs/platform_concepts/getting-started/#26-trigger-a-flow) logically as per the requirement.
   
   b. Organise your conversational logic. Each node is a point of a flow. Use [Nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes) to ask questions, store values, show information, perform math functions, trigger condition based actions, and make API calls.
   
   c. Use [Database](https://docs.yellow.ai/docs/platform_concepts/studio/database) to store information (such as location, address, and user information) in the Yellow.ai Platform and retrieve the details wherever required in the flow. 
   
   d. Use [Document cognition](https://docs.yellow.ai/docs/platform_concepts/studio/train/what-is-document-cognition/) to enable bot to answer user queries from the documents that you have.
   
   e. Make your bot smart by triggering actions or flows based on user activities or [Events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub). For example, send a predefined text when no agent is online, or when assigned to an agent;  when user closes a promotion shown in the bot; trigger journeys when user opens a specific URL.
   
   f. Make your bot handle unintended replies wisely through [Context management](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-contextual-response). For example, what if customer types a new question when the bot asks for the mobile number.
   
   g. Use [Localization](https://docs.yellow.ai/docs/platform_concepts/studio/languages-supported/) to serve users worldwide by making the bot interact in the user's native language. Yellow supports over 100 languages. 
   
   h. If you are a developer, use [Code](https://docs.yellow.ai/docs/platform_concepts/studio/build/code/) to define custom functionalities.
   
   i. Connect third-party systems through [APIs](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api) to  retrieve data directly from that system. For example, you can show user details that are available in your database which the need of importing the entire data to Yellow Platform.
   
   j. There could be instances where your bot does not understand how to respond to your user intent. Use Fallback to provide suggestions, answer from documents, connect to agent, or show a message.
   
   
   k.[Test each flow](https://docs.yellow.ai/docs/platform_concepts/getting-started/#26-trigger-a-flow) as and when you create to ensure it is working as desired.
   
   l. Create all the flows required your use case and ensure these flows are properly connected. Test each flow as mentioned in Step k.

4. [Train your bot](./test-and-publish-bot/bot-training)   to understand common user utterances through NLU (Natural Language Understanding), identify [Entities](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities) and more. 
5. [Test your bot](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/bot-training) to ensure it's functioning as expected.
6. [Debug](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/debug-flow) if there are any issues and [Publish](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes) the bot.
7. Keep your bot effective overtime through Self-learning and analysing [Conversation logs](https://docs.yellow.ai/docs/platform_concepts/studio/analyze/chat-logs/).
