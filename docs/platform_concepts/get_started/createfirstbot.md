---
title: Create your first AI-agent
sidebar_label : Create your AI agent
---
import ArticleCard from '@site/src/components/ArticleCard';
import ArticleCardGrid from '@site/src/components/ArticleCardGrid';

<!-- :::note
[Upgrade](https://docs.yellow.ai/docs/platform_concepts/get_started/upgrade#steps-to-upgrade-your-freemium-plan) your account to unlock all the features offered by Yellow.ai.
:::

The first step in building your AI agent is configuring the Super Agent—the central intelligence layer that defines your agent’s personality, tone, and purpose. This foundational setup ensures every conversation reflects your brand voice and aligns with your business objectives.

Creating a high-performing AI agent involves configuring its personality, capabilities, and interaction channels—including voice. This guide gives you a one-glance understanding of the core setup areas needed to deliver seamless, intelligent user experiences across text and speech.

> ✅ Whether you are building an agent for chat, voice AI, or multi-turn automation, this setup ensures every interaction aligns with your brand, meets user expectations, and scales effortlessly.

## Create a new AI agent (for Super Admin)
Only super admins can create a new AI agent. If you are a super admin, follow these steps.

1. Begin by building your AI agent in a lower environment - Development or Staging. Once changes are stable and approved, publish to Live or Production. <br/>
You can only create and test agents in these non-production environments. Once your changes are stable and approved, publish them to the Live or Production environment.
:::note
Depending on your subscription plan, you may have access to two or three environments. Use the environment switcher in the top-right corner to move between them.

   * **Freemium** plan contains Development and Live environments
   * **Premium** plan contains Sandbox, Staging, and Production environments.
:::

   ![](https://cdn.yellowmessenger.com/assets/docs/image-13.png)

2. Go to the **Overview** page > click the **AI-agent** drop-down > + **Create AI agent**.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/create-agent.png)

3. Click **+ Create AI agent**.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/create-AI-agent.png)

4. Choose the **Subscription** and appropriate **Data storage region** where your agent’s data will be hosted and click **Next**.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/selectregion.png" alt="drawing" width="50%"/>

5. Define the following details and click **Next**.

   | Field Name | Description|
   ------------|--------------
   Name | Enter a unique name for your AI agent.
   Choose avatar | Select an animated avatar to visually represent your AI agent.
   Select a persona | This defines the agent’s tone and communication style. You can select from the following personas:<br/>* **Polite and persuasive**: Ideal for sales agents.<br/>* **Empathetic and helpful**: Best suited for support agents.<br/>  **Witty**: Best for marketing agents.
   Role |  Describe the role of the AI agent in less than 400 characters. <br/>For example, you are a banking assistant who helps users with Yellow Banking-related queries. Your role is focused on assisting with personal loans-guiding users to apply loan, checking loan status, and answering loan specific questions for better accuracy and support.  

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/createpage.png)  

6. Provide either your website URL or upload documents. This content will be used to train the AI agent.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/knowledgeai1.png)
   
* After adding the knowledge source, your AI agent will be created and ready for further configuration. 
   
     ![](https://cdn.yellowmessenger.com/assets/yellow-docs/settingAI.png)
     
* You will be redirected to the **Copilot** page, where you can Start typing your question or query based on the knowledge you have stored to retrieve relevant information.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/copliot.png)

After setting up the Super Agent, you can configure the Agent with the exact use cases and workflows it should manage. This structured approach improves clarity and makes it easier to scale and maintain.

### Configure your AI agent

<ArticleCardGrid>
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona"
    icon="robot"
    title="Define Agent Persona"
    description="Set high-level agent identity, tone, and behavioral defaults for a consistent user experience."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations"
    icon="wrench"
    title="Configure Agent"
    description="Build and configure specific conversation to handle distinct use cases and user intents."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#add-actions-to-your-ai-agent-prompts"
    icon="book"
    title="Add Actions to your AI agent prompts"
    description="Add Actions to your AI agent prompts to perform tasks like collecting inputs, calling APIs, or triggering workflows."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/AIAgent/manage-conversation"
    icon="rocket"
    title="Test and Deploy"
    description="Validate your agent's behavior in a development environment before safely publishing to production."
  />
</ArticleCardGrid>

<!-- Here’s what you will find and can customize in every part of the AI agent setup.


