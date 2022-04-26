---
title : Camspay Payment
sidebar_label : Camspay Payment
---


# Scope of Integration

Yellow.ai Integration with Camspay Payment Gateway allows you to generate payment links and view payment status with the yellow.ai platform.


# Use-cases 

Following are the use-cases which are currently accommodated in the Integration:



### 1. Simple integration
Yellow.ai uses the Camspay  api key or credentials for connecting camspay payment gateway.While integrating,the user has to provide some client credentials. 

### 2. Do actions with stripe action nodes
Using the action nodes, you can generate payment links according to your use cases.


![](https://i.imgur.com/wZHyTdt.png)


![](https://i.imgur.com/yhnsDTc.png)


# Configuration

Configuring the integration with Camspay payment gateway is straightforward. Follow the steps defined below to start integrating:

### 1. Create an application
Before going to oauth you have to create an account in Camspay dashboard, Get the merchant id, Subbiller id, API key, Encryption Decryption key from the camspay team.

![](https://i.imgur.com/NHksd6m.png)

### 2. Configure webhook url
Copy the webhook url from the camspay integration card and paste in the redirectUrl field variable in the action node.


### 3. Receiving event in yellow.ai Bot.
Go to yellow.ai dashboard->studio->Event hub->Custom->Activate camspay-payment-gateway.