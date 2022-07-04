---
title: Build Your First Bot
sidebar_label: Getting Started
---
See the power of Conversational AI for yourself. You can read all about it in our Studio section or you can stay on this page and build a bot immediately.
It is entirely your choice! If you don't know where to start, checkout this walkthrough video of yellow.ai Platform overview.

<p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/w80U82cU0l0" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen="True"></iframe></p>

:::info

- If you are looking to go through detailed bot building tutorials, checkout [Guides](../cookbooks/getting_started).

:::

> :heavy_check_mark: Before building a bot, you will have to set up your bot project. To do it, check out this [guide](../cookbooks/getting_started) or follow the video tutorial given below.


<p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/LaeNb_IV-UE" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen="True"></iframe></p>

---
# Step-by-Step guide on How to get started with yellow.ai

To get started with our platform, you can go over to https://cloud.yellow.ai/ and signup with your official email-id.

```
Register for our academy training here: https://academy.ascend.yellow.ai/
```

## Understanding your use-case
Bots built on yellow.ai can be used for various usecases like:-
 - Lead Generation
 - Conneting a user with a live agent
 - Automating responses FAQs
 - Taking a user through the complete e-commerce experience
 - HR automation and many more!!

Having a well defined use-case can help throughout the entire bot building journey. For this we recommend establishing a flow that matches your primary use-case.

For the rest of this guide, we'll be using this flowchart as a reference point.

