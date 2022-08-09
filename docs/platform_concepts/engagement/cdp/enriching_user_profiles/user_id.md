---
sidebar_label: User ID
title: What is User ID and why you’d want to use it?
---

userId is a unique property in the users schema. It is used as a unique identifier for every user.

You may want to set a userId (a unique user identifier) for every user you create, to be able to recognise them as the same user on multiple touch-points. When the userId is the same as email, you might want to pass it both as userId and email. 

Passing the userId for your users will allow you to identify them on multiple touch-points, which will further allow you to:

- Offer personalised engagement across multiple touch-points/channels
- Enrich the profile of that user with the data collected from multiple touch-points/channels

userId can be set through the following:

- [Data collection](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data/#3-using-builder-to-create--update-user-records-in-users-table) nodes in builder
- While [adding or editing](../user_data_segments/manage_user_data#add--edit-users) a single user through UI
- [userId column](./create_audience_group_csv#using-the-userid-column-to-identify-users), while importing users from a CSV
- Create and Edit User [REST APIs](./send_user_data_event_rest_api)

:::warning
No two users can have the same userId
:::