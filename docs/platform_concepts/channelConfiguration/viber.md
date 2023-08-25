---
title: Viber
sidebar_label : Viber
---

Viber is an instant messaging app that allows you to send text messages, share images, documents, and other files.

Viber integration helps businesses to provide customer support to their clients and partners and promote their products and services to a larger audience.

In this article, you will learn:

* [How to create a Viber account](#create-a-viber-account)
* [How to create a Bot Account in Viber](#create-a-bot-account-in-viber)
* [How to connect Viber to your bot](#connect-viber-to-your-bot)
* [How to test your bot on Viber](#test-your-bot-on-viber)

## Create a Viber account

You can create a [Viber](https://account.viber.com/) account using the app or website.

To create a Viber account, follow these steps:

1. Navigate to the [Viber](https://account.viber.com/) website, enter your valid phone number, and click **Continue**.

   ![](https://i.imgur.com/ja8RAj6.png)

2. Enter the code, which is sent to your phone via Viber message.
	 
	 <img src="https://i.imgur.com/0l1GZLO.png" alt="drawing" width="40%"/> 
	 
3. Enter your email, password, and retype your password. Click **Done**.

     <img src="https://i.imgur.com/INu0Jj4.png" alt="drawing" width="40%"/>

  * Your Viber account will be created.

   ![](https://i.imgur.com/8MGbUyn.png)

## Create a Bot account in Viber 

To create a Viber chatbot on the [Viber Admin Panel](https://partners.viber.com/account/), use the phone number associated with your Viber account to log in. Once you have created a bot account, you will receive a Token which is used to connect your bot with a Viber channel.

To create a Viber chatbot, follow these steps:

1. Go to the [Viber Admin Panel](https://partners.viber.com/account/) and enter the same phone number you used to create your Viber account and click **login**.
  
   <img src="https://i.imgur.com/RfBS2Op.png" alt="drawing" width="50%"/>

2. Enter the verification code sent to your phone via Viber message, and click **Next**. 

    <img src="https://i.imgur.com/ujdAvGp.png" alt="drawing" width="50%"/>
  
3. Click **Create Bot Account**.  

   ![](https://i.imgur.com/cvTnM2B.png)

4. Enter the following information:
   * **Account image**: Add the image of your business that will be displayed in your bot account and as an icon in messages.
   * **Account name:** Enter your bot name.
   * **URL**: Based on your account name, an ID will be generated and added to your bot link.
   * **Category**: Select the category for which you are setting up the bot.
   * **Account description**: Enter the description of the bot that will be displayed under your logo. For example, you can specify about your brand.
   * **Website address:** Enter the web address of your business site.
   * **Email address:** Enter your valid email address. 
   * **Location:** Add your business location.
   * After adding all the details, confirm that you agree Viber terms and policy, and click **Create**.

    ![](https://i.imgur.com/cj0R78k.png)

5. A token is generated after creating a bot account. Copy the token.

    <img src="https://i.imgur.com/wDVWaPr.png" alt="drawing" width="70%"/> 
	
6. If you already have an account, you can find your token under the **Info** tab. 	
	
	 ![](https://i.imgur.com/dB8MpuY.png)

## Connect Viber to your bot

To connect Viber to the Yellow.ai platform, follow these steps:

1. Log on to https://cloud.yellow.ai and navigate to **Overview > Channels > Messaging > Viber**.

   ![](https://i.imgur.com/iA9MUZs.png)


2. Enter the **Token** that you have copied from the Viber admin panel and click **Save**.

   <img src="https://i.imgur.com/7sNOEKz.png" alt="drawing" width="90%"/>

3. Navigate to the **Overview** page, under **Active channels** section, you can see that Viber channel is successfully connected to your bot.

    ![](https://i.imgur.com/35JvWSy.png)

## Test your bot on Viber

After connecting your bot to Viber, you can test your bot. To test your bot on Viber, you need to download the Viber app on your mobile device from the Playstore.

To test your bot on Viber, follow these steps:

1. Open the Viber app that you have downloaded to your mobile device and search for your bot.

   * You can either scan the QR code from the [Viber chatbot account](https://partners.viber.com/account/) that you have created.
  
     ![](https://i.imgur.com/290utvn.png)
	 
	 OR	 
   * You can search the bot from your mobile app.

	 <img src="https://i.imgur.com/GlmPafa.png" alt="drawing" width="40%"/>

2. Select your respective bot.

	  <img src="https://i.imgur.com/QaekCI7.png" alt="drawing" width="40%"/>

3. Start the conversation to test your bot.

	 <img src="https://i.imgur.com/YbIFnOv.png" alt="drawing" width="40%"/>

## Viber links

Viber links are URLs that are used to initiate conversations with your business account on the Viber messaging app. Viber links are similar to [deep links](https://developers.viber.com/docs/tools/deep-links/) and are designed to provide a seamless user experience. Clicking these links directs users to specific interactions within the Viber app.

You can get the Viber links manually by appending your chatbot username to the Viber deep link.

To get the Viber links, follow these steps:

1. Open Viber app and navigate to **More** > **Settings**.

    <img src="https://i.imgur.com/HEBiryx.png" alt="drawing" width="60%"/>
    
2. In **URL**, copy your bot's username.

     <img src="https://i.imgur.com/G25TXg0.png" alt="drawing" width="40%"/>   
     
3. Paste the bot username at the end of `viber://pa?chatURI=`. For instance, if your bot's username is 'xyz', the link will be `viber://pa?chatURI=xyz`.

4. Embed this link on your business website for user access and interaction. 