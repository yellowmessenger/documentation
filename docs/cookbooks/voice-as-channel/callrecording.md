---
title: Call recording
sidebar_label : Call recording
---

Depending on the different use-cases and different kind of compliances that comes along with the industry regulations, we have designed a recording management feature that allows user to pause, resume or stop call recording during the conversation.
    
:::note 
By default, the call recording feature is enabled to record the conversation.
:::

## 1. Configure call recording

By default, call recording is turned on by default for all the bots. In case, you want to pause it for some recording sensitive conversation like OTP or ID number, you will have to configure the recording action on the [node level options](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes#32-configure-node-for-a-voice-bot).
    
**To pause recording**

1. Set the recording action to *pause* on that specific step.
2. Set the recording action back to *resume* on the very next step following the sensitive step/s.
    

:::info
1. Once you stop the recording for a call at any step, it can’t be resumed again.
2. You can also configure the recording behaviour in case the conversation is transferred to an Agent. Set the required recording action on the [global options](https://docs.yellow.ai/docs/platform_concepts/studio/tools#25-voice). Setting it to True will record the conversation with the agent and vice-versa.
3. Recording action can only be set for the specific turn. If you set it to pause, all three, options below are not  captured for the turn: 
	- Question asked by bot. 
	- Response from the user. 
	- The processing duration.
:::

## 2. Implement call recording
    
**Use case**

-   Pausing the recording while the user provides the Aadhar number to the bot.
-   On the question node where the bot asks the user to provide the Aadhar details, the bot developer can set the recording action to *pause*.
-   On the next node, where the bot follows up with another question (non-recording sensitive), *resume* the recording action.