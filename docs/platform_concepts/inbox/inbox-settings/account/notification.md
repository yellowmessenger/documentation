---
title: Inbox notification settings 
sidebar_label : Notification settings 
---

In this article, you will learn: 
1. [How to enable inbox notifications?](#configure-inbox-notifications)
2. [List of available notifications alerts](#list-of-notifications)

------
All the Inbox updates will be sent to you based on your role (Inbox admin/agent). These alerts will be available on the **Notifications** tab, and they can be helpful to keep a close eye on Inbox activities. The type of notifications that must be displayed on this tab can be configured from the Notification settings.     

> Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox#--3-inbox-notifications) for more details on **Notifications**. 

![](https://i.imgur.com/5jrkOpD.png)


## <a name="1"></a> Configure inbox notifications 

Follow the below steps to configure notifications: 

1. Log in to the platform. Open **Settings**. 
2. Search and select **Inbox > Notification**. 
    ![image](https://imgur.com/c2rYNso.png)

3. You can configure notifications for AGENT, SUPERVISOR, and ADMIN. Click the respective tab. 
    - To configure Inbox admin notifications, go to the **Admin** tab. 
    ![](https://i.imgur.com/wmJnvfB.png)

4. Select **Enable notifications** toggle to receive alerts in the upper right corner of your screen.
5. **Notification tone** is the sound that the Inbox user will hear when an alert is received. This is a default notification tone, you do not have the option to select a different tone.  
6. You can configure alerts for **Ticket notifications** and **Chat notifications**. Double-click and open the required option. 
7. Select the **checkboxes** next to the updates to receive notifications about them. You can select all the updates.
    - In the below example, Priority updates, Tags related changed on the email tickets will not be notified/displayed on the notification tab. 
    ![](https://i.imgur.com/QBuPeKH.png)

8. Click **Save** and save the changes.    

:::note
Notifications are not in real-time, so delays are expected. When a new chat is assigned to an agent, it will be added to the agent's chat list, and a notification sound will play. This will only occur when the user is on the chats page and has configured the permissions.
:::


-------------


## <a name="2"></a> List of notifications 

You will start receiving notifications on the notifications tab. Following is a list of the common inbox notifications and their descriptions: 


| Notification                                                                                         | Description                                                                 |
|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **Chats**                                                                                            |                                                                             |
| ``{{agentName}}`` is assigned to chat ``#{{ticketId}}``                                              | When a new chat is assigned to an agent                                    |
| Ticket ``#{{ticketId}}`` was created and moved to ``{{status}}``                                     | When new chat tickets get created with a status other than assigned        |
| Ticket ``#{{ticketId}}`` was transferred from ``{{oldAgentName}}`` to ``{{newAgentName}}``           | When chat tickets are transferred between agents                           |
| ``{{requestedByName}}`` added ``{{agentName}}`` as a collaborator on chat ``#{{ticketId}}``          | When one agent adds other agents as collaborators on a chat                |
| ``{{unreadCount}}`` new messages on chat ``#{{ticketId}}``                                           | When new unread messages are received                                      |
| ``{{requestedByName}}`` added tag ``{{tag}}`` to chat ``#{{ticketId}}``                              | When new tags are added to chats                                           |
| ``{{requestedByName}}`` removed tag ``{{tag}}`` from chat ``#{{ticketId}}``                          | When tags are removed from chats                                           |
| Status updated from ``{{fromStatus}}`` to ``{{toStatus}}`` on chat ``#{{ticketId}}`` by ``{{requestedByName}}`` | When chat ticket status is updated                                  |
| ``{{requestedByName}}`` added an internal note to chat ``#{{ticketId}}``                             | When an internal note is added to the chat                                 |
| Chat ``#{{ticketId}}`` is auto-closed                                                                 | When chats are auto-closed                                                 |
| ``{{requestedByName}}`` removed collaborator ``{{agentName}}`` from chat ``#{{ticketId}}``           | When a collaborator is removed from a chat                                 |
| You have a new message on chat ``#{{ticketId}}``                                                     | When a new message is received on the chat                                 |
| ``{{reopenedBy}}`` reopened chat ``#{{reopenedFrom}}``, now available on chat ``#{{ticketId}}``      | When a chat ticket is reopened                                             |
| **Video call**                                                                                       |                                                                             |
| ``{{userName}}`` joined a video call on chat ``#{{ticketId}}``                                       | When someone joins a video call                                            |
| ``{{userName}}`` left a video call on chat ``#{{ticketId}}``                                         | When someone leaves a video call                                           |
| Video call started on chat ``#{{ticketId}}``                                                         | When a video call is initiated                                             |
| Video call ended on chat ``#{{ticketId}}``                                                           | When a video call ends                                                     |
| Video call recording for chat ``#{{ticketId}}`` is now available on ``{{url}}``                      | When call recording becomes available                                      |
| **Emails**                                                                                           |                                                                             |
| You have a new message on email ticket ``#{{ticketId}}``                                             | When a new message is received on the email thread                         |
| ``{{requestedByName}}`` added ``{{agentName}}`` as a collaborator to email ticket ``#{{ticketId}}``  | When an agent adds another as collaborator on email                        |
| ``{{requestedByName}}`` removed ``{{agentName}}`` as a collaborator from email ticket ``#{{ticketId}}`` | When a collaborator is removed from an email ticket                    |
| ``{{requestedByName}}`` added tag ``{{tag}}`` to email ticket ``#{{ticketId}}``                      | When a tag is added to an email ticket                                     |
| ``{{requestedByName}}`` removed tag ``{{tag}}`` from email ticket ``#{{ticketId}}``                  | When a tag is removed from an email ticket                                 |
| ``{{requestedByName}}`` updated priority of email ticket ``#{{ticketId}}`` to ``{{priority}}``       | When the priority of an email ticket is changed                            |
| ``{{requestedByName}}`` updated status of email ticket ``#{{ticketId}}`` to ``{{status}}``           | When the status of an email ticket is changed                              |
| ``{{requestedByName}}`` added an internal note to email ticket ``#{{ticketId}}``                     | When an internal note is added to an email ticket                          |
| ``{{slaType}}`` SLA is about to be breached for email ticket ``#{{ticketId}}``                       | SLA reminder notification                                                  |
| ``{{slaType}}`` SLA breach on email ticket ``#{{ticketId}}``                                         | SLA escalation notification                                                |
| ``{{agentName}}`` assigned to email ticket ``#{{ticketId}}``                                         | When a ticket is assigned to an agent                                      |
| Group ``{{group}}`` assigned to email ticket ``#{{ticketId}}``                                       | When a ticket is assigned to a group                                       |
| ``{{agentName}}`` from group ``{{group}}`` assigned to email ticket ``#{{ticketId}}``                | When a group agent is assigned an email ticket                             |
| Email ticket ``#{{ticketId}}`` was created                                                           | When a new email ticket is created                                         |
| ``{{msgCount}}`` new messages on email ticket ``#{{ticketId}}``                                      | When new messages are received on an email thread                          |

