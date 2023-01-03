---
title: Generate API Keys
sidebar_label : Generate API Keys
keywords: [bot token, get bot token, bot access token, access token, x-auth-token, bottoken]

---

API keys are used for authentication and authorization when another system or program calls the protected APIs. 

To authorize a source to access an API endpoint, you need to pass the API key in the request.

:::note
Only super admin of the bot will have access to generate API keys.
:::

Follow the below steps to generate API key:

1. On the bot Overview page, go to **Access Control** > **API Keys**.

   ![](https://i.imgur.com/6L7qEaO.png)


2. To create a new API Key, click **Generate new API key**.
  
3. Name the API key in **API Name** and select **User role** from the dropdown.

   <img src="https://i.imgur.com/UUCmfG1.png" width="50%"/>

4. Use Add whitelist IP to whitelist an IP (if it gets blocked from the firewall).
5. Click **Save**.
6. Copy the key and use it where you want to make an API call.

   ![](https://i.imgur.com/VcDUuHe.png)

***

**What's next?**

* Use the generated API key in [Notification API](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine) or other development use cases.