---
title: Flow campaign report
sidebar_label: Flow campaign report
---

The campaign report provides comprehensive insights and data regarding the performance and results of your Flow campaigns. This helps conveniently monitor and assess the performance of your outbound campaigns without the hassle of downloading and analyzing CSV reports.

:::note
Reports are available for Completed and Scheduled campaigns.
:::

## View Flow campaign report

To view a campaign report:

* On the Flows page, click on the **Analytics** icon.

<center>
<img src="https://i.imgur.com/7CWYYoK.png" width="80%"/>
</center>

You will see the performance report as shown below.
<center>
<img src="https://i.imgur.com/CeOftfu.png" width="80%"/>
</center>

### User engagement overview

KPI | Description
--- | -----------
Engagement channels | Channels that are connected to the flow.
Number of events | The total number of events received for the flow.
Unique clicks | The total number of unique clicks received to the URL used in the flow campaign.
Conversations initiated | The total number of unique users who started conversation.
Goal conversation | The total number of unique users who have achieved the campaign goal (only if the goal is configured for the campaign).

### User engagement analysis

This section provides a comprehensive evaluation of how effectively a marketing campaign is connecting with your target audience. This includes key engagement metrics such as Audience, Impression, Reach, and Engagement.

By default, you'll find these engagement metrics aggregated across all channels. To view the metrics for a specific channel, click on the specific channel icon.

   ![](https://i.imgur.com/3HYxbW3.png)

KPI | Description
--- | -----------
Audience | The size of the audience in the flow campaign.
Impression | The number of times the campaign content is delivered to your users, along with the percentage of delivery rate.
Reach | The total number of unique users to whom the campaign was reached out.
Engagement | The total number of user interactions with your content, such as clicks,likes, shares, and comments.


The following table provides descriptions for impression, reach, and engagement for each channel:

| Channel    | Impression  | Reach  | Engagement |
| ---------- | ----------- | ------ | ---------- |
| **All**   | The total number of unique users for whom `IMPRESSION` is achieved in any of the channels.   | The total number of unique users for whom `REACH` is achieved in any of the channels.  | The total number of unique users for whom `ENGAGEMENT` is achieved in any of the channels. |
| **WhatsApp**| The total number of unique users to whom the WhatsApp message is `DELIVERED` .  | The total number of unique users who `READ` the message. | The total number of unique users who either `REPLIED` to the WhatsApp message or `CLICKED` the URL present in the template body. |
| **SMS** | The total number of unique users to whom the SMS is `SENT`.  | The total number of unique users to whom SMS is `DELIVERED`.  | The total number of unique users who **CLICKED** the URL present in the template body. |
| **Email**  | The total number of unique users to whom the email is `DELIVERED`  | The total number of unique users who `READ` the email.  | The total number of unique users who **REPLIED** to the email message. |
| **Voice** | The number of unique users to whom a call is `CONNECTED`  | The number of unique users who `PICKED UP` the call. | The number of unique users who `SPOKE FOR` more than 5 seconds. |
| **Google Business Messages** | The total number of unique users to whom the message is `DELIVERED` .   | The total number of unique users who `READ` the message.  | The total number of unique users who either `REPLIED` to the message. |
| **Line**  | The total number of unique users to whom the notification is `TRIGGERED`. | The total number of unique users to whom the notification is `SENT` .  | The total number of unique users to whom the notification is `SENT`. |
| **Mobile Push Notifications** | The total number of unique users to whom the notification is `SENT`. | The total number of unique users to whom the notification is `DELIVERED`. | The total number of unique users to whom the notification is `DELIVERED`. |
| **Microsoft Teams** | The total number of unique users to whom the notification is `TRIGGERED`. | The total number of unique users to whom the notification is `SENT`.  | The total number of unique users to whom the notification is `SENT`. |





#### Engagement insights

Engagement Insights provides valuable analytics for optimizing customer engagement across various channels and helps enhance communication and engagement strategies. This report includes URL click tracking for specific channels and distribution analysis for chat and voice interactions. 

   ![](https://i.imgur.com/ONWsg2C.png)

To view engagement for each channel, click on the respective channel icon: <img src="https://i.imgur.com/IB4zZUc.png" width="10%"/>

* **No. of replies**: This metric represents the total count of text replies and quick replies received for the campaign. It also offers a detailed breakdown of each quick reply.
* **URL click tracking**: This assesses the performance of the links included in your messages. It provides insights into which URLs were clicked, total clicks, click through rate and click through open rate. This data helps you understand the effectiveness of your call-to-action links and the relevance of the linked content to your users. Applicable for channels e
* **Call dropoff rate**: This metric offers insights into the performance and efficiency of the Interactive Voice Response (IVR) solution. It provides information on the distribution of call drops or calls terminated by users in various time intervals, including 1 - 5 secs, 5 - 30 secs, 30 secs - 1 min, 1 - 5 mins, and durations exceeding 5 mins.
* **Call pickup rate**: When multiple phone numbers are used, it provides the percentage of calls that are successfully picked up from each number. It helps identify specific numbers associated with lower call pickup rates, allowing organizations to take informed actions such as removing or replacing underperforming numbers.


<!--

## View channel statistics

To view channel-wise report, click **Channel statistics**.

   ![](https://i.imgur.com/VlDhwgI.png)


   <center><img src="https://i.imgur.com/pOtMNMV.png" width="60%"/></center>

* Total notifications sent - Channel wise: This shows the pie chart view of the total notifications and the contribution of each channel in percentages.
* User count: It shows the detailed break-up of message statuses (Sent, Delivered, Read, and Failed) for each channel.


Metric | Description
----- | ---------
BotId | Unique ID of the bot from which Campaign was triggered.
UserId | Phone number or email address of the user to which the campaign was sent.
Source | Channel through which the message was sent - WhatsApp, Email, SMS etc.
Status | Delivery status of the message.
IP Address | IP Address of the client if triggered using Workflow API (applicable only for Workflows triggered using API).
Message ID | Unique MsgID for the messages triggered.
Workflow ID | Unique Workflow ID of the specific campaign.
Custom payload | Any custom payload sent using the Workflow API.
Template ID | Unique ID of the template used to send the Workflow campaign.
Notification Sent By | Username of the platform user whose API key is used to trigger the Workflow using API (only for Workflows triggered using API).
Comments | Comments on the message sent. [Know more](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine#24-response-codes).
Created Time | Time at which the record was create on the CSV.
Scheduled Time | Time at which the record was scheduled to be sent.
Updated Time | Time at which the status was last updated.

:::note
Delivery Status such as Delivered and Read are not available for all channels except WhatsApp.
:::

-->



### Flow analytics

"The Flow Analysis Report provides comprehensive insights into the performance of your flow, offering details on user interactions, message delivery, and engagement across various channels. This report furnishes valuable information about how your campaigns are reaching and resonating with your target audience. 

   ![](https://i.imgur.com/PqlYzed.png)

Key elements of the report include:

KPI | Descriptions
--- | -----------
Users present in the segment | Total number of users entered the segment.
Users entered Flow | The number of unique users who have initiated or entered the flow campaign.
Users in Flow | The number of active users currently engaged within the flow campaign.
Messages sent | The total number of messages sent through the specific channel within the flow. It provides a comprehensive breakdown of metrics such as messages delivered, read, engaged, not delivered, and more. You can also see the percentage of each delivery status.  <br/><img src="https://i.imgur.com/n6OB823.png" width="40%"/>
Users in wait state | The total number of users who who entered the flow but not yet progressed to the next stage in the sequence.
Users who achieved goal | The total count of users who successfully completed the predefined goal or objective of the flow campaign.





## Download campaign report

You can download the Flow campaign report to gain access to in-depth data on campaign metrics, audience engagement, conversion rates, and more. It's a valuable resource for analyzing your campaign's effectiveness and making data-driven decisions to enhance future marketing strategies.

To download a Flow campaign report:

1. On the **Engage** > **Flows** page.
2. Click more options icon for a specific campaign > **Download report**.

   ![](https://i.imgur.com/ZM182WA.png)

   You will get a notification over email (external users) or Slack (Yellow users) with a link to download the report.

   For detailed information about each entry in the CSV report, refer to [this article](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/outbound-report#download-and-analyse-campaign-report).
   


