---
title: Building blocks of Journeys - Nodes
sidebar_label: Nodes
---

**Nodes can be seen as building blocks of a Journeys**. 

## Building Journey using 'Nodes'
A journey is usually built up using series of smaller nodes. Each Journey should have minimum of two nodes configured.

* First node always is a **`Start Trigger`**. Start trigger - as we have discussed in previous section - a node that let's you configure what all can make this journey trigger - Intents, Entities, Events etc. 
* There are one way **`Messages`**, where as we learnt, bot doesn't need to wait for user input like message, files, images etc.
* Then there are `Interactive/conversational` nodes - **`Prompts`** which wait for user input). 
* All these nodes can also be connected to **`Action Nodes`** to perform some background action like Database Insert, Search, or executing an API etc or some **`Logic`** like If-else. [Expand](./steps/action-nodes-and-logic)

![](https://i.imgur.com/6fvXUh9.png)



---


***In upcoming sections, we will explore various types of nodes - message, prompts, actions, and logic.***