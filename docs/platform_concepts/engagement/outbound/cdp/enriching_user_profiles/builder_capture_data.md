---
sidebar_label: Capture Data Through Conversations
title: Using Builder to Capture User Data Through Conversations
---

If you’ve built a bot on yellow.ai, you can use the [Conversational Studio](../../../../studio/overview) to also capture relevant data around your users and enrich their profile.

This data can also be used within the Conversational Studio to [deliver personalised conversations](../user_data/conv_in_builder).

:::info
All data captured for [Identified Users](./builder_capture_data#what-are-identified-users) only, is automatically updated in the Users Table.
:::

In this document, we will cover:
1. [How to store data in user properties?](./builder_capture_data#how-to-store-data-in-user-properties)
2. [What are Identified Users?](./builder_capture_data#what-are-identified-users)
3. [Using builder to create & update user records in users table](./builder_capture_data#using-builder-to-create--update-user-records-in-users-table)
4. [What happens when a new user conflicts with an existing user?](./builder_capture_data##what-happens-when-a-new-user-conflicts-with-an-existing-user)

### How to store data in user properties?

User properties are available in all nodes of the builder under **“User properties”**.

Many times, you’ll directly ask the users for information like name, email, phone number. The response to these questions can be stored in the relevant user property, to enrich the user profile. This is where [Prompt Nodes](../../../../studio/steps/prompts-and-messages/) come in handy.

To store a user’s response, click on the drop down next to **Store Response in**: → pick any user property under **“User properties”**

<img src="https://i.imgur.com/p6DvR3D.png" alt="drawing" width="60%"/>

A lot of times, the data can not be gathered by directly asking users questions. For example, you might want to fetch certain data from the event payload and pass it to a user property.

This is where a [Variables Node](../../../../studio/steps/action-nodes-and-logic/#variables) comes in handy. From the drop down, select any User Property you want to pass the data to.

<img src="https://i.imgur.com/NWnn7uW.png" alt="drawing" width="60%"/>

### What are Identified Users?

When userId has been set for a user, that user becomes identified. To know what a userId is and it's importance, you can [read this document](./user_id).
As soon as a user is identified, it starts showing up as a record in the users table. All updates made to this user, in builder, also show up in the users table. 

Therefore, while making relevant updates to a user, make sure it is already identified.

:::info
**userId**, is available as a property under **User Properties**, in every builder node.
:::

### Using builder to create & update user records in users table

As mentioned above, to create a user record in the users table through builder, you need to identify that user. To do that, you need to set it’s **userId**, which is available as a property under **User Properties**, in every builder node.

#### What if a user’s response such as email id, needs to be passed to both, the userId property and email property?

You can achieve this by storing the response in email property and then by clicking on **⚙️ icon** →  select **Use this as Unique ID for User**. This will store the response in both email and userId properties.

<img src="https://i.imgur.com/lwP5L5r.png" alt="drawing" width="60%"/>

![](https://i.imgur.com/ty7LQKU.png)


### What happens when a new user conflicts with an existing user?

A conflict happens when you identify a user with a userId that already exists in the users table.

Such situations are possible, especially when the same user appears on multiple channels. In such scenarios, the user might have already been identified on the 1st Channel and as a result might be existing already in the Users Table. Now when the same user is identified on the 2nd Channel, there would be a conflict b/w the new user being created, and the old user that already existed in the users table.

In such scenarios, the following will happen:

:::warning
All the properties of the new user will be updated to be the same as that of the existing user, ie, new user will be made identical to old user and both will be merged.
:::

![](https://i.imgur.com/qNEdl6g.png)


