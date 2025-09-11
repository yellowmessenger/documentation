---
title: April - June Q2 Releases
sidebar_label: April - June Q2 Releases
featured: true
---


## Introducing VoiceX: Experience more natural and human-like AI conversations **![](https://img.shields.io/badge/-New-00c853)**




We're introducing VoiceX, our next-generation Voice AI platform, built to enable seamless, real-time customer conversations.

* **Human-Like Interaction**: Powered by SmoothTalk AI and Sentiment AI, VoiceX eliminates robotic interactions, awkward pauses, and delays for a more fluid, human-like  dialogues.
* **Advanced Query Handling and Sentiment Analysis**: With ultra-low latency, VoiceX understands complex queries, detects sentiment, and delivers precise responses.
* **Industry Applications**: Ideal for **BFSI**, **healthcare**, **utilities**, and **retail** that demands intelligent, high-quality customer interactions.
 
[**📚 Full Documentation & Feature Guide**](https://docs.yellow.ai/docs/platform_concepts/VoiceX/VoiceXIntro)




----------

## **Knowledgebase**

### Conversational Knowledge Base (KB) **![](https://img.shields.io/badge/-Enhancement-ff9800)**

We have introduced Conversational KB, a smarter and more intuitive way to deliver knowledge-driven conversations in your AI agents!

**What is Conversational KB?**

Conversational KB is an intelligent AI-powered knowledge assistant that enables your AI agent to understand user intent, retain conversation context, and respond in a more human-like, interactive manner when answering queries from your knowledge base.

**What’s new?**

**Before:**

* KB responses were static, one-shot Q&A interactions.
* No context retention across user messages.
* Complex KB setup involving multiple methods (DC nodes, KB skills, prompt engineering, custom functions).
* Creating a conversational experience often required writing dozens of lines of prompt code and debugging issues in the setup.

**Now:**

* Unified and simplified KB setup: One clean interface to configure search instructions.
* Prompt complexity drastically reduced. Example: Recreating the Enbridge bot previously needed 74 lines of prompt code in a DC node. With Conversational KB, it now takes just 20 lines — cutting down time, effort, and complexity significantly.

**Key features**

* **Smarter conversations**: The agent can ask follow-up questions, clarifying questions and follow up with users, creating a much more natural, interactive experience..
* **Context retention:** It remembers what the user previously asked, enabling smoother, context-aware interactions without repetition.
* **Rich media responses**: Enhance answers with images and videos as part of the KB response.
* **Multi-step reasoning over retrieved content**: Agent can reason over the retrieved content, before sharing the final response
* **Multilingual support**: The AI agent can automatically respond in the user’s language.
* **Clickable hyperlinks**: Any links in responses are now displayed as hyperlinks.

[**Check out the documentation →**](https://docs.yellow.ai/docs/platform_concepts/AIAgent/kb-agent-config)


### Redesigned Knowledge Base: Faster Setup, Smarter Syncing, Better Organizing **![](https://img.shields.io/badge/-Enhancement-ff9800)**

We’ve completely revamped the Knowledge Base module to help you manage and deliver content more efficiently. Now enabled by default for all newly created bots, this update brings powerful new capabilities to streamline setup, syncing, and ongoing content management—ensuring your AI agents stay accurate and context-aware.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/KBonboarding.png)

**What’s new**:

* **Guided content onboarding**: Step-by-step onboarding for websites, document uploads, and third-party platforms.
* **Automated content syncing**: Schedule regular content updates using the built-in scheduler—no backend configuration required.
* **Smarter file management**: Organize your content with folders, subfolders, and perform bulk actions for quicker updates.
* **Metadata management**: Tag and filter files to improve search accuracy and make content more discoverable for your AI agent.
* **Independent publishing workflow**: Publish Knowledge Base updates without redeploying the entire bot.


[**Read the full documentation →**](https://docs.yellow.ai/docs/platform_concepts/studio/kb/overview)

------

## **Engage Updates**

###  Smarter WhatsApp Message Delivery with MM Lite API Integration  **![](https://img.shields.io/badge/-Enhancement-ff9800)**

We’ve added **MM Lite API** support to outbound campaigns, flows, and notification APIs.
This smart delivery feature uses Meta’s intelligence to decide the best time to send WhatsApp messages, improving your chances of reaching customers when they’re most likely to engage.

No change in how you build your campaigns — just choose the API reference while configuring WhatsApp campaign, Meta takes care of the rest.


#### How it works

* **Default**: Follows your [Org level setting](https://docs.yellow.ai/docs/platform_concepts/engagement/engage-settings#5-whatsapp-api-preferences-mm-lite-or-meta-cloud)
* **Customizable**: You can override this setting when configuring individual WhatsApp campaigns (Outbound, Flows, or Notification APIs).


#### Who gets it

* Available **only for customers onboarded to MM Lite**
* Works with **Meta-approved MARKETING templates**


#### How to enable MM lite

If your account is managed by Yellow\.ai:

* Your CSM will contact you
* Or, reach out to your CSM to request access

**For more details, refer to**
* [**Org level setting**](https://docs.yellow.ai/docs/platform_concepts/engagement/engage#set-mm-lite-preference-at-org-level)
* [**Outbound campaigns documentation**](https://docs.yellow.ai/docs/platform_concepts/engagement/engage)
* [**Flow campaign documentation**](https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign#1-whatsapp-channel-configuration)
* [**Notification API documentation**](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine#mmlite-preference-support-in-notifications-api-for-whatsapp)
* [**Notification API reports**](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine#4-reports)
   

### How to choose MM Lite for each WhatsApp campaign:

* [Flow campaign](http://localhost:3001/docs/platform_concepts/engagement/flows_campaign#1-whatsapp-channel-configuration)
* [Outbound campaign](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign#33-whatsapp-campaign)
* [Notification API](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine#mmlite-preference-support-in-notifications-api-for-whatsapp)



### Deprecated Engage Overview Page
The Engage Overview page has been deprecated as part of our ongoing efforts to streamline the platform. 

------

## **Analyze Updates**

### Redesigned Topic Details Page **![](https://img.shields.io/badge/-Enhancement-ff9800)**

We’ve introduced a refreshed design and improved terminology on the Topic Details page in the **Analyze** module to make insights easier to understand and act on.

![topics](https://cdn.yellowmessenger.com/assets/yellow-docs/gif.gif)

#### Updated Terminology for Clarity

1. To ensure consistency across the platform and enhance clarity, we've updated the following terms:
   * CR Rate → AI Resolution Rate
   * Containment Rate → Automation Rate
   * CR Opportunity → Automation Opportunity
2. Each term now includes a tooltip definition—simply hover to learn more.

#### Layout Enhancements for Better Usability

To ensure faster access to actionable insights and smoother navigation:
* KB Recommendations and the Manual Conversation Analysis CTA have been moved to the top of the page.


[**Continue reading →**](https://docs.yellow.ai/docs/platform_concepts/analyze/indepthinsights)



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

Under **Analyze** > **Conversation logs** you can create and filter by labels to organize conversations more effectively.

**[🔍 Learn more](https://docs.yellow.ai/docs/platform_concepts/analyze/chat-logs#label-conversations)**


***

## **Insights Updates**

### Access Control–Based Filters for Monitor and Reporting  **![](https://img.shields.io/badge/-Enhancement-ff9800)**

We’re making monitoring and reporting more secure and relevant by applying **access control–based filters**. Supervisors will now see only data related to their assigned teams across both the **Monitor** and **Analytics** sections.


#### **Monitor Section Updates**

* **Removed: Online Visitors**
  The *Online Visitors* metric has been removed from the Monitor view to streamline the dashboard.

* **Live Chats, Now Filtered**
  Live chats shown will now reflect only those conversations that fall under the supervisor’s assigned teams.

* **Updated: Email Trends UI**
  The filters in *Email Trends* have been refreshed to match the platform’s standard UI style. Functionality remains unchanged.

* **Team Tab, Now Scoped**
  The *Team* tab now displays only agents and groups belonging to the supervisor’s team, instead of showing all.


#### **Analytics Enhancements**

* **New Filters in Chat Analytics & Agent Performance**
  Supervisors now have access to filters in these sections. Data will be scoped to agents and groups in their own teams.

* **Improved Filter Key**
  A filter key has been added to clarify how team-specific filters work, ensuring that supervisors see only relevant data.


---


### Name change: Dataops is not renamed to Data export **![](https://img.shields.io/badge/-Enhancement-ff9800)**

Data Operations (DataOps) has been renamed to Data Export to better reflect its functionality.

### Sunset Notice: Clearing the Path for a Smarter Analytics Experience **![](https://img.shields.io/badge/-Enhancement-ff9800)**

As we prepare for a major revamp of our Analytics module, we’re streamlining the experience by removing a few legacy screens over the next two weeks. These updates are part of our broader effort to deliver cleaner insights, modern visualizations, and a more intuitive interface.

Here’s what’s changing:


#### Insights – User Journeys  **![](https://img.shields.io/badge/-Enhancement-ff9800)**

With the shift towards agentic AI workflows, this section—based on an older implementation—no longer aligns with our direction. We’re removing it, but don’t worry:

* **Top Flows Visited** and
* **Journey Completion Rate** (will still be available in the **Overview** dashboard)

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/userjourney.png)

#### Insights – Health

This screen is being taken down temporarily. In its place, we’re working on a refreshed **Alerts** tab to provide a more actionable view into bot performance and system health—coming soon.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/alerts.png)

#### Engage – User Data & User Trends

These screens haven’t seen active usage since January 2025 and aren’t tied to core workflows. To reduce clutter and focus on what matters, we’re phasing them out.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/user-data.png)


#### What’s Next?

We’re reimagining Analytics to support faster decision-making with smarter, cleaner, and more relevant insights. Stay tuned for upcoming releases with exciting upgrades.


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

### Automate Revamp: A Simpler, Smarter Way to Build Gen AI Agents **![](https://img.shields.io/badge/-Enhancement-ff9800)**

We’ve reimagined the AI agent setup experience to be more guided, efficient, and powerful—so you spend less time configuring and more time delivering intelligent conversations.



#### **What’s enhanced:**

#### Simplified Setup

Define your AI agent’s behavior using natural language. Just describe what the agent should do, and the system generates the logic for you—no technical configuration required.


#### Super Agents & Agents

Design large, multi-functional AI assistants with ease using a modular architecture.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/superagent.png)

* **Super Agent:** Acts as the master controller that defines your AI assistant’s overarching goal (e.g., customer support, travel, healthcare). It intelligently routes queries to the right sub-agent and manages the overall conversation flow.
* **Agents:** Independent, task-specific AI agents under the Super Agent. Each one handles a focused use case such as booking a flight, cancelling a ticket, or responding to knowledge-based queries. This structure keeps logic clean, reusable, and scalable.


#### Improved Conversation Design

Build smarter, more natural conversations using intuitive building blocks:

* **Start Triggers:** Automatically detect user intent and launch the right conversation.
* **Prompts:** Ask relevant questions, deliver precise answers, and guide users clearly.
* **Actions:** Perform tasks like capturing inputs, calling APIs, or handling fallback responses.
* **Variables:** Store, recall, and reuse user data throughout the interaction for a personalized experience.
* **Workflows:** Seamlessly connect to external systems and dynamically fetch or update data in real time.

[**Check out the setup guide →**](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona)

---


### PCI-Compliant Data Capture Now Supported in Question Nodes  **![](https://img.shields.io/badge/-Enhancement-ff9800)**
As part of our ongoing commitment to security and compliance, Yellow.ai now supports PCI-compliant data capture across multiple channels using question nodes, in addition to the previously supported voice input nodes. You can then use the API node to transfer PCI-sensitive information securely.

#### Key enhancements

* **PCI Classification for Inputs**
   Specific input fields—such as card number, CVV, PIN, and expiry—can now be marked as PCI data. Once classified, these inputs are automatically encrypted, logged securely, and handled per PCI DSS guidelines.
* **Multi-Channel Support**
   PCI input is now supported in question nodes, enabling secure data collection across Web, WhatsApp, and Voice channels.
* **API-Only Access for PCI Variables**
   PCI variables are securely stored and cannot be accessed via function or code nodes. They are available only through the API node. 
   <br/>
   PCI variables can be accessed only once via the API node. After a successful API call, the associated PCI data is securely deleted and can no longer be retrieved. This ensures sensitive information is never stored longer than necessary, maintaining strict compliance with PCI standards.


[**Learn how to capture PCI card data securely using Question node**](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-node-overview/question-node#collecting-pci-details-using-question-node)

[**Learn how to store PCI data using the API**](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes-overview/api-node)

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

### Monitor & Reporting Access Control Updates  **![](https://img.shields.io/badge/-Enhancement-ff9800)**

Supervisors now get scoped views across Monitor, Reporting, and Team tabs—ensuring visibility is limited to their assigned teams.

**What’s changed:**

* 🗑️ *Online Visitor* metric removed from the Monitor section
* 💬 *Live Chats*, *Team Tab*, and *Analytics* now show data only for supervisor-assigned teams
* ✉️ *Email Trends* filters updated to match the latest UI
* 📈 New filters + key added for *Chat Analytics* and *Agent Performance* views

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/monitor.png)

Cleaner data. Sharper control. Just the way it should be.


### Sender Email Logic Update in Email Ticketing  **![](https://img.shields.io/badge/-Enhancement-ff9800)**

We’ve cleaned up how the "From" address is picked when replying to tickets. Agents can also see clear From/To details while composing—no more guesswork.

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