---
title: Call agent
sidebar_label: Call agent
---

:::note
For enterprise subscription AI-agents, this action is enabled by default. For other subscription AI-agents, activation of this action is available only upon request.
:::

Call agent action triggers another agent within an agent, pausing the current agent and switching control to the specified target agent.

**Sample scenario: Flight booking use case**

#### Scenario

Suppose a user interacts with Yellow Travels AI agent to book a flight. After booking, they immediately want to cancel the same ticket.

Here’s how the Call Agent action helps:

1. The user starts by interacting with the **main agent** (Yellow Travels AI agent).
2. For booking a ticket, the main agent calls the **Flight   Booking agent**, which handles:
   * Collecting travel details
   * Checking availability
   * Confirming the booking
3. If the user later requests a cancellation, the main agent uses **Call agent** to switch to the **Cancellation agent**, which validates booking details and processes the cancellation.

### How to use Call agent action

To configure call agent action, follow these steps:

1. Go to Prompt section, Click **Actions** and select **Call agent** to trigger another agent based on your use case.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/call-agent.png)


2. Select the agent that you want to trigger from the drop-down.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/cancel-flow.png)
   
* Once configured, the selected agent will be triggered during the conversation.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/call-agent1.png)

    

  




