---
title: Configure Agent    
sidebar_label: Configure Agent  
---

An Agent is a task-specific unit within the AI agent system, responsible for handling a defined use case such as booking a flight, tracking an order, or processing a return.

Each agent is designed to focus on how to complete the task it receives not what task to perform. The Super Agent determines the intent and delegates the query to the relevant agent. Once assigned, the agent executes the task using its configured logic and actions.

Within each agent, you can configure actions to guide conversations and perform relevant operations. Key actions include:
* [Collect user input](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#get-input): Collect information from users (example, travel date, booking ID) through prompts during the conversation.
* [Trigger Workflow](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#call-workflow): Trigger a predefined workflow to perform backend tasks such as database entry, API calls, or sending confirmations.
* [Redirect to Fallback flow](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#call-a-fallback): Redirect the conversation to a fallback flow when the agent cannot understand the user input or complete the task.
* [Store and retrieve variables](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#variables): Store, retrieve, and pass data between agents and workflows to maintain context and personalize responses.

### Create an Agent

To create an agent from scratch, follow these steps:

#### Step 1: Create a new Agent

1. Navigate to **Automation** > **AI agent lab** > **Agents** > **+ New agent**.

     ![](https://cdn.yellowmessenger.com/assets/yellow-docs/AIagentlab.png)
     
2. By default, the agent name is auto-filled. To rename the agent, click the **Edit** icon next to the name.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/editagent.png)
    
3. Enter the agent’s name and click the **Save** icon.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/saveagent.png)
    
* The newly created agent will display under the Agents section.
    
#### Step 2: [Design Conversation](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations)
    
1. In the **Start trigger** and **Prompts** section, define how the conversation should begin and what the agent should say or ask.

   ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/AGENTS.png)
   
#### Step 3: [Add Actions in Prompt section](https://docs.yellow.ai/docs/platform_concepts/AIAgent/get-input)

Within prompts, use Get Input actions to collect user information such as name, email, or booking details.

#### Step 4: [Call workflow](https://docs.yellow.ai/docs/platform_concepts/AIAgent/call-workflow)

Use the Call Workflow action to trigger backend logic. Workflows allow the agent to fetch or store data by integrating with APIs or databases to enable dynamic and automated conversations.

#### Step 5: [Variables](https://docs.yellow.ai/docs/platform_concepts/AIAgent/aigent-variables) 

Store user responses or fetched values in variables. These variables can be reused across the conversation for data handling.

#### Step 6: [Test the Agent](https://docs.yellow.ai/docs/platform_concepts/AIAgent/manage-conversation#ai-copilot)

Use Copilot or Test Suites to simulate user conversations. Verify how the agent responds, whether logic is working correctly, and if data integrations behave as expected.

#### Step 7: [Preview and Deploy](https://docs.yellow.ai/docs/platform_concepts/AIAgent/manage-conversation)

Once the agent behavior is validated, save all configurations. The agent is now ready to be published on channels such as WhatsApp, Voice, and other channels.

## Best practices for creating an Agent


Designing an Agent is important in the conversation, data handling, actions, and testing. Follow these best practices while creating agents:

1. **Define the purpose clearly**
   * Identify the key goals the agent should achieve (example, booking, support, FAQs).
  
2. **Start with a Conversation design**
   * Use the Start trigger to set user expectations with a clear welcome message.
   * Define prompts for common use cases with static and dynamic prompts.
   * Guide users step-by-step using friendly and  conversational language.

3. **Use Prompts wisely**
   * Use Static Prompts to display information without expecting input.
   * Use Get Input prompts to collect user data (name, email, phone, Location).
   * Keep prompts short and focused, avoid asking multiple questions in one message.

4. **Add Workflows for dynamic logic**
    * Use Call Workflow actions to fetch or push data from/to APIs or databases.
    * Ensure workflows are modular and reusable across different agents or flows.
    * Handle API errors and add fallback responses

5. **Use Variables**
   * Store user responses or API outputs in variables and reuse them across the conversation.
   * Personalize conversations using variables (example, "Hi {{user_name}}"").
   * Follow naming conventions (example, user_name, booking_id) to maintain clarity.