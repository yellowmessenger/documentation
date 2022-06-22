---
sidebar_label: Exclude Users from Campaigns
title: How to exclude users who have opted out, from campaigns?
---

You might often want to exclude users who have opted out from all your campaigns. Doing this is simple:

- First ensure that your opt-in data is up to date. This can be regularly updated through [conversational data](../enriching_user_profiles/builder_capture_data), by uploading fresh data through [CSV](../enriching_user_profiles/create_audience_group_csv), or by using [REST APIs](../enriching_user_profiles/send_user_data_event_rest_api) to sync with your CRM.
- Next, you can include a condition in your [segment](../user_data/targeted_segments) where, “Opt-in is true”. This segment will exclude all users for whom the opt-in is either false or unknown.

![](https://i.imgur.com/xr4X98S.png)
