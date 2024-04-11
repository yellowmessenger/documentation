---
sidebar_label: Outbound campaign reports
title: Outbound campaign reports
---

You can monitor and track the progress and effectiveness of your campaigns. Additionally, you have the option to view or download campaign reports for further analysis and insights. 


### View campaign report

The campaign report provides comprehensive insights and data regarding the performance and results of your campaigns. This helps conveniently monitor and assess the performance of your outbound campaigns without the hassle of downloading and analyzing CSV reports.


To view the performance of an outbound campaign, follow these steps:

1. In the **Engage** section, click **Outbound**.
2. Click on the **Campaign analytics** of the campaign for which you want to view the report.

   ![](https://i.imgur.com/JGXoO1k.png)



You can also see the detailed break-up of the messages sent, delivered, and read.

   ![](https://i.imgur.com/O5EyTBM.png)

#### Performance

This section showcases the count of messages sent, failed, and goals achieved.

KPI | Description
---- | ---------
Sent | The total number of messages sent from the campaign.
Failed | The total number of messages that did not deliver successfully. 
Goals | The total number of goals accomplished during the campaign. 


The Performance section also includes the delivery status funnel chart, each status is explained in the following section.

#### Message delivery status

The following table provides descriptions of different delivery status of Outbound report.

Delivery status | Description
--------------- | -----------
Triggered | Message has been sent to the downstream service and is yet to send from there.
Scheduled | Message has been queued to be sent. For example, single tick on Whatsapp.
Sent | Message has been sent. For example, single tick on WhatsApp.
Delivered | Message has been delivered. For example, double tick on WhatsApp. 
Read | Message has been read. On Whatsapp this is trackable only when end-user has blue ticks - read receipt turned on. This status includes both messages that have been read and messages that have been replied to by the recipient.
Dropped | Report from the email server when bounce, unsubscribe, or spam occurs.
Bounced | An error while sending the email for several reasons such as the email address doesn't exist, the recipient's inbox being full, poor sender reputation, server outages, and so on.
Unsubscribed | User has opted out of receiving emails from the brand.
Delivery delayed | Message sending got delayed for reasons such as servers are overloaded, and the recipient's mail server is temporarily offline.
Spam reports | Email is reported as spam.
Failed | Unable to send the message.
malformed |  This occurs when essential properties in your template, such as the phone number or other user property, are not available for some users. 

#### Campaign delivery status by messaging channels

The following table lists the campaign delivery status for different messaging channels.

Channel | Statuses
--------- | -------
WhatsApp | Scheduled, Processing, Sent, Delivered, Read, and Failed.
SMS | Scheduled, Sent, Delivered, and Failed.
Email | Scheduled, Processing, Sent, Dropped, Delivery delayed, Bounced, Delivered, Opened, Clicked, Unsubscribed, Spam reports, and Failed.
Mobile push | Scheduled, Sent, Delivered, Read, and Failed.


#### Campaign details

Name | Description
---- | -----------
Campaign type | Type if the campaign - Outbound.
Channels sent on | Channel through which the campaign was sent.
Segment name | Name of the segment.
Schedule type | Occurance of the campaign - once or recurring.
Scheduled on |  Date and time when the campaign was sent.
Campaign progress | Displays the history of the campaign, including details such as the creator, scheduled execution time, campaign execution start, and successful processing of all audiences.

***

### Download and analyse campaign report

The campaign report provides complete insights and data regarding the performance and results of your campaigns. By downloading the campaign report, you can access detailed information about campaign metrics, audience engagement, conversion rates, and more. This report serves as a valuable resource for analyzing the effectiveness of your campaigns and making data-driven decisions to optimize future marketing strategies.

To download the campaign report:

1. Navigate to **Engage** > **Outbound**, and click on the **Download** icon. 

   <img src="https://i.imgur.com/9OWBvTe.png"/>

   * If you are a yellow.ai domain user, you will receive a Slack notification prompting you to download the report.<br/><br/>
    
    <center><img src="https://i.imgur.com/sN6et6X.png" width="50%"/></center>

   * For non-domain users, an email will be sent containing a download option.

2. Open the email or Slack message and click on the provided link. The link opens and you will see a Download button.
3. Click on the Download button to save the campaign report as a CSV file on your device.
4. Click on the **Download** button. The report will be downloaded as a CSV file.

For detailed information on how to understand campaign report, see the following section.


#### Understanding the downloaded campaign report

| Column           | Description                                                                                              |
|------------------|----------------------------------------------------------------------------------------------------------|
| Campaign ID      | The unique ID generated for the campaign.                                                                |
| Campaign Name    | The name provided for the campaign when creating.                                                        |
| Channel          | The targeted channel for the campaign such as Email, Whatsapp, SMS, and so on.                           |
| BotId            | Bot ID associated with the campaign.                                                                     |
| UserId           | User contact details based on the channel. For example, WhatsApp phone number for Whatsapp, email ID for email campaign. |
| User Details     | All the details of the bot user in the current campaign.                                                 |
| Template ID      | Name of the template used to trigger messages for that particular campaign.                              |
| Sender ID        | The phone number/email ID from which the messages were sent. Learn how to configure sender IDs in Channels [Email](platform_concepts/channelConfiguration/email-outbound.md), [SMS](platform_concepts/channelConfiguration/sms-outbound-india.md), [WhatsApp](platform_concepts/channelConfiguration/whatsapp-configuration.md). |
| Status           | Message delivery status. Supported statuses for email: Scheduled, Processing, Sent, Dropped, Delivery delayed, Malformed, Bounced, Delivered, Opened, Clicked, Unsubscribed, Spam reports, Failed. To know about each status, see [Delivery status descriptions](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/outbound-report#message-delivery-status). |
| Quick Reply Response | Applicable for interactive templates. Example: For Whatsapp templates with a button, the quick reply response from the button will be captured against each user. |
| Comments         | Delivery state of the particular message. For FAILED messages, the error description will be shown.      |
| Scheduled Time   | The start time of the campaign.                                                                          |
| Sent time        | The time when the message is sent to the user.                                                           |
| Delivered time   | The time when the message is delivered to the user (Applicable only for Whatsapp channel).               |
| Read time        | The time when the recipient read the message (Applicable only for Whatsapp channel).                     |
| Goal achieved	 | Indicates whether the set goal was achieved (True) or not (False).                                       |
| Goal achieved at | Timestamp when the goal was achieved in Month DD, YYYY hh:mm AM/PM.                                      |
| Error            | Error code in case of FAILED messages.                                                                   |
| UserDetails      | User details fetched from the user profile used in the notification message. Examples: UserDetails.phone, UserDetails.firstName. |
