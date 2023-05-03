---
title : Get access to Call Details Report (CDR) of your voice bot on Insights module
sidebar_label : Call details report (CDR)
---


:::note
In Data Explorer, CDR is available only for voice bots.
:::

This article focuses on **Call detail report** (CDR).


**What is a call detail report?**

CDR is a report of telephony data obtained from each call (bot conversation with customer) for reporting and analytics purposes. Parameters of every call made through the **yellow telephony system** is recorded in the CDR, making it a reliable source of truth for call-related information.
- The CDR table contains several fields that record various details about the call, such as **call duration, caller ID, called number, call status, and call type**. CDR fields are explained in the [last section](#cdr) of this article. 
- CDR fields help businesses gain valuable insights into their call center operations and customer interactions.
- By analyzing CDR data, businesses can **identify trends and patterns** in their call center operations, **improve call quality**, and **enhance customer experience**, make **data-driven decisions** and **optimize** the voice bot operations for maximum efficiency and effectiveness.


-------

## 1. How to access call details on Data Explorer


To access the CDR for voice bots: 
1. Navigate to **Insights** > **Data Explorer**.

    ![](https://i.imgur.com/dmQSwnB.png)
2. Open **Call details report**. You can see the report for the last 31 days. 
3. You can **download** this report as CSV by clicking the **Actions** button. 

    ![](https://i.imgur.com/qp6CsVq.png)

--------

### 1. Visualize call detail report  

On the data explorer, you have the option to filter or summarize the CDR data according to your specific needs. You can then visualize this data on a dashboard and download reports that only include the filtered data.

> Details on how to perform tasks such as summarization, visualization, and query creation are provided in this [guide](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/intro). 

----

#### Use case 1: Create custom dasboards

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

#### Use case 2: Schedule reports to be sent to your email

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



##  <a name="cdr"></a> 2. CDR fields and their definitions


The CDR report provides the following information:

> Time duration is displayed in seconds and time format in UTC.

### Call ID

Call ID, or Call Identifier, is a system-generated unique identifier that is used to track and identify a specific phone call. It is used to keep track of various aspects of the call, such as its duration, call status, and other relevant information. Each call on the Yellow platform is assigned a unique Call ID, which can be used to look up details about the call in the platform's logs or reporting tools. 

### Call start time 

Call start time refers to the timestamp, in UTC (Coordinated Universal Time), at which the call was initiated by the caller. This timestamp marks the beginning of the call and is used to track when the call was started.

### Call end time 

Call End Time refers to the time when a phone call or a communication session is terminated or disconnected. This can occur due to various reasons, a technical issue causing the call to drop, or the call being terminated by user or the bot. <br/> In telecommunication systems, the Call End Time is usually recorded in Call Detail Records (CDRs) and is used for various purposes, such as billing, call analysis, and network optimization. The Call End Time is also important for call logging and call recording systems, as it marks the point at which the recording should stop.

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

Hangup Reason refers to the reason why a call or communication session was terminated, ended, or disconnected. 

This can be due to various factors such as, **Invalid destination network error, Call switch off, Normal hangup, Bot failure, User busy, and Ring timeout**. 

Hangup Reason is a valuable metric for analyzing call center performance and identifying areas for improvement. By tracking and analyzing the reasons for call terminations, call centers can identify common issues, patterns, and trends, and take steps to address them to improve customer satisfaction and retention.

### Hangup Source

Hangup Source refers to the reason or the event that initiated the hangup of a call, it is the reason why the call was terminated. Some examples of Hangup Sources are:
* The caller hung up the call
* The call was terminated due to a network error
* The call was disconnected due to an invalid number
* The call was disconnected due to a timeout

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


