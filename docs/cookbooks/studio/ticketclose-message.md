---
title : How to display a message when a ticket is closed?
sidebar_label : Display a message when a ticket is closed
---

1. Go to **Studio** > **Events** > **Inbox** and search for **ticket-closed**.

![](https://i.imgur.com/qZYPSZ2.png)

2. Click the three dotted line and click **Activate** to activate it.
3. Build a new [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) with the start trigger as **Event**, **ticket-closed**. 

![](https://i.imgur.com/5J4tjm4.png)

4. To create a customized response from the bot upon ticket closure, it is necessary to include [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes) in the flow that are designed to execute specific tasks.

![](https://i.imgur.com/9Uu83EZ.png)

After you complete the flow, the bot will automatically execute it whenever a ticket is closed.


