---
title: Inside Journeys - Steps
sidebar_label: Steps
---

**Steps can be seen as building blocks of a Journeys**. 

## Building Journey using 'Steps'
A journey is usually built up using series of smaller steps. Each Journey should have minimum of two steps configured.

* First step always is a **`Start Trigger`**. Start trigger - as we have discussed in previous section - a step that let's you configure what all can make this journey trigger - Intents, Entities, Events etc. 
* There are one way **`Messages`**, where as we learnt, bot doesn't need to wait for user input like message, files, images etc.
* Then there are `Interactive/conversational` steps - **`Prompts`** which wait for user input). 
* All these steps can also be connected to **`Action Nodes`** to perform some background action like Database Insert, Search, or executing an API etc or some **`Logic`** like If-else. [Expand](./steps/action-nodes-and-logic)

![](https://i.imgur.com/6fvXUh9.png)



---


***In upcoming sections, we will explore various types of steps - message, prompts, actions, and logic.***