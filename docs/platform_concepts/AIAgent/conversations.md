---
title: Configure AI agent conversations   
sidebar_label: Configure AI agent conversations  
---

AI agent conversations let your users interact naturally with your agent by asking questions and getting relevant answers or help. Instead of building complex rules, you set up conversations using simple prompts and instructions. 

Our prompt-based configuration makes it easy to create flexible, human-like dialogues that can handle anything from basic questions to more advanced tasks. You only add extra logic when needed, keeping the setup simple and efficient.

This approach is more efficient because it:

* Understands user intent more effectively
* Responds with contextual relevance
* Eliminates the need for complex scripting or flowchart-like designs

### Key components of the AI Agent conversation

The conversation design is modular and built with flexibility in mind. You can configure the following:

* **Start triggers** – Detect user intent and launch the appropriate conversation.
* **Prompts** – Define how the AI agent interacts, asks questions, and provides answers.
* **Actions** – Collect user inputs, handle fallback scenarios, or trigger backend logic.
* **Variables** – Store user inputs and context to maintain continuity throughout the conversation.
* **Workflows** – Integrate with backend systems to fetch, process, or update data.

---

## Setup agent conversations

You can set up agent conversations using Start trigger and Prompts, which define how and when the AI agent initiates and responds during a conversation.

To set up agent conversations, follow these steps:

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
   
#### Step 3: [Add Actions in Prompt section](https://docs.yellow.ai/docs/platform_concepts/AIAgent/aiagent-architecture#add-actions-in-prompts)

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
   * Personalize conversations using variables (example, `"Hi {{user_name}}")`.
   * Follow naming conventions (example, user_name, booking_id) to maintain clarity.

:::info
Use **Help** button on the top. Help section provides a sample structure that shows how a conversation should be designed. It includes examples of how to define start triggers and write prompts. This helps users understand how to structure conversations.
:::

### Start trigger

A Start trigger is the initial message that initiates a conversation between the AI agent and the user. It acts as the entry point that tells the AI agent when to begin a specific conversation.

Start trigger ensures that the right conversation is initiated at the right time. When a user's message matches the trigger (example, a keyword or intent), the configured conversation will be triggered.

Types of inputs that can be used as Start Triggers:

* **Phrases** – Direct user expressions like "I want to book a demo".
* **Intents** – User goals, such as "Loan inquiry" or "Product help".
* **Keywords** – Specific terms such as "support", "pricing", "Loan inquiry", or "Product help", "apply now".

**Examples of start triggers**:

* When the user says they want to apply for a loan, such as: "I want to apply for a loan", "Help me get a loan", "Apply for personal loan", or similar variations.
* When the user wants to cancel a flight ticket, such as: "I want to cancel my flight ticket", "Help me cancel my flight", "Need to cancel my plane ticket", "Cancel my trip booking", or similar variations.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/starttrigger.png)

### Prompts

A prompt is a set of instructions that tells the AI agent what to say or do during a conversation. It guides the conversation flow and helps the agent respond appropriately based on the user’s input

