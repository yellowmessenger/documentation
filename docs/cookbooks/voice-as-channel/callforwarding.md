---
title: Call forwarding
sidebar_label : Call forwarding
---




For the IVR channel, in cases, where the voice bot is unable to understand the user response or the user and wants to escalate certain time-critical issues directly to a support executive we can transfer the same call to an agent. Here, we can transfer the context of the call also so the agent doesn’t have to start the conversation from scratch. This is done by using custom SIP headers where we pass information collected by the bot like name, number, or any other issues-related details to the agent beforehand so that the conversation doesn’t lose context.

## 1. Configure call forwarding for the bot

1. For forwarding a call, you have to enable the call forward feature on selected nodes where you feel as per the bot logic.
2. To forward a call, you can use the below-mentioned node level options:
    
-   Call Forward - Boolean
-   Number OR SIP extension to forward a call
-   Forward stop recording
-   Custom SIP headers
-   Custom CLI

| Fields | Description |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Call forward** | When this is enabled you can enter a number to forward or the SIP. It is used to enable call forwarding to an agent in any specific step. You can either forward the call to an agent's number or forward it to some SIP extension. |
| **Number to forward** | This textbox accepts the number of the call to be forwarded to ex: Number (+919XXXXXXXXX). |
| **SIP extension** | Extension to initiate SIP (Session Initiation Protocol) transfer. |
| **Caller line identity** | This field accepts **custom caller ID** which is sent while forwarding the call to an agent. Note, that this functionality is not supported by all the carriers.|
| **Custom SIP header** | This can be used as an additional parameter that can be passed to an agent while transferring the call to an Agent to pass along bot collected information. You can pass a key-value pair in JSON format which will get passed in the SIP header. |

> An example of a Custom SIP header:

```[{“key”:“User-to-User”, “value”:“name=david&product=heater&query=not turning off&priority=high&number=12345”}]```

## 2. Use-cases

Call forwarding can be used in the following ways while building a voice bot:

1. Business requirements specifically know when and where to transfer the call as part of the conversation.
	- The components which can be used to build such a flow are Question/Text node and Call forward Node Level Options.
	- Let’s say the bot has collected all the required basic information like name, number, address, and policy number for your insurance. Since at this stage the bot logic could now channel this conversation to an agent to better judge the case, we could use a Text node (saying, “Thank you for providing us with all the details. Transferring your call to support executive for faster resolution”) with all the options properly set as mentioned above.

<img src="https://lh4.googleusercontent.com/fSUkWcaujQVEQEcNJSfQRx0OHSJesyifMyX2IUFhp-PxuZb4IReimKQm_FUWk5jNkhr8c6EA-AQg8xuFivhF-AeXqVZWSQGv1F1Iug7Ysk4hCRTjA6Qgj2SkRfdr5IKyEtEHGCPqAalhPBCEFn0JqhQzMBN0bx0Rcdyofq_QfilKFI5Al2XYIb3WUw" alt="drawing" width="60%"/>

<img src="https://lh4.googleusercontent.com/09bqp0NR2haSwBWqv2algNR2P23LJwmxcVHXcECGwnIfZR0wvt8U68IWEiTq_DK4vjSadNvdj-9NzJCOmjQ_B0zLpQJy1RYVrc3_rS5ijXCgVkOD_Guf4_vvc73Bwlh1tpNtuSnKXr1guHn7qHNf81p3TnQ7ZM2fFAtyT5G5CJtxfPhv-m4CEnpxrA" alt="drawing" width="60%"/>


2. Bot requires to support on request Agent Transfer from the user while conversation.
	- The components which can be used to build such a flow are Intent detection >  [Separate flows](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys) (as per user request).  
	- Apart from the cases where the bot transfers the call to an agent, which are pre-meditated for time-critical use cases business requirements could be of transferring the call directly to an Agent as and when the user requests.    
	- In such cases, upon detecting the user intention of “Talk to Customer Support” at any point in the conversation, we could have an altogether separate journey that could be triggered via intent detection.  


<img src="https://lh4.googleusercontent.com/L2bA4jJBsCtet-AU3e6QbR2LvWU9IOGPGLL5DHQTpCvD7SEvU89qBJoVuvxKVEbPk7WnlYNxQXVoVcadJ9R9SQe4gKvVE8H6ixXErgA3-mIbzgoCnNsz5qcmz6kplwvWp__Ck20G9xqhsWybxJvHJKx566wpbPpFW2bFkcFBCzatyD2c8KC2EPj8_Q" alt="drawing" width="60%"/>

<img src="https://lh4.googleusercontent.com/CQudCk90GcVBaTzI5B15T7PRJsg5lV8d3SVbi70nUehlUAODLi8F0iv0JLlzG_8ahZ1jejq1oWiHMS8gvQf5blo9ifZ9sVaZsVS5aot5pLk09lfIlDE-VpqpqUV4UThTOuViyZohcz3elHxAozsSzYEUo2uoCYh8NTS0ZuYh0kb4XeHOxnP1EWEn1g" alt="drawing" width="60%"/>




3. Bot is required to transfer to agents (as a fallback mechanism) if it isn’t able to understand the user response multiple times.
	- The components which can be used to build such a flow are separate custom flows.
	- Apart from the intent detection, one more use case could be where the voice bot for some reason isn’t able to understand the user response/query (even after multiple re-tries) and hence we want to transfer the call to an agent. For such cases, the ideal flow is where the bot tries to understand the user response 2/3 times (repeat limit can also be configured) and post that fallback mechanism like agent transfer (or call disconnect) needs to be configured. For this, the bot developer needs to create a custom journey using execute flow for a specific business use case.