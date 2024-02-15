---
title: Twilio SMS
sidebar_label: Twilio SMS
---

Twilio SMS enables you to send and receive SMS through APIs. This cloud communication platform enables businesses to integrate SMS and other communication channels into their applications. Additionally, it supports two-way communication and push notifications to actively engage users.

**Watch the video on how to setup Twilio SMS:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/Wk7sjiSYIOU" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen></iframe>
<br/>

## Prerequisites to setup Twilio SMS

* Register an account on [Twilio console](https://console.twilio.com/).
* Copy the **Account SID**, **Auth token**, and **Phone number** for connecting your bot with Twilio SMS.

## Setting up Twilio SMS

To set up Twilio SMS, you need to perform the following:

* [Setup Twilio SMS account](#setup-twilio-sms-account)
* [Connect Twilio number to Yellow.ai](#connect-twilio-sms-to-your-bot)
* [Setup a bot](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/account-setup#create-your-first-bot) on Yellow.ai platform based on your use case.
* [Test Twilio SMS](#test-twilio-sms)

### Setup Twilio SMS account

To set up a Twilio SMS account, you need to sign up for the [Twilio console](https://console.twilio.com/).

1. Log in to the [Twilio console](https://console.twilio.com/). 

  <img src="https://i.imgur.com/jeMFZvr.png" alt="drawing" width="60%"/>
  
  * This will redirect you to the Twilio home page.


   ![](https://i.imgur.com/QilAWpD.png)   
     
2. In the left navigation bar, select **Phone Numbers** > **Manage** > **Active Numbers**.

     ![](https://i.imgur.com/xpwbUQq.png)
     
3. Click on **Active phone number**.

    ![](https://i.imgur.com/9b6HVqc.png)
    
4.  Click **Configure** and navigate to **Messaging Configuration**.

     ![](https://i.imgur.com/P55BUP6.png) 
     
5. Under Messaging, you need to configure following:

     i. In **Configure with**, select *Webhooks*.
        
    ![](https://i.imgur.com/Xq5yz4z.png)

     ii. In the **A Message comes in** section, select *Webhooks*, in **URL** add the Webhook URL provided by Yellow.ai (contact support@yellow.ai), and in **HTTP** choose *HTTP POST** method.
       
    ![](https://i.imgur.com/2goHpF5.png)
        
     iii. Click **Save configuration**.   
        
6. Go back to Twilio console, and copy the **Account SID**, **Auth token**, and **Phone number**.

     ![](https://i.imgur.com/V4zccgC.png)     


## Connect Twilio SMS to your bot

To connect a Twilio SMS to your bot, follow these steps:

1. Log on to `https://cloud.yellow.ai` and navigate to **Overview > Channels > Messaging > Twilio SMS**.

   ![](https://i.imgur.com/U2MpywV.png)

2. Enter the **Account SID**, **Auth token**, and **Phone number** that you have copied from the Twilio console (see step 6 in the [Setup Twilio SMS](#setup-twilio-sms-account) section).

   ![](https://i.imgur.com/fMH3J8Z.png)
   
3. Click **Save**.   
   This will connect you to the Twilio SMS.

## Setup your bot

Set up your bot with the intents to automatically respond to user messages on SMS.

* **Define bot's purpose and scope**: First, understand the scope and purpose of your bot (use case). Clearly outline what types of questions or requests the bot should handle based on your intended use case.
* **[Create Intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents)**: Add the intents that correspond to common questions or requests from users. Within each intent, add the relevant utterances and ensure they are trained to trigger the appropriate flow.
* **[Create flows](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys)**: Design customized conversation flows to manage responses.

Once you set up the bot, verify whether the bot responds to user according to the defined use case.

## Test Twilio SMS

After successfully configuring Twilio SMS, you can test the chatbot.

To test your Twilio SMS chatbot, follow these steps:

1. Copy the phone number from the [Twilio console](https://console.twilio.com/) and save it to your contact list

    <center><img src="https://i.imgur.com/lUBBjOJ.png" alt="drawing" width="50%"/></center>

3. Send a message to the saved number to initiate the conversation.