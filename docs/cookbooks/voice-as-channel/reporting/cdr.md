---
title : Understanding Call details report (CDR) for voice bots reporting
sidebar_label : Call details report 
---

**What is a call details report?**

CDR is a report of telephony data obtained from each call (bot conversation with customer) for reporting and analytics purposes. Parameters of every call made through the **yellow telephony system** is recorded in the CDR, making it a reliable source of truth for call-related information.
- The CDR table contains several fields that record various details about the call, such as **call duration, caller ID, called number, call status, and call type** (discussed in the next section). 
- CDR fields help businesses gain valuable insights into their call center operations and customer interactions.
- By analyzing CDR data, businesses can **identify trends and patterns** in their call center operations, **improve call quality**, **enhance customer experience**, make **data-driven decisions** and **optimize** the voice bot operations for maximum efficiency and effectiveness.

-------

## 1. How to access call details on Data Explorer

:::note
CDR on Data explorer will only be available for voice bots. 
:::

To access the CDR for voice bots reporting, 
1. Navigate to **Insights** > **Data Explorer**.
    ![](https://i.imgur.com/dmQSwnB.png)
2. Open **Call details report**. You can **download** this report as a CSV file, **Summarize** and **Visualize** it. 
    ![](https://i.imgur.com/qp6CsVq.png)

> For more details on Data explorer/Default tables, click [here](https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer). 

---- 

## 2. Complete list of CDR fields and their definitions

The CDR report provides the following information:

| Category | Fields | Description |
| -------- | -------- | -------- |
| **Timestamp & Duration**     |      |      |
| | Ringing Duration| The amount of time, in seconds, that the phone rang before the call was answered or ended.|
||Duration| The total amount of time, in seconds, that the call lasted, including ringing, agent transfer, and conversation time.|
||Voice Bot Duration|The duration, in seconds, of the conversation between the user and the voice bot.|
||Voice Billing Pulse| The time interval, in seconds, to which the Voice Bot Duration will be rounded up to for billing purposes (defaults to 60 sec).|
||Exempted Call Duration | The duration, in seconds, below which the Voice Bot Bill Duration will be set as 0, effectively exempting the call from billing (defaults to 0 sec).|
||Voice Bot Bill Duration | The duration, in seconds, of the conversation between the user and the voice bot, rounded up to the nearest Voice Billing Pulse interval for billing purposes.|
|| Start Time | The timestamp, in UTC, at which the call was initiated by the caller.|
||Dial Time | The timestamp, in UTC, at which the call was dialed from the caller's phone.|
||Pickup Time | The timestamp, in UTC, at which the call was connected between the user and the bot.|
|| End Time | The timestamp, in UTC, at which the call was hung up or disconnected between the user and the bot.|
| **Call Status & Disposition**|||
| |Status| The call status, such as **Answered**, **Not Answered**, **Failed**, or **Not Valid**.|
||Hangup Reason| A more detailed description of the hangup status, such as **ring timeout** or **user busy**. This field is used to provide a more refined view of why a call was not answered. <br/> **List of hangup reasons**: Invalid destination network error, Call switch off, Normal hangup, Bot failure, User busy, and Ring timeout.|
||Disconnected By| The entity that disconnected the call, such as **User**, **Bot**, or **System**.|
||AMD Status | A boolean value indicating whether the call was landed on voice mail. This field is marked as True if an outbound call was landed on voice mail, and False otherwise.|
| |Telco Code | The telco code received from the server.|
||Telco Text | A text explaining the telco codes in detail. [Click here](https://docs.google.com/spreadsheets/d/1j7zSREoLIgQiqkQm8zhtXvO_GHOmNiA0iylwl2C9_8c/edit#gid=0)  for codes. |
||User Drop Off Metadata | Tracking the specific event at which the user dropped off, such as when the bot was playing a message, expecting a user response, or waiting for a user. The default value for this field is set to Unknown.|
| **Call Identifier**|||
||SID (Session ID) | A system-generated unique identifier of the calls involving the Yellow platform.|
||Campaign ID | A system-generated unique identifier of the campaign placed from the Yellow platform. This field is empty for inbound calls by default.|
||Direction| Specifies the direction of the call, either **Inbound** or **Outbound**. For inbound calls, the Yellow platform is the call receiver from the user, and for outbound calls, the Yellow platform initiates the call to the user.|
||From | The number from which the call is initiated. For inbound calls, this is the user's number, and for outbound calls, this is the bot's associated number.|
||To| The number on which the call is received. For outbound calls, this is the user's number, and for inbound calls, this is the bot's associated number. |
|| Host | The machine/server information on which the call has landed. Some high-traffic calls may be routed through multiple servers.|
||Extra Params | Additional parameters that can be sent with each outbound campaign call request, such as name, state, policy number, etc. These parameters can be used in the bot logic to personalize the conversation with the user.|
|| BotId | Each bot on the Yellow platform has a unique bot ID, and calls are diverted to that bot to continue the conversation. |
| | Recording Gateway| If the Yellow storage solution is utilized, the value is set as **default**. If the customer has their own storage to push recording files, that storage is used to record the call.|
| **Call Forwarding**|||
||Forwarding Number | This field records the phone number of the agent to whom the call is transferred by the bot during an agent transfer. If the call is not transferred to any agent, the field is set to null. |
||Child Legs | This field is a JSON object that stores the content of the forwarded call, including its duration, timestamp, phone number, status, and other related information. It is used to keep track of the call transfer process and the status of the transferred call.|
|**Call Content**|||
|| Transcripts | This field contains an array of user responses to the voice bot, captured during the call. These transcripts are generated through speech-to-text (STT) technology, which converts the user's spoken words into text.|
||Recording URL | This field contains a URL to the end-to-end call recording of the call, which is usually recorded by default. Users have the option to pause recording during certain sections of the call or stop recording altogether as part of the bot logic.|
|| TTS Characters | This field is used to capture the total number of characters used in the text-to-speech (TTS) responses provided by the bot during the call.|
|| STT Duration | This field records the duration in seconds for which the STT engine took to convert the user's spoken words into text.|
|**Call Failure**|||
||Failover Type | This field in the call data specifies the action taken by the platform in case of bot failover. The possible actions are **call-forward with no msg**, **call-forward with a msg**, **hangup**, **hangup with a msg**, and the field is empty if failover did not happen.|
||Bot Failed | This field is marked as **True** if the platform times out for any user response, and **False** if the platform responds.|
|| Bot Failover | This field is marked as **True** for calls where the bot faced technical issues on the call initiation part itself, and **False** otherwise.|

