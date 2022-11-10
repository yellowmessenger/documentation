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
|In Progress|This status signifies that the ticket is assigned to an agent and or is being worked upon, this status simply signifies that the agent is actively working on the ticket.|
|Pending|This status signifies that the agent is waiting on a response from the person who requested the ticket. If a ticket is in this status once the user replies the ticket shall automatically be moved to the assigned state. |
|On-hold|This ticket signifies that the ticket is on hold as it is awaiting the response from a third party ie. not the person requesting the ticket.|
|Resolved| This status states that the solution is provided by the agent hence this ticket is marked as closed.|


- **Transition** from one status to another: 




| Initial status | Final status  | Action |
| -------- | -------- | -------- |
| Open     | Any status     | This action is irreversible. Once the status is changed from open, a ticket cannot be marked as new again.    |
|Open|Assigned| When the Agent assigns the ticket to self or someone else, the states changes from open to assigned. |
|Pending|Assigned|When a new reply comes from the requester, the status will be set to Assigned.|


:::note

- If a user replies back on the same thread and the ticket is resolved, the ticket will be set to assigned and will be **assigned** (and it will be assigned to the same agent it was previously assigned). 
- If the agent profile is unavailable/the assignment fails:
    - Ticket is set to assigned.  
    - Status is set to open.
:::


## <a name="2"></a> 2. Status transition from different views

### 2.1 Ticket list view


* If an agent creates a ticket and the ticket is assigned to him, the ticket is created and the agent will be directed to the **ticket details view**.
* If an agent creates a ticket and the ticket is not assigned to him, the ticket is created and the agent will be directed to the **ticket list view**.
* If the agent creates a ticket and sets the status to **Resolved**/**Pending**/**on-hold**, the ticket is created and the agent will be directed to the **ticket list view**. 
* If the agent creates an unassigned ticket, new ticket status is assigned and the agent will be directed to the **ticket detail view**. 
* If the agent creates a ticket that is unassigned and sets the status to **Resolved**/**Pending**/**On-hold**, the ticket is created and the agent will be directed to the **ticket list view**. 

![](https://i.imgur.com/RAO9y0C.png)


### 2.2 Ticket details view

* When an agent sends from the respective ticket page, the agent will remain on the page (view mode). 
* When an agent sends a reply and sets the status in ticket details as **Resolved**/ **Pending**/ **Hold**, the ticket status will be updated and the agent will be redirected back to his ticket list view. 

![](https://i.imgur.com/31nUXNV.png)