| Configuration Area       | Purpose                                                 | What You Define                                                                   |
| ------------------------ | ------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **AI Agent Profile**     | Establishes the agent’s identity and scope.             | Name, role, supported region, model, and data policies.                           |
| **Persona & Tone**       | Shapes the agent’s personality and communication style. | Welcome message, fallback handling, tone, and brand voice alignment.              |
| **Conversations**        | Defines what the agent can do and how it responds.      | Prompt-based logic, input collection, workflows, fallback flows.                  |
| **Voice AI Settings**    | Enables and tunes voice-based interactions.             | Voice model, speech-to-text accuracy, and conversation pacing.                    |
| **Global Components**    | Centralized control of variables and data context.      | System, session, user 360, and output variables.                                  |
| **Testing & Publishing** | Ensures quality before going live.                      | Preview conversations, validate logic, and publish to lower or live environments. | -->

---

Your AI Agent starts with a personality. Use Super Agent to define its tone and persona, shaping how it communicates and engages with users.

Once configured, the agent delivers consistent chat, voice, and multi-turn interactions—aligned with your brand, meeting user expectations, and scaling with ease.



#### Switch to your base environment
All AI Agent development and testing should be done in non-production environments (Development, Sandbox, or Staging). You then need to validate the AI agent throughly before publishing. 

Once an agent is ready, publish it to the Live/Production environment to make it available to end users.

1. Use the environment switcher in the top-right corner to move between environments.
   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/environment.png)


## Create a new AI Agent (for Super Admins)

Only Super admins can create a new AI agent. 


To create an AI agent, follow these steps:

1. Login to [Yellow.ai](https://cloud.yellow.ai/) platform.

2. Go to the **Overview** page > click the **AI-agent** drop-down > + **Create AI agent**.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/create-agent.png)

3. Click **+ Create AI agent**.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/create-AI-agent.png)

4. Choose the **Subscription** and appropriate **Data storage region** where your agent’s data will be hosted and click **Next**.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/selectregion.png" alt="drawing" width="50%"/>

5. Define the following details and click **Next**.

   | Field Name | Description|
   ------------|--------------
   Name | Enter a unique name for your AI agent.
   Choose avatar | Select an animated avatar to visually represent your AI agent.
   Select a persona | This defines the agent’s tone and communication style. You can select from the following personas:<br/>* **Polite and persuasive**: Ideal for sales agents.<br/>* **Empathetic and helpful**: Best suited for support agents.<br/>  **Witty**: Best for marketing agents.
   Role |  Describe the role of the AI agent in less than 400 characters. <br/>For example, you are a banking assistant who helps users with Yellow Banking-related queries. Your role is focused on assisting with personal loans-guiding users to apply loan, checking loan status, and answering loan specific questions for better accuracy and support.  

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/createpage.png)  

6. Provide either your website URL or upload documents. This content will be used to train the AI agent.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/knowledgeai1.png)
   
* After adding the knowledge source, your AI agent will be created and ready for further configuration. 
   
     ![](https://cdn.yellowmessenger.com/assets/yellow-docs/settingAI.png)
     
* You will be redirected to the **Copilot** page, where you can Start typing your question or query based on the knowledge you have stored to retrieve relevant information.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/copliot.png)

After setting up the [Super Agent](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona), you can configure the [Agent](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agent) with the exact use cases and workflows it should manage. This structured approach improves clarity and makes it easier to scale and maintain.   

<ArticleCardGrid>
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona"
    icon="robot"
    title="Define Super agent profile"
    description="Set high-level agent identity, tone, and behavioral defaults for a consistent user experience."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations"
    icon="wrench"
    title="Configure your agent"
    description="Build and configure specific conversation to handle distinct use cases and user intents."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#add-actions-to-your-ai-agent-prompts"
    icon="book"
    title="Add Actions to your AI agent prompts"
    description="Add Actions to your AI agent prompts to perform tasks like collecting inputs, calling APIs, or triggering workflows."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/studio/kb/overview"
    icon="book"
    title="Add Knowledge Base sources"
    description="Add Actions to your AI agent prompts to perform tasks like collecting inputs, calling APIs, or triggering workflows."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/AIAgent/kb-agent-config"
    icon="book"
    title="Configure Knowledge Base agent"
    description="Connect and organize your content sources to enable your AI agent to deliver accurate and relevant answers."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/AIAgent/manage-conversation"
    icon="rocket"
    title="Preview your agent"
    description="Validate your agent's behavior before publishing to production."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/AICopilot/ai-copilot-debugger"
    icon="rocket"
    title="Test your agent using Copilot"
    description="Use Copilot to simulate conversations and test how your AI agent responds."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/AIAgent/automated-agent-testing"
    icon="rocket"
    title="Automate agent using Test suites"
    description="Automate testing of your AI agent using test suites to ensure consistent behavior and reliability before publishing to production."
  />
  <ArticleCard
    href="https://docs.yellow.ai/docs/platform_concepts/AIAgent/manage-conversation"
    icon="rocket"
    title="Publish your AI agent"
    description="Publish your fully tested AI agent from development to live environment to make it available for end users."
  />
</ArticleCardGrid>