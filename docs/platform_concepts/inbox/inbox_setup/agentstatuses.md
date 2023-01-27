---
title: Default agent status
sidebar_label : Default agent status
---


> An admin cannot change the status of any agents.


Inbox offers three default agent statuses that you can choose to define your availability. These statuses are the foundation based on which the incoming tickets are assigned to you. Ensure that you are indeed selecting the correct status at any time.


  
The default statuses are as follows:  



| Status | Description| 
| -------- | -------- | 
| **Available**     | The new incoming chats will only be assigned to agents who have set their status to Available. The chats will be assigned based on their concurrency.     |      
|**Busy**|No new chat ticket will be assigned to agents who have set their status to be Busy. These chats will be queued in their respective group and then automatically assigned to agents when they make themselves Available. If the group queue is not enabled then these chats will be converted as Missed chats and stored in Inbox for reference. Eg: When you are working on important issues/escalations, Documentation work, Internal meetings/discussions, etc.|
|**Away**|No new chat ticket will be assigned to agents who have set their status to be Away. These chats will be queued in their respective group and then automatically assigned to agents when they make themselves Available. If the group queue is not enabled then these chats will be converted as Missed chats and stored in your account for reference. Eg: Recess, Bio break, Lunch break.|
|**Offline**|When an agent logs out or goes away from the Inbox module, they’ll be treated as Offline and no new conversation will be assigned to that agent even if they are present inside the yellow.ai platform in any other module like Insights, Studio, etc.|


--------

      
:::info

**Difference between Busy & Away**

On paper, **Busy** and **Away** are both identical in function but when you log out after changing your status to **Away**, your status will not be **Offline** it will remain as **Away**. This is to avoid missing out on the chats raised by the end users when all your agents have logged off within working hours (for example, for a lunch break).
- Admins can manually transfer the chat to an agent who has set themselves to Busy / Away. This manual transfer operation will not consider the agent's current concurrency and will assign tickets even if their concurrency is full.


**Example**

Consider a scenario wherein, all your agents break for lunch from 1 PM - 2 PM. If they are considered **Offline** during that time, the chats raised during the time will be completely missed unless Offline chats are enabled.  Even if they are enabled, those chats will only be captured in Open status and will not be assigned to agents immediately.
Now if they are considered as **Away**, those chats will not be missed irrespective of whether Offline chats are enabled or not, and the chats will be queued, then automatically assigned to agents after 2 PM.
:::
