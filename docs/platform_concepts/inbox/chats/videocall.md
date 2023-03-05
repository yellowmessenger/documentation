---
title: Configure and use video call in chats 
sidebar_label : Video calling 
---

Text-based communications have limitations when dealing with complex issues to offer personalized support. it takes a lot of time and effort to provide an effective resolution. 
To resolve this complication, Inbox provides the option of video calls. Video call provides humanized digital customer experience. Other advantages of video calling are: 
- It is easier to achieve a meaningful interaction with the customer face to face (compared to a live chat or an email).
- It helps provide in-person support from anywhere across the world. 
- It improves customer satisfaction, increases the efficiency of the team's fast and stick resolution, boosts sales, and increases the trust with the customer.

In this article, you will learn: 

1. [How to configure video calling?](#configure)
2. [How video calling works for agents vs. customers?](#usage)




-----


## <a name="configure"></a> 1. Configure video call 

To configure video calls, it must be enabled on the settings page, agents page, and on individual raise ticket nodes.

### 1.1 Enable Video call from inbox settings

To avail of this functionality for your customers, Video call must be enabled:  
1. Through Inbox settings
2. For each of the individual agents


This steps are achieved through Inbox settings, explained in detail [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/video-call-settings).

![](https://i.imgur.com/oDxRiD9.png)

-------

### 1.2 Raise a video call for each live chat

You can allow the customer to raise a video call for a live chat by setting it up in the Studio flow. 

Follow the below steps to enable video call through the Raise ticket node: 

1. Open **Studio** > **Build** > **Flows**.  
2. Select the [Raise ticket action node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) on the respective flow.   
3. Scroll down to advanced settings. On the **Voice ticket options** field select **Voice call** (mandatory to enable video for particular live chat).   

    ![](https://i.imgur.com/5OuBB2P.png)

:::info 
**Complete video call option**

- If you add **Auto start call** to the **Voice ticket options** field (optional) on the Raise ticket node, the customer can directly initiate a video call (that is, without having to textually converse with a live agent, the agent will be assigned and customers screen switches to video call).
- There will be no live chat between the Agent and customer as they are directly connected via. video call. 
- This is currently available only if the channel is **Web widget**. 
:::

-----

## <a name="usage"></a> 2. Video calling workflow 

Agents can tend to their customer, share their screen, focus their products, provide consultation and superior customer experience, with a click of a button by using the video calling feature.



While resolving a query on live chat, Agents/customers might encounter instances where the solution is dependent on understanding the query through video call. For example: to fix a WIFI modem. In these situations a video call can be initiated. 

> This switch from live chat to video call is possible when the **Video call** option is selected on the Raise ticket node. 


- On the customers side the call option(icon) is disabled by default (unless **Voice call** is enabled within Raise ticket node). 
- When the call icon is enabled, customers can request for a video call, agent gets notified, agent can join the video call and understand the query. 
- Similarly, when an agent wants to understand the customer query better, they can request for video call and the customer can join the video call. 

    <img src="https://i.imgur.com/EAIojQz.png" alt="drawing" width="50%"/>


:::note
Resolving a query on video call does not mean that the live chat is resolved. After disconnecting the video call, the agent must resolve the live chat by clicking the **Resolve** button on the chat screen.
:::

-------

### 2.1  Agent side video calling features 

- Click the phone icon next to the chat name (from **Inbox** > **Chats**). 

    ![](https://i.imgur.com/kkboOLy.png)

- Provide permission to your system to access video and call. 
  
    <img src="https://i.imgur.com/iWiZ4dc.png" alt="drawing" width="100%"/>   


- For other channels like WhatsApp or Facebook, agents can just copy the video call link and paste it on the customer chat for them to join. 

    ![](https://i.imgur.com/9Pikvvh.png)

- Agent will have all the video calling facilities (view in full screen, share screen, mute audio, mute video, disconnect, etc.). They can disconnect/leave the call after providing the resolution. 
    #### Share screen during the video call

    <img src="https://i.imgur.com/bsf42Ib.png" alt="drawing" width="40%"/>   


--------

### 2.2 Customer side video calling features

- Customer must click on the phone icon to receive/initiate the call with the agent. 

    <img src="https://i.imgur.com/nSHQYWe.png" alt="drawing" width="60%"/>

- Customer will have all the video calling facilities (view in full screen, share screen with agent or customer, mute audio, mute video, disconnect, etc.). They can disconnect/leave the call after finding the resolution. 

    <img src="https://i.imgur.com/YhzCYQq.png" alt="drawing" width="50%"/>

- To minimize the video call screen and view the chat screen, customers can click the message button. For example: if the agent has sent a URL for registration during video call, customer can minimize or maximize video call to view the chat screen. 

    <img src="https://i.imgur.com/4QDTgSg.png" alt="drawing" width="50%"/>



