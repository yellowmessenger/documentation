---
title: DTMF
sidebar_label : DTMF
---


    

Dual-tone multi-frequency (DTMF) is used for touch tones, it is the sound made when pressing a number key. For cases, where we expect background noise and difficulty in correctly identifying the user utterance for numeric inputs, we can use this feature to record user responses.

## 1. Configure DTMF for bots

To configure DTMF, you can use the below-mentioned node level options:

1. Capture DTMF and Configure DTMF Digits Length.
(OR)
2. Configure DTMF Finish Character and Capture voice with DTMF input.

| Fields | Description |
| ----------------------------- | ----------- |
| **Capture DTMF** | Enable this option if the DTMF is to be collected on the specific node. |
| **Capture voice with DTMF input** | With this enabled, the bot will be able to capture both voice and DTMF for the same question. Example - What is your mobile number? Note - Bot will only capture the one which comes first from the user be it speech response or DTMF response. |
| **DTMF digital length** | Enter the length of characters to be captured. Ex: For an Indian phone number, it is 10. |
| **DTMF finish character** | Character which defines when the bot must stop capturing. Supported finish characters - "*" and "#" |

:::info

> Either DTMF digital length or DTMF finish character can be configured.   

DTMF digit length, DTMF finish character and DTMF timeout are 3 ways in which the bot understands when to stop capturing:   
1. Digit Length is useful when you are capturing fixed-length data. Ex: Phone number.  
2. Finish character is useful when you don't know the length and that could vary depending upon different states/products. Ex: Model id, application number. A user can define either "*" or "#" to inform that all Digits are added.  
3. DTMF timeout is a default inactivity timeout (not open for configuration) and it is set to 10 seconds by default (it overrides **digit length** and **finish character**).  For example, if the length is 11 and the user has only entered 6 characters, and there are 10 seconds of inactivity, only those will be captured. 

:::
    

## 2. Use-cases

DTMF can be used in following ways while building a voice bot: 

1. Business requirements specifically know when and where to collect DTMF input as part of the conversation - via. number capture.
 The components which can be used to build such a flow are Question/Text node and DTMF Node Level Options.
Example: Question/Text node + Call forward.  

> If the bot wants to collect numeric input for a mobile number or application number. As a part of bot logic bot can also collect this information via DTMF (saying “Please input your 7-digit application number to proceed ahead.”) along with a voice response from the user.

2.  As a fallback mechanism bot allow the user to enter numeric response using DTMF. Also, if the bot is not able to correctly understand due to background noise, the input can be DTMF oriented.
 The components which can be used to build such a flow are [separate flows](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys/) + DTMF Node Level Options.

> One more use case could be where the voice bot for some reason isn’t able to understand the user’s numeric response/query and hence we can have a dedicated journey as a fallback option where we let the user enter a numeric option using DTMF too.