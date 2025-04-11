---
title: Set Up VoiceX AI Agent  
sidebar_label : Set up VoiceX 
---

## Steps to Set Up VoiceX AI Agent  

Follow these guidelines to develop a VoiceX conversational AI agent.  

### 1. Create a Bot  

1. Open the bot templates and click **+ Create from Scratch** (**+ Create AI Agent** does not support voice).  
2. Enter the bot details and select the correct region. Choosing the right region is crucial for optimal server performance, reducing latency, and attaching appropriate phone numbers.  
3. Click **Create bot**.  


![image](https://imgur.com/t2mYyvW.png)


### 2. Map to an IVR Phone Number  

The bot must be hosted on a specific server. Contact support with your **Bot ID** and **Region Details** to request hosting. The support team will assign a phone number based on the bot's hosting location.  

For development purposes, request a number mapped to one of the available servers.  

![image](https://imgur.com/UG1XkWH.png)

#### Deploy on Yellow.ai Server  

On Yellow.ai Slack support channels, ping **#voice-support** to request a new number mapped to your bot. You can also request custom voice options to be enabled in the same **#voice-support** request.  

> Currently, VoiceX bots are deployed only on select Yellow.ai-owned servers (**voice-deployments**) in the following regions:  
> - **India**  
> - **USA**  
> - **Indonesia**  

#### Deploy on Your Own Server  

If you have a separate deployment, you can easily host the bot on your setup. Raise a **DevRev ticket** to Voice Support for assistance.  

:::info  
#### Verify the Server Connection  

To ensure the call is routed through the correct server:  

1. Go to **Conversation Logs**.  
2. Check **Welcome Message Logs**.  
3. Look for **"machine_id"** – it should match one of the supported deployments.  

![image](https://imgur.com/gh2eD04.png)  
:::  

To view the list of enabled IVR numbers for each region, navigate to **Channels > IVR**.  


### 3. Build the VoiceX Flow  

When creating a VoiceX bot, certain steps must be followed for the **initial (welcome) flow**. This includes adding a **Question/Text Node** first and using a **Dynamic Chat Node** with the required **configurations**.  

#### Build the Flow  

1. Navigate to **Flows > Create Flow from Scratch**.  
2. In the **Start Node**, attach either:  
   - A **Question Node** (preferred for user interactions).  
   - A **Text Node** (for playing a statement before initiating the flow).  
    
This can be used for welcome messages or disclaimers. Example:  
- `"Hi, this is YYZ Bot. I will help you with your flight bookings. What would you like to start with?"`  
- `"Hi, your call will be recorded for training purposes."`  
       
⚠️ **Avoid entering the conversational prompt in the Question Node**, as it may cause potential issues.  

### 4. Configure Speech-to-Text (STT)  

To set up STT, go to:  
**Question/Text Node > Settings > Voice > STT** and configure the following:  

- **STT Engine**: Set to `Microsoft`.  
- **STT Mode**: Select `"Streaming 2.0 Plus (Beta)"`.  
- **Recording Max Duration**: Set to `≥ 15 seconds` to accommodate longer user responses.  
- **Initial Silence Duration**: Set to `≥ 7 seconds` to give users enough time to respond.  
- **Final Silence Duration**: Set to `0.2 seconds`. This can be adjusted for specific Question/Text nodes if needed.  
- **STT Language**: Enter the appropriate **language code** based on your target audience.  
  - Full list of Microsoft language codes: [here](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=stt).  

:::note  
Only **English and Hindi** have been thoroughly tested. If you experience issues with other languages, contact the **product team**.  
:::  

![image](https://imgur.com/qQ81JMl.png)  

### 5. Configure Text-to-Speech (TTS)  

Currently, **Microsoft Azure, Amazon Polly,** and **Eleven Labs** TTS services are supported.  

#### **Microsoft Azure TTS Configuration**  

- **TTS Engine** – `"Microsoft"`  
- **Text Type** – `"Text"`  
- **Voice ID** – `"hi-IN-KavyaNeural"`, `"en-US-BrianNeural"`, etc.  
  - List of available voices: [here](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=tts).  

#### **Amazon Polly TTS Configuration**  

- **TTS Engine** – `"Polly (Amazon)"`  
- **Text Type** – `"Text"`  
- **Voice ID** – `"Kajal"`, etc.  
  - List of available voices: [here](https://docs.aws.amazon.com/polly/latest/dg/available-voices.html).  

#### **Eleven Labs TTS Configuration**  

Default configuration is not available for Eleven Labs.  


##### **Step 1**: Use **custom voice options** as mentioned in the **ElevenLabsObject** variable.

**Add Required Variables**  

Create the following **variables** (using any custom name):  

- **Boolean_True**: Boolean data type with **Value = True**.  
- **ElevenLabsObject**: Object data type for **ElevenLabs TTS**. (Skip this step if using another TTS provider). Use the following default object:  

```json
{
   "engineName": "elevenlabs",
   "bodyParams": {
      "voiceId": "0ZOhGcBopt9S6GBK8tnj", 
      "similarity_boost": 0.75,
      "stability": 0.5,
      "style": 0.75,
      "use_speaker_boost": true,
      "model_id": "eleven_turbo_v2_5",
      "optimize_streaming_latency": 3  
   }
}
```
> **VoiceID**: Specifies the voice the bot will use. To configure this, select a voice from the ElevenLabs portal and share the voice name with the Voice Support team to get the Voice ID.


**Video Guide: Creating Variables** 
![image](https://imgur.com/TwSzKMY.gif)

**Add Key-Value Pairs** 

1. Open the **Question/Text Node** and navigate to  **Settings > Voice > Advanced Custom Voice Options > Key-Value Pair**.  
2. Add the following key-value pairs:  
    - **enforce_same_tts** : `Boolean_True`  
    - **custom_tts** : `ElevenLabsObject`  



![image](https://imgur.com/BudHN6z.png)

:::note  
If the **Custom Voice Options** are not visible in the **Question/Text Node** settings, contact the **#voice-support** team on Slack to get them enabled.  
:::  

**Step 2**: Set the **Voice ID** by selecting a voice from the Eleven Labs portal and sharing it with the **Voice Support Team**.  

![image](https://imgur.com/Iqai9uQ.png)  

### 6. Connect to Execute Flow  

1. Create new flows using the **Dynamic Chat Node**.  
2. Connect the **Question/Text Node** to the **Execute Flow Node** and select the next flow to continue the call.  

![image](https://imgur.com/cjpxdtp.png)  

### 7. Build Flows Using Dynamic Chat Node  

Create new flows from scratch using the **Dynamic Chat Node**.  

:::info
Refer to this document for sample prompts to add in Dynamic chat node: [VoiceX Prompts](platform_concepts/VoiceX/voiceXPrompts.md).
:::


### 8. Debug/Test your VoiceX AI Agent

You can test your bot using the following methods:

#### Using Google Meet  
If you have a Google account but cannot call the IVR phone number (e.g., due to ISD or roaming restrictions), follow these steps:  
1. Copy your IVR phone number.  
2. Open **Google Meet**.  
3. Go to **Add people** > **Call**.  
4. Paste the IVR phone number and initiate the call.  

![Google Meet Call](https://imgur.com/ciXo2tE.png)  

#### Direct Phone Call  

Simply make a phone call to your IVR phone number. The AI agent will respond.  

#### Testing & Debugging  

- Have a conversation with the AI agent and modify its functionality as needed.  
- If the call is connected, you can view the ongoing chat transcript in the **Analyse** module under the **Conversation Log** section.  
- Review and refine the AI agent’s responses based on the Conversation logs.  






-------

## Upcoming enhancements 

1. Improved handling of short and long pauses during user speech.
2. Sentiment analysis for better contextual understanding.
3. Faster execution of VoiceX KB interactions.
4. Natural backchannel responses from both the bot and users for smoother conversations.

