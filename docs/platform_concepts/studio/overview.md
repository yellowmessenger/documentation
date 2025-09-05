---
title: Automation overview
sidebar_label: Overview
id: overview
tags: [create your first bot]
---
<!--import ArticleCard from '@site/src/components/ArticleCard';
import ArticleCardGrid from '@site/src/components/ArticleCardGrid';

<!-- Automation is an AI-agent building platform that allows you to easily build and customize AI-agent conversations without requiring coding expertise. It provides all the necessary tools to create and test conversational AI-agents. -->


<!-- #### Key features of Automation:

* **Easy conversational flow design**: Easily design the flow of interactions between your AI-agent and customers using intuitive Automation tools like start triggers, [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes), variables, fallbacks, databases, and functions.
* **Natural Language Processing (NLP) training**: Train your AI-agent with specific intents to trigger the respective flow to respond accurately to user queries.
* **Custom logic implementation**: Implement advanced functionalities such as multilingual communication, API integrations with third-party apps, and database management using custom logic.
* **Conversation logs**: Keep track of the interaction history between users and your AI-agent, allowing you to analyze interactions and identify potential conversation issues.
* **Instant answering AI-agent creation**: Quickly create a AI-agent designed to provide instant answers to frequently asked questions (FAQs). Easily upload offline documents or add website URLs to enrich your AI-agent's knowledge base. With AI-enabled features, it can perform search operations and provide summarized results to user queries.
* **API integration**: Seamlessly integrate third-party APIs that cannot be integrated through the standard integration module. This feature allows you to enhance the functionality of your FAQ AI-agent by accessing external data and services.

**Watch the introductory video on Automation:**

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/yy3tmsFvw64?si=730T0hAHEPL9RC-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center> -->

<!-- **Watch the introductory video on Automation:**

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Bn8TuQgTmIA?si=a7oZMdnmaAh6xgOL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>></center>
    -->


<!-- Automation is an AI-agent building platform that enables you to easily build, customize, test, and manage agents. It offers a set of tools to create intelligent and personalized conversational experiences, including agent creation, workflow automation, API and database integration, and testing through Copilot and test suites.

With Automation, you can perform backend processes, build dynamic workflows, and manage your AI agent within a single interface. From building agent conversations to handling data and running tests, configuring integrations to managing data and running test cases, everything can be done in one unified platform.

You can use the Automation module when You want to:

* Build AI agents that automate user conversations and tasks.
* Design workflows, connect backend systems via APIs, or store and retrieve data using a built-in database.
* Test and validate the agent's behavior and performance before going live, using Copilot sessions or by running test suites.

**Key benefits of Automation module:**

* **End-to-end Agent creation**: Design AI agents from scratch using prompts, actions, and workflows, all within a unified platform.
* **Use componnets across agents**: Use workflows, APIs, and database configurations as modular building blocks that can be reused across multiple AI agents.
* **Built-in testing framework**: Use Copilot sessions and Test Suites to simulate conversations, validate logic, and evaluate agent performance before going live.
* **Backend automation**: Automate internal operations with a visual workflow builder, API connectors, and database integrations.
* **Seamless Integration**: Easily connect AI agents to third-party systems using APIs, databases, and event-based triggers for real-time automation.


**Watch the introductory video on Automation:**

<div style={{ position:"relative", paddingBottom:"56.25%", height:0, overflow:"hidden", maxWidth:"100%", borderRadius:"12px" }}>
  <iframe
    src="https://www.youtube.com/embed/Bn8TuQgTmIA?si=a7oZMdnmaAh6xgOL"
    style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%" }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
</div>



### Access Automation

There are two ways in which you can access Automation:

