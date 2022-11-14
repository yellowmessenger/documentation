---
title: Add bot collaborators
sidebar_label: Add bot collaborators
---

When creating an end-to-end bot flow, you need to consider some instances where certain flows need to be handled by other teams or need help from other members of the team. Adding more collaborators to the platform enables everyone to create flows for different business use cases. All collaborators can work together and contribute to building an effective bot quickly and easily.

:::
notes
* Only superadmin can share bot access with other users and get notifications for the invited users to accept or reject bot access.
* Collaborators will have the access that you have provided. If you want to block access that you have provided, then you need to remove it separately.
:::

## 1. Share bot access
  
To share bot access with other users, follow the below steps: 

1. Log on to [Yellow.ai platform](https://cloud.yellow.ai) and click the Access Control icon <img src="https://i.imgur.com/FPcfiW9.png" width="20"/>.

   ![](https://i.imgur.com/IlBIRqa.jpg)

2. Click **+Invite user**.
  
   <img src="https://i.imgur.com/cBnpqIe.png" width="50%"/>

   a. Enter the official **Email** address of the user. 
   
   b. Select your preferred role(s) in **Access control**. You can select more than one role for a user.
   
| Role | Description
|------ | ---------
Super Admin | The owner of the bot has access to everything. <br/>Can provide *Approver* access to someone else. <br/>Can mask certain DB column on UI. <br/>View data in the bot tables and can [mask columns of a table](/docs/platform_concepts/studio/database#7-mask-database-columns) to restrict others from viewing column data.
Admin | Has entire access to all the modules.
Developer | Has entire access to all the modules.
Database Viewer | Can only view the database
Approver | Can publish bot from staging to production. An Approver should also have Developer access.
Inbox (Admin) | Can provide support for chat queries or tickets of the bot, and can view analytics of his/her own performance (First response time, number of tickets closed).
Inbox (Agent) | Agent can only respond to chats received from the user.
Insights  (Hop) | Can view all the analytics pertaining to the bot.
Engagement (Admin) | Can send campaigns and configure audience.
Engagement (User) | Can only schedule campaigns.

   c. Click **Save**.
   
The user receives an email to accept the invite. 

***

## 2. Accept bot invite

To accept bot invite, follow the below steps: 

1. Log on to [Yellow.ai platform](https://cloud.yellow.ai) and click **Notifications** icon at the top right corner.

2. If you have received a bot invite to your email address, then you should be able to view a notification. Click on bell icon > Green tick.

   ![](https://i.imgur.com/XKd1KqL.png)
  
   ![](https://i.imgur.com/Jm0geRB.png)


  
3. Click on the drop-down to view the list of bots you have access to.


   <img src="https://i.imgur.com/Gg7cHBz.png" width="50%"/>