---
title: Define Super agent    
sidebar_label: Define Super agent 
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Super agent persona sets the tone, personality, and behavior of your agent—shaping how it communicates with users throughout the conversation. A well-defined persona ensures interactions feel consistent, natural, and aligned with your brand voice.

<!-- 
The Agent persona helps you define how the agent greets users, handles queries, manages unanswered questions and
rules to follow throughout conversations.

**A well-defined persona allows the AI agent to:**

* Deliver responses that reflect the intended tone—from greeting users to resolving queries
* Manage fallback scenarios with clarity and composure
* Maintain user engagement through accurate, relevant, and context-aware replies
* Stay aligned with your brand voice and communication standards
-->

## Configure AI agent persona 

To configure AI agent persona,follow the below steps:

1. Go to **Home** > **Agents** > **Super agent**. 

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/super-agent.png)
   
2. You can update, the following:
   * [Profile settings](#update-profile-settings) 
   * [Query handling behavior](#how-ai-agent-handles-queries)    


### Update profile settings

The profile setting contains the core identity of your agent which includes name, persona, role, scope, and underlying model. These attributes are cloned from the selected template at the time of creation, but you can update them anytime to better fit your use case.

To edit the AI agent profile settings:

1. Click the **Edit** icon next to the AI agent details.

      ![](https://cdn.yellowmessenger.com/assets/yellow-docs/edit-super-agent.png)
      
* The Edit superagnet profile pop-up is displayed.

2. In the profile pop-up, you can update the following information:

   **Option** | **Description**
   ------- | ----------
   **Agent name**| Choose a name that suits your business and resonates with users.
   **Avatar** | Choose an avatar or upload a custom icon that represents your business.
   **Company** | Enter the name of the business the AI agent represents. For example: Yellow travels.
   **Model** | Select the preferred Language Learning Model (LLM) that suits your AI agent. This helps the agent respond better based on your use case, such as customer support, sales assistance, or general queries. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/LLM-central-configuration).
   **Persona** | Agent persona defines how the AI agent should interact with users. A consistent persona helps to create engaging and aligned interactions. You can select from the following personas: <ul><li>**Polite and persuasive**: Ideal for sales agents.</li><li>**Empathetic and helpful**: Best suited for support agents.</li><li>**Witty**: Best for marketing agents.</li></ul>
   **Channels** | Configure the communication channels (example, WhatsApp, Voice) where your AI agent will interact with users on that specific channel.
   **Describe your AI agent's role** | Describe the role of the AI agent in less than 400 characters. For example, you are a banking assistant who helps users with Yellow Banking-related queries. Your role is focused on assisting with personal loans-guiding users to apply loan, checking loan status, and answering loan specific questions for better accuracy and support.
   
### How AI agent handles queries

Use this section to configure the agent’s conversational behavior from how it greets users to how it responds during interactions and manages unanswered queries.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/handle-queries.png" alt="drawing" width="100%"/>

### Define Welcome message

The welcome message is your AI agent’s first response to users. Set the tone, introduce what the agent can help with, and guide users on what to do next. 

You can choose to:
* Trigger a welcome flow 
* Send a static custom welcome message, or 
* Use Instruct Super Agent to craft a personalized welcome by providing direct instructions to the AI. 


**To add a welcome message**:

1. Go to **How I handle queries** section 
2. Click the **Edit** icon next to **Choose how to welcome**.
3. Choose from the following options:
    * Instruct super agent: 
    * Trigger welcome flow
    * Send message
    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/welcome.png" alt="drawing" width="90%"/>

<Tabs class="tabs-schema">

<TabItem value="instructSuperAgent" label="Instruct superagent" default>

* Write a custom welcome message.
   * Use variables to personalize the greeting.
   * Enable **Show suggestions with welcome message** to display quick replies based on role and persona.

     <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/instruct-agent.png" alt="drawing" width="60%"/>
</TabItem>

<TabItem value="triggerWelcomeFlow" label="Trigger welcome flow">
* Select an existing or predefined conversation flow to initiate the chat.
      <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/select-flow.png" alt="drawing" width="60%"/>
</TabItem>

<TabItem value="sendAMessage" label="Send a message">
* Provide a simple greeting message. 
*Example: Hey, I'm Mia from Yellow Banking. How can I assist with your banking needs today?*
   * You can also enable **Show suggestions with welcome message** toggle to add quick replies.
     <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/send-message.png" alt="drawing" width="60%"/>
</TabItem>

</Tabs>
    
### Add rules to follow during conversation

You can define conversation rules to guide how the AI agent responds during conversations. These rules ensure consistent interactions and help control how the agent should behave in different situations.

**Guidelines for creating rules**

* Each rule can be up to 200 characters.
* Add multiple rules to handle different scenarios.
* Keep rules simple and reusable to keep the behavior consistent.


To add rules, follow below steps:

1. Click **+Add**.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/rules-add.png)

2. Enter a rule (example, Always introduce yourself by name in the first message).

     <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/rules-add-step.png" alt="drawing" width="80%"/>

3. Repeat Step 2 to add more rules.
4. Click **Save**.

### AI Safety & Conduct
  
Safeguards every AI interaction by configuring filters that ensure the AI agent communicates ethically, avoids harmful topics, and handles sensitive data responsibly. These safety checks act as guardrails to prevent issues such as hallucinations, offensive replies, or inappropriate responses.

#### Configure AI safety & conduct settings

1. Go to **AI Safety & Conduct**.

2. Click **Manage**.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/manage-safety.png)
   
