---
title: What's new in the Cloud Platform
sidebar_label: Latest releases
featured: true
---

![](https://i.imgur.com/hIGEIJL.png)

## VoiceX, the future of human-like voice AI 

> New feature: **VoiceX** <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/new.png" alt="drawing" width="5%"/> 


We’re introducing VoiceX, our next-generation Voice AI platform, built to enable seamless, real-time customer conversations.

* **Human-Like Interaction**: Powered by SmoothTalk AI and Sentiment AI, VoiceX eliminates robotic interactions, awkward pauses, and delays for a more fluid, human-like  dialogues.
* **Advanced Query Handling and Sentiment Analysis**: With ultra-low latency, VoiceX understands complex queries, detects sentiment, and delivers precise responses.
* **Industry Applications**: Ideal for **BFSI**, **healthcare**, **utilities**, and **retail** that demands intelligant, high-quality customer interactions.
 
[**📚 Full Documentation & Feature Guide**](https://docs.yellow.ai/docs/platform_concepts/VoiceX/VoiceXIntro)

## Zendesk Offline Ticketing now available for uninterrupted customer support

> New feature: **Integrations** > **Zendesk Offline Ticketing** <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/new.png" alt="drawing" width="5%"/> 

We have introduced Zendesk Offline Ticketing in the Yellow.ai platform to ensure uninterrupted support, even when live agents are unavailable. This addition enables:

- **Seamless Ticket Creation** – Users can submit support requests, which are automatically converted into Zendesk tickets.  
- **Effortless Agent Access** – Agents can view and manage these tickets once available, ensuring timely follow-ups.  
- **Email-Based Responses** – Users receive updates and resolutions directly via email, enhancing the support experience. 

[**📘 Dive Into the Details**](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/zendesk-offline-ticketing)


## Workday integration is live with your AI agent

> New feature: **Integration** > **Workday** <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/new.png" alt="drawing" width="5%"/> 


Easily integration Workday Integration to your yellow.ai AI agent and perform **key Workday actions** such as: 
- View and apply for leaves
- Access payslips and tax documents
- Update personal and contact details
- Retrieve team member information
- Approve or reject leave and expense requests

**[🛠️ Everything You Need to Know](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/workday)**


----------

## Search conversations by Session ID

> Enhancement: **Analyse** 


Jump to any session instantly by searching via Session ID — no more endless clicking on *View more*.

## Debug logs & comments with AI insights

> Enhancement:  **Analyze** > **Topics** 

Developers can now access **Debug Logs** and **Comments** right alongside AI Insights — no more tab-switching!
Enhanced visibility into **Resolution Status** and User **Sentiment Reasoning** enables faster issue identification.

**[📘 Dive Into the Details](https://docs.yellow.ai/docs/platform_concepts/analyze/chat-logs#debug-conversations)**


## Conversation start time is the default timestamp filter for CRA table 

> Enhancement: **Insights** > **Data Explorer** > **Contained Resolution Analysis**

We've updated the **default timestamp filter** to conversation start time in the Contained Resolution Analysis (Analyze) table because Sessions can span multiple days. Example: A session that started on April 2 but was analyzed on April 3 will now appear under April 2, matching the actual session start date.

**Enhancement summary**: 
* **Before**: The default filter used the record insertion time (last 7 days) which led to misleading metrics. 
* **Now**: Filtering by conversation start time (last 7 days) ensures the data reflects when sessions actually began.

:::note

* The timestamp column is still available for filters, so existing custom queries won’t break.
* Default grouping/summarization now uses conversation start time.
:::


## Create payment request action added in Camspay integration 

> Enhancement: **Integrations** > **Camspay**

A new action, [Create payment request](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/camspay#5-generate-camspay-payment-links-in-bot-conversation) is now available. This enhancement solves use cases—such as retrieving payment status and displaying order details for successful or failed transactions.

:::note
The **Generate payment link** action in the Camspay integration node has been **deprecated**. We recommend migrating to the new action for future compatibility.

:::

## Rich text formatting for email acknowledgements

> Enhancement: **Settings** > **Inbox** > **Email settings** 

Personalize your default **email acknowledgements** with new formatting options: Bold, Italics, Strike-through, Underline, Code, and Paragraphs.


## Skill is now Workflow 

> UI terminology update: **Automation** 

We have changed the term **Skill** to **Workflow** across the Yellow.ai platform. All existing skills are now labeled as workflows in Dynamic chat node and Agent AI. 
You will see this updated terminology reflected consistently throughout the UI for a more intuitive experience.

## Multiple improvements in Analyze

### Labels for grouping chats

Under **Analyze** > **Conversation logs** you can create and filter by labels to organize conversations more effectively.


### Default features 

**Knowledge Base Article Generation** and **Chat Handoff Node** are now enabled by default for all customers using Analyze.
No need to raise a devRev ticket — they’re ready to use out of the box!

### Smarter KB article suggestions

Improved logic ensures only the most relevant articles are shown (up to 50 for the top 15 topics).
Outdated suggestions auto-archive after 2 months if not added to the KB, reducing noise.


###  Merging duplicate & similar topics

* We've consolidated near-duplicate and highly similar topics to reduce clutter and provide a more accurate view. Expect a lower count of unique topics, but a higher quality of insights.
* Key metrics like Containment Rate and Resolution Rate have been recalibrated post-merge for more meaningful analysis.


## **Coming soon**: Simplified Topic UX 

> UI update: **Analyze** > **Topics** 

We’re working on a redesigned Topic Details Page and simplified terminology for a more intuitive experience. Stay tuned!
