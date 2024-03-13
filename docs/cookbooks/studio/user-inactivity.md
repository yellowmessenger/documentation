---
title: User inactivity event
sidebar_label: User inactivity event guide
---

The **User inactivity event** notifies the bot when a user remains unresponsive for a specified period, allowing proactive re-engagement strategies.

Consider a customer support bot deployed on an e-commerce platform. During peak hours, the chatbot receives numerous inquiries from users seeking assistance with product information, order tracking, and troubleshooting. However, amidst the high volume of interactions, some users may inadvertently become inactive, either due to distractions or awaiting responses.

In such scenarios, activating the **User Inactivity Event** feature proves invaluable. By setting a predefined time threshold for user inactivity, such as 5 minutes, the bot can detect when a user has not interacted within this timeframe. Once the threshold is reached, the chatbot triggers the **User Inactivity Event** prompting it to take proactive measures.

:::note
This event gets triggered for the specific node in a flow only if the user has been previously responding in the flow. If the user does not respond at all from the beginning of the flow, this event will not get activated.
:::

## Create an user inactivity event

1. Go to **Studio** > **Event** > **User inactivity events** > **+ Add event**.

   ![](https://i.imgur.com/Wgt0EyH.png)

2. Fill in the following fields:

   ![](https://i.imgur.com/5fRRFmI.png)

* **Event name**: Provide a name for the event.
* **Event description**: Describe the nature of the event.
* **Event delay**: Specify the duration, in hours or minutes, after which this event should be triggered with a delay. For example, trigger this event if the user hasn't responded more than 5 minutes.
* **Activate for specific steps**: Enable the delay for specific flows and nodes. Click **+Add flow** to trigger this event for multiple flows and nodes. This event gets triggered only for the flows and nodes chosen here. Additionally, this event gets triggered only for prompt nodes. 
* **Handle event with message**: Enable this to display a message when a user is inactive. Enable **Show previous prompt**  to nudge the user to provide answer to the question and select **Show inactivity message** to display this message when the bot is in a paused state.
3. Click **Create event**.

After creating this event, whenever a user remains unresponsive for the specified duration, the bot will display the configured message in the chosen flow and node and nudge the user to respond.