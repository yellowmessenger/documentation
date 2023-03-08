---
title: Introduction to voice bot builder 
sidebar_label : Global & node level options 
Tags: [global level voice options, node level voice options, create a new voice bot]
---

:::note
To explore the voice features, you must create a **voice bot**. 
Functionalities such as Design(for voice), Voice input node, etc. will not work for chat bots.  
:::

## 1. Create a new voice bot 

> If you are a new user, refer to [this](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/account-setup) article. 


1. [Log in](https://cloud.yellow.ai) to your account and click **+Create new bot**.

    ![](https://i.imgur.com/wAbVsH9.png)

2. Select **Create from scratch**. 

    ![](https://i.imgur.com/0LG3d7y.png)

3. Enter these details: 
    - **Subscription**: Select the **subscription** under which you want to create this bot.
    - **Bot type**: Choose **Voice bot**. 
    - **Avatar**: Choose/upload an avatar (your bots display photo).
    - **Industry**: Select from the dropdown. 
    - **Region**: Select from the dropdown.
    - Select **Add live chat support to your bot** if you want to add a customer support flow.

4. Click **Create bot**. 

    ![](https://i.imgur.com/u2UEI56.png)

--------

## 2. Methods to build a voice bot conversation 


To convert your idea of a voice conversation (use-case) into a bot flow, there are three approaches: 

1. Design a conversation using **Conversation design for voice bots**. 
2. Build a bot from scratch using **Voice input node**. 
3. Import a **Marketplace template** to your bot and modify it to accommodate voice conversations.

> These methods are explained in further articles. 


-------

## 3. Nodes supported for voice bots 



Only the following [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes) can be used to build voice bot flows: 

| Category            | Nodes                                     |
| ------------------- | ----------------------------------------- |
|Message|[Text](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text) |
| Prompts | [Voice input](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/build/usingvoiceinput) , Call forwarding, Call disconnect <br/>[Speak](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#28-speak), [Name](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#12-name), [Phone Number](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#13-phone), [Question](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#11-question)|
| Logic               | [Condition](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-condition)                                 |
|    Action                 |   [Set variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables), [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#24-function), [Database](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database), [API](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#21-api), [Execute Flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#15-execute-flow)     |



## 4. Configure voice nodes/flows through settings 


You can configure voice-related features like - Conversation language, Bot speed, User response capture duration, etc. for all the nodes used to build a flow for voice bots.


There are two methods to configure these voice options:

1. **Global options**: These settings will be applicable by default for all nodes/flows. For example **Conversation language** and **Speed** of the conversation will ideally be constant throughout the conversation.

> Learn more on configuring global options [here](https://docs.yellow.ai/docs/platform_concepts/studio/tools#25-voice)


2. **Node options** - Output of a few nodes demand to behave in a certain way, for this, the node level settings can be configured. This overrides global options for the nodes wherever it is defined. These settings can be different for each node. For example: **Capture response time** can be different while capturing the user's address (using the question node) vs. the user's phone number (using the phone node). 

> Learn more on configuring node options [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes#32-configure-node-for-a-voice-bot)

