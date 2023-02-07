---
title: Introduction to voice bot builder - voice nodes & global and node level voice options 
sidebar_label : Global & Node level options 
---

In the yellow cloud platform, voice can be configured with **quick settings** and **reusable nodes** to ensure that the bot development is much faster and error-free. 

 
In this article, you will learn how to convert your idea of a voice conversation (use-case) into a bot flow.

-------

**Example use case to build a voice bot**

Let us consider a use case to build a *Banking voice bot* that asks a set of questions to identify the user and provide a resolution for the asked queries (as shown in the below conversation). This is a happy conversation flow where the bank account holder provides his name and phone number and asks for the eligible home loan and the bot replies with the details. 



![](https://i.imgur.com/zWCv0tr.png)


<!-- ![](https://i.imgur.com/cRGigjU.jpg) -->

To build a bot based on the discussed use case, the conversation must be broken into [flows](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) with relevant nodes. 

:::note
Click [here](https://docs.yellow.ai/docs/cookbooks/getting_started) for generic tips to build a good conversation flow. 
:::

------

## 1. Building a flow for a voice bot conversation 

 Flows are a collection of nodes. A bot can consist of a single flow or multiple flows based on the use case. 

> Refer to [this](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/marketplaceintro) section for details on importing flows from [Marketplace](https://cloud.yellow.ai/marketplace) - where you do not have to build any flows. You can import a pre-built flow that suits your use case. 
> 

> Refer to [this](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) section for details on how to create a flow. 



![](https://i.imgur.com/QbGePdb.png)


Four types of nodes are used to build any flow:
1. Prompt
2. Message 
3. Action 
4. Logic 



> Learn more about nodes [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes). 

-------

## 2. Nodes supported for voice bots


| Category            | Nodes                                     |
| ------------------- | ----------------------------------------- |
| Message and Prompts | [Speak](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#28-speak), [Name](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#12-name), [Phone Number](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#13-phone), [Question](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#11-question), [Text](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text) |
| Logic               | [Condition](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-condition)                                 |
|    Action                 |   [Set variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables), [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#24-function), [Database](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database), [API](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#21-api), [Execute Flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#15-execute-flow)     |



## 3. Configure nodes through settings 


For all the nodes used to build a flow for voice bots, you can configure voice-related features like - Conversation language, Bot speed, User response capture duration, etc. 


There are two methods to configure these voice options:

1. **Global options**: These settings will be applicable by default for all nodes/flows. For example: **Conversation language** and **Speed** of the conversation will ideally be constant throughout the conversation.

> Learn more on configuring global options [here](https://docs.yellow.ai/docs/platform_concepts/studio/tools#25-voice)


2. **Node options** - Output of a few nodes demand to behave in a certain way, for this, the node level settings can be configured. This overrides global options for the nodes wherever it is defined. These settings can be different for each node. For example: **Capture response time** can be different while capturing the Address of a user (using question node) vs. the phone number of a user (using phone node). 

> Learn more on configuring node options [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes#32-configure-node-for-a-voice-bot)

