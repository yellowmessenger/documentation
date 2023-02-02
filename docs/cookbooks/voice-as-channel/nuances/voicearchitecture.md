---
title: Understanding Yellow's Voice Bot System Architecture
sidebar_label : Voice bot architecture
---


Voice bot has a simple working architecture with two most important components.  Let us take an inbound usecase as an example and understand the complete workflow.

1. **Telephony platform**: This takes care of voice processing related options like initilizing calls, call forwarding, call waiting etc. which enables the robust platform capabilities for bot functioning.
2. **Yellow Cloud platform**: This is responsible for the business logic, NLP, conversation flow etc. 

![](https://i.imgur.com/ii1yOS5.png)

A voice bot functions as mentioned in the following steps: 

**Initialize a conversation**

1. An incoming call is received from the user's end which is identified on the Telephony platform. 
2. A request is made by the Telephony platform to make a call with Context text, user phone number and bot phone number.

> Example:
>  **Context text**: Welcome 
>  **Incoming request from**: User number +9187386*****
> **Send request to**: Company number +9178903****1

:::note
The most critical part of voice bot is to configure WELCOME message response. Explained in detail in the [next section](#context). 
:::

3. Yellow cloud verifies company number to identify the Bot. 

> Ex: User number +9187386***** belongs to XYZ company. Initilize XYZ bot. 

4. Recognizes context text/Intent to start a flow (to begin a conversation).

> Ex: Context text is Welcome, Trigger the #WelcomeFlow



---

![](https://i.imgur.com/kkU4j5w.png)


5. Context text is linked to a flow (which will lead the conversation between the caller and platform).

> Ex:  Welcomeflow's node is requesting for a user input that is in question node. "Hey! I am Lara, How can I help you?"


6. First node of the flow will get processed on the Yellow platform and be sent to the Telephony platform. 

> Ex: Question nodes text is converted to speech - "Hey! I am Lara, How can I help you?"


7. The bot request will be heard by the user in form of voice output. 

![](https://i.imgur.com/vsrqGID.png)

**Continue bot conversation**

8. User replies to the previously posed request. 

> Ex: "I am Jake, I want to know my bank balance."

9. The user response will be sent from Telephony platform to the Yellow Cloud platform. 
10. Bot identifies the request and generates an output to be sent to the user via. Telephony platform in the form of speech. 

![](https://i.imgur.com/OENyRuR.png)

This flow continues until the conversation reaches the end or the bot user disconnects the call. 

