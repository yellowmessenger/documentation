---
sidebar_label: Manage user data
title: Manage user data
---


## Export user data

 You can download your entire user data or segment specific user data and use it wherever required. For example, you can update user details and import them again, and upload user data in a third-party system for your business use cases.

To download your entire user base, in All users, click **Actions** > **Download all user data**.

![](https://i.imgur.com/EPBeFUv.png)


To download users in a particular segment, select the desired **Segment** > **Actions** > **Download segment user data**.

![](https://i.imgur.com/0FIZgh7.png)

You will get a download link to your email. 


![](https://i.imgur.com/jNPgPuq.png)

***

## Delete user records

You can delete one or more users if required. However, you need to [export their data](#export-user-data) as a backup before deleting.


### Delete an individual user

1. Navigate to the user row and click on it to open user details page.

   ![](https://i.imgur.com/gwjVEnr.png)

2. Click **Delete**.
 
  ![](https://i.imgur.com/yzE8Ooq.png)


### Delete multiple user records

1. On the User 360 home page, select each user that you want to delete using the respective check boxes 
2. Click **Delete users**.

 
   ![](https://i.imgur.com/5sVQzmX.png)

:::note
* You can also use this process to delete an individual user. 
* Known issue:
   * When you select all entries and click **Delete**, it will delete the users displayed on the first page only. Users on subsequent pages will not be affected.
:::

### Delete all user records

Currently, there’s no direct way to delete all user records at once, as this option is restricted due to feature gating. 

To enable the **Delete all users** option temporarily for three days, you need to submit a request to the platform team via DevRev. Once enabled, you will find the option under the **Actions** drop-down.

   ![](https://i.imgur.com/vX1ntTY.png)




### Delete user through API

To delete user data using API, use [DELETE user API](https://documenter.getpostman.com/view/17583548/UVsEVUsg#73c5f32f-e6a5-4a3b-afbe-c17b7770d65b).

<!--
***  

## View user activity logs

  

User logs is a space for your to audit your user data. There are 3 types of logs that User 360 supports:


-  **CSV import**: This log appears whenever you [import users using a CSV file](/docs/platform_concepts/engagement/cdp/user_data/import_users). The associated *Download log* link contains details about the import process, that is, which records were imported, merged, or failed.
-  **Bulk users download**:  This log appears whenever you [export your user data](#export-user-data). Use the associated *Download log* to download the exported user data in a CSV file.
-  **Bulk user delete **: This log appears whenever you [delete your user data](#delete-user-data).

  

![](https://i.imgur.com/s86psKQ.png)

-->