3. Enable following settings based on your requirement.   

   **Customer Query Filters**

     These filters apply to incoming user messages. They help prevent unsafe or inappropriate interactions from progressing by detecting and blocking harmful content early.

   1. **Banned Topics**: Blocks conversations around restricted or prohibited subjects (example, weapons, self-harm, terrorism). Keeps the AI agent from engaging in or encouraging conversations that could lead to legal risks.

    2. **Violence**: Detects and blocks messages that contain violent, abusive, or harmful language. Ensures user interactions remain respectful and emotionally safe, especially in customer service or public-facing bots.

    3. **Sexual Content**: Filters out messages with sexually explicit or inappropriate language. Essential for maintaining a professional, inclusive, and respectful tone especially in regulated industries like education, healthcare, or finance.

    **AI Response Filters**

    These filters apply to the AI agent's own responses. They prevent the agent from generating outputs that are offensive, biased, or overly sensitive.

    1. **Sensitivity**: Detects and removes personal or sensitive data (example, names, contact info) from AI responses. Helps ensure compliance with data privacy regulations like GDPR, HIPAA, etc.

    2. **Toxicity**: Flags and blocks AI-generated content that is offensive, aggressive, or harmful. Prevents reputational damage or user distress caused by unintended toxic replies.

    3. **Bias**: Detects and reduces unfair, biased, or discriminatory language in AI responses. Promotes fairness and inclusivity, especially in AI models trained on large datasets that may contain societal biases.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/AIsafety.png)

### Fallback    

#### How to handle unanswered queries?

There may be times when the AI agent cannot answer a query due to various limitations (example, no knowledge base match, API failure, or validation error). You can configure fallback behaviors for such cases.


The AI agent may fail to respond in the following cases:
* No results found in the Knowledge Base
* API or workflow failure
* Input validation fails after multiple attempts
* System or LLM outages

To configure fallback handling:

1. Click **Manage**.

     ![](https://cdn.yellowmessenger.com/assets/yellow-docs/fallaback-manage.png)

2. Choose how the agent should respond:

   | Option                    | Description |
   | ------------------------- | ------------ |
   | **Instruct Super Agent**  | Write a custom fallback message. <br/> Example: *I am still learning and could not help with that. Please contact [support@yellow.ai](mailto:support@yellow.ai).<br/> <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/instruct-agent-now.png" alt="drawing" width="70%"/> |
   | **Trigger Fallback Flow** | Select a fallback conversation flow to guide the user when the agent cannot respond.<br/> ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/fallack-con.png)    | 

### Live transfer agent

