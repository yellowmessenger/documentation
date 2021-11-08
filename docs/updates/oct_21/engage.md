---
title: Engage Updates
sidebar_label: Engage
featured: true
---

### 1. Bulk Notifications API Available
 We can now support file(.csv) based API for sending bulk Notifications on various channels (upto 10000 notifs per API call). 
 The notifications will be run in batches. Delivery updates for individual notification will be available as postback url and reports and status of Batches can be seen in yellow.ai dashboard(Data Explorer - with msgID obtained)


 ### 2. Wildcards can be used in URLs to trigger Inbound notifications

Inbound URL Trigger should be able to handle URL wildcard:
• URLs like yellow.ai/search/* (will work for anything after yellow.ai/search/
• URLs like yellow.ai/*/blog will also work
![](https://i.imgur.com/xetg1HD.png)

### 3. Inbound Campaign performance metrics
You can now monitor how well your campaigns are performing using the campaign dashboard.
Metrics enabled:
- Overlay Widget Impressions → This is the no. of times the Widget is loaded. (n/a for “Chat Auto Popup Widget“)
- Overlay Widget Conversions → This is % of times the button is clicked. (n/a for “Chat Auto Popup Widget“)
- Chat Widget Impressions → This is the no. of times the Chat Auto Popup is loaded.
- Chat Widget Engagement → This is the % of times the Chat Auto Popup is clicked.


![](https://i.imgur.com/f22UnF8.png)

> Read more about managing campaigns through overview screen [**here**](https://docs.yellow.ai/docs/platform_concepts/engagement/inbound/gettingStarted/campaignsOverviewScreen/)

### 4. Audience CSV Upload Logs will be sent over email
 
When a CSV is uploaded in the audience/users table, the user uploading the CSV will receive an email with Audience CSV Upload Logs. These logs contain only those user records for which the upload failed along with the reason for failure.
Note: Records that are valid are uploaded successfully.
![](https://i.imgur.com/oUXxhs8.png)

### 5. Enablement of Truncate Button
 There is a truncate button now that deletes all user records in the table.
 ![](https://i.imgur.com/YHK6JuW.png)

 ### 6. Separation of Inbound & Outbound Engage
Now there are now two separate tabs for Inbound and Outbound Engage and Basic Info and Widget/Channel Selection Screens have been merged
![](https://i.imgur.com/TJfaNnl.png)

![](https://i.imgur.com/mu2aPjA.png)

![](https://i.imgur.com/rjDNEDb.png)




