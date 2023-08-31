---
sidebar_label: Manage user segments
title: Manage user segments
---


## View segment users

To view users of a segment:

1. On the User 360 page, click on the segment that you want to view. 

2. If the list is long, you can use the **Search** box to find a specific segment quickly.

   ![](https://i.imgur.com/bvS0ofr.png)


You will see the list of users on the right side of the page.

   ![](https://i.imgur.com/wrVY5eE.png)

***

## Edit user segment

To modify a segment's name or condition:

1. Click on **Actions** > **Edit segment**.

   ![](https://i.imgur.com/du1KLbt.png)

2. Edit the required details and **Save** it.

:::note
When the conditions of the segment are edited, the users that show up in the segment might change based on the new condition.
:::

***

## Download segment users

To download users of a segment:
1. Click **Actions** > **Download segment user data**.

   ![](https://i.imgur.com/tMtITgm.png)

2. You will get an email with the download link. Click on the link. The file downloads as a CSV file. 

   ![](https://i.imgur.com/mOqzgWm.png)

The file contains complete details of each user that is available in the database.

   ![](https://i.imgur.com/ECyBtOn.png)


***
 
## Archive user segment

Archiving a segment will not delete the user data associated with that segment. It  makes that particular segment unusable for new campaigns. Old campaigns will continue running as it is.


### 1. Auto-deleting of unused segments

User segments that are not used in the last 60 days will be deleted automatically. A user segment is considered used if there is an activity (listed below).

1. Viewed the segment
2. Used in a campaign
3. Updated the segment

When there is an activity, the `updatedAt` column changes. A cron job runs every day to check if the column is not updated for any of the segments in the last 60 days and deletes it automatically.


### 2. Manually delete user segment

* To archive a segment, select the segment from the left panel, and click on **Actions** > **Archive segment**.

   ![](https://i.imgur.com/ml1Gh8j.png)

* To view all archived segments, click on the **Archived** tab in the left panel.

   ![](https://i.imgur.com/huCOEOJ.png)
  

* To unarchive a segment, select any archived segment and click on **Unarchive** segment.

   ![](https://i.imgur.com/OvBSbKU.png)
 