In conversation design, a prompt can be a question, confirmation, statement, [call to action](#step-3-add-actions-in-prompt-section) (Get input, call worflow, or call fallback), or [Variables](#step-5-variables).

Prompts can be used to:
* Ask the user a question and wait for a reply
* Show information or messages
* Trigger backend tasks (like calling an API or updating a database)
* Validate user inputs and handle errors

A well-written prompt keeps the conversation clear and natural. Key elements include:
* **Tone**: Tone sets the interaction between AI agent and user. Examples:<br/> * **Friendly**: "Hey there! What can I help you with today?"  <br/>* **Professional**: "Please provide your invoice number to proceed".
* **Clarity**: Use simple, direct language. Avoid technical jargon, complex phrases, or ambiguous terms. Clear vs Vague example:
   * When would you like to schedule your appointment? (Clear and actionable)
   * Provide a preferred timeslot. (Vague and robotic)
* **Context**: Give users enough context to understand why you are asking something. This makes the conversation feel logical and purposeful.
Example: "To check your order status, I will need your order ID".

**Best practices**

While writing the prompts, consider the following best practices:
* **Keep it short and conversational**: Use simple, friendly language that feels natural to the user.
* **Handle unexpected inputs**: Always include fallback prompts to guide users back on track if they give incorrect or unclear responses.
* **Validate user input**: Use clear instructions and examples to show users the correct format. Example: Enter a 10-digit phone number with country code (example, +91 9876543210).
* **Use quick replies or buttons**: Help users respond easily and reduce mistakes by offering predefined response options.

Below is a sample screenshot showing how prompts are written:

  <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/promptsample1.png" alt="drawing" width="90%"/>  

  <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/demo-icp.png" alt="drawing" width="90%"/> 

  <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/loanemi.png" alt="drawing" width="90%"/> 

---

## Add Actions to your AI agent prompts

Actions let the agent collect input, run workflows, or handle fallbacks—making conversations more dynamic and goal-driven. 

In the Prompt section, you can add the following actions:

* [Get input](https://docs.yellow.ai/docs/platform_concepts/AIAgent/get-input): Collect specific information from the user, such as their name, phone number, and email.
* [Call workflow](https://docs.yellow.ai/docs/platform_concepts/AIAgent/call-workflow): Trigger an external process or function, such as retrieving data from a database, calling an API, or executing backend operations, allowing the AI agent to handle complex tasks.
* [Call a Fallback](https://docs.yellow.ai/docs/platform_concepts/AIAgent/call-fallback): Trigger a predefined fallback action when the AI agent is unable to understand or fulfill the user’s request.

:::tip
You can quickly access the above actions by using the`@` shortcut key.
:::
  <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/getactions.png" alt="drawing" width="80%"/>


  











<!-- On the **Conversations** page, you can design the bot's interactions with users by writing prompts that define workflows (dynamic flows). These prompts, along with fine-tuned responses, enable the bot to understand user inputs and provide appropriate outputs, eliminating the need for traditional NLP training.

With **OrchLLM**, intent is identified, allowing for context-based conversations and seamless flow switching. A well-designed bot should manage multiple conversations, such as a banking bot handling loan applications, checking account balances, or creating bank accounts. Structuring these distinct flows ensures the bot can deliver accurate, context-aware responses for various requests.

-----

## Create new conversations

To create new conversations, follow these steps:

1. Click **+New conversation**.  

   ![image](https://imgur.com/5OcY2GO.png)

2. **Add basic introduction**:
    - **What does the user say to start this goal?**: Add the keywords or messages (separated by commas) that will trigger this conversation. For example, if the user wants to apply for a loan, keywords like "needs a loan" or "financial needs" should trigger the goal.
    - **Start message**: Write the message that will be displayed once the conversation is triggered, within 200 words. For example: "I'm glad you decided to take the first step towards your financial needs. What can I call you?"  

   ![image](https://imgur.com/rt2nTRw.png)

3. **Goal setup**: Define how the conversation will proceed and what the bot must do.
    - **Steps to follow to achieve the goal**: In 2000 words, describe how the conversation should flow. For instance, in a loan application conversation:
      ```
      1. After the user shares their name, ask for their mobile number (mandatory for loan processing).
      2. Check if there's an existing loan associated with the phone number. If so, show loan details and ask the user to contact support@yellow.ai for further assistance, as only one loan is allowed per user.
      3. If no loan exists, ask for the loan amount and repayment tenure. The tenure must be between 6 months and 5 years. Provide 5 options for both the amount and the tenure.
      ```
    - **Rules to follow during the conversation**: Define rules for the bot to follow, such as addressing the user by name. You can add rules by clicking **+ Add rule** and remove them by clicking the delete icon.  

   ![image](https://imgur.com/q1jeIa9.png)

4. **Handle user queries**: Set instructions on how the bot should handle user responses.
    - **Custom instructions**: Enable custom instructions if you want the bot to recognize specific user questions and provide predefined responses. You can list these custom instructions within 500 words. For example: When asked about interest rates, respond that they are competitive, based on credit score, loan amount, and term.
    - **Handling out-of-scope queries**: Provide guidelines (within 500 words) on how the bot should respond when the user asks questions outside the scope of the conversation. 

   ![image](https://imgur.com/ImuxdFX.png)


-------

## Configure conversations 

### Add inputs 

To capture and store user input in memory, you can configure the Agent. This is useful when you want to reuse the data later or apply it to other functions. For example, if the user's name is collected, the bot can use it in future interactions, personalizing the conversation and adding a human touch.

To configure input storage, follow these steps:

1. On the **Configure** tab, click **+Add Input** to add a new input field.

   ![image](https://imgur.com/QhaeHmB.png)

2. Provide the following details:
   - **Input description**: Describe what needs to be captured. For example, if you're collecting a user’s name, you can enter *User name*.
   - **Store response in**: Select the variable where the captured input will be stored. You can create or use an existing global variable to store this response.
   - **Validation instructions**: Provide instructions for validating the input. For example, if capturing a name, specify that only the first part should be stored as the first name.

   ![image](https://imgur.com/kSR96sT.png)

3. To delete an input, click the **Delete** icon.

   ![image](https://imgur.com/iVSyOQz.png)

4. To configure additional settings, click the **Settings** icon for that input. You can define:
   - **Mark as optional**: This marks the input as optional, meaning the agent won’t prompt the user again if they skip it.
   - **Mask input**: If enabled, the input will be masked for privacy (e.g., confidential information like credit card numbers). The data won’t be visible to the agent or stored in the database.
   - **Regex for validation**: If specific patterns (like an email address) are expected, provide the required regex pattern.
   - **Examples of expected input**: Add sample input examples that the agent should expect based on the regex.

   ![image](https://imgur.com/jYFlB3R.png)

> Inputs not marked as optional are considered mandatory.

--------


### Add workflows 

Workflows are background processes built with Action or Logic nodes that enhance the bot by performing tasks like calling functions, executing APIs, and managing databases. They can be linked to categories and triggered within conversations.

To add a new workflow:

1. Click **Add workflow**.  
   ![image](https://imgur.com/ltfEGht.png)

2. Follow the steps to create a workflow from the flows page: [Create a Workflow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#create-a-skill). 

3. Select the workflow you want to add from the dropdown.  
   ![image](https://imgur.com/jZYtsNC.png)

4. Describe when this workflow should be triggered. For example, "This workflow checks if the user has existing loans with Yellow Loans and fetches the details."

5. **Input to workflow**: Select the variables that will pass inputs from the conversation to the workflow.

6. **Output from workflow**: Choose the variables to store outputs/responses generated by the workflow.

7. Add the response to be displayed after the workflow completes. You can add multiple text responses, and one will be picked randomly.  
   ![image](https://imgur.com/pUDmvtk.png)

8. Click the delete icon to remove a workflow.


------

## Failure settings

When a user provides an unexpected input and the bot cannot comprehend it, this is considered a failure. In such cases, specific actions must be taken. Configure the failure settings for the conversation as follows:
1. **Enable retries**: Allow users to retry if they input a value that is not as expected by the bot. Enabling this feature prompts users to input the correct value again.
2. **Failure message**: Enter a message to display when a failure occurs. You can click **+Add message** to add up to two messages. Use the delete icon to remove any entered message. 
3. **Configure timeout**: Set a timeout value in seconds. If the bot is expecting a response and no input is received within the configured time, it will trigger a timeout.
4. **Max conversation limit**: Enter a limit for how many attempts a user can make. Once this limit is reached and the conversation is still incomplete, the node will exit into the failure branch.
5. **Restrict ill-formatted responses**: If enabled, the bot will handle cases where the LLM sends improperly formatted responses (e.g., containing unwanted JSON) by pushing them to the failure branch. Disabling this option allows these responses to be displayed to the user, but may result in increased failures.

![Failure settings](https://imgur.com/b01cZ26.png)

----------

## Manage conversations

1. **Delete a conversation**: Click the ellipsis menu and select **Delete**.  

   ![Delete conversation](https://imgur.com/tQXE8Q6.png)

2. **Modify workflow name**: Click the existing workflow name to edit it. 

   ![Modify workflow name](https://imgur.com/T9m2CSb.png)

3. **Preview**: Click the preview icon to test the bot for the selected conversation. You can adjust the rules and goals based on how the bot functions during the test. 

   ![Preview conversation](https://imgur.com/rXInEHW.png)

4. **Save workflow**: Click **Save** to apply changes made to the workflow.  

   ![Save workflow](https://imgur.com/ZEz45zt.png) -->


