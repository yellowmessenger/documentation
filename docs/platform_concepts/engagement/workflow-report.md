---
title: Workflow campaign report
sidebar_label: Workflow campaign report
---


Workflow Campaign provides a snapshot of your ongoing and completed campaigns. There are multiple places where the analytics is showcased with respect to different information on each.

![](https://i.imgur.com/r7QVs9M.png)


## 1. View summary report

On the **Engage** > **Outbound** > **Journeys** page, click on the campaign for which you want to see the report. Choose your preferred duration using the date range boxes on the top-right.

   ![](https://i.imgur.com/SdZ6XOf.png)

***


## 2. View channel-wise report

To view channel-wise report, click View channel wise statistics.

   ![](https://i.imgur.com/mRmVyYC.png)


   ![](https://i.imgur.com/pOtMNMV.png)

* Total notifications sent - Channel wise: This shows the pie chart view of the total notifications and the contribution of each channel in percentages.
* User count: It shows the detailed break-up of message statuses (Sent, Delivered, Read, and Failed) for each channel.

***

## 3. Downoad report

To download a campaign report -  

Post completion of Workflow Campaigns, you can also download the report in a CSV file.

1. On the Journeys home page, navigate to the campaign and click the More options icon > **Request report**.

   ![](https://i.imgur.com/9X62jwu.png)


2. An option to download the report is sent to the registered email address, and the same is sent on Slack for Yellow.ai employees. 

   Click on the link. You will be redirected to the Download page. You will be prompted to log in if you have not logged in to the Yellow.ai platform.
   
   ![](https://i.imgur.com/aVUXWXd.png)


3. Click **Download**.
   
   <img src="https://i.imgur.com/MCWoQpR.png" width="50%"/>


Here is an example of a sample CSV file - 

![](https://i.imgur.com/8NWIxEh.png)



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