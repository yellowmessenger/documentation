---
sidebar_label: Outbound campaign report
title: Outbound campaign report
---

You can download comprehensive reports for all campaigns you send out from Yellow.ai’s Engage module. You can use these reports to analyze campaign performance and see the in detailed report of errors (if any).

You can [view report directly on the UI](#1-view-report) or [email the detailed report to your registered email address](#2-email-report) 

***

## 1. View report

To view outbound campaigns' report, follow these steps -

1. Log on to Yellow.ai platform and navigate to the **Engage** module.
 
   ![](https://i.imgur.com/bgE3xeX.png)

2. On the **Outbound** tab, click on the campaign for which you want to see the report.

   ![](https://i.imgur.com/lhNeKoM.png)

You can see the campaign schedule details such as current status; timestamp of when it was scheduled, execution started, execution ended; and who created the campaign.

<center>
  <img src="https://i.imgur.com/JED42R7.png" width="50%"/>

</center>

You can also see occurrences of a recurring campaign with the status and performance details. There is only one occurance for a one-time campaign.

   ![](https://i.imgur.com/pYNAPGN.png)


KPI | Description
--- | -----------
Scheduled | Total number of messages scheduled for the campaign.
Failed | Number of messages that were failed for some reason.


You can also see the detailed break-up of the messages sent, delivered, and read.

![](https://i.imgur.com/TtjmhlH.png)

### 1.1 Delivery status for different channels

The following table lists the campaign delivery status for different messaging channels.

Channel | Statuses
--------- | -------
WhatsApp | Scheduled, Processing, Sent, Delivered, Read, and Failed.
SMS | Scheduled, Sent, Delivered, and Failed.
Email | Scheduled, Processing, Sent, Dropped, Delivery delayed, Bounced, Delivered, Opened, Clicked, Unsubscribed, Spam reports, and Failed.
Mobile push | Scheduled, Sent, Delivered, Read, and Failed.

### 1.2 Message delivery status descriptions

The following table provides descriptions of each delivery status.

Delivery status | Description
--------------- | -----------
Triggered | Message has been sent to the downstream service.
Scheduled | Message has been queued to be sent (single tick on Whatsapp)
Sent | Message has been sent. For example, single tick on WhatsApp.
Delivered | Message has been delivered. For example, double tick on WhatsApp. 
Read | Message has been read. On Whatsapp this is trackable only when end-user has blue ticks - read receipt turned on.
Triggered | Sent to the communication gateway, the message will be sent from there.
Dropped | Report from the email server when bounce, unsubscribe, or spam occurs.
Bounced | An error while sending the email for several reasons such as the email address doesn't exist, the recipient's inbox being full, poor sender reputation, server outages, and so on.
Unsubscribed | User has opted out of receiving emails from the brand.
Delivery delayed | Message sending got delayed for reasons such as servers are overloaded, and the recipient's mail server is temporarily offline.
Spam reports | Email is reported as spam.
Failed | Unable to send the message.



***

## 2. Email report

As a bot admin, you can also send a campaign report to your registered email.

To email a campaign report, follow these steps - 

1. In the **Outbound** tab, navigate to the desired campaign.
2. Click the more options icon > **Request report**. 

 ![](https://i.imgur.com/G7IzUvW.png)

The report will be sent to your registered email address as an attachment. Here is a sample screenshot of the report.

   ![](https://i.imgur.com/GYSk3ls.png)


The following table provides descriptions of each column of the report.

Column | Description
------ | -----------
Campaign ID | The unique ID for the campaign generated at Yellow.ai.
Campaign Name | The name provided for the campaign when creating.
Channel | The targeted channel for the campaign such as Email, Whatsapp, SMS and so on.
BotId | Bot ID associated with the campaign.
UserId | User contact details based on the channel. For example, WhatsApp phone number for Whatsapp, email ID for email campaign.
User Details | All the details of the bot user in the current campaign.
Template ID | Name of the template used to trigger messages for that particular campaign.
Sender ID | The phone number/email ID from which the messages were sent. Know how to configure sender IDs in Channels [Email](platform_concepts/channelConfiguration/email-outbound.md), [SMS](platform_concepts/channelConfiguration/sms-outbound-india.md), [WhatsApp](platform_concepts/channelConfiguration/whatsapp-configuration.md).
Status | Message delivery status.  Supported statuses for email: Scheduled, Processing, Sent, Dropped, Delivery delayed, Bounced, Delivered, Opened, Clicked, Unsubscribed, Spam reports, Failed. <br/>To know about each status, see [Delivery status descriptions](#12-message-delivery-status-descriptions).
Quick Reply Response | Applicable for interactive templates.<br/>Example : For Whatsapp templates with button, the quick reply response from the button will be captured against each user
Comments | Delivery state of the particular message.<br/>For FAILED messages, the error description will be shown. 
Scheduled Time | The start time of the campaign. 
Sent time | he time when the message is sent to the user.
Delivered time | The time when the message is delivered to the user (Applicable only for Whatsapp channel).
Read time | The time when the recipient read the message (Applicable only for Whatsapp channel).
Error | Error code in case of FAILED messages
UserDetails | User details fetched from the user profile used in the notification message. <br/>Examples: UserDetails.phone, 	UserDetails.firstName.

