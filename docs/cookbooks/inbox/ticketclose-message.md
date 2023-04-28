---
title : How to display a message when chat is closed
sidebar_label : Display end-of-chat message
---

When a customer initiates a live chat, an inbox agent is assigned to resolve the query. After resolving the query, the agent marks the chat as resolved, which triggers the node connected to the [ticket closed](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#raise-ticket-outputs) in the raise ticket node. If the [CSAT setting](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/csat) is enabled, the system records the customer feedback on the agent before closing the chat.

Alternatively, if you prefer not to use the above options, you can configure the system to automatically trigger an event when agents resolve a live chat. 
For example, you may want to send the customer details to the CSM or perform other actions like updating a database, calling an API, or displaying promotional messages or products after the chat has ended. However, you cannot directly connect the ticket closed part of the raise ticket node to both options simultaneously. In such cases, you can use an event to identify the ticket closed and perform background actions on a different flow, and then connect the raise ticket - ticket closed part of the node to a different flow.


This requires manual enabling from the event hub and use in the flows. The steps are given below:

1. Go to **Studio** > **Events** > **Inbox** and search for **ticket-closed**.
    ![](https://i.imgur.com/qZYPSZ2.png)
2. Click the three dots icon and select **Activate** to activate the event.
3. Create a new [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) with the trigger set to **Event** and value set to **ticket-closed**.
    ![](https://i.imgur.com/5J4tjm4.png)
4. To provide a personalized response from the bot when a ticket is closed, add [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes) to the flow that are designed to execute specific tasks. The flow will automatically run whenever a ticket is closed.
    ![](https://i.imgur.com/9Uu83EZ.png)


