---
title: Bot access management
sidebar_label: Manage bot access/permissions
keywords : [access control, bot invite, invite users, send bot invite, share bot access]
---

When creating an end-to-end bot flow, there may be instances where certain flows need to be handled by other teams or require assistance from other team members. To enable effective collaboration and allow everyone to contribute to building an efficient bot, you can share bot access with other users. 

:::note
- Only the **super admin** has the privilege to share bot access with other users and receive notifications when the invited users accept or reject the bot access.
- **Collaborators** will have the access level provided by the super admin. If you wish to revoke access, you'll need to remove it separately.
:::


## Share bot access

To share bot access with other users, follow these steps:

1. Log on to [Yellow.ai platform](https://cloud.yellow.ai) and click the Access Control icon <img  src="https://i.imgur.com/FPcfiW9.png"  width="20"/>.

![](https://i.imgur.com/IlBIRqa.jpg)

2. Click **+Invite user**.
    - Enter the official **Email** address of the user.
    - Select your preferred role(s) in **Access control**. You can select more than one role for a user.

| Role | Description |
|------ | --------- |
| Super Admin | The owner of the bot has access to everything. <br/>Can provide *Approver* access to someone else. <br/>Can mask certain Database columns on UI. <br/>View data in the bot tables and can [mask columns of a table](/docs/platform_concepts/studio/database#7-mask-database-columns) to restrict others from viewing column data.|
|Admin | Has entire access to all the modules.|
|Developer | Has entire access to all the modules.|
|Database Viewer | Can only view the database.|
| Approver | Can publish bot from staging to production. An Approver should also have Developer access.|
| Inbox (Admin) | Can provide support for chat queries or tickets of the bot, and can view the analytics of his/her performance (First response time, number of tickets closed).|
|Inbox (Agent) | Agent can only respond to chats received from the user.|
|Insights (Analytics) | Has access to standard analytics, bot health monitoring, and user journey and goal tracking.|
|Insights (Admin) | Has access to all the available data and analytics.|
|Engagement (Admin) | Can send campaigns and configure audience.|
|Engagement (User) | Can only schedule campaigns.|

<img  src="https://i.imgur.com/cBnpqIe.png"  width="50%"/>
    
c. Click **Save**. The invited user will receive an email with the bot access invitation.

***

## Accept bot access invite

To accept a bot access invitation, follow these steps:

1. Log on to [Yellow.ai platform](https://cloud.yellow.ai) and click **Notifications** icon at the top right corner.
    ![](https://i.imgur.com/XKd1KqL.png)
2. If you have received a bot invite to your email address, then you should be able to view a notification. Click on the bell icon > Green tick.
    ![](https://i.imgur.com/Jm0geRB.png)
3. Click on the drop-down to view the list of bots you have access to.

    <img  src="https://i.imgur.com/Gg7cHBz.png"  width="50%"/>