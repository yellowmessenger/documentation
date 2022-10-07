---
id: inbox
title: Overview
description: How to add agents
featured: true
rank: 5
---

In this article, you will understand:
1. [Inbox and it's functionalities](#inbox)
2. [How to add and accept support agents?](#supportagents)
3. [What are the default agent statuses?](#agentstatus)
4. [Getting started with Inbox](#try)
5. [Inbox on Android & iOS](#and_ios)

---

## <a name="inbox"></a> 1. Inbox

**What is Inbox?**

Inbox is a unified omnichannel customer support helpdesk for agents to seamlessly manage customer queries across 35+ conversational channels. With an intuitive UX, INBOX enables agents to handle requests from a single dashboard in any language, offering complete customer history with superior context, reducing query resolution time.
It integrates and manages all customer information in one place, so that communication between businesses and their customers is efficient, relevant and personal.

**Where to find Inbox?**

- On the overview switcher, click **Inbox**.

![](https://i.imgur.com/Brz9Pb5.png)

**Functionalities**

There are multiple options available in the inbox module, they are listed below:


| Option | Description |
| -------- | -------- |
| **Monitor**     | Monitor your trends and team. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/monitor) to learn more.    |
|**Chats**| You can provide 24/7 live support to your customers from this section. Perform bulk actions, chat searches for chats on Whatsapp, instagram and many more. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat) to learn more. |
|**Tickets**|Resolve the created tickets, create new tickets (one by one or in bulk). Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/setupandconfig) to learn more.  |
|**Contacts**|Create a list of contacts. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/contacts) to learn more. |
|**Analytics and Reports**|Find single click dynamic charts and generate and download detailed reports about your business and team performance to take data driven business decisions. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/analytics/agents) to learn more.|
|**Knowledgebase**|Design a knowledgebase with information to resolve user queries quickly. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/knowledge-base/edit-publish-articles) to learn more. |
|**Settings**|Manage other settings from [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents). |


---------

## <a name="supportagents"></a> 2. Manage Support Agents

There are two kinds of roles to access the inbox module:
- **Inbox Admin**
- **Inbox Agent**

Incoming tickets (from the bot user) are assigned to the support agents.
Admin can add support agents and Agent can accept an invite sent by an admin to join as a support agent.


### 2.1 Add support agent on the platform

Support agents will have access to the chats/tickets/analytics/performance to help understand and resolve queries in inbox, follow the steps below to add support agents to the platform: 

> You must have Admin access to perform these steps.


1. Open **Access Control** from the overview page. 

