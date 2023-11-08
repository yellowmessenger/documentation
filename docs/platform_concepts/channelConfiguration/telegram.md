---
title : Telegram
sidebar_label : Telegram
---

Telegram is a social networking platform that allows Telegram users to directly interact with our bot through their Telegram accounts. Telegram integration enables two-way conversations, facilitating seamless communication between users and the bot.

Telegram channel integration helps businesses to automate customer support, send campaigns (to send campaigns, a Telegram sender ID is required), collect user feedback, and so on.

This channel enables the following key features: 

* **Automated Replies**: Provides the ability to automatically respond to user messages.
* **Multi-message types support**: You can use various message types including text, image, video, file, and carousel (which can only be used as a CTA), to enhance the communication experience.

## Setting up Telegram chatbot

To set up Telegram bot, you need to perform the following:

* [Create a bot](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/account-setup#create-your-first-bot) on Yellow.ai platform based on your use case.
* [Setup a Telegram chatbot](#setup-telegram-chatbot)
* [Connect Telegram channel to your bot](#connect-telegram-channel-to-your-bot)
* [Test your Telegram chatbot](#test-telegram-chatbot)

## Setup Telegram chatbot

### Create a Telegram account

You can create a registered Telegram account using the Telegram app or website.

1. Navigate to the [Telegram](https://web.telegram.org/z/) app or website. You can either use scan the QR code or **Log in by phone number**.

   <img src="https://i.imgur.com/dAz6SkH.png" alt="drawing" width="40%"/>
   
2. Choose the **Country**, enter **Your phone number** and click **Next**.  

   <img src="https://i.imgur.com/1TYIjxQ.png" alt="drawing" width="50%"/>

3. Enter the verification code that is sent to your device.
 
   <img src="https://i.imgur.com/2FNgsun.png" alt="drawing" width="40%"/>

* This will create your Telegram account and you should be able to see the following screen.

    ![](https://i.imgur.com/YLICsC3.jpg)


### Setup your Telegram bot using BotFather 

1. Navigate to your Telegram account and search for `@BotFather` (Verified Telegram chatbots are marked with a blue check).

    ![](https://i.imgur.com/dolRkkT.jpg)
    
* You will receive a list of commands that can be used to manage bots.  

   ![](https://i.imgur.com/fV2nvP7.jpg)
   
2. Enter the command **/newbot** in the input bar and click send button. 

    ![](https://i.imgur.com/mlzmqwb.jpg) 

3. Provide a username for the bot with suffix `bot`. For example, stagingbot, demoBot, and so on. 

     <img src="https://i.imgur.com/N48DsIO.jpg" alt="drawing" width="80%"/>

* It will respond with a congratulations message, indicating that your bot has been created. Along with that, an access token is generated. Copy that access token, paste it on the bot’s Telegram channel integration page, and connect.

### Connect Telegram channel to your bot

To connect the Telegram channel on the Yellow.ai platform, follow these steps:

1. On the switcher, click **Channels > Telegram**.

   ![](https://i.imgur.com/XGauvh7.png)
   
2. Enter your **OAuth token** and click **Save**.  
   
   ![](https://i.imgur.com/PJ2dMuX.png)

3. Your Telegram channel will be successfully connected.

## Setup your bot

Set up your bot with the intents to automatically respond to user messages on Telegram.

* **Define bot's purpose and scope**: First, understand the scope and purpose of your bot (use case). Clearly outline what types of questions or requests the bot should handle based on your intended use case.
* **[Create Intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents)**: Add the intents that correspond to common questions or requests from users. Within each intent, add the relevant utterances and ensure they are trained to trigger the appropriate flow.
:::note
To trigger the respective flow in the Telegram chatbot, you must add the utterances `START` and `start` and train them accordingly.
:::
* **[Create flows](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys)**: Design customized conversation flows to manage responses. You can use the nodes such as Name, Question, Email, Phone number, Quick replies, Carousel, Date, Store comment, File prompt, and Input within the flow.

Once you set up the bot, verify whether the bot responds to user according to the defined use case.

## Test Telegram chatbot

Once you have connected your bot to Telegram on the Yellow.ai platform, you can start testing your bot on Telegram to verify whether the bot is able to respond to user messages.

To test your bot on Telegram, follow these steps:

1. Open the Telegram app on your mobile device.

2. Navigate to BotFather and click on the below-highlighted link to test the bot.

   <img src="https://i.imgur.com/kG6oUxx.jpg" alt="drawing" width="30%"/>
  
2. Click **START** to start the conversation with the bot. Make sure you have already created an intent and added the utterances `START` and `start` to trigger the corresponding flow in your Telegram chatbot.

   <img src="https://i.imgur.com/c1jHInM.png" alt="drawing" width="30%"/>
   
* The Telegram chatbot will trigger the relevant flow, and you can start interacting with the bot.   
   
   <img src="https://i.imgur.com/EetnkV5.jpg" alt="drawing" width="60%"/>
   
:::note
* If you have not added the `START` and `start` utterances to your flow, the Telegram chatbot will not trigger the intended flow. Instead, a fallback message will be displayed.
* The "START" button is visible only during the initial interaction with the bot.
:::  
   
4. If a flow is configured for agent reply using the [raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) node to start a conversation with an agent, it initiates a conversation with the agent. Once a conversation is initiated, the user can talk to the agent.

    <img src="https://i.imgur.com/F73BibF.jpg" alt="drawing" width="30%"/>
    
5. To view the entire conversation between the live agent and user, navigate to the **Inbox** module in the platform and select **Bot messages** in the **My Chats** section.

    ![](https://i.imgur.com/GYJbLDm.png)


* When the conversation between the agent and user ends, the bot takes the conversation forward with the user.