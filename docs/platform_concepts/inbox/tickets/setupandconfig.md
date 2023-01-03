---
title: Email ticketing - setup, configuration and overview
sidebar_label : Overview, setup & configuration
---

In this article you will learn how to configure email tickets, there are 3 steps to be followed: 
1. [Configure email channel and set mail forwarding](#1)
2. [Enable email ticketing from settings](#2)
3. [Understand the components of the email tickets page](#3)

After this configuration is successful, the tickets that are created via. Raise ticket node for [email support groups](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups) will be assigned to a live agent for resolution. 


## <a name="1"></a>  1. Email channel and mail forwarding 


Configure the email channel from the channels module, follow the below steps:


1. Open **Channels** > **Email**. You can create an email(/account) for your group that handles email tickets. 
2. Select **Basic/Advance** and add **Email server**, **Username**, **Password**, etc.  Click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/email-outbound) for detailed documentation.  

3. In **Configuration object** field, select **Support ticketing**. 

![](https://i.imgur.com/DlVVjbc.png)
4. **Save** the changes.   
5. Once the email account details are Saved, **Forwarding Address** will be displayed. 

![](https://i.imgur.com/dCNKHXz.png)


:::info

**Purpose of Forwarding address** 

When any new email is sent to this particular email ID (that was created for support ticketing), the user email will be forwarded to the current Inbox section. 
That is, the emails sent to the email ID will be available on the yellow.ai platform so that the Agent - customer communication can take place in the Inbox Email chat rather than Email chat. 
:::

### 1.1 Set mail forwarding 

To forward mails from the email chatbox to the yellow.ai platform, follow the below steps: 

1. Copy the **Forwarding address** from the channels page. 
2. Log in and open your mailbox (Gmail, Outlook, etc).

**For Gmail** 

3. Open **All settings** and go to **Forwarding and POP/IMAP** tab. 

![](https://i.imgur.com/COXCn9T.jpg)

4. Click **Add a forwarding address** and paste the copied address. 
5. An email verification code will be sent to the Inbox to ensure that the configuration is authorized. Open **Inbox** > **Chats** > **Bot Messages**. 

![](https://i.imgur.com/P4znTah.png)

6. Copy the verification code from the Inbox and paste it into Gmail settings to enable the forwarding of messages.


## <a name="2"></a>  2. Enable email ticketing settings 

The email ticketing toggle must be enabled from the Inbox settings. Explained in detail [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/emailticketing)


## <a name="3"></a>  3. Email tickets introduction



All the queries raised by the customer through the email channel are complied and listed in a unified user interface (Omni channel Customer support suite). Agents can select an email that needs attention and reply to it on time. 

To open the email tickets page: 

>  Email tickets must be configured in prior and emails must be received by Inbox.

1. Log in to [yellow.ai](https://cloud.yellow.ai/) platform. 
2. Open **Inbox** > **Tickets**.

![](https://i.imgur.com/W8lAIJ6.png)

3. This page will contain the list of all the tickets under different view (and their count). 
    - **My tickets**: List of tickets assigned to a particular agent.
    - **Collaborating tickets**: List of tickets where multiple agents have been assigned/working on a ticket.
    - **Unassigned tickets**: This list displays the tickets which are not yet assigned to any agent.
    - **Resolved tickets**: Tickets that have been resolved.
    
4. Each ticket contains the subject of the email under which you can find the requestor's name and the created date. You can also see the priority, status, agent name, and the group to which the agent belongs.
5. Each ticket is auto-assigned with a number when created, which will be its respective ticket ID.


6. Last modified date is considered as the date & time when the ticket was recently modified/updated. By default, tickets are arranged based on the last modified date with their corresponding ticket ID. You can sort by **Last modified date**. 


7. On this page, you can [see ticket status,](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/emailticketstatus) [search for tickets and apply filters](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/searchandfilter), [create new tickets](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/manualticket), and [perform bulk actions](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/bulkaction).


![](https://i.imgur.com/JZ5SPUk.png)




