---
sidebar_label: Targeted Segments
title: Create Targeted Segments Using And/Or Conditions
---

Combining “and” with “or” conditions allows you to create more sophisticated groups users. It also allows you to be more flexible with your [segments](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment).

### Creating multiple conditions using and/or

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

:::warning
For a user to be a part of a segment, they must meet ALL conditions in ANY condition set
:::

### Examples of some highly targeted segments
The segments you create should be specific to your use case. Here are some ideas to get you started:

- **Customers nearing subscription expiry**: These are customers whose subscription expiry date is nearing. You can send out reminders to this group to renew their subscription. Your filters for this segment might be something like: `Subscription End Date will be exactly 6 days later.`

![](https://i.imgur.com/surY1EB.png)

- **Employees in a certain department**: You might want to send out communication related to training activity to junior employees from a certain department. Your filters here might be: `Department is "Product" or "Engineering" AND Title **includes** "Junior" or "Associate"`

![](https://i.imgur.com/tC3f2Qu.png)

- **Visitors who have opted in to receiving updates on email**: You might want to create a group of users who you might to regularly share content with, over email. Your filters here might be: `Email Subscription is true`

![](https://i.imgur.com/45FBZpB.png)

- **Potential leads**: You could create a segment of users who have visited your pricing page more than twice. Then you can give them a little nudge and incentivise them with an offer or set up a demo with your sales team. Your filters here might be: `Pricing Page visited more than twice`

![](https://i.imgur.com/9NYYn0L.png)
