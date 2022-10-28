---
sidebar_label: User360 overview
title: User360 Overview
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
This is enabled only for https://cloud.yellow.ai
:::

The following are the key actions that you can perform on user 360.

### 1.1 Add users

The platform provides different ways to add your users. You can add each user manually or leverage advanced features  to quickly create your user base and maintain it real-time.  
* Import users directly [from a CSV](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv) 
* Use our [REST APIs](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api) to add or modify users real-time.

  * Use [Bot Builder to create and update users](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data/#3-using-builder-to-create--update-user-records-in-users-table)


### 1.2 Enrich your user data

It is important to collect data that is specific to your users. While there are some predefined properties, called [System Properties](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data#system-user-properties), you can also create and send [Custom properties](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data#custom-user-properties) and [Events](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data#user-events).

 
User properties store data about who your users are, events tell you when users take important actions on your product.


### 1.3 Create segments to power personalisation

 

By combining the user data with Properties and Events, you can [create highly focussed segments](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment). These segments update automatically as and when users match the criteria that you set.
