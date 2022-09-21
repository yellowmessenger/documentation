---
title: Settings and Options in Tools
sidebar_label: Tools and Settings 
---



**Tools** section is used to make advance settings to the bot, you can also test it as you build it. Different settings dedicated to Conversation, NLU, etc. can be configured in this section. 

This document consists details about tools  (of **Studio** module). Following topics are discussed in detail: 

1. Navigation to Tools 
2. Bot Testing 
3. Conversation Settings 
4. NLU Settings 


## 1. Where to find Tools? 

Follow the steps below to find **Tools** section on the platform: 

1. Sign in to https://cloud.yellow.ai/auth/login

![](https://i.imgur.com/OLxJjsP.png)


2. Open **Studio** from the Overview page. 
3. Open any of the custom **flows** or **FAQ** tab. 
4. Cick the **Tools** icon on the **flow** page.

![](https://i.imgur.com/wP0Tc47.jpg)

5. Or, on the **FAQ** page, click the **Tools** button. 

![](https://i.imgur.com/9grZUR0.png)

6. Testing and settings interface will popup on the right. 

![](https://i.imgur.com/Cb9ylep.png)

## 2. Explore Tools 

Under the tools section you will find the following: 
1. **Test your bot**- Any sentence typed as an input by the user can be analysed here. 
2. **Conversation**- Conversation can be customized. 
        Behaviour
        Intelligent switching 
        Step validation settings 
        Auto skipping settings 
    
3. **NLU**- Technical details based on the training can be modified. 
    Prediction 
    Document Search Setting 
    Multi Intent Settings 
    
4. **Constants**- There are a few values that will remain constant throughout the conversation. It can be a persons name, a file name or any value that will not be modified as the conversation progresses. In this tab, you can add those constants and also store those values in the database. 


5. **Voice**- These settings are related to the voice module. It is an upcoming feature on our platform. 



### 2.1. Test Your Bot 

On this tab, users can test the response to see if the corresponding intent will get triggered or not.
That is, any sentence (user utterance) can be typed in **What user says?** field, the Intent of that sentence and the journey that it belongs to will be displayed along with its confidence.

![](https://i.imgur.com/aokPbNA.jpg)

The results displayed here are based on the data used to train your **intents** and **entities**. 

Results obtained here is analysed for: 

1. **Intent**: The flow/journey of the sentence entered. That is, the bots prediction about the intention behind the entered text. 


2. **Confidence**: Confidence is the % value based on the accuracy of the predicted **Intent**. Confidence score lies between 0 and 1. 1 if the bot is 100% confident about the prediction made for the intent of the input.

> When the confidence value is greater 0.8, the accuracy of the prediction is considered to be good. 

3. **Default Response**: This is the default response that bot will display to the user based on the text entered. 

4. **Entity**: Words or phrases that represent a noun is called an entity. 

>In a sentence "I would like to buy a phone", **Buy** is the **Intent** and **Phone** is the **Entity**. 

5. **Global Entity**: These are entities not specifically trained by the users but by our platform itself for frequently typed phrases. 

>The phrase - Good Morning, is not trained by the user. The system automatically identifies it as Greeting because it is a global entity. Such training is essential for **Small talk**. Small talk is a general conversation between the user and bot, mostly pleasantries. 
 
![](https://i.imgur.com/HMtIjQf.jpg)


***Verbose*** 

**Verbose** can be enabled on the top right corner above the text to view more details related to the **sentiment** and **synonyms**. This can be used to identify the emotion(sentiment) behind the text. 

![](https://i.imgur.com/NiSigKX.jpg)

***Multiple Languages***

You can test your bot in multiple languages, by simply selecting the language of your choice from the dropdown. 

![](https://i.imgur.com/5pwiSUQ.png)

To enable multiple languages:
Go to `Overview > Configure > Edit Basic Details > Add language`

![](https://i.imgur.com/mJLXV1W.png)


### 2.2 Conversation 

All the parameters found on conversation settings are used to control the conversation flow, message display and the conversation related aspects. Changes can be controlled from the following categories: 

* Behaviour        
* Intelligent switching 
* Step validation settings 
* Auto skipping settings 


#### 2.2.1 Behaviour 


![](https://i.imgur.com/H9Eu9QP.jpg)

Control the behaviour of the conversation by modifying the fields below: 

**1. Target language**

Target language is the default language in which the bot will converse in before auto suggestion or change language journey occurs. 
For example, if **EN** (english) is entered as a target language, then the bot will initially converse in English with the user (it can be changed later).

**2. Translate quick reply responses**

*Coming soon... Currently not in use*

Yes or No can be selected from the dropdown list. If you  want the Quick reply buttons to auto-translate the entered sentence, select **Yes**.


**3. Enable Hinglish**

Yes or No can be selected from the dropdown list. This allows the bot to understand Hinglish (Hindi + English) user utterances. Custom-made for the Indian users. 


For example, when the user types 'Agent se baat karao' the bot understands that it must - connect the user to an agent. 

![](https://i.imgur.com/i2zAjhy.png)

**4. Auto Detect Language**

Yes or No can be selected from the dropdown list. If you select **Yes**, bot can auto-detect the language that the user has typed in and change it to their own language to respond to that (this is available only if configured). 


* This remains in place till 2 days or until bot language is changed by user selection through set language action node.

![](https://i.imgur.com/PcSTG5u.png)

**5. Enable Go Back/Go Home**

This feature is a shortcut that a user can use to move to the previous step in the conversation or to go back home. 
Yes or No can be selected from the dropdown list. Selecting **Yes** will enable hot keywords for 
* **Go home**-> Welcome prompt is triggered on the bot.  
* **Go back** -> Chat goes back to the previous prompt in a journey.


Note : Go back keywords inside a journey take user to previous prompt. If used outside journey (As first prompt of a journey or after a journey is completed) - Go back goes to Welcome prompt.

**6. Go back Aliases**

Type in and configure the hot keywords of your choice to trigger the **Go back** action. 


For example, if the **Go Back Aliases** is entered as **0** or '**go back**' in the settings and the user enters those words in the chat, the conversation will go back to the previous step. 

![](https://i.imgur.com/mPuaLab.jpg)

**7. Go home Aliases**

Type in and configure the hot keywords of your choice to trigger the **Go home** action. 


For example, if the **Go Home Aliases** is entered as **x** or '**go home**' in the settings and the user enters those words in the chat, the conversation will go back to the first step.

![](https://i.imgur.com/55EjJk0.png)



**8. Negation Journey**

Negation Journey dropdown will consist of all the flows/journey associated with your bot. When the user inputs a sentence which urges the bot to **not** perform an action, the bot takes the negation journey. 

![](https://i.imgur.com/mgb7cbt.jpg)


For example, when the user inputs "I want to talk to the manager" the bot takes the *Transfer to Agent* flow.  
If the user inputs " I dont want to talk to the manager", the bot takes the selected negation journey.

![](https://i.imgur.com/soMyHu8.jpg)



#### 2.2.2 Intelligent Switching  

Intelligent Switching - like the name suggests is used to switch the conversation based on the users input. 

For example, instead of selecting one of the options (Savings account or Fixed deposit) for the bot question "Select a type of account." the user replies "What is the difference between "Savings account and Fixed deposit" the bot will be able to reply to the user query and switch back to the previous flow and ask the user to "Select a type of account." This is intelligent switching. 

![](https://i.imgur.com/31i60zu.jpg)


Enter the following fields to configure this section:  

**1. Enable**

Yes or No can be selected from the dropdown list. Select Yes to enable  Intelligent switching. 

**2. Sticky Journeys**

If you have journeys that are complicated and user interruption/intrusion from the expected flow is not ideal, you can mark them as sticky journeys. 
For these journeys, if an interruption is received, Sticky journey prompt(editable) will nudge users to stick to this journey. 
If this is selected, current journey will continue. Otherwise, the other flow will be suggested later in followup message.

**3. Prompt for Sticky Journeys**

When a Sticky Journey is selected, this message will be displayed, this will nudge the user to complete the journey that the bot is currently on. 
The message can be (editable):  Hi, would you like to complete this first? I will not be able to save your progress.

![](https://i.imgur.com/s4zM19K.png)

**4. Followup Message**

Follow-up message is used to switch back the conversation to the required flow. 
This message can be (editable): "Do you want to continue where you left off?" or "What would you like to do next?"

![](https://i.imgur.com/UlnE2o1.png)

#### 2.2.3 Step Validation Settings

These parameters are used to validate the steps involved in the bot conversation, more specifiaclly- it is configured to validate the prompts. 

![](https://i.imgur.com/lqHA99M.jpg)

Note: When platform quick replies are configured, they appear on whatsapp as a list of items in text. For example, 

What do you want to do next?

    1. Check order status
    2. Receive notification
    3. Go back to Main Menu

This can be customized by filling in the **Whatsapp Quick reply index and Structure prefix** fields. 

**1. Whatsapp Quick reply index** 

Select from three options **Numbers**(default), **Alphabets** or **Emojis** (numerical emojis) as per your index.

**2. Structure prefix**

You can display your overall prefix with bold & italic support. Default preset entry in this box is {{index}} which looks like the example above (when type is numbers).


WhatsApp Only
For example: "_Type_ *{{index}}** for" will display  prefix -

"Type 1 for Gate Mechanical ", "Type 2 for AE & JE Mechanical" and so on.

When 1 is typed, Gate Mechanical is selected, without having to type out the entire phrase.

![](https://i.imgur.com/yQtdhUD.png)


**3. Show prompt again**

Yes or No can be selected from the dropdown list. Enabling this will show the original prompt again after the validation failure message.

For example, for **Phone prompt**

- Phone number entered is not correct [validation failure message] 
- Can you please share your phone number? [original prompt]

**4. Enable Limit on Retries**

Yes or No can be selected from the dropdown list. By default validation failure is allowed 3 times. If this option is enabled, it will change the limit. 


**5. Error message**

If the validation fails, the Error message to be displayed can be configured here. The message can be (editabe): Hey, you have reached maximum limit of retries.

For example, in the chat below, user has attempted to select an option 3 times and the bot has timed out. 

![](https://i.imgur.com/8l46UFv.png)


**6. Unknown message**

If the validation for the entered message is unknown, this reply can be displayed (editable) "It seems I do not have a response to your input, can you try rephrasing it".


#### 2.2.4 Autoskipping Settings

We can skip a prompt using entitity or variables, if the value is already exists (thus avoiding asking users the same question multiple times). This depicts the memory of your chatbot. When Autoskipping Settings is **Enabled**,   the bot informs the user that it already has the information that is being provided. 

![](https://i.imgur.com/ss1V7UQ.jpg)


To configure autoskip globally (at node level), click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#autoskip). 

**1. Acknowledgement**

Yes or No can be selected from the dropdown list. Although, it is highly recommended that you enable this acknowledgement for autoskipping. By enabling acknowledgement, instead of directly skipping something (that might confuse the user), the bot will show an acknowledgement prompt like shown below:


> BOT: "I already haveAccount type : Savings, do you wish to continue?"
> 
> [ Yes ][ Modify Account type]

On clicking **yes**, the bot will skip the step. If **Modify** is clicked, the user will be asked to select again instead of autoskipping.


**2. Acknowledgement Prompt**

The message to be displayed as an acknowledgement can be entered here. 

For example,  
> I already have {{{stepName}}}:{{{value}}}. Do you wish to continue with this?

![](https://i.imgur.com/uJODA57.png)

### 2.3 NLU Setting

NLU settings include settings related to Natural language Understanding which is based on the intent training. The following can be customized for your bot: 

1. Prediction
2. Document Search Settings
3. Multi Intent Settings

#### 2.3.1 Prediction

Our Machine Learning model matches the user utterances (input sentences) to an intent with certain confidence which lies between 0 to 1. 

Under the **prediction** tab, **Confidence** can be modified. 

![](https://i.imgur.com/PcYb9KM.jpg)

**1. Min confidence**

Min Confidence is a minimum value calculated (as per the accuracy of intent predicted) below which intent will not be triggered.


For example, if the Min Confidence is set to 0.85, which means, when the bot is more than 85% confident that the intent predicted for the input text is correct, bot will respond to the user as expected. 

In our use case, when a user wants to talk to someone from the support team and they ask the bot "Talk to your agent" or "Talk to tech support", bot must understand the intent and direct to "Transfer Agent" flow. 

![](https://i.imgur.com/aahlFgb.png)

- Min Confidence is set to 0.85 and the user types "Talk to your agent", bot replies appropriately as the intent predicted is "Transfer Agent" and confidence is 1. 

![](https://i.imgur.com/U4vjhut.jpg)

- Min Confidence is set to 0.85 and the user types "Talk to tech support", bot will not be able to reply as confidence for the intent predicted is unknown. 

![](https://i.imgur.com/aok3dur.png)


**2. Context confidence**

Context Confidence is a minimum value calculated for the context accuracy below which the intent will not be triggered. 


**3. Secondary model confidence**

Secondary model is a Global contextual model value, if the predected value is below the entered value, intent will not be triggered.

#### 2.3.2 Document Search Settings

![](https://i.imgur.com/48zbQOf.jpg)


**1. Document Search Threshold**

Document Search thershold is minimum confidence needed to show documents in document search node.

**2. Boost document rank by**

Boost document rank by is used to give preference to documents where the document-headers/paragraph matches a user query. This parameter can be used to boost the document ranks. 

For example, if a document has a header with the user data and rest of content below it and Boost document rank by is enabled, this document will show up higher in ranks as the query users data matches the header in the document.

![](https://i.imgur.com/hLQTC4N.png)

#### 2.3.3 Multi Intent Settings 
*Coming soon... Currently not in use*

Enabling Multi-Intent will help the model to detect two - intents in one user utterances. Basically, if this option is enabled and the user types " Book a flight and reserve a hotel" (assuming appropriate training) Model will detect two intents "Book a flight" and "Reserve a hotel". 

Responding to the multi intent, model will acknowledge this (Acknowledgement message) and ask the user what  would they like to do first, with these two options as quick replies. 

Remaining option and Go home will be suggested as quick replies with followup message (this is similar to **Intelligent switching**).

![](https://i.imgur.com/U0C7Dwl.png)

**1. Enable**

Yes or No can be selected from the dropdown list. If **Yes** is selected, Multi Intent is enabled. 

**2. Acknowledgement question**

When the multiple intents are detected, you can display an acknowledge message to the user. 

For example (editable): I understand, What would you like to do first?

![](https://i.imgur.com/s4zM19K.png)


**3. Followup Question**

Following up to the previous question, another question can be posed to the user. 

For example (editable): Would you like to proceed.


### 2.4 Constants 
 
Values that will remain constant throughout the conversation can be added under this section. It can be a persons name, a file name or any value that will not be modified as the conversation progresses. In this tab, you can add those constants by simply clicking the **+Add Constants button** and also store those values in the database.
 
![](https://i.imgur.com/dernhZp.jpg)
 
### 2.5 Voice

  
  

> These settings are configurable when IVR is connected.

> (From Channel > Voice > IVR)

  

![](https://i.imgur.com/9hiy6Pg.jpg)

  
  
  
  

The global options are configured to be applicable for all the nodes in general. Node level options are configured for each node specifically. For example:

*  **Global level**: You can select an STT/TTS engine globally so that you don't have to configure it for each node.

*  **Node level**: You can configure recording for each node, for example for the address node the recording duration is longer than the phone number node.

  
  

Voice bot provides multiple settings for different uses, they are classified into:

1.  **Telephony**: For settings on the telephony platform like call forwarding, calling line identity, etc.

2.  **Recording**: Recording options such as beep sound after a question is asked, and duration of call recording.

3.  **Speech to text**: You can customise a speech recognition software that enables the recognition and translation of spoken language into text.

4.  **Text to speech**: Customise the Text-to-Speech (TTS) capabilities to play back text in a spoken voice.

5.  **Conversation**: Yellow cloud related options to support telephony platform.

6.  **Others**

  
  

![](https://i.imgur.com/sByzV1b.png)

  

:::note

Most of the options can be configured globally.

If they are configured at the [node level](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes#32-voice), node level customisation takes priority over the global level settings.

:::

  
  
  

**Telephony related options**

  
  

| Fields | Description |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Custom SIP header** | This is the extra info to be passed to an agent with SIP call transfer. Enter a key-value pair in JSON format. |

  
  
  
  
  
  
  
  

**Recording related options**

  
  
  

| Fields | Description |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Recording after call forward** | When this option is enabled the call will get recorded even after it has been forwarded to another receiver. This can be disabled for use cases which are recording sensitive information. |
| **Enable recording beep** | When this is enabled, a beep sound is played before recording the user's response.|
| **Recording Action** | Select a value from the dropdown to take an action like Pause, Resume, Stop (Default - Recording is ON). This can be used for use cases which are recording sensitive information. |

  
  
  
  
  
  

**STT related options**

  
  
  
  

| Fields | Description |
| -------------------------- | ----------- |
| **STT engine** | Select an engine from the dropdown- Google/Microsoft. |
| **STT mode** | Select mode from the dropdown. Microsoft: "Static" "Streaming" or "Streaming Advanced". Google: "Static". |
| **STT language** | Bot Language(ISO code) can be selected from the dropdown. Default- English. Click [Microsoft](https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support?tabs=stt-tts) or [Google](https://cloud.google.com/speech-to-text/docs/languages) for more information on the languages)|
| **Recording max duration** | This value is the Max duration for which the bot will wait after asking a question (in any step) while the user is speaking. For example, after asking "Which city are you from" and the recording duration value is 0.5- the bot records 5 seconds of a response. This option is necessary to avoid consuming unwanted information and to stay with the flow while the bot is conversing. If the user replies in long paragraphs when a question is asked or the voice is shadowed with background noises, the bot must process those long inputs which are not ideal. Hence, with this, the bot only takes the necessary response and quickly processes the user query. |
| **Recording silence duration** | This value is the Max duration for which the bot will wait after asking a question (in any step) for the user to respond. For example, if the recording silence duration is 5 seconds, bot waits for 5 seconds for the response if the user is silent. If the user does not respond to anything within 6 seconds, a bot Message will be played. |
| **Initial silence duration** | Enter a decimal number which will be the acceptable silence duration before a bot user starts speaking. |
| **Final silence duration** | Enter a decimal number which will be the acceptable silence duration after a bot user starts speaking and the bot will have to process the response. |

  
  
  
  

**TTS related options**

  
  
  

| Fields | Description |
| ------------ | ----------- |
| **TTS engine** | Select the engines from the dropdown- Microsoft Azure, Google Wavenet, Amazon Polly. |
| **Text type** | Select Text/SSML from the dropdown. |
| **TTS language** | Bot Language(ISO code) can be selected from the dropdown.|
| **Pitch** | Pitch value can be any decimal value depending on the base of voice required, 0 is ideal. You can add this for Microsoft if text_type = "text" and for Google for text_type = "text" and "SSML". |
| **Voice ID** | Type the characters of voice ID. You can add this for Microsoft if text_type = "text" and for Google if text_type = "text" and "SSML". |
| **TTS Speed** | This value defines how fast the bot must converse. This value can be 0.9 - 1.5 for the bot to soundly humanly. You can add this for Microsoft if text_type = "text" and for Google if text_type = "text" and "SSML". |

  
  
  
  

**Conversation related options**

  
  
  

| Fields | Description |
| ------------------------------ | ----------- |
| **Enable acknowledgement message** | When this is enabled, an acknowledgement message can be played when the user is done speaking. |
| **Acknowledgement message** | Enter a text message. Ex: "Do you want to confirm?" |
| **Boost phrases** |Some user responses can be confusing for the bot to understand. Region-specific words, new Genz lingos, internet terminologies, trending phrases, and abbreviations are trained especially so that the bot understands the exact intention. For example, COVID is a new term that has been used frequently, the phrase COVID must be boosted, otherwise, it gets translated to kovind/ go we/ co-wid etc. |

  

**Other options**

  

| Fields | Description |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Repeat limit** | This is the number of times a repeat message can be played. For example, if the value is 3, the bot asks the user to respond 3 times and disconnects. |
| **Repeat fallback flow** | Select the flow that must be followed when there is a fallback. |
| **Disconnect message** | This is the message played before disconnecting the call. For example, "Have a nice day. Bye!" |