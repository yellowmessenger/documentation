---
title : Orchestrator LLM
sidebar_label : Orchestrator LLM
---
## OrchLLM overview

Orchestrator LLM (Large Language Model), our in-house fine-tuned advanced conversational AI model, that enhances the capability of chatbots to orchestrate multiple goals within a single conversation.

Orchestrator LLM understands user queries, retains context throughout the conversation, and triggers appropriate flows or responses based on the context. It maintains the entire user context history and can dynamically switch between multiple user goals while guiding users towards goal completion.

### Key features of Orchestrator LLM:

* **Zero training**: Orchestrator LLM eliminates the need for training bots with specific utterances and intents, as it intelligently understands and responds to user queries without requiring extensive training data.
* **Context retention**: Orchestrator LLM effectively maintains context within conversations, allowing chatbots to understand and retain the context of user queries throughout the conversation.
* **Context switching**: It seamlessly handles context switching, enabling chatbots to switch between multiple queries within a single conversation without losing continuity.
* **Flow Orchestration**: Orchestrator LLM efficiently organizes and oversees multiple flows within a single bot. It ensures that the right flow is triggered based on the user's current context and conversation history.
* **Handles small talk and off-topic inquiries**: Orchestrator LLM has the capability to generate small talk and off-topic inquiries, allowing chatbots to engage users in conversation during idle moments or context switching.

### How does Orchestrator LLM work?

Let's see how Orchestrator LLM manages context switching and guides conversations towards the primary goal of the user.

![](https://imgur.com/UNHrxID.png)

In the below example, let's see how an Orchestrator LLM helps users achieve their primary goal (apply for a credit card) and how it handles context switching and triggers relevant flows.
 
Here's the conversation between bot and user, along with how Orchestrator LLM handles each conversation:

Bot: Hi, how can I help you? 

> Orchestrator LLM understands the user's inquiry.

User: I wanted to check how to apply for a credit card?
> Orchestrator LLM recognizes the user's main goal of applying for a credit card.

Bot: Sure I can help you with that. You can go to the website and apply for it. Here is the process:<br/>Step 1 : Xyz<br/>Step 2: Abc 
> Orchestrator LLM provides guidance on how to apply for the credit card.

User: But I tried that already it was asking for my account ID. How can I find that?
> Orchestrator LLM understands the **context switch** and prepares to assist with finding the account ID.

Bot: Sure. I can help you with that. Please tell me your registered email ID.

> Orchestrator LLM triggers the  specific flow to check account id and prompts the user for necessary information to retrieve the account ID.

User: rio@gmail.com	

> Orchestrator LLM retrieves the account ID (1234ABCD) and provides it to the user.

Bot: Hi Rio, your account ID is 1234ABCD. You can use that to proceed on the website and apply for the credit card.

> Orchestrator LLM confirms the account ID and encourages the user to continue with the credit card application process.

User: Thanks. Before that, can you please tell me if there are any application charges? 

> Orchestrator LLM recognizes the new question (**switched context**) and prepares to fetch relevant information from the **Knowledge base**.

Bot: There are no application charges for credit card. Go ahead and apply for credit card.

> Orchestrator LLM provides the user with information regarding application charges for the credit card.

Throughout the conversation, Orchestrator LLM retains the context that the user's main goal is to apply for the  credit card.



### Limitations of OrchLLM

Here’s a refined version of the known limitations for V1 (GPT-4o/4/3.5) and V2:


1. **Limitations of V1 (GPT-4o/4/3.5)**:

   1. **Negation of Intents**: Negation of intents will not function unless specified in the prompt (e.g., "I don’t want a demo").
   2. **Contextual Responses**: Contextual questions (e.g., "Why do you need my email?") will default to fallback responses instead of being addressed by Orch.
   3. **Disambiguation**: The system does not support disambiguation.
   4. **Conversation History**: Clicking the home button will clear the conversation history. By default, conversation history is cleared after 24 hours.

   :::info
   The limitations identified for V1 are actively being addressed and enhancements are planned for future versions. We are committed to continuous improvement to enhance user experience.
   :::

2. **Limitations specific to OrchLLM**:

   1. **Node Functionality**:
        1. Inputs for comment nodes will not be considered for switching.
        2. QR button clicks will not trigger switching if an outward connection from the button is available.
        3. Goal nodes are excluded from switching.

   2. **Architecture Compatibility**: OrchLLM does not support mother-child bot architecture.
   3. **Language Availability**: Currently, OrchLLM is only available in English.

--- 

## Setup Orchestrator LLM

### Key considerations for building an OrchLLM bot:

These are the things to consider to build tailored conversations:


1. **Define the bot persona**: Clearly outline the bot's capabilities and limitations.
2. **Manage FAQs effectively**: Move FAQs into a knowledge base and avoid inputting a large number directly into the Orch prompt.
3. **Aim for accuracy**: Limit triggers and flows to 20-30 to improve performance.
4. **Summarize intents**: Condense existing intent-based bots into clear, concise descriptions when transitioning to OrchLLM.
5. **Consider Sandbox environment limitations**: Be aware that enabling OrchLLM in a sandbox will lead to publishing in higher environments.

---

### Configure Orchestrator LLM bot

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
Newyork tour details | When user asks travel related questions that are specific to Newyork only.
Age restriction for renting car | When a user specifically asks about "age restrictions" for vehicles.
Tipping guidelines | When user wants to know about the tipping guidelines that are in place for travellers.
Visa requirements | When user needs information regarding visa requirements.

![](https://imgur.com/joK3Bx5.png)
    
4. Click **Preview** > **Preview current flow** to test the bot.

    ![Orch LLM gif](/img/cdp/orchllm.gif)


---

## Triggers description guidelines

1. **Conciseness**: Write descriptions that are neither too long nor too short; aim for clarity.
2. **Avoid example utterances**: Do not include example utterances; focus solely on the descriptions. If necessary, you can add one or two exceptional utterances.
3. **Trigger conditions**: Clearly specify when to trigger and when not to trigger.
4. **Clarity over completeness**: No need of listing all keywords, but ensure the description is clear.
5. **No unused triggers**: Avoid leaving unused triggers, as they unnecessarily increase prompt length and associated costs.

   ![img](https://i.imgur.com/aGL7bHs.png)

## Testing OrchLLM bot

1. **Review logs**: Examine logs when the bot provides unexpected responses.
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

