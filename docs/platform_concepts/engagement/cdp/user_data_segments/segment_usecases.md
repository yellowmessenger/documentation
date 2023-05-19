---
sidebar_label:  Segment use cases
title: Segment your user base according to different use cases
---

The segments you create should align with your specific use case. Here are some ideas to help you get started.


## 1. Campaign specific use cases
You may frequently need to target users on specific dates or after a certain number of days from a particular date. In the following example, we will demonstrate how to create a date-based segment to accomplish such use cases.



### 1.1 Drip campaign

#### Usecase
- Reaching out to employees who have completed seven days since date of joining.
- Reaching out to users who signed up seven days ago.

These segments target users within a specific timeframe relative to a particular date.


   <center><img src="https://i.imgur.com/rK1T5sd.png" width="70%"/></center>

To create this type of segment, you can use properties that are of the Date or Date-time data type. The available operators for selection are:

- is was exactly
- will be exactly
- in the last
- in the next

### 1.2 Birthday Greetings

#### Usecase
- Sending out birthday greetings

<center><img src="https://i.imgur.com/7lFf46V.png" width="70%"/></center>

This segment is applicable only for properties of the Date type. When setting up the segment for a campaign that runs on June 10, 2022, the following considerations apply:

* Current Day: The segment will include users whose date matches the day when the segment is calculated, in this case, the 10th of any month.
* Current Month: The segment will include users whose date matches the month when the segment is calculated, in this case, June.
* Any Year: The segment will disregard the year, meaning all users with a date of June 10 (regardless of the year) will be targeted. 

Therefore, this segment will target all users with a date of June 10, irrespective of the year.







### 1.3 Exclude users who have opted out from campaigns

You might often want to exclude users who have opted out from all your campaigns. Doing this is simple:

1. Ensure that your opt-in data is up to date. This can be regularly updated through [conversational data](/docs/platform_concepts/engagement/cdp/user_data/conv_in_builder), by uploading fresh data through [CSV](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/import_users), or by using [REST APIs](/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api) to sync with your CRM.
2. Include a condition in your [segment](/docs/platform_concepts/engagement/cdp/user_data_segments/segment_usecases) where, “Opt-in is true”. This segment will exclude all users for whom the opt-in is either false or unknown.

   <img src="https://i.imgur.com/xr4X98S.png" width="60%"/>



## 2. Highly targeted segments

### 2.1 Segments with multiple conditions (and/or)

Segments can be created with multiple condition sets, allowing for more complex filtering based on multiple conditions. Each condition set consists of one or more individual conditions.

An individual condition typically consists of three components:

* **User property**: This is the specific property or attribute of the user that you want to use as a condition.
* **Operator**: The operator defines the relationship or comparison between the user property and the value.
* **Value**: The value represents the specific value or range that the user property is compared to.

By combining multiple condition sets and conditions, you can create segments that reflect more specific and granular criteria for targeting your users. This allows for more refined and customized messaging and engagement strategies.

:::info
Some operators might not have an associated value field.
:::

   <img src="https://i.imgur.com/URAzjop.png" width="70%"/>


For certain conditions, you can add multiple values by clicking the "+" button next to the value field. These values are treated as separate options and evaluated using the **OR** logic. If a user property matches any of the specified values, the condition is considered true. This allows for more flexibility in segmenting users based on specific criteria.


![](https://i.imgur.com/bxJDJ6s.png)


You can add more conditions to a condition set using **+ Add condition**. These conditions are connected with the "AND" operator, meaning that all conditions within the set must be true for the segment to be matched. Adding multiple conditions allows you to create more specific segments based on different criteria.

   ![](https://i.imgur.com/PqeiHR7.png)

A new condition set can be added by clicking on + Add condition set. Conditions sets are separated by **OR**

![](https://i.imgur.com/m6zBzmo.png)

:::note
For a user to be a part of a segment, he must meet all the AND conditions of a condition set.
:::


### 2.2 Customers nearing subscription expiry

These customers are nearing their subscription expiry date. To remind them to renew their subscription, you can create a segment with filters such as "Subscription End Date will be exactly 6 days later." This segment will include customers whose subscription is about to expire within the next 6 days, allowing you to send them targeted reminders.



   ![](https://i.imgur.com/surY1EB.png)

### 2.3 Employees in a certain department 

You might want to send out communication related to training activity to junior employees from a certain department. Your filters here might be: `Department is "Product" or "Engineering" AND Title **includes** "Junior" or "Associate"`

   ![](https://i.imgur.com/tC3f2Qu.png)

### 2.4 Visitors who have opted in to receiving updates on email 
You might want to create a segment of users whom you can regularly share content with via email. This segment will consist of users who have opted in to receive updates and newsletters. To set up this segment, you can use the filter "Email Subscription is true." By targeting this segment, you can ensure that your email communications reach the users who are interested in receiving your content.







   ![](https://i.imgur.com/45FBZpB.png)

### 2.5 Potential leads 
You can create a segment of users who have visited your pricing page more than twice. This segment allows you to specifically target users who have shown a significant interest in your pricing information. By doing so, you can give them a gentle reminder and provide incentives such as special offers or the opportunity to schedule a demo with your sales team. To set up this segment, you can use the filter "Pricing Page visited more than twice."




   ![](https://i.imgur.com/9NYYn0L.png)


