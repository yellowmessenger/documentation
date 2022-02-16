---
title: Let's start with Journeys
sidebar_label: Journeys
---

** Journey is the Conversational flow between user and the bot. **
    - User: “Show me the menu”
    - Bot: “Please select your Cuisine: South Indian, North Indian”
    - User: “South Indian”
    - Bot: “Please select the Item: Dosa, Pongal . . .”

<!-- Update a screenshot of a journey-->


---
## Understanding 'Journeys'
To understand what journeys are, let's think about how we will start designing conversational flow for example given in previous section. 
You already have scope of your bot ready, depending on what purpose user has for chatting with your bot, your bot will respond accordingly. Suppose user is here to book/cancel or reschedule flight tickets, *you will take them through all the steps(Nodes) needed to do just that.*

> **We call these flows, or series of nodes `Journeys` on our platform.**

Rephrasing sentence above, *If user is here to book tickets, you will take them through Journey 'Flight tickets'.*
Similarly, you can create Journeys for each major same path your user can take. You can also use journeys to modularise and re-use. 

:::info
**Journeys are where you logically design your conversational flows.** 
:::

> You can also categorize your journeys using `Categories`!


![](https://i.imgur.com/SIfo2pR.png)




## What else journeys can be used for?

We already talked about how based on purpose or clubbing similar flow, we can take them on respective journeys. 

But Journeys are much more than that!
> :bulb: ***Journeys are also ways for you as bot designer/developer to visualise or implement your bot logic apart from designing around broad user scope.***

* **Design repetitively needed logic/flow :** 
Imagine that for multiple journeys, for example Book Hotels and Book flights, you need to take user details - Name, email and phone number. This means that you need this same 'user input' logic multiple journeys. Instead of repeating this, you can save your labor by designing a new journey 'User Input' and triggering it whenever you need.  
* **Journeys are not only about User Intent :**
As a bot developer, there can be multiple user cases where you need to design some flow - and trigger it whenever you configure it to be triggered, and not randomly because of a clear user intent. We will learn more about how journeys can be triggered in next section. 

---
## How are Journeys triggered? 

![](https://i.imgur.com/gPqIjG3.gif)

<!-- update a screenshot of journey triggers -->


### :pushpin: [Intent](./natural-language-understanding/intents)
We've already discussed how based on what is user's intent, a journey can be triggered. 
You can attach one or multiple intents to a single journey
a) Booking New Ticket
b) Modifying existing booking
For example these two intents may be added as start trigger to same journey.
We will learn how to add and train [Intents](./natural-language-understanding/intents) in latter sections.

### :pushpin: [Entities](./natural-language-understanding/entities)
Journeys can also be triggered using Entities. We will learn more about [Entities](./natural-language-understanding/entities) later.

### :pushpin: [Event](./event-hub)
Events like bot opened, bot closed, or custom events can be also be added as start triggers for a Journey. Learn more about events in the [Events Hub](./event-hub).

### :pushpin: Page URL
You can also decide user loading a certain page URL as a journey trigger. For example, on help page if you want to trigger agent journey directly.

### :pushpin: Trigger Journey Action node

Apart from start trigger can also set up manually when to trigger another journey from  or inside a journey using **`Trigger journey`** action node.


---

**Hope this section gave you a fair idea of what journeys are, and how they function. Going ahead, a journey usually consists of a series of nodes. In next section, we will get a little deeper inside a journey and talk about these building blocks - `Nodes`**.