---
title: Nodes Overview
sidebar_label: Overview of the nodes page
---

Nodes are the building blocks of a [Flow/Journeys](https://docs.yellow.ai/docs/platform_concepts/studio/journeys).  

## 1. Types 

Nodes are classified into the following types: 
1. **Prompts**: Prompts can be used when the bot expects a user response to the posed question. Click here to learn more. 
 
2. **Messages**: Messages can be used when the bot has to display information to the user without expecting any response. Click here to learn more. 

3. **Action**: Actions are non-interactive nodes that can be used to perform a specific task. Click here to learn more. 

4. **Logic**: Logic nodes can be used when the flow must be branched based on the given conditions. Click here to learn more. 

After clicking +Create flow, you will be directed to a canvas with a start node from where you will have the flexibility to design a flow.
:::warning


![](https://i.imgur.com/uKrEbNH.jpg)
:::

## 2. Add Nodes

Nodes can be added to this start node in two different ways:

1. Click on the black dot in the center of a node.

:::warning

![](https://i.imgur.com/04ar7yF.jpg)
:::

2. Click on any 4 of the icons on the left which represent each category of nodes.
:::warning

![](https://i.imgur.com/vFdHzKo.png)

:::
### 2.1 Build a Flow 

A flow is usually built using a series of smaller nodes. Each flow must have a minimum of two nodes configured.

* **Start Trigger**: First node must always be a trigger (click [here](https://docs.yellow.ai/docs/platform_concepts/studio/journeys) to learn more). You can configure how to trigger this flow. That is, by means of Intents, Entities, URL Events, or other flows.
* Add any of the following nodes one by one to continue this flow with a logic. 
    * **Prompts**: These nodes expect user inputs- when the input is invalid, fallback messages are displayed. They are interactive/conversational nodes.
    * **Messages**: Use these nodes to display messages, files, images etc. 
    * **Actions**: Background action like Database Insert, Search, or executing an API are performed with these nodes.
    * **Logic**: Conditional branching nodes.

* Connect all the nodes to complete the flow. Test it on the bot. 

-----

**What Next?**

Learn more about the types of nodes in the further sections.