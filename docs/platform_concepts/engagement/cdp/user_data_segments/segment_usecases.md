---
sidebar_label:  Segment use cases
title: Segment your user base according to different use cases
---

The segments you create should align with your specific use case. Here are some ideas to help you get started.


## Campaign specific use cases
You may frequently need to target users on specific dates or after a certain number of days from a particular date. In the following example, we will demonstrate how to create a date-based segment to accomplish such use cases.



### Drip campaign

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

### Birthday greetings

#### Usecase

- Sending out birthday greetings

<center><img src="https://i.imgur.com/7lFf46V.png" width="70%"/></center>

This segment is applicable only for properties of the Date type. When setting up the segment for a campaign that runs on June 10, 2022, the following considerations apply:

* Current Day: The segment will include users whose date matches the day when the segment is calculated, in this case, the 10th of any month.
* Current Month: The segment will include users whose date matches the month when the segment is calculated, in this case, June.
* Any Year: The segment will disregard the year, meaning all users with a date of June 10 (regardless of the year) will be targeted. 

Therefore, this segment will target all users with a date of June 10, irrespective of the year.







### Exclude users who opted out from campaigns

You might often want to exclude users who have opted out from all your campaigns. 

Exclude users who have opted out from all your campaigns. To achieve this:

   * Ensure that your opt-in data is up to date. This can be regularly updated through  [conversational data](/docs/platform_concepts/engagement/cdp/user_data/conv_in_builder), [CSV imports](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/import_users), [REST APIs](/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api)  to sync with your CRM.
   * Next, include a condition in your segment [segment](/docs/platform_concepts/engagement/cdp/user_data_segments/segments_overview)  where, "Opt-in is true”. This segment will exclude all users for whom the opt-in status is false or unknown.


  <center> <img src="https://i.imgur.com/xr4X98S.png" width="70%"/></center>

### Send discount vouchers to new users


The `createdAt` date can be useful for understanding how long users have been with your product or service. For example, you could segment users into the following groups:

* **New users**: Users who have been with your product or service for less than 30 days.
* **Active users**: Users who have been with your product or service for more than 30 days and have logged in in the past 30 days.
* **Inactive users**: Users who have been with your product or service for more than 30 days but have not logged in in the past 30 days.

Create a segment with users who have been with your product or service for less than 30 days.


<center><img src="/img/cdp/createdAt.png" width="70%"/></center>



## Highly targeted segments

### Segments with multiple conditions (and/or)

Segments can be created with multiple condition sets, allowing for more complex filtering based on multiple conditions. Each condition set consists of one or more individual conditions.

An individual condition typically consists of three components:

* **User property**: This is the specific property or attribute of the user that you want to use as a condition.
* **Operator**: The operator defines the relationship or comparison between the user property and the value.
* **Value**: The value represents the specific value or range that the user property is compared to.

By combining multiple condition sets and conditions, you can create segments that reflect more specific and granular criteria for targeting your users. This allows for more refined and customized messaging and engagement strategies.

:::info
Some operators might not have an associated value field.
:::

   <center><img src="https://i.imgur.com/URAzjop.png" width="70%"/></center>


For certain conditions, you can add multiple values by clicking the "+" button next to the value field. These values are treated as separate options and evaluated using the **OR** logic. If a user property matches any of the specified values, the condition is considered true. This allows for more flexibility in segmenting users based on specific criteria.


   <center><img src="https://i.imgur.com/bxJDJ6s.png" width="70%"/></center>


You can add more conditions to a condition set using **+ Add condition**. These conditions are connected with the "AND" operator, meaning that all conditions within the set must be true for the segment to be matched. Adding multiple conditions allows you to create more specific segments based on different criteria.

 <center><img src="https://i.imgur.com/PqeiHR7.png" width="70%"/></center>

A new condition set can be added by clicking on + Add condition set. Conditions sets are separated by **OR**

<center><img src="https://i.imgur.com/m6zBzmo.png" width="70%"/></center>

:::note
For a user to be a part of a segment, he must meet all the AND conditions of a condition set.
:::


### Create segment specific workflows

In bot conversations, you may want to display specific information to different sets of users. For example, when discussing pricing plans, you might want to show different plans based on the user's country. 


You can use the [Condition Node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-if--condition) to achieve this.

<center><img src="https://i.imgur.com/h75l167.png" width="70%"/></center>


### Customers nearing subscription expiry

 You can send personalized reminders customers to renew their subscriptions. For this, you can create a segment based on the filter "Subscription end date will be exactly 6 days later." This segment will include customers whose subscription expiration date is approaching within the next 6 days.



<center><img src="https://i.imgur.com/surY1EB.png" width="80%"/></center>

### Employees in a certain department 


Send training-related communications to junior employees in specific departments. Your filters for this segment might be: **Department is "Product" or "Engineering" AND Title includes "Junior" or "Associate"**.

<center><img src="https://i.imgur.com/tC3f2Qu.png" width="80%"/></center>

### Visitors who have opted in to receiving updates on email 

Create a segment of users who have opted to receive regular product updates via email. This segment will include users who have subscribed to updates and newsletters. To set up this segment, **use the filter "Email Subscription is true"**.


<center><img src="https://i.imgur.com/45FBZpB.png" width="80%"/></center>

### Potential leads

Create a segment of users who have visited your pricing page more than twice. This will allow you to reach out to them with offers or set up demos with your sales team.

<center><img src="https://i.imgur.com/9NYYn0L.png" width="80%"/></center>


