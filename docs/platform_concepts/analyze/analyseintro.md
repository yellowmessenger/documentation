---
title: Introduction to Analyze
sidebar_label: Analyze
---

## Analyze overview

**Analyze** is an AI-powered module designed to help businesses monitor and interpret every conversation that happens within their Yellow.ai platform. Whether the conversation is between a user and an **AI agent**, or between a user and a **human agent**, Analyze brings clarity, structure, and actionable insights to each interaction.

It solves a fundamental challenge: **understanding and scaling customer interactions at volume**. With thousands of conversations occurring every day, manually reviewing each one is time-consuming and impractical. Analyze simplifies this by organizing data, highlighting problem areas, and recommending next steps—turning complex conversation data into business intelligence.           


> **Flagship Feature: Topics**  
> The **Topics** sub-module is the centerpiece of Analyze. This **gated feature** uses Yellow.ai’s in-house LLM to automatically categorize conversations, detect user sentiment, generate article suggestions, and identify automation opportunities. It helps businesses uncover what customers are talking about—at scale.

**Why use analyze?**        

- Quickly understand what users are asking about
- Measure how well the AI agent is resolving queries
- Assess user sentiment to improve customer satisfaction
- Identify high-impact areas to increase automation and reduce manual support
- Learn from both AI agent and human agent responses to improve long-term resolution quality


![image](https://imgur.com/DH5YkBg.png)

---

## Access Analyze

To access the Analyze module, you must have **any one** of the following permissions:
- Super admin
- Admin
- Insights admin
- Developer


> Refer to [manage your bot users](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/add-bot-collaborators#share-bot-access) article to understand how to request or provide access to use the Analyze module in a bot.


---

## Analyze in-depth

Analyze consists of four powerful sub-modules:


### 1. Topics

The **Topics** module automatically categorizes conversations into subject-based groups using LLMs. For instance, conversations about a refund policy would be grouped under the topic **Refund Policy**.

Within each topic you can see:                      
- An AI-generated Topic Description provides a concise summary of what users are asking. Topic Clustering helps identify and group related conversations, enabling better analysis, debugging, and AI training.                   
- User Sentiment insights reveal whether interactions were positive, neutral, or negative, while the Containment Rate shows how effectively the AI agent resolved queries without human handover.                    
- Article Suggestions recommend relevant knowledge base content based on past interactions, helping improve automation and reduce ticket volume.                      
- Conversation Share indicates the number of sessions linked to each topic, and CR Opportunities highlight instances where human intervention was needed, pointing to areas where automation can be enhanced.                        
                             
By clicking a topic, you can dive into detailed analytics, view associated sessions, and understand both what’s working and what needs improvement.                  

:::note
Topics is a **gated feature** and uses AI-generated insights to power much of its functionality.
:::


:::note
Conversations with fewer than three messages are not analyzed, as there isn't enough context to form a meaningful interaction.
:::


---

### 2. Conversation logs

The **Conversation logs** section gives you access to all conversations happening across all the channels— whether handled by the AI agent or escalated to a human agent. Each individual interaction is stored as a **session**. The same user might have multiple sessions, and each session can be explored in detail.

You with access can:
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

This view is essential for teams that want to fine-tune the conversational quality.

---

### 4. Chat metrics

**Chat metrics** provides granular insights into how user interactions unfold at each step of the conversation. This section tracks how every **dynamic chat** node performs - completion rate, token consumption and failures.

By analyzing these node-level interactions, you can:
* Understand where users drop off or need support
* Pinpoint areas where the conversation flow needs improvement

You can fine-tune your conversational design and measure performance beyond just session-level data.

-----

## How analyze works for Voice ai-agents? 

Conversations with Voice AI agents are stored in two ways:
- **SAML Tag Links**: Clicking the tag redirects you to the corresponding voice recording, which you can listen to directly.
- **Text Transcripts**: Conversations may also be transcribed and displayed as readable text.

Regardless of how the conversation is stored in the UI (as audio or text), all interactions are transcribed, analyzed and displayed within **Analyze**.