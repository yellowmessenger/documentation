---
title : Freshchat
sidebar_label : Freshchat
---

Yellow.ai Integration with Freshchat allows you to seamlessly connect your Freshchat service with the yellow.ai platform.


In this article, you will learn how to integrate yellow with Freshchat.



## 1. Use Case

In this integration, you can use the **raise ticket node** to start a conversation with Freshchat Agent. Firstly you'll have to select Freshchat from the dropdown and add the necessary parameters. Then you can trigger the journey where tickets will be assigned to Freshchat agents.

## 2. Configuration

Follow the steps below to integrate with Freshchat: 


1. Navigate to **Integrations** and search for Freshchat under **All integrations**.

![](https://cdn.yellowmessenger.com/fDLSt6FZ4GJV1667370185339.png)

2. Navigate to **Admin Settings** > **Account Settings** > **Integration Settings** for App ID of your Freshchat application. 
3. Navigate to **Admin Settings** > **API Tokens**. Click **Generate Token**, and you will get your API token.
4. For Channel ID, you will have to make an API call to the channel's route. Add the Authorization header as 'Bearer YOUR_API_TOKEN', you'll receive the channel ID in the response.

![](https://cdn.yellowmessenger.com/kEJN6xkq5n0X1667370247026.png)

5.  Copy Webhook URL from the Integrations page.  Navigate to **Admin Settings** > **Webhooks**. Paste the copied URL in the prompt.


6. Click **Connect**.

