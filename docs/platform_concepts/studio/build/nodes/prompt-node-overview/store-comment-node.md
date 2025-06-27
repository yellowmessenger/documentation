---
title: Store comment node
sidebar_label: Store comment
---

This node helps you to skip triggering of NLU, intents, or entities for a respective flow. Using this node, you can provide inputs such as feedback, questions, suggestions, and so on.

User inputs are stored in a variable through the Store comment node without triggering the NLU of that particular flow.

For example, you have created a AI-agent to order food from a restaurant. You want to allow the  user to provide feedback after delivering the food. In such cases, you can use the store comment node to provide feedback without triggering the NLU of the respective flow.

![](https://i.imgur.com/oub8uVE.png)

:::note
It is recommended not to use Quick reply option for Store comment node.
:::

In the store comment node, there is a toggle to enable Quick reply. Quick reply in the comment store node captures both the comment and the Quick reply response. The comment will be stored as a fallback when the user hits enter after writing the comment, and if the user clicks on Quick reply, then that Quick reply response will be stored in the variable.

