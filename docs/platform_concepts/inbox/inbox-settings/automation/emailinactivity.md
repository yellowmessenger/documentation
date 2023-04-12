---
title: Handle inactivity for email tickets
sidebar_label : Email inactivity trigger
---

Email inactivity refers to a situation where a customer has not responded to an email, request, or inquiry from a business or service provider (sent by an inbox agent) within a set time and the ticket is considered inactive. 

It is necessary to keep track of such emails to which the customer has not replied so that the team can close the ticket and prioritize other tickets. 
With email inactivity setting, email ticket inactivity is handled automatically without the inbox agent's interference. 

Email inactivity is handled by performing the below action: 
1. **Close the ticket**: If the customer has not responded within the set time, you can choose to automatically close the ticket. So that the agent assigned to this ticket gets auto-assigned to another one (or, concurrency value reduces).
    - **Send reminder and close the ticket**: In addition to the above one, you can also send a reminder to the customer expecting a response. if the customer does not respond within the set time, you can choose to automatically close the ticket.

----

## 1. Auto-close inactive email ticket



To automatically close an inactive email ticket, follow these steps: 

1. Open **Inbox** > **Settings**. 
2. Search and select **Inactivity trigger**. 
3. Select **Email** tab.    
 
    ![](https://i.imgur.com/RrqV6jB.png)
    
4. Select **Automatically close inactive email tickets** toggle. 
5. Select the duration (in minutes, hours, days, or months) after which the ticket should get closed automatically. For example, the ticket will close if the customer has not responded for 30 min. after the Inbox agent has sent an email.

    ![](https://i.imgur.com/bwMSFGO.png)
    
6. After step #5 when the ticket is closed, you can notify the customer over email when a ticket is auto-closed, by selecting (or creating) a prebuilt email template. 
    - Click in the box. You will see the list of all the available templates. Select the template that you want to use for sending the notification.

    ![](https://i.imgur.com/v2KjiDa.png)
    
    > - The templates used here do not support dynamic variables like {ticketid} etc. 
    > - [Learn more](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/emailtempalte) on creating email tempaltes. 
7. **Save** the changes. 

:::note
- Trigger time must be more than 0. 
- Auto-closed tickets will be tagged with - *autoclose*, you can see them on the tickets page.
:::

-----

### 1.1 Send a reminder before auto-closing an inactive email ticket

To send a reminder before auto-closing an inactive email ticket, follow these steps: 

1. After step# 6, enable **Send reminder** toggle. 

    ![](https://i.imgur.com/rnV5LZl.png)

2. Select the time after which the customer must receive a reminder email. For example, inbox will send a reminder if the customer has not responded for 20 minutes after the Inbox agent sent an email.

3. You can notify the customer over email when a ticket is about to become inactive, by selecting (or creating) a prebuilt email template. 
    - Click in the box. You will see the list of all the available templates. Select the template that you want to use for sending the reminder notification.

    ![](https://i.imgur.com/nLKzUWo.png)
    
    > - Before selecting a reminder mail, you can edit the existing templates or create a new template. 
    >  - The templates used here do not support dynamic variables like {ticketid} etc. 
    > - [Learn more](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/emailtempalte) on creating email tempaltes. 

4. **Save** the changes. 

:::note
- Trigger time must be more than 0. 
- Reminder timer must be less than the auto-close timer.
- **Send reminder** toggle can be enabled only if **Automatically close inactive email tickets** is enabled. 
:::


## 2. Use case

Assume an email ticket was raised by a customer to Globex Corporation:

**Customer's email ticket**:

```
Hi, 
I purchased a core i5 latitude from you before 2 months. 
I need replacement for the battery adapter. Can you help me out? 
Regards, 
James
```
**Response from the inbox agent**:

```
(#223)
Hi James! 
I will help you with your issue. 
However to fetch your details, can you please send me your invoice?
Thanks, 
Globex
```

**No reply from the customer** (ticket is still assigned to the agent until manually closed):
```
```

**Admin enables Auto-close (with alerts). If the customer is inactivy for more than set time (30 min), reminder will be sent and ticket will be auto closed saving agents time.**

**Automated reminder from inbox**:

```
Hi, 
We noticed that you have not responded to our previous mail. 
Are you still looking for support?"
```

**No reply from the customer**:

```
```

**Automated closure from inbox**:

```
Hi, 
We have closed your ticket (#223) due to inactivity. 
If required, you can raise another ticket to get in touch with us. 
Have a great day!
```


