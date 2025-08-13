---
title: Automation overview
sidebar_label: Overview
id: overview
tags: [create your first bot]
---
import ArticleCard from '@site/src/components/ArticleCard';
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


Automation is an AI-agent building platform that enables you to easily build, customize, test, and manage agents. It offers a set of tools to create intelligent and personalized conversational experiences, including agent creation, workflow automation, API and database integration, and testing through Copilot and test suites.

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

<div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", maxWidth: "900px", margin: "auto" }}>
  <iframe
    src="https://www.youtube.com/embed/Bn8TuQgTmIA?si=a7oZMdnmaAh6xgOL"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
  ></iframe>
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
    icon="robot"
    title="Start with AI Agent setup"
    description="Design conversations using Super agents, Agents, or Knowledge Base agents"
  />
   <ArticleCard
    href="ttps://docs.yellow.ai/docs/platform_concepts/AIAgent/call-workflow"
    icon="workflow"
    title="Build backend logic using Workflow builder"
    description="Create and manage backend logic flows to perform tasks, connect APIs, and drive agent actions during conversations."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/studio/api/send-receive-apiresponses"
    icon="APIs"
    title="Integrate external systems using APIs"
    description="Enable your agent to connect with other platforms by setting up external APIs."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/studio/database"
    icon="Database"
    title="Store and fetch data using Database"
    description="Create and manage structured tables to store or retrieve user data as part of the conversation."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub"
    icon="Events"
    title="Use Events to trigger background actions"
    description="Define and manage events to trigger background actions like connecting with systems or sending notifications based on specific conditions."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/AICopilot/copilot"
    icon="Test Copilot"
    title="Test your AI Agent using Copilot"
    description="Simulate and validate your AI agent’s responses in real time using Copilot."
  />
   <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/AIAgent/automated-agent-testing"
    icon="Test suites"
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






