---
title: Nodes Overview
sidebar_label: Overview
---

Nodes are the building blocks of a [Flow/Journeys](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys). Each node represents a specific point in the conversation where the AI-agent can perform a certain action or respond to a user's input.

In this article, you will learn:
1. [Types of nodes](#types)
2. [How to add nodes](#addnode)
3. [What are the configurations available for nodes](#config)
4. [How to view Dynamic data](#dynamic)


## <a name="types"></a> 1. Types of nodes

Nodes are classified into the following types: 


| Nodes         | Description                                                                                                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Prompts**  | Prompts can be used when the AI-agent expects a user to respond to the posed question. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) to learn more.                           |
| **Messages** | Messages can be used when the AI-agent has to display information to the user without expecting any response. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) to learn more. |
| **Action**   | Actions are non-interactive nodes that can be used to perform a specific task. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes) to learn more.                            |
|    **Logic**   |  Logic nodes can be used when the flow must be branched based on the given conditions. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) to learn more.  |


After clicking **+Create flow**, you will be directed to a canvas with a **start node** from where you will have the flexibility to design a [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys).

![](https://i.imgur.com/RGxw20v.png)


## <a name="addnode"></a> 2. Add nodes
ß
Nodes can be added in two different ways:

1. Click the black dot in the centre of a node.

![](https://i.imgur.com/Nn0SJLw.png)


2. Click any 4 of the icons on the left which represent each category of nodes. Drag and drop the nodes.

![](https://i.imgur.com/olgqi1w.png)

:::note
You cannot add more than 150 nodes in a flow.
:::


### 2.1 Build a flow 

A flow is built using a series of smaller nodes. Each flow must have a minimum of two nodes configured.

* **Start Trigger**: The first node must always be a trigger (click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow) to learn more). You can configure how to trigger this flow. That is, by means of Intents, Entities, URL Events, or other flows.
* Add any of the following nodes one by one to continue this flow with logic. 
    * **Prompts**: These nodes expect user inputs- when the input is invalid, fallback messages are displayed. They are interactive/conversational nodes.
    * **Messages**: Use these nodes to display messages, files, images etc. 
    * **Actions**: Background actions like Database Insert, Search, or executing an API are performed with these nodes.
    * **Logic**: Conditional branching nodes.

* Connect all the nodes to complete the flow and [test](https://docs.yellow.ai/docs/platform_concepts/studio/tools#21-test-your-bot) the AI-agent.

## <a name="config"></a> 3. Node settings

Node settings can be configured to improve the use of nodes across different purposes. To access the settings, click the **tools** icon in each node,

![](https://i.imgur.com/acjZ9RG.png)

Some of the components included in Node settings are:

### 3.1 Configure nodes on different channels

This option is available for all the nodes that display some information on the AI-agent. For example, message and prompt nodes like name node, text node, video node etc. It is used to configure how the information must be produced on different platforms like **Website, Alexa, Google Assistant, Voice** and other configured channels.

 Multiple channel options are available for each type of node. 

<img src="https://i.imgur.com/xT6Xjnv.png" alt="drawing" width="60%"/>


Each of these channels have multiple configurations. Take a look at them below.

### 3.1 Configure node for a website

<img src="https://i.imgur.com/7yev2mo.png" alt="drawing" width="60%"/>

* **Hide Input** - When enabled, user input won't be displayed on the AI-agent.
* **Hide Home Button** - When enabled and this node is executed in the flow, the user will not be able to click on the home button to restart the flow. 
* **Sensitive information** - Can be enabled to hide passwords and other personal information from being displayed. 
* **Enable feedback**- Enable this to receive feedback from your user.
* **Button Auto Width** - For Quick replies and multi select, buttons can be configured.
* **Enable Multiple Files** - This is used for file-related nodes, which gives the user permission to add more than one file at once.

Enable these options to improve the video viewing experience. (available in the [Video node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#4-video) settings).

<img src="https://i.imgur.com/txLnGZL.png" alt="drawing" width="60%"/>

* **Thumbnail** - This is the image that will be displayed when the video is not being played. 
* **Autoplay** - Video will play automatically.
* **Show controls** - Controls such as Play/Pause, Forward etc will be displayed.
* **Downloadable** - Displayed video can be downloaded to the local system.
* **Muted** - Mute the audio until the user unmutes it. 
* **Loop** - To play the video again once it stops.

### 3.2 Configure node for a voice bot

Node-level voice options can be configured for each node specifically. The global voice options that are configured will be applicable for all the nodes and flows for the AI-agent. Whenever a global option and also node level option are defined, for that specific node, the node level option will be given more priority. For example,  

-   **Global level**: You can select an STT/TTS engine globally so that you don’t have to configure it for each node.
-   **Node level**: You can configure different “recording max duration” for different nodes i.e. 10 seconds for address and 5 seconds for name node.


Voice bot node options/settings are classified depending upon different uses as below:  

1.  **Telephony**: For settings related to telephony like call forwarding, calling line identity, etc.
2.  **Recording**: Recording options such as beep sound after a question is asked.
3.  **Speech to Text**: You can customise a speech recognition software that enables the recognition and translation of spoken language into text.
4. **Text-to-Speech**: You can customise the Text-to-Speech (TTS) capabilities to play back text in a spoken voice.
5. **DTMF**: Dual-tone multi-frequency (DTMF) is used for touch tones, it is the sound made when pressing a number key. For cases, where we expect background noise and difficulty in correctly identifying the user utterance for numeric inputs, we can use this feature to record user responses.
6.  **Conversation**: Yellow cloud provides additional conversational options to further customize and elevate the experience on the IVR channel.

![](https://i.imgur.com/CEPvxI9.png)

:::note
Most of these options can be configured globally from  [tools and settings](https://docs.yellow.ai/docs/platform_concepts/studio/tools#25-voice).
If they are configured at the node level, node level customisation takes priority over the global level settings. 
:::



#### Telephony related options in nodes


| Fields                   | Description                                                                                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Disconnect**           | When this option is enabled, the call gets disconnected post execution of this node.                                                                                                 |
| **Call forward**         | When this is enabled you can enter a number to forward or the SIP. It is used to enable call forwarding to an agent in any specific step.  You can either forward the call to an agent's number or forward it to some SIP extension.                                          |
| **Number to forward**    | This textbox accepts the number fot the call to be forwarded to ex: Number (+919XXXXXXXXX).                                                                                   |
| **SIP extension**        | Extension to initiate SIP (Session Initiation Protocol) transfer.                                                                                                                            |
| **Caller line identity** | This field accepts **custom caller ID** which is sent while forwarding the call to an agent. Note, that this functionality is not supported by all the carriers.|
| **Custom SIP header**    | This can be used as an additional parameter that can be passed to an agent while transferring the call to an Agent to pass along AI-agent collected information. You can pass a key-value pair in JSON format which will get passed in the SIP header.  |

> An example of Custom SIP header:  


```[{“key”:“User-to-User”,  “value”:“name=david&product=heater&query=not turning off&priority=high&number=12345”}]```


#### Recording related options in nodes



| Fields                                     | Description                                                                                                                                                                       |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Enable recording beep**                  |  When this is enabled, a beep sound will be played after the AI-agent asks a question giving an auditory response to the end-user to respond.                                    |
| **Recording Action**                       | With the recording management options, you can select to pause/resume/stop recording depending upon different use-cases and conversations. By default, the recording is ON only. Also, in a call, once you STOP the recording (for recording sensitive dialogues), it can’t be resumed back. |







#### STT related options in nodes




| Fields                     | Description |
| -------------------------- | ----------- |
| **STT engine**             | Select an engine from the dropdown-  Google/Microsoft.        |
| **STT mode**               |  Select mode from the dropdown. Microsoft provides "Static", "Streaming" or "Streaming Advanced". Google provides "Static". |
| **STT language**           |  AI-agent language(ISO code) can be selected from the dropdown. Default- English. Click [Microsoft](https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support?tabs=stt-tts) or [Google](https://cloud.google.com/speech-to-text/docs/languages) for more information on the languages)|
| **STT engine endpoint**    | Endpoint id of the engine selected            |
| **Recording max duration**     | This value is the Max duration for which the AI-agent will wait after asking a question (in any step) even while the user is speaking. For example, after asking “Which city are you from?” and the recording duration value is “5" - the AI-agent records only 5 seconds of user response. This option is necessary to avoid consuming unwanted information and to stay with the conversational flow. If the user mistakenly replies with long paragraphs when a question is asked or if the user's response is getting shadowed with constant background noises, the AI-agent must not process those long inputs. Hence, with this configuration, the AI-agent only takes the necessary response and can quickly process the user response.   |
| **Recording silence duration** |  This value is the Max duration for which the AI-agent will wait after asking a question (in any step) for the user to respond. For example, if recording silence duration is 5 seconds, AI-agent waits for 5 seconds for the response if the user is silent. If the user does not respond anything within 6 seconds, AI-agent Message will be played.             |
| **Initial silence duration**   |  To provide more customization on the silence duration parameter, “streaming” and “streaming-advanced” STT modes (of Microsoft STT engine) allow to specifically configure the maximum acceptable silence duration before the user starts speaking.  For example, the acceptable initial silence duration for the application number question could be higher (~3/4 seconds) but in the case of a quick conversational binary question, it could be configured to 1 second. |
| **Final silence duration**                           | Similar to the initial silence duration, the final silence duration is indicative of the maximum duration of pause that the AI-agent will wait for once the user has started speaking. For example, for binary/one-word questions like yes/no we could set the final silence duration to ~0.5/1.0 seconds and for address-like fields where taking a pause is intrinsic in conversation, we can set the final silence duration to ~1.5/2.5 seconds.              |






#### TTS related options in nodes 



| Fields       | Description |
| ------------ | ----------- |
| **TTS engine**   | Select the engines from the dropdown- Microsoft Azure, Google Wavenet, Amazon Polly.        |
| **Text type**    |    Select Text/SSML from the dropdown.         |
| **TTS language** |  AI-agent language(ISO code) can be selected from the dropdown.|
| **Pitch**        |  Pitch value can be any decimal value depending on the base of voice required, 0 is ideal.     You can add this for Microsoft if text_type = "text" and for Google for text_type = "text" and "SSML".      |
| **Voice ID**     |   Type the characters of voice ID. You can add this for Microsoft if text_type = "text" and for Google if text_type = "text" and "SSML". |
| **TTS Speed**             |  This value defines how fast the AI-agent must converse. This value can be 0.9 - 1.5 for the AI-agent to soundly humanly.   You can add this for Microsoft if text_type = "text" and for Google if text_type = "text" and "SSML".        |




#### DTMF related options in nodes 


| Fields                        | Description |
| ----------------------------- | ----------- |
| **Capture DTMF**                  | Enable this option if the DTMF is to be collected on the specific node.     |
| **Capture voice with DTMF input** |  With this enabled, the AI-agent will be able to capture both voice and DTMF for the same question. Example - What is your mobile number? Note - AI-agent will only capture the one which comes first from the user be it speech response or DTMF response.    |
| **DTMF digital length**           | Enter the length of characters to be captured. Ex: For an indian phone number, it is 10.          |
| **DTMF finish character**                              |  Character which defines when the AI-agent must stop capturing. Supported finish characters - "*" and "#" |

:::info

> Either DTMF digital length or DTMF finish character can be configured.
DTMF digit length, DTMF finish character and DTMF timeout are 3 ways in which the AI-agent understands when to stop capturing: <br/>
1. Digit Length is useful when you are capturing fixed-length data. Ex: Phone number. <br/>
2. Finish character is useful when you don't know the length and that could vary depending upon different states/products. Ex: Model ID, application number. A user can define either "*" or "#" to inform that all Digits are added. <br/>
3. DTMF timeout is a default inactivity timeout (not open for configuration) and it is set to 10 seconds by default (it overrides **digit length** and **finish character**).  For example, if the length is 11 and the user has only entered 6 characters, and there are 10 seconds of inactivity, only those will be captured. 

:::

#### Conversation related options in nodes 



| Fields                         | Description |
| ------------------------------ | ----------- |
| **Enable acknowledgement message** | When this is enabled, an acknowledgement kind message (“hmmm” OR “okay”) could be spoken in the conversation immediately. This is a small custom feature built to bring more human touch to the conversation.    |
| **Acknowledgement message**        | Enter a text/SSML message depending upon the configuration under the Text Type field. Note - Keep it short for a better user experience.  Ex: "Do you want to confirm?"          |
| **Boost phrases**                               |Some user responses can be confusing for the AI-agent to understand. Region specific words, new genz lingos, internet terminologies, trending phrases, abbreviations are trained specially so that the AI-agent understands the exact intention. For example, COVID is a new term that has been used frequently, the phrase COVID must be boosted, otherwise it gets translated to kovind/ go we/ co-wid etc.  Ex - you should add the phrases that you expect from the user response like, < I want to take covid vaccine >            |




> Click [here](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/voiceoverview) for voice related user guides. 

--------



### 3.3 Configure node for Google assistant 

* **End Session** - AI-agent session on google assistant comes to an end when this node is reached.

<img src="https://i.imgur.com/FeCAyTA.png" alt="drawing" width="60%"/>


### 3.4 Configure node for Alexa 

* **End Session** - AI-agent session on Alexa comes to an end when this node is reached.

<img src="https://i.imgur.com/hE9OoiF.png" alt="drawing" width="60%"/>

:::note
The options will be displayed for each of the configured [channel](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview). Viber, Telegram, Whatsapp, Google assistant, Alexa, etc.
:::

-----

## <a name="dynamic"></a> 4. View dynamic data 

Instead of adding information to these nodes manually, you can add objects to the Dynamic data. This option is available on most of the Prompt and Message nodes. 
You can click on the `i` next to **Fetch from** and find the variable data. 

![](https://i.imgur.com/DonapjB.png)



---
**What Next?**

* Build a [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) and [test](https://docs.yellow.ai/docs/platform_concepts/studio/tools) it. 
* Explore more about the types of nodes in the further sections.
