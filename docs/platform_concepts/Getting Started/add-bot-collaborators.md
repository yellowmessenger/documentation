---
title: Manage your bot users
sidebar_label: Manage your bot users
keywords : [access control, bot invite, invite users, send bot invite, share bot access]
---

When creating an end-to-end bot flow, there may be instances where certain flows need to be handled by other teams or require assistance from other team members. To enable effective collaboration and allow your team to contribute to building an efficient bot, you can share bot access with other users. A notification is sent to the super admin when the invited users(collaborators) accept or reject your request. 
:::note
Only the **super admin** can provide bot access to other users. Access can be revoked at any moment on the **Access control** tab. 
:::

## User roles and access 

The following table outlines various roles along with the associated access privileges for the bot: 

| Role | Description | Modify access | 
|------ | --------- | --------- |
| Super Admin | The **Super Admin** is the user who creates the bot and holds the highest level of access. To create a bot and become a Super Admin, you must have an active **[subscription](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/upgrade#docusaurus_skipToContent_fallback)**. <br/> -For **enterprise customers** or users from **sales channels**, the bot and subscription are set up in the backend. <br/> -For **self-serve users**, the subscription is automatically created during sign-up.     |<ol><li> Can provide *Approver* and other accesses to others.  </li><li>  Can provide Approver access to an user without providing Developer access. </li><li> [Mask table columns](/docs/platform_concepts/studio/database#7-mask-database-columns) to restrict other users from viewing specific information such as PII.  </li><li>  Can delete accesses given to other users. </li></ol> | 
|Admin | This user has access to all modules and their components.| <ol><li> Can add/delete **Approver + Developer** and other roles. </li><li>  Cannot add Approver role when the Developer access is not provided. </li><li>  Cannot delete Approver role when Developer role exists.  </li></ol> | 
|Developer | This user has complete access to bot components but cannot edit bot configurations or invite other users to use the bot.| Developer access must be provided to add Approver. | 
|Database Viewer |  This user is limited to editing and viewing tables and their data in selected databases.|
| Approver | This user has complete access to bot components (as a Developer) and also has the ability to publish the bot from staging/development to production/live. | Developer + Approver | 
| Inbox (Admin) | This user can respond to assigned customer chats or emails and can view Monitor, Analytics (self-reports), and KB.| <ol><li>  Has access to all the Inbox features.  </li><li> Can add/delete any Inbox settings.  </li><li> Must have Developer/Admin access to use Automation and create flows. </li></ol>| 
|Inbox (Agent) | This user can respond to their assigned customer chats or emails and has viewing access to Monitor, Analytics (self-reports), and the KB.| 
|Insights (Analytics) | This user can only access standard analytics (default table), bot health monitoring, user journey tracking, and goal monitoring for informed decision-making.|
|Insights (Admin) | This user has holistic access to all bot-related data and analytics, enabling in-depth analysis.|
|Engagement (Admin) | This user can manage campaign deployment and audience configuration for effective engagement strategies.|
|Engagement (User) | This user can only schedule and view campaigns.|

:::note

The super admin and subscription owner can be different users. In that case, Only the subscription owner has permission to create bots. 

:::



## Share bot access

Sharing bot access allows you to grant view or edit permissions to other users. You have full control over which modules they can access. However, only admins or super admins can grant these permissions.

Each environment has a unique bot ID. When granting access, make sure you are in the correct environment for the bot. To provide access across all environments, you need to grant access individually in each one.

:::note
When you grant a user access to a specific environment (for example, staging), the access applies only to that environment.
For example:

* Access to staging does not include access to sandbox or production.
* Access to sandbox applies only to sandbox.
* Access to production applies only to production.

:::

To share bot access with other users, follow these steps:

1. In the Environment drop-down menu, select the environment for which you want to grant access.

   ![](https://i.imgur.com/Hr8CEdm.png)

2. On the left navigation bar, go to **Settings** and click on **Access Control**.

   ![Access Control](https://i.imgur.com/Ee4XEMJ.png)

2. Click **+Invite user**.
    - In **Email**, enter the official email address of the user.
    - In **Access control**, choose the [user role](#user-roles-and-access) you wish to assign. You can assign multiple roles as needed.

   <img  src="https://i.imgur.com/M4A1YJ5.png"  width="70%"/>        

3. Click **Save**. The invited user will receive an email with an invitation to access the bot.



***

### How Role-Based Access works for different environments?


Tier 1 (T1) and Tier 2 (T2) bots operate in dual environments, including Staging and Production or Development and Live. The access control for these environments is unified, meaning that access to Staging/Development bots will mirror the access control settings of the Live/Production bots for a given user.

Roles for adding collaborators to your bot remain consistent across all tiers. You can refer to [this link](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/add-bot-collaborators#user-roles-and-access) for information on available roles. However, the process of roles assigned differs for T1 and T2 bots, and this document outlines those distinctions.

**Collaborator(Role Access) management for T1 and T2 bots**

| Access provided in Live/Production | Access available in Development/Staging |
| ---------------------------- | ------------------------------- |
| Admin                        | Admin + Agent                   |
| Developer                    | Developer + Agent               |
| Approver                     | Approver                        |
| Admin + (Database Viewer/ Inbox (Admin)/Inbox (Agent)/ Insights (Analytics)/ Insights (Admin)/Engagement (Admin)/Engagement (User)) | Admin + Agent + (Database Viewer/ Inbox (Admin)/Inbox (Agent)/ Insights (Analytics)/ Insights (Admin)/Engagement (Admin)/Engagement (User)) |
| Developer + (Database Viewer/ Inbox (Admin)/Inbox (Agent)/ Insights (Analytics)/ Insights (Admin)/Engagement (Admin)/Engagement (User)) | Developer + Agent + (Database Viewer/ Inbox (Admin)/Inbox (Agent)/ Insights (Analytics)/ Insights (Admin)/Engagement (Admin)/Engagement (User)) |
| Admin + Developer + (Database Viewer/ Inbox (Admin)/Inbox (Agent)/ Insights (Analytics)/ Insights (Admin)/Engagement (Admin)/Engagement (User)) | Admin + Developer + (Database Viewer/ Inbox (Admin)/Inbox (Agent)/ Insights (Analytics)/ Insights (Admin)/Engagement (Admin)/Engagement (User)) |
| Database Viewer <br/> Inbox (Admin) <br/> Inbox (Agent) <br/> Insights (Analytics) <br/> Insights (Admin) <br/> Engagement (Admin) <br/> Engagement (User) | No Access |

**How to read the above table?**

For example, if the role of Admin/Developer is assigned in the Live/Production environment to a user, they will receive Admin + Agent access in both Live/Production and Staging/Development for that bot.

- Accesses such as Database Viewer, Inbox (Admin), Inbox (Agent), Insights (Analytics), Insights (Admin), Engagement (Admin), and Engagement (User) are given alone; in this case, those accesses will be present only in the Live environment. The Staging/Development bot will not have access to those roles.
- To provide combined access to Database Viewer, Inbox (Admin), Inbox (Agent), Insights (Analytics), Insights (Admin), Engagement (Admin), and Engagement (User) in both environments, combine the access with either Admin or Developer access.



***



## Accept bot invites

When bot admins provide you with access to a bot, you can accept the invitation as outlined below. Note that bot invites are specific to each environment; if you are given access to a Live or Production bot, you will not be able to access Staging bots.If you need access to other environments of the bot, your admin must provide access separately for each one.

1. To proceed with accepting the invite, you have **two** options available:

   A. If a bot admin has already provided access, you can accept the invitation received **via email**.

      ![image](https://imgur.com/uuQ5Msy.png)

   B. You can also accept through the Invite **Notifications** received on the cloud platform.

      ![image](https://imgur.com/wuICRTZ.png)
      

----

## View bot invites

:::note
Your own bots will not be visible in this section.
:::

In the **Profile settings > My invites** section, you can easily access and manage(Accept/Delete) pending bot invites sent by other team members. 
    ![image](https://imgur.com/bKcUeAz.png)

- You can explore and access different bots that belong to the Yellow.ai organization by searching for specific bots using their **bot ID, name, or sub ID**. 
- If you need access to a bot created by other members of the organization, you can search for that bot and click **Request access**. The **Super admin** will review the request and provide access to the bot if approved.    
- As a **Super admin/Admin**, you will see a list of pending bot invites. You can choose to either **Accept** the invitation to gain access to the bot or **Decline** it if you wish to decline the invitation.
- You will receive notifications regarding bot invites, making it convenient for you to respond promptly.

   ![image](https://imgur.com/IGabuxj.png)

----

## Manage bot access

With **Super Admin/Admin** privileges, you can monitor user interactions with your bot, including access requests, current access status, and access request history. Follow these steps:

1. Click the **Access control** icon. 
2. Navigate to the **Users** tab to view a list of users with access to the bot. You can manage individual user permissions by utilizing the menu options beside each user's name:
    - Click **Edit** for role adjustments 
    - Click **Delete** to remove bot access.

    ![image](https://imgur.com/2Tr97Dn.png)
    
3. In the **Invites** tab, you can observe any pending access requests. This section provides information about the invitee, the person who extended the invitation, and the assigned role. 
    - To prompt the invitee to respond, you can opt to **Resend Email**. 
    - If you wish to withdraw the invitation, choose **Revoke**.
    
    ![image](https://imgur.com/JJHQvEE.png)
    
4. The **User Requests** tab displays details pertaining to users who have formally requested access to the bot.


> You can also find this information in the [Bot invites](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/add-bot-collaborators#view-bot-invites) section for your convenience.

