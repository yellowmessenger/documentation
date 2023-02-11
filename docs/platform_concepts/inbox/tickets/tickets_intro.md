---
title: Email ticketing overview
sidebar_label : Overview
---

- All the queries raised by the customer through the email channel are complied with and listed in a unified user interface (Omni channel Customer support suite). 
- Admins can view all the tickets that are sent to the respective support email.
- As an Agent, you will be assigned with the tickets (based on the [group](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups) or [auto-assign](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/automation/tickets-assignment-logic) settings). You can select an email that needs attention and reply to it on time. 


:::note
Email tickets are assigned only to an **Inbox agent** (although **Inbox admin** will have the permission to see and contribute to  the [operations](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/roleaccess) in Inbox).
- For an inbox admin, all the chats/tickets will be accessible.  
- For an inbox agent, only the chats/tickets assigned to them will be accessible.
:::

In this article, you will understand the two different methods in which the email tickets(ticket page) can be viewed - **List view** and **Detailed view**. 

>  Email tickets must be [configured in prior](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/setupandconfig) and emails must be received by Inbox.

---------

## 1. Email tickets list view 


1. Log in to [yellow.ai](https://cloud.yellow.ai/) platform and open **Inbox** > **Tickets**.

    ![](https://i.imgur.com/W8lAIJ6.png)

2. The landing page will have a ticket list and count, Sort and filter options, manual ticket creation, SLA messages, email details (agent ID, ticket ID, subject line, ticket creation time), priority, ticket status, and assigned group/agent. 

    ![](https://i.imgur.com/JZ5SPUk.png)



| Feature  | Description | Related links |
| -------- | -------- | -------- |
| **Tickets**      | - **My tickets**: List of tickets assigned to a particular agent. <br/> - **Collaborating tickets**: List of tickets where multiple agents have been assigned/working on a ticket. <br/> - **Unassigned tickets**: This list displays the tickets which are not yet assigned to any agent. <br/> - **Resolved tickets**: Tickets that have been resolved.|      |
| **Email details**|- Each ticket is auto-assigned with a number when created, which will be its respective **ticket ID**. <br/> - Each ticket contains the **subject** of the email under which you can find the requestor's **name** and the **created date**. <br/> - You can also see the **priority**, **status**, **agent** name, and the **group** to which the agent belongs. <br/> - You can perform **bulk actions** on these tickets. | [Ticket status](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/emailticketstatus), [Bulk actions](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/bulkaction)|
|**Sort and filter**| Last modified date is considered as the date & time when the ticket was recently modified/updated. By default, tickets are arranged based on the last modified date with their corresponding ticket ID. You can sort by **Last modified date**.|[Search and apply filters](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/searchandfilter)|
|**Manual ticket creation** |You can choose to create an email ticket manually. |[Create new tickets](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/manualticket)|


-------


## 2. Email tickets detailed view 

1. Log in to [yellow.ai](https://cloud.yellow.ai/) platform and open **Inbox** > **Tickets**.

    ![](https://i.imgur.com/W8lAIJ6.png)
2. Click on any of the ticket grids, and the detailed view of that respective ticket opens. 

    ![](https://i.imgur.com/03mgNXK.png)

---------

### 2.1 Email conversation log

| Feature  | Description | Preview|
| -------- | -------- | -------- | 
|**Title**|Ticket ID# and Subject are displayed on the top of the ticket thread| ![](https://i.imgur.com/g7mIP1p.png)|
|**Copy and Download transcript**| You can copy the link to the transcript or download the transcript of the chat in this ticket- Be mindful of the user information provided in the chat|![](https://i.imgur.com/2nRy1TC.png)|
|**SLA**|SLA log will be displayed with based on the SLA policy applied for this ticket. Learn more [here](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/slaintro#11-view-sla-time-log).|![](https://i.imgur.com/Hn7eqm4.png)|
|**Email thread**|To and from messages along with the sent/received time|![](https://i.imgur.com/Jt2pUy3.png)|

-----------

### 2.2 Email response(chat) screen

 


| Feature  | Description | Preview|
| -------- | -------- | -------- | 
|**Add template**|You can **add(change/preview/delete)** a pre built template. Learn more [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/emailtempalte). |![](https://i.imgur.com/wWwlQDS.png)|
|**Reply**| Select **Reply** from the dropdown to reply to the previous mail. To address cannot be changed.|![](https://i.imgur.com/gOFIdMc.png)|
|**Forward**|Select **Forward** from the dropdown to reply to the forward the above email thread to a new email ID.|![](https://i.imgur.com/CRyH0y9.png)|
|**Internal notes**| Select **Internal notes** from the dropdown to add internal notes that only the Inbox admin and agent to whom this ticket is transferred can see.|![](https://i.imgur.com/wgx1c9A.png)|
|**Add CC and BCC**| Click Cc/Bcc and add the mail IDs|![](https://i.imgur.com/wu1sIgu.png)|
|**Quick actions**|You can send [Canned response](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/canned-responses) or [Prebuilt templates](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/emailtempalte).|![](https://i.imgur.com/xvMFV4s.png)|
|**Formatting options**|You can add quick responses, attach up to 5 files (each less than 10 MB), Bold/italicize/underline text, and add numbered/ordered list to the reply body.|![](https://i.imgur.com/IDDGc2h.png)|
|**Select/change email ID**|All the [emails configured](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/setupandconfig) for inbox are displayed here, you can select the email ID from which you wish to send this email.<br/> If you have received a mail on different mail ID and you send a reply using a different mail ID- the user will receive the old conversation thread in the current mail.|![](https://i.imgur.com/o46DjHM.png)|
|**Email body**|You can only send a reply when the body contains some information. To send a reply without any content, use blank spaces.|![](https://i.imgur.com/ZDFEQXN.png)|


---------

### 2.3 Ticket details 


- **Status**: By selecting **Resolved**, the ticket gets resolved. You can also change the ticket [statuses](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/emailticketstatus#22-ticket-details-view). 
- **Priority**: You can set the priority to **High**, **Medium**, or **Low**.
- **Group/Agent**: You can assign the email conversation to a Group (which gets [auto-assign](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/automation/tickets-assignment-logic) to an agent) or you can assign this thread to an agent. Configure Email [group](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups) and [agent](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents). 
- **Collaborator**: More than one agent can help to resolve a ticket (similar to a group chat). Add collaborator names by selecting the names from the dropdown menu.
- **Tags**: You can tag this conversation to any of the configured [tags](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/tags). 


<img src="https://i.imgur.com/v9DTmA0.png" alt="drawing" width="60%"/> 



--------

### 2.4 Contact details 

This section contains a timeline of all the activities that are happening with this email contact. You can view the details by clicking the **Contact name**. Click **View all** to see all the details on the [Contacts tab](https://docs.yellow.ai/docs/platform_concepts/inbox/contacts#--2-send-proactive-notification-to-a-contact).

<img src="https://i.imgur.com/VwROLWL.png" alt="drawing" width="60%"/> 

---------

### 2.5 Activity log 

The activity log consists summary of all the changes/updates that have taken place on this ticket (ticket ID). For example, Change of status/priority, Transfer of ticket from one agent to another, Reopening of the ticket, Breach of SLA, etc. 

<img src="https://i.imgur.com/QEjd8th.png" alt="drawing" width="60%"/> 

