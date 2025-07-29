---
title: Understand AI agent architecture
sidebar_label: AI agent
---


Yellow.ai's new AI Agent Builder is a no-code platform that simplifies the creation and deployment of intelligent AI agents. Unlike traditional NLP systems that rely on extensive training data, conversation flows, or complex prompts. This builder allows you to set up AI agents quickly based on the prompts.

**Key capabilities of AI Agents**

* **Dynamic conversations**: AI Agents can carry on human-like, flowing conversations switching topics, asking follow-up questions, and remembering context.
* **Contextual and personalized responses**: They adapt based on past user inputs, preferences, or previous conversations to deliver relevant and personalized replies.
* **Data collection and validation**: Agents use prompts to collect structured input like name, date, phone number and validate it before using it.
* **Backend system integration**: They can trigger workflows, call APIs, and query or update databases in real time enabling actions like booking, updating info, or checking order status.
* **Smart Knowledge retrieval**: With a built-in Knowledge Base Agent, AI Agents can search and summarize information from documents, FAQs, or web content, and present it conversationally.
* **Human escalation support**: When the Agent is unable to address the user query, it can escalate to a human agent, preserving chat history for continuity.

**Key benefits of using AI agent**:

* **Faster development and go-live**: Build and deploy AI agents in hours instead of months.
* **Multi-modal, context-aware conversations**: Engage users through chat, images, and rich media. The agent understands intent and smoothly manages context switches during conversations.
* **Reduces operational costs**: Eliminate the need for large development teams and reduce ongoing project and maintenance expenses.
* **Greater flexibility and customization**: Organizations can quickly experiment, adapt, and deploy new AI-driven solutions as needed.

The builder is based on a modular architecture designed to handle complex, multi-turn conversations across various business use cases. This architecture consists of three key parts:

