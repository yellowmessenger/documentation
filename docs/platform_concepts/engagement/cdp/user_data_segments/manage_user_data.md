---
sidebar_label: Capture data through conversations
title: Capture data through conversations
---

You can leverage conversational Studio [Conversational Studio](https://docs.yellow.ai/docs/platform_concepts/studio/overview/) to capture relevant user data and enrich their profiles.

When you use [User properties](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data#manage-user-properties) in a flow, it leads to a personalised conversation. Every bot session is mapped to a certain record in user 360. 

You can use user properties in the following manner:

1. **Fetching the value stored in user property**: You can do it through text nodes, for example Hello {{User.firstName}}. In this, the value will be fetched from the properties of the user record that the current session is mapped to.
2. **Setting the value for a user property**:  This might happen in prompt nodes or variable nodes, where you are trying to set a value for a user property. In such scenarios, the user property of the user record mapped to the session will be updated. This allows us to capture user data based on the conversations with the users.

***

## 1. Capture user properties through conversations

[Prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) not only help in creating personalized conversations, but also enriches user profile as the information is updated in the database. It can store responses of conversations that involve asking user details such as name, email, phone number, location, or any system/custom user property in the relevant field. 

   <img  src="https://i.imgur.com/p6DvR3D.png"  alt="drawing"  width="60%"/>


However, there are cases where the data is not collected directly. For example, you might want to fetch certain data from the event payload and pass it to a user property. Use the **Input** node and select the desired user property where you want to store the data.

   ![](https://i.imgur.com/0kX3iJT.png)

<center>
<img  src="https://i.imgur.com/7ltkBj4.png" width="40%"/>
</center>


:::note
The data captured through Studio conversations for [Identified Users](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data/#what-are-identified-users) will be updated automatically in the Users table.
:::

***

## 2. Auto-create records for unidentified users

An unidentified user is a user whose `userId` is not captured yet. For a new user on a channel, when a user property other than `userId` is captured, a record is created in User 360. 

For example, the moment name is captured, a similar record is created in User 360, to which the ongoing session will be mapped to.

![](https://secure-res.craft.do/v2/WvXLj9MBoxwsE1JhYdg5yCRjnyWs6uzQFF5i9xuHdDFzqh7sYqt3Rxr7pB68h7BeZhVVPU5iyTT9SaFto6iN7CoxM68rVUsJbhVTgb947xypNtqo1s3MWEsC8zCsa12quWXVsHx46LoJ3jLpN3CfqDCow14MbfGTiovxB9r6wkwypcuWyz8rFMKAwodXybuojwotvMbL6oiSA4sgGJLQREgSNFU9WU5iccYZmCgwEocGira5VfxQrijUF4a3antJFyMpH4fvUes53FSAwnuRJgBM1jWpS19x7cDPnyjzftnKPghtrR/Image.jpg)

* **Changing the session mapping, using user identifier**

   The session mapping changes when an existing `userId` is provided. 

   For the above session, if the `userId` is `john@yellow.ai` which does not exist in User 360, the userId of the session will be updated without changing the mapping.

![](https://secure-res.craft.do/v2/WvXLj9MBoxwsE1JhYdg5yCRjnyWs6uzQFF5i9xuHdDFzqh7sYqt3Rxr7pB68h7BeZhVVPU5iyTT9SaFto6iN7CoxM68rVUsJbhVTgb947xypNtqo1s3MWEsC8zCsa12quWXVsHx46LoJ3jLpN3CfqDCovop7ENkfwyCyDNpCEmPPvqik9YTHqNrwLrkfHqktxjo6ZD3VhoYdAxbup34V4gUQw5o2mPL8n6jDYhorDfBmqwY5ENzPrwdsSvn6L7Cw2e7MVh8QTgLDEYNmFa5Y24Fg6439hMqU1YtvuGk9Ag8B2cNj72/Image.jpg)

If the `userId` (say, adam@yellow.ai) already exists, the current session will be mapped to the existing record and it’s properties will be refreshed with that records values

![](https://secure-res.craft.do/v2/WvXLj9MBoxwsE1JhYdg5yCRjnyWs6uzQFF5i9xuHdDFzqh7sYqt3Rxr7pB68h7BeZhVVPU5iyTT9SaFto6iN7CoxM68rVUsJbhVTgb947xypNtqo1s3MWEsC8zCsa12quWXVsHx46LoJ3jLpN3CfqDCowLVqsYQnENyjT2hddNejsC5xzh2MmP8AiEK2sEJWGVSYLjEWVAdBsgevad1WU5xQjGBf78caLXZxsRmLX8Y6MDasCCPp4MBV1Bpu6Go8jJA9gsNscVBiMgCWHL222hHxL7p8N2PKsvheEqwV9AWKGyrDDJ/Image.jpg)

:::note
Session mapping is used to point multiple sessions on different channels to the same user record. This allows us to maintain context for the same user across different channels.
:::

***

## 3. Understand Switch & Merge concepts


A Switch  happens when a session switches it's mapping from one CDP record to another.

<img src="https://secure-res.craft.do/v2/WvXLj9MBoxwsE1JhYdg5yCRjnyWs6uzQFF5i9xuHdDFzqh7sYqt3Rxr7pB68h7BeZhVVPU5iyTT9SaFto6iN7CoxM68rVUsJbhVTgb947xypNxkfDU4kd2SXjt8hbLasmJfvzacJHM9YrYq4TAMQTNEVYoXED2eceDmcwYA8xm7Nm181cyzZ4cnDpe2thZPZfBEmqQThLeRLNUSXkLUxrAm1rydmTxYiG1yWXiNZyX4RGqe6XXKT67VtqgKvF5dxrH7XbgUFme2Da51EtKfkhJkCuEQeeRqgXtedciqZGVWeAvg213/Image.jpg" width="60%"/>

> In the above example, session changes it’s mapping from CDP Record 1 to CDP Record 2.

A Merge happens when an unidentified record is merged into an identified record:

1. **Non-list Type Properties** that don’t exist in the identified record will be carried over from the unidentified record
2. **List Type Properties** will be unified
3. The unidentified record will then be deleted

:::note
Identified records cannot be merged.
:::

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

The following table explains how updating `userId` through conversations works.

[User Id can be updated in Builder](https://www.craft.do/s/rSv1VKTxjVe5E6/x/7FDDD419-2497-43F7-B7DC-66DEFDA0E143) using a Prompt or Variable node.

userId | Exists in User 360? | Workflow
---- | ---- | ----
Is Identified |No | Creates a new Record with the new `UserId` provided - Switch mapping to new record
Is Identified | Yes | Switch mapping to existing record with the new `userId`.
Is Unidentified | No | Create a new Record with the new `userId` - SWITCH mapping to new record - MERGE un-identified record into the new record
Is Unidentified | Yes | SWITCH mapping to existing record with “new UserId” - MERGE un-identified record into the existing record

***

## 4. Add `userId` through conversations

To update userId of the customer when capturing customer identifiers, in the Prompt node, click **Make prompt smarter** > Scroll down to the Additional section and check **Use this as Unique ID for user**.

   ![](https://i.imgur.com/t2p6uHD.png)

   ![](https://i.imgur.com/7TPjvkH.png)









