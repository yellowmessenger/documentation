---
sidebar_label: Manage user segments
title: Manage user segments
---



## 1. Create user segment


### Segment users based on user property filters

Segmenting users based on user property filters is a powerful technique that allows you to categorize and target specific groups of users within your system. You can create customized segments that align with your marketing goals using various user attributes and properties as filters. This method allows you to dynamically generate user lists, optimizing the impact of your campaigns and ensuring that your content resonates with the intended audience.

To create a user segment, follow these steps:

1. Navigate to **Engage** > **User 360**.
2. Click **Add Segment**.
   <img src="https://i.imgur.com/WmouIvi.png" width="40%"/>
3.  In **Segment name**, enter a unique name for the segment.

 <img src="https://i.imgur.com/6O2hgru.png" width="70%"/>

4. In **Conditions**, define the condition basis which you want to create the group. A condition consists of the following pattern.
 {property} {operator} {value}

Option | Description
--------- | --------
property | The attribute by which you want to create the segment. You can choose from a list of predefined and custom user properties along with `createdAt` (Timestamp of when the user record was created) and `updatedAt` (Timestamp of when the user record was recently updated).
operator | The condition operator that you want to use - is known, is not known, is, isn't, contains, does not contain.<br/><ul><li>**Operators for String datatypes**: is known, is not known, is, isn't, contains, does not contain </li><li>**Operators for Email/phone**: is known, is not known, is, isn't</li> <li>**Operators for date datatype**: is today, is known, is not known, is, is after, is above, was exact </li><li> **Operators for Boolean data type**: is known, is not known, is true, is not true, is false, is not false</li></ul>
value | Value of the expression. Use + to add multiple values. For example, create users whose city is either Bangalore or Mumbai.<img src="https://i.imgur.com/vdcl0je.png" width="90%"/>



5. To add more conditions, click **Add condition**.
  
  <img src="https://i.imgur.com/PnSrqvJ.png" width="80%"/>

To create more sophisticated segments you can [combine `and` with `or` conditions](/docs/platform_concepts/engagement/cdp/user_data_segments/segment_usecases#21-segments-with-multiple-conditions-andor). This makes segments more powerful and flexible.


Once you create a segment, you can view users in the segment, modify segment condition, download users of the segment, or delete it as explained in the following sections.


### Manually segment users when importing CSV file

When importing a CSV file, you have the option to manually segment users. This allows you to create a user segment right during the import enabling you to efficiently categorize users as you bring in their records.

You can also create a segment during the import process. This means that you can create a user segment directly when importing a set of user records.


For more details, see Step 9 of [Import CSV file](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/import_users#step-2-import-csv-file).




***



  
## 2. View segment users

To view users of a segment:

1. On the User 360 page, click on the segment that you want to view. 

2. If the list is long, you can use the **Search** box to find a specific segment quickly.

   ![](https://i.imgur.com/bvS0ofr.png)


You will see the list of users on the right side of the page.

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
 


