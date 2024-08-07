---
title: Video call settings
sidebar_label : Video call settings
---

> **Inbox Admins** can configure video call settings for their inbox agents. 


Video calling options must be enabled on inbox settings for your customers to avail the [video call functionality](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/videocall).  

Video calls must mandatorily be enabled:
1. As a feature itself, on inbox settings.
2. For each of the individual agents who is eligible to receive a video call. 
3. For each Raise Ticket action node.

:::note
- Video calling can only be enabled for a live chat while creating it (a normal chat conversation cannot have video calling abilities post its creation when it is already assigned to an agent).
- An agent can only have 1 video call ticket assigned at a given point of time (even if they are not actively engaged in that video call). This is independent of the concurrency, even if an agent has vacant available concurrency, they cannot have another call in parallel. 
:::

-----

## 1. Enable video call settings

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

----

## 2. Enable video call for selected agents 

You can enable video call for selected agents from a team. When the dedicated agent is occupied with video calls, the other agents can continue answering to chats/emails.

Follow the given steps to enable video calls for specific agents:  

1. Open **Inbox** > **Settings**. 
2. Search and select **Agents**. 
    ![](https://i.imgur.com/yXJoPZs.jpg)
3. Select (edit) a specific agent. Check **Available for call**. This makes them available for video calling during ticket assignments. 
    ![](https://i.imgur.com/eJMbI5c.png)

---

## 3. Enable video call for the raise ticket node

Follow the given steps to enable video calls for specific flow (raise ticket node) on Automation:  

1. Open **Automation** > **Build** > **Flows**.  
2. Select the [Raise ticket action node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) on the respective flow.   
3. Scroll down to advanced settings. On the **Voice ticket options** field select **Voice call** (mandatory to enable video for particular live chat).   
    ![](https://i.imgur.com/5OuBB2P.png)

:::info 
**Complete video call option**

- If you add **Auto start call** to the **Voice ticket options** field (optional) on the Raise ticket node, the customer can directly initiate a video call (that is, without having to textually converse with a live agent, the agent will be assigned and customers screen switches to video call).
- There will be no live chat between the Agent and customer as they are directly connected via. video call. 
- This is currently available only if the channel is **Web widget**. 
:::

