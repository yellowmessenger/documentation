---
sidebar_label: User segment
title: User segment
---



## 1. Create user segment

To create a user segment, follow these steps:

1. Navigate to **Engage** > **User 360**.
2. Click **Add Segment**.
   <img src="https://i.imgur.com/WmouIvi.png" width="50%"/>
3.  In **Segment name**, enter a unique name for the segment.

 <img src="https://i.imgur.com/6O2hgru.png" width="60%"/>

4. In **Conditions**, define the condition basis which you want to create the group. A condition consists of the following pattern.
 {property} {operator} {value}

Option | Description
--------- | --------
property | The attribute by which you want to create the segment. You can choose from a list of user properties such as first name, last name, city, language, and so on.
operator | The condition operator that you want to use - is known, is not known, is, isn't, contains, does not contain.
value | Value of the expression. Use + to add multiple values. For example, create users whose city is either Bangalore or Mummbai.![](https://i.imgur.com/vdcl0je.png)


5. To add more conditions, click **Add condition**.
  
   ![](https://i.imgur.com/PnSrqvJ.png)

To create more sophisticated segments you can [combine ‘and’ with ‘or’ conditions](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/targeted_segments). This makes segments more powerful and flexible.


Once you create a segment, you can view users in the segment, modify segment condition, download users of the segment, or delete it as explained in the following sections.

***



  
## 2. View segment users

To view users of a segment, on the User 360 page, click on the segment. 

If the list is long, use the **Search** box to fetch for a specific segment.

![](https://i.imgur.com/bvS0ofr.png)


You will see the list of users on the right.

![](https://i.imgur.com/wrVY5eE.png)

***

## 3. Edit user segment

To modify a segment's name or condition:

1. Click on **Actions** > **Edit segment**.

   ![](https://i.imgur.com/du1KLbt.png)

2. Edit the required details and **Save** it.

:::note
When the conditions of the segment are edited, the users that show up in the segment might change based on the new condition.
:::

***

## 4. Download segment users

To download users of a segment:
1. Click **Actions** > **Download segment user data**.

   ![](https://i.imgur.com/tMtITgm.png)

2. You will get an email with the download link. Click on the link. The file downloads as a CSV file. 

   ![](https://i.imgur.com/mOqzgWm.png)

The file contains complete details of each user that is available in the database.

   ![](https://i.imgur.com/ECyBtOn.png)


Alternatively, you can also download the user details using **User logs** > **Download log**.

![](https://i.imgur.com/DJVTeUz.png)

<img src="https://i.imgur.com/WlV8OQD.png" width="60%"/>

***
 
## 5. Archive user segment

Archiving a segment will not delete the user data associated with that segment. It  makes that particular segment unusable for new campaigns. Old campaigns will continue running as it is.


### 5.1 Auto-deleting of unused segments

User segments that are not used in the last 60 days will be deleted automatically. A user segment is considered used if there is an activity (listed below).

1. Viewed the segment
2. Used in a campaign
3. Updated the segment

When there is an activity, the `updatedAt` column changes. A cron job runs every day to check if the column is not updated for any of the segments in the last 60 days and deletes it automatically.


### 5.2 Manually delete user segment

* To archive a segment, select the segment from the left panel, and click on **Actions** > **Archive segment**.

   ![](https://i.imgur.com/ml1Gh8j.png)

* To view all archived segments, click on the **Archived** tab in the left panel.

   ![](https://i.imgur.com/huCOEOJ.png)
  


  

* To unarchive a segment, select any archived segment and click on **Unarchive** segment.

   ![](https://i.imgur.com/OvBSbKU.png)
 


