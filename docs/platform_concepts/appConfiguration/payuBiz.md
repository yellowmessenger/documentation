---
title : PayU Business
sidebar_label : PayU Business
---


## Scope of Integration

Yellow.ai Integration with PayU Biz Payment Gateway allows you to generate payment links and view payment status with the yellow.ai platform. 


## Use-cases 

Following are the use-cases which are currently accommodated in the Integration:

### 1. Simple integration
Yellow.ai uses the PayU Biz  api key or credentials for connecting PayU payment gateway.While integrating,the user has to provide some client credentials. 


### 2. Do actions with stripe action nodes
Using the action nodes, you can generate payment links according to your use cases.

<img src="https://i.imgur.com/YXyJfTv.png" alt="drawing" width="60%"/>


![alt_text](https://i.imgur.com/3No6pkK.png "image_tooltip")

### 3. Events
Following are the events which are currently accommodated in the Integration:

Event | Description
----- | -----------
Payu Biz Payment Status | In case of payments/refunds the status can be checked with these details.

# Configuration

Configuring the integration with PayU Biz payment gateway is straightforward. Follow the steps defined below to start integrating:


### 1. Create an application
  Before going to connect the integration you have to create an account in PayU-Biz dashboard,Login to the merchant Panel -> My Account -> Click on System Settings -> Take Salt from here for integration and Login Alias for client Id

<img src="https://i.imgur.com/IkkZjsI.png" alt="drawing" width="60%"/>

### 2. Configure webhook url
 Copy the webhook url from PayU integration card and Mail the link to payu Team. PayU will whitelist the webhook URL provided by the merchant in its systems. For more information, contact the PayU Integration Team by email: [integration@payu.in](mailto:integration@payu.in). [webhook docs](https://devguide.payu.in/merchant-integration/webhooks/). 

### 3. Receiving event in yellow.ai Bot. 
  Go to yellow.ai dashboard->studio->Event hub->Custom->Activate PayU Biz Payment Status.

![alt_text](https://i.imgur.com/pTpao57.png "image_tooltip")

# Reference

 
For more information about action nodes you use here, refer this [Create Invoice](https://devguide.payu.in/api/integration-apis/invoice/create_invoice/), [webhooks](https://devguide.payu.in/merchant-integration/webhooks/).
