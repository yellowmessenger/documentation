---
title: Notify customers on agent unavailability when offline handling is enabled 
sidebar_label : Notify customer on offline handling
keywords : [offline ticketing, offline chat]
---

:::info
**Prerequisite**: Enable **offline handling** settings as described [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat).
:::

When **Offline handling** is enabled and you want to inform customers that agents are currently unavailable and their queries will be addressed once an agent is back online, follow the steps below by picking your closest use-case:


## Notification for open and queued chats 

1. Navigate to **Studio > Build > Flows**, open the flow that includes the **Raise ticket** node.
2. Store the output of the **Raise ticket** node in a variable, as shown in the image.
<img src="https://hackmd.io/_uploads/ByjDHFLbp.png" alt="drawing" width="80%"/>    
3. Connect the error part of the **Raise ticket** node to a new node, which is responsible for displaying messages to the customer. 
    > When offline handling is enabled, the chat is not immediately answered, and the flow continues to the next node until an agent responds.
    
    <img src="https://imgur.com/7zug9iN.png" alt="drawing" width="100%"/>    
4. In the new flow, retrieve the status of the ticket by accessing the status value stored in the variable `{{{variables.raiseTicketObj.status}}}`.
5. Add a [condition node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-condition) to your flow to identify the ticket status.
    <img src="https://hackmd.io/_uploads/SkQdvY8WT.png" alt="drawing" width="80%"/>    
6. Depending on the ticket status identified in the condition node, you can connect the conditions to a Text node to display a relevant message addressing the customer.
    ![](https://hackmd.io/_uploads/B1scOF8bp.png)
    > You can also fetch the ticket ID by using the variable: `{{{variables.activeTicketNumber}}}`

-----

## Notification for open chats (recommended)


1. Access the **Studio** section and navigate to **Events**.
2. Open the [Custom events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub) and click **+Add event**.
    ![](https://hackmd.io/_uploads/HkG89gJP2.png)
3. Provide the **name** `ticket-opened` and click **Create event**. 
    ![](https://hackmd.io/_uploads/B1cqqgkDh.png)
4. Ensure that the `ticket-open` event is **Active**. If not, make it Active by clicking on the three dots next to it.
    ![](https://hackmd.io/_uploads/B18Zjx1D2.png)
5. [Create a new flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) in the **Studio** > **Build**. 
    ![](https://hackmd.io/_uploads/B1rOixkD2.png)
6. Within the flow, add a start trigger by clicking on the start node. Select **event** from the dropdown and set the value as `ticket-opened`.
    ![](https://hackmd.io/_uploads/ryKShx1wh.png)
7. Add a text node to display an acknowledgment to the customer, informing them to wait for a while.
    ![](https://hackmd.io/_uploads/BkgF2eJw2.png)

----


## Expected behaviour after creating a flow to notify customers 

`Assume all the agents are offline at the same time and a customer has requested to talk to an agent.`

`A live chat request is raised`

`The live chat appears in the "Open chats" section of the inbox`

`The customer waits on the chat screen`

`A message is displayed to the customer, stating the delay: "Your chat will be assigned as soon as we find an available agent. Please wait, and thank you for your patience"`

`When any agent in that group comes online and becomes available, the live chat is immediately assigned to them`
