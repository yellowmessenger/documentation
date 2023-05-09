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


***

## Effect of auto-capturing on existing record


* For users on web bot, the system automatically captures location-specific information such as timezone and country. By using this information, you can create location-based segments that allow for personalized campaigns in Engage.

<center>
   <img src="https://i.imgur.com/l51XMt7.png" width="80%"/>
</center>

* For users on the WhatsApp bot, the system automatically captures the phone number and identifies their country and name. However, the system may not capture the user's name in all cases, as the user might not have provided it, or the name might contain numbers or special characters that fail validation for the `firstName` and `lastName` properties.

Any user property captured during the session will be stored in that unidentified record, until the `userId` is captured. 


<center>
   <img src="https://i.imgur.com/SL1Z0Ca.png" width="80%"/>
</center>

