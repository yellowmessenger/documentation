---
title : Airpay integration
sidebar_label : Airpay
---

Yellow.ai's integration with Airpay lets your users make payments through the bot. This integration enables your bot to generate payment links in the bot and share it with the bot users using which they can make payments.

## Prerequisites

Before you begin the integration process, make sure to retrieve the following details from your Airpay account:

1. Merchant ID
2. Access token
3. Airpay base URL

## Connect Airpay with Yellow.ai

In a two-tier environment, you can connect an integration app in the Development environment. In a three-tier environment, you can connect the integration app either in Staging or Sandbox. All connected integrations are available in the live environment.



To connect your Airpay account with Yellow.ai, follow these steps:

1. Navigate to the Development/Staging environment and go to **Extensions** > **Integrations** > **Payment** > **Airpay**.

   ![](https://i.imgur.com/rjslSEg.png)

2. In **Give account name**, enter a unique name for the integration. You can use only lowercase alphanumeric characters and underscores (_).

   ![](https://i.imgur.com/rAKmXqE.png)

3. Enter the **Merchant ID**, **Access token** and **Airpay base URL**.
4. Click **Connect**. 
5. To connect another account, click **+ Add Account** and proceed with the previous steps. You can add a maximum of 15 accounts.


## Generate Airpay payment link in your bot conversation

To generate a payment link in the bot using Airpay, follow these steps:

1. In Studio **Build**, open the flow where you want to add the payment link.
2. Navigate to the desired point in your conversation flow where you want to integrate with Airpay for payment links. Follow these steps:

1. Click on the Integration option in the flow editor.
2. Drag the node connector to the desired location.
3. From the Integrations menu, select Airpay.
2. Navigate to the point where you want to add the flow and click Integration > 
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