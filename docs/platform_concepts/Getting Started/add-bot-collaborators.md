---
title: Manage your bot users
sidebar_label: Manage your bot users
keywords : [access control, bot invite, invite users, send bot invite, share bot access]
---

When creating an end-to-end bot flow, there may be instances where certain flows need to be handled by other teams or require assistance from other team members. To enable effective collaboration and allow your team to contribute to building an efficient bot, you can share bot access with other users. 

- Only the **super admin** can provide bot access to other users. Access can be revoked at any moment on the **Access control** tab. 
- A notification is sent to the super admin when the invited users accept or reject the bot access.
- **Collaborators** will only have the access level(role) as provided by the super admin. 


## User roles and access 

The following table outlines various roles along with the associated access privileges for the bot: 

| Role | Description |
|------ | --------- |
| Super Admin |This user holds ultimate authority, capable of controlling all bot features: <ol><li>Can provide *Approver* access to others.   </li><li>Can mask certain Database columns on UI. </li><li>Access bot tables and can [mask table columns](/docs/platform_concepts/studio/database#7-mask-database-columns) to restrict others from viewing column data.</li></ol>|
|Admin | This user has comprehensive access to all modules and their components.|
|Developer | This user has full access to bot components but cannot edit bot configurations or invite other users to use the bot.|
|Database Viewer |  This user is limited to editing and viewing tables and their data in selected databases.|
| Approver | This user has the ability to publish the bot from staging/development to production/live. |
| Inbox (Admin) | This user can access all inbox components, including chat, email, and knowledge base (KB); also monitor performance (of agents and team) and customize inbox settings.|
|Inbox (Agent) | This user can respond to their assigned customer chats or emails and has viewing access to Monitor, Analytics (self-reports), and the KB.|
|Insights (Analytics) | This user can only access standard analytics (default table), bot health monitoring, user journey tracking, and goal monitoring for informed decision-making.|
|Insights (Admin) | This user has holistic access to all bot-related data and analytics, enabling in-depth analysis.|
|Engagement (Admin) | This user can manage campaign deployment and audience configuration for effective engagement strategies.|
|Engagement (User) | This user can only schedule campaigns with simplified options, streamlining the campaign planning process.|


## Share bot access

To share bot access with other users, follow these steps:

1. Log on to [Yellow.ai platform](https://cloud.yellow.ai) and click the Access Control icon <img  src="https://i.imgur.com/FPcfiW9.png"  width="20"/>.

![](https://i.imgur.com/IlBIRqa.jpg)

2. Click **+Invite user**.
    - Enter the official **Email** address of the user.
    - Select your preferred role(s) in **Access control**. You can select more than one role for a user.

<img  src="https://i.imgur.com/cBnpqIe.png"  width="50%"/>        

c. Click **Save**. The invited user will receive an email with the bot access invitation.

***

## Accept bot invites

To accept or reject a bot access invitation, follow these steps:

1. Log on to [Yellow.ai platform](https://cloud.yellow.ai) and click **Notifications** icon at the top right corner.

    ![](https://i.imgur.com/XKd1KqL.png)
    
2. If you have received a bot invite to your email address, you will see a notification. Click on the bell icon > Green tick.

    ![](https://i.imgur.com/Jm0geRB.png)
    
3. Click on the drop-down to view the list of bots you have access to.

    <img  src="https://i.imgur.com/Gg7cHBz.png"  width="40%"/>


----

## View bot invites

:::note
Your own bots will not be visible in this section.
:::

In the **View bot invites** section, you can easily access and manage(Accept/Delete) pending bot invites sent by other team members. 
- You can explore and access different bots that belong to the Yellow.ai organization by searching for specific bots using their **bot ID, name, or sub ID**. 
- If you need access to a bot created by other members of the organization, you can search for that bot and click **Request access**. The **Super admin** will review the request and provide access to the bot if approved.

    ![](https://i.imgur.com/Pq5woJs.png)
    
- As a **Super admin/Admin**, you will see a list of pending bot invites. You can choose to either **Accept** the invitation to gain access to the bot or **Decline** it if you wish to decline the invitation.
- You will receive notifications regarding bot invites, making it convenient for you to respond promptly.

    ![](https://i.imgur.com/HgS5gtv.png)

----

## Manage bot access

With **Super Admin/Admin** privileges, you can monitor user interactions with your bot, including access requests, current access status, and access request history. Follow these steps:

1. Click the **Access control** icon. 
2. Navigate to the **Users** tab to view a list of users with access to the bot. You can manage individual user permissions by utilizing the menu options beside each user's name:
    - Click **Edit** for role adjustments 
    - Click **Delete** to remove bot access.

    ![](https://hackmd.io/_uploads/BJjloSHn2.png)
    
3. In the **Invites** tab, you can observe any pending access requests. This section provides information about the invitee, the person who extended the invitation, and the assigned role. 
    - To prompt the invitee to respond, you can opt to **Resend Email**. 
    - If you wish to withdraw the invitation, choose **Revoke**.
    
    ![](https://hackmd.io/_uploads/rkC5oBr33.png)
    
4. The **User Requests** tab displays details pertaining to users who have formally requested access to the bot.


> You can also find this information in the [Bot invites](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/add-bot-collaborators#view-bot-invites) section for your convenience.

----

## Approve published bots

> Directly publishing bots is **not supported**.


Once modifications are made to a bot, they need to be [published](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes#2-publish-bot). Subsequently, **Super Admins** are required to assess and authorize the request. 
To apporove the request, follow the steps: 

1. Click on your profile icon > **Bot publish approvals**. 

    <img src="https://i.imgur.com/hstIkXS.png" alt="drawing" width="100%"/>

2. **Accept** or **decline** approval requests for publishing bots in different environments.

    <img src="https://hackmd.io/_uploads/BynRJywc2.png" alt="drawing" width="80%"/>

 