![](https://i.imgur.com/5ME81yH.png)

3. On **Users** tab, click **+Invite users**.
4. Enter **email ID** and from the Access control dropdown menu select **Inbox (Agent)** and click **Invite**.

![](https://i.imgur.com/n5E7zhY.png)


5. You can open the Invites tab and resend/revoke the invite. 

![](https://i.imgur.com/Qd85Tlw.png)

6. Once the agent accepts the request, their information will be listed in the users tab. 
7. You can edit or delete the users (if required).

:::note
If you have only admin access, you can give yourself the Inbox (agent/Admin) access to explore the Inbox functionalities. In Users tab, edit your row to add **inbox agent** access along with admin access.

![](https://i.imgur.com/ZFp5TUO.png)

:::

### 2.2 Accept invite to join as a support agent

1. If you don't have an account on [Yellow.ai Platform](https://cloud.yellow.ai) you will recieve an email from Yellow.ai to Sign Up on the platform and accept the invite to join the platform as a support agent.

**![](https://i.imgur.com/T1kacbw.png)**


2. If you already have an account on the Yellow.ai platform, check the notification icon on the overview page. 

![](https://i.imgur.com/q20mMo4.png)


3. Click on the tick mark to accept the invite.

![](https://i.imgur.com/CGK4W7h.png)







-------------

## <a name="agentstatus"></a> 3. Default agent status

Inbox offers three default agent statuses that you can choose to define your availability. These statuses are the foundation based on which the incoming tickets are assigned to you. Ensure that you are indeed selecting the correct status at any time.
  
The default statuses are as follows:  



| Available | Busy | Away |Offline|
| -------- | -------- | -------- |----|
| The new incoming chats will only be assigned to agents who have set their status to Available. The chats will be assigned based on their concurrency.     | No new chat ticket will be assigned to agents who have set their status to be **Busy**. These chats will be queued in their respective group and then automatically assigned to agents when they make themselves Available. If the group queue is not enabled then these chats will be converted as Missed chats and stored in Inbox for reference. | No new chat ticket will be assigned to agents who have set their status to be **Away**. These chats will be queued in their respective group and then automatically assigned to agents when they make themselves Available.  If the group queue is not enabled then these chats will be converted as Missed chats and stored in your account for reference.  |When an agent logs out or goes away from the Inbox module, they’ll be treated as **Offline** and no new conversation will be assigned to that agent even if they are present inside the yellow.ai platform in any other module like Insights, Studio etc.|
|| Eg: When you are working on important issues/escalations, Documentation work, Internal meetings/discussions etc. | Eg: Recess, Bio break, Lunch break*   |

      
  
:::info

**Difference between Busy & Away**

On paper, **Busy** and **Away** are both identical in function but when you log out after changing your status to **Away**, your status will not be **Offline** it will remain as **Away**. This is to avoid missing out on the chats raised by the end users when all your agents have logged off within the working hours(example, for a lunch break).

> Consider a scenario wherein, all your agents break for lunch from 1 PM - 2 PM. If they are considered **Offline** during that time, the chats raised during the time will be completely missed unless Offline chats are enabled.  Even if they are enabled, those chats will be only be captured in Open status and will not be assigned to agents immediately.
Now if they are considered as **Away**, those chats will not be missed irrespective of Offline chats being enabled or not and the chats will be queued, then automatically assigned to agents after 2PM.
:::
  

**Track activity via. Reports**

The time spent by each agent in the different statuses will be tracked and made available in the agent activity report.  
> The **agent activity report** will not track the time spent in **Offline** status.
 
 The aggregated time spent by the agent i.e total Available/Busy/Away time spent by the agent per each day is also accessible  in the **agent performance report**.

To download Agent performance/ Agent activity report, follow the below steps:   

- Open **Inbox** > **Analytics**. Select **Reports** > **Chat reports**.
- Click **Generate** on **Agent activity** / **Agent performance report**.  

:::note
- If you have **Admin** access, you can filter the report for any agent and also for any given period of time.

![](https://i.imgur.com/hA0UYfj.png)

- Admin cannot change the status of any other agent.
- You can still manually transfer the chat to an agent who has set themselves to Busy / Away. This manual transfer operation will not conisder agent's current concurrency and will assign tickets even if their concurrency is full.
:::

- Once the reports are generated (status = success), click **Download**.

![](https://i.imgur.com/mywHQX1.jpg)


-------

## <a name="try"></a> 4. Try live agent module 


In case the user wants to talk to the live agent or sometimes it’s better for humans to take over for better customer experience then the bot should be able to transfer the user’s chat to a live agent and this can be achieved using the Inbox module and [raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#17-raise-ticket) action node.

-------

:::info

**Prerequisites to get started**

1. Get Inbox Agent Access.  
2. To configure the Journey to trigger live agent action, know more about [flows and NLU](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys).   
3. Understand the [raise ticket action node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) and its settings.
:::

**Create a flow**

On the [Studio](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys) page: 

-  Add [prompts](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) to collect information from users.
-  Create an Intent and utterances to it. For example, “Can I talk to Live agent?”, “Connect me to Customer Support”.
-  Connect to **Raise ticket** action node with the collected information.


![](https://i.imgur.com/87JDbHK.png)



### 4.1 Test live agent

To test the live agent transfer, you need to have access as an Inbox agent.

Once you have created the live agent flow, follow these steps to test it out:

1. Duplicate the tab or open the bot in another window (you will have two tabs opened).
2. In one of the tab open **Inbox**
3. Inside **Inbox**, open **Chats** > **My chats**.


:::note
Make sure you are **Available**. 
To check that click on the profile icon on the right corner, verify the status drop down. 
![](https://i.imgur.com/I7XrOLT.png)
:::

5. Go to the previous tab or window where the bot was opened and raise a ticket. After ticket being raised it will show the name of the agent connected

![](https://i.imgur.com/Qv7fbgh.png)


6. In the tab in which the inbox was opened, you will see a ticket raised.

![](https://i.imgur.com/khxffRF.jpg)

7. You can reply from here and see the chat happening real-time on the bot.

![](https://i.imgur.com/LEdGd40.png)


8. Then you can close the chat (and click **Resolve** to resolve the ticket) and test the message displayed after the chat has ended with the live agent. 

![](https://i.imgur.com/Gld3MHU.png)


---

## <a name="and_ios"></a> 4. Inbox on Android & iOS

Yellow.ai brings **YellowAI Partner** for agents to reduce query resolution time by responding and addressing queries in a matter of seconds on [Android](https://play.google.com/store/apps/details?id=ai.yellow.supportagent&hl=en&gl=US) and [iOS](https://apps.apple.com/tr/app/yellowai-partner/id1612610646).

Our innovative automated live chat technology seamlessly bridges the gap between traditional and modern communication channels, while driving agent productivity, automating L1 queries, and providing better interactions through voice and video calling features.

Agents can use YellowAI Partner to:

* Communicate with customers and serve them round the clock.
* Handle L1 L2 queries like a boss.
* Collaborate with teammates to address queries.
* Provide better interactions through voice and video calling features.
* Get empowered with access to the information.
* Get instant feedback from customers.
* AI Agent Workflows to automate agent actions.
* Push Notifications for when you are on a break, so you don't miss any tickets.

