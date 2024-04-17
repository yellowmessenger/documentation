---
title : Call Details Report (CDR) of your voice bot on Insights module
sidebar_label : Auto-generated call details report 
---


:::note
In Data Explorer, CDR is available only for voice bots. The data will be updated after the call is completed. 
:::

This article focuses on **Call details report** (CDR) for voice bots, a database table maintained by yellow.ai platform which records more than 15+ important metrics (like start time, duration, recording url etc) for each call.


## 1. Call details report overview

CDR is a report of telephony data obtained from each call (bot conversation with customer) for reporting and analytics purposes. Parameters of every call made through the **yellow telephony system** is recorded in the CDR, making it a reliable source of truth for call-related information.

- CDR fields help businesses gain valuable insights into their call center operations and customer interactions.
- The CDR table contains several fields that record various details about the call, such as **call duration, caller ID, called number, call status, and call type**. CDR fields are explained in the [last section](#cdr) of this article. 
- By analyzing CDR data, businesses can **identify trends and patterns** in their call center operations, **improve call quality**, and **enhance customer experience**, make **data-driven decisions** and **optimize** the voice bot operations for maximum efficiency and effectiveness.

Examples of insights you can derive from the auto generated call details report: 
- Retrieve a list of users who disconnected calls during the last 7 days.
- Retrieve the answering rate for a specific campaign (identified by its ID) that was launched last Sunday.
- Retrieve daily total calls handled by the voice bot.


-------

## 2. Access call details(CDR) on Data Explorer


To access the CDR for voice bots: 
1. Navigate to **Insights** > **Data Explorer**.
    ![](https://i.imgur.com/dmQSwnB.png)
2. Open **Call details report**. You can see the report for the last 31 days. 
3. You can **download** this report as CSV by clicking the **Actions** button. 
    ![](https://i.imgur.com/qp6CsVq.png)

--------

## 3. Visualize call detail report  

On the data explorer, you have the option to filter or summarize the CDR data according to your specific needs. You can then visualize this data on a dashboard and download reports that only include the filtered data.

> Details on how to perform tasks such as summarization, visualization, and query creation are provided in this [guide](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/intro). 

----

### Use case 1: Create custom dasboards

Suppose you're a ticket booking center using the yellow.ai voice bot, and you want to track the number of daily calls due to the different offers you provide. Here are the steps you can follow:

1. Open **Call details report** and click on the **Summarize** button.
2. Click on **Add metrics** and select **Number of distinct values of**.
3. Choose **Call ID** to track calls from different IDs, and then click **Save**.

     ![](https://i.imgur.com/OryFjfA.png)
4. To filter the data further to obtain daily stats, select **Timestamp** under **Group by** and choose **Day**. Click **Apply**. 

    <img  src="https://i.imgur.com/yHXdF2z.png"  width="50%"/>
5. You will now see a table with the required data. To visualize this data, click on the **Visualization** button.
6. Choose the type of visualization you want (e.g. bar graph), and click **Done**.

    ![](https://i.imgur.com/UPVpmYk.png)
7. Click **Save query**, name your query, and then click **Save**. You can access this visualization as a **saved report** in the Data Explorer.

    ![](https://i.imgur.com/fU5AoOq.png)
8. Whenever you want to view the number of users per day, you can directly open the saved report from the **Saved reports** section in the Data Explorer.

    ![](https://i.imgur.com/E0iwn1J.png)

> You can also use this data to create your own custom dashboard. For instructions on how to do this, click  [here](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards).

-----

### Use case 2: Schedule reports to be sent to your email

Suppose you are a new support center on the yellow.ai voice bot, and you need to send a weekly report of the voice bot's billing duration to the accounts department. Here are the steps you can follow:

1. Open the **Call Details Report** and click the **Summarize** button.
2. Click **Add metrics** and select **Number of distinct values of**, then choose **Call ID** to fetch the unique calls attended by the bot.
3. Click **Add metrics** and select **Sum of** and **Voice bot billing duration** to calculate the total billing duration for the selected timestamp.
4. To filter the data further and get weekly stats, choose **Timestamp** under **Group by** and select **Week**. Click **Apply**.

    ![](https://i.imgur.com/yITVlXG.png)
5. You will now see a table with the required data. Click **Save query**, name your query, and click **Save**.

    ![](https://i.imgur.com/GEy4pJe.png)
6. (Optional) To visualize this data, click the Visualization button.
7. Go to **Data Explorer** > **Saved Reports** and open your custom report.
8. **Schedule** a weekly report by adding your email ID and the account team's email ID in the recipients field. Click [here](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/savedreportsactions#1-schedule-a-report) for the steps to **schedule report**.

    ![](https://i.imgur.com/K59SALi.png)


> Understand other operations on [Insights modules](https://docs.yellow.ai/docs/platform_concepts/growth/introductiontoinsights). 

----

### Use case 3: Voice bot billing analysis

VoIP/IVR providers aim to bill companies accurately for channel usage. Analyzing call durations is pivotal. Quick disconnects within 5 seconds may not yield valuable insights and can be excluded from billing. For durations between 15 to 30 seconds, one billing rate applies, while calls exceeding 30 seconds fall into a different billing band. The Call Details report provides actionable insights for such billing scenarios. Follow these steps:

1. Navigate to **Insights > Data Explorer > Call Details report**.
2. Click on **Filters** and select **Callduration**.
3. Click **+Add buckets > Varied** and create billing buckets by adding Values like <=5s, 15-30s, and >=30s.

![image (32)](https://imgur.com/YERSsH0.png)

4. Apply these buckets to categorize call durations, enabling a clear view for billing decisions.

![image (33)](https://imgur.com/7rBk04d.png)


----



##  <a name="cdr"></a> 4. CDR fields and their definitions


The CDR report provides the following information:


### Call ID

Call ID, or Call Identifier, is a system-generated unique identifier that is used to track and identify a specific phone call. It is used to keep track of various aspects of the call, such as its duration, call status, and other relevant information. Each call on the Yellow platform is assigned a unique Call ID, which can be used to look up details about the call in the platform's logs or reporting tools. 

### Call start time 

Call start time refers to the timestamp, at which the call was initiated by the caller. This timestamp marks the beginning of the call and is used to track when the call was started.

### Call end time 

Call End Time refers to the time when a phone call or a communication session is terminated or disconnected.

### Ring Duration

Ring duration refers to the length of time that a phone rings before the call is either answered or goes to voicemail. It is the time between when an incoming call is received and when it stops ringing. Ring duration is typically measured in seconds.

### Call Duration

Call duration refers to the length of time that a phone call. It is the amount of time that starts from when the call is ringing, connected or answered and ends when the call is disconnected or ended. The call duration is important to measure for various reasons, such as billing purposes, quality assurance, and analysis of call traffic patterns.

### Voice Bot Duration

Voice bot duration, in seconds refers to the length of time that a voice bot or automated voice response system interacts with a caller during a phone call. This duration starts when the caller is first connected to the voice bot and ends when the call is transferred to a live agent or when the call is disconnected. The voice bot duration can vary depending on the complexity of the bot's responses and the options provided to the caller.

### Voice Bot Bill Duration

The duration, in seconds, of the conversation between the user and the voice bot, rounded up to the nearest Voice Billing Pulse interval for billing purposes.

### Campaign ID

A Campaign ID is a system-generated unique identifier assigned to a marketing campaign to track its performance and measure the effectiveness of marketing efforts. This field is empty for inbound calls by default.

### Hangup Reason

Hangup Reason refers to the reason why a call or communication session was terminated, ended, or disconnected. The possible values are **TTS failure, STT failure or Network faliure** (you may also find similar values with these descriptions: Normal Hangup, Bot failure, Bot response invalid, Bot response failure, DTMF over parent call, Message loop detected, Missed Consecutive DynamicNode Packets, Media download failure, STT resource not available, TTS resource not available, Network error, Invalid Destination, Phone Unreachable/Switch Off, Ring timeout, User Busy, Inbound Blocked)
Hangup Reason is a valuable metric for analyzing call center performance and identifying areas for improvement. By tracking and analyzing the reasons for call terminations, call centers can identify common issues, patterns, and trends, and take steps to address them to improve customer satisfaction and retention.


### Hangup Source/ Disconnected by 

Hangup source/Disconnected by specifies the party that disconnected the calls. The possible values for this column are **User/Bot/System**.
- USER: When the customer itself disconnects the call.
- BOT: When the bot disconnects the call after providing the necessary information.
- SYSTEM: When neither bot nor the user disconnects the call and the call is disconnected due to any of the system issues. 


Hangup Source can provide useful information for analyzing call quality, identifying problems with the network or equipment, and understanding the reasons for call failures.

### Source Number

Source number refers to the phone number or caller ID of the party that initiated the call. It is the number from which the call originated. In other words, it is the phone number of the person or device that made the call.

### Destination Number

The destination number refers to the phone number that received the call or message. It is the phone number dialed by the caller or the recipient of an inbound call.

### Call Status

The call status field refers to the final status of a call when it ended or was terminated. This field indicates whether the call was successful or not and can provide more details about the reason for call termination. Some common call status codes are **Answered, Not Answered, Failed, or Not Valid**. 

### Direction

Specifies the direction of the call, either Inbound or Outbound. It could be **inbound**, meaning the call was received from an external source, or **outbound**, meaning the call was initiated by the user from the system.

### Recording URL

An URL to the end-to-end call recording of the call, which is usually recorded by default. Users have the option to pause recording during certain sections of the call or stop recording altogether as part of the bot logic.
The recording URL can be used to retrieve and listen to the recording of the call.

### SIP Code 

For each call, an error code (SIP code) is generated to understand the hang up reason.  

<!--


| SIP Code | Description                                        |
|----------|----------------------------------------------------|
| 200      | Call answered                                      |
| 400      | Bad Request - Mostly from Tata - investigate       |
| 403      | Forbidden                                          |
| 404      | Not Found                                          |
| 408      | Request Timeout                                    |
| 480      | Temporarily Unavailable                            |
| 484      | Address Incomplete - Commonly observed - investigate |
| 486      | Busy Here                                          |
| 487      | Request Terminated                                 |
| 500      | Internal Server Error                              |
| 501      | Not Implemented                                    |
| 502      | Bad Gateway                                        |
| 503      | Service Unavailable                                |
| 504      | Service Timeout                                    |
| 600      | Busy Everywhere                                    |
| 603      | Decline                                            |
| 607      | Inbound Blocked                                    |






##  <a name="cdr"></a> 2. CDR fields and their definitions

The CDR report provides the following information:

| Category | Fields | Description |
| -------- | -------- | -------- |
| Timestamp & Duration     |      |      |
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
| Call Status & Disposition|||
| |Status| The call status, such as **Answered**, **Not Answered**, **Failed**, or **Not Valid**.|
||Hangup Reason| A more detailed description of the hangup status, such as **ring timeout** or **user busy**. This field is used to provide a more refined view of why a call was not answered. <br/> **List of hangup reasons**: Invalid destination network error, Call switch off, Normal hangup, Bot failure, User busy, and Ring timeout.|
||Disconnected By| The entity that disconnected the call, such as **User**, **Bot**, or **System**.|
||AMD Status | A boolean value indicating whether the call landed on voice mail. This field is marked as True if an outbound call was landed on voice mail, and False otherwise.|
| |Telco Code | The telco code received from the server.|
||Telco Text | A text explaining the telco codes in detail. [Click here](https://docs.google.com/spreadsheets/d/1j7zSREoLIgQiqkQm8zhtXvO_GHOmNiA0iylwl2C9_8c/edit#gid=0)  for codes. |
||User Drop Off Metadata | Tracking the specific event at which the user dropped off, such as when the bot was playing a message, expecting a user response, or waiting for a user. The default value for this field is set to Unknown.|
|Call Identifier|||
||SID (Session ID) | A system-generated unique identifier of the calls involving the Yellow platform.|
||Campaign ID | A system-generated unique identifier of the campaign placed from the Yellow platform. This field is empty for inbound calls by default.|
||Direction| Specifies the direction of the call, either **Inbound** or **Outbound**. For inbound calls, the Yellow platform is the call receiver from the user, and for outbound calls, the Yellow platform initiates the call to the user.|
||From | The number from which the call is initiated. For inbound calls, this is the user's number, and for outbound calls, this is the bot's associated number.|
||To| The number on which the call is received. For outbound calls, this is the user's number, and for inbound calls, this is the bot's associated number. |
|| Host | The machine/server information on which the call has landed. Some high-traffic calls may be routed through multiple servers.|
||Extra Params | Additional parameters that can be sent with each outbound campaign call request, such as name, state, policy number, etc. These parameters can be used in the bot logic to personalize the conversation with the user.|
|| BotId | Each bot on the Yellow platform has a unique bot ID, and calls are diverted to that bot to continue the conversation. |
| | Recording Gateway| Shows **Default**, if the Yellow storage solution is utilized or the name of the storage, if the customer has used external storage to push recording files.|
| Call Forwarding|||
||Forwarding Number | This records the phone number of the agent to whom the call is transferred by the bot during an agent transfer. If the call is not transferred to any agent, the field is set to null. |
||Child Legs | JSON object that stores the content of the forwarded call, including its duration, timestamp, phone number, status, and other related information. It is used to keep track of the call transfer process and the status of the transferred call.|
|Call Content|||
|| Transcripts | An array of user responses to the voice bot, captured during the call. These transcripts are generated through speech-to-text (STT) technology, which converts the user's spoken words into text.|
||Recording URL | An URL to the end-to-end call recording of the call, which is usually recorded by default. Users have the option to pause recording during certain sections of the call or stop recording altogether as part of the bot logic.|
|| TTS Characters | This is used to capture the total number of characters used in the text-to-speech (TTS) responses provided by the bot during the call.|
|| STT Duration | Records the duration in seconds for which the speech-to-text (STT) engine took to convert the user's spoken words into text.|
|Call Failure|||
||Failover Type | This field in the call data specifies the action taken by the platform in case of bot failover. The possible actions are **call-forward with no msg**, **call-forward with a msg**, **hangup**, **hangup with a msg**, and the field is empty if failover did not occur.|
||Bot Failed | Marked as **True** if the platform times out for any user response, and **False** if the platform responds to the user.|
|| Bot Failover | Marked as **True** if the bot encountered technical issues during the call initiation, and **False** otherwise.|


-->