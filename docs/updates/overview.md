---
title: What's new in the Cloud Platform
sidebar_label: Latest releases
featured: true
---




![](https://i.imgur.com/hIGEIJL.png)

Stay up to date with the latest improvements and new capabilities. 

At Yellow.ai, we're continuously evolving — guided by your feedback, market needs, and emerging technologies — to make your experience more intuitive, efficient, and powerful. Explore what's new below.

***


## Introducing VoiceX: Experience more natural and human-like AI conversations **![](https://img.shields.io/badge/-New-00c853)**




We're introducing VoiceX, our next-generation Voice AI platform, built to enable seamless, real-time customer conversations.

* **Human-Like Interaction**: Powered by SmoothTalk AI and Sentiment AI, VoiceX eliminates robotic interactions, awkward pauses, and delays for a more fluid, human-like  dialogues.
* **Advanced Query Handling and Sentiment Analysis**: With ultra-low latency, VoiceX understands complex queries, detects sentiment, and delivers precise responses.
* **Industry Applications**: Ideal for **BFSI**, **healthcare**, **utilities**, and **retail** that demands intelligent, high-quality customer interactions.
 
[**📚 Full Documentation & Feature Guide**](https://docs.yellow.ai/docs/platform_concepts/VoiceX/VoiceXIntro)




----------

## **Analyze Updates**



### AI Insights for Debug logs & Comments in Topics **![](https://img.shields.io/badge/-Enhancement-ff9800)**


Developers or Admins can now access **Debug Logs** and **Comments** right alongside AI Insights — no more tab-switching!
Enhanced visibility into **Resolution Status** and User **Sentiment Reasoning** enables faster issue identification.

**[📘 Dive Into the Details](https://docs.yellow.ai/docs/platform_concepts/analyze/chat-logs#debug-conversations)**


### Filter conversations by Session ID **![](https://img.shields.io/badge/-Enhancement-ff9800)**


Within conversation logs, jump to any session instantly by [filtering via Session ID](https://docs.yellow.ai/docs/platform_concepts/analyze/chat-logs#filter-conversations) — no more endless clicking on *View more*.


###  Pre-enabled Knowledgebase article generation & Chat handoff nodes **![](https://img.shields.io/badge/-Enhancement-ff9800)**

**[Knowledgebase article generation](https://docs.yellow.ai/docs/platform_concepts/analyze/articlesuggestion)** and **[Chat handoff node](https://docs.yellow.ai/docs/platform_concepts/analyze/handoffnode)** are now enabled by default for all customers using Analyze.
No need to raise a devRev ticket — they're ready to use out of the box!

### Clutter-free & organized Knowledgebase article suggestions  **![](https://img.shields.io/badge/-Enhancement-ff9800)**

Improved logic ensures only the most relevant articles are shown (up to 50 for the top 15 topics). 
Outdated suggestions auto-archive after 2 months if not added to the KB, reducing noise.


###  Automatic merging of duplicate & similar topics  **![](https://img.shields.io/badge/-Enhancement-ff9800)**

* We've consolidated near-duplicate and highly similar topics to reduce clutter and provide a more accurate view. Expect a lower count of [unique topics](https://docs.yellow.ai/docs/platform_concepts/analyze/topics), but a higher quality of insights.
* Key metrics like Containment Rate and Resolution Rate have been recalibrated post-merge for more meaningful analysis.


### Introduced Labels for grouping chats ![](https://img.shields.io/badge/-Enhancement-ff9800)

Under **Analyse** > **Conversation logs** you can create and filter by labels to organize conversations more effectively.

**[🔍 Learn more](https://docs.yellow.ai/docs/platform_concepts/analyze/chat-logs#label-conversations)**

### Coming soon!


* **Simplified Topic UX**: We're working on a redesigned Topic Details Page and simplified terminology for a more intuitive experience. Stay tuned!


***

## **Insights Updates**


### Default timestamp set to conversation start time for CRA table ![](https://img.shields.io/badge/-Enhancement-ff9800)

> Path: **Insights** > **Data Explorer** > **Contained Resolution Analysis**

We've updated the **default timestamp filter** to conversation start time in the Contained Resolution Analysis (Analyze) table because Sessions can span multiple days. Example: A session that started on April 2 but was analyzed on April 3 will now appear under April 2, matching the actual session start date.

**Enhancement summary**: 
* **Before**: The default filter used the record insertion time (last 7 days) which led to misleading metrics. 
* **Now**: Filtering by conversation start time (last 7 days) ensures the data reflects when sessions actually began.

:::note

* The timestamp column is still available for filters, so existing custom queries won't break.
* Default grouping/summarization now uses conversation start time.
:::


### More colorful charts in insights data explorer

You asked for it—and we listened! Visualized charts in the Insights Data Explorer are no longer limited to shades of blue. We’ve introduced a more vibrant, multi-colored palette to help you better differentiate and interpret your data at a glance. Colors are now more varied; they are currently selected automatically by the system.

**[💡 Start exploring](https://docs.yellow.ai/docs/platform_concepts/growth/visualisation/visualization)**

***

## **Agent AI Updates (Automation)**

### Name change: Skill is now Workflow **![](https://img.shields.io/badge/-Enhancement-ff9800)**


We have changed the term **Skill** to **Workflow** across the Yellow.ai platform. All existing skills are now labeled as workflows in Dynamic chat node and Agent AI. 
You will see this updated terminology reflected consistently throughout the UI for a more intuitive experience.


***


## **Integration Updates**

### New integration: Zendesk Offline Ticketing **![](https://img.shields.io/badge/-New-00c853)**


We have introduced Zendesk Offline Ticketing in the Yellow.ai platform to ensure uninterrupted support, even when live agents are unavailable. This addition enables:

- **Seamless Ticket Creation** – Users can submit support requests, which are automatically converted into Zendesk tickets.  
- **Effortless Agent Access** – Agents can view and manage these tickets once available, ensuring timely follow-ups.  
- **Email-Based Responses** – Users receive updates and resolutions directly via email, enhancing the support experience. 

[**📘 Dive Into the Details**](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/zendesk-offline-ticketing)


### New integration: Workday  **![](https://img.shields.io/badge/-New-00c853)**


Easily integrate Workday Integration to your yellow.ai AI agent and perform **key Workday actions** such as: 
- View and apply for leaves
- Access payslips and tax documents
- Update personal and contact details
- Retrieve team member information
- Approve or reject leave and expense requests

**[🛠️ Everything You Need to Know](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/workday)**

### Camspay Integration: Added Create payment request action  **![](https://img.shields.io/badge/-Enhancement-ff9800)**


A new action, **[Create payment request](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/camspay#5-generate-camspay-payment-links-in-bot-conversation)** is now available. This enhancement solves use cases—such as retrieving payment status and displaying order details for successful or failed transactions.

:::note
The **Generate payment link** action in the Camspay integration node has been **deprecated**. We recommend migrating to the new action for future compatibility.

:::



## **Inbox Updates**

### Rich text formatting for email acknowledgements **![](https://img.shields.io/badge/-Enhancement-ff9800)**

> Path: **Settings** > **Inbox** > **Email settings** 

Personalize your default **[email acknowledgements](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/emailticketing)** with new formatting options: Bold, Italics, Strike-through, Underline, Code, and Paragraphs.


### Attachments icon in email tickets **![](https://img.shields.io/badge/-Enhancement-ff9800)**

To enhance clarity, an attachments icon is displayed on the [email ticket](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/tickets_intro#1-email-tickets-list-view) if the last message includes any attachments. This provides a quick visual cue for users to identify whether the previous message had any files attached, without needing to open the message thread.

### Improved email template structuring **![](https://img.shields.io/badge/-Enhancement-ff9800)**

You can structure your email content using three distinct variables:
- **Latest email** – The most recent message typed by the agent.
- **Email history** – The full thread of the conversation so far.
- **Signature** – The agent's email signature.

These variables are available under the Variables section and can be placed however you prefer within your email template.


[**📄 Continue reading**](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/emailtempalte)

### Real-Time updates on the active chats page for supervisors

Supervisors can now view live updates on the Active Chats page—no need to refresh.

> This is a gated feature. Contact support to enable it.

[**📚 Understand the feature**](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#12-active-chats)

### Agent signature field for email templates 

Admins can now add a fun or informal **Signature** for agents (e.g., *Real Game Changer*) under [Agent settings](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents#modifyadd-existing-agent-properties). Dynamic variable `{{agent.signature}}` can be used in [Email Templates](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/emailtempalte#step-4-add-dynamic-variables) to personalize outgoing emails with the agent’s signature.

### Role based access control(RBAC) within inbox 

Yellow.ai has introduced role-based access control (RBAC) within the Inbox platform to enhance data security and meet specific customer requirements.

[**Read more**](https://docs.yellow.ai/docs/platform_concepts/inbox/rbcaupcomingchanges)