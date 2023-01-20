---
sidebar_label: Exclude Users from Campaigns
title: How to exclude users who have opted out, from campaigns?
---

You might often want to exclude users who have opted out from all your campaigns. Doing this is simple:

- First ensure that your opt-in data is up to date. This can be regularly updated through [conversational data](/docs/platform_concepts/engagement/cdp/user_data/conv_in_builder), by uploading fresh data through [CSV](/docs/platform_concepts/engagement/cdp/user_data/import_users), or by using [REST APIs](/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api) to sync with your CRM.
- Next, you can include a condition in your segment where, “Opt-in is true”. This segment will exclude all users for whom the opt-in is either false or unknown.

![](https://i.imgur.com/xr4X98S.png)
