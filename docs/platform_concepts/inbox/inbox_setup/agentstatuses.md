---
title: Default agent statuses
sidebar_label : Default agent statuses
---


> An admin cannot change the status of any agent.


Inbox offers three default agent statuses that you can choose to define the availability. These statuses are the foundation based on which the incoming chats/tickets are assigned to agents.

The default statuses are as follows:  

| Status | Description| 
| -------- | -------- | 
| **Available**     | The new incoming chats/tickets will only be assigned to agents who have set their status to Available. The chats/tickets will be assigned based on their concurrency.     |      
|**Busy**| No new chats/tickets will be assigned to agents who have set their status to be Busy. These chats/tickets will be queued in their respective group and then automatically assigned to agents when they make themselves Available. If the group queue is not enabled then these chats will be converted as Missed chats and stored in Inbox for reference. Ex: When you are working on important issues/escalations, Documentation work, Internal meetings/discussions, etc.|
|**Away**| No new chats/tickets will be assigned to agents who have set their status to be Away. These chats/tickets will be queued in their respective group and then automatically assigned to agents when they make themselves Available. If the group queue is not enabled then these chats/tickets will be converted as Missed chats and stored in your account for reference. Ex: Recess, Bio break, Lunch break.|
|**Offline**| When an agent logs out or goes away from the Inbox module, they’ll be treated as Offline and no new conversation will be assigned to that agent even if they are present inside the yellow.ai platform in any other module like Insights, Automation, etc.|


--------

      
### Difference between Busy and Away status 

For an Inbox agent, **Busy** and **Away** are both identical in function but when you log out after changing your status to **Away**, your status will not be **Offline** it will remain as **Away**. This is to avoid missing out on the chats/tickets raised by the end users when all the agents have logged off within working hours (for example, for a lunch break).
- Admins can manually transfer the chats/tickets to an agent who has set themselves to **Busy/Away**. This manual transfer operation will not consider the agent's current concurrency and will assign tickets even if their concurrency is full.


**Example**

Consider a scenario wherein, all the agents break for lunch from 1 PM - 2 PM. If they are considered **Offline** during that time, the chats/tickets raised during the time will be completely missed unless **Offline chats** are [enabled](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat).  Even if they are enabled, those chats/tickets will only be captured in Open status and will not be assigned to agents immediately.
Now if they are considered as **Away**, those chats/tickets will not be missed irrespective of whether Offline chats are enabled or not, and the chats/tickets will be queued, then automatically assigned to agents after 2 PM.

