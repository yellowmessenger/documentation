---
sidebar_label:  Segment use cases
title: Create segments for different use cases
---

The segments you create should be specific to your use case. Here are some ideas to get you started:

## 1. Campaign specific use cases
You might often want to reach out to users on a particular date, or after they have completed a certain number of days from that particular date. Below we will show you how you can create date-based segment to achieve such use cases.

### 1.1 Drip campaign

Usecase:
- Reaching out to employees who have completed 7 days since date of joining.
- Reaching out to users who signed up 7 days back.

Such segments target users who fall within a certain range from a particular date.

![](https://i.imgur.com/rK1T5sd.png)

This sort of a segment can be created using properties that are of Date or DateTime data type.
The operator that can be selected are:
- is was exactly
- will be exactly
- in the last
- in the next

### 1.2 Birthday Greetings

Usecase:
- *Sending out Birthday Greetings!*

![](https://i.imgur.com/7lFf46V.png)

This segment can be set up only for Date type properties. If the campaign runs on 10th June 2022:
- Current Day → Picks the day of when the segment is calculated, ie, 10th
- Current Month → Picks the month of when the segment is calculated, ie, June
- Any Year → Ignores the Year

Therefore, all users with Date June 10, (regardless of year), will be targeted.


### 1.3 Exclude users who have opted out from campaigns

You might often want to exclude users who have opted out from all your campaigns. Doing this is simple:

- First ensure that your opt-in data is up to date. This can be regularly updated through [conversational data](/docs/platform_concepts/engagement/cdp/user_data/conv_in_builder), by uploading fresh data through [CSV](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/import_users), or by using [REST APIs](/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api) to sync with your CRM.
- Next, you can include a condition in your [segment](/docs/platform_concepts/engagement/cdp/user_data_segments/segment_usecases) where, “Opt-in is true”. This segment will exclude all users for whom the opt-in is either false or unknown.

<img src="https://i.imgur.com/xr4X98S.png" width="60%"/>



## 2. Highly targeted segments

### 2.1 Segments with multiple conditions (and/or)

A segment can be made up of multiple **condition sets**, which in turn can be made up of multiple **conditions**.

A single condition looks something like this, and in most cases is made up of a **user property**, an **operator** on that property and a **value field** associated with that operator. 

:::info
Some operators might not have an associated value field.
:::

![](https://i.imgur.com/URAzjop.png)

Depending on the data type of the user property and the type of operator, for some conditions you will be able to add multiple values by clicking on `+` next to the value field. These values will be separated by **OR**

![](https://i.imgur.com/bxJDJ6s.png)

Another condition can be added within a condition set by clicking + Add condition. Conditions within a condition set are separated by **AND**

![](https://i.imgur.com/PqeiHR7.png)

A new condition set can be added by clicking on + Add condition set. Conditions sets are separated by **OR**

![](https://i.imgur.com/m6zBzmo.png)

:::note
For a user to be a part of a segment, he must meet all the AND conditions of a condition set.
:::


### 2.2 Customers nearing subscription expiry

These are customers whose subscription expiry date is nearing. You can send out reminders to this group to renew their subscription. Your filters for this segment might be something like: `Subscription End Date will be exactly 6 days later.`

![](https://i.imgur.com/surY1EB.png)

### 2.3 Employees in a certain department 
You might want to send out communication related to training activity to junior employees from a certain department. Your filters here might be: `Department is "Product" or "Engineering" AND Title **includes** "Junior" or "Associate"`

![](https://i.imgur.com/tC3f2Qu.png)

### 2.4 Visitors who have opted in to receiving updates on email 
You might want to create a group of users who you might to regularly share content with, over email. Your filters here might be: `Email Subscription is true`

![](https://i.imgur.com/45FBZpB.png)

### 2.5 Potential leads 
You could create a segment of users who have visited your pricing page more than twice. Then you can give them a little nudge and incentivise them with an offer or set up a demo with your sales team. Your filters here might be: `Pricing Page visited more than twice`

![](https://i.imgur.com/9NYYn0L.png)


