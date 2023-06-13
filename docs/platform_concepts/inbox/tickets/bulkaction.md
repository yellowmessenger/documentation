---
title: Change status, Assign/Reassign, and Merge tickets in bulk 
sidebar_label : Bulk actions on tickets
---

In this article, you will learn: 
1. [How to change the status of multiple tickets?](#1) 
2. [How to assign tickets to a group/agent?](#11)
3. [How to merge multiple tickets into one ticket?](#2)


An Inbox agent's daily operations may involve performing the same task multiple times. For example, transferring a certain number of tickets to another agent or changing the status of multiple tickets.
To simplify the repetitive tasks performed by agents, bulk actions can be used by selecting multiple tickets and performing a common action on them. Tickets can be merged into one ticket and assigned to one agent. 

<!-- Merging tickets can avoid providing the same replies to multiple tickets, when multiple tickets are combined, the same response can be sent to all the customers. -->

:::note
Not more than 20 tickets can be selected at once for any of the bulk actions.
:::


----

## <a name="1"></a>  Change status of tickets in bulk 

To select tickets in bulk and perform bulk actions on them, follow the steps below:

1. Log in to your account. Open **Inbox** > **Tickets**.
2. You can select multiple tickets by clicking the boxes on the left of each ticket.
    ![](https://i.imgur.com/UDeF3YU.png)
3. After selecting the tickets, the **Bulk action** button will be available on the top right of the page. Click **Bulk action**. 
    ![](https://i.imgur.com/LJNlovs.png)
    > You can deselect the tickets by clicking **Clear selection**.
    > ![](https://i.imgur.com/JjPBSkF.png)
4. **Bulk action** can be used to change the status of the tickets.


#### Bulk resolve (bulk close) / Bulk reopen email tickets 

5. Click **Change status**. 
    - Select the status (Resolved, Pending, On-hold, or In-progress) you want to apply to the selected tickets.
        - Click **Resolved** to close email tickets in bulk. Tickets in pending, on hold and in progress status can be resolved (closed). 
        - Click **In progress** to reopen the resolved (closed) tickets in bulk. You can change the status to in progress even if your tickets are in pending/on hold. 
        - Click **On hold/ Pending** to change the email ticket status in bulk. 
    - Click **Change**.
    - If there are any custom fields configured for these tickets, you will be prompted to fill in the new custom field values and these values will be applicable to all the selected tickets.       
    
        <img src="https://i.imgur.com/3hBCa5X.png" alt="drawing" width="50%"/>

    :::note
    You cannot change the ticket status to **Open**.
    :::

-----------

##  <a name="11"></a>  Assign tickets to a group/agent in bulk 

You can select multiple tickets and assign them to one agent /group. Follow the steps below: 

1. Log in to your account. Open **Inbox** > **Tickets**.
2. You can select multiple tickets by clicking the boxes on the left of each ticket.
    ![](https://i.imgur.com/UDeF3YU.png)
3. After selecting the tickets, the **Bulk action** button will be available on the top right of the page. Click **Bulk action**. 
    ![](https://i.imgur.com/LJNlovs.png)
    > You can deselect the tickets by clicking **Clear selection**.
    > ![](https://i.imgur.com/JjPBSkF.png)
4. **Bulk action** can be used to change the status of the tickets.
5. Click **Assign**.
    - Select the Group, Agent, or Agent of a particular group to that you want to transfer the selected tickets.
    - If there are any [custom fields](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields) configured to reassign tickets, you must enter the custom fields values. 
    - Click **Assign**.       

    <img src="https://i.imgur.com/eEC0VDa.png" alt="drawing" width="50%"/>


-------

## <a name="2"></a>  Merge multiple tickets into one ticket

Multiple tickets from the same customer can be merged into a single ticket and it can be resolved by one agent. To merge tickets, follow the steps below: 

1. Click **Merge** after selecting the tickets to be merged. 
    ![](https://i.imgur.com/bDkLVyR.png)

2. You can choose a ticket to be a primary ticket. For example, there are 2 tickets - one is to find a resolution for the case - 'Order received was not the order placed' and the second is to -'Provide refund for the order mismatch'. These 2 tickets can be merged into one and the agent can inform the customer that the pickup has been initiated to provide the correct product and the refund will be given only after canceling the order.  
3. If you choose **Add secondary recipients to CC**, all the other ticket's email addresses will be copied to the primary ticket. Any communication further will be CC'd to those email IDs. 
4. Click **Continue**. 

    <img src="https://i.imgur.com/TH95aKm.png" alt="drawing" width="80%"/>

5. Click **Merge**.

    <img src="https://i.imgur.com/fqJpdCc.png" alt="drawing" width="70%"/>
  
6. The ticket selected as primary will be retained and the other tickets will be merged into the selected primary ticket.
    - You can click on the secondary ticket numbers to view those old tickets. 
    - Any further emails will contain CC's to the respective email IDs. 

    ![](https://i.imgur.com/L1oUnM6.png)


