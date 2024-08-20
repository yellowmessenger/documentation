---
title: Email ticketing statuses
sidebar_label: Email ticket statuses
featured: true
---

In this article, you will learn: 
1. [The pre-defined statuses in email ticketing](#1)
2. [Transitioning of statuses from different views](#2)


These statuses will affect everything from SLA timers to workflows, as an increment to this users will be allowed to create their own statuses to accommodate more complex use cases but the system-defined statuses remain the same. 

:::note
Email tickets are auto-assigned to the agents based on the [default assignment logic](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/assignmentlogic). Once assigned, the tickets will be available in **Open** status.  
This feature can be disabled on the [settings](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/automation/tickets-assignment-logic) page.
:::



## <a name="1"></a> 1. Predefined email ticket status 

- The following are the **default statuses**: 

| Status | Description |
| -------- | -------- |
| Open     | When a ticket is raised and is unassigned to any agent, it is in Open status. Open is a system-assigned state, and the ticket cannot be manually moved to an open state once removed from it.  Tickets may be Open when Auto-assignment is disabled under inbox settings, Agents are Busy or Away or Agents have reached their concurrency limit. |
|In Progress| In-progress means it is currently assigned to agent and the agent is yet to send a reply/respond back to the customer or the agent is working on the ticket.|
|Pending|This status signifies that the agent is waiting on a response from the person who requested the ticket. If a ticket is in this status once the user replies the ticket shall automatically be moved to the in-progress state. |
|On-hold| This status signifies that the ticket is on hold as it is awaiting the response from a third party ie. not the person requesting the ticket. For example, if the agent is blocked or waiting for  information from the internal team,  the ticket will be put under ON-HOLD status.|
|Resolved| This status states that the solution is provided by the agent hence this ticket is marked as closed.|

:::note
[SLAs](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/slaintro) are paused when the ticket status is **In-hold** or **Pending**.
:::


- **Transition** from one status to another: 




| Initial status | Final status  | Action |
| -------- | -------- | -------- |
| Open     | Any status     | This action is irreversible. Once the status is changed from open, a ticket cannot be marked as new again.    |
|Open|Assigned| When the Agent assigns the ticket to self or someone else, the states changes from open to assigned. |
|Pending|Assigned|When a new reply comes from the requester, the status will be set to Assigned.|


:::note

If a user replies back on the same thread and the ticket is resolved, the ticket will be reopened and the status will change to in-progress (and it will be assigned to the same agent it was previously assigned). 
:::

