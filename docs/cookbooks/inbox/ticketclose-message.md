---
title : Display message or sync data when a Live Chat is closed
sidebar_label : Trigger actions upon chat resolution
---

When a customer initiates a live chat, an inbox agent takes on the task of resolving the query. Once the agent has resolved the query, they mark the chat as **Resolved**. This triggers the execution of the node connected to the **ticket closed** in the [raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#raise-ticket-outputs) node, which is followed by the other nodes connected to it.

After a chat has ended, you may want to perform actions like updating a database, calling an API, sending customer details to the CSM, or displaying promotional messages or products. However, you cannot connect the **ticket closed** part of the [raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#raise-ticket-outputs) node to both options simultaneously. In this case, you can use an **event** to identify the ticket closed and perform background actions on a different flow. 


> If the [CSAT setting](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/csat) is enabled, the system records the customer feedback on the agent before closing the chat.

To configure the system to automatically trigger an event when agents resolve a live chat, you need to manually enable it from the event hub and use it in the flows.


------


## Step 1: Attach nodes to ticket closed

1. To attach nodes to ticket closed, connect the **Raise ticket** > **Ticket closed** with the nodes you want to execute. This will get triggered after the ticket is closed.
    ![](https://i.imgur.com/tFTr2P5.png)

    :::info
    - This step is recommended but not mandatory, it is required to make sure that the flow is completed and the user is intimidated that the ticket is closed.
    - You can also add options in this flow that connects to other flows to improve your user experience.
    :::

-----

## Step 2: Activate ticket-closed event

To identify that the inbox agent has closed a ticket you must enable **Ticket closed** event. Follow these steps: 

1. Go to **Studio** > **Events** > **Inbox** and search for `ticket-closed`.
    ![](https://i.imgur.com/qZYPSZ2.png)
2. Click the three dots icon and select **Activate** to activate the event.

-----

## Step 3: Trigger flows after a ticket is resolved 

You can design flows that can be triggered when **Ticket closed event** is identified. Follow these steps: 

1. Create a new [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys). 
2. By clicking **Start** node you can set when the flow gets triggered. Set it to **Event** and select the value as **ticket-closed**.
    ![](https://i.imgur.com/5J4tjm4.png)
3. To provide a personalized response from the bot when a ticket is closed, add [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes) to the flow that are designed to execute specific tasks. The flow will automatically run whenever a ticket is closed.

-----


### Use-cases of ticket-closed event

A few examples of the flows that can be run after the ticket is closed.

> You can add one or more flows with start trigger as `ticket-closed`. All these flows will run simultaneously. 

1. **Update a database/CRM with ticket details.**
![](https://hackmd.io/_uploads/H157Iya8n.png)

2. **Create a logic to filter the user data based on the type of query raised and send it to a CRM/Database.**
![](https://hackmd.io/_uploads/ry9pDJpI2.png)

3. **Hit an API once the ticket is closed.** 
![](https://hackmd.io/_uploads/r1QFu1pUn.png)

4. **Send a promotional messsage.** 
![](https://hackmd.io/_uploads/SyFft1p8h.png)

5. **Schedule a follow up interview.**
![](https://hackmd.io/_uploads/BkAvCCn8n.png)


