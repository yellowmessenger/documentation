---
title : Camspay Payment
sidebar_label : Camspay Payment
---

## Scope of Integration

Yellow.ai Integration with Camspay Payment Gateway allows you to generate payment links and view payment status with the yellow.ai platform.

## Configuration

Configuring the integration with Camspay payment gateway is straightforward. Follow the steps defined below to start integrating:

### 1. Create an application
Before going to oauth you have to create an account in Camspay dashboard, Get the merchant id, Subbiller id, API key, Encryption Decryption key from the camspay team.

![](https://i.imgur.com/NHksd6m.png)

If you have multiple accounts in Camspay, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 15 merchant accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::

### 2. Configure webhook url
Copy the webhook url from the camspay integration card and paste in the redirectUrl field variable in the action node.

### 3. Receiving event in yellow.ai Bot.
Following are the events which are currently accommodated in the Integration:

Go to yellow.ai dashboard->studio->Event hub->Custom->Activate camspay-payment-gateway.


Event | Description
----- | -----------
Camspay Payment Status | In case of payments/refunds the status can be checked with these details.

:::info
If you have added multiple accounts in your platform, enable events for each of those accounts.
:::

## Use-cases

Yellow.ai uses the Camspay  api key or credentials for connecting camspay payment gateway. While integrating,the user has to provide some client credentials. 

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

### 1. Generate payment links
Using the action nodes, you can generate payment links according to your use cases.

<img src="https://i.imgur.com/wZHyTdt.png" alt="drawing" width="60%"/>

![](https://i.imgur.com/yhnsDTc.png)

