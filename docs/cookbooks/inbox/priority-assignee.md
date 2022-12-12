---
title: Change the priority of the ticket and assign it to a different agent
sidebar_label: Change ticket priority and assignee 
---


In this article, you will learn how to change the **priority** of a chat/email ticket and **transfer** it from one inbox agent to another. 

----

#### Configure priority and group on the Raise ticket node 

- While creating flows (on Studio) using [Raise ticket action node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket), the bot builder can assign a priority to the chat/email tickets. Tickets created through this flow will have the assigned **Priority**.  

![](https://i.imgur.com/07hndDx.png)

- You can configure Priority in the action node by enabling Advanced options. In the below example, all the tickets created will be assigned to the Complaints Department (configured in [group settings](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups)) and the priority is High. 


<img src="https://i.imgur.com/mTUphFf.png" alt="drawing" width="50%"/>

----


To change the **Priority**/**Assignee**, follow the below steps: 

#### Assign chat tickets to a different agent 

:::note
- Inbox Admin can change the Priority of Missed and Resolved chats assigned to all the Inbox agents. 
- Inbox Agent can see the details of only his tickets but cannot change the priority.  
:::

> Refer to [this doc](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatscreen#2-user-details) to learn about chat screen and chat details. 

1. Open any ongoing chat > **Details** and click **Transfer** (this option will be available based on the configuration of [custom fields](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields)).
2. Select the Agent/Group to which you want to transfer the ticket.  Confirm the reassignment. 
3. Your chat will be transferred to the selected inbox agent. 


![](https://i.imgur.com/FhEUhju.png)

4. While re-opening the missed/resolved chats, Inbox Admins can select the **Priority** of the ticket and assign the ticket to a particular **Category/Agent**. 

![](https://i.imgur.com/MGdy64a.png)


#### Change priority and assign email tickets to a different agent 

> Refer to [this doc](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/emailticketstatus#2-status-transition-from-different-views) to learn about email ticket screen and statuses. 

1. Priority and Assignee can be changed from the email tickets page. Search for the required ticket and select the priority/assignee (group/agent) from the dropdown. 


![](https://i.imgur.com/9I1uCWK.png)

2. You can open the email ticket and view the details. Modify the Ticket Details (change the priority and assignee).  These changes will be updated on the Activity log.


![](https://i.imgur.com/XH92KJK.png)
