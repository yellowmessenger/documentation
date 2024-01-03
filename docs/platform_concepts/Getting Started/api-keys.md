---
title: Generate your bot API keys
sidebar_label : Generate your bot API keys
tags: [bot token, get bot token, bot access token, access token, x-auth-token, bottoken]
---

:::note
* Admins and super admins of the bot can generate API keys.
* A Super Admin can delete any API key, while an admin can delete only the key(s) they have personally created.
:::

API keys act as secure passcodes, granting authorized access to specific functionalities or resources within a system. They serve as an additional layer of protection, safeguarding sensitive data and ensuring that only authenticated users or applications can interact with the API.


To generate an API key, follow these steps:

1. On the bot Overview page, go to **Access Control** > **API Keys**.
   ![](https://i.imgur.com/6L7qEaO.png)

2. To create a new API Key, click **Generate new API key**.
3. Name the API key in **API Name** and select **User role** from the dropdown.

   <img src="https://i.imgur.com/UUCmfG1.png" width="40%"/>

4. If necessary, add whitelist IP to ensure smooth access, especially if the IP is at risk of being blocked by the firewall.
5. Click **Save** to generate the API key.
6. Copy the generated key and use it in your API calls wherever required.
   ![](https://i.imgur.com/VcDUuHe.png)

<!--
:::note
* The token's maximum length is 40 characters. 
* The character set used includes A-Z, a-z, 0-9, underscore (_), and dash (-), encompassing both uppercase and lowercase English letters, numbers 0 through 9, and symbols underscore (_) and dash (-).
:::
-->

***

**What's next?**

* You can use the generated key to authenticate Platform APIs, including the [Notification API](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine). Pass the API key in the header as `x-api-key`.

