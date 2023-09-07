---
sidebar_label: Manage outbound campaigns
title: Manage outbound campaigns
---

You can access and view all the campaigns created for your organization on the Outbound page of the Engage module. This section provides a comprehensive overview of each campaign, including its name, status, scheduled dates, and performance metrics.


## Access Outbound campaigns

To access Outbound campaigns:

* Go to your project and navigate to the **Engage** module > **Outbound**.

   ![](https://i.imgur.com/bgE3xeX.png)


The Campaigns table provides a comprehensive overview of your outbound campaigns, including the status of each campaign.
   ![](https://i.imgur.com/hE1L0uF.png)


The following table provides descriptions of each column of the table.

Column | Description
------ | -----------
Name | Name of the campaign.
Status | Current status of the campaign. <ul><li><strong>Pending:</strong> The campaign has been scheduled and is awaiting preparation and sending at the scheduled time.</li><li><strong>Preparing:</strong> We initiate the process of finalizing the recipients for the campaigns 30 minutes before the scheduled execution time, using the segmentation logic that has been set up. In rare cases, when dealing with a considerably large segment size, this process may exceed the allocated 30 minutes.</li><li><strong>Failed:</strong> The campaign failed to execute or complete due to an issue. Please retry the campaign or reach out to support for assistance.</li><li><strong>Paused:</strong> The campaign has been paused. There are multiple cases in which campaigns can be paused. For example, when a WhatsApp template receives lowest rating. For additional information, please refer the tooltip by hovering over the status.</li><li><strong>In Progress:</strong> The campaign has initiated and is currently in progress.</li><li><strong>Completed:</strong> The campaign has been successfully completed. You can download the report or refer to the metrics available in the table for more information on delivery updates.</li><li><strong>Draft:</strong> The campaign has been saved as a draft for editing.</li></ul>
Channels | The communication channel used to send out the campaign, such as email, SMS, WhatsApp, or any other messaging channel. 
Success | The success rate indicates the success status of messages from the previous campaign execution and provides the overall success rate for the entire campaign. It also includes a breakdown of the count of messages sent, delivered, read and failed.<center><img src="https://i.imgur.com/D1477ji.png" width="40%"/></center>
Last executed | The most recent execution (date and time) of a recurring campaign. It provides information on the success status of messages from the previous execution and also displays the overall success for the entire campain.
Next execution time | The scheduled time for the next execution of the campaign. This is applicable for recurring campaigns.

:::note
The campaign data displayed on the Outbound page is refreshed automatically every five minutes. This ensures that you have the most up-to-date information regarding your campaigns at all times.
:::

***


## Filter campaigns

Campaign filters let you quickly narrow down the list of campaigns based on your specific requirements. You can filter campaigns by name, status and date-range.

To filter campaigns:

1. Navigate to **Engage** > **Outbound**.
2. Click **Filters**.

<center><img src="https://i.imgur.com/Q9hwXqJ.png" width="50%"/></center>

3. Configure your preferred filter condition. You can set one or more filters.

   * **Name**: Enter the name of the campaign you want to fetch. This will filter the campaigns based on the specified name.
   * **Status**: Select the desired status to filter campaigns. You can choose from options such as *Pending*, *Scheduled*, *Running*, *Completed*, *Failed*, or *Paused*. This will display campaigns that match the selected status.
   * **Date range**: Choose the duration for which you want to filter campaigns. You can specify a specific date range to narrow down the campaigns based on their execution or creation dates.

4. Click **Apply filter**.

:::note
You can clear selected filter(s) using **Clear filters**.
:::

You can download comprehensive reports for all campaigns you send out from Yellow.ai’s Engage module. You can use these reports to analyze campaign performance and see the in detailed report of errors (if any).

You can [view report directly on the UI](#view-report) or [download detailed report](#download-campaign-report).

***

## Pause or resume campaign

You can temporarily halt or restart a campaign from execution. When you pause a campaign, it stops sending messages and remains in a paused state until you decide to resume it. This can be useful when you need to make adjustments, review performance, or address any issues. Once you're ready, you can easily resume the campaign to continue sending messages to your intended recipients. Pausing and resuming campaigns gives you control and flexibility in managing your messaging activities.

* To pause a campaign, navigate to the desired campaign in the Outbound campaigns table and click on the **Pause** icon.

   <img src="https://i.imgur.com/0tAW75J.png"/>

* To resume a campaign that has been paused, navigate to the desired campaign and click on the **Resume** icon.

   <img src="https://i.imgur.com/OLLHake.png"/>


:::note
You cannot pause or resume a campaign that is in the Draft, Completed, or Failed state.
:::

***

### Download and analyse campaign report

The campaign report provides complete insights and data regarding the performance and results of your campaigns. By downloading the campaign report, you can access detailed information about campaign metrics, audience engagement, conversion rates, and more. This report serves as a valuable resource for analyzing the effectiveness of your campaigns and making data-driven decisions to optimize future marketing strategies.

To download the campaign report:

1. Navigate to **Engage** > **Outbound**, and click on the **Download** icon. 

   <img src="https://i.imgur.com/rf708FO.png"/>

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
| Campaign ID      | The unique ID generated for the campaign.                                                   |
| Campaign Name    | The name provided for the campaign when creating.                                                        |
| Channel          | The targeted channel for the campaign such as Email, Whatsapp, SMS, and so on.                          |
| BotId            | Bot ID associated with the campaign.                                                                     |
| UserId           | User contact details based on the channel. For example, WhatsApp phone number for Whatsapp, email ID for email campaign. |
| User Details     | All the details of the bot user in the current campaign.                                                 |
| Template ID      | Name of the template used to trigger messages for that particular campaign.                               |
| Sender ID        | The phone number/email ID from which the messages were sent. Learn how to configure sender IDs in Channels [Email](platform_concepts/channelConfiguration/email-outbound.md), [SMS](platform_concepts/channelConfiguration/sms-outbound-india.md), [WhatsApp](platform_concepts/channelConfiguration/whatsapp-configuration.md). |
| Status           | Message delivery status. Supported statuses for email: Scheduled, Processing, Sent, Dropped, Delivery delayed, Bounced, Delivered, Opened, Clicked, Unsubscribed, Spam reports, Failed. To know about each status, see [Delivery status descriptions](#delivery-status-for-different-channels). |
| Quick Reply Response | Applicable for interactive templates. Example: For Whatsapp templates with a button, the quick reply response from the button will be captured against each user. |
| Comments         | Delivery state of the particular message. For FAILED messages, the error description will be shown.     |
| Scheduled Time   | The start time of the campaign.                                                                          |
| Sent time        | The time when the message is sent to the user.                                                           |
| Delivered time   | The time when the message is delivered to the user (Applicable only for Whatsapp channel).               |
| Read time        | The time when the recipient read the message (Applicable only for Whatsapp channel).                     |
| Error            | Error code in case of FAILED messages.                                                                   |
| UserDetails      | User details fetched from the user profile used in the notification message. Examples: UserDetails.phone, UserDetails.firstName. |
