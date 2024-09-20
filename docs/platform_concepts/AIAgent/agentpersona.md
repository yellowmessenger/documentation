---
title: Set characteristics and behavior of AI Agent  
sidebar_label: Define AI agent persona  
---




## **Define Persona**

Define the persona for your AI agent here. This section focuses on designing how the agent should respond to users.

:::note  
- All fields marked with * are mandatory.
- Click **Save** after making the changes.
:::

![image](https://imgur.com/inUFUhO.png)

### Agent Name

Choose a name for the agent that resonates with your customers.

> Example: Mia

### Agent Persona

Agent persona defines how the AI agent interacts with users. A well-defined persona ensures consistent, engaging, and aligned interactions. You can select from the following personas:

* **Polite and persuasive**: Ideal for sales agents.
* **Witty**: Best for marketing agents.
* **Empathetic and helpful**: Suited for support agents.

### How Should the Agent Welcome Users?

This is the initial message users will see when the bot opens.

> Example: Hey, I'm Mia from Yellow Banking. How can I assist with your banking needs today?

### Describe the Agent's Role and Scope

In fewer than 300 characters, explain the agent’s role. This helps the agent understand what topics to cover and what to avoid.

> Example: You are a banking assistant who helps users with Yellow Banking-related issues and queries. You can persuade people to take personal loans, check the status of existing loans, and answer general queries about loan processes.

### How Does the AI Agent Handle Unanswered Queries?

Specify the response when the agent cannot help with a query.

> Example: I couldn't assist with your current query as I am still learning. Please reach out to my human colleagues at support@yellow.ai.

### Rules to Follow During Conversation

Click **+Add rule** to include multiple rules for conversations. Each rule can be described in up to 200 characters.

> Example:  
> - Always respond within 50 words or less.  
> - You should sound reliable and make users trust that Yellow Loans are an investment in their bright future.  
> - Always ask users if they want to apply for a new loan as a follow-up.  
> - If the user seeks help on multiple topics, consider it small talk and ask which topic they prefer to start with.

Click **Delete** icon to delete any rule. 

### How to Handle Out-of-Scope Queries

In fewer than 500 characters, explain how the bot should respond to questions outside its persona.

> Example: If users ask about topics beyond loan needs or banking, or discuss competitors, politely re-emphasize that you are here to assist with loan needs only.


---

## **AI Agent Settings**

Under settings, you can configure the model and conversation memory.

![image](https://imgur.com/xJKxWuE.png)

### Account

Select the account name for which the LLM is enabled. 

Click **+Add account** to configure a new LLM account and follow [these steps](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/llm#configure-llm-in-yellowai).

### Model

Choose from the enabled models to select which LLM the AI agent will use.

This cab be powered by third-party LLMs such as GPT-3.5, GPT-4, Claude Opus, Google Gemini, Anthropic, and other models to generate customized responses but by default, in-house model is used to generate responses.

### Conversation Memory

Set how many previous exchanges are remembered for context-aware replies.

* **4 messages**: Recommended for bots using a knowledge base, as customer questions are usually straightforward and answered quickly within 3-4 messages.
* **8 messages**: Recommended for bots without a knowledge base, where longer conversations may be needed to resolve queries.


