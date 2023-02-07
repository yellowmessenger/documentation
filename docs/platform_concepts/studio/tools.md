---
title: Tools and settings
sidebar_label: Tools & settings 
---



**Tools** section helps you with the advanced bot settings related to NLU, conversation, and testing.  You can also test the bot as you build it. 

Different settings dedicated to Conversation, NLU, etc. can be configured in this section.

This article provides detailed information about different tools of the *Studio* module. 
1. Navigation to Tools
2. Bot Testing
3. Conversation Settings
4. NLU Settings

  
  

## 1. Access Tools

To access Tools, follow these steps - 

1. Login in to the [Yellow.ai Platform](https://cloud.yellow.ai/auth/login)

![](https://i.imgur.com/OLxJjsP.png)

  
2. From the menu options, click **Studio**

> Keyboard shortcut: `g + s`

3. Navigate to any any of the custom Flows or FAQs.
   * On the Flows page, click on <img src="https://i.imgur.com/vk5sSwA.png" width="20"/> ( **Tools** icon).

![](https://i.imgur.com/wP0Tc47.jpg)

   * On the FAQ page, click the **Tools** button.

![](https://i.imgur.com/9grZUR0.png)

Tools widget pops up on the right.

 
![](https://i.imgur.com/Cb9ylep.png)

Tool | Description
----- | -------
Test your bot | Analyse any sentence the user types as an input.
Conversation  | Helps you configure Conversation related settings such as Behaviour, Intelligent switching, Step validation settings, and Auto skip settings.
NLU | Helps you configure technical details based on the training.
Constants | Helps you add constant values and store those in the database. There are a few values that will remain constant throughout the conversation. It can be a person's name, a file name or any value that will not be changed as the conversation progresses.
Voice | Helps you configure settings related to the the Voice module. *It is an upcoming feature on our platform*.


## 2.1. Test your bot

This bot helps test whether the corresponding intent will get triggered or not.

For example, if you type a sentence (user utterance) in **What user says?**, the Intent of that sentence and the journey that it belongs to will be displayed along with its confidence.

![](https://i.imgur.com/aokPbNA.jpg)

  
### 2.1.1 Response parameters

The results displayed here are based on the data used to train your *intents* and *entities*.

  

The following list provides descriptions for each parmeter of the response - 

*  **Intent**: The flow of the sentence entered. That is, the bots prediction about the intention behind the text entered.
*  **Confidence**: Confidence is the % value based on the accuracy of the predicted Intent. Confidence score lies between 0 and 1. 
   * The confidence score will be 1If the bot is 100% confident about the prediction made for the intent for the specified input.
   * If the confidence value is greater than 0.8, the accuracy of the prediction is considered to be good.
3.  **Default Response**: This is the default response that bot will display to the user based on the text entered.
4.  **Entity**: Words or phrases that represent a noun is called an entity.

>In a sentence "I would like to buy a phone", **Buy** is the **Intent** and **Phone** is the **Entity**.

5.  **Global Entity**: These entities are not specifically trained by users, but by our platform itself for frequently typed phrases.

> For example, the phrase - Good Morning, is not trained by the user. The system automatically identifies it as Greeting because it is a global entity. Such training is essential for **Small talk**. Small talk is a general conversation between the user and bot, mostly pleasantries.

![](https://i.imgur.com/HMtIjQf.jpg)

  
  

### 2.1.2 Verbose

This helps you to identify the emotion (sentiment) behind the text.
 Enable **Verbose** to view more details related to the sentiment and synonyms. 

  
![](https://i.imgur.com/NiSigKX.jpg)

  

### 2.1.3 Multi-language

You can test your bot in multiple languages, by simply selecting the language of your choice from the dropdown.
  

![](https://i.imgur.com/5pwiSUQ.png)

  
:::note
To add supported languages to your bot, see [Languages](./languages-supported.md#2-add-languages).
:::
  

  

## 2.2 Conversation

This lets you control the conversation flow, message display, and the conversation related aspects.

Changes can be controlled from the following categories -


### 2.2.1 Behaviour

 This consists of fields to control the behaviour of the conversation.
 

![](https://i.imgur.com/H9Eu9QP.jpg)

  

1. **Target language** 
    The default language in which the bot will converse in before auto-suggestion or change language journey occurs.<br/> 

   For example, if **EN** (english) is entered as a target language, then the bot will initially converse in English with the user (it can be changed later).

2. **Translate quick reply responses** 
    *Currently, not in use.* 

   Choose *Yes* from the dropdown list if you want the Quick reply buttons to auto-translate the entered sentence, else select *No* to disable auto-translation.

3. **Enable Hinglish** 
    Set *Yes* to allow the bot to understand Hinglish (Hindi + English) utterances. This is tailored specifically for Indian users.<br/>

   For example, when the user types 'Agent se baat karao' the bot understands that it must - connect the user to an agent.

<img src="https://i.imgur.com/3Kt7IiD.png" width="300"/>

4. **Auto Detect Language** 
   Set *Yes* to enable bot to auto-identify the language when the user types in and respond in that respective language (this is available only if configured).

   This remains in place for 2 days or until the user changes the bot language through the set language action node. 

<img src="https://i.imgur.com/p1xK8Sq.png" width="250"/>

5. **Enable Go Back/Go Home** 
    This is a shortcut that a user can use to move to the previous step in the conversation or to go back home. 

   Select *Yes* to enable hot keywords. That is, when user types **Go home**, the welcome prompt is triggered in the bot, <br/>

   When the user types **Go back**, the chat goes back to the previous prompt in a flow. <br/>

:::note 
Go back keywords inside a journey take user to previous prompt. If used outside journey (As first prompt of a journey or after a journey is completed) - Go back goes to Welcome prompt.
:::


6. **Go back Aliases**

   Type in and configure the hot keywords of your choice to trigger the **Go back** action.

   For example, if the **Go Back Aliases** is entered as **0** or '**go back**' in the settings, the conversation will go back to the previous step when the user enters any of those words in the chat. 

<img src="https://i.imgur.com/tt2P4FO.jpg" width="50%"/>

  

7. **Go home Aliases**

   Type in the hot keywords of your choice to trigger the **Go home** action.

   For example, if the **Go Home Aliases** is entered as **x** or '**go home**' in the settings, the conversation will go back to the first step when the user enters any of these words.

<img src="https://i.imgur.com/T1jOHPX.jpg" width="50%"/>



  
8. **Negation journey**

It consists of all the flows associated with the bot. When the user inputs a sentence which urges the bot to not perform an action, the bot takes to the Negation journey.

![](https://i.imgur.com/1ktdSut.jpg)
  

For example, 

* When the user inputs "I want to talk to the manager" the bot takes to the *Transfer to Agent* flow.
* If the user inputs " I dont want to talk to the manager", the bot takes the selected negation journey.

<img src="https://i.imgur.com/VZalCux.png" width="50%"/>


### 2.2.2 Intelligent switching

As the name suggests, it is used to switch the conversation based on the users input.

> For example, instead of selecting one of the options (Savings account or Fixed deposit) for the bot question 
> 1. Bot asks "Select the type of account." 
> 2. If the user replies "What is the difference between Savings account and Fixed deposit?"
> 3. With intelligent switching, the bot replies to the user query and then switchs back to the previous flow - "Select a type of account".

  

![](https://i.imgur.com/31i60zu.jpg)

  
  

Enter the following fields to configure this section:

  

1. **Enable**: Select *Yes* from the drop-down list to enable Intelligent switching.
2. **Sticky Journeys**
   
   If you have journeys that are complicated and user interruption/intrusion from the expected flow is not ideal, you can mark them as sticky journeys.

   For these journeys, if an interruption is received, Sticky journey prompt (editable) will nudge users to stick to this journey.

   If this is selected, current journey will continue. Otherwise,  another flow will be suggested later in followup message.

  

3. **Prompt for sticky journeys**

Enter the message to show when a Sticky Journey is selected. This will nudge the user to complete the journey that the bot is currently on.

> For example: Hi, would you like to complete this first? I will not be able to save your progress.


<img src="https://i.imgur.com/K8qsb52.png" width="50%"/>


4. **Followup message**

This helps to switch back the conversation to the required flow.

> For example: "Do you want to continue where you left off?" or "What would you like to do next?"

<img src="https://i.imgur.com/FpRIio0.png" width="50%"/>



### 2.2.3 Step validation settings

This helps you configure the settings related to validating the steps involved in the bot conversation. In simple words, you can configure this to validate prompts.


![](https://i.imgur.com/lqHA99M.jpg)

  

:::note
When platform quick replies are configured, they appear in WhatsApp as a list of items in text. 

For example - 
What do you want to do next?
1. Check order status
2. Receive notification
3. Go back to Main Menu
:::
  




  

You can customise this using **Whatsapp Quick reply index** and **Structure prefix** fields.

  

1. **Whatsapp Quick reply index**: Select your preferred indexing - *Numbers* (default), *Alphabets* or *Emojis* (numerical emojis).

  

2. **Structure prefix**: You can display the entire prefix with bold and italics. The default preset entry in this box is {{index}} which looks like the example above (when Type is numbers).


WhatsApp Only

> For example: "_Type_ *{{index}}** for" will display prefix -
> "Type 1 for Gate Mechanical ", "Type 2 for AE & JE Mechanical" and so on.
> When 1 is typed, Gate Mechanical is selected, without having to type out the entire phrase.
> ![](https://i.imgur.com/yQtdhUD.png)

  
  

3. **Show prompt again**

  Select *Yes* from the dropdown to enable displaying the original prompt again after the validation failure message.

  

> For example, for **Phone prompt**
>- Phone number entered is not correct [validation failure message]
>- Can you please share your phone number? [original prompt]


**4. Enable limit on retries**

  
Select *Yes* enable the default limit on the number of retries. By default, the validation failure is allowed 3 times. 
  
5. **Error message**

  
This helps you configure the error message to be displayed when validation fails.  
> Sample message: Hey, you have reached maximum limit of retries.
> For example, in the chat below, user has attempted to select an option 3 times and the bot has timed out.
> ![](https://i.imgur.com/8l46UFv.png)

  
6.** Unknown message**

 Enter the message to display when the system is unable to validate the prompt response. 

> Sample message: "It seems I do not have a response to your input, can you try rephrasing it".


### 2.2.4 Autoskipping settings

Enable this option to allow the bot to inform the user that it already has the information that is being provided.

You can skip a prompt using entitity or variable if the value already exists. This helps avoid asking users the same question multiple times depicting the memory of your chatbot. 

![](https://i.imgur.com/ss1V7UQ.jpg)

  
  

To configure autoskip globally (at node level), click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#autoskip).

  

1. **Acknowledgement**

Select *Yes* to display an acknowledgement prompt during atto-skipping.
It is highly recommended to enable this acknowledgement for autoskipping.   

> Example:
> Bot: "I already have Account type : Savings, do you wish to continue?"
> [ Yes ][ Modify Account type]
> On clicking **Yes**, the bot will skip the step. If **Modify** is clicked, the user will be asked to select again instead of autoskipping.

  
  

2. **Acknowledgement Prompt**

  
Enter the message to be displayed as an acknowledgement.

> Example: I already have {{{stepName}}}:{{{value}}}. Do you wish to continue with this?

  

![](https://i.imgur.com/uJODA57.png)





## 2.3 NLU setting

  

This includes settings related to Natural language understanding which is based on the intent training. 
  

### 2.3.1 Prediction

  

Our Machine Learning model matches the user utterances (input sentences) to an intent with certain confidence which lies between 0 to 1. You can set your preferred confidence value.
  

   ![](https://i.imgur.com/PcYb9KM.jpg)

  

1. **Min confidence**: It is a minimum value calculated (as per the accuracy of intent predicted) below which intent will not be triggered.

  
> For example, if the Min Confidence is set to 0.85, which means, bot will respond only when the confidence level for the intent predicted for the input text is over 85%.

  

   *Use case*: When a user wants to talk to someone from the support team and they ask the bot "Talk to your agent" or "Talk to tech support", bot must understand the intent and direct to "Transfer Agent" flow.

   <img src="https://i.imgur.com/7DM473O.png" width="300"/>

- If Min Confidence is set to 0.85 and the user types "Talk to your agent", bot replies appropriately as the intent predicted is "Transfer Agent" and confidence is 1.

   <img src="https://i.imgur.com/k5bc5Tz.png" widht="70%"/>


- If Min Confidence is set to 0.85 and the user types "Talk to tech support", bot will not be able to reply as confidence for the intent predicted is unknown.

  

   <img src="https://i.imgur.com/aok3dur.png" width="100%"/>

  
  

2. **Context confidence**: Enter the minimum confidence score required. It a minimum value calculated for the context accuracy below which the intent will not be triggered.

  
  
3. **Secondary model confidence**: It is a global contextual model value, if the predected value is below the entered value, intent will not be triggered.

  

### 2.3.2 Document search settings

  

![](https://i.imgur.com/48zbQOf.jpg)

Option | Description
-------- | ------
Document search threshold | Minimum confidence needed to show documents in the Document search node.
Boost document rank by  | Choose the preference by which the user query should match - Headers or Paragraph. This parameter can be used to boost the document ranks.<br/>For example, if a document has a header with the user data and rest of content below it and Boost document rank by is enabled, this document will show up higher in ranks as the query users data matches the header in the document.


![](https://i.imgur.com/hLQTC4N.png)


### 2.3.3 Multi Intent Settings

*Coming soon... Currently not in use*

  

Enabling Multi-Intent will help the model to detect two - intents in one user utterances. Basically, if this option is enabled and the user types " Book a flight and reserve a hotel" (assuming appropriate training) Model will detect two intents "Book a flight" and "Reserve a hotel".

  

Responding to the multi intent, model will acknowledge this (Acknowledgement message) and ask the user what would they like to do first, with these two options as quick replies.

  

Remaining option and Go home will be suggested as quick replies with followup message (this is similar to **Intelligent switching**).

  

![](https://i.imgur.com/U0C7Dwl.png)

  
Option | Description
-------- | ---------
Enable | Set *Yes* to enable multi-intent.
Acknowledgement question | The acknowledge message to display when multiple intents are detected. <br/>Sample message: I understand, What would you like to do first?
Followup question |  Question to ask in follow up to the previous question. <br/> Sample message: Would you like to proceed?
  

![](https://i.imgur.com/s4zM19K.png)



## 2.4 Constants

This section helps you add values that remain constant throughout the conversation. It can be a person's name, a file name or any value that will not be modified as the conversation progresses. 

In this tab, you can add constants by clicking the **+Add Constants button** and also store those values in the database.

![](https://i.imgur.com/dernhZp.jpg)


 
## 2.5 Voice 

:::note
You can configure these settings only when IVR **Channel** is connected. Click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/Ivr) to learn how. 
:::
  
  
  

The voice global options that are configured will be applicable for all the nodes and journeys for the bot. Node-level options can be configured for each node specifically. Whenever a global option and also node level option are defined, for that specific node, the node level option will be given more priority. For example,  

-   **Global level**: You can select an STT/TTS engine globally so that you don’t have to configure it for each node.
-   **Node level**: You can configure different “recording max duration” for different nodes i.e. 10 seconds for address and 5 seconds for name node.


Voice bot global options/settings are classified depending upon different uses as below:  

1.  **Telephony**: For settings related to telephony like call forwarding, calling line identity, etc.
2.  **Recording**: Recording options such as beep sound after a question is asked.
3.  **Speech to Text**: You can customise a speech recognition software that enables the recognition and translation of spoken language into text.
4. **Text-to-Speech**: You can customise the Text-to-Speech (TTS) capabilities to play back text in a spoken voice.
5.  **Conversation**: Yellow cloud provides additional conversational options to further customize and elevate the experience on the IVR channel.
6.  **Others**: Miscellaneous settings to handle invalid and blank user responses and fallbacks.


![](https://i.imgur.com/I4cS4Nn.png)

  

  

:::note

Most of the options can be configured globally.

If they are configured at the [node level](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes#32-configure-node-for-a-voice-bot), node level customisation takes priority over the global level settings.

:::

  
  
  

#### Telephony related voice settings 

  
  

| Fields | Description |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Custom SIP header** | This can be used as an additional parameter that can be passed to an agent while transferring the call to an Agent to pass along bot collected information. You can pass a key-value pair in JSON format which will get passed in the SIP header. |

> An example of the Custom SIP header:    

``` [{“key”:“User-to-User”, “value”:“name=david&product=heater&query=not turning off&priority=high&number=12345”}] ``` 


  
  
  
  
  
  
  

#### Recording related voice settings 

  
  
  

| Fields | Description |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Recording after call forward** | When this option is enabled the call will get recorded even after it has been transferred to an agent. This can be disabled for use cases with recording sensitive information. |
| **Enable recording beep** | When this is enabled, a beep sound will be played after the bot asks a question giving an auditory response to the end-user to respond.|
| **Recording Action** | With the recording management options, you can select to pause/resume/stop recording depending upon different use-cases and conversations. By default, the recording is ON only. Also, in a call, once you STOP the recording (for recording sensitive dialogues), it can’t be resumed back. |


  

#### STT related voice settings 

  
  
  
  

| Fields | Description |
| -------------------------- | ----------- |
| **STT engine** | Select an engine from the dropdown- Google/Microsoft. |
| **STT mode** | Select mode from the dropdown. Microsoft provides "Static", "Streaming" or "Streaming Advanced". Google provides "Static". |
| **STT language** | Bot Language(ISO code) can be selected from the dropdown. Default- English. Click [Microsoft](https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support?tabs=stt-tts) or [Google](https://cloud.google.com/speech-to-text/docs/languages) for more information on the languages)|
| **Recording max duration** | This value is the Max duration for which the bot will wait after asking a question (in any step) even while the user is speaking. For example, after asking “Which city are you from?” and the recording duration value is “5" - the bot records only 5 seconds of user response. This option is necessary to avoid consuming unwanted information and to stay with the conversational flow. If the user mistakenly replies with long paragraphs when a question is asked or if the user's response is getting shadowed with constant background noises, the bot must not process those long inputs. Hence, with this configuration, the bot only takes the necessary response and can quickly process the user response.  |
| **Recording silence duration** | Apart from recording max duration which caps the maximum time of user response, to further make the conversation lively and realistic, another parameter is configuring the expected silence duration. Recording silence duration is the max SILENCE duration for which the bot will wait after asking a question (in any step) for the user to respond. While setting the silence duration, please note that it is applicable to the whole duration of user response, meaning, the silence at any point of user response be it at - (a) initial thinking/processing time OR (b) in between pauses of user response shouldn’t be greater than configured silence duration.  Applicable with Microsoft and Google with STT mode set as STATIC.   |
| **Initial silence duration** | To provide more customization on the silence duration parameter, “streaming” and “streaming-advanced” STT modes (of Microsoft STT engine) allow to specifically configure the maximum acceptable silence duration before the user starts speaking.  For example, the acceptable initial silence duration for the application number question could be higher (~3/4 seconds) but in the case of a quick conversational binary question, it could be configured to 1 second. |
| **Final silence duration** | Similar to the initial silence duration, the final silence duration is indicative of the maximum duration of pause that the bot will wait for once the user has started speaking. For example, for binary/one-word questions like yes/no we could set the final silence duration to ~0.5/1.0 seconds and for address-like fields where taking a pause is intrinsic in conversation, we can set the final silence duration to ~1.5/2.5 seconds.|

  
  
  
  

#### TTS related voice settings 

  
  
  

| Fields | Description |
| ------------ | ----------- |
| **TTS engine** | Select the engines from the dropdown- Microsoft Azure, Google Wavenet, Amazon Polly. |
| **Text type** | Select Text/SSML from the dropdown. |
| **TTS language** | Bot Language(ISO code) can be selected from the dropdown.|
| **Pitch** | Pitch value can be any decimal value depending on the base of voice required, 0 is ideal. You can add this for Microsoft if text_type = "text" and for Google for text_type = "text" and "SSML". |
| **Voice ID** | Type the characters of voice ID. You can add this for Microsoft if text_type = "text" and for Google if text_type = "text" and "SSML". |
| **TTS Speed** | This value defines how fast the bot must converse. This value can be 0.9 - 1.5 for the bot to soundly humanly. You can add this for Microsoft if text_type = "text" and for Google if text_type = "text" and "SSML". |

  
  
  
  

#### Conversation related voice settings 

  
  
  

| Fields | Description |
| ------------------------------ | ----------- |
| **Enable acknowledgement message** | When this is enabled, an acknowledgement kind message (“hmmm” OR “okay”) could be spoken in the conversation immediately. This is a small custom feature built to bring more human touch to the conversation.  |
| **Acknowledgement message** | Enter a text/SSML message depending upon the configuration under the Text Type field. Keep it short for a better user experience.  . Ex: "Do you want to confirm?" |
| **Boost phrases** |Some user responses can be confusing for the bot to understand. Region-specific words, new Genz lingos, internet terminologies, trending phrases, and abbreviations are trained especially so that the bot understands the exact intention. For example, COVID is a new term that has been used frequently, the phrase COVID must be boosted, otherwise, it gets translated to kovind/ go we/ co-wid etc. Ex: you should add the phrases that you expect from the user response like, < I want to take covid vaccine > |

  

#### Other voice settings 

  

| Fields | Description |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Repeat limit** | In cases of a blank user response to the question, this is the number of times a repeat message should be played. For example, if the value is 3, the bot asks the user to respond 3 times before following the fallback Configuration. |
| **Repeat fallback flow** | Select the conversation fallback to be configured in cases of blank user response even after repeated tries. Currently only support - **disconnect** and **agent transfer** as the fallback options. |
| **Disconnect message** | Message to be played before disconnecting the call as a part of fallback. For example, "Have a nice day. Bye!" |