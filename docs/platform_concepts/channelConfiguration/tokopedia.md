---
title: Tokopedia
sidebar_label: Tokopedia
---

Tokopedia is an e-commerce company in Indonesia that allows businesses to buy and sell various products and services online. Tokopedia allows sellers to create online stores and list their products, while customers can browse and purchase items.

Connecting Tokopedia to Yellow.ai enables the following features:
* **Live agent support**: If the bot is unable to address a user's query or request, it initiates the creation of a support ticket in the Inbox. This enables live agents to step in and provide further assistance.
* **Supported message types**: You can use various message types that can be sent by the users to the bot and live agent, including text and image.

## Setting up Tokopedia chatbot

To set up Tokopedia bot, you need to perform the following:

* [Setup a bot](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/account-setup#create-your-first-bot) on Yellow.ai platform based on your use case.
* [Create Developer console](#Connect)


### Create Developer console

Sign up for a [Tokopedia account](https://seller.tokopedia.com/landing) and login to the [developer console](https://developer.tokopedia.com/) to [create your shop](https://developer.tokopedia.com/openapi/guide/guides/developer-console/).

### Create a developer app

You can create two types of apps:

1. Test app 
2. Live app

#### Add testing app

Before connecting the bot to the official live store, ensure that it is tested with a trial or test store. This approach guarantees the intended functionality of the bot.

For setting up the testing app, click [here](https://developer.tokopedia.com/openapi/guide/guides/testing-account/#add-testing-account).

#### Add Live app

After successfully testing the app, you can [connect store to our Yellow live app](https://developer.tokopedia.com/openapi/guide/guides/developer-console/shop-management) or [create a new live app](https://developer.tokopedia.com/openapi/guide/guides/developer-console/#create-application).

Once your developer app is created, navigate to **Authentication Management** and copy the **Client ID**, **App ID**, and **Client Secret**. You need to use these details to connect your shop with the Yellow.ai platform.

 ![](https://i.imgur.com/gJYMD3p.png)

### Configure Webhook on Tokopedia Developer console

After connecting to your developer apps on the Tokopedia Developer console, you need to [set up a Webhook](https://developer.tokopedia.com/openapi/guide/guides/developer-console/webhook-settings). Enter the Webhook URL shared by the [Integrations](mailto:support@yellow.ai) team to test your bot on Tokopedia.

To configure Webhook on Tokopedia Developer console:

1. Click **Webhook settings** > **Webhook Push**. Under *Chat module*, enable **chat_notification** and enter the Webhook URL shared by the [Integrations](mailto:support@yellow.ai) team.

    ![](https://i.imgur.com/HLdlQz9.png)


### Whitelist IP address

Yellow.ai’s IP address should be whitelisted in the Tokopedia developer console. 

To whitelist IP address:

1. Click **IP Whitelist & Public key** > **IP Whitelist**. Enter Yellow.ai's IP address and click **Submit**. 

   ![](https://i.imgur.com/IEJlG6L.png)

## Connect your store to Yellow.ai platform

To establish a connection between your store and the Yellow.ai platform, contact [Integrations](mailto:support@yellow.ai) team. To initiate the connection process, provide essential details such as the Client ID, Client Secret, and App ID.

Once your store is connected to Yellow.ai platform, you can test the bot to start the conversation.
	
## Test your bot on Tokopedia

After connecting your bot to Tokopedia, you can test your bot. 

1. Open the Tokopedia app and search for your bot.

2. Click **Chat** option to start the conversation with your bot.

    ![](https://i.imgur.com/rE67SFo.png)



















