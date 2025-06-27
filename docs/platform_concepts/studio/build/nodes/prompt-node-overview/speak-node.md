---
title: Speak node
sidebar_label: Speak
---

Speak node allows you to input Speech Synthesis Markup Language (SSML) to configure and generate audio responses dynamically. Speak node is available for voice AI-agents.

Speak node can be used for two purposes:
1. **Testing SSML inputs**: You can directly test Speech Synthesis Markup Language (SSML) inputs within the node using the **Generate audio** button. This ensures the generated audio matches the intended voice output.
2. **Alternative to the Question node**: The Speak node can function as a voice-based alternative to the Question node, which enables the AI-agent to deliver prompts as voice messages instead of text.

Sample SSML code:

```
<speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xmlns:emo="http://www.w3.org/2009/10/emotionml" version="1.0" xml:lang="en-US"><voice name="en-US-JennyNeural"><prosody rate="0%" pitch="0%"> What is your  query</prosody></voice></speak>
```

**Configure Speak node**

1. Drag and drop the speak node in the flow editor.

2. Enter what a AI-agent should ask the user in SSML format. This can be tested by clicking **Generate audio**. 

    ![](https://i.imgur.com/4WhRwuw.png)

3. In **Output** play the audio to test it.
