---
title : Payu Bussiness
sidebar_label : payu Bussiness
---


# Scope of Integration

Yellow.ai Integration with PayU-Biz Payment Gateway allows you to generate payment links and view payment status with the yellow.ai platform. 


# Use-cases 

Following are the use-cases which are currently accommodated in the Integration:


### 1. Simple integration with Oauth
Yellow.ai uses the PayUBiz  api key or credentials for connecting payu payment gateway.While integrating,the user has to provide some client credentials. 


### 2. Do actions with stripe action nodes
Using the action nodes, you can generate payment links according to your use cases.

![alt_text](https://i.imgur.com/YXyJfTv.png)

![alt_text](https://i.imgur.com/3No6pkK.png "image_tooltip")


# Configuration

Configuring the integration with PayU-Biz payment gateway is straightforward. Follow the steps defined below to start integrating:


### 1. Create an application
  Before going to oauth you have to create an account in PayU-Biz dashboard,Login to the merchant Panel -> My Account -> Click on System Settings -> Take 8-character Salt from here for integration and Login Alias for client Id 


![alt_text](https://i.imgur.com/IkkZjsI.png "image_tooltip")


### 2. Configure webhook url
 Copy the webhook url from stripe integration card and Mail the link to payu Team.PayU will whitelist the webhook URL provided by the merchant in its systems. For more information, contact the PayU Integration Team by email: [integration@payu.in](mailto:integration@payu.in). [webhook docs](https://devguide.payu.in/merchant-integration/webhooks/). 

### 3. Receiving event in yellow.ai Bot. 
  Go to yellow.ai dashboard->studio->Event hub->Custom->Activate stripe-payment-gateway.

![alt_text](https://i.imgur.com/pTpao57.png "image_tooltip")

# Reference

 
For more information about action nodes you use here, refer this [Create Invoice](https://devguide.payu.in/api/integration-apis/invoice/create_invoice/), [webhooks](https://devguide.payu.in/merchant-integration/webhooks/).
