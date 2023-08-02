---
title: Flow campaign report
sidebar_label: Flow campaign report
---

The campaign report provides comprehensive insights and data regarding the performance and results of your Flow campaigns. This helps conveniently monitor and assess the performance of your outbound campaigns without the hassle of downloading and analyzing CSV reports.

:::note
Reports are available for Completed and Scheduled campaigns.
:::

To view a campaign report:

* On the Flows page, click on the **Analytics** icon.

<center>
<img src="https://i.imgur.com/7CWYYoK.png" width="80%"/>
</center>

You will see the performance of the campaign .
<center>
<img src="https://i.imgur.com/j6iA1G9.png" width="80%"/>
</center>

KPI | Description
--- | -----------
Users Entered Flow | The number of unique users who have initiated or entered the flow campaign.
Users in Flow | The number of active users currently engaged within the flow campaign.
Users Exited Flow | The count of users who have left or exited the flow campaign before completing it.
Users Who Achieved Goal | The total count of users who successfully completed the predefined goal or objective of the flow campaign.



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