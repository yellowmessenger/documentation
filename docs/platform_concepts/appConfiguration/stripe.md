---
title : Stripe Payment
sidebar_label : Stripe Payment
---


# Scope of Integration

Yellow.ai Integration with Stripe Payment Gateway  allows you to generate payment links and view payment status with yellow.ai platform. 


# Use-cases 

Following are the use-cases which are currently accommodated in the Integration:


### 1. Simple integration 
Yellow.ai connect with stripe payment gateway using the stripe api-key or credentials.While integrating,the user has to provide some client credentials.


### 2. Do actions with stripe action nodes

Using the action nodes you can generate payment links according to your use cases.


![alt_text](https://i.imgur.com/IsFwMEI.png"image_tooltip")


![alt_text](https://i.imgur.com/IsFwMEI.png "image_tooltip")

# Configuration

Configuring the integration with stripe payment gateway is straightforward. Follow the steps defined below to start integrating:

### 1. Create an application
Before going to oauth you have to create an account in stripe,Go to stripe dashboard->Developer-> API Keys-> copy the Secret key. And paste the secret key in the secret field of the stripe integration card. 

![alt_text](https://i.imgur.com/spWjBsK.png "image_tooltip")


### 2. Configure webhook url in stripe dashboard.
Copy the webhook url from stripe integration card and Go to stripe Dashboard->Developers-> Webhooks->Add endpoint->Fill the webhook url in Endpoint field and select **checkout.session.completed** Event in the select events to listen field. 
 

![alt_text](https://i.imgur.com/wZkHuwH.png "image_tooltip")


### 3. Receiving event in yellow.ai Bot.
Following are the events which are currently accommodated in the Integration:

Go to yellow.ai dashboard->studio->Event hub->Custom->Activate stripe-payment-gateway.

Event | Description
----- | -----------
Stripe Payment Status | In case of payments/refunds the status can be checked with these details.
 

![alt_text](https://i.imgur.com/X8d0WQR.png "image_tooltip")
 

# Reference

For more information about action nodes you use here, refer this [doc](https://stripe.com/docs/payments/payment-links)
