---
title: User Data Migration from old module to User360
sidebar_label: User360 for Bots Created Before 01/06/22
---



The old Users Module is being replaced with the new [User 360](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview/).

> **User 360 had been enabled by default for all bots created after 01/06/2022.** 

This document can be referred to **migrate data from the older Users Module to User 360**.

* Old bots that had 0 records in their users module, will automatically see the new User 360 module and will require no data migration.
* Old bots that have records in their users module, will see a Data Migration window.

>Data migration window will be open till **30/10/2022**. After this, the old data will be lost.

## Data Migration

> **You may ignore these steps if you do not wish to migrate the old data.**

* Bots that had records in the old Users Module will see a data migration window.

![](https://i.imgur.com/8uVMauk.png)


* Before the migration process, you can take a backup of your data by clicking **Download data**. Once the data is downloaded, click **Migrate data**.
* Data migration screen will be displayed where Old user properties can be mapped to the **New user properties**.
* Under New user property,  [userId](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/user_id/) and pre-defined [System properties](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data/#system-user-properties) are displayed. 
* You can also create a [Custom property](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data/#custom-user-properties) by clicking **+ Add new user property**.


![](https://i.imgur.com/MiVymww.png)


* Read this [document](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data/#user-property-data-types) to know the data types supported in User 360. The following mappings are not recommended, as it might throw data incompatibility errors and prevent successful migration of data.





| **Old Property** | **New property with following data type not recommended** |
| ---------------- | --------------------------------------------------------- |
| **Date**             | Email, Number, Phone, Url                                 |
| **Integer**          | Email, Url, Date, DateTime                                |
| **List**                 | Email, Number, Phone, Url, Date, DateTime                                                          |
| **String**           | n/a                                                       |
| **Email**            | Number, Phone, Url, Date, DateTime                        |



* You must map at least one property to move to the next step. Once done, click on **verify**. On this screen you can review the old and new property mapping.

> Data migration is a one time activity. Double check your property mappings.

![](https://i.imgur.com/21jk3dW.png)


* After mappings, click on **Migrate**. You will be redirected to User 360. 
* To view the status of your migration activity,  click  [User logs](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data/#user-logs). Here you can refer to the activity “Migrate Data”. If the status is “In Progress”, the migration is still going on. The status will change to “Completed” once the migration is done.

![](https://i.imgur.com/1yobIJF.png)


* To analyse the migration activity,  click **Download log**. The log will be downloaded as CSV which will include the following:

     **Summary**:
    * Number of Records that were migrated as new users.
    * Number of Records for which migration failed (included below).
    * Number of Records that were merged into existing users.

* Records for which migration failed:
    * **BOT_ID** → Bot ID for which the CSV was uploaded.
    * **REQUEST_PAYLOAD** → The user record for which an import was attempted but FAILED.
    * **ERROR_PAYLOAD** → The error details due to which above user import FAILED:
        * `invalidDataType`: Properties for which the wrong data type was passed.
        * `invalidProperty`: Properties that do not exist in the user table.
    * **LINE_NUMBER** → The row number of the user record for which import FAILED.


![](https://i.imgur.com/QCCOrwr.png)
