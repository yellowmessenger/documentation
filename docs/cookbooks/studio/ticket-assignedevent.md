---
title: How to capture the ticket assigned event?
sidebar_label: Capture events when a ticket is assigned
---

**Use case:** After creating a ticket and assigning to an agent, we need to invoke an API based on the response stored in the **Raise a Ticket** node.
 
Use ```ticket-assigned-bot event``` event for this. To activate this event:

1. Store the response of the [Raise Ticket node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) in a variable.

   <img src="https://i.imgur.com/ZwNgVAS.png" alt="drawing" width="70%"/>

2. Call the following API from your backend.

```
curl --location 'https://cloud.yellow.ai/api/agents/settings/ticketUpdateEventSettings?bot=x1599195792555' \
--header 'X-API-key: <token>' \
--header 'Content-Type: application/json' \
--data '{
    "chatAssignedBot": true
}'
```

This is a one-time process. After that, you'll start receiving **ticket-assigned-bot** events, which you can activate in the **Custom Event** section and [use it in your flows](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#13-trigger-flow-using-event). For steps to create a custom function, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#custom-events).
