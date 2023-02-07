---
sidebar_label: User segments overview
title: User segments overview
---

A user segment is grouping of users based on some common characteristics. You need to define a condition on what basis you want to group your users. Segments are dynamic. Hence, according to the condition set, customers will be added to the segment automatically whenever user updates to match those conditions.


For example, users interested in a particular use case, users who have visited your pricing page, users in a particular department, users whose renewal data is nearing, etc.

It is recommended to create segments for different conditions on basis which you want to target them. For example, users interested in a particular use case, users who have visited your pricing page, users in a particular department, users whose renewal data is nearing, etc.

It is recommended to segment all your user base so that you can filter and send messages to your preferred user  groups, so you can send them targeted messages. For example, you could create a segment of trial users and send them onboarding messages.


## Sample use cases

The segments you create should be specific to your use case. Here are some ideas to get you started:

- **Create segment specific workflows**: In bot conversations, you might want to show a specific to the right set of users.

   > For example, when talking about the pricing plan, you might want to share different plans with different set of users. For example, this set of users could be defined on the basis of their country.
> 
   > This is where the [Condition Node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-if--condition) comes in handy.

   ![](https://i.imgur.com/h75l167.png)
 
-  **Customers nearing subscription expiry**: These are customers whose subscription expiry date is nearing. You can send out reminders to this group to renew their subscription. 
> Sample filter setting:  Subscription End Date will be exactly 6 days later.

  
-  **Employees in a certain department**: You might want to send out communication related to a training activity to junior employees from a certain department. 
> Sample filter setting: Department is "Product" or "Engineering" AND Title **includes** "Junior" or "Associate".

-  **Visitors who have opted in to receive updates on email**: Create a group of users to whom you want to regularly share content with, over email. 
> Sample filter setting: Email Subscription is true.

-  **Potential leads**: Create a segment of users who have visited your pricing page more than twice. Give them a little nudge and incentivise them with an offer or set up a demo with your sales team. 
> Sample filter setting: Pricing Page visited more than twice.

- **Exclude users who opted out from campaigns**: You might often want to exclude users who have opted out from all your campaigns. For this:

-   First ensure that your opt-in data is up to date. This can be regularly updated through  [conversational data](/docs/platform_concepts/engagement/cdp/user_data/conv_in_builder), by uploading fresh data through  [CSV](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/import_users), or by using  [REST APIs](/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api)  to sync with your CRM.
-   Next, you can include a condition in your  [segment](/docs/platform_concepts/engagement/cdp/user_data_segments/segments_overview)  where, “Opt-in is true”. This segment will exclude all users for whom the opt-in is either false or unknown.

<center><img src="https://i.imgur.com/xr4X98S.png" width="60%"/></center>