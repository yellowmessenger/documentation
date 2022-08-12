---
title: Understanding Conversational Studio
sidebar_label: Overview
---

<!-- This section will make you familiar with the first section you see on top on the platform - Studio. Studio is the section where you design and train your chatbot. 
 -->

You don't need to be a developer to build a bot . Atleast not here at Yellow.ai. Bot building is as simple as dragging and dropping a few nodes. 

Still can't believe it ? Head over to the studio page and watch the magic happen.

![](https://i.imgur.com/QRWCXwr.gif)

Studio allows you to give your usecase an overall structure in the way you like. You can train your bot to perform a variety of functions ranging from raising a ticket to branching your flow.


:::info
You can sign up on [Ascend](https://ascend.yellow.ai/) which provides you learning resources for bot building courses, virtual classroom sessions, video/audio content and much more.


If you're getting started or looking for more practical end-to-end guides, checkout [Cookbooks](../../cookbooks/template-bots/customer-support-bot.md), which provides end to end bot building guide.
:::

> :heavy_check_mark: Before moving forward, we're assuming you've already completed the process of [setting up your bot project](../../cookbooks/getting_started). 

---

## Studio: Kickstart Your Bot Building Journey Here

![](https://i.imgur.com/49IDEd8.png)
<!-- update screenshot here-->

Studio consists of following modules:

### Build

#### [Flows](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys): 
A conversational flow is a set of events that are carried out one after the other depending on conditions set by you for your bot.

There are 2 ways for you to build a flow:
###### 1. Marketplace
Choose a template from market place and access one of the predesigned bots. 
![](https://i.imgur.com/jitbjTo.gif)

###### 2. Create from scratch
Click on the flow dropdown and click on **+ Create Flow**.

#### [NLU](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents):
Natural Language Understanding makes up the heart and soul of understanding user utterances. Train your intents to understand common user utterances and trigger flows using the start trigger.

#### [Code](https://docs.yellow.ai/docs/platform_concepts/studio/build/code):
Bot builders can write  code functions here if needed and attach them using function node to workflow.

#### Localization:
Localization can be used to configure multilingual messages and nodes to provide multillingual support.
#### [FAQ](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs):
Train your bot to understand commonly asked questions by the users.This way your bot can give automated responses to various user queries.

### [API](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api)
Connect third party APIs to your Bot by using this module. Use API to send and recieve data from any platform. This information can be accessed using APIs.

### [Database](https://docs.yellow.ai/docs/platform_concepts/studio/database)
Add and store user data in a strucutred manner with database.You can select fields that you want searchability in and acces these fields later in the bot with database node.

### Learn
This module improves your bot training over-time by self-learning. You can also enable small talk for your bot to carry out short conversations with your user.

### [Document Cognition](https://docs.yellow.ai/docs/platform_concepts/studio/train/what-is-document-cognition)
Using document cognition capabilities, bot can answer user queries through unstructured documents.

### [Event hub](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub)
Manage how your bot responds to events. Choose from an existing event or handle a new event from your code.

### [Conversation logs](https://docs.yellow.ai/docs/platform_concepts/studio/analyze/chat-logs)
This module detects patterns in selected conversations and tags them with actionables that can help you improve your flow. Acces and filter all your conversations here.



---

### 1. Design your conversations 

You can design and test all your conversations in the design section of bot - mainly using Journeys & FAQs. But let's not rush ahead. 

There can be multiple use cases for which you started building a bot - in most cases to automate some service/business function, with a conversational layer on top of it.

:information_source:  To take an example, suppose you wish to build a travel assistant bot, and these are the things you wish to handle-

- Flight tickets booking, cancellation and rescheduling
- Hotel bookings, cancellation and rescheduling
- Flight status
- Customer support with live human

Above points describe the scope of your bot, ie, what can your bot help your customers with. Once you're clear with what you want to do, first thing you will start with is designing the flow of conversation, right from where the conversation starts.

1. **First step** of this flow design is configuring the **Welcome prompt** you see above. Welcome prompt helps you configure the first message your bot shows to user. 
2. Now that your welcome message is set, next you can plan is designing the flows we discussed above. We do this with the help of **Journeys.** You will learn more about [**Journeys**](./build/journeys) in next section.
3. In above flow you also wanted to **answer customer FAQs**, these FAQs can be added in the [**FAQ**](./train/add-faqs) section.
4. Moreover you can also handle [**contextual questions**](./train/add-contextual-response). 
5. Lastly as in above screen, you can **configure your fallback options**. When user says something that bot doesn't understand, or is not in scope of the bot, bot goes through fallback flow. 
    Fallback consists of three parts:
    - **Suggestions** : When bot doesn't understand user input, it will help by trying to suggest journeys close to what user might want (if available). ***You should enable suggestions for a good user experience!***
    - **Document Search** : Another fallback bot can resort to if no journey comes up in suggestions as well, is searching and answering from the documents added in [**knowledge base**](./train/what-is-document-cognition).
    - Finally if none of the above works, bot will go to **fallback prompt**. In fallback prompt you can set a Fallback message, Trigger a agent journey etc. 

---

### 2. Train your bot
Another thing, the heart and soul of bot building "**Natural language Understanding**" capabilities can be added to bot in this section. 
You can [train your bot](./test-and-publish-bot/bot-training) here to [respond to various user utterances](./train/intents), [detect entities](./train/entities) etc. 

### 3. Supporting sections - Code, API and Events.
These sections are often used / needed in bot building journey.
- **Code**: You can write your code functions here if needed and attach them using function node to workflow. 
- **Events** : Events section helps you add and handle various events .
- [**API**](./api/add-api) : You can add and manage your APIs in API section. 
### 4. Document Cognition
Using [**document cognition**](./train/what-is-document-cognition) capabilities, bot can answer user queries through unstructured documents.

### 5. Self - learning and improving the bot continously
It's hard to predict everything upfront for a project and create perfect project in one go. Continous improvements in any project are part of building great things, and chatbots are no exception.

Our last sections in studio , ie, 

- **Learn** section helps your improve your bot training over-time by self-learning.
-  **Conversation logs** section detects patterns in selected conversations and tags them with actionables that can directly help you improve your bot flows. 

This is so you improve both conversational flows + Training overtime. 

---
We will dive deeper into above points in upcoming sections. 