---
title : Orchestrator LLM
sidebar_label : Orchestrator LLM
---
## Orchestrator LLM (OrchLLM) overview

**Orchestrator LLM** is Yellow.ai’s in-house fine-tuned Large Language Model (LLM) that powers intelligent, multi-goal conversations for AI agents. It enables agents to retain user context, handle context switches seamlessly, and orchestrate multiple goals within a single conversational flow—without requiring extensive training data.


### What Makes OrchLLM Powerful?

| Feature                         | Description                                                                                          |
|----------------------------------|------------------------------------------------------------------------------------------------------|
| **Zero Training Required**       | Understands and responds to user queries without predefined utterances or intents.                  |
| **Persistent Context**           | Maintains full context throughout a conversation, even across topic switches.                      |
| **Smart Context Switching**      | Seamlessly switches between different user intents while remembering the primary goal.             |
| **Flow Orchestration**           | Dynamically triggers the right flows based on user queries and conversation history.               |
| **Small Talk Handling**          | Responds to off-topic or casual messages to maintain conversational continuity.                    |

---

### How OrchLLM works

OrchLLM intelligently identifies user goals, manages context switches, and drives the conversation toward the intended outcome—without needing manual flow design.

![OrchLLM Context Switching](https://imgur.com/UNHrxID.png)

#### Example Conversation Walkthrough:

**AI Agent**: Hi, how can I help you?  
> OrchLLM begins listening and interpreting user intent.

**User**: I wanted to check how to apply for a credit card?  
> Detects **primary goal**: apply for a credit card.

**AI Agent**: Sure! Here’s how you can apply:  
Step 1: Xyz  
Step 2: Abc  
> Shares guided steps based on credit card application flow.

**User**: But I tried that. It asked for my account ID. How do I find that?  
> **Context switch** detected—now helps with account ID.

**AI Agent**: Sure. Please share your registered email ID.  
> Triggers **account lookup** flow.

**User**: rio@gmail.com  
> Retrieves and confirms user data.

**AI Agent**: Hi Rio, your account ID is 1234ABCD. Use it to apply on the website.  
> Brings user back to original goal.

**User**: Are there any application charges?  
> New question detected—fetches from **Knowledge Base**.

**AI Agent**: There are no charges to apply for a credit card.  
> Responds from structured knowledge and keeps user focused.

✅ OrchLLM ensures the main goal—credit card application—is never lost, while managing sub-tasks gracefully.


### Known limitations

#### V1 Limitations (GPT-4o / 4 / 3.5)

| Limitation                      | Description                                                                                  |
|----------------------------------|----------------------------------------------------------------------------------------------|
| **Negation Understanding**       | Queries like "I don’t want a demo" require explicit prompt design.                          |
| **Contextual Questions**         | Queries like "Why do you need my email?" are not handled natively.                          |
| **No Disambiguation Support**    | Unable to clarify ambiguous user requests.                                                  |
| **Conversation Reset**           | Clicking "Home" or 24-hour timeout clears conversation history.                             |

> These issues are actively being addressed to enhance future versions.


#### OrchLLM-Specific Limitations

| Category              | Limitation                                                                                     |
|------------------------|-------------------------------------------------------------------------------------------------|
| **Node Limitations**   | - Comment node inputs are not considered for switching.  
                         - QR button clicks don’t switch if connected externally.  
                         - Goal nodes are excluded from switching logic.              |
| **Architecture**       | Does not support **mother-child AI agent** hierarchy.                                          |
| **Language Support**   | Currently available only in **English**.                                                      |




### Key Considerations for Building an OrchLLM-Powered AI Agent

To design meaningful and high-performing conversations with OrchLLM, keep the following best practices in mind:

1. **Define a Clear AI-Agent Persona**  
   Establish the tone, capabilities, and limitations of your AI-agent to align with your business objectives and user expectations.

2. **Optimize FAQ Management**  
   Move large sets of FAQs into the **Knowledge Base** instead of directly embedding them in the OrchLLM prompt. This improves maintainability and reduces model overload.

3. **Maintain Flow Efficiency**  
   Keep the number of triggered flows between **20–30**. Fewer, focused flows lead to better performance and quicker responses.

4. **Simplify Intent Descriptions**  
   When migrating from intent-based models, summarize and rewrite intent descriptions clearly and concisely for OrchLLM prompts.

5. **Understand Environment Implications**  
   Enabling OrchLLM in the **Sandbox** environment will also activate it in **higher environments** (e.g., Staging, Production). Plan your releases accordingly.

---

## Setup OrchLLM for a Chatbot flow

To configure Orchestrator LLM for a flow:

1. Go to **Automation** > **Build** > **Flow** > **Create flow**.

    ![](https://imgur.com/2OodRrj.png)

2. To create a flow from scratch, click **+ Create flow**.

   ![](https://i.imgur.com/gT5aZAZ.png)

3. Click on **Start** trigger, enter the **Trigger name** and **Description**, and then click **Add**. Note that you need to provide an accurate description as Orch LLM will use this information to trigger the appropriate flow based on the provided description. Learn more about [guidelines for trigger descriptions](#triggers-description-guidelines).

    ![](https://imgur.com/joK3Bx5.png)

Following are the sample descriptions:

Trigger name | Description
-------------|-------------
Promocode | When a user specifically asks questions related to "promo codes"
Payment related query | When a user explicitly requires assistance with making payment for their reservation. You need to include user queries, for example: "Can you help me in making payment?", "Charge me on my credit card", or "Need assistance in making payment".
Cancel booking | When a user explicitly requires assistance in cancelling their booking or reservation. You need to include user queries, for example, "Cancel my reservation for me" or "Could you cancel it for me?".
FAQs | When a user has generic queries related to payments for reservations, without requiring direct assistance in making the payment. For example, "How do I complete payment?", "How can I make payment for my reservation?".
Add travel companion | When a user explicitly requests to connect two or more reservations, for instance: "Link my reservation".
FAQs about cancellation |  A user seeks information about the process of canceling a reservation. They are not looking for assistance with the actual cancellation.
New York tour details | When user asks travel related questions that are specific to New York only.
Age restriction for renting car | When a user specifically asks about "age restrictions" for vehicles.
Tipping guidelines | When user wants to know about the tipping guidelines that are in place for travelers.
Visa requirements | When user needs information regarding visa requirements.

   ![](https://imgur.com/joK3Bx5.png)
    
4. Click **Preview** > **Preview current flow** to test the AI-agent.

    ![Orch LLM gif](/img/cdp/orchllm.gif)


---

## Triggers description guidelines

1. **Conciseness**: Write descriptions that are neither too long nor too short; aim for clarity.
2. **Avoid example utterances**: Do not include example utterances; focus solely on the descriptions. If necessary, you can add one or two exceptional utterances.
3. **Trigger conditions**: Clearly specify when to trigger and when not to trigger.
4. **Clarity over completeness**: No need of listing all keywords, but ensure the description is clear.
5. **No unused triggers**: Avoid leaving unused triggers, as they unnecessarily increase prompt length and associated costs.

   ![img](https://i.imgur.com/aGL7bHs.png)

## Testing OrchLLM AI-agent

1. **Review logs**: Examine logs when the AI-agent provides unexpected responses.
2. **Assess reasoning**: Check the reasoning provided in the output and adjust the description or prompt as needed.
3. **Report hallucinations**: Note that log outputs may hallucinate; however, report any occurrences that happen repeatedly.

   ![img](https://i.imgur.com/R3snGEp.png)

**Example log output**:

```json
{
  "tools": ["compensation change"],
  "reasoning": "The user request is about changing the compensation of an employee, which aligns with the tool 'compensation change.'",
  "response": ""
}
```

   ![img](https://i.imgur.com/rsFb8Bz.png)

---

