---
id: inbox
title: Overview
description: How to add agents
featured: true
rank: 5
---


In this article, you will understand:
1. [Inbox overview](#inbox)
    - [Where to find Inbox?](#i1)
    - [What are the functionalities of Inbox?](#i2)
    - [Where to find all the notifications/updates?](#i3)
    - [Notifications in Inbox](#i4)
    - [How does the Orchestrator bot feature work in Inbox?](#i5)
2. [Try a demo of the live agent module (understand how inbox works)](#try)
    - [Create a flow in Studio to raise a ticket](#try1)
    - [Connect to an Inbox agent and test your Inbox](#try2)
3. [How to provide/get access to become an Inbox live agent (support agent)?](#supportagents)
4. [What are the default agent statuses?](#agentstatus)



<iframe width="560" height="315" src="https://www.youtube.com/embed/UXM2-18QLds" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen></iframe>


:::tip
You can access Inbox using the keyboard shortcut `g` + `i`.
:::

---

## <a name="inbox"></a> 1. Inbox

### 1.1 Inbox overview

Inbox is a unified omnichannel customer support helpdesk for agents to seamlessly manage customer queries across 35+ conversational channels. With an intuitive UX, INBOX enables agents to handle requests from a single dashboard in any language, offering complete customer history with superior context, and reducing query resolution time.
It integrates and manages all customer information in one place so that communication between businesses and their customers is efficient, relevant, and personal.

----
#### <a name="and_ios"></a>  Inbox support on Android & iOS

Yellow.ai brings **YellowAI Partner** for agents to reduce query resolution time by responding and addressing queries in a matter of seconds on [Android](https://play.google.com/store/apps/details?id=ai.yellow.supportagent&hl=en&gl=US) and [iOS](https://apps.apple.com/tr/app/yellowai-partner/id1612610646). Our innovative automated live chat technology seamlessly bridges the gap between traditional and modern communication channels, while driving agent productivity, automating L1 queries, and providing better interactions through voice and video calling features.

Agents can use YellowAI Partner to:

* Communicate with customers and serve them round the clock.
* Handle L1 L2 queries like a boss.
* Collaborate with teammates to address queries.
* Provide better interactions through voice and video calling features.
* Get empowered with access to the information.
* Get instant feedback from customers.
* AI Agent Workflows to automate agent actions.
* Push Notifications for when you are on a break, so you don't miss any tickets.

-----

### <a name="i1"></a>  1.2 Navigate to Inbox

To open Inbox, follow the steps below: 

1. Log in to [yellow.ai](https://cloud.yellow.ai/auth/login) platform.
2. On the overview switcher, click **Inbox**.

![](https://i.imgur.com/Brz9Pb5.png)


----

### <a name="i2"></a>  1.3 Functionalities of Inbox

There are multiple options available in the inbox module, they are listed below:


| Section | Description |
| -------- | -------- |
| **Monitor**     | Monitor chat and email trends and team details. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/monitor) to learn more.    |
|**Chats**| Provide 24/7 live support to your customers from this section. Perform bulk actions, and chat searches for chats on the web, Whatsapp, Instagram, and other channels. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat) to learn more. |
|**Tickets**| Monitor and resolve email tickets, create new tickets (manually/in bulk), and other no-code email ticketing functionalities. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/setupandconfig) to learn more.  |
|**Contacts**| Create a list of contacts and send pro active notifications(emails) for your brand. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/contacts) to learn more. |
|**Analytics and Reports**|Find single-click dynamic charts and generate and download detailed reports about your business and team performance to take data-driven business decisions. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/analytics) to learn more.|
|**Knowledgebase**|Design a knowledgebase with information to resolve user queries quickly. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/knowledge-base/kboverview) to learn more. |
|**Settings**|Manage Inbox by enabling the required functions from settings. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents) for more details. |

-------

### <a name="i4"></a>  1.4 Notifications

Based on the [access](#supportagents) you have (Inbox Admin, Supervisor, or Agent) you will get notified about all the actions on your Inbox. 

1. Click the notification icon in the upper right corner of your screen. You can find all the updates and alerts listed on the **Notification** tab. 

![](https://i.imgur.com/6hs6g7s.png)

2. On clicking any of the notifications, you will be directed to the respective page.
    - For example, clicking *New chat #100596 was created with status set to ASSIGNED* will direct you to the chat page of #100596.

3. Click **See all notifications**, you will be redirected to the **Notifications** page.
    - Click **All** (selecting this will display all the notifications), and you can select to see **Read** notifications/ **Unread** notifications from the list.
    - If you click **Mark all as read**, all the notifications will be marked as read. 
    - You can click the blue dot next to the notifications to change the read status of it. Read notifications can be marked as unread and vice versa. 
    - Click **Go to settings** to configure notification options. 

![](https://i.imgur.com/3KOSLYg.png)


:::note
You can configure notifications on the settings page. Click [here](./inbox-settings/account/notification.md) to learn more. 
:::



### <a name="i5"></a> 1.5 Orchestrator bot feature 

With the orchestrator bot feature, you can create a parent bot and add child bots(available bots in the same subscription) to it.   
When **Unify inbox to all child bots** is selected, support tickets received by the child bots will be available in the parent bot's Inbox. You can have a unified inbox to reply to all customer queries. 

![](https://i.imgur.com/WsKX6Ph.png)

---------



## <a name="try"></a> 2. Try the live agent module 


While conversing with the bot, if the user prefers chatting with a live agent, humans can take over to provide a better customer experience.
To do this, the bot should transfer the user’s chat to a live agent and this is achieved by using the Inbox module and [raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#17-raise-ticket) action node.
1. **Studio** flow must be configured:
    - To identify when a bot user prefers talking with a live agent. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) to know more about **flows and NLU**.
    - To create a ticket when the intent to *chat with an agent* is identified. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) to understand the **Raise ticket** action node and its settings.

2. **Inbox** must be configured:
    - To receive tickets. 
    - To allow agents to converse with the bot users by providing [Inbox agent access](#provideaccess)

-----

### <a name="try1"></a> 2.1 Create a flow to raise a support ticket 

To configure **Raise ticket** node on the [Studio](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys)'s flow page, follow the steps below: 

1. Create an [Intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents) and add [utterances](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#24-add-utterance) to identify the flow that connects a user to a live inbox agent. 
    - Utterance examples, “Can I talk to a Live agent?”, and “Connect me to Customer Support”.
2. Add [prompts](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/) to collect information(name and query) from the users. Store the details in the respective [variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#hed-2). 
3. Connect the flow to **Raise ticket action node** (pass the collected information). Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) to learn about the action node. 
4. Advanced options can be enabled and optional fields can be entered. 


![](https://i.imgur.com/ZXdujQO.png)


---------

### <a name="try2"></a> 2.2 Demo of ticket creation on Inbox

> To test the live agent transfer, you need to have Inbox agent access.

Once you have created the live agent flow, follow these steps to test how tickets get created and get assigned to inbox agents:

1. Duplicate the tab or open the bot in another window (you will have two tabs opened).
2. In one of the tabs open **Inbox**.
3. Inside **Inbox**, open **Chats** > **My chats**.


:::note
Make sure you are **Available**. 
To check that click on the profile icon on the right corner, and verify the status drop-down. 

<img src="https://i.imgur.com/I7XrOLT.png" alt="drawing" width="70%"/>    
:::

4. Go to the previous tab or window where the bot was opened and raise a ticket. After the ticket is raised, the name of the agent connected will be displayed.

<img src="https://i.imgur.com/Qv7fbgh.png" alt="drawing" width="90%"/>    



5. On the tab in which the inbox is opened, you will see a ticket raised (it will be displayed as a message on Chat/Tickets page).

![](https://i.imgur.com/khxffRF.jpg)

6. You can reply from your chat screen. This is a real-time conversation on the bot.

![](https://i.imgur.com/LEdGd40.png)


7. You can close the chat (and click **Resolve** to [resolve the ticket](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatscreen/#3-resolve-or-transfer-tickets)) and test the message displayed after the chat has ended with the live agent. 

<img src="https://i.imgur.com/Gld3MHU.png" alt="drawing" width="50%"/>    


--------

## <a name="supportagents"></a> 3. Manage support agents

- There are two roles to access the inbox module, **Inbox Admin** and **Inbox Agent**
- Incoming tickets (from the bot user) are assigned to the support agents.
- Admin can add support agents and Agent can accept an invite sent by an admin to join as a support agent.
- Support agents will have access to the chats/tickets/analytics/performance to help understand and resolve queries in Inbox (other modules such as Studio, Channels, etc. will not be visible to the inbox admin/agent).
- For supporting documents to add/accept bot access, click [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/add-bot-collaborators).

------

### <a name="provideaccess"></a> 3.1 Provide inbox agent/admin access


To add **inbox admin/agent**, follow the below steps: 

1. Open **Access Control** from the overview page. 

![](https://i.imgur.com/5ME81yH.png)

2. On **Users** tab, click **+Invite users**.
3. Enter **email ID** and from the Access control dropdown menu select **Inbox (Agent)** and click **Invite**. 
    - Follow the same to add Inbox (Admin) access.

![](https://i.imgur.com/n5E7zhY.png)

4. **Supervisor** role can be added for agents.
    - You can make your agents supervisors to a group where they can monitor & supervise the group's incoming chats as well as the agents.
    - While you share inbox agent access, you will get an additional option to make them supervisor for a group.
    - From the dropdown, select the group that you want them to be a supervisor.  
    - Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups) to configure a group.
    
<img src="https://i.imgur.com/RNsGTzx.png" alt="drawing" width="60%"/>    




5. You can open the **Invites tab** and resend/revoke the invite. 

![](https://i.imgur.com/Qd85Tlw.png)

6. Once the agent accepts the request, their information will be listed in the user's tab. 
7. You can edit or delete the users (if required).

------

### <a name="acceptaccess"></a> 3.2 Accept invite to join as a support agent

To join the team as an inbox agent, follow the steps below:

1. If you don't have an account on [Yellow.ai Platform](https://cloud.yellow.ai) you will receive an email from Yellow.ai to Sign Up on the platform and accept the invite to join the platform as a support agent.

**![](https://i.imgur.com/T1kacbw.png)**


2. If you already have an account on the Yellow.ai platform, check the notification icon on the overview page. 

![](https://i.imgur.com/q20mMo4.png)


3. Click on the tick mark to accept the invite.

![](https://i.imgur.com/CGK4W7h.png)



:::note
- Only the user with bot **Admin** access can provide **Inbox admin** / **Inbox agent** access to any user (or themselves).
- If you have only admin access, you can give yourself the Inbox (agent/Admin) access to explore the Inbox functionalities. In the Users tab, edit your row to add **inbox agent** access along with admin access.
![](https://i.imgur.com/ZFp5TUO.png)
- Users with **Inbox admin** access can add **Inbox agents/supervisors**.
- Any user provided with **Inbox agent invite** can join as a support agent. 
:::



-------------

## <a name="agentstatus"></a> 4. Default agent status

> An admin cannot change the status of any agents.


Inbox offers three default agent statuses that you can choose to define your availability. These statuses are the foundation based on which the incoming tickets are assigned to you. Ensure that you are indeed selecting the correct status at any time.


  
The default statuses are as follows:  



| Status | Description| 
| -------- | -------- | 
| **Available**     | The new incoming chats will only be assigned to agents who have set their status to Available. The chats will be assigned based on their concurrency.     |      
|**Busy**|No new chat ticket will be assigned to agents who have set their status to be Busy. These chats will be queued in their respective group and then automatically assigned to agents when they make themselves Available. If the group queue is not enabled then these chats will be converted as Missed chats and stored in Inbox for reference. Eg: When you are working on important issues/escalations, Documentation work, Internal meetings/discussions, etc.|
|**Away**|No new chat ticket will be assigned to agents who have set their status to be Away. These chats will be queued in their respective group and then automatically assigned to agents when they make themselves Available. If the group queue is not enabled then these chats will be converted as Missed chats and stored in your account for reference. Eg: Recess, Bio break, Lunch break.|
|**Offline**|When an agent logs out or goes away from the Inbox module, they’ll be treated as Offline and no new conversation will be assigned to that agent even if they are present inside the yellow.ai platform in any other module like Insights, Studio, etc.|


--------

      
  
### 4.1 Difference between Busy & Away

On paper, **Busy** and **Away** are both identical in function but when you log out after changing your status to **Away**, your status will not be **Offline** it will remain as **Away**. This is to avoid missing out on the chats raised by the end users when all your agents have logged off within working hours (for example, for a lunch break).
- Admins can manually transfer the chat to an agent who has set themselves to Busy / Away. This manual transfer operation will not consider the agent's current concurrency and will assign tickets even if their concurrency is full.


#### Example

Consider a scenario wherein, all your agents break for lunch from 1 PM - 2 PM. If they are considered **Offline** during that time, the chats raised during the time will be completely missed unless Offline chats are enabled.  Even if they are enabled, those chats will only be captured in Open status and will not be assigned to agents immediately.
Now if they are considered as **Away**, those chats will not be missed irrespective of whether Offline chats are enabled or not, and the chats will be queued, then automatically assigned to agents after 2 PM.

  
------

### 4.2 Track activity via. Reports

The time spent by each agent in the different statuses will be tracked and made available in the **Agent activity report**. The aggregated time spent by the agent i.e total Available/Busy/Away time spent by the agent per each day is  accessible in the **Agent performance report**.

To download the Agent performance/ Agent activity report, follow the below steps:   

1. Open **Inbox** > **Analytics**. Select **Reports** > **Chat reports**.
2. Click **Generate** on **Agent activity** / **Agent performance report**.  
3. Once the reports are generated (status = success), click **Download**.

For a detailed article, click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports). 

-------
