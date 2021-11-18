---
title : FAQ Bot
sidebar_label : FAQ Bot 
---

This document will help you understand the FAQ Bot, a bot that helps you answer your customer’s query in a more efficient way. Before you start understanding this bot, let’s get aligned on the use case.

To build any bot is to decide the use case, which we have already done above. Diving the use cases into phases and starting with the phase 1 that we want to take live. 

The easiest way of deciding the use cases or journeys is to look at the kind of queries your customers are asking right now and then grouping them into categories.
For example, In a banking industry, a customer might ask: 
- How Can I get a car loan
- Maximum limit for ATM withdrawal
- I would like to raise an issue with PIN


So first thing first, we need to note such questions, group them into categories and create journeys for each category and sub - categories if needed.

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

#### Step 2: Creating Journey

Journey is the sub-conversational flow between the bot and the user. It starts with a trigger and the trigger can be anything like intent or entity or page url.
Now once you add the intent, using the nodes and step design the whole flow of a Journey.

![](https://cdn.yellowmessenger.com/EjzIgxlptLxF1633528880229.JPG)

> Read more about journeys [**here**](https://docs.yellow.ai/docs/platform_concepts/studio/journeys)

#### Step 3:  Designing the Flow:

Once you have added the Intent, design the Journeys using prompts and nodes.
To add prompts or nodes, click on the blue dot.
Once you click on the blue dot, you will have all the nodes and prompts that you can use to design.
![](https://cdn.yellowmessenger.com/t3gz2Bghp2jC1633528418589.JPG)

> Read more about prompts and nodes [**here**](https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages)


#### Step 4: Test your BOT

On successful completion of the design of the bot you can test your bot using Try Your Bot
![](https://cdn.yellowmessenger.com/z5a0kYG4QCq21633528280175.JPG)

## Exercise 3: Designing the welcome prompt

For the welcome prompt let’s create a journey and trigger it from the welcome prompt
- **Step 1-** Create a Journey 
- **Step 2 -**  Add a node to greet the customer, here to add a bit of personalization, we have checked if the customer is visiting for the first time then we are introducing the bot, else we just welcome them back.
- **Step 3 -** Add Quick replies button to show the categories of FAQ
- **Step 4 -** Trigger the individual journeys created for each category
![](https://cdn.yellowmessenger.com/rrIa3xuzfXH21634525077687.JPG)
> Read more about Quick reply prompts [**here**](https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages#quick-replies)

## Exercise 5: Designing the Journeys for FAQ categories

- **Step 1-** Create A journey 
- **Step 2-** Using Quick reply prompt add the questions as buttons
- **Step 3-** For each button add a Text message node to show the answer.
- **Step 4-** For each fallback node we can transfer it to an agent

![](https://cdn.yellowmessenger.com/KbzJKmwOg7Ns1634525363463.JPG)

Alternatively if you have the set of questions ready you can also use the FAQ section of the platform to add these questions as FAQs.

Follow [**these steps**](https://docs.yellow.ai/docs/platform_concepts/studio/knowledge-management/add-faqs) to add FAQs for your bot as well.


## Exercise 6: Creating Journey to Transfer the Chat to the Agent

Now if there is any custom question that you want your agents to address you can transfer the conversation from bot to the agent using this live agent journey. Let’s build the journey.

- **Step 1:** Create A journey 
- **Step 2:** Add an Intent and utterances relevant to the the intent
Example Utterances are I want to talk to customer support, Connect me to a live agent or
Contact customer support
![](https://cdn.yellowmessenger.com/KE2gYzfIcFSF1633528065913.JPG)

- **Step 3:** Add Prompts to collect user Information
- **Step 4:** Use a Raise A ticket Action node to raise the ticket to connect to live agent

![](https://cdn.yellowmessenger.com/wWxB49BxsVVa1634525661373.JPG)