![](https://i.imgur.com/axuVMs9.png)


## How to create a bot
Now that you're signed into our platform, you can click on **Create New Project**
If you're at the overview page, you already have a project created. You can simply click on **Overview**, on the top left and click on **Studio**. You can see various modules within our platform. 
A brief on each module:-

#### **Studio**:
The yellow.ai Studio is the place to build those intelligent bots to power your business using conversational AI. To know more, click **[here](https://docs.yellow.ai/docs/platform_concepts/studio/overview)**.

#### **Inbox**:
Bring a human touch with the help of the Inbox module for your agents to take up conversations beyond the automation. More on that **[here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox)**.

#### **Insights**:
Watch how the conversations unfold and which journeys you're taking your users through the most using our Insights module. Check out our docs on it **[here](https://docs.yellow.ai/docs/platform_concepts/growth/growth)**.

#### **Engage**:
Make use of our world class automation to run marketing campaigns across 20+ channels.**[here](https://docs.yellow.ai/docs/platform_concepts/engagement/engage)**.

#### **Channels**:
The bots you build can be plugged across various applications. A list on all the channels available can be found **[here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration)**.

#### **Integrations**:
The yellow.ai Studio is the place to build those intelligent bots to power your business using conversational AI. To know more, click **[here](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/razorpay)**.

![](https://i.imgur.com/hjtxP2s.png)


## Building the bot
### Step 1: Configuring the welcome message
As we build out the flow, it's important to keep the **[conversational design](https://docs.yellow.ai/docs/platform_concepts/studio/overview#1-design-your-conversations)** aspect in our mind right from the opening message. This can be configured by 

- Clicking on the Welcome button 
- Changing the text/ Adding buttons / Triggering a flow

![](https://i.imgur.com/hceA8s2.png)



### Step 2: Setting up a flow/journey
We use Flows and Journeys interchangeably throughout our documentation and it stands for the actual customer journey/path we'd like our end users to go through. A more elaborate explaination can be found **[here](https://docs.yellow.ai/docs/platform_concepts/studio/journeys/)**.

To create a flow, you can click on the dropdown **FLOWS** in the middle of the screen and click on **CREATE A FLOW**.

![](https://i.imgur.com/bjIlt6H.png)


### Step 3: What are nodes
Now that a flow has been created, you have this open canvas to add nodes (the little box called start is a node). You can add nodes in two ways:-
- Click on the black dot in the center of a node

![](https://i.imgur.com/9Nc8ztc.png)


- Click on any 4 of the icons on the left which represent each category of nodes

![](https://i.imgur.com/uGOUyyI.png)


You can find more information on the nodes **[here](https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages)**.

For our use-case, I've built out a flow using the Quick-Repy, Email, DB and Text nodes.

![](https://i.imgur.com/sjFlMBv.png)



### Step 4: How to create and store values in Variables
Let's say you want to ask the user a question during this flow and save their response, you can make use of Variables. We have different types of variables some of which are pre-made for every bot and custom variables that can be created by you. All the information you need on variables can be found **[here](https://docs.yellow.ai/docs/platform_concepts/studio/bot-variables/)**.

Here, I've created a custom variable to store the user's query

![](https://i.imgur.com/n7wpkek.png)

![](https://i.imgur.com/vqMbUEj.png)


### Step 5: How do I handle the user responses
Often times, instead of going with the flow that we want to take the user through, the user could type in queries that don't really resonate with the rest of the flow. 
In such cases, we have a robust **Natural Language Understanding(NLU**) engine which can be used to train the bot with commonly asked phrases based on which flows can be triggered.

Our documentation does a deep dive on **how to setup intents, utterances and entities** along with best practices. You can find them **[here](https://docs.yellow.ai/docs/platform_concepts/studio/natural-language-understanding/intents)**.

In the example below, I'm setting up an intent to identify when a user wants **to place an order** and initialising a flow for that intent.

**Note: You must always have a minimum of 2 trained intents**

![](https://i.imgur.com/5HMaYEi.png)


### Step 6: Different ways to trigger a flow
It is considered good practice to build smaller flows and direct users from one flow to another.

This can be done by using the [Trigger Journey node](https://docs.yellow.ai/docs/platform_concepts/studio/steps/action-nodes-and-logic/#trigger-journey). Here, we've triggered the PlaceOrder flow.

![](https://i.imgur.com/eK9A2xw.png)

Another way to trigger a flow is based on the intent

![](https://i.imgur.com/84CPWK4.png)


### Step 7: Storing records in a Database
Let's start by creating tables in your database. You can find documentation on it **[here](https://docs.yellow.ai/docs/platform_concepts/data/create-tables)**.

You can make use of our [Database Node](https://docs.yellow.ai/docs/platform_concepts/studio/steps/action-nodes-and-logic/#database) to perform all the operations you intend to carry out like Insert, Update, Search and Count.

For all the leads we're collecting below I'm going to store that information in our database

![](https://i.imgur.com/RfSElwI.png)
![](https://i.imgur.com/ZEXZO5P.png)


## Integrations
For certain use-cases, there will be dependencies outside of our platform which we enable with the help of out-of-the-box integrations.

In our case, we'll be using a [Google Sheets integration](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/google-sheets) to push all the data into a Google Sheet using the out of the box support.

You can search for the integration you are looking for over at **[docs.yellow.ai](https://docs.yellow.ai/)**.

![](https://i.imgur.com/ZooBWqK.png)



## Marketplace
For most use-cases and integrations, we provide templates of user-journeys that can be built. 

Check out the marketplace by clicking on the this icon on the top-right

![](https://i.imgur.com/uQjekjD.png)



## Live Customer Support agents
By using the Chat with Agent template you can direct your users straight to your agents.
More on agents and our Inbox module **[here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox)**.

Let's use the chat with an agent template for our use-case. This pre-populates all the necessary intents and flows needed for you to plug and play with.

![](https://i.imgur.com/5udk4We.png)


## Using Channels like Emails and SMS
Our bots can be setup across 20+ channels to give you the exact same experience of a web based chatbot — whether it's Whatsapp, SMS, Instagram, Slack and many more!!

A detailed description on how to configure your channel can be found **[here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/email-outbound)**.

### Whatsapp as a Channel
We have an elaborate guide on the best practices to be followed while setting up the Whatsapp channel. Link to the guide is **[here](https://docs.yellow.ai/docs/cookbooks/whatsapp-channel/whatsapp-channel)**.


## What's next?
Jump into Studio and automate your conversations like never before.
Happy Bot building!!
---
