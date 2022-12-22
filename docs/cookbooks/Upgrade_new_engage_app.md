---
title: Upgrade to New Engage Module (for app bots)
sidebar_label : Upgrade engage (App to Cloud)
---

App bots are now provided with an option to upgrade the Engage module by migrating all the campaign and audience data to the new engage module. 

## What's new in Engage - Cloud ?
### User 360 
#### *[Know more about User 360](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview)*
![](https://i.imgur.com/dFehW6I.png)

### Template manager
![](https://i.imgur.com/cEjUFmq.png)

### Inbound campaigns 
#### *[Know more about Inbound Campaigns](https://docs.yellow.ai/docs/platform_concepts/engagement/inbound/gettingStarted/launchingYourFirstInboundCampaign/)*
![](https://i.imgur.com/MexHCVf.png)



## What are the limitations?
1. Up to **5 audience table** will be migrated to cloud platform
1. **Segment details will not be migrated**. But you can download all the segment details once the migration is completed
1. **Scheduled campaigns (runs multiple times) will not be resumed**. You need to schedule the campaigns again from cloud UI.
1. **Function executions** using cron jobs will not be supported.


## Who cannot use this feature?
* Bots which has active "**cron jobs**" which runs functions executions will not be able to proceed with the migration process.
* In case of any **in-progress campaigns** you will not be allowed to process with migration. You can try once the in-progress campaigns are completed.


## Step by Step guide for migration process
#### Step 1: Login
Login to https://app.yellowmessenger.com and open your bot
#### Step 2: Open Engagement
Navigate to Engagement module and click on "upgrade to new platform" from top right corner.

![](https://i.imgur.com/iK8DUAJ.png)

#### Step 3: Start Migration
What's new slides will give you a glimpse of new features which will be available in Engage - cloud platform. Click on "start migration" to proceed.

![](https://i.imgur.com/nLhja7z.png)

#### Step 4: Wait for Migration progress
Migration window will be opened and the below data will be migrated by default.
1. Preferences details
3. Campaign reports and details

![](https://i.imgur.com/9nmccU3.png)

#### Step 5: Proceed User data Migration
* User data migration is optional.
* If you do not want to migrate the older audience table, you can give "skip" and start clean with new cloud  module by uploading the user data.
* If you want to migrate the user data to cloud, Click on start
#### Step 6: Select Audience tables to be migarted
You can select up to 5 audience table for migration.  Select and give next.

**`Note : Audience tables are sorted in ascending order based on number of rows present in each table.`**

Here, I have selected 5 tables which I would need to migrate to new platform.

![](https://i.imgur.com/RkzfnPx.png)


#### Step 7: Map your audeince tables properties to new properties
In cloud engage, we maintain single user database called CDP (User 360). Hence we need to merge the audience tables from app to CDP attributes.

[Learn more about CDP (User 360)](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview)

* From left side drop downs you can select you older column names.
* Right side properties are "default CDP properties".
* You can create new property as well and map your existing columns.
* Here, I need to map my older column "number" to "phone number" in new CDP property.

![](https://i.imgur.com/YGzyRzs.png)

Here, I have *link* and *offer code* as new columns which is not in default CDP properties.

Hence creating, new attribute by clicking on "add new property" and mapping the column.

![](https://i.imgur.com/C0bMC3u.gif)

#### Step 8: Complete User Data Migration 
Once the user data migration started, the progress will be shown as below

![](https://i.imgur.com/q7qXLT8.png)


Once the process is completed you can see this finish screen, where you can download the segment details and open Engage module in new platform.

![](https://i.imgur.com/9Z9i5I5.png)


#### Note: 
`You will get this screen only once to download segment details. Post migration as soon as you click on "Engagement" from left vertical tab, you will be redirected to cloud engage.`


## Few benefits of migrating to new cloud engage

1. You can use **User 360 module** which is helps you to unify your user data at single place and maintain rich profile across channels
1. Improvised outbound campaign **overview**.
1. **Whatsapp templates** can be created and submitted directly from yellow's Engage module instead of raising SUD or from facebook business manager.
1. Manage templates across channels (SMS, email, whatsapp, Viber)
1. You can use **inbound campaigns** module
1. You can run **Viber business outbound campaigns**