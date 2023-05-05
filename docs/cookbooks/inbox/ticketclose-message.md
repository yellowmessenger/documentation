---
title : Display a message or/and trigger an action when chat is closed
sidebar_label : End of the live chat 
---

When a customer initiates a live chat, an inbox agent takes on the task of resolving the query. Once the agent has resolved the query, they mark the chat as **Resolved**. This triggers the execution of the node connected to the **ticket closed** in the [raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#raise-ticket-outputs) node, which is followed by the other nodes connected to it.

After a chat has ended, you may want to perform actions like updating a database, calling an API, sending customer details to the CSM, or displaying promotional messages or products. However, you cannot connect the **ticket closed** part of the [raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#raise-ticket-outputs) node to both options simultaneously. In this case, you can use an **event** to identify the ticket closed and perform background actions on a different flow. 


> If the [CSAT setting](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/csat) is enabled, the system records the customer feedback on the agent before closing the chat.

To configure the system to automatically trigger an event when agents resolve a live chat, you need to manually enable it from the event hub and use it in the flows.


------

**Use-case**

After the ticket is resolved, you can:

1. Intimate the user and provide 3 options as promotional activity.
2. Immediately after the ticket is resolved, create a logic to filter the user data based on the type of query raised and send it to a CRM.

### Step 1: Attach nodes to ticket closed

1. To attach nodes to ticket closed, connect the **Raise ticket** > **Ticket closed** with the nodes you want to execute. This will get triggered after the ticket is closed.
    ![](https://i.imgur.com/tFTr2P5.png)

### Step 2: Trigger other actions after ticket closed 

1. Go to **Studio** > **Events** > **Inbox** and search for **ticket-closed**.
    ![](https://i.imgur.com/qZYPSZ2.png)
2. Click the three dots icon and select **Activate** to activate the event.
3. Create a new [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) with the trigger set to **Event** and value set to **ticket-closed**.
    ![](https://i.imgur.com/5J4tjm4.png)
4. To provide a personalized response from the bot when a ticket is closed, add [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes) to the flow that are designed to execute specific tasks. The flow will automatically run whenever a ticket is closed.