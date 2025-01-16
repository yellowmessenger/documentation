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



