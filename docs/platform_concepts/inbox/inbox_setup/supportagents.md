---
title: Manage support agents
sidebar_label : Add inbox support agents
---


- There are two major roles to access the inbox module, **Inbox Admin** and **Inbox Agent**. 
- **Inbox Supervisor** role can be added based on the industry requirement. 
- Incoming tickets (from the bot user) are assigned to the support agents.
- Admin can add support agents (Inbox agents) and an Agent can accept an invite sent by an admin to join as a support agent.
- Support agents will have access to the chats/tickets/analytics/performance to help understand and resolve queries in Inbox.
- Other modules in the yellow.ai platform such as **Studio**, **Channels**, etc. will not be visible to the Inbox Admin/Agent.




:::note
- **Bot admin** can give access to **Inbox Admin/Supervisor/Agent** to any user (or themselves).     
- If you have only **Admin** access, you can give yourself the **Inbox Agent/Admin** access to explore the Inbox functionalities. In the Users tab, edit your row to add **Inbox agent** access along with **Inbox admin** access.
![](https://i.imgur.com/ZFp5TUO.png)
- Users with **Inbox Admin** access can add **Inbox Agents/Supervisors**.
- Any user provided with **Inbox agent** invite can join as a support agent. 
:::


> Supporting document to add/accept bot access for different roles: [Access control](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/add-bot-collaborators).


------

## <a name="provideaccess"></a> 1. Provide inbox agent/admin access


To add **Inbox admin/agent**, follow the below steps: 

1. Open **Access Control** from the overview page. 

![](https://i.imgur.com/5ME81yH.png)

2. On **Users** tab, click **+Invite users**.
3. Enter **Email ID** and from the Access control dropdown menu select **Inbox (Agent)** and click **Invite**. 
    - Follow the same to add **Inbox (Admin)** access.

![](https://i.imgur.com/n5E7zhY.png)

#### Add Inbox supervisor to groups

4. **Supervisor** role can be added for agents.
    - You can make your agents supervisors to a group where they can monitor & supervise the group's incoming chats as well as the agents.
    - When you share **Inbox agent** access, you will get an additional option to make them the supervisor for a respective group.
    - From the dropdown, select the **Group** that you want them to be a supervisor.      
    Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups) to configure a Group.
    
<img src="https://i.imgur.com/RNsGTzx.png" alt="drawing" width="60%"/>    




5. You can open the **Invites tab** and **Resend/Revoke** the invite. 

![](https://i.imgur.com/Qd85Tlw.png)

6. Once the agent accepts the request, their information will be listed in the **Users tab**. 
7. You can **Edit** or **Delete** the users from the **User tab** (if required).

------



## <a name="acceptaccess"></a> 2. Accept invite to join as a Inbox agent/supervisor

To join the team as an Inbox agent, follow the steps below:

1. If you don't have an account on [Yellow.ai Platform](https://cloud.yellow.ai), you will receive an email from Yellow.ai to Sign Up on the platform and accept the invite to join the platform as a support agent.

**![](https://i.imgur.com/T1kacbw.png)**


2. If you already have an account on the Yellow.ai platform, check the notification icon on the overview page. 

![](https://i.imgur.com/q20mMo4.png)


3. Click on the tick mark to accept the invite.

![](https://i.imgur.com/CGK4W7h.png)





--------


## 3. Difference access available to Inbox roles

Following features are available for Inbox Admin/Supervisor/Agent roles :



| Module | Inbox Agent |  Inbox Supervisor   | Inbox Admin | 
| -------- | -------- | --- | -------- | 
| **Live chats**     ||||
|Chats assigned to the current agent|:heavy_check_mark:|  :heavy_check_mark: |  :heavy_check_mark:    |
|Chats raised in a particular group <br/>(When Supervisor should be assigned with groups)|:x:| :heavy_check_mark: | :heavy_check_mark:|
|Chats raised in all groups|:x:|:x:| :heavy_check_mark:|  |
|**All the Inbox Settings**|:x:|:x:|:heavy_check_mark:||
|**Email tickets**||
|Creating a manual ticket|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark: |
|Tickets assigned to the current agent|:heavy_check_mark:|:x:|:heavy_check_mark: |
|Tickets raised in a particular group|:heavy_check_mark:|:x:|:heavy_check_mark:|
|Tickets raised in all groups|:x:|:x:|:heavy_check_mark:|
|**Knowledge Base**||||
|Reading articles [Published]|:heavy_check_mark:|  :heavy_check_mark: |  :heavy_check_mark:    |
|Create, Edit & Delete articles|:x:|:heavy_check_mark: |:heavy_check_mark: |
|Publish, Unpublish articles|:x:|:heavy_check_mark:|:heavy_check_mark:||
|**Monitor & Analytics**||||
|Chats & tickets data assigned to current agents|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
|Chats, Tickets & Agents data for a particular group|:x:|:heavy_check_mark:|:heavy_check_mark:||
|All chats, tickets & agents performance data|:x:|:x:|:heavy_check_mark:|
|**Contacts**||||
|Create, Read, Update, and Delete contacts|:x:|:heavy_check_mark:|:heavy_check_mark:| 


