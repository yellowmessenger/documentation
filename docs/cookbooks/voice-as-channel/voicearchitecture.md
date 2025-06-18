---
title: Yellow's voice agent system architecture
sidebar_label: Architecture of a voice agent
---

In this article, we will focus on an **inbound voice call use case** to understand the workflow of a voice agent.

-------

## 1. Types of voice calls 



There are two different types of calls that a voice agent can handle, **Inbound and Outbound**. Calls mainly classified based on how they are initiated and why they are initiated.

| Type | Initiation method | Purpose of the call |
| -------- | -------- | -------- |
| **Inbound** | Inbound voice calls are calls that are initiated by the voice agent user(caller/customer) and received by the voice agent.     | Inbound voice calls to a voice agent are usually made by customers or users who need to interact with the voice agent to get information or perform an action.     |
|**Outbound** |Outbound voice calls are initiate by the voice agent itself.| Outbound voice calls from a voice agent are usually made for specific reasons, such as sending notifications, reminders, or alerts to users.|


----------

## 2. Workflow of a voice agent 


Yellow's voice agent system architecture comprises two primary components, which work together to enable the agent's smooth functioning. 
1. **Telephony Platform**: This component handles voice processing related tasks such as initializing calls, call forwarding, and call waiting. It provides the necessary platform capabilities for the voice agent to function efficiently.
2. **Yellow Cloud Platform**: This component is responsible for the business logic, conversation flow, and natural language processing (NLP).

![](https://i.imgur.com/ii1yOS5.png)

This section explains workflow of an **inbound** voice agent call. Follow the steps below: 

### Step 1: Initialize a conversation

1. When a user initiates a call (by calling to the configured support number), the Telephony platform identifies an incoming call.
2. Telephony platform sends a request to Yellow platform to make a call with the user's phone number and the voice agent's phone number.      

`Incoming request from: User number +9187386*****`   
`Send request to: Company number +9178903****1`    

3. The Yellow Cloud platform verifies the company number to identify the agent.      

`Company number +9178903****1 belongs to XYZ company`    
`Initialize XYZ agent`     

4. The voice agent starts the home flow to initiate a conversation, which is the first flow executed when the agent begins a conversation.      

`#WelcomeFlow: Hey! I am XYZ agent, what is your name?`

![](https://i.imgur.com/NIUnZLq.png)

5. First node of the home flow will be processed on the Yellow platform and sent to the Telephony platform. 

`Question node: "Hey! I am XYZ agent, what is your name?"`

6. The user hears the voice agent's request in form of speech. 

`Voice response(TTS): "Hey! I am XYZ agent, what is your name?"`

![](https://i.imgur.com/QfKYRS4.png)


### Step 2: Continue agent conversation

After the voice agent's home flow, the first node of the flow gets processed on the Yellow platform and sent to the Telephony platform in the form of speech. 

1. The user hears the voice agent's request and replies to it.        

`User response: "I am Jake, I want to know my bank balance."`

2. The Telephony platform sends the user's response to the Yellow Cloud platform, where the voice agent identifies the intent and generates an output. 

`Intent: "Check bank balance."`      
`Response agent logic: "Ask account number."`

![](https://i.imgur.com/jA2y1NU.png)

3. Further logics are executed and output is sent to the user via the Telephony platform in the form of speech. This workflow continues until the conversation ends or the user disconnects the call.

