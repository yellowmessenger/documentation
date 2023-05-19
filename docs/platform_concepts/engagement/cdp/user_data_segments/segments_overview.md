---
sidebar_label: User segments overview
title: User segments overview
---

## Introduction 
A user segment is a grouping of users based on common characteristics. You can define conditions to create static segments, which remain fixed over time, and dynamic segments that automatically update based on user data.

For example, you can create static segments for users interested in a particular product, visitors to your pricing page, or users in a specific department. Dynamic segments can be formed based on conditions like users whose age group is between 20-30 or those who have recently made a purchase.

Segmenting your user base is highly recommended as it allows you to filter and send targeted messages to specific groups. For instance, you can create a static segment for trial users and a dynamic segment for users who have made a purchase in the last 30 days. This enables you to send personalized onboarding messages to trial users and follow-up messages to recent purchasers.

By utilizing both static and dynamic segments, you can effectively tailor your communication to different user groups and improve the overall user experience.



## Sample use cases of User segments

The segments you create should be tailored to your specific use case. Here are some ideas to inspire you:

- **Create segment specific workflows**: In bot conversations, you may want to display specific information to different sets of users. For example, when discussing pricing plans, you might want to show different plans based on the user's country. 


   You can use the [Condition Node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-if--condition) to achieve this.

<center><img src="https://i.imgur.com/h75l167.png" width="70%"/></center>

 
-  **Customers nearing subscription expiry**: Identify customers whose subscription end date is approaching and send them reminders to renew their subscription.

> Sample filter setting:  Subscription End Date will be exactly 6 days later.

  
-  **Employees in a certain department**: Send communication related to training activities to junior employees in specific departments.

> Sample filter setting: Department is "Product" or "Engineering" AND Title **includes** "Junior" or "Associate".

-  **Visitors who have opted in to receive updates on email**: Create a segment of users who have opted to receive regular content via email.

> Sample filter setting: Email Subscription is true.


*  **Potential leads**: Create a segment of users who have visited your pricing page more than twice. Reach out to them with offers or set up demos with your sales team.

> Sample filter setting: Pricing page visited more than twice.

- **Exclude users who opted out from campaigns**:  Exclude users who have opted out from all your campaigns. To achieve this:

   * Ensure that your opt-in data is up to date. This can be regularly updated through  [conversational data](/docs/platform_concepts/engagement/cdp/user_data/conv_in_builder), [CSV imports](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/import_users), [REST APIs](/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api)  to sync with your CRM.
   * Next, include a condition in your segment [segment](/docs/platform_concepts/engagement/cdp/user_data_segments/segments_overview)  where, "Opt-in is true”. This segment will exclude all users for whom the opt-in status is false or unknown.

<center><img src="https://i.imgur.com/xr4X98S.png" width="60%"/></center>