---
title: Understanding Yellow's Voice Bot System Architecture
sidebar_label: Architecture of a voice bot
---

In this article, we will focus on an **inbound voice call use case** to understand the workflow of a voice bot.

-------

## 1. Types of voice call 



There are two different types of calls that a voice bot can handle, **Inbound and Outbound**. Calls mainly classified based on how they are initiated and why they are initiated.

| Type | Initiation method | Purpose of the call |
| -------- | -------- | -------- |
| **Inbound** | Inbound voice calls are calls that are initiated by the bot user(caller/customer) and received by the voice bot.     | Inbound voice calls to a voice bot are usually made by customers or users who need to interact with the bot to get information or perform an action.     |
|**Outbound** |Outbound voice calls are initiate by the voice bot itself.| Outbound voice calls from a voice bot are usually made for specific reasons, such as sending notifications, reminders, or alerts to users.|


----------

## 2. Workflow of a voice bot 


Yellow's voice bot system architecture comprises two primary components, which work together to enable the bot's smooth functioning. 
1. **Telephony Platform**: This component handles voice processing related tasks such as initializing calls, call forwarding, and call waiting. It provides the necessary platform capabilities for the bot to function efficiently.
2. **Yellow Cloud Platform**: This component is responsible for the business logic, conversation flow, and natural language processing (NLP).

![](https://i.imgur.com/ii1yOS5.png)

This section explains workflow of an **inbound** voice bot call. Follow the steps below: 

### Step 1: Initialize a conversation

1. When a user initiates a call (by calling to the configured support number), the Telephony platform identifies an incoming call.
2. Telephony platform sends a request to Yellow platform to make a call with the user's phone number and the bot's phone number.      

`Incoming request from: User number +9187386*****`   
`Send request to: Company number +9178903****1`    

3. The Yellow Cloud platform verifies the company number to identify the bot.      

`Company number +9178903****1 belongs to XYZ company`    
`Initialize XYZ bot`     

4. The bot starts the home flow to initiate a conversation, which is the first flow executed when the bot begins a conversation.      

`#WelcomeFlow: Hey! I am XYZ bot, what is your name?`

![](https://i.imgur.com/NIUnZLq.png)

5. First node of the home flow will be processed on the Yellow platform and sent to the Telephony platform. 

`Question node: "Hey! I am XYZ bot, what is your name?"`

6. The user hears the bot's request in form of speech. 

`Voice response(TTS): "Hey! I am XYZ bot, what is your name?"`

![](https://i.imgur.com/QfKYRS4.png)


### Step 2: Continue bot conversation

After the bot's home flow, the first node of the flow gets processed on the Yellow platform and sent to the Telephony platform in the form of speech. 

1. The user hears the bot's request and replies to it.        

`User response: "I am Jake, I want to know my bank balance."`

2. The Telephony platform sends the user's response to the Yellow Cloud platform, where the bot identifies the intent and generates an output. 

`Intent: "Check bank balance."`      
`Response bot logic: "Ask account number."`

![](https://i.imgur.com/jA2y1NU.png)

3. Further logics are executed and output is sent to the user via the Telephony platform in the form of speech. This workflow continues until the conversation ends or the user disconnects the call.

