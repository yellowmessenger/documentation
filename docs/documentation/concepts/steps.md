---
title: Inside Journeys - Steps
sidebar_label: Steps
---

**Steps can be seen as building blocks of a Journey**. 

## Building Journey using 'Steps'
A journey is usually built up using series of smaller steps. Each Journey should have minimum of two steps configured.

* First step always is a **`Start Trigger`**. Start trigger - as we have discussed in previous section - a step that let's you configure what all can make this journey trigger - User Utterances, Events etc. 
* Following the **`Start Trigger`**, we can a series of steps configuring different [**message types**](../docs/documentation/concepts/response-types#message-types) inside them.
* These steps can also be connected to [**Action Nodes**](../docs/documentation/concepts/response-types#Action-Nodes) to perform some action or some [**Logic**](../docs/documentation/concepts/response-types#Logic) like condition can be applied for branching of steps inside journey.


Let's have a look at our flight booking journey. 
![](https://i.imgur.com/ebPN2v2.png)

This journey consists of multiple steps - Start Trigger, User Details, Options etc which is then branched into two flows based on Condition logic. Later we also hit an API using API action node, say to fetch available flights. 



---

**We saw how steps with action nodes & logic come together to help us design our flows (Journeys). Looking at a Journey, one should easily be able deduce what is happening in that journey.**
**In upcoming sections, we will explore various types of responses - message types that make up steps and action nodes, and logic.**