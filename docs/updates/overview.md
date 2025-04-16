---
title: What's new in the Cloud Platform
sidebar_label: Latest releases
featured: true
---

   ![](https://i.imgur.com/hIGEIJL.png)




Here’s how your release notes can be structured in a professional, concise, and informative manner, following the Chrome release style:  

---

## Terminology update: Skill is now Workflow <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/new.png" alt="drawing" width="5%"/>

We have now changed the term **Skill** to **Workflow** across the Yellow.ai platform. All existing skills are now labeled as workflows in Dynamic chat node and Agent AI. You will see this updated terminology reflected consistently throughout the UI for a more intuitive experience.



## Enhancement: Default Timestamp Filter for CRA Table in Data Explorer

We've updated the default timestamp filter in the Contained Resolution Analysis (Analyze) table because Sessions can span multiple days. Using insertion time sometimes led to misleading metrics. Filtering by conversation start time ensures the data reflects when sessions actually began.
* **Before**: The default filter used the record insertion time (last 7 days).
* **Now**: It uses the conversation start time (last 7 days).

> **Example**: A session that started on April 2 but was analyzed on April 3 will now appear under April 2, matching the actual session start date.

:::note

* The timestamp column is still available for filters, so existing custom queries won’t break.
* Default grouping/summarization now uses conversation start time.
:::




## VoiceX: The Future of Human-Like Voice AI

We’re introducing VoiceX, our next-generation Voice AI platform, built to enable seamless, real-time customer conversations.

* **Human-Like Interaction**: Powered by SmoothTalk AI and Sentiment AI, VoiceX eliminates robotic interactions, awkward pauses, and delays for a more fluid, human-like  dialogues.
* **Advanced Query Handling and Sentiment Analysis**: With ultra-low latency, VoiceX understands complex queries, detects sentiment, and delivers precise responses.
* **Industry Applications**: Ideal for **BFSI**, **healthcare**, **utilities**, and **retail** that demands intelligant, high-quality customer interactions.
 
> Learn more [here](https://docs.yellow.ai/docs/platform_concepts/VoiceX/VoiceXIntro).

## Zendesk Offline Ticketing Now Available for Uninterrupted Customer Support

We have introduced Zendesk Offline Ticketing in the Yellow.ai platform to ensure uninterrupted support, even when live agents are unavailable. This addition enables:

- **Seamless Ticket Creation** – Users can submit support requests, which are automatically converted into Zendesk tickets.  
- **Effortless Agent Access** – Agents can view and manage these tickets once available, ensuring timely follow-ups.  
- **Email-Based Responses** – Users receive updates and resolutions directly via email, enhancing the support experience. 

> Learn more [here](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/zendesk-offline-ticketing).


## Workday Integration is Now live with your AI Agent

This integration allows you to perform key Workday actions from checking leave balances to updating employee records.

### Actions you can perform:

- View and apply for leaves
- Access payslips and tax documents
- Update personal and contact details
- Retrieve team member information
- Approve or reject leave and expense requests


---

## Added "Create payment reques"t in Camspay integration and deprecated Generate payment link

The `Generate payment link` action in the Camspay integration node has been deprecated.

A new action, [Create payment request](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/camspay#5-generate-camspay-payment-links-in-bot-conversation), is now available. This enhancement is to solve additional use cases—such as retrieving payment status and displaying order details for successful or failed transactions.
We recommend migrating to the new action for improved reliability and future compatibility.

--- 

