---
title: Manage bot access
sidebar_label : Manage bot access
---

You as a Superadmin can share bot access with other members. The following are the different access roles the Yellow.ai platform supports.




## 1. Share bot access


  
To share bot access with others - 

1. Log on to [Yellow.ai platform](https://cloud.yellow.ai) and click the Access Control icon <img src="https://i.imgur.com/FPcfiW9.png" width="20"/>.

   ![](https://i.imgur.com/IlBIRqa.jpg)



2. Click **+Invite user**.
  
   <img src="https://i.imgur.com/cBnpqIe.png" width="50%"/>

   a. Enter the official **Email** address of the user  
   
   b. Choose your preferred role(s) in **Access control**. You can choose more than one role for a user.
   
Role | Description
------ | ---------
Super Admin | The owner of the bot who has access to everything. <br/>Can provide *Approver* access to someone else. <br/>Can mask certain DB column on UI. <br/>View data in the bot tables and can [mask columns of a table](/docs/platform_concepts/studio/database#7-mask-database-columns) to restrict others from viewing column data.
Admin | Has entire access to all the modules.
Developer | Has entire access to to all the modules.
Database Viewer | Can only view the database
Approver | Can publish bot from staging to production. An Approver should also has Developer access.
Inbox (Admin) | Can provide support for chat queries or tickets of the bot; and can view analytics of his/her own performance (First response time, number of tickets closed).
Inbox (Agent) | Agent can only respond to chats received from the user.
Insights  (Hop) | Can view all the analytics pertaining to the bot.
Engagement (Admin) | Can send campaigns and configure audience.
Engagement (User) | Can only schedule campaigns.
   c. Click **Save**.
   
The user receives an email to accept the invite. 

***

## 2. Accept bot invite
  

In this section, you will learn the following - 
  

1. Log on to https://cloud.yellow.ai/. If sign up to the platform, [see this](https://docs.yellowmessenger.com/docs/howtos/basics/create-a-bot).

2. If you've received a bot invite on your email address, you should be able to see a notification. Click on that bell icon > Green tick.

   ![](https://i.imgur.com/XKd1KqL.png)
  
   ![](https://i.imgur.com/Jm0geRB.png)


  
3. Click on the drop-down to see the list of bots you have access to.


   <img src="https://i.imgur.com/Gg7cHBz.png" width="50%"/>