1. **Left navigation bar**: Click on the left navigation bar to access **Automation**.

    ![](https://imgur.com/fg0FkCo.png)
    
2. **Quick links**: Use quick links for quicker navigation to specific sections within Automation. Choose your preferred option to access the desired section.
 
    ![](https://imgur.com/G2cqLk5.png)

### Components of the Automation module

The Automation module offers everything you need to build, integrate, and test your AI agent. By following this sequence **agent setup** > **backend logic** > **integrations** > **data handling** > **automation testing**, you ensure your AI agent is not just functional, but also smart, connected, and reliable.


 Here is a components you will use during the AI agent creation process:
<ArticleCardGrid>
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/AIAgent/aiagent-architecture"
    icon="user"
    title="Start with AI Agent setup"
    description="Design conversations using Super agents, Agents, or Knowledge Base agents."
  />
  <ArticleCard
    href="ttps://docs.yellow.ai/docs/platform_concepts/AIAgent/call-workflow"
    icon="robot"
    title="Build backend logic using Workflow builder"
    description="Create and manage backend logic flows to perform tasks and connect APIs."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/studio/api/send-receive-apiresponses"
    icon="book"
    title="Integrate external systems using APIs"
    description="Enable your agent to connect with other platforms by setting up external APIs."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/studio/database"
    icon="eye"
    title="Store and fetch data using Database"
    description="Create and manage structured tables to store or retrieve user data."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub"
    icon="Events"
    title="Use Events to trigger background actions"
    description="Define and manage events to trigger background actions like connecting with systems or sending notifications."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/AICopilot/copilot"
    icon="check-circle"
    title="Test your AI Agent using Copilot"
    description="Simulate and validate your AI agent’s responses in real time using Copilot."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/AIAgent/automated-agent-testing"
    icon="upload"
    title="Run end-to-end checks with Test suites"
    description="Run end-to-end checks before going live using Test Suites."
  />
</ArticleCardGrid>


 
<!-- ## Create your first AI-agent    

Creating a high-performing AI agent involves configuring its personality, capabilities, and interaction channels—including voice. This guide gives you a one-glance understanding of the core setup areas needed to deliver seamless, intelligent user experiences across text and speech.

> ✅ Whether you are building an agent for chat, voice AI, or multi-turn automation, this setup ensures every interaction aligns with your brand, meets user expectations, and scales effortlessly.

## Configuration at a glance

1. **Start with the Super Agent**: Define high-level agent identity and behavior defaults.
2. **Add an Agent**: Configure specific use cases your bot will handle.
3. **Design Conversations**: Use prompts, actions, and logic to shape user interactions.
4. **Set Up Voice AI**: Fine-tune speech capabilities for natural, spoken dialogue.
5. **Manage Variables**: Keep conversation context with reusable, testable variables.
6. **Test and Go Live**: Validate behavior in dev, then publish to production safely.

Here’s what you will find and can customize in every part of the AI agent setup.


| Configuration Area       | Purpose                                                 | What You Define                                                                   |
| ------------------------ | ------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **AI Agent Profile**     | Establishes the agent’s identity and scope.             | Name, role, supported region, model, and data policies.                           |
| **Persona & Tone**       | Shapes the agent’s personality and communication style. | Welcome message, fallback handling, tone, and brand voice alignment.              |
| **Conversations**        | Defines what the agent can do and how it responds.      | Prompt-based logic, input collection, workflows, fallback flows.                  |
| **Voice AI Settings**    | Enables and tunes voice-based interactions.             | Voice model, speech-to-text accuracy, and conversation pacing.                    |
| **Global Components**    | Centralized control of variables and data context.      | System, session, user 360, and output variables.                                  |
| **Testing & Publishing** | Ensures quality before going live.                      | Preview conversations, validate logic, and publish to lower or live environments. |
    
## Create your first AI-agent

For a detailed guide on how to create your first AI-agent, refer to this [document](https://docs.yellow.ai/docs/platform_concepts/get_started/createfirstbot). You can also watch this video for a brief demonstration of creating a AI-agent using the yellow.ai cloud platform. -->

Automation is the central workspace to build, orchestrate, and optimize Agentic AI. It brings together key capabilities such as AI Agent creation, workflow automation, database and API integration, and end-to-end testing

**You can use the Automation module when you want to:**
* Build AI agents that automate user conversations and tasks.
* Design workflows, connect backend systems via APIs, or store and retrieve data using a built-in database.
* Test and validate the agent's behavior and performance before going live, using Copilot sessions or by running test suites.

**Watch the introductory video on Automation:**

<div style={{ position:"relative", paddingBottom:"56.25%", height:0, overflow:"hidden", maxWidth:"100%", borderRadius:"12px" }}>
  <iframe
    src="https://www.youtube.com/embed/Bn8TuQgTmIA?si=a7oZMdnmaAh6xgOL"
    style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%" }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
</div>

## Automation module capabilities

The Automation module allows you to design and manage AI agents by combining AI-driven agents, rule-based agents, workflows, integrations, and testing tools to deliver seamless user experiences.

   <center><img src="https://cdn.yellowmessenger.com/assets/yellow-docs/automation-platform-capabilities.png" alt="drawing" width="90%"/></center>
    
   
**Key capabilities of the Automation module include**:

* **[AI-Agent building](https://docs.yellow.ai/docs/platform_concepts/AIAgent/aiagent-architecture)**: This is the core capability of the platform, which allows you to design and configure AI agents.
   * Provides no-code interface to build agents.
   * Supports both AI-driven and rule-based agents.
   * Allows defining start trigger, prompts, workflows, conversation flows, and integrating business logic.
   * Simplifies deployment and scaling of agents across different channels (web, mobile, chat apps).
* **[Workflow automation and integrations](https://docs.yellow.ai/docs/platform_concepts/AIAgent/call-workflow)**: Handles backend tasks that support the conversation. When triggered, it can call APIs, update [database](https://docs.yellow.ai/docs/platform_concepts/studio/database), or perform other automated actions to complete user requests.
    * Both AI-driven and rule-based agents rely on workflows to complete user requests.
    * Automates backend processes like [API](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api) integrations, data processing, or business logic. Example: Order tracking, appointment booking, ticket management, and so on.
    * Integrates with external systems such as CRMs and third-party applications to enable end-to-end automation.
* **Automated AI testing**: Testing ensures that your AI Agent works as expected before going live. The platform provides two testing approaches:
   1. **[Copilot](https://docs.yellow.ai/docs/platform_concepts/AICopilot/copilot)**: Allows you to manually test the AI Agent in a development environment.
      * Manual testing tool that simulates real user conversations in a development environment.
      * Allows validation of prompts, workflows, Knowledge Base responses, and conversation logic.
      * It helps to validate tone, accuracy, and flow before publishing.
      * Useful for quick debugging during the agent development.
  2. **[Test suites](https://docs.yellow.ai/docs/platform_concepts/AIAgent/automated-agent-testing)**: Allows you to automatically test your AI agent’s functionality, performance, and accuracy without the need for manual testing.
      * You can generate test cases to validate agent behavior.
      * Provides detailed reports highlighting passed and failed cases.
      * Ideal for regression testing and validation.
   
----

## Overview of Agentic architecture in the Automation module

The Agentic architecture in Yellow.ai’s Automation module orchestrates conversations by combining AI-driven intelligence, rule-based logic, and workflows.

* **[AI-driven agents](https://docs.yellow.ai/docs/platform_concepts/get_started/createfirstbot)** – Powered by Large Language Models (LLMs), these agents understand context, handle complex or multi-turn conversations, and generate natural, human-like responses. Ideal for open-ended queries and tasks that require reasoning or dynamic information retrieval.
* **[Rule-based agents](https://docs.yellow.ai/docs/platform_concepts/studio/build/create_chatbot)**(Deterministic agents) – These agents operate using structured logic and predefined nodes, progressing through deterministic workflows. Best suited for repetitive tasks such as booking forms, order tracking, or surveys.
* **[Workflows](https://docs.yellow.ai/docs/platform_concepts/AIAgent/call-workflow)** – Workflows act as the backend processes that agents invoke to perform actions like API calls, database updates, sending notifications, or triggering automated tasks. Both AI-driven and rule-based agents depend on workflows to complete tasks and maintain seamless conversation flow.
   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/flow-agent.png)
 
### Camprision between AI-driven agents and Rule-based agents

Aspect | AI-driven agent | Rule-based Agent
-------|-----------|------------------
**Mechanism** |	Uses Large Language Models (LLMs) to interpret context and make dynamic decisions. | Uses structured logic and predefined rules to guide conversations.
**Conversation handling** | Handles complex, multi-turn, and open-ended conversations. | Handles linear, step-by-step conversations suited for predictable scenarios.
**Context awareness** | Retains and uses context from previous interactions to provide personalized responses. | Relies on predefined conditions and user inputs to guide conversations.
**Flexibility**	| Adapts to varied user inputs and handle unexpected queries. | Follows rigid flows and handle only predefined scenarios.
**Use case** | Best for customer support with complex queries, troubleshooting, dynamic FAQs, and personalized recommendations. | Best for booking processes, order tracking, surveys, feedback collection, and other structured requests. |

## AI agent components

### Super agent

[Super agent](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona) acts as the central orchestrator of all conversations within the AI agent. It intelligently routes user queries to the appropriate agent whether an AI-driven agent for complex, context-rich conversations or a rule-based agent for structured, deterministic workflows based on the query, conversation context, and predefined criteria.

### Agent

Individual [agents ](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agent) help to focus on specific conversation tasks, such as booking tickets, handling cancellations, or answering product-related queries.

The Super Agent coordinates these interactions by analyzing the user’s intent and routing the query to the most relevant agent. For example, if a user asks about refund eligibility, the Super Agent will trigger the Refund Agent, while a booking query would be directed to the Booking Agent.

### Knowledge Base (KB) Agent

The [Knowledge Base agent](https://docs.yellow.ai/docs/platform_concepts/AIAgent/kb-agent-config) is a specialized AI-driven component designed to handle knowledge-intensive queries. It retrieves, summarizes, and delivers answers from knowledge sources like documents, FAQs, or external systems. It also supports follow-up questions, multilingual responses, and context-aware answers.

### Rule-based flows within the AI agent

Rule-based agents, also known as node-based flows, are a key component of the agentic architecture. Unlike AI agents that rely on LLMs for contextual reasoning, rule-based agents operate through predefined paths and mapped intents. They are best suited for scenarios where interactions must follow a structured, predictable sequence such as authentication, form-filling, or survey collection.

In this setup, the **Super agent** determines when a conversation should follow a rule-based flow and routes the user to the appropriate agent. The rule-based agent then executes the step-by-step conversation paths to guide the users.

#### **Nodes in rule-based Agents**

In rule-based agents, [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes) act as the fundamental building blocks of the conversation. Each node represents a specific action such as asking a question, validating input, branching logic, or triggering backend processes. By linking nodes together, these agents create structured paths that guide users to the desired outcome.

**Nodes are useful for:**

* **Collecting information**: Capture user inputs like name, email, phone number, preferences, or booking details. **Example**: Asking the user for their flight date or delivery address.
* **Conditional branching**: Direct the conversation along different paths based on user inputs. **Example**: If a user selects "Yes" → proceed to payment, if "No" → proceed to next step.
* **Fetching data**: Retrieve information from databases, APIs, or external systems. Example: Fetching flight availability, order status, or user account details.
* **Data pushing / Backend integration**: Send collected information to external systems or databases for processing.
**Example**: Storing booking details in a Database.
* **Mathematical and Logical Operations**: Perform calculations or validations during the conversation using [Functions](https://docs.yellow.ai/docs/platform_concepts/studio/build/code). **Example**: Calculating total cost, validating an age or date, or checking inventory.
* **Dynamic rich media generation**: Create interactive and engaging responses using carousels, images, and quick replies. **Example**: Displaying flight options in a carousel or showing payment instructions with buttons.
* **Triggering Workflows or APIs**: Initiate automated workflows or external API calls from within the conversation.

------

## Workflows in AI-powered Agents and Rule-based Flows

Workflows are specialized automation that agents call during a conversation to perform backend tasks, such as making API calls, updating database, or sending notifications. Both AI-powered agents and rule-based flows can use workflows, but they trigger them differently:

* **AI-powered agents** – Use the [Call Workflow](https://docs.yellow.ai/docs/platform_concepts/AIAgent/call-workflow#call-a-workflow-in-prompt) action within the prompts to trigger a workflow. This allows the agent to dynamically process user input, fetch data, or complete actions before continuing the conversation.
* **Rule-based agents** – Use the [Execute node ](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes-overview/execute-flow)to call a [workflow](http://localhost:3000/docs/platform_concepts/studio/build/Flows/journeys#create-a-workflow-via-workflow-builder-section) from a predefined step in the conversational flow.

<!-- 1. **Workflows in AI-powered Agents**

    AI-powered agents use Large Language Models (LLMs) to understand intent and manage open-ended, context-driven conversations. Workflows are triggered dynamically, based on what the user says and what the conversation requires.

   **How they work:**

   * The agent drives the conversation using configured prompts, asking questions and interpreting responses.
   * When a backend action is needed (example, verifying identity, updating a database, fetching real-time data), the agent dynamically decides which workflow to call.

   **Example: Ticket cancellation scenario**

    **User**: "I want to cancel my flight ticket for tomorrow."
    *  The AI agent interprets the intent ("ticket cancellation") and asks clarifying questions, example, "Can you provide your booking ID?""
    * Once the required details are collected, the AI agent dynamically triggers the ticket cancellation workflow in the backend, which handles:
       * Verifying the booking ID
       * Checking cancellation policies
       * Processing the refund or confirmation
    * After the workflow completes, the AI agent provides a contextual response, example, "Your ticket has been successfully cancelled, and a refund of "$X" will be processed within 5 business days".

2. **Workflows in Rule-based flows**

    Rule-based flows use workflows at predefined points in the conversation. The conversational flow initiates when and how a workflow should be triggered, regardless of the specific user or their individual needs.

    **How they work:**
     
     * Rule-based flows follow predefined conditions, logic, and steps. 
     * Workflows are embedded at specific points to perform defined actions.

    **Example: Sending an OTP verification**

      The rule-based flow is configured as:
           * Collect user details (e.g., phone number).
           * Trigger the OTP workflow to send the code.
           * Wait for user input and validate the OTP.
           * The OTP workflow is executed exactly at the defined step. -->




