---
title: Let's start with Journeys
sidebar_label: Journeys
---

**Journeys are how we visualise & design conversational flow** on Yellow Messenger Platform inside Studio. This section will help you get familiar with journeys.

---
## Understanding 'Journeys'
To understand what journeys are, let's think about how we will start designing conversational flow for example given in previous section. 
You already have scope of your bot ready, depending on what purpose user has for chatting with your bot, your bot will respond accordingly. Suppose user is here to book flight tickets, *you will take them through all the steps needed to do just that.*

> **We call these flows, or series of steps `Journeys` on our platform.**

Rephrasing sentence above, *If user is here to book tickets, you will take them through Journey 'Book flight tickets'.*
Similarly, you can create Journeys for each major path your user can take based on their **`intent`** to user this bot. 

> You can also categorize your journeys using `Categories`!


![](https://i.imgur.com/SIfo2pR.png)

:::info
 :bulb: *How many journeys you create, what classifies as distinct enough purpose to create a seperate journey etc really depends on how you see it. Important conclusion here is Journeys seem to be some building blocks/components that make up your bot's overall conversational flow.*
:::
---


## What else journeys can be used for?

We already talked about how based on user's broad intent, we can take them on respective journeys. 

But Journeys are much more than that!
> :bulb: ***Journeys are also ways for you as bot designer/developer to visualise or implement your bot logic apart from designing around broad user intents/scope.***

* **Design repetitively needed logic/flow :** 
Imagine that for multiple journeys, for example Book Hotels and Book flights, you need to take user details - Name, email and phone number. This means that you need this same 'user input' logic multiple journeys. Instead of repeating this, you can save your labor by designing a new journey 'User Input' and triggering it whenever you need.  
* **Journeys are not only about User Intent :**
As a bot developer, there can be multiple user cases where you need to design some flow - and trigger it whenever you configure it to be triggered, and not randomly because of a clear user intent. We will learn more about how journeys can be triggered in next section. 

---
## How are Journeys triggered?

### :pushpin: User Intent
We've already discussed how based on what is user's intent, a journey can be triggered. 
For this **`Intent`**, we can define a set of **`User Utterances`**, ie, possible things our user can say for which bot should start this journey. For example, for our 'Book flight ticket' Journey, user intents include 
a) Booking New Ticket
b) Modifying existing booking
User Utterances we provide should cover both these intents.

![](https://i.imgur.com/i9dfoMq.png)

This can be defined inside **`Start Trigger`** of a journey.

Once we provide some possible user utterances and 'train' the bot, it can learn to recognize other possible user utterances on it's own. We will learn more about training in future sections. 

### :pushpin: Trigger Journey Response

We can also set up manually when to trigger another journey from inside a journey. **`Trigger journey`** response will be discussed when we learn about [Steps](../docs/documentation/concepts/steps) and [Response types](../docs/documentation/concepts/response-types) in future sections. 

This can also be done through code. Refer [developer guide](../docs/developer/app/components/trigger-journey) to know more. 

### :pushpin: Events

Another way to start a journey is through 'Events'. We will discuss events in detail in future sections. 


---

**Hope this section gave you a fair idea of what journeys are, and how they function. Going ahead, a journey usually consists of a series of steps. In next section, we will get a little deeper inside a journey and talk about these building blocks - `Steps`**.