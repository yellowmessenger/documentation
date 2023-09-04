---
title: Webex
sidebar_label: Webex
---

Webex is a communication platform that enables conversations with chatbots or agents within the Webex messaging app. This channel lets you initiate conversations and share files, images, and videos.

## Prerequisites to setup a Webex channel

* Register an account on the [Webex Developers portal](https://developer.webex.com/).
* Copy the Bot access token and bot username, as these are needed for connection and testing purposes.

## Setup Webex channel using developer portal

To set up a Webex channel, you need to sign up for the [Webex Developers portal](https://developer.webex.com/).

### Create a bot in Webex 

To create a bot in Webex, follow these steps:

1. Navigate to the [Webex Developers Portal](https://developer.webex.com/) and click Sign up if you have not created an account.

    ![](https://i.imgur.com/DJgb4cH.jpg)
   
2. Enter your email address and click **Next**.

    ![](https://i.imgur.com/D6BVoSs.png)  
   
3. Enter the verification code that is sent to your email address and provide the details such as **First name, Last name, phone**, and **Create Password**, then click **Continue**.

    ![](https://i.imgur.com/es6LiO1.png)

4. Your account has been successfully setup. Click **Continue to developer portal**. This will redirect you to the developer portal.

    ![](https://i.imgur.com/B6yafVu.png)
    
5. Click **Start building apps**.     

   ![](https://i.imgur.com/sU8PBGV.jpg)
   
6. Click **Create a bot**.

     ![](https://i.imgur.com/JLXO4nk.png)
     
7. Enter the following details:
   * **Bot name**: Enter the bot name.
   * **Bot username**: Enter the bot username.
   * **Icon**: Select or upload an icon for your bot.
   * **App Hub Description**: Enter the description of your bot.
   * Click **Add Bot**. 

    ![](https://i.imgur.com/3rltipA.png)
   
  * Your bot will be created successfully.
  
9. Copy the **Bot access token** to connect the Webex channel to your bot on the platform.

    ![](https://i.imgur.com/Igl7WFM.png)
    
10. Copy the bot username to test the Webex chatbot.

     <center><img src="https://i.imgur.com/HZ17iEf.png" alt="drawing" width="40%"/></center>    
  
## Connect Webex to your bot

To connect a Webex channel to your bot on the platform, follow these steps:

1. Log on to `https://cloud.yellow.ai` and navigate to **Overview > Channels > Messaging > Webex**.

   ![](https://i.imgur.com/DZRqc71.png)

2. Enter the **Bot access token** that you have copied from the Webex developer portal (see step 9 in the "Create a bot in Webex" section).

   ![](https://i.imgur.com/fMH3J8Z.png)
   
3. click **Save**.   
   
   * This will connect you to the Webex channel.

3. Navigate to the **Overview** page, under the **Active channels** section, to verify that the Webex channel is connected to your bot.

    ![](https://i.imgur.com/ez7WwS1.png) 
    
## Test your Webex chatbot

After creating your Webex bot successfully, you can test the chatbot with any of the existing flows.

To test your Webex chatbot, follow these steps:

1. [Setup the bot](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/create-a-bot) based on your business use case.

2. Copy the bot username from the [Webex Developers portal](https://developer.webex.com/). 

    <img src="https://i.imgur.com/HZ17iEf.png" alt="drawing" width="40%"/>

3. Open your Webex app and click **Invite people to Webex**.
  
    ![](https://i.imgur.com/bbgmbZ1.png)

4. Enter the bot username that you have copied from the [Webex Developers portal](https://developer.webex.com/) and click **Invite**.

    ![](https://i.imgur.com/MhsNTYa.png)
    
   * The bot that you have created in the Webex developer portal will be displayed in the Webex app.

5. Initiate a conversation to test the bot.

     ![](https://i.imgur.com/79DtHKg.png)  
     