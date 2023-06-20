---
sidebar_label: Add users
title: Add users
---

## 1. Overview
A user will have a unique identifier, `userId` mapped to the record. When adding users, keep in mind that no two user records  have the same `userId`. Know more about [userId](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties#1-userid-as-a-property) and it’s importance.


<!--

### 1.1 User types
Users are categorised into two types on basis of the availability of their data in our system:


#### 1. Unidentified users

Users who are not registered or whose `userId` is not added in Yellow.ai.	

An unidentified user is an individual whose `userId` is not captured in our system. For a new user on a channel, when a user property other than `userId` is captured, a record is created in User 360.

For example, the moment name is captured, a record is created in User 360 and maps the ongoing session to the record.

<img src="https://i.imgur.com/k35p40f.png" width="80%"/>

:::info
**userId** is also available as a property under **User Properties** of  **Studio** > **Build**.
:::

#### 2. Identified users 

These are registered users whose [userId](/docs/platform_concepts/engagement/cdp/user_data/user_properties#13-user-id-userid-as-a-property) is added in Yellow.ai. A record is created for each identified user in the users table. Any update made to the identified user through builder will show up in User 360.

You can update only identified users' data. Any data captured for Identified users is automatically updated in the Users table.

The session mapping changes when an existing `userId` is provided.

For the session mentioned in the previous section, if the `userId` is `john@yellow.ai` which does not exist in User 360, the `userId` of the session will be updated without changing the mapping.

<img src="https://secure-res.craft.do/v2/WvXLj9MBoxwsE1JhYdg5yCRjnyWs6uzQFF5i9xuHdDFzqh7sYqt3Rxr7pB68h7BeZhVVPU5iyTT9SaFto6iN7CoxM68rVUsJbhVTgb947xypNtqo1s3MWEsC8zCsa12quWXVsHx46LoJ3jLpN3CfqDCovop7ENkfwyCyDNpCEmPPvqik9YTHqNrwLrkfHqktxjo6ZD3VhoYdAxbup34V4gUQw5o2mPL8n6jDYhorDfBmqwY5ENzPrwdsSvn6L7Cw2e7MVh8QTgLDEYNmFa5Y24Fg6439hMqU1YtvuGk9Ag8B2cNj72/Image.jpg" width="80%"/>

  

If the `userId` (say, adam@yellow.ai) already exists, the current session will be mapped to the existing record and it’s properties will be refreshed with the values available in the record.

<img src="https://secure-res.craft.do/v2/WvXLj9MBoxwsE1JhYdg5yCRjnyWs6uzQFF5i9xuHdDFzqh7sYqt3Rxr7pB68h7BeZhVVPU5iyTT9SaFto6iN7CoxM68rVUsJbhVTgb947xypNtqo1s3MWEsC8zCsa12quWXVsHx46LoJ3jLpN3CfqDCowLVqsYQnENyjT2hddNejsC5xzh2MmP8AiEK2sEJWGVSYLjEWVAdBsgevad1WU5xQjGBf78caLXZxsRmLX8Y6MDasCCPp4MBV1Bpu6Go8jJA9gsNscVBiMgCWHL222hHxL7p8N2PKsvheEqwV9AWKGyrDDJ/Image.jpg" width="80%"/>

 #### Example of how records are created/updated based on the availability of userId

 The following example shows how the details are mapped based on the `userId` availability.
  
 **Unidentified record**

userId | firstName | whatsAppOptin | deviceToken | Tag
------- | ------------ | ------------ | -------- | ----
- | Jim | Yes | (123,456) | (t1,t3)


**Identified record**

  userId | firstName | whatsAppOptin | deviceToken | Tag
------- | ---------- | ---------- | -------- | -------
jim@example.com | Jim | - | 789 | (t1,t2)
  

**Result record**

userId | firstName | whatsAppOptin | deviceToken | Tag
----- | -------- | -------- | ------------- | -------
jim@example.com | Jim | Yes | (123,456,789) | (t1,t2,t3)





### 1.2 Behaviour of two records when userId matches

When you add a user a `userId` that already exists in the users table, a conflict arises between the old record and the new record. The new record is merged into the old record in the following manner:

- Existing values of the user will be updated with the new record values.
- Properties not provided for the new record, will be retained for the older record.

Here is an example for better understanding:

#### Old user record

| userId | firstName | email             | phone        | tags      |
|--------|-----------|-------------------|--------------|-----------|
|    123 | Sarthak   | sarthak@example.ai | 919999999999 | tag1,tag2 |

#### New user record

| userId | firstName | email | phone        | tags      |
|--------|-----------|-------|--------------|-----------|
|    123 |           |       | 918888888888 | tag3,tag4 |


#### Merged record

| userId | firstName | email             | phone        | tags      |
|--------|-----------|-------------------|--------------|-----------|
|    123 | Sarthak   | sarthak@example.com | 918888888888 | tag3,tag4 |

:::note
Sometimes you might notice that the exact number of records you imported through CSV won't show up in the users table. This could be because some of the records being imported were merged with existing records.
:::

***

-->

## 2. Different ways of adding users

In User360, the platform provides four different methods for adding or updating user records. You can choose to manually add each user individually or leverage advanced features that facilitate efficient creation and real-time management of your user base.

1. [Add individual users using Add Single user in User 360](/docs/platform_concepts/engagement/cdp/user_data/add_users).
2. [Import users directly from a CSV file](/docs/platform_concepts/engagement/cdp/user_data/import_users).
3. [Use our REST APIs to add or modify users real time](/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api).
4. [Use Bot conversations to create and update user records](/docs/platform_concepts/engagement/cdp/user_data/store_conv_data).