When the AI agent is unable to resolve user queries or requires human assistance, you can configure a Live Agent Transfer flow. This ensures a smooth handover from the AI agent to a human agent for continued support.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/live-agent-transfer.png)
   
---

### Sample use cases of Agent persona

Here are a few sample examples showing how Agent persona helps improve user experience in different industries:

<Tabs class="tabs-schema">

<TabItem value="travelIndustry" label="Travel Industry" default>

**Example: “Yellow Travels” – Friendly, Insightful, Service-Oriented**
A travel platform defines its AI agent with a warm, conversational tone and a helpful demeanor.
**Impact:**

* The agent doesn’t just answer “How can I help?”—it suggests trending destinations based on the season and user’s previous searches.
* During cancellations, it avoids robotic phrasing like *"Refund request submitted"* and instead says, *"I've submitted your cancellation—your refund should be processed in 5–7 days. I’ll keep you posted!"*
* Result: Higher CSAT and reduced customer drop-offs during peak season.
</TabItem>

<TabItem value="healthCareSupport" label="Healthcare Support">
**Example: “CareBot” – Calm, Professional, Empathetic**
A digital health provider creates a bot with a carefully crafted persona: neutral, factual, but emotionally aware.
**Impact:**

* It avoids alarming language when discussing symptoms or test results, using gentle reassurances like *"It’s best to consult a doctor for a full diagnosis."*
* During mental health assessments, the tone is calm and respectful, building patient trust.
* Result: Increased usage of digital triage and better patient retention in self-service flows.
</TabItem>

<TabItem value="e-Commerce" label="E-commerce">
**Example: “ModaBot” – Trendy, Assertive, Fast-Paced**
A fashion brand’s bot uses short, stylish responses to match the brand tone.
**Impact:**

* Instead of saying *"Your item is out of stock,"* it says, *"Oops—just missed it! Want me to ping you when it’s back?"*
* The bot uses emojis and expressive copy, fitting with the brand’s Gen Z audience.
* Result: More upsells via personalized suggestions and stronger brand loyalty in DMs.
</TabItem>

<TabItem value="financialServices" label="Financial Services">
**Example: “SecureBank Assistant” – Formal, Reliable, Minimalist**
The bank defines a no-nonsense, security-first persona to reduce ambiguity in financial interactions.
**Impact:**

* The agent never uses jokes or casual metaphors—it sticks to precise, timestamped responses for actions like balance checks or transaction alerts.
* This persona builds user confidence, especially when handling tasks like card blocking or dispute submissions.
* Result: Lower escalation rates and faster completion of key flows without human intervention.
</TabItem>

</Tabs>

<!-- In the Agent section, you can configure the bot's persona, how the bot will present itself to users. This configuration focuses on defining the identity, tone, and behavior of the bot, rather than the specific conversations it will have. The bot persona settings ensure that your bot provides a consistent and human-like experience in every interaction.

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

**Welcome message**: This is the initial message users will see when the bot opens.
You can write a custom welcome message or select from an existing flow.

> Example: Hey, I'm Mia from Yellow Banking. How can I assist with your banking needs today?

### Describe the Agent's Role and Scope

In fewer than 300 characters, explain the agent’s role. This helps the agent understand what topics to cover and what to avoid.

> Example: You are a banking assistant who helps users with Yellow Banking-related issues and queries. You can persuade people to take personal loans, check the status of existing loans, and answer general queries about loan processes.

### How Does the AI Agent Handle Unanswered Queries?

**Fallback message**: Specify the response when the agent cannot help with a query.
You can write a custom fallback message or select from an existing flow.


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

This can be powered by third-party LLMs such as GPT-3.5, GPT-4, Claude Opus, Google Gemini, Anthropic, and other models to generate customized responses but by default, in-house model is used to generate responses.

### Conversation Memory

Set how many previous exchanges are remembered for context-aware replies.

* **4 messages**: Recommended for bots using a knowledge base, as customer questions are usually straightforward and answered quickly within 3-4 messages.
* **8 messages**: Recommended for bots without a knowledge base, where longer conversations may be needed to resolve queries.

 -->