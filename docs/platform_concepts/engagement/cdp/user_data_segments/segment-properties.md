---
sidebar_label: Segment users using user properties
title: Create user segments using user property filters
---


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

:::note
Segments involving date, time, or date-time data types are not real-time; the user list updates at midnight when the cron job runs.
:::
***






**What next?**

* Once you've created a segment, [view users in the segment](/docs/platform_concepts/engagement/cdp/user_data_segments/manage_segments#view-segment-users) and know how to use the segment to [run targeted campaigns](/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign).
* [Edit segment condition or name](/docs/platform_concepts/engagement/cdp/user_data_segments/manage_segments#edit-user-segment) if needed. If you want to delete, check out [Delete segment](/docs/platform_concepts/engagement/cdp/user_data_segments/manage_segments#2-manually-delete-user-segment).