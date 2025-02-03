---
title: Dec & Nov 2024 Releases 
sidebar_label: Nov & Dec 2024
featured: true
---

<!--
## Streamline Customer Support with the New Workflows Module

We are excited to introduce the **Workflows module**, designed to automate routine tasks within your customer support operations. With this, you can automate various Helpdesk activities, schedule tasks for data teams, and improve overall operational efficiency. The workflows run independently from the core **AI Agent** flow and work seamlessly in the background, providing continuous support without interruption.  

This allows teams to focus on more critical, high-priority issues, improving overall productivity.

**Helpdesk-Specific Workflow Examples**  

1. **Send Ticket Details to CRM**: Automatically transfer ticket details to the CRM once an agent closes a ticket.
2. **Customer Acknowledgment**: Automatically acknowledge customers when a ticket is created, enhancing customer experience.
3. **Send Full Chat Transcript**: Seamlessly send the full chat transcript, including the URL, to the CRM when a ticket is resolved.
4. **Populate Custom Fields**: Trigger an API call to automatically populate custom fields (5-8) when an agent fills in one specific field.
5. **Journey Tagging**: Add journey-specific tags to chats, helping agents refer back to relevant customer journeys for better support analysis.


### Key Benefits

- **Routine Task Automation**: Automate various customer support tasks like managing Helpdesk activities, handling cron jobs, and more.
- **Background Operation**: Workflows function independently from the AI Agent flow, ensuring minimal disruption to daily processes.
- **Improved Productivity**: Free up time for your team to focus on high-value tasks, reducing the burden of routine work.


### Limitation of Workflow
The **Workflows module** currently supports **Helpdesk use cases only**.

-->

## Introducing the All-in-One Support Portal: Help Center

The **Yellow.ai Help Center** is a plug-and-play widget designed to seamlessly integrate into customer websites, delivering a unified and efficient support experience. Powered by **AI-Copilot**, it consolidates the core functionalities of **Inbox**, **KnowledgeBase**, and **Ticketing System** into a single, intuitive interface. This comprehensive solution empowers businesses to provide faster, more effective assistance while simplifying support for customers.  


#### **Key Benefits**  

#### **1. Centralized Ticket Management**  
- Manage all customer tickets in one place, removing the complexity of tracking scattered email threads.  
- Enable users to continue conversations on specific tickets with ease, improving clarity and efficiency.  

#### **2. Unified Customer Experience**  
- Access AI-powered agents, browse KnowledgeBase articles, and connect with live agents—all through a single interface.  
- Provide customers with a seamless transition between support options, ensuring an intuitive and hassle-free journey.  


[Learn more about Help Center](https://docs.yellow.ai/docs/platform_concepts/aicopilot)


---


## Ticket Conversation Analysis from Third-Party Apps


Earlier, our **Analyze module** only supported analytics from in-house applications. With this update, it now integrates data from third-party apps like Zendesk, providing centralized reporting to ensure that no insights are missed and offering a unified view of all ticket conversations.


#### **Enhancements Made**

#### **1. Integration with Third-Party Applications**  
The **Analyze module** now supports ticket conversation analysis from third-party platforms like **Zendesk**. This integration is facilitated through a secure webhook, ensuring seamless data transfer while maintaining strict data confidentiality.  

#### **2. Comprehensive Analysis Dashboard**  
Access a unified dashboard to explore detailed insights, including:  
- **Sentiment Analysis**: Understand customer emotions across conversations.  
- **Keyword Extraction**: Identify key themes and topics from interactions.  
- **Conversation Trends**: Spot patterns to track performance and customer behavior.  


#### Key Benefits

- **Deeper Insights**: Analyze customer sentiment and behavior across multiple platforms for a clearer understanding of interaction patterns.  
- **Centralized Reporting**: Consolidate all ticket conversation data, whether from in-house systems or third-party apps, into one cohesive dashboard.  
- **Actionable Intelligence**: Use comprehensive analytics to refine support strategies, streamline processes, and boost customer satisfaction.  


[Learn more about creating offline tickets in third-party tools](https://docs.yellow.ai/docs/platform_concepts/analyze/handoffnode#analyze-transcripts-in-third-party-apps)



---


## Centralized LLM Configuration for LLM-powered Modules
Introducing **LLM Configuration** to centrally manage LLM models and accounts across all LLM-powered features, including Dynamic Chat Node, Conversations, Agent AI, and Knowledge Base (KB).  

Key highlights:  
- Create, edit, switch models, and manage accounts.  
- Associate LLM accounts at the environment level (Development/Live or Sandbox/Staging/Production).  
- Yellow accounts come preconfigured with GPT 4o Mini enabled across all environments.  
- KB defaults to our proprietary in-house model but allows switching to other models as needed.  

[Visit Documentation](https://docs.yellow.ai/docs/platform_concepts/studio/LLM-central-configuration)

---

## Unify Your Data with Table Joins in Custom Reports

You can create powerful reports by combining data from multiple sources. With Table Joins, you can merge tables using various join types, unlocking actionable insights for your business. 

**Example**

Easily identify users who raised tickets across multiple channels. For example, join the Chat Tickets and Email Tickets tables using the common column UID to track users engaging through both chat and email.

**Merge Data with Ease**
* Combine or merge two default tables into a single report.
* Use Inner Join, Right Outer Join, or Full Outer Join to customize how data is matched and displayed.
* Flexible Query Creation

Explore the feature in **Insights** > **Data Explorer**. [Learn more](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/table_join)




---


## Boost Support Efficiency with Automated Workflows

Reduce repetitive tasks and focus on what matters – your customers. Here's how the new Workflows simplify your support:

* **Effortless Automation:** Build workflows in minutes, no coding required.
* **Pre-built Nodes:** Automate common tasks like ticket updates and transfers with pre-made actions.
* **Simplified Event Handling:** Easy-to-use nodes for common events and auto-generated variables.
* **New Time Triggers:** Automate actions based on time, like "Unresolved for X days" or "Queued for X minutes."

**Coming Soon:**

* Expand automation to encompass CDP events and more.
* Introduce intelligent nodes for complex scenarios.



**Note:** Existing workflows will continue to function normally.

> **[Watch demo video](https://www.youtube.com/watch?v=QMsWjBu2ltU)**


> [Learn more about Workflows](https://docs.yellow.ai/docs/platform_concepts/studio/build/workflows#workflows-overview).

----

## Transform Bot Building Experience With Our Advanced Agent AI

The Agent AI module simplifies the creation of Gen AI-powered bots, allowing you to design highly effective conversational agents in just minutes. No prior AI experience is needed—just describe your bot's behavior in plain language, and let Agent AI handle the rest.


**Highlights of Advanced AI Agent**:
* **Simple Setup**: Create bots quickly without requiring technical expertise.
* **Intelligent Conversations**: Use Gen AI-powered Orch-LLM to deliver natural, accurate responses.
* **Faster Resolutions**: Equip bots to address customer queries instantly and reliably.

Streamline customer interactions and improve support efficiency with Agent AI's conversational capabilities. Start building smarter, more responsive bots today. [Learn how](https://docs.yellow.ai/docs/platform_concepts/AIAgent/aiagent_intro)



