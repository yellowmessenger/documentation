---
title: Introduction to Analyze
sidebar_label: Analyze
---

## Analyze overview

**Analyze** is an AI-powered module designed to help businesses monitor, interpret, and optimize every conversation that happens within their Yellow.ai platform. Whether the conversation is between a user and an **AI agent**, or between a user and a **human agent**, Analyze brings clarity, structure, and actionable insights to each interaction.

It solves a fundamental challenge: **understanding and scaling customer interactions at volume**. With thousands of conversations occurring every day, manually reviewing each one is time-consuming and impractical. Analyze simplifies this by organizing data, highlighting problem areas, and recommending next steps—turning complex conversation data into business intelligence.           
Analyze is built for:
- Customer support leaders
- Customer success managers
- Product and ops teams
- Brand owners

If you're responsible for improving AI agent performance, customer experience, or automation rates, this module is for you.

> **Flagship Feature: Topics**  
> The **Topics** sub-module is the centerpiece of Analyze. This **gated feature** uses Yellow.ai’s in-house LLM to automatically categorize conversations, detect user sentiment, generate article suggestions, and identify automation opportunities. It helps businesses uncover what customers are talking about—at scale.

**Why use analyze?**        

- Quickly understand what users are asking about
- Measure how well the AI agent is resolving queries
- Assess user sentiment to improve customer satisfaction
- Identify high-impact areas to increase automation and reduce manual support
- Learn from both AI agent and human agent responses to improve long-term resolution quality


![image](https://hackmd.io/_uploads/Byy0SXuklx.png)

---

## Access Analyze

To access the Analyze module, you must have **any one** of the following permissions:
- Super admin
- Admin
- Insights admin

:::note
Refer to [manage your bot users](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/add-bot-collaborators#share-bot-access) article to understand how to request or provide access to use the Analyze module in a bot.
:::

---

## Analyze in-depth

Analyze consists of four powerful sub-modules:

:::note
Conversations with fewer than three messages cannot be analyzed, as there isn't enough context to form a meaningful interaction.
:::

### 1. Topics

The **Topics** module automatically categorizes conversations into subject-based groups using Yellow.ai’s in-house LLM (or other integrated LLMs). For instance, conversations about a refund policy would be grouped under the topic **Refund Policy**.

What you get within each topic:
- **Topic Description**: Auto-generated summary of what users are asking
- **User Sentiment**: See if interactions were positive, neutral, or negative
- **Containment Rate**: Percentage of issues resolved by the AI agent without human handover
- **Article Suggestions**: Recommendations for knowledge base articles that could improve automation
- **Conversation Share**: Number of conversations linked to this topic
- **CR Opportunities**: Highlights areas where human intervention was needed and how they could be automated

By clicking a topic, businesses can dive into detailed analytics, view associated sessions, and understand both what’s working and what needs improvement.

:::note
Topics is a **gated feature** and uses AI-generated insights to power much of its functionality.
:::

**Key features**

| **Feature**                        | **Description**                                                                                                              |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| **Topic Clustering**              | Enables brands to understand user conversations, facilitating better analysis, AI agent improvements, and simplified debugging |
| **Resolution Status Check**       | Assesses whether user queries are being effectively resolved, enhancing overall customer support efficiency                  |
| **Sentiment Tagging**             | Analyzes user sentiment, allowing for improved customer satisfaction through appropriate responses                          |
| **Knowledge Base Article Creation** | Learns from human support interactions to improve AI agent automation, leading to reduced support tickets and increased retention |



---

### 2. Conversation logs

The **Conversation logs** section gives you access to all conversations initiated through Yellow.ai—whether handled by the AI agent or escalated to a human agent. Each individual interaction is stored as a **session**. The same user might have multiple sessions, and each session can be explored in detail.

Users with access can:
- Review every message exchanged in a session
- Filter sessions by ID, tags, or specific criteria
- View user details and metadata

This module is useful for digging into specific conversations. However, when the volume of sessions becomes large, Topics can provide deeper and simplified insights.

---

### 3. Message view

**Message view** helps assess how well the AI agent understands and responds to individual user messages. It offers:
- Accuracy analysis of AI responses
- Insights into how well the AI agent handles unseen or unexpected inputs
- Feedback loop to improve AI agent training

This view is essential for teams that want to fine-tune the conversational quality at a granular level.

---

### 4. Chat metrics

**Chat metrics** provides granular insights into how user interactions unfold at each step of the conversation. Specifically designed for experiences built using **Dynamic chat**, this section tracks how every chat node performs—what input it receives, how it responds, and whether it leads to resolution or escalation.

By analyzing these node-level interactions, teams can:
* Understand where users drop off or need support
* Identify which nodes are driving successful resolutions
* Evaluate the AI agent’s handling of user inputs in real-time
* Pinpoint areas where the conversation flow needs improvement

Ideal for teams looking to fine-tune their conversational design and measure performance beyond just session-level data.

