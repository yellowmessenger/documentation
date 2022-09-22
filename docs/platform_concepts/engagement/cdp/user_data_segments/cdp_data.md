---
sidebar_label: User Data Tracking
title: What user data can be tracked in yellow.ai?
---

You can group your users together based on who they are and what they do. We store three types of data about your users:
1. System User Properties (a default set of data we already have about your users).
2. Custom User Properties (data you send us about your users).
3. Events (data that records specific actions users take).

Below, we’ll explain how these data types work and how you can make the most of them.

## User Property Data Types

| **Data Type** | **Description**                                                                                               |
|---------------|---------------------------------------------------------------------------------------------------------------|
| string        | Stores String data                                                                                            |
| number        | Stores positive or negative integer, or a decimal number                                                      |
| time          | Stores time in hh:mm:ss format                                                                                |
| date          | Stores date in YYYY-MM-DD format                                                                              |
| datetime      | Stores date and time in YYYY-MM-DD hh:mm:ss format                                                            |
| list          | Stores an array of String values                                                                              |
| boolean       | Stores true or false                                                                                          |
| phone         | Stores phone numbers with country code and validates the format by checking country code and number of digits |
| url           | Stores URL and validates the format for the same                                                              |
| email         | Stores email and validates the format for the same                                                            |

## System User Properties

You’ll see the following default properties in your user module right from the beginning:

| **Property Name** | **Data Type** | **Description**                                                                                                                                                                          |
|-------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| userId            | string        | this is a unique identifier for a user NOTE: This can be passed                                                                                                                          |
| firstName         | string        | a user’s first name                                                                                                                                                                      |
| lastName          | string        | a user’s last name                                                                                                                                                                       |
| gender            | string        | a user’s gender                                                                                                                                                                          |
| country           | string        | calculated by the user’s IP address location                                                                                                                                             |
| city              | string        | calculated by the user’s IP address location                                                                                                                                             |
| ip                | string        | fetched from the user’s browser                                                                                                                                                          |
| latitude          | number        | calculated by the user’s IP address location                                                                                                                                             |
| longitude         | number        | calculated by the user’s IP address location                                                                                                                                             |
| language          | string        | preferred language setting for a user                                                                                                                                                    |
| timezone          | string        | calculated by the user’s IP address location                                                                                                                                             |
| email             | email         | user’s email address                                                                                                                                                                     |
| phone             | phone         | user’s phone number with country code                                                                                                                                                    |
| lastChannel       | string        | this is the last channel, set up on yellow.ai, where the user had an active session NOTE: You can update this property to cover touch-points/channels outside yellow.ai                  |
| dob               | date          | a person’s date of birth                                                                                                                                                                 |
| lastSession       | dateTime      | timestamp of the last time the user had an active session on one of the channels set up on yellow.ai NOTE: You can update this property to cover touch-points/channels outside yellow.ai |
| emailOptin        | boolean       | This is true if a user has subscribed to your emails, else it is false                                                                                                                   |
| smsOptin          | boolean       | This is true if a user has subscribed to your SMS, else it is false                                                                                                                      |
| whatsAppOptin     | boolean       | This is true if a user has subscribed to your WhatsApp messages, else it is false                                                                                                        |
| createdAt         | dateTime      | timestamp for when the user record was created                                                                                                                                           |
| updatedAt         | dateTime      | timestamp for when the user record was last updated                                                                                                                                      |
| tags              | list          | list of groups a user belongs to, based on the tag(s) you’ve manually applied to them                                                                                                    |

## Custom User Properties

Custom properties store additional information specific to your users. For example, you might want to store the number of times they have visited your pricing page, what their department is, which is their preferred product, etc.

These properties are ideal for helping you answer questions like:

- **How many/how much?** e.g. which users are paying you over $10 per month?
- **What’s the name?** e.g. show me a list of all the users whose job title is ‘Marketer’
- **Is it true or false?** e.g. which users have visited my pricing page? (pricingPageVisit = true) and which users haven’t?  (pricingPageVisit = false)
- **What date?** e.g. which users’ subscriptions are due to end on September 1st?

Custom User Properties can be [created from UI, in Users Module](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data/#manage-user-properties).

:::info

Currently, a custom property can not be archived or edited.

:::

## User Events

You can [send events](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/user_events) to yellow.ai, to record whenever users take specific actions or capture an important conversion event. Events record the first and last time a user does something and the total amount of times they do something. For example, you can see the first time users clicked on a particular page, or when they most recently purchased an item.

Events will show in your user list, and you can filter them to answer questions like:

- Are users visiting the same product page a lot recently?
- Have they used the export feature a bunch of times? or
- Have they downgraded their plan?

:::info
User Events is currently in beta! Write to sarthak@yellow.ai to get it enabled for your bot.
:::

### Export your User Data
You can quickly and easily export your user data out of yellow.ai. [Here's how to do that](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data#viewing--exporting-your-user-data).