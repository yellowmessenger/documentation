---
title: Flow to connect with an agent without asking for any information from the user
sidebar_label: Use raise ticket node w/o input
---

Follow the below steps to transfer the chat to an agent without asking for any information from the user:

1. **Name** and **Query** are the mandatory fields to be passed into Raise ticket node. To create a flow that does not ask user for any of the information, create two **global variables** (click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#3-create-a-variable) to learn how) for storing names and queries with some dummy values (the dummy name and query won’t be displayed to the user, it will be displayed to the live agent).

![](https://i.imgur.com/b2PcVD0.png)

2. Create a simple flow and directly connect Raise ticket node to the start node. 
3. Pass the same variables in the [Raise ticket action node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket).

![](https://i.imgur.com/ojL2BAU.png)

4. This flow can end with **Ticket closed** and **Error** connected to a [Message](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) node. 
