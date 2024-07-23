---
title: Facebook Comments
sidebar_label: Facebook Comments
---

Integrating Facebook comments with the Yellow.ai Cloud platform helps automate responses to comments on your Facebook posts seamlessly. 

This saves you from the tedious task of individually responding to each comment. Additionally, it improves user engagement and ensures prompt replies to inquiries and feedback.

With FB comments integration, you can engage in seamless two-way conversations.

:::note
[Facebook Messenger](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/facebook-messenger) and Facebook comments function as separate communication channels.
:::

The FB comments integration offers these features: 

* **Automated replies to user comments:** It automatically responds to user comments and effectively manages conversations within each comment using bot flows.
* **Multi-user conversations:** When multiple users respond to a single comment, their responses are consolidated within the same conversation thread.
     <img src="https://i.imgur.com/Z90q8z9.jpg" alt="drawing" width="80%"/>
* **New conversations stand out:** When a new user comments separately, it starts a new conversation thread within the same comment.
     <img src="https://i.imgur.com/izTCxSX.jpg" alt="drawing" width="80%"/>
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

1. On the left navigation bar, click **Extensions**.

    ![](https://imgur.com/PIOvT6K.png)

2. Click **Channels** > **Messaging** > **Facebook messenger**.

    ![](https://imgur.com/SB7Ec9I.png)

3. Click **Connect**. 

   <center><img src="https://i.imgur.com/DNCk6Np.png" alt="drawing" width="90%"/></center>


4. Login to your Facebook account that is connected to your Facebook Business Page.

    <center><img src="https://i.imgur.com/47XbbF2.png" alt="drawing" width="60%"/></center>

5. After successfully logging in, click **Continue** to navigate to your page.

   <center><img src="https://i.imgur.com/Ya1zeeg.png" alt="drawing" width="60%"/></center>

6. Select the business you want to grant Yellow Messenger access to, and click **Continue**.

   <center><img src="https://i.imgur.com/57pZEhD.png" alt="drawing" width="60%"/></center>

7. Choose the specific business page you want Yellow Messenger to access, and click **Continue**.

    <center><img src="https://i.imgur.com/eWIDaKo.png" alt="drawing" width="60%"/></center>

8. Review the permissions that Yellow Messenger requires and click **Save**.

   <center><img src="https://i.imgur.com/iCDtXNq.png" alt="drawing" width="60%"/></center>

* Your Facebook page will be successfully connected to our platform.

    <center><img src="https://i.imgur.com/7VOwijJ.png" alt="drawing" width="60%"/></center>  

10. Select your business page. If you have multiple business pages, select the one for which you want to set up a chatbot and then click **Continue**. 

   <center><img src="https://i.imgur.com/3g41Yh2.png" alt="drawing" width="60%"/></center> 

:::note
You can connect to an unlimited number of FB pages within a single FB business account. 
:::  

11. Toggle the button to connect the selected page to your bot. Then, choose either the **Comment to comment** option to reply to comments directly, or the **Comment to inbox** option to view and respond to comments in your inbox.

    ![](https://i.imgur.com/oO5zj4w.png)

:::note
If you disable the toggle button, the option to select a **Comment response** will not be available.
:::    

12. Click **+ Add Facebook page** to add multiple pages to your bot.   

     ![](https://i.imgur.com/ibTWlWR.png)

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

   <img src="https://i.imgur.com/RDQRoeD.jpg" alt="drawing" width="80%"/>
   
* If the intent does not match, the bot should be able to respond with a fallback message. 
   
3. If a flow is configured for agent reply using the [raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) node to start a conversation with an agent, it initiates a conversation with the agent. Once a conversation is initiated, the user can talk to the agent.

    <img src="https://i.imgur.com/VNVyCLq.jpg" alt="drawing" width="80%"/>

4. To view the entire conversation between the live agent and user, navigate to the **Inbox** module in the platform and select **Bot messages** in the **My Chats** section.

    ![](https://i.imgur.com/Ncsbe2k.png)


* When the conversation between the agent and user ends, the bot takes the conversation forward with the user.

### Test Facebook comments chatbot with FAQs

You can also add FAQs to the bot to simplify bot responses. For example, for a product-related post, you can add all the details related to the product as questions and answers. The bot can respond to customer questions based on the FAQs that you have added.

Similarly, you can test your Facebook comments chatbot by adding different options such as order updates, shipping information, and so on. 

First, [add few FAQs](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs#-1-add-faqs) and train them. Then, test them to ensure that they work as expected.

   ![](https://i.imgur.com/hj3FKv1.jpg)