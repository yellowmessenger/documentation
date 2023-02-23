---
title: Understand language detection in voice bots 
sidebar_label : Language detection
---


You can now interact with the bot in multiple languages without the need to manually select the language each time you use it. The bot will automatically recognize the language you are speaking and respond accordingly.

The success of an automated Voice conversation depends heavily on the correct transcription of the caller’s speech inputs to text with the help of third-party speech-to-text services.

With Language detection, each step can now be configured with a set of languages (as opposed to a single language limitation in earlier implementation).

In addition to the ability to accept multiple languages, Language detection also detects the language being spoken on the call and sends this information back to the Bot for relevant actions (like changing the language of the conversation from English to Hindi). For Example:
* **Bot question**: “Welcome to Yellow Bank. How can I help you today”
* **User input configuration**: Expected Language = English, Hindi, Gujarati
* **User says**: “मेरे खाते का बैलेंस कितना है? (What is my Account Balance?)”
* **Bot question**: “क्या आप मुझे अपना 12 अंकों का अकाउंट नंबर बता सकते हैं” (Can you please share your 12 digit account number with me?)


**How to utilize this feature?** 

This feature is part of the new voice 2.0 architecture. To utilize this, while passing the *STTlanguage parameter* (voice options), pass all the expected STT language codes comma separated. For example, if you are at a phone number node, pass the node level option of STT_language as “en-IN,hi-IN” to enable auto-capture in both English and Hindi for that specific node only.

> The switching of bot language needs to be part of bot logic. This is not a direct platform feature in v1.

**Usage recommendations**
Language detection is an additional processing overhead for the STT engine and hence should be used at selected steps. Using this across all the steps will probably result in higher conversational latency. From our internal testing, the additional latency is directly proportional to the number of languages added for detection.
