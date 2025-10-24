---
title: April - June Q2 Releases
sidebar_label: April - June Q2 Releases
featured: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<div style={{
  border: '1px solid var(--ifm-color-emphasis-200)',
  borderRadius: '12px',
  padding: '1.5rem',
  background: 'var(--ifm-color-background-surface)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
}}>
  <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
    <span style={{fontSize: '1.5rem', marginRight: '0.5rem'}}>🧠</span>
    <span style={{
      background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
      color: 'white',
      padding: '0.25rem 0.75rem',
      borderRadius: '12px',
      fontSize: '0.75rem',
      fontWeight: 'bold'
    }}>ENHANCEMENT</span>
  </div>
  <h3 style={{marginBottom: '0.5rem'}}>Conversational KB</h3>
  <p style={{color: 'var(--ifm-color-text-secondary)', marginBottom: '1rem'}}>
    AI-powered knowledge assistant with context retention and smart conversations
  </p>
  <a href="#conversational-knowledge-base" style={{
    color: 'var(--ifm-color-primary)',
    textDecoration: 'none',
    fontWeight: 'bold'
  }}>Learn more →</a>
</div>

---

## Introducing VoiceX: NextGen Voice AI {#introducing-voicex}

<div style={{
  border: '1px solid #bbf7d0',
  borderRadius: '12px',
  padding: '1.5rem',
  marginBottom: '2rem'
}}>

We're introducing VoiceX, our next-generation Voice AI platform, built to enable seamless, real-time customer conversations with human-like interactions.

**Key Features:**
- **Human-Like Interaction**: Powered by SmoothTalk AI and Sentiment AI
- **Ultra-Low Latency**: Eliminates robotic interactions and awkward pauses
- **Advanced Analytics**: Complex query handling with sentiment detection
- **Industry-Ready**: Perfect for BFSI, healthcare, utilities, and retail

**Business Impact:**
- 90% more natural conversations
- 65% reduction in call duration
- 85% customer satisfaction improvement
- Real-time sentiment analysis

</div>

**🏭 Industry Applications:**
- **BFSI**: Secure banking conversations with fraud detection
- **Healthcare**: Patient interaction with privacy compliance
- **Utilities**: Service requests with intelligent routing
- **Retail**: Product support with sentiment-driven responses

