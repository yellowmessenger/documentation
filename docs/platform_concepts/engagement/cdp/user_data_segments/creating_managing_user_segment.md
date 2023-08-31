---
sidebar_label: Create user segments
title: Create user segments
---

## Create segments using user property filters

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


## Create segments using Events

Event-based user segments allow you to categorize and target specific groups of users based on their interactions with events. These are dynamic segments and help you tailor your marketing strategies and engagement efforts more effectively.

Event-based segmentation enables you to send targeted messages, offers, or content to users who have shown particular behaviors or engaged with specific events. This improves the relevance of your interactions and drives better engagement and conversions.

To create event-based segments:

1. Navigate to **User 360**.
2. Click **Add Segment**.
   <img src="https://i.imgur.com/WmouIvi.png" width="40%"/>
3.  In **Segment name**, enter a unique name for the segment.
4. Click **+Add condition** > Navigate to the **Events** tab.

   <img src="https://i.imgur.com/q073Soh.png" width="70%"/>

5. Choose the event based on which you want to create the segment. Search by event name to easily find the desired event.

6. You will see the following configuration options.

   | Purpose | Options | Description
   | ------- | ------ | -----------
   | Include/Exclude | <ul><li>Occurance</li><li>Didn't occur</li></ul> | Choose **Occurance** to include users who performed the chosen event; choose **Didn't occur** to exclude users that did not perform the chosen event.
   | operator | <ul><li>is</li><li>isn't</li><li>is greater than</li><li>is less than</li></ul> | Choose the desired operator for comparison.
   | No. of times | text box | Number of times the event has occurred.
   Duration |  <ul><li>today</li><li>yesterday</li><li>last week</li><li>this month</li><li>last month</li><li>on</li><li>after</li></ul> |  Time period for event occurrence.

7. Click **+Add another condition** to add multiple conditions if needed. 
8. Click **Add**. The segment is created in 20 minutes.

:::note
* You cannot create a segment that uses an event-based condition and combine it with a segment based on user properties, and vice versa.
* After creating an event-based segment, it may take up to 20 minutes for it to be visible on the user interface.
:::


## Create user segment when Importing CSV file

When importing a CSV file, you have the option to manually segment users. This allows you to create a user segment right during the import enabling you to efficiently categorize users as you bring in their records.

You can also create a segment during the import process. This means that you can create a user segment directly when importing a set of user records.


For more details, see Step 9 of [Import CSV file](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/import_users#step-2-import-csv-file).

***

**What next?**

* View created segments and know how to 