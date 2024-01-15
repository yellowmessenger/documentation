---
title: WhatsApp messaging limits and quality rating
sidebar_label : WhatsApp messaging limits and quality rating
---

This guide helps you understand WhatsApp’s messaging limits, current limits and ratings, and how to increase your messaging level.

## Messaging limits

WhatsApp imposes limits on the number of messages a business can send to users, and this is categorized into different tiers based on the volume of messages sent. To learn more about messaging limits, click [here](https://developers.facebook.com/docs/whatsapp/messaging-limits). 

There are four levels of messaging limits in a rolling 24-hour period:

* Tier 1: 1,000 unique customers per day
* Tier 2: 10,000 unique customers per day
* Tier 3: 100,000 unique customers per day
* Tier 4: Unlimited messages

:::note
* All the above messaging limits are business initiated messages.
* Every business account starts at tier 1 after registering a phone number.
* It takes at least 7 days to reach unlimited messaging.
:::

## How to increase the messaging limits

The messaging limits on WhatsApp are designed to automatically adjust based on the quality and volume of messages sent to users. To increase messaging limits on your number, consider the following conditions:

* **Phone number quality**: Ensure that the quality of your phone number is not low, as this can impact your eligibility for a limit increase. 
* **Messaging volume**: Over a 7-day period, the number of messages sent should be at least twice the number of unique customers supported in the current messaging limit.
* **Threshold**: The phone number must consistently operate within the current messaging limit for at least 48 hours. Once the business reaches this threshold, its limits are automatically increased.


Let's consider an example to illustrate the tiered structure of WhatsApp messaging limits:

   Assume that you're using a marketing platform with tiered plans based on the number of users you can reach. Currently, you are in Tier 1, where the limit is 1,000 unique users per 24 hours.

Over the course of a 7-day period, if you consistently engaged with more than 2,000 users and maintain a positive engagement rate, WhatsApp will automatically upgrade you to tier 2. In Tier 2, your limit increases to 10,000 users per 24-hour period.

Once your account reaches the threshold, the system automatically promotes you to the next tier. The transition period takes at least 48 hours, during which you must send your weekly limit or daily limit of messages for minimum two days.

## Quality rating

Quality rating on WhatsApp is an evaluation of how messages have been received by recipients over the past seven days. It is determined by analyzing a combination of quality signals, which include user feedback signals like recent blocks, the reasons users provide when they block a business, and other reporting issues. 

:::note
* If your quality rating reaches low, your account status will change to flagged or restricted, and you will receive an email notification in Business Manager as a warning.
:::

### Quality rating status 

There are 3 different quality ratings:

* High quality: Green 
* Medium quality: Yellow
* Low quality: Red

### Phone number status

When the quality rating decreases, the phone number status undergoes the following changes:
* **Connected**: Indicates that your phone number is operating correctly and is successfully linked to your account, establishing a connection with the WhatsApp Business API environment. 
* **Flagged**: Indicates when the quality rating reaches a low state. If the phone number is marked as flagged for more than 7 consecutive days, the messaging limit will be reduced to the immediate lower tier.
* **Restricted**: Indicates that the number has reached the [messaging limit](#messaging-limits). During a restricted phase, you cannot send any notification messages until the 24-hour window is reset. 
* **Pending**: Indicates that your account is awaiting verification, the certificate is currently unavailable, or the phone number is currently linked to another WhatsApp account.
* **Offline**: Indicates that your business name has been confirmed, a certificate is available to connect to the WhatsApp Business API, but there is currently no active connection.

In the *Status* column, you can verify the current status of your sender phone number.

![](https://i.imgur.com/aXcZSOV.png)


### How to check quality rating

You can check your phone number status, quality score, and sending limits for your WhatsApp Business account in your Facebook Business account.

#### To check quality rating, follow these steps:

1. Login to your Facebook business manager account and navigate to **Accounts > WhatsApp accounts** > **WhatsApp Manager**.

      ![](https://i.imgur.com/ck9gziG.png)
	  
2. Select **Phone numbers**.

     ![](https://i.imgur.com/ifaxupp.jpg) 

3. In the Quality rating column, you can view the rating.

    ![](https://i.imgur.com/4BNPEUq.png)

### How to improve quality rating

If your quality rating is low, WhatsApp will automatically reduce your business initiate conversation limit and also you cannot change or request for change to your quality rating. It is recommended to follow WhatsApp's guidelines to maintain high quality.

To improve quality rating on WhatsApp, consider the following points:

* **Adhere to WhatsApp Business Policy**: Ensure that your message templates comply with WhatsApp's business policy. 
* **Opt-in messages only**: Send messages only to users who have explicitly opted in to receive communications from your business. Avoid messaging users who have not provided consent.
* **Clarity and personalization**: Make sure your messages are clear, personalized, and useful to users. Avoid sending open-ended welcome or introductory messages.
* **Messaging frequency**: Be cautious about the frequency of your messages. Avoid sending users too many templates a day.
* **Review recent templates**: Check for new templates sent within the last 7 days. This practice can help to identify and rectify any issues with specific templates that might be affecting your quality rating.