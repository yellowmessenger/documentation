---
title: Launch Your Bot in Minutes
sidebar_label : Build your first bot
---



:::note
[Upgrade](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/upgrade#steps-to-upgrade-your-freemium-plan) your account to unlock all the features offered by Yellow.ai.
:::

## Step 1: Sign in to Your Account

Open the Yellow.ai Cloud Platform and log in to the platform using your preferred option:

- **Sign in with Google**:  

  Use this option if your organization is integrated with Google for Single Sign-On (SSO). It allows for a quick and secure login using your Google account.
  
  ![image](https://imgur.com/fHbiGIn.png)

- **Sign in with OAuth**:  
  Choose this method if your organization has set up OAuth for authentication with Yellow.ai. It provides a secure way to log in through your organization's OAuth provider.
  
  ![image](https://imgur.com/k5Oj3bj.png)

- **Manual Sign-in**:  

  If you registered by setting up a username and password manually, you can log in by entering those credentials directly.
  
   ![image](https://imgur.com/2JzJm9v.png)

:::note
If you do not have an account, sign up using the instructions provided [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/account-setup).
::: 

## Step 2: Create or Access Your Bot

This guide will walk you through the process of creating a chatbot on the Yellow.ai platform. The process differs slightly depending on whether you are a **Super Admin** (who originally creates the bot) or a **Contributor** (who accesses the bot after it has been created).

### Creating a Bot (For Super Admin)

1. Go to the **Overview** page.

2. Click on the bot drop-down menu.

3. Select **+ Create bot**.
 
   ![image](https://imgur.com/7wsgKrr.png)

In the **Create bot** window, provide the following details:
   - **Bot subscription**: Select the subscription under which you want to create your bot.
   - **Bot type**: Choose whether your bot is chat-based (Chat bot) or voice-based (Voice bot).
   - **Bot name**: Enter a unique name for your bot.
   - **Choose avatar**: Select an animated avatar to represent your bot.
   - **Industry**: Specify the industry to which your bot belongs.
   - **Region**: Choose the region your bot will operate in.
   - **Add live chat support to your bot (optional)**: Enable this to provide users with live agent support.

   <img src="https://imgur.com/nwpj6H3.png" alt="drawing" width="40%"/>

Once you have filled in all the details, click **Create bot**. You will be redirected to the **Overview** page, where you can further configure your bot according to your requirements.

   ![image](https://imgur.com/4K6MYXE.png)

### Requesting Access for Your Org’s Bot (For non-super admin)

For other org users, when you log in, you'll see a list of bots that have been created. You can:
  - Request access to a bot, or
  - Navigate to **Profile settings > My Invites** page and click on the respective **Request access** button.
 ![image](https://imgur.com/8BueeA5.png)


### Accepting Access for Your Org’s Bot (For Non-Super Admin)
You can accept the invite using either of the two ways:

1. If a bot admin has already provided access, you can accept the invitation received via email.

   <img src="https://imgur.com/DgNaTrv.png" alt="drawing" width="80%"/>

2. You can also accept through the notification you received on the platform's **Notifications** page.

   ![image](https://imgur.com/g3kXoAa.png)

## Accessing Existing Bot (For other users)

If you're a **Contributor** or a user with access rights (but not the original creator), your process of interacting with bots is different:

### Accessing the bot

1. Navigate to **Profile settings > My Invites**. Instead of creating a new bot, you will see a list of bots that your admin/team has already created.

2. Click on the respective **Request Access** button to request access to the bot.

   ![image](https://imgur.com/HtDLuBS.png)

:::note
Only **Super Admin** can create a new bot. Other users can request access to a bot and may have Admin roles, but they do not have the privilege to create a bot.
:::


## Build your bot conversation flow

After [creating your bot](#step-2-create-or-access-your-bot), you can begin building its flow to manage how it interacts with users. Flow creation includes the following steps:

* [Setup flow triggers](#setup-flow-triggers)
* [Create bot flows](#create-bot-flows)
* [Preview and test the bot](#preview-and-test-the-bot)
* [Publish the bot](#publish-the-bot)

## Setup flow triggers

Before building a flow, you need to create Intents and Utterances and train the bot to recognize them. This setup ensures that the bot can trigger the correct flows and respond appropriately.

### Create Intent and Utterances:

An Intent is what the user wants to achieve, like "booking a ticket".

Utterances are the different ways a user might express that intent. For example, "I need to reserve a ticket", "Book a flight ticket for me", and "I want to book a ticket". For more detailed information on how to create Intents and Utterances, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#add-intents-and-uttrances).

#### Prerequisite

Consider the following when creating Intents and Utterances:

* **Environment**: You should add intents or utterances only in a low-tier environment like **Sandbox** or **Development**.

**Intent naming best practices**:
  * Minimum number of characters for an intent name: 10 
  * Minimum number of words: 10 (and unique)
  * Special characters or numbers: Not allowed
  * Duplicate intent names: Not allowed

    ![](https://i.imgur.com/s0oiSIS.gif)

### Add auto-generated utterances

The platform can auto-generate utterances that are based on the intent you added. This helps the bot understand and respond to the different ways users might phrase the same request. For more details, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#add-auto-generated-utterances).

   ![](https://i.imgur.com/kApxpNm.gif)

### Train Intent and Utterances

You need to train your bot after adding intents and utterances. If the bot is not trained with the intent, it will not understand user queries and display a [fallback](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/manage-flows#fallback-flow) response. For multiple languages, you need to train the intents and utterances in multilingual and not Sentence encoder. For more detailed information, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#train-your-bot-with-intents-and-utterances).

   ![](https://imgur.com/Q4cGSMp.gif)

### Verify intent confidence

For a bot to accurately trigger the desired flow, you need to verify the confidence level of the added intent. This involves checking whether the intent's confidence score aligns with the user's input, ensuring the correct flow is initiated. The expected minimum confidence score is `0.85`. For more detailed information, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#test-your-intents).

   ![](https://imgur.com/FUtdOwX.gif)
    
   
## Create bot flows

Once you have created Intents and Utterances, you can start building your bot's conversational flow. This involves connecting different nodes that represent the steps of the conversation. There are several ways to create a flow:
  * Create with AI Copilot
  * Create from template
  * Start from scratch

  ![create flow](https://imgur.com/6rfrsTD.png) 
  
:::note
* You can add up to 150 nodes in a flow.
* There is no limit to create the number of flows in a bot.
:::

### Start node

The start node is an entry point for a bot to begin a conversation with the user. You can define a trigger point for a flow by selecting Intents, Entities, Event, or Page URL. Multiple trigger types can be added for a single flow. For detailed instructions, see [how to configure each trigger type](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow).

   ![](https://imgur.com/zuP3R7W.gif)

### Connecting nodes

In the flow, each node represents a step. Start by clicking the starting point and connecting the appropriate nodes based on your use case.

   ![](https://imgur.com/RRf8EmL.gif)
   
## Preview and test the bot

After creating the flow, you can preview and test how the bot will appear, function, and interact with users.

  ![](https://imgur.com/wbjAKle.gif)

## Publish the bot

After testing the flow, you can [publish](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes) the bot to make it accessible to end users.

When you are publishing the changes from Sandbox to Staging, you do not need approver permission to approve it. But when you are publishing from Staging to Production, you need approver's permission. Only the super admin of the bot can approve the publish request.

   ![](https://imgur.com/AXemOsX.gif)

### Cancel publish request

If you wish to make changes to the current flow or bot, or if you have raised a publish request by mistake, you can cancel the publish request.

   ![](https://imgur.com/ev4e2p6.gif)
   
   
   

















