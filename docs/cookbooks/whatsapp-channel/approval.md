---
title: Approve Notification Templates from WhatsApp
sidebar_label: Approval
---




### Scheduling a campaign

Before scheduling a campaign or sending notifications to the user, you need to know:

**1. Messaging limit:** 

It is determined by how many unique users your business can send messages to on a daily basis. 

    Based on the messaging limits, there are three types of tiers:

* Tier 1: Allows your business to send messages to 1K unique customers in a rolling 24-hour period.
* Tier 2: Allows your business to send messages to 10K unique customers in a rolling 24-hour period.
* Tier 3: Allows your business to send messages to 100K unique customers in a rolling 24-hour period.

**2. Quality rating**

Your quality rating is based on how messages have been received by users over the past seven days.

* *Pending* - This is when setup process is initiated.
* *Connected* - The phone number is online and can respond on WhatsApp
* *Offline* - The phone number is currently not reachable by WhatsApp servers or is not otherwise online.
* *Green*: High quality
* *Yellow*: Medium quality
* *Red*: Low quality
* *Flagged*: This occurs when quality rating decreases. You can improve the quality rating and come back to connected again in a week
* *Restricted*: This status occurs when messaging limit is reached and are not allowed to send business initiated messages anymore.

> Read more about quality rating and messaging limits [here](https://developers.facebook.com/docs/whatsapp/api/rate-limits)

Now, once the template is approved and you are within your messaging limits, follow [these steps](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign) to schedule an Outbound campaign..

Alternatively, if you want to trigger a notification when a user performs certain key activites on your platform, you can follow [these steps](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine) to configure our notification API to send out messages to them on WhatsApp.