Component | Description | Role
----------|-------------|-----
[Super agent](https://docs.yellow.ai/docs/platform_concepts/AIAgent/super-agent) | Acts as the central orchestrator that understands user intent, manages context, handles greetings and fallbacks, and routes queries to the appropriate agent.| * Understands user intent using LLM<br/>* Routes queries to the appropriate agents<br/>* Handles welcome messages, fallback, small talk, and custom rules
[Agents](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agent) | These are task-specific handlers that manage individual use cases such as booking a flight, tracking an order, or raising a support ticket. | * Handle specific use cases (example, book a flight, cancel an order)<br/> * Collect input from the user using prompts<br/> * Trigger Workflows to complete backend tasks such as API calls, database updates, and system integrations
[Knowledge base agents](https://docs.yellow.ai/docs/platform_concepts/AIAgent/kb-agent-config) | Handle information based queries using uploaded documents, policies, FAQs, and other connected data sources. | * Responds to informational or FAQ-style queries<br/>* Searches and retrieves answers from uploaded documents, articles, policies, and FAQs<br/>* Handles follow-up questions and provides summarized or contextual responses.

#### How it all works together

The AI Agent system functions like a smart conversation router and executor. The Super Agent interprets what the user wants and hands it over to the right Agent, which then uses a Workflow to get the task done.


##### Step by step flow

```plain
User
│
▼
Super Agent (LLM-powered)
┌────────────────────────────────────────────┐
│ • Greets the user                          │
│ • Understands intent from input            │
│ • Decides which agent should take over     │
└────────────────────────────────────────────┘
│
▼
Selected Agent (e.g., BookFlightAgent)
┌────────────────────────────────────────────┐
│ • Collects necessary info (e.g., dates)    │
│ • Executes task-specific flow              │
│ • Triggers workflow for backend operations │
└────────────────────────────────────────────┘
│
▼
Workflow
┌────────────────────────────────────────────┐
│ • Makes API calls                          │
│ • Updates database                         │
│ • Sends confirmations                      │
└────────────────────────────────────────────┘
│
▼
Agent
(Receives output from workflow and wraps up)
│
▼
Super Agent
(Closes or continues conversation)

```

Here is a step-by-step breakdown:

1. **User initiates conversation**
   > The Super Agent greets the user with a welcome message and waits for input.
2. **User enters a query**
   > The Super Agent, powered by an LLM, understands the user's intent (example, "I want to book a flight").
3. **Intent matching and routing**
   > The super agent identifies the intent and routes the conversation to the appropriate agent (example, `BookFlightAgent`).
4. **Agent executes the task**
   > The selected agent takes over, asks for required details (example, travel date, destination), and triggers a Workflow.
5. **Workflow handles backend logic**
    > The Workflow carries out actions like checking availability, making API calls, or saving user data.
7. **Conversation ends or returns to super agent**
   > After completing the task, the agent passes control back to the super agent, which can either close the session or assist with the next user request.

### Configuration steps

  ![](https://cdn.yellowmessenger.com/assets/yellow-docs/AI-agent-dev-process.png)
 
To set up your AI agent, follow these steps:

#### Step 1: Define the Super agent

i. [Set up the persona](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona#update-profile-settings)
* Choose the tone and style of communication (example, formal, friendly, witty).

ii. Configure roles and tasks
* Define the set of tasks the Super Agent should handle and route. Example, booking, cancellation, support).


iii. [Integrate a Large Language Model](https://docs.yellow.ai/docs/platform_concepts/studio/LLM-central-configuration) (LLM)
 * Connect an LLM to help the Super Agent understand user queries and intents.


iv. [Set Welcome and Fallback messages](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona#define-welcome-message)
* Create custom greetings and fallback responses for unclear or unrecognized queries.

iv.[ Define custom rules](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona#add-rules-to-follow-during-conversation)
* Add business logic such as collecting mandatory user info (example, email or phone number) before proceeding.

#### Step 2: Create individual agents

i. [Set up dedicated agents for each use case](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona#add-rules-to-follow-during-conversation)
   * For example, create separate agents for booking a flight, canceling a ticket, or checking refund status.
  
ii. [Add individual agents](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#add-actions-to-your-ai-agent-prompts)
* Use actions like Get Input, Go to Fallback, and Call Workflow to guide the interaction.

iii. [Use variables](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#variables)
* Store user inputs (example, travel date, name, booking ID) as variables to pass data between agents, workflows, and messages.

#### Step 3: Build workflows

i. [Design workflows](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#create-a-workflow)
* Create workflows to perform backend logic such as validating inputs, saving records, or sending notifications.

ii. [Use variables in workflows](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#pass-variables-in-workflows)

* Retrieve input variables from agents, use them in logic (example, API calls), and store results for further use in the conversation.

iii. [Trigger workflows from agents](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#call-a-workflow-in-prompt)
* Link workflows directly from agents to complete tasks and return responses to users.


<!-- Yellow.ai's new AI Agent Builder is a no-code platform that simplifies the creation and deployment of intelligent AI agents. Unlike traditional NLP systems that rely on extensive training data, conversation flows, or complex prompts. This builder allows you to set up AI agents quickly based on the prompts.

**Key benefits of AI agent:**

* **Faster development & go-live**: Build and deploy AI agents in hours instead of months.
* **Multi-modal, context-aware conversations**:
Engage users through chat, images, and rich media. The agent understands intent and smoothly manages context switches during conversations.
* **Reduces operational costs**: Eliminate the need for large development teams and reduce ongoing project and maintenance expenses.
* **Greater flexibility and customization**: Organizations can quickly experiment, adapt, and deploy new AI-driven solutions as needed.

 ![](https://cdn.yellowmessenger.com/assets/yellow-docs/aiagent.png)

The builder is based on a modular architecture designed to handle complex, multi-turn conversations across various business use cases. This architecture consists of three key parts:

Component | Description | Role
----------|-------------|-----
[Super agent](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona) | Acts as the central orchestrator that understands user intent, manages context, handles greetings and fallbacks, and routes queries to the appropriate agent.| * Understands user intent using LLM<br/>* Routes queries to the appropriate agents<br/>* Handles welcome messages, fallback, small talk, and custom rules
[Agents](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations) | These are task-specific handlers that manage individual use cases such as booking a flight, tracking an order, or raising a support ticket. | * Handle specific use cases (example, book a flight, cancel an order)<br/> * Collect input from the user using prompts<br/> * Trigger Workflows to complete backend tasks such as API calls, database updates, and system integrations
[Knowledge base agents](https://docs.yellow.ai/docs/platform_concepts/AIAgent/kb-agent-config) | Handle information based queries using uploaded documents, policies, FAQs, and other connected data sources. | * Responds to informational or FAQ-style queries<br/>* Searches and retrieves answers from uploaded documents, articles, policies, and FAQs<br/>* Handles follow-up questions and provides summarized or contextual responses.

 

### Super agent

A Super agent is the central controller in the AI agent system. It does not solve specific use cases like checking refund status or booking appointments itself instead, it intelligently identifies the user's intent and routes the query to the right specialized agent configured for that purpose.

It also manages the overall conversation structure from how a chat begins, to how fallbacks are handled, to where each query should go. Think of it as a smart coordinator that ensures every conversation flows to the right place, every time. Learn how to set up a [Super agent](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona).

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/superarchitecture.png)

#### Key responsibilities of Super agent:

* Welcomes users with a greeting or introduction message.
* Understands and identifies user intent using a Large Language Model (LLM).
* Routes the query to the appropriate individual agent.
* Handles fallback messages when a query is unclear or unrecognized.
* Applies custom rules and logic (example, mandatory user info).
* Maintains contextual continuity across conversations.

### Agent

An Agent is a task-specific unit within the AI agent system, responsible for handling a defined use case such as booking a flight, tracking an order, or processing a return.

Each agent is designed to focus on how to complete the task it receives not what task to perform. The Super Agent determines the intent and delegates the query to the relevant agent. Once assigned, the agent executes the task using its configured logic and actions.

Agents operate independently and do not require awareness of the full conversation only the query passed to them by the Super Agent.

Within each agent, you can configure actions to guide conversations and perform backend operations. Key actions include:
* [Collect user input](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#get-input): Collect information from users (example, travel date, booking ID) through prompts during the conversation.
* [Trigger Workflow](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#call-workflow): Trigger a predefined workflow to perform backend tasks such as database entry, API calls, or sending confirmations.
* [Redirect to Fallback flow](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#call-a-fallback): Redirect the conversation to a fallback flow when the agent cannot understand the user input or complete the task.
* [Store and retrieve variables](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#variables): Store, retrieve, and pass data between agents and workflows to maintain context and personalize responses.

#### How it all works together

The AI Agent system functions like a smart conversation router and executor. The Super Agent interprets what the user wants and hands it over to the right Agent, which then uses a Workflow to get the task done.


##### Step by step flow

```plain
User
│
▼
Super Agent (LLM-powered)
┌────────────────────────────────────────────┐
│ • Greets the user                          │
│ • Understands intent from input            │
│ • Decides which agent should take over     │
└────────────────────────────────────────────┘
│
▼
Selected Agent (e.g., BookFlightAgent)
┌────────────────────────────────────────────┐
│ • Collects necessary info (e.g., dates)    │
│ • Executes task-specific flow              │
│ • Triggers workflow for backend operations │
└────────────────────────────────────────────┘
│
▼
Workflow
┌────────────────────────────────────────────┐
│ • Makes API calls                          │
│ • Updates database                         │
│ • Sends confirmations                      │
└────────────────────────────────────────────┘
│
▼
Agent
(Receives output from workflow and wraps up)
│
▼
Super Agent
(Closes or continues conversation)

```


<!--
The AI Agent system works as a coordinated flow between the Super Agent, individual Agents, and Workflows. 

-->

<!-- Here is a step-by-step breakdown:

1. **User initiates conversation**
   > The Super Agent greets the user with a welcome message and waits for input.
2. **User enters a query**
   > The Super Agent, powered by an LLM, understands the user's intent (example, "I want to book a flight").
3. **Intent matching and routing**
   > The super agent identifies the intent and routes the conversation to the appropriate agent (example, `BookFlightAgent`).
4. **Agent executes the task**
   > The selected agent takes over, asks for required details (example, travel date, destination), and triggers a Workflow.
5. **Workflow handles backend logic**
    > The Workflow carries out actions like checking availability, making API calls, or saving user data.
7. **Conversation ends or returns to super agent**
   > After completing the task, the agent passes control back to the super agent, which can either close the session or assist with the next user request.

### Configuration steps
 
To set up your AI agent, follow these steps:

#### Step 1: Define the Super agent

i. [Set up the persona](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona#update-profile-settings)
* Choose the tone and style of communication (example, formal, friendly, witty).

ii. Configure roles and tasks
* Define the set of tasks the Super Agent should handle and route. Example, booking, cancellation, support).


iii. [Integrate a Large Language Model](https://docs.yellow.ai/docs/platform_concepts/studio/LLM-central-configuration) (LLM)
 * Connect an LLM to help the Super Agent understand user queries and intents.


iv. [Set Welcome and Fallback messages](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona#define-welcome-message)
* Create custom greetings and fallback responses for unclear or unrecognized queries.

iv.[ Define custom rules](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona#add-rules-to-follow-during-conversation)
* Add business logic such as collecting mandatory user info (example, email or phone number) before proceeding.

#### Step 2: Create individual agents

i. [Set up dedicated agents for each use case](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona#add-rules-to-follow-during-conversation)
   * For example, create separate agents for booking a flight, canceling a ticket, or checking refund status.
  
ii. [Add individual agents](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#add-actions-to-your-ai-agent-prompts)
* Use actions like Get Input, Go to Fallback, and Call Workflow to guide the interaction.

iii. [Use variables](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#variables)
* Store user inputs (example, travel date, name, booking ID) as variables to pass data between agents, workflows, and messages.

#### Step 3: Build Workflows

i. [Design workflows](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#create-a-workflow)
* Create workflows to perform backend logic such as validating inputs, saving records, or sending notifications.

ii. [Use variables in workflows](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#pass-variables-in-workflows)

* Retrieve input variables from agents, use them in logic (example, API calls), and store results for further use in the conversation.

iii. [Trigger workflows from agents](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#call-a-workflow-in-prompt)
* Link workflows directly from agents to complete tasks and return responses to users.

### Knowledge Base agent



The [Knowledge Base Agent](https://docs.yellow.ai/docs/platform_concepts/AIAgent/kb-agent-config) (KB) is a specialized AI component responsible for handling informational queries. Unlike task-oriented agents that perform specific actions (such as booking or cancelling), the KB Agent focuses solely on delivering accurate, context-aware answers from connected documentation.

Powered by the **Knowledge Base module** and **LLM capabilities**, this agent understands user questions in natural language regardless of exact phrasing or keywords and retrieves the most relevant response in a conversational format.


### How It Fits into the AI Agent Architecture

Here’s how the KB Agent works within the overall agentic system:

1. **Intent routing by Super Agent**
   When a user asks an information-based question (example, "What is your cancellation policy?), the Super Agent identifies it as an informational query and routes it to the KB Agent.

2. **Answer generation**
   The KB Agent searches through connected sources (such as help articles, FAQs, or manuals), extracts the most relevant content, and delivers a well-structured, summarized response.

3. **Dynamic rerouting (if needed)**
   If the user transitions from an informational query to an actionable one (example, "Okay, cancel my booking"), the Super a    gent reroutes the conversation to the appropriate functional agent. --> -->


