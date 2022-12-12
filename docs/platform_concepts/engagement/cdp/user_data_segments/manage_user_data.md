---
sidebar_label: Capture data through conversations
title: Capture data through conversations
---
When building a bot on yellow.ai, you can use [Studio](https://docs.yellow.ai/docs/platform_concepts/studio/overview/) to capture user details and enrich user data. You can also create personalised conversations using [User properties](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data#manage-user-properties) in Studio conversations. Every bot session is mapped to a record in User 360.

## 1. User types
Users are categorised into two types on basis of the availability of their data in our system:


### 1.1 Unidentified users

Users who are not registered or whose `userId` is not added in Yellow.ai.	

An unidentified user is an individual whose `userId` is not captured in our system. For a new user on a channel, when a user property other than `userId` is captured, a record is created in User 360.

For example, the moment name is captured, a record is created in User 360 and maps the ongoing session to the record.

![](https://i.imgur.com/k35p40f.png)

:::info
**userId** is also available as a property under **User Properties** of  **Studio** > **Build**.
:::

### 1.2 Identified users 

These are registered users whose [userId](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/user_id/) is added in Yellow.ai. A record is created for each identified user in the users table. Any update made to the identified user through builder will show up in User 360.

You can update only identified users' data. Any data captured for [Identified users](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data/#what-are-identified-users) is automatically updated in the Users table.

The session mapping changes when an existing `userId` is provided.

For the session mentioned in the previous section, if the `userId` is `john@yellow.ai` which does not exist in User 360, the `userId` of the session will be updated without changing the mapping.

![](https://secure-res.craft.do/v2/WvXLj9MBoxwsE1JhYdg5yCRjnyWs6uzQFF5i9xuHdDFzqh7sYqt3Rxr7pB68h7BeZhVVPU5iyTT9SaFto6iN7CoxM68rVUsJbhVTgb947xypNtqo1s3MWEsC8zCsa12quWXVsHx46LoJ3jLpN3CfqDCovop7ENkfwyCyDNpCEmPPvqik9YTHqNrwLrkfHqktxjo6ZD3VhoYdAxbup34V4gUQw5o2mPL8n6jDYhorDfBmqwY5ENzPrwdsSvn6L7Cw2e7MVh8QTgLDEYNmFa5Y24Fg6439hMqU1YtvuGk9Ag8B2cNj72/Image.jpg)

  

If the `userId` (say, adam@yellow.ai) already exists, the current session will be mapped to the existing record and it’s properties will be refreshed with the values available in the record.

![](https://secure-res.craft.do/v2/WvXLj9MBoxwsE1JhYdg5yCRjnyWs6uzQFF5i9xuHdDFzqh7sYqt3Rxr7pB68h7BeZhVVPU5iyTT9SaFto6iN7CoxM68rVUsJbhVTgb947xypNtqo1s3MWEsC8zCsa12quWXVsHx46LoJ3jLpN3CfqDCowLVqsYQnENyjT2hddNejsC5xzh2MmP8AiEK2sEJWGVSYLjEWVAdBsgevad1WU5xQjGBf78caLXZxsRmLX8Y6MDasCCPp4MBV1Bpu6Go8jJA9gsNscVBiMgCWHL222hHxL7p8N2PKsvheEqwV9AWKGyrDDJ/Image.jpg)

 #### Example
 The following example shows how the information is mapped mapped based on the `userId`.
  
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

:::note
Session mapping is used to point multiple sessions on different channels to the same user record. 
:::

## 2. Add `userId` through conversations

To update `userId` of customers through bot conversations:

1. When building flows in [Studio](https://docs.yellow.ai/docs/platform_concepts/studio/overview/), use the **Prompt** node or *Variables* node. 
3. Click **Make prompt smarter** and scroll-down to the *Additional section*.  

 ![](https://i.imgur.com/t2p6uHD.png)

4. Check **Use this as Unique ID for user**.
   ![](https://i.imgur.com/7TPjvkH.png)



## 3. Set user properties through conversations

The user record is updated in the database using the session mapping. 

* When building a bot, use [Prompt](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) or [Variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables/#412-variables--action-node) nodes to capture user properties (such as name, email, phone number, location, or any system/custom user property) through conversations.

<center>
<img src="https://i.imgur.com/p6DvR3D.png" width="60%"/>
</center>

* To extract data from a payload, use the **Input** node and store information in the relevant user property. For example, fetch user details from the user add event payload and store them in relevant user properties. 

   ![](https://i.imgur.com/0kX3iJT.png)



<center>
<img  src="https://i.imgur.com/7ltkBj4.png" width="40%"/>
</center>


## 4. Fetch user properties in conversations

You can also fetch user properties in conversations using the **Text** node. For example, Hi {{{variables.user_name}}} - the value is fetched from the user record mapped to the current session. Use these variables to create personalised conversations.

![](https://i.imgur.com/tFyoRXF.png)


