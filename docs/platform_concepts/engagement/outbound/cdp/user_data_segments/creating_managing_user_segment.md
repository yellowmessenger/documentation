---
sidebar_label: User Segments
title: Creating and managing user segments
---

### What is a segment?

A segment is a group of your users defined by conditions that you set. Users are automatically added to the segment every time the user updates to match those conditions.

We recommend creating a segment for every key group of users you'd like to send a message to - for example, users interested in a particular use case, users who have visited your pricing page, users in a particular department, users whose renewal data is nearing, etc.
yellow.ai lets you filter and segment important groups of users, so you can send them targeted messages. For example, you could create a segment of trial users and send them onboarding messages.

### Useful segments to create

The segments you create should be specific to your use case. Here are some ideas to get you started:

- **Customers nearing subscription expiry**: These are customers whose subscription expiry date is nearing. You can send out reminders to this group to renew their subscription. Your filters for this segment might be something like: `Subscription End Date will be exactly 6 days later.`

- **Employees in a certain department**: You might want to send out communication related to training activity to junior employees from a certain department. Your filters here might be: `Department is "Product" or "Engineering" AND Title **includes** "Junior" or "Associate"`

- **Visitors who have opted in to receiving updates on email**: You might want to create a group of users who you might to regularly share content with, over email. Your filters here might be: `Email Subscription is true`

- **Potential leads**: You could create a segment of users who have visited your pricing page more than twice. Then you can give them a little nudge and incentivise them with an offer or set up a demo with your sales team. Your filters here might be: `Pricing Page visited more than twice`


### Create a segment

To create a segment click on **+ Add segment**, add segment name and define the segment conditions. Once done, click on **Add**. The newly created segment will show up on the left.

![](https://i.imgur.com/t6QVPTr.png)

To create more sophisticated segments you can [combine ‘and’ with ‘or’ conditions](../user_data/targeted_segments). This makes segments more powerful and flexible.

### View/export users in a segment

To view who belongs to a segment, just select it from the left panel, like this:

![](https://i.imgur.com/tvWptmu.png)

To download the data for users that are in a particular segment, select **Segment → Actions → Download segment user data.**

![](https://i.imgur.com/dm4jbf1.png)

Your exported data will be in the form of CSV and will be available in User Logs. Head over to **User Logs** → Filter for **“Bulk user download”** → Click on **“Download Log”**

![](https://i.imgur.com/v9CpCac.png)

:::info
The above segment view is dynamic. That means, as and when a user is updated to match the conditions of the segment it shows up in that segment. If it's updated to not match the conditions, it stops showing up.
:::

### How to edit a segment

To edit a segment, select the segment from the left panel and click on **Actions → Edit segment**. You'll be able to edit both, the name of the segment as well as the conditions.

![](https://i.imgur.com/QWoYmSi.png)

:::info
If the conditions of the segment are edited, the users that show up in the segment might change based on which users match the newly created segment conditions.
:::

### How to archive/unarchive a segment
To archive a segment, select the segment from the left panel and click on **Actions → Archive segment**.

![](https://i.imgur.com/vTIMzn4.png)

To view all archived segments, click on the **Archived** tab in the left panel.

![](https://i.imgur.com/fOH4kGz.png)

To unarchive a segment, select any archived segment and click on **Unarchive** segment.

![](https://i.imgur.com/XQwIZ7n.png)

:::warning
"Archive segment" will not delete the user data associated with that segment. It just makes that particular segment unusable in creation of new campaigns. Old campaigns will continue running as it is.
:::

### Deleting users in a particular segment

Deleting user data is possible too, however you may want to [export them](./manage_user_data#viewing--exporting-your-user-data) as a backup first.

To delete the data for users that are in a particular segment, select **Segment → Actions → Delete segment user data**.

![](https://i.imgur.com/FZcFdn4.png)

:::info
“Archive segment” is not the same as “Delete segment user data”. The former has no impact on the user data and only archives/disables that segment from being viewed and used. The later however deletes the actual user data associated with that segment.
:::