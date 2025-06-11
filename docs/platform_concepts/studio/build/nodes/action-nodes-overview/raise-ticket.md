---
title: Raise ticket node
sidebar_label: Raise ticket
---

The **Raise a Ticket** node allows your AI agent to create a support ticket when a user's query requires human assistance or follow-up. It acts as a seamless bridge between the AI conversation and your support system.

If your team uses Yellow.ai's in-house support system, tickets will be raised in **Yellow.ai Inbox**. If you use a different live chat or support platform, you can integrate with Yellow.ai to raise and manage tickets directly in that system. 
[Here](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/overview#6-live-chat) is the list of third-party live chat integrations supported.


:::info
* Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox) to know more about adding live agents to Yellow.ai.
:::

   <img src="https://i.imgur.com/uANMMwJ.png" width="90%"/>

| **Field**                              | **Description**                                                                                                                |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Live chat agent**                    | Select the live chat account where the ticket should be created.                                                               |
| **Message after ticket assignment** \* | Enter the message to show the user after a ticket is assigned. You can use variables like `{{{agentName}}}` to personalize it. |
| **Name** \*                            | Choose the variable that holds the user's name.                                                                                |
| **Mobile**                             | Choose the variable that holds the user's mobile number.                                                                       |
| **Email**                              | Choose the variable that holds the user's email address. This is optional.                                                     |
| **Query** \*                           | Choose the variable that captures the user's message or issue.                                                                 |
| **Advanced options**                   | Enable to configure extra settings such as tags, priority, language translation, and custom fields.                            |
| **Custom fields**	                     | Use custom fields to collect extra information specific to your business needs.  You can configure [Custom Fields](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields) in Inbox. Select all the fields you want to include (using multi-select dropdown), and associate each with the relevant variable.  |

<img src="https://cdn.yellowmessenger.com/iE4ppldmrE7k1625673583277.png" alt="drawing" width="65%"/>



#### Advanced Options – Subfields

<center> <img src="https://i.imgur.com/tPS9R0J.png" width="50%"/> </center>

| **Field**                  | **Description**                                                           |
| -------------------------- | ------------------------------------------------------------------------- |
| **Tags**                   | Select [Tags](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/tags) to categorize the ticket for better filtering or reporting.   |
| **Group code**             | Choose a group code to route the ticket to a specific team or department. |
| **Priority**               | Set the priority level of the ticket (e.g., Low, Medium, High).           |
| **Translate user message** | Enable to auto-translate the user's message before it reaches the agent.  |
| **Voice ticket options**   | Options to customize how voice-based tickets are handled, if applicable. Available options: Voice call, SIP call and Auto start call  |


<!--
This node is used create a live chat request with basic or advanced scenarios such as **Working Hours**, **Agent Availability**, **Voice/Video calling**, etc.
-->

#### Raise ticket outputs 

**Option** | **Description**
---------- | ---------------
**Ticket Closed** | Add any node to perform the preferred action when a ticket is closed successfuly.
**Error** | Add any node to perform the preferred action when there's an error connecting to an agent.

   <img src="https://i.imgur.com/Fn7QnKd.png" alt="drawing" width="50%"/>




The response of a Raise ticket node:

```json
{
  "tags": [],
  "responded": false,
  "ticketType": "livechat",
  "ticketCsatScore": null,
  "agentCsatScore": null,
  "assignedByAdmin": false,
  "manualAssignment": false,
  "lastAgentMessageTime": null,
  "lastUserMessageTime": null,
  "lastBotMessageTime": null,
  "userActiveStatus": null,
  "agentActiveStatus": null,
  "replyCount": 0,
  "voiceCall": false,
  "sipCall": false,
  "agentCurrentHandlingTicketsCount": 0,
  "autoStartCall": false,
  "autoTranslate": false,
  "autoDetectLanguage": false,
  "_id": "6156df377b7bb14e16bae116",
  "botId": "YOUR_BOT_ID_HERE",
  "uid": "106265078787462873391306131746",
  "source": "yellowmessenger",
  "issue": "ISSUE_TITLE_HERE",
  "priority": "MEDIUM",
  "severity": "MEDIUM",
  "contact": {
    "phone": "1234567890",
    "name": "CUSTOMER_NAME",
    "email": "[community@yellow.ai](mailto:community@yellow.ai)"
  },
  "assignedTo": "community_yello_ai",
  "sessionId": "5b8a665e69dbc5c451d88bf0",
  "userLanguage": "en",
  "ticketId": "100001",
  "logs": [],
  "timestamp": "2021-10-01T10:13:11.657Z",
  "reassignmentLog": [],
  "collaborators": [
    {
      "_id": "6156df377b7bb15d9fbae11a",
      "username": "community_yello_ai",
      "xmppUsername": "user_1624003758958",
      "name": "yellow.ai Community"
    }
  ],
  "agentLanguage": "en",
  "status": "ASSIGNED",
  "assignedTime": "2021-10-01T10:13:11.695Z",
  "xmpp": "user_1624003758958"
}
```



#### Error handling

The output of a Raise Ticket Node dictates general behaviour for any error in creating a ticket. In most real life scenarios, it is preferred to show appropriate reasons to users as to why they cannot to an agent. 

:::note
Once any specific event is active and configured, the corresponding flow will be given preference. AI-agent is never paused unless a ticket is in ASSIGNED state (i.e. Agent is interacting with the user).
:::

Two steps to handle custom scenarios are as follows:
1. In [Events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub), activate the custom inbox event. Scenarios that can be handled:
  - All Available Agents Busy
  - All Available Agents Away
  - All Available Agents Offline
  - All Available Agents Limit Reached
  - Queue Not Enabled
  - Group Queue Not Enabled
  - Group Queue Limit Reached
  - Offline Ticketing Not Enabled
  - Offline Ticketing Not Enabled for Groups
  - Offline Ticket Queue Limit Reached

2.[ Build a flow with relevant events added in the Start Trigger](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#trigger-flow-using-event).

#### Working hours

If the AI-agent is supposed to respond with a different message outside of agent working hours, [Logic Node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) can be used. 

<img src="https://i.imgur.com/J3W0HWX.png" alt="drawing" width="70%"/>

:::note
The AI-agent default timezone is considered while evaluating whether a user is outside working hours.
:::

#### Auto-translate incoming chats

Inbox supports automatic translation, allowing agents to assist customers without requiring knowledge of the customer's language. Just enable `Translate User Message` in the raise ticket node configuration to use this feature.

<img src="https://i.imgur.com/frCvffs.png" alt="drawing" width="40%"/>