---
title: Email ticketing statuses
sidebar_label: Email ticket statuses
featured: true
---

In this article, you will learn: 
1. [The pre-defined statuses in email ticketing](#1)
2. [Transitioning of statuses from different views](#2)


These statuses will affect everything from SLA timers to workflows, as an increment to this users will be allowed to create their own statuses to accommodate more complex use cases but the system-defined statuses remain the same. 

## <a name="1"></a> 1. Predefined email ticket status 

- The following are the **default statuses**: 




| Status | Description |
| -------- | -------- |
| Open     | When a ticket is raised and lies unassigned it states is open, open is a system-assigned state, and the ticket cannot be manually moved to an open state once removed from it.     |
|In Progress| In-progress means it is currently assigned to agent and the agent is yet to send a reply/respond back to the customer or the agent is working on the ticket|
|Pending|This status signifies that the agent is waiting on a response from the person who requested the ticket. If a ticket is in this status once the user replies the ticket shall automatically be moved to the in-progress state. |
|On-hold|This status signifies that the ticket is on hold as it is awaiting the response from a third party ie. not the person requesting the ticket. For example, if the agent is blocked or waiting for  information from the internal team,  the ticket will be put under ON-HOLD status so that the agent's support metrics are not impacted by the waiting time|
|Resolved| This status states that the solution is provided by the agent hence this ticket is marked as closed.|


- **Transition** from one status to another: 




| Initial status | Final status  | Action |
| -------- | -------- | -------- |
| Open     | Any status     | This action is irreversible. Once the status is changed from open, a ticket cannot be marked as new again.    |
|Open|Assigned| When the Agent assigns the ticket to self or someone else, the states changes from open to assigned. |
|Pending|Assigned|When a new reply comes from the requester, the status will be set to Assigned.|


:::note

If a user replies back on the same thread and the ticket is resolved, the ticket will be reopened and the status will change to in-progress (and it will be assigned to the same agent it was previously assigned). 
:::

