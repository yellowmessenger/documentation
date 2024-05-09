---
title : Custom Webhook integration
sidebar_label : Custom Webhook
---


This custom webhook integration helps the bot to receive instant notifications about user actions, such as adding products to their cart or completing purchases.

Pre-built integrations may not suit all client setups. Implementing webhooks ensures seamless communication between our bot and both in-house and third-party systems, accommodating various client configurations.  For example, clients utilizing third-party systems can still receive timely updates about user actions.


To configure a Webhook account, follow these steps:
1. In Development/Staging environment,  go to **Extensions** > **Integrations** > **Tools & Utilities** > **Custom Webhook**. Alternatively, you can use the Search box to find a specific integration.

   ![](https://i.imgur.com/0ptkEAy.png)

2. In **Give account name**, enter a unique name for the integration. You can use only lowercase alphanumeric characters and underscores (_).

   ![](https://i.imgur.com/feKFZhL.png)

3. Configure the other details based on the description provided in the following table.

    Option | Description
    ------ | -----------
    Provider | Either choose *Custom webhook* to add a new webhook account or select a preconfigured webhook that you want to use.
    Domain name | Enter the domain for example
    Webhook payload | The data format or structure of the payload sent via the webhook. Describe the content and format expected in the JSON payload.
    Send event data to user | Toggle to *Yes* to send event data received via the webhook to the user. By default, this option is set to *No*. For example, show status of the payment. <br/>For audit or any other purposes, the bot developer should add logic based on the event to store event data.
    Choose from default source? | Toggle to *Yes* to Specifies whether to select from a default source.
    Authenticate key | Enter the auth key for authentication purposes.
    Sender path | Specifies the path or endpoint from which the webhook sender transmits data. Choose the relevant parameter used in the webhook payload.
    Source path | The path or endpoint from which the webhook source sends data. Describe the format or structure of the source path.
    Other parameters | Map any additional parameters relevant to the webhook integration. For example, account name.

    :::note
    - We have preconfigured the most common custom webhooks and will continue to add more commonly used webhooks over time. Simply select the provider, and no further configurations are required.
    - The following screenshot shows how the Webhook payload parameters appear in Sender path and Source path:

    ![](https://i.imgur.com/htcLyEB.png)
    :::

4. Click **Connect**.
5. To add more accounts, click **+Add account** and repeat the above procedure.
6. Once an account is added, you can copy the webhook URL by clicking on the Webhook link.

   ![](https://i.imgur.com/jGn2NzO.png)

:::note
- Once the account is added, you can copy the Webhook URL. 
:::

## Enable Webhook events in Studio

Once integration is complete, to make use of events in the bot, users need to enable events.

1. Go to **Studio** > **Event** > **Integrations**.

2. Search for *Custom webhook*, click on more options and Activate the event.  If there are multiple accounts, you need to activate for each account separately.

   ![](https://i.imgur.com/DzcNzc7.png)



