---
title : Orchestrator LLM
sidebar_label : Orchestrator LLM
---

Orchestrator LLM (Large Language Model), our in-house fine-tuned advanced conversational AI model, that enhances the capability of chatbots to orchestrate multiple goals within a single conversation.

Orchestrator LLM understands user queries, retains context throughout the conversation, and triggers appropriate flows or responses based on the context. It maintains the entire user context history and can dynamically switch between multiple user goals while guiding users towards goal completion.

Key features of Orchestrator LLM:

* **Zero training**: Orchestrator LLM eliminates the need for training bots with specific utterances and intents, as it intelligently understands and responds to user queries without requiring extensive training data.
* **Context retention**: Orchestrator LLM effectively maintains context within conversations, allowing chatbots to understand and retain the context of user queries throughout the conversation.
* **Context switching**: It seamlessly handles context switching, enabling chatbots to switch between multiple queries within a single conversation without losing continuity.
* **Flow Orchestration**: Orchestrator LLM efficiently organizes and oversees multiple flows within a single bot. It ensures that the right flow is triggered based on the user's current context and conversation history.
* **Handles small talk and off-topic inquiries**: Orchestrator LLM has the capability to generate small talk and off-topic inquiries, allowing chatbots to engage users in conversation during idle moments or context switching.

## How does Orchestrator LLM work?

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

### Configure Orchestrator LLM

To configure Orchestrator LLM for a flow:

1. Go to **Studio** > **Build** > **Flow** > **Create flow**.

    ![](https://imgur.com/E0wjus1.png)

2. To create a flow from scratch, click **+ Create flow**.

   ![](https://i.imgur.com/gT5aZAZ.png)

3. Click on **Start** trigger, enter the **Trigger name** and **Description**, and then click **Add**. Note that you need to provide an accurate description as Orch LLM will use this information to trigger the appropriate flow based on the provided description.

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