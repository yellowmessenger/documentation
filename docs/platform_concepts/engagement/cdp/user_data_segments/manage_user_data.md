---
sidebar_label: Manage user data
title: Manage user data
---



### Export user data

 You can download your entire user data or a segment specific user data and use it wherever required. For example, you can update user details and import it again, and upload user data in a third-party system for your business use cases.

To download your entire user base, in All users, click **Actions** > **Download all user data**.

![](https://i.imgur.com/EPBeFUv.png)


To download users in a particular segment, select the desired **Segment** > **Actions** > **Download segment user data**.

![](https://i.imgur.com/0FIZgh7.png)

You will get a download link to your email. Alternatively, you can download it from **User logs** > Apply Bulk user download filter > Click on **Download log**.


![](https://i.imgur.com/jNPgPuq.png)

***

## Delete user data

You can delete one or more users if required. However, you need to [export their data](#export-user-data) as a backup before deleting.


To delete a single user, navigate to the user that you want to delete, click on the more options icon > **Delete user**.
 
  ![](https://i.imgur.com/28kG5jg.png)

To delete multiple users at a time, select each user that you want to delete and click **Delete users**.

   ![](https://i.imgur.com/nnB6VH2.png)


To delete user data using API, use [DELETE user API](https://documenter.getpostman.com/view/17583548/UVsEVUsg#73c5f32f-e6a5-4a3b-afbe-c17b7770d65b).


***  

## View user activity logs

  

User logs is a space for your to audit your user data. There are 3 types of logs that User 360 supports:


-  **CSV import**: This log appears whenever you [import users using a CSV file](/docs/platform_concepts/engagement/cdp/user_data/import_users). The associated *Download log* link contains details about the import process, that is, which records were imported, merged, or failed.
-  **Bulk users download**:  This log appears whenever you [export your user data](#export-user-data). Use the associated *Download log* to download the exported user data in a CSV file.

-  **Bulk user delete **: This log appears whenever you [delete your user data](#delete-user-data).

  

![](https://i.imgur.com/s86psKQ.png)


