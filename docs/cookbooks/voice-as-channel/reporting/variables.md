---
title: Access voice variables within a flow in studio 
sidebar_label : (Additional) Voice variables in studio
---


## 1. Types of voice variables 

**Voice bot variables** are similar to regular [variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables), with the only difference being the way they are acquired. There are two types of voice variables that can be utilized in the process of building a flow in studio:
1. **Bot variables**: These variables are automatically available to the bot at the beginning of the voice call.
2. **CDR variables**: These variables are obtained once the call is terminated and are the [CDR values](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/cdr) that are created for reporting purposes.

-----

## 2. Access voice variable values 

To work with [conversational details reports](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/convdata) or [call and conversational details reports](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/conv_cdr), you may require access to voice variables (default and CDR). To push the necessary values into the database node and tables, you must create variables. Follow the steps below:

1. Open the variables tab and add a variable by selecting *Global variable*.
    ![](https://hackmd.io/_uploads/rJFt43sVh.png)
2. Add a custom variable **name** and select the variable **data type** (usually a string). Add the **value** (you can only use the variables given in the section below) and click **Add**.
    ![](https://hackmd.io/_uploads/S15eHno4n.png)

> To learn more about variables, visit [this](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) page.


----

### Variables available for ongoing calls 

Once the call is initiated, these voice bot variables (global variables) are accessible throughout the flows in the bot. To retrieve these variables, use the following format:

| Format | Datatype| Description|
| -------- | -------- | -------- |
|{{{data.sid}}} | String | A unique identifier assigned to each voice call | 
| {{{data.recording_url}}} | String | The downloadable URL of the ongoing call |  
| {{{data.from}}} |String| The phone number the call was made from| 
| {{{data.to}}} | String| The phone number the voice bot called | 
| {{{data.direction}}}|String | Inbound or outbound call| 
| {{{data.detected_language}}}| String | The language of the conversation that was identified (only present when auto-detect option is enabled)| 

----

### Variables available for disconnected calls 


Additional details are only obtained after the [callback event](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/conv_cdr#step-2-create-a-callbackstatus-event) is triggered, which can be retrieved by creating a new flow that executes after the call ends. To retrieve these details, use the following format:


| Format | Datatype| Description|
| -------- | -------- | -------- |
|{{variables.EVENT_DATA.duration}} |String|  The total duration of the call, including ring time, agent transfer, etc.|
| {{variables.EVENT_DATA.voice_bot_duration}}| String| The duration for which the voice bot was speaking|
|{{variables.EVENT_DATA.voice_bot_bill_duration}} |String| The duration considered for billing purposes|
|{{variables.EVENT_DATA.disconnected_by}}|String| The entity responsible for disconnecting the call (either Bot or User)|
|{{variables.EVENT_DATA.status}}  | String| The call status (answered, not answered, or failed) |