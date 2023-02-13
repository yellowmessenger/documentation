---
title : Line
sidebar_label : Line
---

Line is an instant messaging channel that allows users to communicate through texts, images, videos, audio, and files. It also enables users to connect via audio calls and video conferences.

Businesses can use the Line to provide product information, promote their brands, respond to customer queries, receive feedback and updates about the company in real-time, and also improve the customer experience by offering personalized services.

Let's say that a user wants immediate assistance regarding product information. In such cases, users can converse with the bot that is connected to your business's Line channel. The bot responds to the user's queries without having to wait for the agents to respond. 

In this article, you will learn:

* [How to create a Line account?](#1-create-a-business-account-on-line)
* [How to setup Line channel using Developer portal?](#2-setup-line-channel-using-developer-portal)
* [How to connect Line business channel to your bot?](#3-connect-line-channel-to-your-bot)
* [How to setup webhook on Line channel](#4-setup-webhook-on-line-channel)
* [How to test your bot on Line channel](#5-test-your-bot-on-line)

## 1. Create a business account on Line 

You can create a Line business account using the [Line official account](https://www.linebiz.com/jp-en/other/) app or website. Before creating an account, you need to choose the account type and subscription plan:

* Account types: Verified, Unverified, and Premium ID accounts.
* Account subscription plans: Free / Basic (or Light) / Pro (or Standard).

To create a Line business account, follow these steps:

1. Go to [Line official account](https://www.linebiz.com/jp-en/other/), click **Create a LINE Official Account for free**.

   ![](https://i.imgur.com/keybqH3.jpg)
   
2. If you already have a Line account, click **Log in with a LINE account**, otherwise click **Sign up with an email** and enter the email address you used to set up your account. 

    <img src="https://i.imgur.com/4qH82tx.png" alt="drawing" width="40%"/>

4. After signing up for your account, click **Continue**.

    <img src="https://i.imgur.com/M6kOyQu.png" alt="drawing" width="40%"/>

5. Enter the required information in the respective fields and click **Continue**.

    <img src="https://i.imgur.com/woSZAU4.png" alt="drawing" width="80%"/>
   
6. Verify your account info and click **Submit**.   

   ![](https://i.imgur.com/xWoyO9a.png)

7. Your Line account wii be created successfully. 

## 2. Setup Line channel using developer portal

:::note
To know more about how to setup Line channel using developer portal, click [here](https://developers.line.biz/en/docs/messaging-api/getting-started/)
:::

To set up Line channel using Developer portal, follow these steps:

1. Navigate to your **LINE Console** by using the URL 'https://developers.line.biz/console/'. 

   ![](https://i.imgur.com/iGcbCn5.png)
   
2. Click **Create a new provider** to create a provider.

   ![](https://i.imgur.com/sqrhpiI.png)
   
3. Enter the provider's name such as your own name or the name of your company, and click **Create**.   
 
   ![](https://i.imgur.com/3Mzjnoj.png)
   
4. After creating a Provider, you need to add a channel to it. 
5. To add a channel to a Provider that you have created, in the **Channels** tab, click **Create a Messaging API Channel**. 

   ![](https://i.imgur.com/6t4XBTq.png)

6. Enter the required details and click **Create**.

   ![](https://i.imgur.com/PSsaHF0.png)
7. Your channel will be successfully set up with the channel token and secret ID.    

## 3. Connect Line channel to your bot

To configure the Line channel on the Yellow.ai platform, follow the below steps:

1. On the switcher, click **Channels > Line**.

   ![](https://i.imgur.com/CpwhPST.png)
   
2. Enter **Line channel token** and **Line channe secret** Id and click **Save**.  
   
   ![](https://i.imgur.com/ohsCJ1x.png)

3. Your Line channel will be successfully connected. 

## 4. Setup webhook on Line channel 


After connecting your bot to the Line channel, you need to setup a webhook on Line. Webhooks allow bots to connect to a channel’s API and receive events in real time. This allows your bot to quickly respond to user requests.

To setup a webhook on Line channel, follow these steps:

1. Navigate to [LINE Account Manager](https://manager.line.biz/) and select the **Account**.

   ![](https://i.imgur.com/GswXaIJ.png) 

2. In the **Home** tab, click **Settings**.

   ![](https://i.imgur.com/5QpdLa7.png)
  
3. Select **Messaging APIs** under **Settings**. 

   ![](https://i.imgur.com/8x1ONUw.png)
   
4. Under **Messaging APIs**, enter the Webhook URL and click **Save**.

:::note
Contact **support@yellow.ai** for the Webhook URL.
:::

   ![](https://i.imgur.com/kCKdgH2.png) 

 
5. You can test your bot after configuring a webhook.

## 5. Test your bot on Line

To test your bot on Line, you have to download Line from the Playstore or App Store, depending on your mobile device's operating system. After downloading the Line app on your mobile device, you can test your bot. 

To test your bot on Line, follow these steps:

1. Open your Line app and Click **Add**.
   <img src="https://i.imgur.com/SS1y6jO.png" alt="drawing" width="40%"/>
2. You can select either the **QR Code** or the **Search** option to chat with your bot. 
   <img src="https://i.imgur.com/7QbrTFY.png" alt="drawing" width="40%"/> 
3. Navigate to the LINE **Developers Console > Providers > Channel > Messaging APIs**. In this section, you can see the **QR Code** and **Bot basic ID**.
   ![](https://i.imgur.com/tVcOmkb.png)
4. You can scan the LINE **QR Code** or search using LINE's **Bot basic ID** for your business.<br/>
        • If you select the **Search** option, you can copy the **Bot basic ID** and paste it into the search bar, and the account associated with that ID will be displayed on your Line app screen.<br/>
        • If you select the **QR Code** option, the account associated with the QR Code is displayed on your Line app screen.
   
      <img src="https://i.imgur.com/6Wb9U7r.png" alt="drawing" width="70%"/>
5. Click **Add** to start the conversation with your bot.
   <img src="https://i.imgur.com/QsSbRKw.png" alt="drawing" width="40%"/> 
6. Once you have tested your bot, the configuration of the Line channel for your business is completed.