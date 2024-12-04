---
title: Topic Analysis for 3rd party Inbox apps
sidebar_label: For 3rd party Inbox apps
---

> In this article, we refer to any applications other than Yellow.ai, such as third-party ticketing systems and support CRMs, as third-party apps.








## Containment rate for 3rd party apps 


Containment rate refers to the number of conversations handled solely by the  without agent intervention. There are two types of such chat transfers:

1. **Active handover**
    - In Yellow Inbox, chat is transferred to an agent with the event `agent-transfer`.
    - 3rd Party Inbox: AI-agent is paused, and chat is handed over to an agent with the event configured at the AI-agent-level.  

2. **Passive handover**
    - **Schedule callback**: AI-agent schedules a callback by collecting user details.
    - **Email**: AI-agent creates an email ticket.
    - **Ticket in 3rd Party System/Trigger Event**: AI-agent creates a support ticket in another system or triggers a custom event.


### Current limitation 

Yellow Inbox transfer are tracked with the `agent-transfer` event. But while using 3rd Party Inbox, the transfer depends on AI-agent-level configuration but that **is not currently trackable**.

### Suggested solution

With **Bot Developer** access, you can configure the **Chat Handoff** node. This node is typically connected to the node used to raise a ticket in a third-party system. When this node is encountered, the `agent-session` event is tracked in the **User Engagement Session Table**. This setup enables tracking of the number of sessions that end with a passive handoff to third-party ticketing systems.

![chat handoff](https://hackmd.io/_uploads/SyTN0XDb1x.png)

![image](https://hackmd.io/_uploads/ryo9AQvZJe.png)

In the example below, a successful action after raising a ticket in Zendesk connects to the Chat Handoff node. When a passive or offline ticket is created in Zendesk, agents respond via email, call, or other channels. Meanwhile, this handoff is tracked. The Chat Handoff node acts as an identifier for agent transfers, enabling you to track the containment rate effectively.

![example](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcsCC_H9djVb0DBv3R2mmRlu3MaPocs-mOtzxyBiTN61wnlFRsUSrFsGbJgir3VnEn7flwiTgzCjlkJ4K4JnC7IJ7CkJ--5dd5QH3KB2oGDDMjdr95mXAtaiEQrj2RupK6Lv3B2I_5tMuKE-zOzytyee-Q-?key=doHOJQMEdYvKlVOmPCYX8w)

------------


## Analyze transcripts in third-party apps

Offline tickets in third-party ticketing tools are created under the following conditions:

* Inboxes (Yellow.ai or third-party) are accessed outside business hours, when agents are unavailable.
* The inbox is not utilized, and only offline tickets are generated.

These interactions occur across various channels, including call, email, web chat, and SMS. However, transcripts from third-party ticketing tools are not accessible on the platform. As a result, only interactions between users and AI agents are available for analysis, limiting insights from agent-user conversations managed through third-party systems.

To address this, transcripts from third-party ticketing tools will be imported, analyzed, and displayed along with insights in the Analyze module.

**Flow**

Yellow.ai workflow:
* AI agent responds to user inquiries.
* Live agent takes over, pausing the AI agent.
* AI agent resumes after the live agent can no longer respond.

Third-party workflow:
* AI agent responds to user inquiries.
* An offline ticket is created, while the AI agent remains active.
* The chat continues with the AI agent, running in parallel with offline ticket management, with no defined session end time.

Once a handover to the third-party tool occurs, ticket details are received. Upon ticket closure (with no specific time constraint), the ticket is analyzed, and both the transcript and insights are displayed in the Analyze module.


![image](https://imgur.com/pOEUP2a.png)

![image](https://imgur.com/dbIOSsI.png)

