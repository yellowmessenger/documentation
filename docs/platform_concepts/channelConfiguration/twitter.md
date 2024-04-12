---
title: Twitter
sidebar_label : Twitter
---

Twitter is a social media platform that allows you to post tweets in the form of text messages, images, videos, and links.

Twitter enables businesses to engage with customers through mentions and direct messages, promoting their brand effectively.

The following are key features of this channel:

* **Automated replies**: Provides the ability to automatically respond to user messages.
* **Supported message types**: You can use various message types that can be sent by the users to the bot and live agent:

User | Bot and live agent
-----|---------------
Text<br/> Image <br/> GIF |Text<br/> Image 

In this article, you will learn:

* [Twitter pricing plans](#twitter-pricing-plans)
* [How to create a Twitter account](#create-a-twitter-account)
* [How to setup a Twitter channel using the Developer portal](#setup-twitter-channel-using-developer-portal)
* [How to connect a Twitter channel to your bot](#connect-twitter-to-your-bot)
* [How to test your bot on Twitter channel](#test-your-bot-on-twitter)

## Twitter pricing plans

##### **Prerequisites**

You need to consider the below prerequisites to get the paid Twitter plan:

* [create a Twitter account](#create-a-twitter-account)
* Sign up for [Twitter's Developer portal](#setup-twitter-channel-using-developer-portal).

The following are the pricing plans for Twitter:

1. **Free Developer App**: This plan does not allow you to access the Direct Message (DM) lookup (get messages) or manage API (post messages).

2. **Basic Developer App**: This plan allows you to access both DM lookups and manage DM APIs with the following messaging limits:

   1. **Direct messages**: There is no limit on the number of direct messages that can be sent from Twitter to Yellow, but there is a limit on how many times you can look up or poll for new messages via the Twitter API. You can do that 5 times in 15 minutes and check for new messages every 3 minutes with this plan.

     ##### **Limitations**

       * Bot or agent can send 5 messages in 15 minutes
       * Bot or agent can send 50 messages in 24 hours

   2. **Mentions**: Similar to direct messages, there is no limit on the number of mentioned tweets received at Yellow. There is a limit to how many times you can use the lookup API to fetch new tweets. And there is a limit of 10 request in 15 minutes for this plan, which means you can check for new mentions every 1.5 seconds, approximately.

      ##### **Limitations**
      
        * A bot or agent can reply or comment 100 messages in the mentioned tweets in 24 hours.

3. **Pro Developer App**: This plan allows you to access both DM lookups and manage DM APIs with the following messaging limits:

    1. **Direct messages**: There is no limit on the number of direct messages that can be sent from Twitter to Yellow, but there is a limit on how many times you can look up or poll for new messages via the Twitter API. You can do that 100 times in 15 minutes and check for new messages every 10 seconds with this plan.

     ##### **Limitations**

       * Bot or agent can send 200 messages in 15 minutes
       * Bot or agent can send 1000 messages in 24 hours

   2. **Mentions**: Similar to direct messages, there is no limit on the number of mention tweets received at Yellow. There will be a limit on how many times you can use the lookup API to fetch new tweets. There is a limit of 300 requests in 15 minutes for this plan, which means we can check for new mentions every 3 to 4 seconds.

       ##### **Limitations**
      
          * A bot or agent can reply or comment 100 messages in the mentioned tweets in 15 mins.
          * A bot or agent can reply or comment 10000 messages in the mentioned tweets in 24 hours.

## Create a Twitter account

To create a Twitter account, follow these steps:

1. Navigate to the [Twitter website](https://twitter.com/i/flow/signup) and click **Create account**.

2. Enter the required information, such as your name, email, date of birth, and click **Next**.

   <img src="https://i.imgur.com/awiGWBi.png" alt="drawing" width="50%"/>
 
3. In the **Customize your experience** pop-up box, check the highlighted box to allow tracking your browsing history or uncheck the box to disable it. Click on **Next**.

   <img src="https://i.imgur.com/lKczbUt.png" alt="drawing" width="50%"/>
   
4. Verify your information and click **Sign up**.
 
   <img src="https://i.imgur.com/dwczCO8.png" alt="drawing" width="50%"/>
  
5. Enter the verification code that is sent to your email address and click **Next**. 
:::note
If you have used your phone number, you will receive the code through SMS.
:::

   <img src="https://i.imgur.com/Rb65bA4.png" alt="drawing" width="50%"/>
 
6. Enter a password and click **Next**.

   <img src="https://i.imgur.com/Ad3L3zj.png" alt="drawing" width="50%"/>

7. You need to **Upload a profile picture** (optional) or click **Skip for now**.

    <img src="https://i.imgur.com/OJVPh91.png" alt="drawing" width="50%"/>
	
8. Enter a username and click **Next**. You can also select the username, which is automatically generated by Twitter based on your information. 
 
   <img src="https://i.imgur.com/Dd9SUHU.png" alt="drawing" width="50%"/>
   
9. Click **Allow notifications** to receive notifications for your recent activities.

    <img src="https://i.imgur.com/m4Wu0Zj.png" alt="drawing" width="50%"/>
	
10. Your Twitter account will be successfully created.

    ![](https://i.imgur.com/qiJfoxJ.png)

## Setup Twitter channel using developer portal

To get the access token, access token secret, consumer key, and consumer secret, you need to connect to the developer portal. Use this [link](https://developer.twitter.com/en/apps).

#### Prerequisites

* Ensure that your phone number is verified.
* Ensure that your Twitter developer account is reviewed by the Twitter support team.

To setup a Twitter channel using the developer portal, follow these steps:

1.  Login to the [developer portal](https://developer.twitter.com/en/apps) and click **+Create Project**.

     ![](https://i.imgur.com/xy7Dp5K.png)

2. Enter your project name and click **Next**.

    ![](https://i.imgur.com/krAbxXA.png)


3. Select a required use case and click **Next**.

    ![](https://i.imgur.com/lzUUWWR.png)
	
4. Enter a description of your project and click **Next**.

    ![](https://i.imgur.com/NKyznKD.png)

5. Select your preferred app environment and click **Next**.

   ![](https://i.imgur.com/I2sO4Vo.png)
   
6. Enter your app name and click **Next**.

   ![](https://i.imgur.com/OIg2v4j.png)
   
7. You can view **API key** and **API key Secret**. Click **App settings**.

    ![](https://i.imgur.com/5iUCGIs.png)
  
8. Click **Set up** under **User authentication settings**.

9. On the User authentication settings page, configure the following:
   * Under **App permissions**, enable Read and write and Direct message to allow read tweets and profile information, read and post direct messages.
   * Under **Type of App**, enable **Web App, Automated App or Bot**.
   * Under **App info**, enter the callback URL and the website URL.
   * Click **Save**.

   ![](https://i.imgur.com/bNwmAtj.png)

10. After enabling the above permissions, a **Client ID** and **Client Secret** are generated after enabling the above permissions.

    ![](https://i.imgur.com/B5W1Twl.png)

11. Navigate to **Keys and Tokens**, regenerate **Consumer Keys** and **Access Token and Secret** and copy them to connect the Twitter channel to your bot.

    ![](https://i.imgur.com/bzkk13Z.png)

12. To setup environment, under **Products** click **Twitter API V2**. 

     ![](https://i.imgur.com/8wNjpPU.png)
	 
13. Select **Pro** pricing plan to interact with the bot.

:::note
* It is recommended to select either Pro or Enterprise plan to interact with the Yellow's bot.
:::

   ![](https://i.imgur.com/F0SVCp6.png)
   
The following are the limits for pro plan:

Endpoint | Ratelimit
---------|----------
agent/bot messages | 1000 requests / 24 hours per user
agent/bot messages| 200 requests / 15 mins per user

## Connect Twitter to your bot

To connect the Twitter channel to the Yellow.ai platform, follow these steps:

1. On the left navigation bar, click **Extensions**.

    ![](https://imgur.com/PIOvT6K.png)

2. Click **Channels** > **Social** > **Twitter**.

   ![](https://imgur.com/5qJV7xs.png)
   
3. Click **Connect**, to connect your bot to Twitter.

    <img src="https://imgur.com/TtQcoTz.png" alt="drawing" width="80%"/>!

4. Enter the details such as **Access token**, **Access token secret**, **Consumer key**, **Consumer secret**, and **Environment name** that you have copied from Twitter's developer portal and click **Connect**.

   <img src="https://imgur.com/zW7Y88u.png" alt="drawing" width="90%"/>
 
* This will connect your bot to the Twitter account. After the connection, you can test your bot.

## Test your bot on Twitter  

After connecting your bot to Twitter, you can test your bot.

1. Go to your **Twitter account** > **More** option.

   ![image](https://imgur.com/LEsHRou.png)

2. Click **Settings and privacy** > **Privacy and Safety** > **Direct messages**. 
 
    ![image](https://imgur.com/jkUkaMb.png)
    
3. Enable messages for everyone so that any user can send the message to your Twitter account.

   ![image](https://imgur.com/cMXxuPA.png)
    
4. Test the bot by logging into your account to ensure it functions as expected. This involves initiating a conversation with the bot using the test account and verifying that it responds appropriately to user queries.

5. Go to your account and click on **Messages** > **Write a message**.

  ![image](https://imgur.com/Oh49Z99.png)

6. In the **Search** bar, enter the name of your bot to initiate a conversation, and click **Next**.

   ![image](https://imgur.com/gZLp2kK.png)

7. Select your bot to start the conversation.

   ![image](https://imgur.com/OFOCyib.png)

      
