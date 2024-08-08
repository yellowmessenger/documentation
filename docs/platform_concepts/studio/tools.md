---
title: Tools and settings
sidebar_label: Tools & settings 
---

You can find advanced settings in the tools section, that will help you to finely adjust your bot's performance. You can calibrate language understanding through NLU, configure conversational behavior, add constant values that do not change in any conversations, and prepare for upcoming Voice capabilities. These tools collectively elevate your bot's performance and user engagement.

## Access tools

To access the tools section:

1. Go to **Automation** > **Train** > **Intents** > **Tools**

   ![](https://imgur.com/e4CgoyZ.png)

The tools section consists of five segments:

   
   <img src="https://i.imgur.com/YrLTZ16.png" alt="drawing" width="60%"/>

| Tool          | Description                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| Test your bot | Analyse user-input sentences.                                                            |
| Conversation  | Tailor **Conversation settings**, such as **Behavior**, **Intelligent switching**, **Step validation**, and **Auto skip settings**. |
| NLU           | Customize technical specifics based on training.                                                      |
| Constants     | Incorporate constant values stored in the database, such as names or filenames, ensuring continuity throughout interactions. |
| Voice         | Adjust settings linked to the **Voice** feature on our platform.                       |

## Test your bot

This section helps you check whether the associated intent will be triggered or not. The bot utilizes prediction to determine the intention behind the input and evaluates the accuracy of the prediction. It also identifies the bot's response based on the input text, including automatically recognized entities.

For instance, when you type an utterance in the "What user says?" section, you'll see the corresponding response and its confidence level displayed along with the related flow.

   <img src="https://i.imgur.com/F5rVJIF.png" alt="drawing" width="60%"/>

### Response parameters

The following is a comprehensive description of the parameters in the response received for the typed input.

| Parameter       | Description                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| **Intent**      | Represents the utterance that you used to test flow prediction. The bot predicts the intention behind the input.          |
| **Confidence**  | A percentage (0 to 1) reflecting how accurate the predicted intent is. Higher values indicate greater certainty.<br/> * Confidence is 1 when the bot is absolutely sure about the intent.<br/>* If the confidence is over 0.8, the prediction is considered accurate. |
| **Default Response** | The bot's response based on the input text.                                                                 |
| **Entity**      | Words or phrases representing nouns within the text. For example, in **I want to buy a phone**, Buy is the Intent and Phone is the Entity.                                                         |
| **Global Entity** | Entities (for example, dates, countries) recognized automatically by the platform.<br/> * For **Dates**: DD-MM-YY, Today, Yesterday, Tomorrow, and more. <br/> * For **Countries**: Japan, India, etc.                               |
| **Global Model** | Pre-trained phrases like Small Talk or Contexts, that help identify the intent.       |

**Global model vs Global entity**

- Global Model identifies values based on phrases trained in Small talk and Context management, you can add multiple contexts based on your industry use-case. 
- Global entities identify values that are trained by the platform only for Dates and Locations. You cannot add/delete/modify the training. 

   ![](https://imgur.com/ehXirsE.png)

To access global entities, use this snippet ```{{{prediction.gloablEntities.0.text}}}```.
   

### Identify the emotion via Verbose

Enable **Verbose** to identify the emotion (sentiment) behind the text.

   <img src="https://i.imgur.com/U0iekzn.png" alt="drawing" width="60%"/>

### Test your bot in multiple languages

You can try out your bot in various languages by just picking your preferred language from the dropdown menu.

   <img src="https://i.imgur.com/XJpwl4I.png" alt="drawing" width="60%"/>

:::note
To add languages to your bot, check out the steps [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/localization#add-languages-to-your-bot).
:::

## Conversation 

Here you can manage how conversations unfold, how messages are shown, and various elements related to the conversation.

You can oversee modifications through the following categories:

### Update bot behaviour

This section consists of fields to control the behaviour of the conversation.

<img src="https://i.imgur.com/lDz7NrX.png" alt="drawing" width="60%"/>

| Fields                  | Descriptions                                                                                                    |
| ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Target language**     | The default language in which the bot will converse in before auto-suggestion or language change occurs. You can modify this if required.      |
| **Translate quick reply responses** | Translate quick reply responses<br/>(Does not work). |
| **Enable Hinglish**     | Set *Yes* to allow the bot to understand Hinglish (Hindi + English) utterances, tailored for Indian users.<br/><img src="https://i.imgur.com/3Kt7IiD.png" width="300"/>    |
| **Auto Detect Language**| Set *Yes* to enable the bot to auto-identify the language a user types in and respond accordingly (if configured).<br/><img src="https://i.imgur.com/p1xK8Sq.png" width="250"/> |
| **Enable Go Back/Go Home** | Shortcut for users to move to the previous step or go back home.<br/><img src="https://i.imgur.com/fsJZA3R.png" width="300"/>                                           |
| **Go back Aliases**     | Configure keywords to trigger the **Go back** action and navigate to the previous conversation step.<br/><img src="https://i.imgur.com/tt2P4FO.jpg" width="50%"/>          |
| **Go home Aliases**     | Specify keywords to trigger the **Go home** action and return to the beginning of the conversation.<br/><img src="https://i.imgur.com/T1jOHPX.jpg" width="50%"/>|
| **Negation journey**    | Collection of flows the bot goes through when a user rejects an action.<br/>For example:<br/><br/> * When the user inputs "I want to talk to the manager", the bot takes to the *Transfer to Agent* flow.<br/>* If the user inputs " I dont want to talk to the manager", the bot takes the selected negation journey.<br/><img src="https://i.imgur.com/VZalCux.png" width="50%"/>                                    |
### Intelligent switching

This section helps the bot to switch the conversation based on user input.

For instance, consider a scenario where:

* Bot asks: "Choose the type of account," offering options like Savings account or Fixed deposit. 
* User responds: "Can you explain the difference between Savings account and Fixed deposit?" 

With intelligent switching, the bot would answer the user's query and then smoothly transition back to the previous flow, prompting the user to "Select a type of account" again. 

<img src="https://i.imgur.com/Ix9CTWR.png" alt="drawing" width="80%"/>

| Fields                         | Descriptions                                                                                               |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| **Enable**                     | Select **Yes** from the drop-down list to activate Intelligent Switching.                                  |
| **Sticky Journeys**            | Identify complex flows as **sticky** to minimize user interruption from the expected flow.<br/>         When interruptions occur, a customizable sticky journey prompt encourages users to stay on that path. <br/> If chosen, the current journey continues; if not, an alternative flow is suggested in a follow-up message. |
| **Prompt for sticky journeys** | Define the message to be displayed when a **Sticky Journey** is selected. This encourages users to complete the current flow.<br/><img src="https://i.imgur.com/K8qsb52.png" width="50%"/> |
| **Followup message**           | Redirects the conversation back to the desired flow like "Do you want to continue where you left off?" or "What would you like to do next?"<br/> <img src="https://i.imgur.com/FpRIio0.png" width="50%"/>        |

### Step validation settings

This helps you configure the settings related to validating the steps involved in the bot conversation. In simple words, you can configure this to validate prompts.

   <img src="https://i.imgur.com/7mMh5Nz.png" width="70%"/>


When platform quick replies are configured, they appear in WhatsApp as a list of items in text. 

For example - 
What do you want to do next?
1. Check order status
2. Receive notification
3. Go back to Main Menu   

You can customise this format **Whatsapp Quick reply index** and **Structure prefix** fields.  

| Fields                          | Descriptions                                                                                                 |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Whatsapp Quick reply index**  | Choose the preferred indexing: *Numbers* (default), *Alphabets*, or *Emojis* (numerical emojis).              |
| **Structure prefix**            | Display the complete prefix with formatting. Default is {{index}}, as shown above.<br/><br/>                   For instance, **_Type_ {{index}} for** will show **Type 1 for Gate Mechanical**, **Type 2 for AE & JE Mechanical** which simplifies selection of options. <br/> ![](https://i.imgur.com/yQtdhUD.png)  |
| **Show prompt again**           | Enable to show the original prompt after a validation failure message with *Yes* from the dropdown.<br/><br/>      For instance, when an incorrect phone number is entered, the prompt can be displayed again.                  |
| **Enable limit on retries**     | Enable the default retry limit (3 times) with **Yes**.                                                       |
| **Error message**               | Set the error message for validation failure.<br/><br/> For example: Hey, you've reached the maximum retry limit. <br/> ![](https://i.imgur.com/8l46UFv.png)                                               |
| **Unknown message**             | Define the message for system inability to validate the prompt response.                           <br/><br/> For example: **It seems I can't understand your input, could you rephrase it?**                     |

### Autoskipping settings

Enable this option to allow the bot to inform the user that it already has the information that is being provided.

You can skip a prompt using entitity or variable if the value already exists. This helps avoid asking users the same question multiple times depicting the memory of your chatbot.  

<img src="https://i.imgur.com/Hvu2ioK.png" width="65%"/>

| Fields                   | Descriptions                                                                                       |
| ------------------------ | -------------------------------------------------------------------------------------------------- |
| **Acknowledgment**      | Activate this option for the bot to receive user acknowledgment to automatically skip the upcoming flow. |
| **Acknowledgment prompt** | Type the message to be displayed to the user when the bot suggests auto-skipping the upcoming step in the flow. |
| **Invalid prompt** | This message will appear when the user enters an invalid prompt. |
| **Confirm button label** | The label on the confirm button which users click to confirm that the option can be skipped. |
| **Modify button label** | The label on the edit button when users choose to modify their selection. |


To configure autoskip at node level, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#autoskip).

### Global autocomplete

In the **What do you want to show for autocomplete** option, you can select the choice that the bot will use to autocomplete the user's input.

## NLU

### Prediction

Our machine learning system matches user input sentences to specific intents with confidence scores between 0 and 1. You can adjust the desired confidence level. The default confident score on the platform is 0.85.

<img src="https://i.imgur.com/Ik9ozKr.png" width="65%"/>

| Fields                    | Descriptions                                                                                                     |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Min Confidence**        | Set the minimum value below which the bot won't trigger an intent. For instance, if set to 0.85, the bot responds only when the intent's confidence level for the input is over 85%. <img src="https://i.imgur.com/7DM473O.png" width="300"/>**Use case:**<br/><br/> When a user says **Talk to your agent** and **Min Confidence** is 0.85, the bot responds correctly only if the intent predicted is **Transfer Agent** with a confidence of 1.<img src="https://i.imgur.com/k5bc5Tz.png" widht="60%"/><br/> However, if the user types **Talk to tech support**, the bot won't reply as the confidence for the predicted intent is uncertain. <img src="https://i.imgur.com/aok3dur.png" width="90%"/> |
| **Context Confidence**    | Specify the minimum confidence score required for context accuracy.                                           |
| **Secondary Model Confidence** | A global contextual model value. If the predicted value is below the threshold entered, the intent won't trigger. |

### Document search settings

<img src="https://i.imgur.com/vaIpqm5.png" width="65%"/>

Option | Description
-------- | ------
Document search threshold | To improve document search accuracy, adjust the threshold value between 0 and 1: <br/>• **Value set to 0**: Irrelevant results might be shown. <br/>• **Value set to 1**: More relevant matching results will be shown.<br/> An ideal confidence level is between 0.6 and 0.8. You can increase or decrease this based on the document cognition search results for the uploaded documents.
Boost document rank by  | Choose the preference by which the user query should match - Headers or Paragraph. This parameter can be used to boost the document ranks.<br/><br/>For example, if a document has a header with the user data and rest of content below it and Boost document rank by is enabled, this document will show up higher in ranks as the query users data matches the header in the document.


![](https://i.imgur.com/hLQTC4N.png)

### Multi Intent Settings

Enabling **Multi-Intent** allows the model to identify two intents in a single user message. For example, if this option is on and the user types **Book a flight** and **reserve a hotel** (assuming proper [training to the bot](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#train-your-bot-with-intents)), the model will detect both **Book a flight** and **Reserve a hotel** as intents.

After detecting the intents, the model will acknowledge this (via an Acknowledgment message) and ask the user which task they want to start with. The options will be provided as quick reply choices.
****
Other options and the **Go home** option will also be suggested as quick replies, along with a follow-up message (similar to **Intelligent Switching**).

<img src="https://i.imgur.com/CCIjO7s.png" width="55%"/>  

  
| Fields                  | Descriptions                                                                                           |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Enable                  | Set *Yes* to enable multi-intent.                                                                      |
| Acknowledgement question | The acknowledge message to display when multiple intents are detected. <br/> Sample message: I understand, What would you like to do first? |
| Followup question       | Question to ask in follow up to the previous question. <br/> Sample message: Would you like to proceed? |

  

![](https://i.imgur.com/s4zM19K.png)


## Add constant values

This section helps you add values that remain constant throughout the conversation. It can be a person's name, a file name or any value that will not be modified as the conversation progresses. 

Add constants by clicking the **+Add Constants button** and click **Save** to store those values in the database.


<img src="https://i.imgur.com/ikUXSHT.png" width="55%"/>  

 
## Voice 

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