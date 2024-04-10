---
sidebar_label: Archive user segment
title: Delete user segment
---


Archiving a segment will not delete the user data associated with that segment. It  makes that particular segment unusable for new campaigns. Old campaigns will continue running as it is.


## Manually delete user segment

* To archive a segment, select the segment from the left panel, and click on **Actions** > **Archive segment**.

   ![](https://i.imgur.com/ml1Gh8j.png)

* To view all archived segments, click on the **Archived** tab in the left panel.

   ![](https://i.imgur.com/ORfiahI.png)
  

* To unarchive a segment, select any archived segment and click on **Unarchive** segment.

   ![](https://i.imgur.com/ORfiahI.png)
 


## Auto-deleting of unused segments

User segments that are not used in the last 60 days will be deleted automatically. A user segment is considered used if there is an activity (listed below).

1. Viewed the segment
2. Used in a campaign
3. Updated the segment

When there is an activity, the `updatedAt` column changes. A cron job runs every day to check if the column is not updated for any of the segments in the last 60 days and deletes it automatically.



