---
title : Airpay integration
sidebar_label : Airpay
---

Yellow.ai's integration with Airpay lets your users make payments through the bot. This integration helps you generate payment links in the bot and share it with the bot users using which they can make payments.

## Fetch credentials from Airpay

Retrieve the following details from your Airpay account:

1. Merchant ID
2. Access token
3. Airpay base URL

## Connect Airpay with Yellow.ai

To connect your Airpay account with Yellow.ai, follow these steps:

1. Go to cloud.yellow.ai > **Integrations** > **Payment** > **Airpay**.

   ![](https://i.imgur.com/TV0yGcI.png)

2. In **Give account name**, provide a name for the Airpay account and enter the **Merchant ID**, **Access token** and **Airpay base URL** of your Airpay account and click **Connect**. 

:::info
1. In a two-tier environment, add account names in Development and use them in Live.
2. In a three-tier environment, add accounts in Staging and Sandbox, and they'll be available in Production.
:::

3. You can add up to five merchant accounts. To add another **Airpay** account, click on **Add account** and follow the steps mentioned above.

   ![](https://i.imgur.com/PL05BMj.png)

## Generate payment link in your bot

To generate a payment link in the bot using Airpay, follow the steps mentioned below:

1. Go to **Studio** > **Build** and build a flow for your use case.
2. At whichever point of conversation you want the bot to access **Airpay** for payment link, inlcude the Airpay node. For that, drag the node connector, go to **Integrations** > **Airpay**.

   ![](https://i.imgur.com/tFUbjgE.png)

3. In the **Airpay** node fill in the following fields: 

   <img src="https://i.imgur.com/IDVBlq5.png" alt="drawing" width="80%"/>

* **Account name:** Choose the **Airpay** account. If you have only one account, the account name is automatically populated. If you have multiple accounts, the first account added is auto-populated. Select the one you want to use at that moment.
* **Action:** Choose the action to perform, the action available for Airpay is **Generate Payment Link**.

   Once you click the action, the following fields open up. There are two ways by which you can fill these fields:
   
   <img src="https://i.imgur.com/eQMQqOh.png" alt="drawing" width="80%"/>

**Pass dynamic data in variables**

From customers you can collect information and fill these fields. Add [prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) before the integration node and [store the response of each node in a variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#store-data-in-variables). Then, pass those variables in the respective fields here. 

   <img src="https://i.imgur.com/syCg7jZ.png" alt="drawing" width="80%"/>

**Pass static values**

You type the static values in the fields by clicking **Or** or disabling **Var** option. 

   ![](https://i.imgur.com/crMRLVy.gif)

4. Store the JSON response of the Airpay node in a variable.

   <img src="https://i.imgur.com/1RpVqmu.png" alt="drawing" width="60%"/>

5. [Display the API response](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode#display-api-response) in a [message](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) node.

**Sample response:**

``` jsonld
{
  "success": true,
  "invoice_number": "1234745234245",
  "payment_url": "https://abc.invpay.co.in/invoice/OSYzMjc1NQ=="
}
```