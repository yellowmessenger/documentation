---
title: Common inbox events
sidebar_label: Inbox events
---

:::note
Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub) to know how to enable inbox events on Studio. 
:::


| Inbox Event Name       | Channel        | Type        | Description                                                                                                   |
|-------------------------|-----------------|-------------|---------------------------------------------------------------------------------------------------------------|
| custom-field-update     | All live chat   | Inbox event | Triggered whenever a custom field is updated in a live chat.                                                 |
| note-update             | All live chat   | Inbox event | Triggered whenever an internal note is added in a live chat.                                                  |
| ticket-closed           | All live chat   | Inbox event | Triggered when a live chat is officially closed.                                                              |
| ticket-inactive         | All live chat   | Inbox event | Triggered when the customer is not responding back to the agent in a live chat. <br/> The timer for this inactivity has to be set inside Inbox settings.                            |        
| agent-inactive          | All live chat   | Custom event | Triggered when the agent is not responding back to the customer in a live chat.     <br/>  The timer for this inactivity has to be set inside Inbox settings.                           |
| ticket-assigned-bot     | All live chat   | Custom event | Triggered when a live chat is successfully assigned to an agent.   <br/>  This is a special event. Must be enabled via an API before using it in the flows.                                          |
| ticket-opened           | All live chat   | Custom event | Triggered when a live chat goes into the OPEN status, indicating the chat ticket was created when no agents were online. |
| ticket-queued           | All live chat   | Custom event | Triggered when a live chat goes into QUEUE status, indicating no agents were in available status or had a vacant concurrency slot to be assigned with this incoming chat. |
| ticket-missed           | All live chat   | Custom event | Triggered when a live chat goes into missed status.                                                           |
| ticket-created          | Email ticket    | Custom event | Triggered whenever an email ticket is created due to an incoming customer email.                               |
| ticket-status-change    | Email ticket    | Custom event | Triggered whenever the status of an email ticket is updated to one of the specified statuses (in-progress, resolved, pending, on-hold). |
| ticket-resolved         | Email ticket    | Custom event | Triggered when an email ticket is resolved.                                                                   |



