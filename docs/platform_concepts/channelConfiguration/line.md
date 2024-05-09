---
title : Line
sidebar_label : Line
---

Line is an instant messaging channel that allows users to communicate through texts, images, videos, audio, and files. It also enables users to connect via audio calls and video conferences.

Businesses can use the Line to provide product information, promote their brands, respond to customer queries, receive feedback and updates about the company in real-time, and also improve the customer experience by offering personalized services.

Let's say that a user wants immediate assistance regarding product information. In such cases, users can converse with the bot that is connected to your business's Line channel. The bot responds to the user's queries without having to wait for the agents to respond. 

## Character limitations of Line channel

In this section, you can view the character limitations of Line channel.

##### **Quick reply**

| Quick reply options | Character limit |
|---------------------|-----------------|
| Quick reply button name and value | The maximum number of characters supported is 20.  |
| Quick reply title | The maximum number of characters supported is 300.  | 

##### **Carousel**

| Carousel options | Character limit |
|---------------------|-----------------|
| Title length | The maximum number of characters supported is 40 | 
| Title value length | The maximum number of characters supported is 60 |
| Column | The maximum number of characters supported is 10 | 
| Button text | The maximum number of characters supported is 20 |
| Button value | The maximum number of characters supported is 40 |

##### **Message types** 

| Message type | Character limit |
|--------------|-----------------|
| Text message | The maximum number of characters supported is 5000  | 
| Image	| Image URL length - 2000, file size - 10 MB |
| Video	| Video URL length - 2000, file size - 200 MB |
| Audio | Audio URL length - 2000, file size - 200 MB | 

## Create a business account on Line 

You can create a Line business account using the [Line official account](https://www.linebiz.com/jp-en/other/) app or website. Before creating an account, you need to choose the account type and subscription plan:

* Account types: Verified, Unverified, and Premium ID accounts.
* Account subscription plans: Free, Basic (or Light), and Pro (or Standard).

To create a Line business account, follow these steps:

1. Go to [Line official account](https://www.linebiz.com/jp-en/other/), click **Create a LINE Official Account for free**.

   ![](https://i.imgur.com/keybqH3.jpg)
   
2. If you already have a Line account, click **Log in with a LINE account**, otherwise click **Sign up with an email** and enter the email address you used to set up your account. 

    <img src="https://i.imgur.com/4qH82tx.png" alt="drawing" width="40%"/>

3. After signing up for your account, click **Continue**.

    <img src="https://i.imgur.com/M6kOyQu.png" alt="drawing" width="40%"/>

4. Enter the required information in the respective fields and click **Continue**.

    <img src="https://i.imgur.com/woSZAU4.png" alt="drawing" width="80%"/>
   
5. Verify your account info and click **Submit**.   

   <img src="https://i.imgur.com/xWoyO9a.png" alt="drawing" width="80%"/>

6. Your Line account will be created successfully. 

## Setup Line channel using developer portal

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
   
* After creating a provider, you need to add a channel to it. 

4. To add a channel to a Provider that you have created, in the **Channels** tab, click **Create a Messaging API Channel**. 

   ![](https://i.imgur.com/6t4XBTq.png)

5. Enter the required details and click **Create**.

   ![](https://i.imgur.com/PSsaHF0.png)   

* Your channel will be successfully set up with the channel access token.

6. To copy the channel access token, go to **Messaging API** and copy the channel access token to connect your bot with Line.

   ![](https://imgur.com/2LaYsJa.png)   


## Connect Line channel to your bot

To configure the Line channel on the Yellow.ai platform, follow the below steps:

1. On the left navigation bar, click **Extensions**.

   ![](https://imgur.com/PIOvT6K.png)

2. Click **Channels** > **Messaging** > **Line**.

   ![](https://imgur.com/Sx7dnqu.png)
   
3. Enter **Line channel token** and click **Save**.  
   
   ![](https://imgur.com/D0L4iiV.png)

* Your Line channel will be successfully connected. 

4. Copy the webhook URL to setup a webhook on Line.

## Setup webhook on Line channel 

After connecting your bot to the Line channel, you need to setup a webhook on Line. Webhooks allow bots to connect to a channel’s API and receive events in real time. This allows your bot to quickly respond to user requests.

To setup a webhook on Line channel, follow these steps:

1. Navigate to [LINE Developers](https://developers.line.biz/console/) and select the **Provider**.

   ![](https://imgur.com/q28C6Sd.png) 

2. Go to **Messaging APIs**, enter the Webhook URL that you have copied from the Yellow.ai platform and click **Update**.

   ![](https://imgur.com/cdUxRyU.png)
 
* You can now test your bot after configuring a webhook.

## Test your bot on Line

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
 
   <img src="https://imgur.com/FXXkLCL.png" alt="drawing" width="40%"/>
   
* Once you have tested your bot, the configuration of the Line channel for your business is complete.

## Configure Line rich menu

You can add a rich menu element within the Line app, allowing users to  access the menu with a single tap at any moment during their conversation. This option improves navigation and interaction, resulting in a more seamless experience. For more information, click [here](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/).

To configure navigation options on Line app, follow these steps:

1. On the Line developer portal and select your provider > **Messaging API** > under **LINE official account** features  > click any of the  **Edit** options, coressponding to the features.

   ![](https://imgur.com/wSGm6um.png)

* This will navigate you to the new tab.   

2. Go to **Home** > expand chat screen and select **Rich menus** > click **Create a rich menu**.

    ![](https://imgur.com/UrO2U1L.png)

2. Define the following details and click **Save**. 

Option | Description
------ | -----------
**Title** | Enter the name of the menu. Note that, titles are only for management purposes. Users cannot see them.
**Display period** | Choose the display period untill when the rich menu should display on your Line app.
**Template** | Select either **Large** or **Compact** template. Based on the selected template you can preview it.
**Image** | You can either choose the downloaded image from your local folder or you can customize it based on your requirements. You can adjust the image by seeing it in the Preview section.<br/><img src="https://imgur.com/whp0NaU.png" width="80%"/>
**Action type** | Select the appropriate action type either **Link** or **Text**. <br/>* **Link**: If you want to redirect the user to particular website use **Link** action type. <br/>* **Text**: If you want to trigger the particular flow select **Text** and enter the trained utterance. For example, Hi or Hello.<br/> <img src="https://imgur.com/O25QYup.png" width="80%"/>
**Menu bar label** | Choose **Menu** or **Custom label** and enter the desired text. Under Custom label, you can enter the text that has to be displayed in the Menu bar.
**Default behavior** | You can select either **Shown** to display the selected image  or **collasped** to hide the image.

<img src="https://imgur.com/6mYRdYB.png" width="90%"/>

3. Once the setting is done, go to **Line** app, to view the configured navigation options. 

   <img src="https://imgur.com/0VNWOIP.png" width="40%"/>