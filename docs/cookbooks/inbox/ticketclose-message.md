---
title : How to display a message when chat is closed
sidebar_label : Display end-of-chat message
---

A live chat is assigned to an inbox agent who will work to resolve a customer query. Once the query is resolved, the agent marks the chat as resolved, which triggers the node connected to the [ticket closed](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#raise-ticket-outputs) in the raise ticket node. If the [CSAT setting](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/csat) is enabled, the customer feedback on the agent is recorded before the chat is closed.

If you don't want to use the above options, you can configure the system to automatically trigger an event when agents resolve a live chat. This requires manual enabling from the event hub and use in the flows. The steps are given below:

1. Go to **Studio** > **Events** > **Inbox** and search for **ticket-closed**.
    ![](https://i.imgur.com/qZYPSZ2.png)
2. Click the three dots icon and select **Activate** to activate the event.
3. Create a new [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) with the trigger set to **Event** and value set to **ticket-closed**.
    ![](https://i.imgur.com/5J4tjm4.png)
4. To provide a personalized response from the bot when a ticket is closed, add [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes) to the flow that are designed to execute specific tasks. The flow will automatically run whenever a ticket is closed.
    ![](https://i.imgur.com/9Uu83EZ.png)


