---
sidebar_label: User 360 overview
title: User 360 Overview
---



User 360 is a Customer Data Platform that helps you manage your customer base.  You can segment your customers based on some shared characteristics for personalised targeting and get insights into their cross-channel engagement behavior.

The following are some key features of User 360 - 

* Collect user data from bot conversations and client’s external tech stack
* Unify user profiles and maintain context across channels
* Segment users into meaningful audiences
* Activate user data and segments in various modules of yellow.ai to drive personalisation

:::note
User360 is enabled by default for bots created after June 1, 2022.
To enable it for your bot, write to sarthak@yellow.ai.
:::





## 1. Access User 360


You can see User 360 in the Engage module.  You can view your user details, modify their details, define user properties, create  user segments and do more.

To access User 360, log on to https://cloud.yellow.ai and navigate to **Engage** > **User 360**.

:::note
This is enabled only for https://cloud.yellow.ai.
:::

The following are the key actions that you can perform on user 360.

### 1.1 Add users

The platform provides different ways to add your users. You can add each user manually or leverage advanced features  to quickly create your user base and maintain it real-time.  
* Add bulk users [through CSV import](/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api) 
* Use our [REST APIs](/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api) to add or modify users real-time.
* Use [Bot Builder to create and update users](/docs/platform_concepts/engagement/cdp/user_data/conv_in_builder)


### 1.2 Enrich your user data

It is important to collect data that is specific to your users. While there are some predefined properties, called [System Properties](/docs/platform_concepts/engagement/cdp/user_data/user_properties#11-system-user-properties), you can also create and send [Custom properties](/docs/platform_concepts/engagement/cdp/user_data/user_properties#22-create-custom-user-property) and Events.

 
User properties store data about who your users are, events tell you when users take important actions on your product.


### 1.3 Create segments to power personalisation

 

By combining the user data with Properties and Events, you can [create highly focussed segments](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment). These segments update automatically as and when users match the criteria that you set.


You can group your users based on certain characteristics such as who they are and what they do. 




## 2. User events

You can [send events](https://documenter.getpostman.com/view/17583548/UVsEVUsg#00eb59cf-7f00-461e-8d53-94eafb056a9a) to yellow.ai, to record user activities or capture an important conversion [events](/docs/platform_concepts/studio/events/event-hub#7-user-360-events-system-events).  It also captures the details such as the first and last time a user does something including the total number of times. For example, you can see the first time users clicked on a particular page, or when they most recently purchased an item.

You can see events in User 360, and filter them based on a specific criteria like:
- Users visiting the same product page quite often in recent times
- Users who used the export feature a number of times or
- Users who downgraded their plan


## 4. Export your user data

 If you want to update your user base or use it outside Yellow.ai,  you to export user data easily and use it wherever required. To know more, see [Export users data](/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data#export-user-data).



