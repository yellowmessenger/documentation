---
title: Chat section and different types of chats
sidebar_label : Getting started with live chat
---


The Chats section covers all the aspects of synchronous real-time conversations between a bot user and the agent. It is an omnichannel dashboard that supports chats on more than 15 different [channels](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview).  
- Any incoming chat (from any channel) will be assigned to a particular agent based on the agent [status and availability](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/automation/tickets-assignment-logic).  

:::note
For an inbox admin, all the chats/tickets will be accessible.  
For an inbox agent, only the chats/tickets assigned to them will be accessible.
:::


The chat section screen is divided into 3 parts:




| Section| Description |
| -------- | -------- |
| [Chat tickets, search and filter section](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatsearch)     | Choose the type of chat you want to see. Filter and search for specific chats. Perform bulk actions like transfer/resolve/reopene etc. by simple selecting multiple chats.         |
|[Chat - conversation screen](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/bulkaction) | View the chat. Reply to the user. Make notes of user conversation (summary) to help other agents understand the conversation quicker. Transfer the chat to another agent. Download the chat.     |
|[User details](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/bulkaction)|Learn user details such as location, name, phone number, order ID, device details, etc. Add other agents to collaborate on this chat, to resolve the query quicker. Transfer or resolve the ticket.     |



![](https://i.imgur.com/2dW8wTK.png)

 >The above sub-sections are explained in detail in the upcoming articles. 


----

## 1. Types of chats

When a ticket is raised by the bot user (requesting to connect with an agent), that chat will be displayed under this section. 

:::note
- To learn how to build a flow that will raise a ticket to a live agent, click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox#4-try-live-agent-module). 
- To learn more about the raise ticket node, click [here](hhttps://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#17-raise-ticket).   
:::

To understand the chats section, it is important to understand the types of chats. Inbox classifies chats into 7 different types. They are explained below: 



![](https://i.imgur.com/WP8TpCE.png)    


> To view chats, Open Inbox > Chats. Select from the Chat types dropdown. 


### 1.1 My Chats

If you are an Inbox agent and your status is available, the ticket raised and assigned to you will be displayed under My chats. My chats will differ from agent to agent because they can only see the tickets assigned specifically to them. 

### 1.2 Active Chats

This chat option will be available/visible only to the users who are inbox **Supervisor/Admin** (Overall), where they can see all the active tickets that are being handled by the agents. Admins can monitor all the ongoing chat tickets from here.

### 1.3 Queued Chats

If either of the below conditions is true, the ticket raised will not be assigned to any agent in particular and it will be found under queued chats (only if [chat queues](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat-queue) is enabled from the settings).

- If agent availability is **busy** or **away**.
- If the chat **concurrency** for each of the agents is full.


> For example:
> A limit is set that each agent can handle 5 tickets and there are 2 agents. 10 tickets are raised and they are in the assigned state.  In this case, when an 11th ticket is raised and the chat queues are enabled, it will be queued and found under queued chats.


Users will be notified that these tickets are in the queue and they will have a waiting time. 
When any agent's status becomes available or the concurrency is changed, the ticket automatically gets assigned to an agent without any manual intervention. 

:::info
**Resolve queued ticket manually**

Advanced customers can have a dedicated supervisor who can keep a look at all the tickets. When a high-priority ticket moves to the queued list, the supervisor can assign it to any agent who can take immediate action.  
:::

### 1.4 Open Chats

When a ticket is raised outside the [working hours](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/chat_working_hours) and there is no agent available to handle it, tickets will be found under open chats.
Open chats will be automatically assigned to the agents when they log in/ become available. 

:::note
Generally, users cannot raise a ticket outside working hours unless [offline ticketing](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat) is enabled.
:::


### 1.5 Resolved Chats

All the tickets that are solved or **closed** by the agents will be found under resolved chats.
Admins can see all the resolved chats, while the agents can see only their resolved chats.

### 1.6 Missed Chats

This is the ultimate fallback. When a chat doesn't belong to any other category of chats, it becomes a missed chat.
There are multiple ways in which a chat can move under missed chats. For example:  

1. Inbox settings hamper the experience of chats going into other categories. 
2. Raise ticket node (flow) is not configured correctly.
3. Chat queues are not enabled in the setting, the chat that must be queued moves to missed chat. 
4. Offline ticketing is not enabled in the setting, the chat that must be open moves to missed chat. 

When any raise ticket action fails due to inbox settings that can be controlled (for example, if offline ticketing is disabled, group queue is not configured, etc.), the chat will be available in missed chats.

> The chats do not move into missed chats for cases that are not controllable (like the bot server is down, technical error, bot shut down).


### 1.7 Bot Messages

All the conversations that happen on the bot will be seen here. This is an entire conversation, irrespective of the ticket raised. 


:::note
Only the **My chats** tab gets updated in real-time as and when the conversation occurs.  
Other chats are not updated unless the page is refreshed.
:::




