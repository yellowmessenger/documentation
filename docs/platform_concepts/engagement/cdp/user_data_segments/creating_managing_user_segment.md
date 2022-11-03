---
sidebar_label: User segmentation
title: User segmentation
---

## 1. Introduction

A segment is grouping of users based on some common characteristics. You need to define a condition on what basis you want to group your users. Segments are dynamic. Hence, according to the condition set, customers will be added to the segment automatically whenever user updates to match those conditions.


For example, users interested in a particular use case, users who have visited your pricing page, users in a particular department, users whose renewal data is nearing, etc.

It is recommended to create segments for different conditions on basis which you want to target them. For example, users interested in a particular use case, users who have visited your pricing page, users in a particular department, users whose renewal data is nearing, etc.

It is recommended to segment all your user base so that you can filter and send messages to your preferred user  groups, so you can send them targeted messages. For example, you could create a segment of trial users and send them onboarding messages.


#### Sample use cases

The segments you create should be specific to your use case. Here are some ideas to get you started:
 
-  **Customers nearing subscription expiry**: These are customers whose subscription expiry date is nearing. You can send out reminders to this group to renew their subscription. 
> Sample filter setting:  Subscription End Date will be exactly 6 days later.

  
-  **Employees in a certain department**: You might want to send out communication related to a training activity to junior employees from a certain department. 
> Sample filter setting: Department is "Product" or "Engineering" AND Title **includes** "Junior" or "Associate".

-  **Visitors who have opted in to receive updates on email**: Create a group of users to whom you want to regularly share content with, over email. 
> Sample filter setting: Email Subscription is true.

-  **Potential leads**: Create a segment of users who have visited your pricing page more than twice. Give them a little nudge and incentivise them with an offer or set up a demo with your sales team. 
> Sample filter setting: Pricing Page visited more than twice.

  
  

## 2. Create a segment

To create a segment, follow these steps:

1. Navigate to **Engage** > **User 360**.
2. Click **Add Segment**.
   <img src="https://i.imgur.com/WmouIvi.png" width="50%"/>
3.  In **Segment name**, enter a unique name for the segment.

 ![](https://i.imgur.com/6O2hgru.png)

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

  

## 3. Manage segments

Once you create a segment, you can view users in the segment, modify segment condition, download users of the segment, or delete it if not required.
  
### 3.1 View segment users 
To view users of a segment, on the User 360 page, click on the segment. 

You will see the list of users on the right.

![](https://i.imgur.com/wrVY5eE.png)

### 3.2 Edit segment

To modify a segment's name or condition:

1. Click on **Actions** > **Edit segment**.

![](https://i.imgur.com/du1KLbt.png)

2. Edit the required details and **Save** it.

:::note
When the conditions of the segment are edited, the users that show up in the segment might change based on the new condition.
:::

### 3.3 Download segment users

To download users of a segment:
1. Click **Actions** > **Download segment user data**.

![](https://i.imgur.com/tMtITgm.png)

2. You will get an email with the download link. Click on the link. The file downloads as a CSV file. 

![](https://i.imgur.com/mOqzgWm.png)

The file contains complete details of each user that is available in the database.

![](https://i.imgur.com/ECyBtOn.png)


Alternatively, you can also download the user details using **User logs** > **Download log**.

![](https://i.imgur.com/DJVTeUz.png)

![](https://i.imgur.com/WlV8OQD.png)


 
### 3.4 Archive segment

Archiving a segment will not delete the user data associated with that segment. It  makes that particular segment unusable for new campaigns. Old campaigns will continue running as it is.

To archive a segment, select the segment from the left panel, and click on **Actions** > **Archive segment**.

![](https://i.imgur.com/ml1Gh8j.png)

To view all archived segments, click on the **Archived** tab in the left panel.

![](https://i.imgur.com/huCOEOJ.png)
  


  

To unarchive a segment, select any archived segment and click on **Unarchive** segment.

![](https://i.imgur.com/OvBSbKU.png)
 