---
title: Facebook Comments
sidebar_label: Facebook Comments
---

Integrating Facebook comments with the Yellow.ai Cloud platform helps automate responses to comments on your Facebook posts seamlessly. 

This saves you from the tedious task of individually responding to each comment. Additionally, it improves user engagement and ensures prompt replies to inquiries and feedback.

With FB comments integration, you can engage in seamless two-way conversations.

:::note
Facebook Messenger and Facebook comments function as separate communication channels.
:::

The FB comments integration offers these features: 

* **Automated replies to user comments:** It automatically responds to user comments and effectively manages conversations within each comment using bot flows.
* **Multi-user conversations:** When multiple users respond to a single comment, their responses are consolidated within the same conversation thread.
     ![](https://i.imgur.com/Z90q8z9.jpg)
* **New conversations stand out:** When a new user comments separately, it starts a new conversation thread within the same comment.
     ![](https://i.imgur.com/izTCxSX.jpg)
* **Works with different message types:**  It supports various message types like text, images, file sharing, and quick replies (which get converted into text messages).

## Setting up Facebook Comments bot

To set up Facebook comments bot, you need to perform the following:

* [Connect Facebook Comments to Yellow.ai](#connect-your-facebook-page-to-yellowai)
* [Setup a bot](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/account-setup#create-your-first-bot) on Yellow.ai platform based on your use case.

## Connect your Facebook page to Yellow.ai

To connect your Facebook page to Yellow.ai, you need to have a Facebook Business account with at least one Facebook page created.

:::note
To establish a connection, you must be an admin of the Facebook account and the respective Facebook page.
:::

### Link your Facebook page

To link your Facebook page, follow these steps:

1.  On the switcher, click **Channels**.

    ![](https://i.imgur.com/kv01RDY.png)
   
2. Navigate to **Social** and enable **Facebook comments**. 

   ![](https://i.imgur.com/X983fbO.png)

3. Login to your Facebook account that is connected to your Facebook Business page.

   <center><img src="https://i.imgur.com/47XbbF2.png" alt="drawing" width="60%"/></center>

4. Click **Continue** to navigate to your Facebook page.

   <center><img src="https://i.imgur.com/e6z2lqv.png" alt="drawing" width="60%"/></center>


5. Select your desired business page and click **Connect**. 

   <center><img src="https://i.imgur.com/o4bt7xF.png" alt="drawing" width="60%"/></center>
   
:::note
* If you have more than one business page connected to this Facebook account, select the one to which you want to connect the chatbot.
* You can also connect multiple Facebook pages to your bot.
:::

## Setup your bot

Before you start testing your bot, setup your bot with intents to automatically respond to user comments on your Facebook posts, as explained below.

* **Define bot's purpose and scope**: First, understand the scope and purpose of your bot (use case). Clearly outline what types of questions or requests the bot should handle based on your intended use case.
* **[Create Intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents)**: Include the intents for common questions or requests. Add the utterances to each intent and train them to trigger the respective flow.
* **[Create flows](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys)**: Design customized conversation flows to manage responses to your FB posts. You can incorporate text, images, and file prompts within the flow. While quick replies are supported, they will be displayed as plain text in the bot's responses.

Once you set up the bot, verify whether the bot effectively handles and responds to user comments according to the defined expectations.

## Test your bot on Facebook page

Once you have linked your bot to your Facebook page through the Yellow.ai platform, you need to test the bot to verify whether the bot  is able to respond to user comments on your Facebook page automatically.

To test your bot on Facebook page, follow these steps:

1. Open your Facebook account and navigate to your business page.

2. Add a comment to the Facebook page post to test the chatbot. Ensure that you have created the bot with intents and configured the flows with the same intent.

* When a user adds a comment to the post, if the intent matches, the bot should be able to understand the utterance and respond automatically.

   ![](https://i.imgur.com/RDQRoeD.jpg)
   
* If the intent does not match, the bot should be able to respond with a fallback message. 
   
3. If a flow is configured for agent reply using the [raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) node to start a conversation with an agent, it initiates a conversation with the agent. Once a conversation is initiated, the user can talk to the agent.

    ![](https://i.imgur.com/VNVyCLq.jpg)
    
4. To view the entire conversation between the live agent and user, navigate to the **Inbox** module in the platform and select **Bot messages** in the **My Chats** section.

    ![](https://i.imgur.com/Ncsbe2k.png)


* When the conversation between the agent and user ends, the bot takes the conversation forward with the user.

