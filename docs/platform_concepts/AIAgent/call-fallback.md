---
title: Call fallback
sidebar_label: Call fallback
---

Use the **Call a fallback** action to handle cases when the AI agent can’t interpret the user’s input or find a match in workflows or the knowledge base. 

Instead of ending the conversation abruptly or leaving the user without direction, the fallback action provides a predefined response to keep the conversation moving.


A fallback action is a predefined message or flow that the AI agent uses when it’s unable to handle a user input effectively. It is triggered in scenarios where the agent:

* Cannot understand or interpret the user’s input.
* Fails to retrieve a relevant response from the Knowledge Base or backend systems.

> **Examples**
> * **Chat support bot**: If the user asks something unrelated like "Tell me a joke" while booking a flight, the fallback could say, "I’m here to help with travel bookings. Would you like to check flights or cancel a ticket?".
> * **E-commerce assistant**: If the user types random characters, the fallback can guide them with suggestions like "Please select a product category to begin".

### How It Works?

When the **Call a fallback action** is triggered, the AI agent:

1. Checks for a configured fallback message or flow.
2. Sends the fallback response to the user.
3. Optionally, redirects the user to a menu, restarts the journey, or escalates the conversation to human support.

This ensures that the user receives a meaningful next step even when the AI agent doesn't have a clear answer.

### Add a fallback in prompt

1. Go to **Agents** > **Prompts** > **Go to fallback**.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/fallback1.png)
      
2. Select the fallback flow that you have configured.
