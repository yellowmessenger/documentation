---
title: Auto capturing of user's location-specific data from bot
sidebar_label: Auto-capturing of location-specific data from bot
---

## Automated capturing of location-specific data

This optimizes your user records with better accuracy and enhances profile completeness, while saving time and effort. By using this information, you can create location-based segments that allow for personalized campaigns and tailored content.

:::note
This is currently supported for web, and WhatsApp bots.
:::

The following are the auto-captured details for each bot channel.

Channel | User properties captured | Additional details
--------- | --------------------- | ----------
WhatsApp bot | Phone number, Country code | Captures country code using the phone number. However, the system may not capture the user's name in all cases, as the user might not have provided it, or the name might contain numbers or special characters that fail validation for the `firstName` and `lastName` properties.
Web bot | Timezone and country code | Uses IP address to capture these details. 

To know how the existing record is affected with this, see [Auto-capturing of location-specific information
](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/data_capture_convers#auto-capturing-of-location-specific-information).

***