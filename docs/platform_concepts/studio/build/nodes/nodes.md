---
title: Nodes Overview
sidebar_label: Overview
---

Nodes are the building blocks of a [Flow/Journeys](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys).  

In this article, you will learn:
1. [Types of nodes](#types)
2. [How to add nodes](#addnode)
3. [What are the configurations available for nodes](#config)
4. [How to view Dynamic data](#dynamic)


## <a name="types"></a> 1. Types of nodes

Nodes are classified into the following types: 


| Nodes         | Description                                                                                                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Prompts**  | Prompts can be used when the bot expects a user to respond to the posed question. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) to learn more.                           |
| **Messages** | Messages can be used when the bot has to display information to the user without expecting any response. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) to learn more. |
| **Action**   | Actions are non-interactive nodes that can be used to perform a specific task. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes) to learn more.                            |
|    **Logic**   |  Logic nodes can be used when the flow must be branched based on the given conditions. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) to learn more.  |


After clicking **+Create flow**, you will be directed to a canvas with a **start node** from where you will have the flexibility to design a [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys).

![](https://i.imgur.com/mfLbfy1.jpg)


## <a name="addnode"></a> 2. Add nodes

Nodes can be added in two different ways:

1. Click the black dot in the centre of a node.

![](https://i.imgur.com/UjHsxhK.jpg)


2. Click any 4 of the icons on the left which represent each category of nodes. Drag and drop the nodes.

![](https://i.imgur.com/lTiO07q.png)


### 2.1 Build a flow 

A flow is built using a series of smaller nodes. Each flow must have a minimum of two nodes configured.

* **Start Trigger**: The first node must always be a trigger (click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys/#4-configure-start-trigger) to learn more). You can configure how to trigger this flow. That is, by means of Intents, Entities, URL Events, or other flows.
* Add any of the following nodes one by one to continue this flow with logic. 
    * **Prompts**: These nodes expect user inputs- when the input is invalid, fallback messages are displayed. They are interactive/conversational nodes.
    * **Messages**: Use these nodes to display messages, files, images etc. 
    * **Actions**: Background actions like Database Insert, Search, or executing an API are performed with these nodes.
    * **Logic**: Conditional branching nodes.

* Connect all the nodes to complete the flow. Test it on the bot. 

![](https://i.imgur.com/kjnaZr1.jpg)


## <a name="config"></a> 3. Configure nodes on different channels

This option is available for all the nodes that display some information on the bot. For example message and prompt nodes like name node, text node, video node etc. It is used to configure how the information must be produced on different platforms like Website, Alexa, Google Assistant, Voice etc.

* Click the tools(channel option) symbol available below the node name.  

![](https://i.imgur.com/5Xv1ndp.png)

* Multiple channel options are available for each type of node. 

![](https://i.imgur.com/78ie4Gm.png)

* Few commonly used configurations are listed below.  

### 3.1 Configure node for a website

* **Hide Input** - When enabled, user input won't be displayed on the bot.
* **Hide Home Button** - When enabled and this node is executed in the flow, the user will not be able to click on the home button to restart the flow. 
* **Sensitive information** - Can be enabled to hide passwords and other personal information from being displayed. 
* **Button Auto Width** - For Quick replies and multi select, buttons can be configured.
* **Enable Multiple Files** - This is used for file-related nodes, which gives the user permission to add more than one file at once.

Enable these options to improve the video viewing experience. 
* **Thumbnail** - This is the image that will be displayed when the video is not being played. 
* **Autoplay** - Video will play automatically.
* **Show controls** - Controls such as Play/Pause, Forward etc will be displayed.
* **Downloadable** - Displayed video can be downloaded to the local system.
* **Muted** - Mute the audio until the user unmutes it. 
* **Loop** - To play the video again once it stops.

### 3.2 Configure node for a voice bot

This is configured for voice bots. You can modify voice related features like speed, delay, forward chat to etc. 


Node level options are configured for each node specifically, while the global options are configured to be applicable for all the nodes in general. For example:
* **Global level**: You can select a STT/TTS engine globally so that you dont have to configure it for each of the node. 
* **Node level**: You can confugure recording for each node, example for address node the recording duration is longer than the phone number node. 


Voice bot provides multiple settings for different uses, they are classified into: 
1. **Telephony**: For settings on telephony platform like call forwarding, calling line identity, etc. 
2. **Recording**: Recording options such as beep sound after a question is asked, duration of call recording.  
3. **Speech to text**: You can customise a speech recognition software that enables the recognition and translation of spoken language into text.
4. **Text to speech**: Customise the Text-to-Speech (TTS) capabilities to play back text in a spoken voice. 
5. **DTMF**: Dual tone multi frequency (DTMF) is used for touch tones, it is the sound made when pressing a number key. DTMF controls automated equipment and signal user intent, example, the number they wish to dial.
6. **Conversation**: Yellow cloud related options to support telephony platform. 

![](https://i.imgur.com/wjhRgA8.png)

:::note
Most of these options can be configured globally from  [tools and settings](https://docs.yellow.ai/docs/platform_concepts/studio/tools#25-voice).
If they are configured at the node level, node level customisation takes priority over the global level settings. 
:::



**Telephony related options** 


| Fields                   | Description                                                                                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Disconnect**           | When this option is enabled, call gets disconnected as this node is reached.                                                                                                 |
| **Call forward**         | When this is enabled you can enter a number to forward or the SIP. It is used to forward the calls from one reciver to the other.                                            |
| **Number to forward**    | This textbox accepts the number fot the call to be forwarded to ex: Number (+919XXXXXXXXX).                                                                                   |
| **SIP extension**        | Extension to initiate Session Initiation Protocol.                                                                                                                            |
| **Caller line identity** | Inbound calls made to a business or individual can be identified by their number of origin. This field accepts **custom caller ID** which is sent while forwarding the call. |
| **Custom SIP header**    | This is the extra info to be passed to agent with SIP call transfer. Enter a key-value pair in JSON format.                                                                  |








**Recording related options**



| Fields                                     | Description                                                                                                                                                                       |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Enable recording beep**                  | When this is enabled, a beep sound is played before recording the user response.                                                                                                  |
| **Recording Action**                       | Select a value from the dropdown to take an action like Pause, Resume, Stop (Default - Recording is ON). This can be used for usecases which are recording sensitive information. |







**STT related options**




| Fields                     | Description |
| -------------------------- | ----------- |
| **STT engine**             | Select an engine from the dropdown-  Google/Microsoft.        |
| **STT mode**               |  Select mode from the dropdown. Microsoft: "Static" "Streaming" or "Streaming Advanced". Google: "Static". |
| **STT language**           |  Bot Language(ISO code) can be selected from the dropdown. Default- English. Click [Microsoft](https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support?tabs=stt-tts) or [Google](https://cloud.google.com/speech-to-text/docs/languages) for more information on the languages)|
| **STT engine endpoint**    | Endpoint id of the engine selected            |
| **Recording max duration**     |   This value is the Max duration for which the bot will wait after asking a question (in any step) while the user is speaking. For example, after asking "Which city are you from" and recording duration value is 0.5- the bot records 5 seconds of a response. This option is necessary to avoid consuming unwanted information and to stay with the flow while the bot is conversing. If the user replies long paragraphs when a question is asked or voice is shadowed with background noises, the bot must process those long inputs which is not ideal. Hence, with this, bot only takes the necessary response and quicly process the user query.    |
| **Recording silence duration** |  This value is the Max duration for which the bot will wait after asking a question (in any step) for the user to respond. For example, if recording silence duration is 5 seconds, bot waits for 5 seconds for the response if the user is silent. If the user does not respond anything within 6 seconds, bot Message will be played.             |
| **Initial silence duration**   |  Enter a decimal number which will be the acceptable silence duration before a bot user starts speaking.            |
| **Final silence duration**                           |   Enter a decimal number which will be the acceptable silence duration after a bot user starts speaking and the bot will have to process the response.              |






**TTS related options**



| Fields       | Description |
| ------------ | ----------- |
| **TTS engine**   | Select the engines from the dropdown- Microsoft Azure, Google Wavenet, Amazon Polly.        |
| **Text type**    |    Select Text/SSML from the dropdown.         |
| **TTS language** |  Bot Language(ISO code) can be selected from the dropdown.|
| **Pitch**        |  Pitch value can be any decimal value depending on the base of voice required, 0 is ideal.     You can add this for Microsoft if text_type = "text" and for Google for text_type = "text" and "SSML".      |
| **Voice ID**     |   Type the characters of voice ID. You can add this for Microsoft if text_type = "text" and for Google if text_type = "text" and "SSML". |
| **TTS Speed**             |  This value defines how fast the bot must converse. This value can be 0.9 - 1.5 for the bot to soundly humanly.   You can add this for Microsoft if text_type = "text" and for Google if text_type = "text" and "SSML".        |




**DTMF related options**


| Fields                        | Description |
| ----------------------------- | ----------- |
| **Capture DTMF**                  | If this option is enabled, DTMF will function in your bot.         |
| **Capture voice with DTMF input** |  When this is enabled, even the voice will be captured along with the keyboard input.            |
| **DTMF digital length**           | Enter the length of characters to be captured. Ex: For an indian phone number, it is 10. For *, it is 1.           |
| **DTMF finish character**                              |  Character which defines when the bot must stop capturing.           |

:::info
Either DTMF digital length or DTMF finish character can be selected. 

DTMF digit length and DTMF timeout are 3 ways in which bot understand when to stop capturing:
1. Digit Length is useful when you are capturing fixed length data. Ex: Phone number.
2. Finish character is useful when you don't know the length and that could vary depending upon different states/products. Ex: Model id, application number. A user can define either "*" or "#" to inform that all Digits are added.
3. DTMF timeout is a default selection (not open for configuration) and it is set to 10 seconds by default. It overrides both the above mention way. Ex: If length is 11 and user has only enter 6 characters in 10 seconds, it will only capture those and move ahead.
:::

**Conversation related options**



| Fields                         | Description |
| ------------------------------ | ----------- |
| **Enable acknowledgement message** | When this is enabled, an acknowledgement message can be played when the user is done speaking.      |
| **Acknowledgement message**        | Enter a text message. Ex: "Do you want to confirm?"          |
| **Boost phrases**                               |Some user responses can be confusing for the bot to understand. Region specific words, new genz lingos, internet terminologies, trending phrases, abbreviations are trained specially so that the bot understands the exact intention. For example, COVID is a new term that has been used frequently, the phrase COVID must be boosted, otherwise it gets translated to kovind/ go we/ co-wid etc.             |






---

:::note
The rest of the options will be displayed for each of the configured [channel](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview). Viber, Telegram, Whatsapp, Google assistant, Alexa, etc.
:::

### 3.3 Configure node for Google assistant 

* **End Session** - Bot session on google assistant comes to an end when this node is reached.

### 3.4 Configure node for Alexa 

* **End Session** - Bot session on Alexa comes to an end when this node is reached.

-----

## <a name="dynamic"></a> 4. View dynamic data 

Instead of adding information to these nodes manually, you can add objects to the Dynamic data. This option is available on most of the Prompt and Message nodes. 
You can click on the `i` next to **Fetch from** and find the variable data. 

![](https://i.imgur.com/DonapjB.png)



---
**What Next?**

* Build a [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys) and [test](https://docs.yellow.ai/docs/platform_concepts/studio/tools) it. 
* Explore more about the types of nodes in the further sections.
