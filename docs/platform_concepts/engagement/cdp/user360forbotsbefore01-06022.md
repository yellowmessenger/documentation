---
title: Migrate user data from from old module to User 360
sidebar_label: Migrate data to User 360
---



The new module User 360 has been introduced recently. It is enabled for all bots created after June 1, 2022.   


The old Users Module is being replaced with the new [User 360](/docs/platform_concepts/engagement/cdp/overview).

 
****

  

This document guides you how to migrate data from the older Users module to User 360.

  

* Old bots that has 0 records in their users module, will automatically see the new User 360 module and will require no data migration.

* Old bots that have records in the Users module, will see a Data Migration window.

:::note
 Data migration window will be open until 10 Oct, 2022. You will lose the old data post that.
:::
  

## Migrate data from the old version

  

:::note
You can ignore these steps if you do not wish to migrate the old data.
:::

  
Bots that have records in the old Users Module will see a data migration window.

:::note
 Data migration is a one time activity. Double check your property mappings.
:::

![](https://i.imgur.com/8uVMauk.png)

1. Before migrating, take a backup of your data using **Download data**.
2. Once the data is downloaded, click **Migrate data**. You will see the Data migration screen. 
3. Map Old user properties to the  New user properties.

   Under New user property, you will see [userId](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties#1-userid-as-a-property) and pre-defined [System properties](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties#system-user-properties).

* To create a [Custom property](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties#custom-user-properties), click **+ Add new user property**.

![](https://i.imgur.com/MiVymww.png)

  
  

* To know the data types supported in User 360, see [User property datatypes](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties#system-user-properties). 

The following mappings are not recommended as it might throw data incompatibility errors, and prevent from successful migration of data.


| Data type | Not recommended for <br/>New property |
| ---------------- | --------------------------------------------------------- |
| **Date** | Email, Number, Phone, Url |
| **Integer** | Email, Url, Date, DateTime |
| **List** | Email, Number, Phone, Url, Date, DateTime |
| **String** | -NA-|
| **Email** | Number, Phone, Url, Date, DateTime |

 
:::note
At least one property mapping is required move to the next step. 
:::

Once done, click on **verify**. On this screen you can review the old and new property mapping.

 
![](https://i.imgur.com/21jk3dW.png)

  
  

* After mappings, click on **Migrate**. You will be redirected to User 360.

### View migration status activity

To view the status of your migration activity, click [User logs](/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data). Here you can refer to the activity *Migrate Data*. 
   * If the status is *In Progress*, the migration is still going on. 
   * The status will change to *Completed* once the migration is done.

![](https://i.imgur.com/1yobIJF.png)

* To analyse the migration activity, click **Download log**. The log will be downloaded as CSV which will include the following:

   ![](https://i.imgur.com/QCCOrwr.png)
* **Summary**
   * Number of Records that were migrated as new users.
   * Number of Records for which migration failed (included below).
   * Number of Records that were merged into existing users.


* **Records for which migration failed** - 

   *  **BOT_ID**: Bot ID for which the CSV was uploaded.
   *  **REQUEST_PAYLOAD**: The user record for which an import was attempted but FAILED.
   *  **ERROR_PAYLOAD**: The error details due to which above user import FAILED:
      *  **invalidDataType**: Properties for which the wrong data type was passed.
      *  **invalidProperty**: Properties that do not exist in the user table.
   *  **LINE_NUMBER**:  The row number of the user record for which import FAILED.