---
title: Gupshup Integration
sidebar_label: Gupshup Integration
---


Integrating Gupshup with the Yellow.ai platform allows businesses to connect their WhatsApp channel through Gupshup and enable two-way communication between the bot and WhatsApp users. This integration ensures that the Yellow.ai bot can send and receive messages to and from WhatsApp users using Gupshup’s webhook.

You can use Gupshup integration when:

* You are using Gupshup as your BSP (Business Solution Provider) for WhatsApp.
* You want to connect your Yellow.ai bot to handle WhatsApp conversations.
* You need your Yellow.ai bot to handle and automate WhatsApp conversations.

**Prerequisites**

Before you proceed, ensure the following:

* You have an active Gupshup account with a configured WhatsApp bot.
* You have access to the Gupshup Webhook URL.
* Your Yellow.ai bot is ready and published.
* You have access to your Yellow.ai API Token and Bot ID.

## Setup Gupshup integration

### Get the Gupshup Webhook URL

You will need a webhook from Gupshup to enable Yellow.ai to send data to Gupshup.

To get the Gupshup Webhook URL:

Refer to the below Gupshup official documentation:

* [Gupshup Webhook Overview](https://docs.gupshup.io/docs/webhooks-2)
* [Set Webhook Callback URL](https://docs.gupshup.io/docs/set-webhookcallback-url)
* [What is a Webhook?](https://docs.gupshup.io/docs/what-is-a-webhook)

### Steps to Integrate Gupshup with Yellow.ai

Before you proceed with the integration, consider the following points:
* Ensure that you have configured a valid webhook URL from Gupshup that accepts and sends requests correctly.
* Integrate Yellow.ai's API in the Gupshup bot’s webhook settings.
* Use valid API tokens and authentication details to secure the communication.
* Always test the connection with dummy data before going live.


#### Step 1: Open Generic Webhook in Yellow.ai

1. Login to the Yellow.ai platform.

2. Go to **Extensions** > **Channels** > search for **Generic Webhook**.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/generic-webhook.png)

2. Click on Generic Webhook, a popup will appear for webhook configurations.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/genericURL.png)

#### Step 2: Connect Gupshup webhook

1. In the popup, paste the **Gupshup Webhook URL** and **Access token** you obtained from the Gupshup developer portal.

    * This will allow Yellow.ai to send bot-generated messages to Gupshup, which will forward them to WhatsApp.

#### Step 3: Configure Gupshup to Call Yellow.ai API

  Once Yellow.ai is able to send messages to Gupshup, you need to configure Gupshup to forward WhatsApp user messages to Yellow.ai.

  Use the following API format in Gupshup:

```c
curl --location 'https://cloud.yellow.ai/integrations/sendMessage/{{BOTID}} \
--header 'Authorization: {{Token}} \
--header 'Content-Type: application/json' \
--data '{
    "sender": "{{phoneNumber}}",
    "type": "text",
    "text": "Hello"
}'
```    

Parameter | Description
-------- | ------------
`{{BOTID}}` | Your Yellow.ai Bot ID.
`{{Token}}` | Your Yellow.ai API Token.
`{{phoneNumber}}` | The user's WhatsApp number.

* Once the setup is done:
    * Gupshup will start sending incoming WhatsApp messages to Yellow.ai
    * The Yellow.ai bot will handle user queries and automatically respond to WhatsApp users via Gupshup.



