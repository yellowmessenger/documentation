---
title: Components of a voice bot and steps to set them up
sidebar_label : Components of a voice bot
---

There are 3 components to consider in the voice bot architecture: 
1. Customizing bot response 
2. Capturing user input 
3. Understanding user input 

![](https://i.imgur.com/VHni0bH.png)

In this article, you will learn how each of these components functions and what you must do to set up your voice bot. 

----

## 1. Customize bot responses 

> Once the platform output is available, it is converted from Text-To-Speech. How the user listens to this speech can be customized.

To customize the bot responses on the IVR channel, we use text-to-speech technology in partnership with leading Text-To-Speech(TTS) engines (like Microsoft, Google, and Amazon) to better serve all kinds of business requirements like customized and life-like speech.

You can explore the four different ways in which you can customize bot responses: 

### 1.1 Using pre-built neural voices

The TTS engines have pre-built neural voices. When you provide text (response of bot), it is automatically converted to speech. For example: 
- Using Bot persona in [Design](https://docs.yellow.ai/docs/platform_concepts/design/convdesignvoice#21-bot-persona-settings). 
- In the [Voice input node](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/build/usingvoiceinput#11-input-type), Bot speaks is directly converted into speech. 

### 1.2 Applying SSMLs for more customization

For more customized business use cases where the bot needs to have more control over the speech synthesis, you can apply speech effects (rate, pitch, style, pause, etc.) using SSML (Speech Synthesis Markup Language). You can customize all the bot responses in an easy-to-use editor in the [design mode](https://docs.yellow.ai/docs/platform_concepts/design/convdesignvoice#22-bot-response-settings).

(or)

You can add a customized SSML code directly to the [voice input node](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/build/usingvoiceinput#11-input-type). 

![](https://i.imgur.com/evq5cVU.png)

### 1.3 Adding variables for custom responses

You can have a personalized interaction with the bot by using variables. For example: 

| Conversation 1 | Conversation 2 |
| -------- | -------- |
| **User**: I live in **Bangalore**. <br/> **Bot**: **Bangalore** is a great place! May I know your account number? | **User**: My name is **Sam**. <br/> **Bot**: Welcome to our store, **Sam**. What would you like to try first?      |

You can add variables in the [design](https://docs.yellow.ai/docs/platform_concepts/design/convdesignvoice#3-store-and-use-variables) module or [voice input node](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/build/usingvoiceinput#2-voice-input-node-demo) while building flows. 

### 1.4 Using the translations page for multilingual bots

While customizing bot response for multilingual bots you can use [Translations](https://docs.yellow.ai/docs/platform_concepts/studio/build/localization) to customize speech in other languages. 

:::note
- The translation text added on this page must be in **SSML format** only. 
    ![](https://i.imgur.com/VHTadGP.png)

- On the Voice input node, click the translation icon and select the **Key**.
    ![](https://i.imgur.com/StslBrJ.png)

:::


-------

## 2. Capture user responses

After synthesizing bot responses, the next step is to accurately capture user responses over call. There are three methods to capture user input on the IVR channel that is summarized below.

> Click [here](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/build/usingvoiceinput#13-capturing-user-input) for complete details.

### 2.1 Capture user speech

You can capture user speech and get it transcribed using Speech-To-Text(STT) technology. Similar to TTS, we have partnerships and integrations with advanced STT engines like Microsoft and Google to accurately capture speech and convert it to text which then can be processed by the bot.
Multiple parameters can be configured for this such as STT engine, STT mode, Silence Parameters, etc.

> Click [here](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/build/usingvoiceinput#voice) for details. 


### 2.2 Capture keypad(DTMF) input

User response can be captured with [keypad](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/build/usingvoiceinput#keypad) while being on call. This is mostly used to capture numeric inputs. There are two configurations available to use: 

1. **DTMF_Digit_Length**: Used to capture fixed length user input like *Mobile Number*.
2. **DTMF_finish_character**: Used when the user response is expected to be a variable length input like an application ID. A user can define either "*" or "#" to inform that all Digits are added.

:::note 
If either case, there is no activity for more than 10 seconds, it is considered as the end of input.
:::

### 2.3 Capture keypad and speech as input

There are use cases where the bot can allow the user to either provide input by typing on the keypad or speaking it out. 

:::note
The first response recognized by the bot will be considered the final input. It can be noise/response or Keypad activity.
:::

----------

## 3. Understand user responses and follow-up

These are the platform operations to be performed to understand the user input that is available in text format and analyze and provide output in text format. For example: 

- Bot training by adding [intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents) and [entities](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities).
- Configuring output for [Failure or no-response messages](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/build/usingvoiceinput#12-validator). 
- Configuring [validations](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/build/usingvoiceinput#12-validator) against the context (intents, entities, pre-trained entities, etc). 


