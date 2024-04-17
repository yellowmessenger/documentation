---
title : Stripe Payment
sidebar_label : Stripe Payment
---



Yellow.ai Integration with Stripe Payment Gateway  allows you to generate payment links and view payment status with yellow.ai platform. 

# Configuration

Configuring the integration with stripe payment gateway is straightforward. Follow the steps defined below to start integrating:

### 1. Create your Stripe application


1. Go to the Stripe dashboard > Developer > API Keys > Copy the Secret key. 
2. Paste the secret key in the secret field of the stripe integration card. 

   <img src="https://i.imgur.com/T5ZL3l4.png" width="70%"/> 

### 2. Configure webhook URL in Stripe dashboard.
Copy the webhook URL from stripe integration card:
1. Go to the Stripe **Dashboard** > **Developers** > **Webhooks** > **Add endpoint**.
2. Enter the webhook URL in **Endpoint** field 
3. Select **checkout.session.completed** event in the select events to listen field. 
 

   <img src="https://i.imgur.com/xZ5YYSO.png" width="80%"/>


### 3. Receiving event in yellow.ai Bot.
Following are the events which are currently accommodated in the Integration:

Go to yellow.ai dashboard->studio->Event hub->Custom->Activate stripe-payment-gateway.

Event | Description
----- | -----------
Stripe Payment Status | In case of payments/refunds the status can be checked with these details.
 

![alt_text](https://i.imgur.com/X8d0WQR.png "image_tooltip")

## Generating payment link through bot conversation 

Once the Stripe account is connected, you can generate the paument link directly in bot conversations.

To configure flow to generate payment link:
1. Go to Development/Staging environment and navigate to Studio > Build > Select the flow where you want to add the Generate payment link node.

2. Click Add node > Integrations > Stripe payment gateway.

   <img src="https://i.imgur.com/eosqe5a.png" width="80%"/>

 
 Option | Datatype | Description
 ------ | -------- | -----------
 Amount* | number |  Choose a variable that contains the amount to be used in the payment link.
 Currency* | String | Choose a variable that contains the currency to be used in the payment link
 Description* | String | Choose a variable that contains the description to be included in the payment link.
 Custom metadata* | Object | Choose a variable that contains the custom metadata to be included in the payment link.
 Product image*  | string | Choose a variable that contains the URL of the product image to be included in the payment link.
 Product name*  | String | Choose a variable that contains the name of the product to be included in the payment link.
 After Completion type | String | The action to be taken after the payment is completed. You can choose to redirect the user to a specific URL or display a custom message.
 URL or Custom Message | String | For Redirect URL: Enter the URL to which the user should be redirected. <br/> For Show Custom Message: Enter the custom message that you want to display to the user.
 Parse API response | - | Choose the function that you want to use to parse and handle the response received from the API after completing the payment. Parsing the API response allows the bot to extract relevant information and take appropriate actions based on the response.












# Reference

For more information about action nodes you use here, refer this [doc](https://stripe.com/docs/payments/payment-links)
