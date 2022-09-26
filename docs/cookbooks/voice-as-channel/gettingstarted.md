---
title: Getting started
sidebar_label : Getting started
---



This article will guide you to get started with creating a simple voice flow for a **Voice Bot** and test how it works.
 
In this article you will learn: 
1. [How to add IVR number?](#addnumber)
2. [Voice bot system architecture](#architecture)
3. [How to create a simple flow and add context (to trigger the conversation)](#firstflow)
4. [Test your flow](#test)



 ---

:::note

**Prerequisites**

If you are new to the yellow platform:
1. Sign in to the [yellow](https://cloud.yellow.ai/auth/login) platform, create an account. 
2. Create a [sample bot](https://docs.yellow.ai/docs/platform_concepts/studio/overview#3-steps-to-build-a-bot) (only follow the first 3 steps steps in section 3 to get started with a voice bot ).
:::

## <a name="addnumber"></a>  1. Add your Number

You must link the bot to some number, so that when the users calls on this number they can have a conversation with the bot. 

Once you are ready with a personalized voice bot of yours, the first step towards enabling the voice channel is to assign a number to your voice bot.

:::note
- The associated number will be used for making (an outbound) call or receiving (an inbound) call usecase.
- This is chargable, contact yellow team before getting started. 
:::


To add a number (Interactive Voice Response- IVR), follow the given steps: 

1. Open [Channel](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview), **Voice** > **IVR** channel. Click **+Add IVR Number**.

![](https://i.imgur.com/qrhWPLr.png)

2. Select the bot **region** and assign one or many IVR **numbers** as per your usecase. There could be different types of number like landline/mobile available for association. Select the number/s as per requirements. Click Add. 


![](https://i.imgur.com/iz1hH1F.png)

---

## <a name="architecture"></a> 2. Voice Bot System Architecture

Voice bot has a simple working architecture with two most important components.  Let us take an inbound usecase as an example and understand the complete workflow.

1. **Telephony platform**: This takes care of voice processing related options like initilizing calls, call forwarding, call waiting etc. which enables the robust platform capabilities for bot functioning.
2. **Yellow Cloud platform**: This is responsible for the business logic, NLP, conversation flow etc. 


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

![](https://i.imgur.com/A45CdtH.png)


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

---

:::info

Welcome message and Callout message availabe on the home flow are not applicable for voice bots. 

![](https://i.imgur.com/NU6pYnQ.png)


For a **chat bot**, the conversation is expected to be continued from the previous message from where the chat got discontinued. 
For a **voice bot**, every incoming call is a new request to start the conversation from the beginning of the flow. Hence it must be configured differently as compared to a chat bot.
:::

## <a name="firstflow"></a> 3. Trigger your first Flow with context 

To create a simple voice bot flow, follow the steps below:

1. [Create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys/#3-flow): When a call is received, bot will initilize a conversation with the caller by talking some phrases- 

> "Hello, I am Bella, how can I help you today?"

![](https://i.imgur.com/QSy3hUV.png)


:::note
Enter the input text in SSML format. 
:::

2. **Trigger the first flow**: This is triggered by the incoming **Context text**(intent). This will run in the background and it only has to be configured to execute the first flow. 
> For example, Context is **Welcome**.

:::note
The context text (example- welcome) is assigned by the yellow internal team. This text cannot be modified by the bot developer. 
:::
<a name="test"></a> 

3. Add Context(intext) in the [Context Management](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-contextual-response#how-to-add-contextual-responses) tab:

- Open **Studio** > **Train** > **Context Management**. Click **+Add contextual intents**. 

![](https://i.imgur.com/2Yg14g3.png)

- Add Utterances (variations of the expected context text, in lowercase letters) and click **Submit**.

> Do not add the same/similar utterances for other intent names to avoid confusing the bot. 

![](https://i.imgur.com/lgCPkTK.png)

- Click **Set default response** next to the context name and on the **Default response** popup, select **Execute flow**. 

> **Welcome** must trigger only one flow. Hence, add only one default response. 

![](https://i.imgur.com/Yf8xtfQ.jpg)

- Select the flow that is expected to get executed first. 

![](https://i.imgur.com/xshf9yr.png)

- Click **Train responses**. 

![](https://i.imgur.com/nGLuW40.png)

---

## <a name="test"></a> 4. Test the flow 

- Make a call to the IVR number you have added and see if the bot starts the conversation with the phrase that you had configured. 
- Alternatively, you can type in the context text in the preview bot and see if the required flow/nodes are getting executed. 

![](https://i.imgur.com/lA1ZvGb.png)



