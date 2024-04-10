---
title: Engage overview dashboard
sidebar_label: Engage dashboard
---

The Engage dashboard offers a comprehensive summary of all campaigns and user activities in a single view. It provides a quick overview of the daily/weekly performance of your campaigns, enabling you to plan for enhanced engagement and improved conversational experiences for your end users. 

For a better experience, see [Use conversation starter templates](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/whatsapptemplate#2-add-quick-replies-in-whatsapp-template).

These metrics provide insights into your marketing, promotional, or other campaigns and showcase the growth of your user base and profile completeness.


To access Engage Overview Dashboard, in the left navigation bar, click **Engage** > **Overview**.

   ![](https://i.imgur.com/0Ifz43Z.png)

The following sections prvides different KPIs that you can monitor on the Engage Dashboard.

***

## 1. User data

This report provides a snapshot of users added to User 360 and the overall profile completeness percentage. Profile completeness refers to how much users' information is available on the yellow.ai's platform. It considers all the user properties configured for the org.

   ![](/img/cdp/userdata.png)


The following are the different KPIs of the User data report:

* **Total users**: The total number of users available in User 360.
* **Profile completeness**: The average completeness of the profile information (based on the values available for user attributes) of the total users on User 360.
* **Current period MRU**: The number of unique end-user profiles or user records in User360 to whom a campaign has been sent within a given calendar month. Each user is counted only once per month, regardless of the number of campaigns they have received.
* **User split**: Shows the count of users for which a specific user property is available across the user base. For example, to see the number of users with  `userId`(identified users), click on the **User split** drop-down and choose `userId`.

If an attribute is available for the user, the Split considers it as a known category. For some system attributes, the split is shown based on the standard unique values.


<center><img src="https://i.imgur.com/bPLzOqP.png" width="30%"/></center>

### 1.1 Total MRU

The Total MRU (Monthly Reached User) card shows the count of unique users in User360 to whom at least one campaign has been sent out in each calendar month. This graph provides an overview of the monthly reach and engagement with users. It counts each user only once per month, regardless of the number of campaigns they have been targeted with.

:::info
#### MRU Pricing
Pay for the Value You Receive with MRU Pricing

Yellow.ai charges businesses based on the MRU count. With MRU pricing, you are billed according to the number of MRUs, ensuring that you pay only for the value you receive. Each user is counted once per month, regardless of the number of campaigns they engage with. This transparent pricing model allows you to optimize costs and align your expenses with the actual value delivered by Yellow.ai.
:::

   ![](/img/cdp/mru.png)

This includes campaigns sent via the following channel:
* SMS
* Email
* Mobile Push Notification, and 
* WhatsApp.

:::note
Deleted or archived individuals are still counted in the total number of Monthly Reached Users if they were reached since the last billing date.
If a deleted user is recreated, they will be counted as a new user, even if they have the same userId.
:::


***

## 2. Outbound

This section provides a snapshot of the engagements through campaigns and Notification APIs for the last seven days. You can use the calendar box to change date-rage and a maximum of one-month duration is supported.

### 2.1 Campaign summary

This provides an overview of the total number of campaigns executed and the total number of notifications sent out from those campaigns in the chosen duration. Channels are colour coded to easily distinguish different channels.

<center><img src="https://i.imgur.com/Vyj5Jzr.png" width="600"/></center>


The following are the different KPIs of the Campaign summary report:

* **Campaigns**:  The number of outbound campaigns executed from Engage in that specific duration.
* **Notifications**: The total number of notifications executed from Outbound campaigns or the Notification API in that specific duration.

By default, you will the summary report across all channels. You can choose to see the report of your preferred channels. 

To see channel specific data, click on the channel name. Channels with black font are considered for the report and greyed-out ones are hidden as shown below.

<center><img src="https://i.imgur.com/VPaaw4i.png" width="600"/></center>



### 2.2 Engagement performance

Engagement performance refers to the effectiveness and efficiency of marketing campaigns in achieving their goals and objectives.

It shows the total number of notifications sent and the total notifications read. For SMS, it just considers the delivered messages and for WhatsApp, it considers the messages that were sent successfully. Hence, it differs from channel to channel based on the sent state confirmed.

<center><img src="https://i.imgur.com/lwikP5E.png" width="600"/></center>



The following are the different KPIs of the Engagement performance report:

* **Sent**: Total number of notifications sent out through outbound campaigns or Notification API in a specific duration.
* **User impressions**: Number of users who read those messages.

:::note
If a user has disabled the *Read Receipt* privacy settings, the impression cannot be identified as the last delivery status for the notification is `Delivered` instead of `Read`.
:::

Click on the *Current* or *Previous* to see the data for the current and previous week respectively.

<center><img src="https://i.imgur.com/nlp7xDo.png" width="600"/></center>

## 3. User trends

User trends refer to the behaviour that users exhibit. These trends include the count of users added, unique active users, user event occurrences, and users opted in/opted out. This information helps in improving your products or services and keeps your users engaged.

![](https://i.imgur.com/8MGdqaH.png)

* **Users added**: The total number of users added in the chosen duration.
* **Unique active users**: Total number of unique users who used the bot for the chosen duration.
* **User event occurrence**: The total number of user events triggered for the chosen duration.
* **Users opted in**: The total number of users who have explicitly given permission to use their personal information to receive marketing and promotional messages from your organisation.
* **Users opted out**: The total number of users who have revoked their permission from receiving marketing and promotional messages.

:::note
By default, a user is opted-out If no opt-in preference is specified when adding the user and will be updated when the user opts in.
:::


