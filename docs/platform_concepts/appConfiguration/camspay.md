---
title : Camspay payment integration
sidebar_label : Camspay Payment
---


Yellow.ai Integration with Camspay Payment Gateway allows you to generate payment links and view payment status with the yellow.ai platform.


## 1. Connecting Camspay Payment with Yellow.ai
Before starting the integration process, from your Camspay dashboard, obtain the merchant ID, sub-biller ID, API key, and encryption-decryption key from the Camspay team.

:::note
In a two-tier environment, you can connect an integration app in the Development environment. In a three-tier environment, you can connect the integration app either in Staging or Sandbox. All connected integrations are available in the live environment.
:::


1. On the [Cloud platform](https://cloud.yellow.ai), navigate to the Development/Staging environment and click **Extensions** > **Integrations** > **Payment** > **Camspay**. You can also search for the Camspay Payment using the Search box.
2. In **Give account name**, enter a unique name for the integration. You can use only lowercase alphanumeric characters and underscores (_).
3. Enter your Camspay Payment account's **Merchant ID**, **Subbiller ID**, **API key**, **Encryption-Decryption key**, and the **API Base URL** captured from the Camspay.

    ![](https://imgur.com/c6AuqI7.png)

4. Click **Connect**.

5. To connect more accounts, click **+ Add account** and follow the above mentioned steps to connect each account. You can add a maximum of 15 merchant accounts.



## 2. Configure webhook URL

The webhook URL serves as a callback endpoint where Camspay can send notifications or updates regarding the payment related events.

To know how to configire Webhook URL in your app, see [here](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/overview#step-3-configure-webhook-url).



## 3. Enable integration events in your bot
This enables you to execute specific actions in response to events. For instance, you can display a message in the bot conversation when a payment is successful or show order details when an order is placed.


Event | Description
----- | -----------
Camspay Payment Status | Returns payment/refund status

For details, see [here](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/overview#step-4-enable-integration-events-in-your-bot).

## 4. Trigger bot flows with integration events

[Know how to trigger flows with events](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/overview#step-5-trigger-bot-flows-with-integration-events)

## 5. Generate Camspay payment links in bot conversation

Once your Camspay account is successfully connected, your bot can perform the following action:



1. Go to Development/Staging environment and navigate to **Automation** > **Build** > Select the flow where you want to add the Generate payment link node.
2. Click **Add node** > **Integrations** > **Camspay**.

   <img src="https://i.imgur.com/wZHyTdt.png" alt="drawing" width="60%"/>

3. Choose the Action, *Generate payment link* and configure the input fields.


  <img src="https://i.imgur.com/yhnsDTc.png" alt="drawing" width="80%"/>

