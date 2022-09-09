---
title: Nodes Overview
sidebar_label: Overview
---

Nodes are the building blocks of a [Flow/Journeys](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys).  

In this article, you will learn:
1. [Types of nodes](#types)
2. [How to add nodes](#addnode)
3. [What are the configurations available for nodes](#config)


## <a name="types"></a> 1. Types 

Nodes are classified into the following types: 



| Nodes         | Description                                                                                                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Prompts**  | Prompts can be used when the bot expects a user to respond to the posed question. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) to learn more.                           |
| **Messages** | Messages can be used when the bot has to display information to the user without expecting any response. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) to learn more. |
| **Action**   | Actions are non-interactive nodes that can be used to perform a specific task. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes) to learn more.                            |
|    **Logic**   |  Logic nodes can be used when the flow must be branched based on the given conditions. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) to learn more.  |


After clicking **+Create flow**, you will be directed to a canvas with a **start node** from where you will have the flexibility to design a [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys).

![](https://i.imgur.com/mfLbfy1.jpg)


## <a name="addnode"></a> 2. Add Nodes

Nodes can be added in two different ways:

1. Click the black dot in the centre of a node.

![](https://i.imgur.com/UjHsxhK.jpg)


2. Click any 4 of the icons on the left which represent each category of nodes. Drag and drop the nodes.

![](https://i.imgur.com/lTiO07q.png)


### 2.1 Build a Flow 

A flow is built using a series of smaller nodes. Each flow must have a minimum of two nodes configured.

* **Start Trigger**: The first node must always be a trigger (click [here](http://localhost:3000/docs/platform_concepts/studio/build/journeys#4-configure-start-trigger) to learn more). You can configure how to trigger this flow. That is, by means of Intents, Entities, URL Events, or other flows.
* Add any of the following nodes one by one to continue this flow with logic. 
    * **Prompts**: These nodes expect user inputs- when the input is invalid, fallback messages are displayed. They are interactive/conversational nodes.
    * **Messages**: Use these nodes to display messages, files, images etc. 
    * **Actions**: Background actions like Database Insert, Search, or executing an API are performed with these nodes.
    * **Logic**: Conditional branching nodes.

* Connect all the nodes to complete the flow. Test it on the bot. 

![](https://i.imgur.com/kjnaZr1.jpg)


## <a name="config"></a> 3. Configure Display

This option is available for all the nodes that display some information on the bot. For example message and prompt nodes like name node, text node, video node etc. It is used to configure how the information must be produced on different platforms like Website, Alexa, Google Assistant, Voice etc.

* Click the tools(channel option) symbol available below the node name.  

![](https://i.imgur.com/5Xv1ndp.png)

* Multiple channel options are available for each type of node. 

![](https://i.imgur.com/78ie4Gm.png)

* Few commonly used configurations are listed below.  

### 3.1 General- Web

* **Hide Input** - When enabled, user input won't be displayed on the bot.
* **Hide Home Button** - When enabled and this node is executed in the flow, the user will not be able to click on the home button to restart the flow. 
* **Sensitive information** - Can be enabled to hide passwords and other personal information from being displayed. 
* **Button Auto Width** - For Quick replies and multi select, buttons can be configured.
* **Enable Multiple Files** - This is used for file-related nodes, which gives the user permission to add more than one file at once.

Enable these options to improve the video viewing experience. 
* **Thumbnail** - This is the image that will be displayed when the video is not being played. 
* **Autoplay** - Video will play automatically.
* **Show controls** - Controls such as Play/Pause, Forward etc will be displayed.
* **Downloadable** - Displayed video can be downloaded to the local system.
* **Muted** - Mute the audio until the user unmutes it. 
* **Loop** - To play the video again once it stops.

### 3.2 Voice

This is configured for voice bots. You can modify voice related features like speed, delay, forward chat to etc. 

Coming soon!

### 3.3 Google Assistant 

* **End Session** - Bot session on google assistant comes to an end when this node is reached.

### 3.4 Alexa 

* **End Session** - Bot session on Alexa comes to an end when this node is reached.

-----

**What Next?**

* Build a [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys) and [test](https://docs.yellow.ai/docs/platform_concepts/studio/tools) it. 
* Explore more about the types of nodes in the further sections.
