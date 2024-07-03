---
title: Using voice input nodes(prompt) to build a voice bot 
sidebar_label : Using voice input nodes  
---

The voice input node offers added features that enhance the performance of voice bots. Building voice bots using the "Voice input" node improves conversational experiences with a more natural and human-like interaction style.


- **Streamlined SSML handling**: Removes the necessity for manual SSML (Speech Synthesis Markup Language) coding.
- **Simplified validation process**: Integrates validation directly into the flow, eliminating the need for separate configuration.
- **Intent and Entity recognition**: Facilitates the identification of user intents and entities, enabling the voice bot to understand and respond appropriately to diverse user queries and requests.
- **Tracking of unidentified utterances**: Provides the ability to monitor and manage unidentified user utterances efficiently.

-----

## Build a flow with voice input node

### Use-case

Consider building a Banking voice bot that asks users questions to identify them and resolve their queries. In this example, the bot guides the user through providing their name and phone number to inquire about an eligible home loan, receiving detailed responses.


![](https://i.imgur.com/zWCv0tr.png)


>Let's break down the conversation:

> **Bot** (asks): What is your name? 
> **User** (replies): Karan
> **Bot** (stores): Karan as Name 
> **Bot** (asks): How may I help? 
> **User** (replies): Loan eligibility 
> **Bot** (understands): User request = Loan eligibility
> **Bot** (logic): Required phone number to calculate Loan eligibility
> **Bot** (asks): What is your phone number?
> **User** (replies): 9890******
> **Bot** (validates if the number is correct): Uses logic to calculate Loan eligibility
> **Bot** (response): You can avail X amount on X% interest. 

--- End of the call ---


:::note
For guidelines to build a good conversation, click [here](https://docs.yellow.ai/docs/cookbooks/getting_started). 
:::

----

### Steps to configure voice input node 

#### Prerequisite
The Voice Input node will only work for voice bots, meaning you must have enabled **Voice bot** when creating your bot.

<center><img  src="https://imgur.com/mC1psKL.png"  width="40%"/>    </center>center>    

#### Steps to configure

1. Go to **Studio** > **Prompts** > **Voice input**.

   ![](https://i.imgur.com/n3muuJC.png)

2. In **[Input type](#11-input-type)**, specify the type of information the node will collect from the end user.
    1. In **Input type**, choose your preferred input. For example, if Phone* is selected, the bot will prompt the user to input their phone number during the conversation.
    2. In **Bot speaks**, enter the message that the bot will say to request the user's phone number.
    3. In **Repeat message**, input the message that the bot will repeat if the user's response is unclear or requires verification.
4. In **[Validator](#12-validator)**, validate the user input against the chosen criteria.
5. In **[Capturing the user input](#13-capturing-user-input)**, configure how the bot should gather user inputs.
6. In **[Additional settings](#14-additional-settings)**, adjust configurations to enhance conversation authenticity and emulate human-like interactions.

![image](https://imgur.com/GAP8pFv.png)

:::note
Values updated in this node will override the global values.
:::

### Example: Configure node for phone number 

Following are the steps to collect a **user's phone number** using the voice input node: 

1. In the **Input type** section, choose the **Input type** as **Phone** and enter the messages for **Bot speaks** and **Repeat** **message** fields.

![image](https://imgur.com/L07GSec.png)

2. In the **Validator** section, choose **Phone** in the **How do you want to validate user input** drop-down and enter the **Failure message** and **No Response message**. Mention the **Boost Phrases** too.

![image](https://imgur.com/AWucjOH.png)

3. In the **Capturing user input** section, choose **Voice** and **Keypad** in the **Capture input as** drop-down and fill in the rest of the fields.

![image](https://imgur.com/GSixNHK.png)

4. [Store the response in a variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-variables).

![](https://i.imgur.com/L6u5EEM.png)


----

## Input type

| Field | Description | 
| -------- | -------- | 
| **Input type**     |Choose the type of user response. <br/>1.Name<br/>2.Email<br/> 3. Phone<br/> 4. Question<br/>|
|**Bot Speaks**|The bot's reply that will be vocalized to the end-user during a call. |
|**Repeat message**|The bot's reply that will be vocalized upon the user's request for the bot to reiterate the question or prompt. |

You can add multiple messages to all of the above mentioned options by [adding random messages ](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#docusaurus_skipToContent_fallback). You can also play the message (SSML) to hear the bot response.

![](https://i.imgur.com/JBdcjmR.png)

-----

## Validator


### How do you want to validate user input

Choose the criteria against which the user input should be validated.<br/> 1. [Name](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#12-name)<br/> 2. [Phone](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#13-phone)<br/> 3. [Email](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#15-email)<br/> 4. [Intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents)<br/> 5. [Entity](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities)<br/> 6. [Regex](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities#42-regex)<br/> 7. Intent and entity


:::note
You can choose several intents and entity or their combination in the validator. If the user's intention matches any of them, it will be validated, and the flow will move to the next node.
:::

![image](https://imgur.com/q325xkw.png)


### Failure Message 

**Failure message** is vocalized when the validation fails. 
- **+Add message**: Click this button to add up to three successive fallback responses when the bot encounters invalid response from the user. 


### No response message 

**No response message** is vocalized when there is no user response in the configured max response time.
- **+Add message**: Click this button to add up to three successive fallback responses when the bot gets no-response from the user. 

:::note
You can add upto 3 Failure messages and No response messages each. 
:::


### Boost phrases

Some user responses can be confusing for the bot to understand. Region specific words, new genz lingos, internet terminologies, trending phrases, abbreviations are trained specially so that the bot understands the exact intention. For example, COVID is a new term that has been used frequently, the phrase COVID must be boosted, otherwise it gets translated to kovind/ go we/ co-wid etc. Ex - you should add the phrases that you expect from the user response like, < I want to take covid vaccine > <br/> 

![](https://i.imgur.com/DdkiyBq.png)



-----


## Capturing user input


**Capture input as:**   

You can capture the user response as:
- **Voice**: Capture only voice input. 
- **Keypad**: Capture only input from the keyboard.
- **Voice and Keypad**: Capture input from both voice and keyboard.

### Voice


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

![](https://i.imgur.com/F9kJ027.png)


### Keypad


|Field|Description|
|------|----------|
| **DTMF digital length**           | Enter the length of characters to be captured. Ex: For an indian phone number, it is 10.          |
| **DTMF finish character**                              |  Character which defines when the bot must stop capturing. Supported finish characters - "*" and "#"|

![](https://i.imgur.com/szHy8xU.png)


### Voice and keypad

All the above mentioned options for **Voice** and **Keypad** will be listed together.

![](https://i.imgur.com/7pW4ETh.png)


----


## Additional settings


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

<img  src="https://i.imgur.com/vnmuVFl.png"  width="70%"/>        







-----

## Custom response

### Custom responses for each identified input

When the system is expecting an input from a user, it  handles scenarios where the input doesn't align with expectations. In such cases, customized responses can be used to guide or assist the user.
Each input is treated as a condition within an if-else structure. Validators are utilized to define these conditions. For every validation or validator, the voice input node interprets it as a distinct if-else condition.
If the user's input matches one of the expected values defined by the validators, the corresponding action or response is triggered. If none of the expected values match the user's input, it's categorized as an **unidentified utterance**.


![image](https://imgur.com/Dvt4Sn4.png)

### Fallback 

Fallback nodes can be linked directly to the voice input node. To specify the action in case of encountered issues or call failures, connect the **Fallback for failure** point to the subsequent node. To proceed with the next action if the user hasn't responded to the input, connect the **Failure for no response** point to the next node.


----

## Unidentified input storage

When the validation fails, the utterance is saved in the default table along with the following data: 
* SID
* Phone Number
* Drop Step [same as the voice input node name]
* Utterance
* Recording URL
* Chat URL
* Language
* Translated Message
* Date & Time (of the call initiation)
* Issue [UIU / Intent Missing - {{Intent name}}] 

