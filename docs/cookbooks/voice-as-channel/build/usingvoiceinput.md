---
title: Using voice input nodes(prompt) to build a voice bot 
sidebar_label : Using voice input nodes  
---

A voice input node is used to gather user information, process it, and manage various scenarios of conversing in a human-like manner. This node is in auto-sync with the [conversation design](https://docs.yellow.ai/docs/platform_concepts/design/convdesignvoice) so all the designs you add there will appear here automatically.

:::note
Voice input node will work only for voice bots, i.e you should have enabled **Voice bot** while creating your bot.

![](https://i.imgur.com/8f5cdfK.png)
:::

**Example use case to build a voice bot**

Let us consider a use case to build a *Banking voice bot* that asks a set of questions to identify the user and provide a resolution for the asked queries (as shown in the below conversation). This is a happy conversation flow where the bank account holder provides his name and phone number and asks for the eligible home loan and the bot replies with the details. 

![](https://i.imgur.com/zWCv0tr.png)


Let's break down the conversation:

* **Bot** (asks): What is your name? 
* **User**(replies): Karan
* **Bot**(stores): Karan as Name 
* **Bot** (asks): How may I help? 
* **User**(replies): Loan eligibility 
* **Bot**(understands): User request = Loan eligibility
* **Bot**(logic): Required phone number to calculate Loan eligibility
* **Bot** (asks): What is your phone number?
* **User**(replies): 9890******
* **Bot**(validates if the number is correct): Uses logic to calculate Loan eligibility
* **Bot** (response): You can avail X amount on X% interest. 

--- End of the call ---

:::note
For guidelines to build a good conversation, click [here](https://docs.yellow.ai/docs/cookbooks/getting_started). 
:::


## 1. Access voice input node

Go to **Studio** > **Prompts** > **Voice input**

![](https://i.imgur.com/n3muuJC.png)

Once you click the voice node, you will see the following sections,

![](https://i.imgur.com/QqZhMlW.png)

1. **[Input type ](#11-input-type)**

Input type defines the type of information the node will collect from the end user

2. **[Validator](#12-validator)**

Validator validates the user input against the chosen criteria.

3. **[Capturing the user input](#13-capturing-user-input)**

This section enables the configuration of how the bot should gather user inputs.
 
4. **[Additional Settings](#14-additional-settings)**

Additional configurations to increase the conversation's authenticity and emulate human-like interactions.

:::note
Values updated in this node will override the global values.
:::

Here's a detailed account of all the above mentioned sections,

### 1.1 Input type

![](https://i.imgur.com/JBdcjmR.png)


| Field | Description | 
| -------- | -------- | 
| **Input type**     |Choose the type of user response. <br/>1.Name<br/>2.Email<br/> 3. Phone<br/> 4. Question<br/>|
|**Bot Speaks**|The bot's reply that will be vocalized to the end-user during a call. |
|**Repeat message**|The bot's reply that will be vocalized upon the user's request for the bot to reiterate the question or prompt. |

You can add multiple messages to all of the above mentioned options by [adding random messages ](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#docusaurus_skipToContent_fallback). You can also play the message (ssml) to hear the bot response.

### 1.2 Validator

![](https://i.imgur.com/DdkiyBq.png)


| Fields | Description | 
| -------- | -------- | 
|**How do you want to validate user input**    | Choose the criteria against which the user input should be validated.<br/> 1.[Name](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#12-name)<br/>2.[Phone](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#13-phone)<br/> 3.[Email](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#15-email)<br/> 4.[Intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents)<br/> 5.[Entity](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities)<br/> 6.[Regex](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities#42-regex)| 
|**Validator Failure Message**| **Failure Message** - This message is vocalized when the validation fails <br/>**No response message** - This message is vocalized when there is no user response in the configured max response time.<br/> **+Add Message** - Click this button to add up to three successive fallback responses for both invalid and no-response scenarios.|
|**Boost phrases**|Some user responses can be confusing for the bot to understand. Region specific words, new genz lingos, internet terminologies, trending phrases, abbreviations are trained specially so that the bot understands the exact intention. For example, COVID is a new term that has been used frequently, the phrase COVID must be boosted, otherwise it gets translated to kovind/ go we/ co-wid etc. Ex - you should add the phrases that you expect from the user response like, < I want to take covid vaccine > <br/> |

:::note

You can choose several intents and entities in the validator. If the user's intention matches any of them, it will be validated, and the flow will move to the next node.
:::

### 1.3 Capturing user input

| Fields | Descriptions| 
| -------- | -------- | 
| **Capture input as**   | Capture the user response<br/> 1.Voice<br/> 2.Keypad<br/> 3. Voice and Keypad     |

The following fields will be displayed based on the selection of user response.

#### Voice

![](https://i.imgur.com/F9kJ027.png)


| Fields                     | Description |
| -------------------------- | ----------- |
| **STT engine**             | Select an engine from the dropdown-  Google/Microsoft.        |
| **STT mode**               |  Select mode from the dropdown. Microsoft provides "Static", "Streaming" or "Streaming Advanced", "Streaming 2.0". Google provides "Static". |
| **STT language**           |  Speech-To-Text i.e. transcription language (or user language)(ISO code) can be selected from the dropdown. Click [Microsoft](https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support?tabs=stt-tts) or [Google](https://cloud.google.com/speech-to-text/docs/languages) for more information on the languages)|
| **STT engine endpoint**    | Optional endpoint of the STT custom model.            |
| **Recording max duration**     | This value is the Max duration for which the bot will wait after asking a question (in any step) even while the user is speaking. For example, after asking “Which city are you from?” and the recording duration value is “5" - the bot records only 5 seconds of user response. This option is necessary to avoid consuming unwanted information and to stay with the conversational flow. If the user mistakenly replies with long paragraphs when a question is asked or if the user's response is getting shadowed with constant background noises, the bot must not process those long inputs. Hence, with this configuration, the bot only takes the necessary response and can quickly process the user response.   |
| **Recording silence duration** |  This value is the Max duration for which the bot will wait after asking a question (in any step) for the user to respond. For example, if recording silence duration is 5 seconds, bot waits for 5 seconds for the response if the user is silent. If the user does not respond anything within 6 seconds, bot Message will be played.             |
| **Initial silence duration**   |  To provide more customization on the silence duration parameter, “streaming” and “streaming-advanced” STT modes (of Microsoft STT engine) allow to specifically configure the maximum acceptable silence duration before the user starts speaking.  For example, the acceptable initial silence duration for the application number question could be higher (~3/4 seconds) but in the case of a quick conversational binary question, it could be configured to 1 second. |
| **Final silence duration**                           | Similar to the initial silence duration, the final silence duration is indicative of the maximum duration of pause that the bot will wait for once the user has started speaking. For example, for binary/one-word questions like yes/no we could set the final silence duration to ~0.5/1.0 seconds and for address-like fields where taking a pause is intrinsic in conversation, we can set the final silence duration to ~1.5/2.5 seconds.              |

#### Keypad

![](https://i.imgur.com/szHy8xU.png)

|Field|Description|
|------|----------|
| **DTMF digital length**           | Enter the length of characters to be captured. Ex: For an indian phone number, it is 10.          |
| **DTMF finish character**                              |  Character which defines when the bot must stop capturing. Supported finish characters - "*" and "#"|

#### Voice and keypad

All the above mentioned options for **Voice** and **Keypad** will be listed together.

![](https://i.imgur.com/7pW4ETh.png)


### 1.4 Additional settings

![](https://i.imgur.com/vnmuVFl.png)


| Fields | Description|
| -------- | -------- | 
| **Enable wait message**   | Enable this toggle to vocalize an acknowledgement message to the user awaiting a message from the agent. |
|**Wait message**| Acknowledgement message displayed to the user.|
|**Recording action**|With the recording management options, you can select to pause/resume/stop recording depending upon different use-cases and conversations. By default, the recording is ON. Once you STOP the recording (for recording sensitive dialogues), it can’t be resumed back.|
| **TTS engine**   | Select the engines from the dropdown- Microsoft Azure, Google Wavenet, Amazon Polly.        |
| **Text type**    |    Select Text/SSML from the dropdown.         |
| **TTS language** |  Bot Language(ISO code) can be selected from the dropdown.|
| **Pitch**        |  Pitch value can be any decimal value depending on the base of voice required, 0 is ideal.     You can add this for Microsoft if text_type = "text" and for Google for text_type = "text" and "SSML".      |
| **Voice ID**     |   Type the characters of voice ID. You can add this for Microsoft if text_type = "text" and for Google if text_type = "text" and "SSML". |
| **TTS Speed**             |  This value defines how fast the bot must converse. This value can be 0.9 - 1.5 for the bot to soundly humanly.   You can add this for Microsoft if text_type = "text" and for Google if text_type = "text" and "SSML".        |

## 2. Voice Input node demo

Here's a demo on collecting a user's phone number using the voice input node. 

1. In the **Input type** section, choose the **Input type** as **Phone** and enter the messages for **Bot speaks** and **Repeat** **message** fields.

![](https://i.imgur.com/Noglygn.png)

2. In the **Validator** section, choose **Phone** in the **How do you want to validate user input** drop-down and enter the **Failure message** and **No Response message**. Mention the **Boost Phrases** too.

![](https://i.imgur.com/7bit7Bq.png)

3. In the **Capturing user input** section, choose **Voice** and **Keypad** in the **Capture input as** drop-down and fill in the rest of the fields.

![](https://i.imgur.com/Wmn76oC.png)

4. [Store the response in a variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-variables).

![](https://i.imgur.com/L6u5EEM.png)

