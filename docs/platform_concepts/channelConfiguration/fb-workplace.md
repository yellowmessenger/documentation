---
title : Facebook Workplace
sidebar_label : Facebook Workplace
---

Facebook Workplace is an online collaborative tool that helps businesses and organizations to communicate and collaborate with internal team members. Using this tool, you can create various channels that help you to manage work-related activities such as group discussions, project management; file, image, or video sharing, and updates related to specific projects. You can have both public and private channels.

On Facebook Workplace, bots are represented as pages. A page is automatically created for a custom integration app. Only system administrators of a workplace community can create apps and generate access tokens in that community.

In this article, you will learn:

* [How to Setup Facebook workplace using developer portal](#setup-facebook-workplace-channel-using-developer-portal)
* [How to connect Facebook workplace to your bot](#connect-facebook-workplace-to-your-bot)
* [How to configure Webhook for custom integration](#configure-webhook-for-custom-integration)
* [How to test your bot on Facebook workplace](#test-your-bot-on-facebook-workplace)

## Setup Facebook workplace channel using developer portal

You need to register for a new system admin account in the [Facebook Workplace](https://yellowtest150.workplace.com/) Developers Portal (`https://<Domain name>.workplace.com/work/admin`) to create a Facebook Workplace channel. 

To setup Facebook workplace channel to your bot, configure the following:

* [Create Custom Integration](#step-1-create-a-custom-integration)
* [Get App ID, App Secret, and Access token](#step-2-get-app-id-app-secret-and-access-token)
* [Provide Permissions to interact with your bot](#step-3-provide-permissions-to-interact-with-your-bot)

### Step 1: Create a Custom Integration

To create a Custom Integration, follow these steps:

1. Log in to your Facebook Workplace admin account and click **Integrations**.

     ![](https://i.imgur.com/9PZIuk2.png)

2. On the *Home* page, click **Admin Panel**.

     ![](https://i.imgur.com/lRfafEf.png)
   

3. Click **Create Custom Integration** to provide authorization to create a channel between Facebook Workplace and Yellow bot.

    ![](https://i.imgur.com/KYTghT9.png)
   
4. Under *Create Custom Integration*, enter the following details:
    i. Enter the **Name** of your integration.
	ii. Enter a short **Description** of your integration.
	iii. Click **Create**.
   
   <img src="https://i.imgur.com/RZTjClZ.png)" alt="drawing" width="60%"/>
   
   * You will see the integration details. You can update the integration details if required.

     ![](https://i.imgur.com/kFgr8O6.png)
	 
### Step 2: Get App ID, App Secret, and Access token

To get the App ID, App Secret, and Access token from Facebook Workplace developer portal, follow these steps:

1. On the Integration details page, click on the below highlighted icon and copy the **App ID** and **App Secret**.

     <img src="https://i.imgur.com/OOWRWQg.png)" alt="drawing" width="70%"/>

2. Click **Create access token**.
   
   <img src="https://i.imgur.com/loumjRK.png)" alt="drawing" width="60%"/>

3. Select the **I Understand** box to agree to access token guidelines and click **Copy** to copy the access token, then click **Done**.
   
    <img src="https://i.imgur.com/xk61nnM.png)" alt="drawing" width="60%"/>
	
:::note
*  Access tokens cannot be retrieved but new token can be generated.
::: 

### Step 3: Provide permissions to interact with your bot

You need to select your preferred permissions for your users to interact with the bot in the workplace.

To grant permissions, follow these steps:

1. On the Integration details page, click **Permissions**.
    
   ![](https://i.imgur.com/gonyJfv.png)
	
2. Select the following permissions:
     * **Message any member** - Send a message to any member in the workplace.
     * **Read user email** - See any group member's email address.
     * **Read work profile** - See any group member's complete profile, including phone number, department, and location.
     * Click **Save**.

     ![](https://i.imgur.com/gQpDGVn.png)
	 

## Connect Facebook workplace to your bot

#### Prerequisite

* Copy the App ID, App Secret, and Access token from the developer portal to connect the Facebook workplace channel to your bot on the platform.

To connect Facebook workplace channel to your bot on the platform, follow these steps:

1. Log on to https://cloud.yellow.ai and navigate to **Overview > Channels > Messaging > Facebook workplace**.

   ![](https://i.imgur.com/iR12Lsl.png)

2. Enter the **App ID**, **App secret**, **Access token** that you have copied from the workplace developer portal admin account and click **Save**.

   ![](https://i.imgur.com/8sOvFuS.png)
   
   * Your Facebook workplace channel will be successfully connected.

3. Navigate to the **Overview** page, under the **Active channels** section, to verify that the Facebook workplace channel is successfully connected to your bot.

    ![](https://i.imgur.com/P9rCPwE.png)
	
## Configure Webhook for custom integration

After connecting your bot to the Facebook workplace channel, you need to subscribe to events under **Page** section of the *Configure Webhooks*.

To setup a Webhook on the workplace, follow these steps:

1. On the Integration details page, click **Webhooks**.

    ![](https://i.imgur.com/2YYIUru.png)

2. Click **Edit** icon corresponding to the Page.

    ![](https://i.imgur.com/k3Xkui6.png)

3. By default, a callback URL is displayed after successfully connecting your bot to the Facebook workplace channel. Select **messages** and **messaging_postbacks** and click **Save**. 
   
   ![](https://i.imgur.com/CJ8Kl76.png)
     
   
## Test your bot on Facebook workplace

After connecting your bot to the Facebook workplace, you can test your bot. 
     
#### Prerequisites

* Ensure that you have created the bot with intents and configured the flows with the same intent. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/create-a-bot). 

To test your bot on Facebook workplace, follow these steps:

1. Go to your Facebook workplace developer account.
2. On the Home page, select your bot.

    ![](https://i.imgur.com/WXAHifW.png)
	
3. Start the conversation to test your bot based on the configured flow.

    ![](https://i.imgur.com/uKFbqE1.png)

## Character limitations of Facebook workplace channel   

 In this section, you can view the character limitations of Facebook workplace channel.

 ###  Message types

 Message types options	| Character limit
 ----------------------|------------------
 Text | The maximum number of characters supported is 2000.
 Image | The maximum size of an image is 8 MB.
 Video, audio, and other file types | The maximum size is 25 MB.

### Quick Reply

Quick Reply options | Character limit
--------------------|---------------
Quick reply title |  The maximum number of characters supported is 2000.
Quick Reply buttons | A maximum of 13 quick reply buttons are supported.
Quick Reply button title | The maximum number of characters supported is 20.

### Carousel 

Carousel options | Character limit
--------------------|---------------
Cards | A maximum of 10 cards per message is supported.
Title  |  The maximum number of characters supported is 80.
Subtitle | The maximum number of characters supported is 80.
Buttons | A maximum of 3 buttons per card are supported.