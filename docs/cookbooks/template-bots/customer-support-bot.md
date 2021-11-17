---
title: Customer Support Bot
description: Customer Support Bot
featured: true
---

This guide will help you understand the Customer Support Bot, a bot that helps in customer details collection and directs customers to support agents to answer their questions. 

This Bot has majorly two journeys:

- **User Details:** This Journey is used to collect basic details of an user

- **Transfer to Agent:** This is used to transfer the chat to the agent and also used as fallback response if the user asks questions outside from the defined intents.

Before you start understanding this bot, let’s get aligned on the use case.

To build any bot is to decide the use case, which we have already done above. Diving the use cases into phases and starting with the phase 1 that we want to take live. 

The easiest way of deciding the use cases or journeys is to look at the kind of queries your customers are asking right now. 
For example, the ideal case for a customer support bot will be when the user queries are similar to : 
- I need help 
- Can I talk to someone 
- Can I chat with the customer support team
- I would like to raise an issue

Now if you have decided to build a customer support bot, let’s get started.

## Exercise 1 : Create a Bot

#### Step 0: Sign Up
Sign up on https://cloud.yellow.ai and after email confirmation login again on the same link.

#### Step 1 - Create a Bot
Create a bot for yourself, every account gets a bot subscription for free with some limited features. Click here for reference - [How to create a bot? ](https://www.youtube.com/watch?v=DWdrstYFlG0)

## Exercise 2 : Understanding Basic Bot Structure

For building any bot it’s important to understand the basic bot structure

![](https://cdn.yellowmessenger.com/6BxmvyxiMXyG1633520010703.png)

## Exercise 2 : Learn Bot Basics

#### Step 1: Adding Welcome Message

Default Message that is shown on the launch of the Bot.  
To configure the same go to:  
Studio → Home button → Welcome prompt     
Or     
Overview → Add Welcome Message → Welcome Prompt

![](https://cdn.yellowmessenger.com/r79RJdnzcnyl1633520602151.JPG)

**Some Best Practices:**

- Give a personal touch to the welcome message and make it casual and more conversational.
- Use the name of the bot
- To break the monotony of the message, you can add variation to it also

#### Step 2: Creating Journey

Journey is the sub-conversational flow between the bot and the user. It starts with a trigger and the trigger can be anything like intent or entity or page url.
Now once you add the intent, using the nodes and step design the whole flow of a Journey.

![](https://cdn.yellowmessenger.com/EjzIgxlptLxF1633528880229.JPG)

> Read more about journeys [**here**](https://docs.yellow.ai/docs/platform_concepts/studio/journeys)



#### Step 3:  Adding Intent

- Go to NLU 
- Create a New Intent
- Add the name of the Intent similar to the Purpose of the intent.
- Add utterances to the intent. Utterances are nothing but the conversation that the user might have with the bot. It can be a sentence, a phrase or a single word and it should be within the context of the intent
- Train the model on adding two intents
![](https://cdn.yellowmessenger.com/DJJco7XH4hhM1633528825650.JPG)

**Some Best Practices On How To Train The Bot:**

![](https://cdn.yellowmessenger.com/dGHgMehWFHoV1633528548413.JPG)

#### Step 4:  Designing the Flow:

Once you have added the Intent, design the Journeys using prompts and nodes.
To add prompts or nodes, click on the blue dot.
Once you click on the blue dot, you will have all the nodes and prompts that you can use to design.
![](https://cdn.yellowmessenger.com/t3gz2Bghp2jC1633528418589.JPG)

> Read more about prompts and nodes [**here**](https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages)


#### Step 5: Test your BOT

On successful completion of the design of the bot you can test your bot using Try Your Bot
![](https://cdn.yellowmessenger.com/z5a0kYG4QCq21633528280175.JPG)

## Exercise 4: Creating Journey to Collect User Details
 
As user details are really important in the scope of Customer Support let’s create a separate journey just to collect the user details and help other journeys
- **Step 1-** Create a Journey 
- **Step 2-** Add Prompt nodes to collect Information like Name, Phone Number and Email
![](https://cdn.yellowmessenger.com/NNPD6g9M5ULL1633528152212.JPG)

## Exercise 5: Creating Journey to Transfer the Chat to the Agent

- **Step 1:** Create A journey 
- **Step 2:** Add an Intent and utterances relevant to the the intent
Example Utterances are I want to talk to customer support, Connect me to a live agent or
Contact customer support
![](https://cdn.yellowmessenger.com/KE2gYzfIcFSF1633528065913.JPG)

- **Step 3:** Add Prompts to collect user Information or else reuse the journey you might have created as a part of Exercise 4.

- **Step 4:** Use a [**Raise A ticket Action node**](https://docs.yellow.ai/docs/platform_concepts/studio/steps/action-nodes-and-logic#raise-ticket) to raise the ticket to connect to live agent

- **Step 5:** If you want to collect feedback about the whole Conversation, use a Feedback prompt to do so.
![](https://cdn.yellowmessenger.com/Q148to2133YI1633527994108.JPG)