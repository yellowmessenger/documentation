---
title: Video Call Settings
sidebar_label : Video call settings
---


Video calling must be enabled for your customer to be able to avail of this functionality.  **Inbox Admins** can configure video call settings for their inbox agents. 

Video calls must be enabled for:
1. As a feature itself, on inbox settings.
2. For each of the individual agents who is eligible to receive a video call. 
3. Each [Raise Ticket action node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#17-raise-ticket). 

:::note

- Video calling can only be enabled for a live chat while creating it (a normal chat conversation cannot have video calling abilities post its creation when it is already assigned to an agent).
- An agent can only have 1 video call ticket assigned at a given point of time (even if they are not actively engaged in that video call). This is independent of the concurrency, even if an agent has vacant available concurrency, they cannot have another call in parallel. 
:::

-----

Follow the given steps to enable video calls for the inbox: 

1. Open **Inbox** > **Settings**. 
2. Search and select **Video call**. 

![](https://i.imgur.com/4VS258n.jpg)

3. Enable video call toggle. 

![](https://i.imgur.com/PL7zj6S.jpg)

4. Click **Upload Photos** to set a background for your video calls.  If there are multiple photos uploaded you can click on one of them(or select none) to make it the default background. 

![](https://i.imgur.com/V2qFzNf.jpg)

5. Add a **Video call redirect link** that will redirect a customer to a required location after the video call ends. Click **Save**.   

![](https://i.imgur.com/ldMcgHG.png)

Follow the given steps to enable video calls for specific agents: 

> This must be enabled when the teams have dedicated agents to take video calls and the other agents can continue answering to chats/emails. 

1. Open **Inbox** > **Settings**. 
2. Search and select **Agents**. 

![](https://i.imgur.com/yXJoPZs.jpg)

3. Select (edit) a specific agent. Check **Available for call**. This makes them available for video calling during ticket assignments. 

![](https://i.imgur.com/eJMbI5c.png)

