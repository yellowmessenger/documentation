---
title: Contacts (Proactive notifications)
sidebar_label : Contacts 
---

In this article, you will learn: 
1. [What are proactive notifications?](#defination)
2. [How to create new contacts in the inbox?](#1)
3. [How to send notifications to the contacts?](#2)
4. [How to followup with the tickets created for proactive notifications](#3)

------



#### <a name="defination"></a>  **Proactive notifications**

The support process is a reactive process that takes place when a customer faces an issue and reaches out to the brand for resolution, through their website (or other configured channels). A live agent is connected to a customer and their issues are resolved. 
This proactive notification is an outbound reach out where the agents or the businesses, reach out to the customers (using our **Contacts** feature) to identify issues, problems, and opportunities to maintain relationships (especially in the case of B2B scenarios), to introduce new products/provide product updates, to personally address their queries, etc. This personalization and proactiveness provide:
- A better experience for the end users. 
- Increased customer loyalty.
- Increased potential sales.


## <a name="1"></a> 1. Create a new contact 

Follow the steps below to create a new contact:  

1. Log in to the yellow.ai platform. Open **Inbox** > **Contacts**. 

![](https://i.imgur.com/n9Sgfrq.png)

2. If you want to send notifications to a new contact, you can add a new contact by clicking **+Create contact**.  

![](https://i.imgur.com/EyUiBa0.png)  

3. Enter the contact details: 
	- Name, email address, and Phone number with the correct country code (+91 for India). 
	- Upload a contact image (if required). 
	- Enter tags to classify this contact under any [existing tags](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/tags). 
4. Click **Create**. 
5. This page will contain all the contacts created in Inbox, use the search bar to find a particular contact by entering the details. 

![](https://i.imgur.com/Za2s5v6.png)



## <a name="2"></a>  2. Send proactive notification to a contact 

:::note 
This feature is available only for the WhatsApp channel.   
Contact: [sandeep.rajaram@yellow.ai](sandeep.rajaram@yellow.ai) to extend this to other channels. 
:::

Follow the steps below to send a notification to any particular contact:  

1. Search for the required contact and click on the contact name. 
2. Click **Send message**. 

![](https://i.imgur.com/KocHhhp.png)

3. Select the **From** contact number (WhatsApp business number) from which this notification will be sent. For more details on WhatsApp channel, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration). 
4. Select the **To** contact number. Click **Next**. 
5. Select the template. Click **Next**. 
	- Use the search bar to find the required template. 
	- Hover on a template, to preview it. 

<img src="https://i.imgur.com/Fh6I2RB.png" alt="drawing" width="40%"/>

6. You can attach media/ variables/ dynamic content and click **Next**. 

<img src="https://i.imgur.com/IGtaQZk.png" alt="drawing" width="70%"/>

7. Add the following details and click **Create ticket and send**: 
	- Select the **Priority**.
	- Select **Assignee** from the drop-down to assign this ticket to an inbox agent. 
	- Add a **Description**. 

<img src="https://i.imgur.com/ibNEDJM.png" alt="drawing" width="50%"/>

8. A ticket will be created and assigned to the agent. These details will be visible on the **Timeline** tab.

<img src="https://i.imgur.com/6iOtGuu.png" alt="drawing" width="60%"/>

## <a name="3"></a> 3. Chat with the contact 

Follow the steps below to follow up with the contact after the notification is sent:

1.   Ticket creation through the contacts tab will take 1-2 minutes to process because Inbox verifies that the user number entered is valid or invalid before creating a ticket. 
2. Once the number is verified, the ticket is created and a notification is sent to the contact, you can view it on the **Chats** tab.
3. On **Active** chats, ticket details, and the chat screen will be open (to the assigned inbox agent). 

<img src="https://i.imgur.com/RB5TnXj.png" alt="drawing" width="100%"/>

:::note
As per [WhatsApp guidelines](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/whatsapp-24hr-window-policy), the live inbox agent cannot send any messages before 24 hours to the user until the user has responded to the notification that was sent. 
:::

4. When the contact responds to the notification, the Chat restriction is lifted and the agents can have a free-flow conversation. 