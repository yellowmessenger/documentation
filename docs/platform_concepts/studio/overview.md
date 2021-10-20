---
title: Understanding Conversational Studio
sidebar_label: Overview
---

<!-- This section will make you familiar with the first section you see on top on the platform - Studio. Studio is the section where you design and train your chatbot. 
 -->

You don't have to be a coder to build a bot! At least not on our platform. Our easy to use , no-code platform can help you build a bot in just a few clicks with excellent speed.


:::info

- If you're getting started or looking for more practical end-to-end guides, checkout [Cookbooks](../../cookbooks/Academy).

:::

> :heavy_check_mark: Before moving forward, we're assuming you've already completed the process of setting up your bot project. 

---

## What you can do in studio?

![](https://i.imgur.com/49IDEd8.png)
<!-- update screenshot here -->

Studio consists of following moduels:
- Build
    - Flows: Here conversatinal flow can be designed using [journeys](../studio/journeys), [prompts](../studio/steps/prompts-and-messages/) and [nodes](../studio/steps/steps/). 
    - NLU: NLU is like a brain of a bot. Here bot can be trained using [intents](../studio/natural-language-understanding/intents) and [entities](../studio/natural-language-understanding/entities).
    - Code
    - API
- Learn
- FAQ
- Document Cognition
- Event hub
- Chat logs


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
2. Now that your welcome message is set, next you can plan is designing the flows we discussed above. We do this with the help of **Journeys.** You will learn more about [**Journeys**](./journeys) in next section.
3. In above flow you also wanted to **answer customer FAQs**, these FAQs can be added in the [**FAQ**](./knowledge-management/add-faqs) section.
4. Moreover you can also handle [**contextual questions**](./context-management/add-contextual-response). 
5. Lastly as in above screen, you can **configure your fallback options**. When user says something that bot doesn't understand, or is not in scope of the bot, bot goes through fallback flow. 
    Fallback consists of three parts:
    - **Suggestions** : When bot doesn't understand user input, it will help by trying to suggest journeys close to what user might want (if available). ***You should enable suggestions for a good user experience!***
    - **Document Search** : Another fallback bot can resort to if no journey comes up in suggestions as well, is searching and answering from the documents added in [**knowledge base**](./knowledge-management/what-is-document-cognition).
    - Finally if none of the above works, bot will go to **fallback prompt**. In fallback prompt you can set a Fallback message, Trigger a agent journey etc. 

---

### 2. Train your bot
Another thing, the heart and soul of bot building "**Natural language Understanding**" capabilities can be added to bot in this section. 
You can train your bot here to [**respond to various user utterances**](./natural-language-understanding/intents),  [**detect entities**](./natural-language-understanding/entities) etc. 

### 3. Supporting sections - Code, API and Events.
These sections are often used / needed in bot building journey.
- **Code**: You can write your code functions here if needed and attach them using function node to workflow. 
- **Events** : Events section helps you add and handle various events .
- [**API**](./api-management/add-api) : You can add and manage your APIs in API section. 
### 4. Document Cognition
Using [**document cognition**](./knowledge-management/what-is-document-cognition) capabilities, bot can answer user queries through unstructured documents.

### 5. Self - learning and improving the bot continously
It's hard to predict everything upfront for a project and create perfect project in one go. Continous improvements in any project are part of building great things, and chatbots are no exception.

Our last sections in studio , ie, 

- **Learn** section helps your improve your bot training over-time by self-learning.
-  **Conversation logs** section detects patterns in selected conversations and tags them with actionables that can directly help you improve your bot flows. 

This is so you improve both conversational flows + Training overtime. 

---
We will dive deeper into above points in upcoming sections. 