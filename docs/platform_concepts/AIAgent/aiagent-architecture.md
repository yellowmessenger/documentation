---
title: AI agent overview
sidebar_label: Prompt-based AI agent
---

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
[Super agent](#super-agent) | Acts as the central orchestrator that understands user intent, manages context, handles greetings and fallbacks, and routes queries to the appropriate agent.| * Understands user intent using LLM<br/>* Routes queries to the appropriate agents<br/>* Handles welcome messages, fallback, small talk, and custom rules
[Agents](#agent) | These are task-specific handlers that manage individual use cases such as booking a flight, tracking an order, or raising a support ticket. | * Handle specific use cases (example, book a flight, cancel an order)<br/> * Collect input from the user using prompts<br/> * Trigger Workflows to complete backend tasks such as API calls, database updates, and system integrations
[Knowledge base agents](#knowledge-base-agent) | Handle information based queries using uploaded documents, policies, FAQs, and other connected data sources. | * Responds to informational or FAQ-style queries<br/>* Searches and retrieves answers from uploaded documents, articles, policies, and FAQs<br/>* Handles follow-up questions and provides summarized or contextual responses.

 
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
* [Get user input](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#get-input): Collect information from users (example, travel date, booking ID) through prompts during the conversation.
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


## AI Agent overview

AI Agent builder is a no-code platform that simplifies the creation and deployment of intelligent AI agents. This platform simplifies the development process, by writing the prompts without extensive coding or technical expertise.

#### How it is different from traditional AI setups

Traditional NLP or Generative AI systems often require:
* Large training datasets
* Complex conversation flows
* Long and detailed prompts

With the AI Agent builder, it eliminates the need for complex setup:

* **Simple setup**: – Define your goal and select the tools or integrations you need.
* **Faster setup** – Build AI agents in minutes without writing scripts or creating complex flows.
* **Dynamic handling** – The agent can manage complex use cases and workflows without pre-configuration.


AI Agents help businesses complete tasks, answer questions, and automate processes by using:

* **[Large Language Models](https://docs.yellow.ai/docs/platform_concepts/studio/LLM-central-configuration#docusaurus_skipToContent_fallback)** (LLMs): These models provide the AI Agent with the ability to understand and respond in natural, human-like language.
* **[Workflows](https://docs.yellow.ai/docs/platform_concepts/AIAgent/call-workflow)**: Workflows define the step-by-step processes the agent follows to complete tasks.
* **[APIs](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api)** (Application Programming Interfaces): Allow the AI Agent to connect with external systems and get real-time data or perform actions.
* **[Knowledge Base](https://docs.yellow.ai/docs/platform_concepts/studio/kb/overview)** (KB): Knowledge Base serve as repositories of documents, FAQs, and data that the agent uses to give accurate answers.

**Key benefits of AI agent:**

* **Faster development & go-live**: Build and deploy AI agents in hours instead of months.
* **Multi-modal, context-aware conversations**: Engage users through chat, images, and rich media. The agent understands intent and smoothly manages context switches during conversations.
* **Reduces operational costs**: Eliminate the need for large development teams and reduce ongoing project and maintenance expenses.
* **Greater flexibility and customization**: Organizations can quickly experiment, adapt, and deploy new AI-driven solutions as needed.



## AI Agent components

AI Agent builder follows a modular architecture designed to handle complex, multi-turn conversations across various business use cases. This architecture is built with three core components- [Super Agent](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona), [Agents](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agent), and [Knowledge Base agent](https://docs.yellow.ai/docs/platform_concepts/AIAgent/kb-agent-config), each playing a unique role in understanding user intent, managing conversation context, executing workflows, and delivering accurate, relevant information.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/AI-Agent-Components.png)


----

### Super agent

The Super Agent functions as the central orchestrator of the entire AI agent system. Its primary responsibilities include understanding user intent, managing conversation context, handling initial greetings and fallback scenarios, and intelligently routing user queries to the most appropriate specialized agent.

  ![](https://cdn.yellowmessenger.com/assets/yellow-docs/superarchitecture.png)

**Key capabilities of Super agent:**

* **Understands user Intent using LLM**: The Super Agent uses Large Language Models (LLMs) to analyze user input and accurately identify intent for effective conversation flow.
* **Routes queries to the appropriate Agents**: Directs queries to the right agent based on the detected intent to ensures that users are connected with the right expertise for their needs.
* **Handles Welcome messages, Fallback, Small talk, and Custom rules**: The Super Agent manages initial interactions with users, providing welcome messages and engaging in basic small talk to create a more natural and engaging experience. It also handles fallback scenarios when user input is unclear or cannot be processed, and uses custom rules defined for the overall agent behavior.


[**Learn how to configure →**](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona)


----

### Agent

Agents are task-specific handlers designed to manage individual use cases within the AI agent system. Each agent is responsible for a particular domain, such as booking a flight, tracking an order, or raising a support ticket.

**Key functions of Agent**:

* **Handle specific use cases**: Agents are specialized to handle specific tasks or use cases. For example, a "Flight Booking Agent" would be responsible for managing all aspects of booking a flight, while an "Order Tracking Agent" would handle inquiries related to order status and delivery information.
* **Collect input from the user using prompts**: Agents interact with users by prompting them for the necessary information to complete the task. These prompts are designed to be clear, concise, and guide the user through the required steps.
* **Trigger workflows to complete backend tasks**: Once the agent has collected the necessary information from the user, it triggers workflows to execute backend tasks. These workflows may involve API calls to external services, database updates, system integrations, and other actions required to fulfill the user's request.

[**Learn how to configure →**](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agent)

----

### Knowledge Base agent


Knowledge Base Agents are designed to handle information-based queries by leveraging uploaded documents, policies, FAQs, and other connected data sources. They provide users with quick and accurate answers to their questions, drawing from a comprehensive knowledge base.

**Key functions of Knowledge Base Agents**:


* **Responds to informational or FAQ-style queries**: Knowledge Base Agents are specifically designed to answer questions that can be addressed by accessing and retrieving information from a knowledge base. This includes FAQs, policies, articles, and other informational resources.
* **Searches and retrieves answers from uploaded Documents, Articles, Policies, and FAQs**: The agent uses search algorithms and natural language processing techniques to efficiently search the knowledge base and retrieve relevant answers to user queries.
* **Handles follow-up questions and provides summarized or contextual responses**: Knowledge Base Agents can handle follow-up questions related to the initial query, providing additional details or clarification as needed. They can also provide summarized or contextual responses, tailoring the information to the specific needs of the user.

[**Learn how to configure →**](https://docs.yellow.ai/docs/platform_concepts/AIAgent/kb-agent-config)

----

## How AI agent component works together


<center><img src="https://cdn.yellowmessenger.com/assets/yellow-docs/Components-flowchart.png" alt="drawing" width="40%"/></center>
   
   

1. **Super Agent – The Orchestrator**
The Super Agent is like a central controller.
It gets the user's message first, figures out what the user wants, and decides where to send it:
   a. To a specific agent to handle intended/specialized task
   b. To the Knowledge Base (KB) Agent for information
   * Or both a and b, if needed
2. **Agent – The Task executor**
The Agent handles specific action where it can collect details, run workflows, call APIs, update records in database, or trigger events.
**Example:** Booking a flight or cancelling a ticket.

3. **Knowledge Base Agent – The information expert**
The KB Agent handles queries related to the product or services. It fetches information from the configured knowledge base and respond to users automatically based on the query.
**Example:** Explaining refund policies or terms and conditions.


**Example: How Super agent, Agent, and Knowledge Base Agent work together**


**User**: "I want to cancel my flight and also tell me the refund policy."

Here is how the Super Agent, Agent, and Knowledge Base Agent would collaborate to handle this request:

1. **Super Agent**

   * The Super Agent receives the message, understands the context, and detects two separate intents:
     * Cancel flight (action-oriented task)
     * Refund policy (information request)
   * It decides which component should handle each intent.

2. **Agent** 

   * The "Cancel flight" intent is sent to the Agent.
   * The Agent then initiates the workflow to process the flight cancellation. This may involve collecting additional information from the user, such as confirmation details or reasons for cancellation. The Agent interacts with relevant APIs to cancel the flight and update the user's booking status.

3. **Knowledge Base agent** 

    * The "Refund Policy" intent is sent to the Knowledge Base agent.
    * The KB Agent accesses the knowledge base, performs a search for the refund policy, and retrieves the relevant information.

4. **Super Agent – Combining responses**

   * The Super Agent gathers the outputs from both components.
   * Once both the Agent and the KB Agent have completed their respective tasks, their responses are combined and delivered back to the user in a single, smooth conversation. The user receives confirmation:
   > "Your flight has been successfully cancelled. According to our refund policy, you will receive the refund within 5–7 business days."

----

### Configuration AI agent

  ![](https://cdn.yellowmessenger.com/assets/yellow-docs/ai-agent-configuration.png)
 
To set up your AI agent, follow these steps:

**#### Step 1: Define the Super agent**

i. [Set up the agent persona](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona#update-profile-settings)
* Define the set of tasks the Super Agent should handle and route. Example, booking, cancellation, support.
* Choose the tone and style of communication (example, formal, friendly, witty).

ii. [Integrate a Large Language Model](https://docs.yellow.ai/docs/platform_concepts/studio/LLM-central-configuration) (LLM)
 * Integrate a Large Language Model (LLM) to empower the Super Agent with natural language understanding capabilities. The LLM enables the agent to interpret user queries, identify intents, and generate appropriate responses.


iii. [Set Welcome and Fallback messages](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona#define-welcome-message)
* Create custom greetings to design personalized welcome messages to greet users upon initiating a conversation. These greetings should be engaging and informative.
* Create fallback responses to handle unclear or unrecognized user queries.

iv.[ Define custom rules](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona#add-rules-to-follow-during-conversation)
* Implement custom rules to enforce business logic. For example, require users to provide mandatory information, such as their email address or phone number, before proceeding with a transaction.

**#### Step 2: Create individual agents**

[Set up dedicated agents for each use case](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agent#create-an-agent). For example, create separate agents for booking a flight, canceling a ticket, or checking refund status.  This allows each agent to focus on a specific area of expertise.
  
**#### Step 3: Add Start trigger**

The [Start trigger](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#start-trigger) initiates the conversation between the AI Agent and the user.
**Examples:**
* A greeting like “Hi” or “Hello.”
* A specific keyword like “Book flight.”

**#### Step 4: Add Prompts**

Prompts are the messages your AI Agent sends to the user. You can make them static (simple messages) or dynamic (interactive messages with actions).

**#### Add Actions in Prompts**

While adding or editing a prompt, you can attach actions so the bot can collect inputs, trigger workflows, or store data.<br/>
i. **[Fetch user details](https://docs.yellow.ai/docs/platform_concepts/AIAgent/get-input)**: Use prompts to trigger backend processes or workflows. For example, after the user enters their travel date and destination, the AI Agent can trigger a workflow to check flight availability.<br/>
ii. **[Trigger Workflow](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#call-a-workflow-in-prompt)**: Use this when you want the AIagent to run backend processes. Example: Calling an API to check flight availability after the user enters the date and destination.<br/>
iii. **[Variables](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#variables)**: Store user inputs, such as travel dates, names, or booking IDs, as variables. These variables can be used to pass data between agents, workflows, and other components of the system.

**#### Step 5: Connect the flow**

Link your prompts together in a logical order. Example: Greeting **→** Ask for travel date **→** Ask for destination **→** Trigger workflow to search **→** Show results.

**#### Step 6: Preview and test using Copilot**

Before deploying the AI Agent, thoroughly test it to ensure it functions correctly and meets user expectations. Use the [Preview or Copilot](https://docs.yellow.ai/docs/platform_concepts/AIAgent/manage-conversation) to test the AI Agent. These tools allow you to simulate user interactions and identify any issues or areas for improvement.


