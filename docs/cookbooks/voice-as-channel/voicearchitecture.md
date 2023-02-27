---
title: Understanding Yellow's Voice Bot System Architecture
sidebar_label : Architecture of a voice bot
---


Voice bot has a simple working architecture with two most important components.  Let us take an inbound usecase as an example and understand the complete workflow.

1. **Telephony platform**: This takes care of voice processing related options like initilizing calls, call forwarding, call waiting etc. which enables the robust platform capabilities for bot functioning.
2. **Yellow Cloud platform**: This is responsible for the business logic, NLP, conversation flow etc. 

![](https://i.imgur.com/ii1yOS5.png)

A voice bot functions as mentioned in the following steps: 

**Initialize a conversation**

1. An incoming call is received from the user's end which is identified on the Telephony platform. 
2. A request is made by the Telephony platform to make a call with user phone number and bot phone number.

    > Example:    
    >  **Incoming request from**: User number +9187386*****    
    > **Send request to**: Company number +9178903****1

3. Yellow cloud verifies company number to identify the Bot. 

    > Ex: User number +9187386***** belongs to XYZ company. Initilize XYZ bot. 

4. Starts the welcome flow (to begin a conversation). Welcome flow is the first flow which gets executed when the bot starts conversing. 

    > Ex: #WelcomeFlow > Hey! I am XYZ bot, what is your name? 

![](https://i.imgur.com/NIUnZLq.png)

5. First node of the flow will get processed on the Yellow platform and be sent to the Telephony platform. 

    > Ex: Question nodes text is converted to speech - "Hey! I am XYZ bot, what is your name?"


6. The bot request will be heard by the user in form of voice output. 

![](https://i.imgur.com/QfKYRS4.png)

**Continue bot conversation**

7. User replies to the previously posed request. 

    > Ex: "I am Jake, I want to know my bank balance."

8. The user response will be sent from Telephony platform to the Yellow Cloud platform. 
9. Bot identifies the request(intent) and generates an output to be sent to the user via. Telephony platform in the form of speech. 

![](https://i.imgur.com/jA2y1NU.png)

This flow continues until the conversation reaches the end or the bot user disconnects the call. 