[**Complete VoiceX Documentation**](https://docs.yellow.ai/docs/platform_concepts/VoiceX/VoiceXIntro)

---

## **Knowledge Management Revamp** {#conversational-knowledge-base}

<Tabs defaultValue="conversational" values={[
  {label: '💬 Conversational KB', value: 'conversational'},
  {label: '🔧 Management Tools', value: 'management'},
]}>

<TabItem value="conversational">

### AI-Powered Knowledge Assistant ![](https://img.shields.io/badge/-Major%20Enhancement-success)

<div style={{
  border: '1px solid #93c5fd',
  borderRadius: '12px',
  padding: '1.5rem',
  marginBottom: '1.5rem'
}}>

We've introduced Conversational KB, a revolutionary AI-powered knowledge assistant that transforms how your agents interact with users.

** What's Changed:**

<div style={{
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
  marginTop: '1rem'
}}>

<div style={{
  background: 'white',
  padding: '1rem',
  borderRadius: '8px',
  border: '1px solid #fca5a5'
}}>
  <h4 style={{margin: '0 0 0.5rem 0', color: '#dc2626'}}>❌ Before</h4>
  <ul style={{margin: 0, paddingLeft: '1rem'}}>
    <li>Static Q&A interactions</li>
    <li>No context retention</li>
    <li>Complex setup required</li>
    <li>74 lines of prompt code</li>
  </ul>
</div>

<div style={{
  background: 'white',
  padding: '1rem',
  borderRadius: '8px',
  border: '1px solid #bbf7d0'
}}>
  <h4 style={{margin: '0 0 0.5rem 0', color: '#059669'}}>✅ Now</h4>
  <ul style={{margin: 0, paddingLeft: '1rem'}}>
    <li>Interactive conversations</li>
    <li>Context-aware responses</li>
    <li>Unified setup interface</li>
    <li>20 lines of code (73% reduction)</li>
  </ul>
</div>

</div>

**🎯 Key Capabilities:**
- **Smart Conversations**: Follow-up questions and clarifications
- **Context Retention**: Remembers previous interactions
- **Rich Media**: Images and videos in responses
- **Multi-step Reasoning**: Advanced content analysis
- **Multilingual Support**: Automatic language detection
- **Clickable Links**: Enhanced response formatting

</div>

[**Implementation Guide**](https://docs.yellow.ai/docs/platform_concepts/AIAgent/kb-agent-config)

</TabItem>

<TabItem value="management">

### Redesigned Knowledge Base Management ![](https://img.shields.io/badge/-Enhancement-orange)

<div style={{
  border: '1px solid #fcd34d',
  borderRadius: '12px',
  padding: '1.5rem',
  marginBottom: '1.5rem'
}}>

Complete revamp of the Knowledge Base module for efficient content management, now enabled by default for all new bots.

**📁 Management Features:**
- **Guided Onboarding**: Step-by-step content setup
- **Automated Syncing**: Scheduled content updates
- **Smart Organization**: Folders, subfolders, bulk actions
- **Metadata Management**: Tagging and filtering capabilities
- **Independent Publishing**: Update KB without bot redeployment

**⚡ Efficiency Gains:**
- 60% faster content setup
- 80% reduction in sync time
- 50% fewer manual operations
- Real-time content updates

</div>

![Knowledge Base Management Interface](https://cdn.yellowmessenger.com/assets/yellow-docs/KBonboarding.png)

[**Learn More**](https://docs.yellow.ai/docs/platform_concepts/studio/kb/overview)

</TabItem>

</Tabs>

------

## **Engage Updates**

###  Smarter WhatsApp Message Delivery with MM Lite API Integration 

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

We've added **MM Lite API** support to outbound campaigns, flows, and notification APIs.
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

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

* [Flow campaign](http://localhost:3001/docs/platform_concepts/engagement/flows_campaign#1-whatsapp-channel-configuration)
* [Outbound campaign](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign#33-whatsapp-campaign)
* [Notification API](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine#mmlite-preference-support-in-notifications-api-for-whatsapp)



### Deprecated Engage Overview Page

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

The Engage Overview page has been deprecated as part of our ongoing efforts to streamline the platform. 

------

## **Analyze Updates**

### Redesigned Topic Details Page 
<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

We've introduced a refreshed design and improved terminology on the Topic Details page in the **Analyze** module to make insights easier to understand and act on.

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



### AI Insights for Debug logs & Comments in Topics

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

Developers or Admins can now access **Debug Logs** and **Comments** right alongside AI Insights — no more tab-switching!
Enhanced visibility into **Resolution Status** and User **Sentiment Reasoning** enables faster issue identification.

**[📘 Dive Into the Details](https://docs.yellow.ai/docs/platform_concepts/analyze/chat-logs#debug-conversations)**


### Filter conversations by Session ID

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

Within conversation logs, jump to any session instantly by [filtering via Session ID](https://docs.yellow.ai/docs/platform_concepts/analyze/chat-logs#filter-conversations) — no more endless clicking on *View more*.


###  Pre-enabled Knowledgebase article generation & Chat handoff nodes 

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

**[Knowledgebase article generation](https://docs.yellow.ai/docs/platform_concepts/analyze/articlesuggestion)** and **[Chat handoff node](https://docs.yellow.ai/docs/platform_concepts/analyze/handoffnode)** are now enabled by default for all customers using Analyze.
No need to raise a devRev ticket — they're ready to use out of the box!

### Clutter-free & organized Knowledgebase article suggestions

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

Improved logic ensures only the most relevant articles are shown (up to 50 for the top 15 topics). 
Outdated suggestions auto-archive after 2 months if not added to the KB, reducing noise.


###  Automatic merging of duplicate & similar topics

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

* We've consolidated near-duplicate and highly similar topics to reduce clutter and provide a more accurate view. Expect a lower count of [unique topics](https://docs.yellow.ai/docs/platform_concepts/analyze/topics), but a higher quality of insights.
* Key metrics like Containment Rate and Resolution Rate have been recalibrated post-merge for more meaningful analysis.


### Introduced Labels for grouping chats

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

Under **Analyze** > **Conversation logs** you can create and filter by labels to organize conversations more effectively.

**[🔍 Learn more](https://docs.yellow.ai/docs/platform_concepts/analyze/chat-logs#label-conversations)**


***

## **Insights Updates**

### Access Control–Based Filters for Monitor and Reporting

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

We're making monitoring and reporting more secure and relevant by applying **access control–based filters**. Supervisors will now see only data related to their assigned teams across both the **Monitor** and **Analytics** sections.


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


### Name change: Dataops is not renamed to Data export 

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

Data Operations (DataOps) has been renamed to Data Export to better reflect its functionality.

### Sunset Notice: Clearing the Path for a Smarter Analytics Experience

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


### Default timestamp set to conversation start time for CRA table

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

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

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

You asked for it—and we listened! Visualized charts in the Insights Data Explorer are no longer limited to shades of blue. We’ve introduced a more vibrant, multi-colored palette to help you better differentiate and interpret your data at a glance. Colors are now more varied; they are currently selected automatically by the system.

**[💡 Start exploring](https://docs.yellow.ai/docs/platform_concepts/growth/visualisation/visualization)**

***

## **Agent AI Updates (Automation)**

### Automate Revamp: A Simpler, Smarter Way to Build Gen AI Agents

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


### PCI-Compliant Data Capture Now Supported in Question Nodes

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

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

### Name change: Skill is now Workflow

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>MINOR</span>
</div>

We have changed the term **Skill** to **Workflow** across the Yellow.ai platform. All existing skills are now labeled as workflows in Dynamic chat node and Agent AI. 
You will see this updated terminology reflected consistently throughout the UI for a more intuitive experience.


***


## **Integration Updates**

### Zendesk Offline Ticketing integration
<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #00c853, #00a844)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>NEW</span>
</div>

We have introduced Zendesk Offline Ticketing in the Yellow.ai platform to ensure uninterrupted support, even when live agents are unavailable. This addition enables:

- **Seamless Ticket Creation** – Users can submit support requests, which are automatically converted into Zendesk tickets.  
- **Effortless Agent Access** – Agents can view and manage these tickets once available, ensuring timely follow-ups.  
- **Email-Based Responses** – Users receive updates and resolutions directly via email, enhancing the support experience. 

[**📘 Dive Into the Details**](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/zendesk-offline-ticketing)


### Workday integration 

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #00c853, #00a844)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>NEW</span>
</div>

Easily integrate Workday Integration to your yellow.ai AI agent and perform **key Workday actions** such as: 
- View and apply for leaves
- Access payslips and tax documents
- Update personal and contact details
- Retrieve team member information
- Approve or reject leave and expense requests

**[🛠️ Everything You Need to Know](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/workday)**

### Camspay Integration: Added Create payment request action  

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

A new action, **[Create payment request](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/camspay#5-generate-camspay-payment-links-in-bot-conversation)** is now available. This enhancement solves use cases—such as retrieving payment status and displaying order details for successful or failed transactions.

:::note
The **Generate payment link** action in the Camspay integration node has been **deprecated**. We recommend migrating to the new action for future compatibility.

:::



## **Inbox Updates**

### Monitor & Reporting Access Control Updates

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

Supervisors now get scoped views across Monitor, Reporting, and Team tabs—ensuring visibility is limited to their assigned teams.

**What’s changed:**

* 🗑️ *Online Visitor* metric removed from the Monitor section
* 💬 *Live Chats*, *Team Tab*, and *Analytics* now show data only for supervisor-assigned teams
* ✉️ *Email Trends* filters updated to match the latest UI
* 📈 New filters + key added for *Chat Analytics* and *Agent Performance* views

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/monitor.png)

Cleaner data. Sharper control. Just the way it should be.


### Sender Email Logic Update in Email Ticketing
<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

We've cleaned up how the "From" address is picked when replying to tickets. Agents can also see clear From/To details while composing—no more guesswork.

### Rich text formatting for email acknowledgements

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

> Path: **Settings** > **Inbox** > **Email settings** 

Personalize your default **[email acknowledgements](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/emailticketing)** with new formatting options: Bold, Italics, Strike-through, Underline, Code, and Paragraphs.


### Attachments icon in email tickets 

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

To enhance clarity, an attachments icon is displayed on the [email ticket](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/tickets_intro#1-email-tickets-list-view) if the last message includes any attachments. This provides a quick visual cue for users to identify whether the previous message had any files attached, without needing to open the message thread.

### Improved email template structuring 

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

You can structure your email content using three distinct variables:
- **Latest email** – The most recent message typed by the agent.
- **Email history** – The full thread of the conversation so far.
- **Signature** – The agent's email signature.

These variables are available under the Variables section and can be placed however you prefer within your email template.


[**📄 Continue reading**](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/emailtempalte)

### Real-Time updates on the active chats page for supervisors

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

Supervisors can now view live updates on the Active Chats page—no need to refresh.

> This is a gated feature. Contact support to enable it.

[**📚 Understand the feature**](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#12-active-chats)

### Agent signature field for email templates 

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

Admins can now add a fun or informal **Signature** for agents (e.g., *Real Game Changer*) under [Agent settings](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents#modifyadd-existing-agent-properties). Dynamic variable `{{agent.signature}}` can be used in [Email Templates](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/emailtempalte#step-4-add-dynamic-variables) to personalize outgoing emails with the agent's signature.

### Role based access control(RBAC) within inbox 

<div style={{
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  flexWrap: 'wrap'
}}>
  <span style={{
    background: 'linear-gradient(90deg, #ff9800, #f57c00)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}>ENHANCEMENT</span>
</div>

Yellow.ai has introduced role-based access control (RBAC) within the Inbox platform to enhance data security and meet specific customer requirements.

[**Read more**](https://docs.yellow.ai/docs/platform_concepts/inbox/rbcaupcomingchanges)

---

## 🚀 **Quick Actions**

<div style={{
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
  marginTop: '2rem'
}}>

<a href="/docs/updates/overview" style={{
  display: 'flex',
  alignItems: 'center',
  padding: '0.75rem 1.5rem',
  background: 'var(--ifm-color-primary)',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '8px',
  fontWeight: 'bold'
}}>
  📚 Latest Updates
</a>

<a href="/docs/updates/2025/q12025" style={{
  display: 'flex',
  alignItems: 'center',
  padding: '0.75rem 1.5rem',
  border: '2px solid var(--ifm-color-primary)',
  color: 'var(--ifm-color-primary)',
  textDecoration: 'none',
  borderRadius: '8px',
  fontWeight: 'bold'
}}>
  📅 Q1 2025 Updates
</a>

<a href="/whats-new" style={{
  display: 'flex',
  alignItems: 'center',
  padding: '0.75rem 1.5rem',
  border: '1px solid var(--ifm-color-emphasis-300)',
  color: 'var(--ifm-color-text-base)',
  textDecoration: 'none',
  borderRadius: '8px',
  fontWeight: 'bold'
}}>
  🔄 What's New Hub
</a>

</div>

