---
title: Best Practices for Build a VoiceX AI Agent 
sidebar_label: Best practices 
---


## Managing Latency in VoiceX Conversations


The average voice-to-voice latency (time between the user’s last word and the bot’s first word) in a VoiceX conversation is approximately **1.5 seconds**. Below is the latency breakdown:

- **Final Silence Duration**: 200 ms  
- **STT (Speech-to-Text) Transcription**: 0 - 300 ms  
- **Platform Latency / LLM First Sentence**: 1 - 1.5 s  
- **TTS (Text-to-Speech) Time to First Chunk**: 0 - 1 s  
- **Total Latency**: **1.5 - 2.7 s**  

> If latency exceeds **1.5 - 2.7 seconds** for multiple turns, raise a **DevRev ticket**.

## Enabling Interruptions

Enable **Interruptions** in **Dynamic Chat node > Voice Configuration** to utilize the latest interruption handling mechanism. Ensure the **Final Silence Duration** is set to **0.2 seconds**.

![image](https://hackmd.io/_uploads/BJU9dRssye.png)


## Improving Speech Recognition Accuracy with Boost Phrases

Use **Boost Phrases** to enhance recognition accuracy for industry-specific jargon, technical terms, regional definitions, and locations. There are two ways to pass Boost Phrases:

1. **In the Question/Text Node**   
   - Pass a predefined list of boost phrases in the node configuration.
   - Alternatively, use a function to dynamically generate an array of boost phrases and pass them via **custom voice options** under the `boost_phrases` key.
![image](https://hackmd.io/_uploads/BkETYRssJx.png)



2. **In the Dynamic Chat (DC) Node**
   - A fixed set of words and phrases can be passed via **Dynamic Node > Voice Configuration > Boost Phrases**.
![image](https://hackmd.io/_uploads/rk_XqAoiyg.png)




## Knowledge Base (KB) Integration
Knowledge Base searching is now available in VoiceX conversations via **Skills**. You can either:
- Create a dedicated **KB skill**, or  
- Enable **document search** within an existing skill.

### Reducing User-Perceived Latency
To minimize user frustration during the KB search wait time, use the following techniques:

1. **Acknowledge the request with preemptive messages**. These messages will play in parallel to the KB search function, reducing perceived wait time by **1-3 seconds**. Examples:  
    - *“Hold on, let me fetch it for you.”*  
    - *“Give me a moment to check this.”*  

2. **Set expectations upfront with conversational fillers**. These create a smoother, more human-like interaction, reducing frustration during brief wait periods. Examples:  
    - *“This might take a few seconds, hang tight!”*      
    - *“Give me some time, I’m fetching it for you.”*  
    - *“Please wait, I’m finding the best answer.”*  

![image](https://hackmd.io/_uploads/Sk5i5Cijkx.png)


:::note 

KB responses take **7-15 seconds** to generate. Efforts are underway to reduce this latency.
:::

:::info

Learn about Dynamic chat node in detail [here](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode). 

:::