---
sidebar_label: User management
title: User management
---

You can add new users, enrich user data, define user properties, segment users into groups, and also delete users.



:::info
This is enabled only for https://cloud.yellow.ai
:::



## 1. Manage user properties

You can customise the fields or information that you want to capture for your users and set the order in which you want the fields to appear on the UI.

### 1.1 View user properties
To manage user properties, follow these steps:

1. On the **User 360** page, click **User properties**.

![](https://i.imgur.com/BOUV1hq.png)

In the left panel, you can see the user schema, which includes all the [system](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data#system-user-properties) and [custom properties](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data/#custom-user-properties) along with their data types. 

2. Select the property that you want to include. You can see all the selected properties on the right. 

   ![](https://i.imgur.com/O5nuQaz.png)

3. To create a new custom property, cick **Add property**.
   * Enter a name for the property > Choose the data type > Click **Save**.

![](https://i.imgur.com/T9mEJaM.png)

![](https://i.imgur.com/xwdOtpt.png)

   To add more properties, click **New property**.
![](https://i.imgur.com/O5nuQaz.png)

 4. To order user properties, in the selected properties section, drag a property to the required position.

![](https://i.imgur.com/Eyk5uce.gif)




  

![](https://i.imgur.com/xwdOtpt.png)

***

  
## 2. Manage  users

A user could be your customer, lead, employee, or any other individual associated with your organisation or business. 

When adding a user, a there could be a conflict where you identify a user with a userId that already exists in the users table.

When a user who is available on channel1 tries to register with the same identifier on channel 2, all the properties of the new user will be updated as that of the existing user. That is, new user will be made identical to old user and both will be merged.
  

![](https://i.imgur.com/qNEdl6g.png)

The following are the different ways in which you can add or users.

The system can identify a registered user based on the userId. All updates made to this user through Flow builder, also show up in the users table.

Therefore, while updating user details, make sure the user identifier is registered.


To know about userId and its importance,  [read this article](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/user_id/).

:::note
To identify a user in Flow builder node, use the **userId** property.
:::

### 2.1 Add/edit single user manually

This is best for adding just a few at a time, like prospects you met at an event, or a lead who reached out on LinkedIn.

To add a single user manually, follow these steps:

1. On the User 360 page, click **Add user** > **Single user**. 
2. Enter the user details and click **Save**. 

<img src="https://i.imgur.com/ZuD3NZf.png" width="60%"/>

To edit a user:
1. On the **User 360** page, navigate to the user that you want to edit and click the more options icon > **Edit user**.

![](https://i.imgur.com/b3iPfZm.png)

2. Add or remove the required information and click **Save**.

:::note
Similarly, you can also delete a user using the more options icon > Delete user.
:::


### 2.2 Add/edit multiple users through CSV import

You can also add multiple users at a time through CSV upload and Rest APIs.

If you want to add/edit multiple users at once, you can use [REST APIs](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api/).

#### 1. Manage users using Rest APIs

In Yellow.ai, each user is an individual. This process of adding or updating user data is more dynamic. With APIs, you can ensure that all your user related data on Yellow.ai is always in sync with your entire tech stack.

Use [User APIs](https://documenter.getpostman.com/view/17583548/UVsEVUsg) to Create, Read, Update and Delete your user data.


  

![](https://i.imgur.com/llsMgDq.png)

  

#### 2. Manage users through CSV import

You can also manage users and user data through CSV import. Use CSV import when you want to add a list of users that you already have, or update specific information of existing users.

To add customers through CSV:

1. On the User 360 page, click **Add users** > **Import users**.

   <img  src="https://i.imgur.com/U3RuKq3.png" width="60%"/>

2. Add custom Tags to the user list if required and click on **Import**.


To know how the CSV import works in detail, see [CSV Import](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv/).

:::note
Users are automatically added to the segment every time the user updates to match those conditions
:::


***

## 3. Capture data through conversations

You can leverage conversational Studio [Conversational Studio](https://docs.yellow.ai/docs/platform_concepts/studio/overview/) to capture relevant user data and enrich their profiles.

When you use [User properties](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data#manage-user-properties) in a journey, it leads to a personalised conversation. Every bot session is mapped to a certain record in user 360. 

You can use user properties in the following manner:

1 **Fetching the value stored in user property**: You can do it through text nodes, for example Hello {{User.firstName}}. In this, the value will be fetched from the properties of the user record that the current session is mapped to.
2 **Setting the value for a user property**:  This might happen in prompt nodes or variable nodes, where you are trying to set a value for a user property. In such scenarios, the user property of the user record mapped to the session will be updated. This allows us to capture user data based on the conversations with the users.



### 3.1 Capture user properties through conversations

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

### 3.2 Auto-record creation for unidentified users

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

### 3.3 Understand Switch & Merge concepts


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

### 3.4 Add userId through conversations

To update userId of the customer when capturing customer identifiers, in the Prompt node, click **Make prompt smarter** > Scroll down to the Additional section and check **Use this as Unique ID for user**.

   ![](https://i.imgur.com/t2p6uHD.png)

   ![](https://i.imgur.com/7TPjvkH.png)



***

## 4. Export user data

 You can download your entire user data or a segment specific user data and use it wherever required. For example, you can update user details and import it again, and upload user data in a third-party system for your business use cases.

To download your entire user base, in All users, click **Actions** > **Download all user data**.

![](https://i.imgur.com/EPBeFUv.png)


To download users in a particular segment, select the desired **Segment** > **Actions** > **Download segment user data**.

![](https://i.imgur.com/0FIZgh7.png)

You will get a download link to your email. Alternatively, you can download it from **User logs** > Apply Bulk user download filter > Click on **Download log**.


![](https://i.imgur.com/mPaMTEa.png)

***


## 5. Delete user data

You can delete one or more users if required. However, you need to [export their data](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data#viewing--exporting-your-user-data) as a backup before deleting.


To delete a single user, navigate to the user that you want to delete, click on the more options icon > **Delete user**.
 
  ![](https://i.imgur.com/28kG5jg.png)

To delete multiple users at a time, select each user that you want to delete and click **Delete users**.

![](https://i.imgur.com/nnB6VH2.png)


To delete user data using API, use [DELETE user API](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api).

  
***

## 6. View user activity logs

  

User logs is a space for your to audit your user data. There are 3 types of logs that User 360 supports:


-  **CSV import**: This log appears whenever you import users using a CSV. The associated *Download log* link contains details about the import process, that is, which records were imported, merged, or failed. See more about it [here](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv#figuring-out-what-went-wrong-with-your-csv-import).
-  **Bulk user download **:  This log appears whenever you [export your user data](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data#viewing--exporting-your-user-data). Use the associated *Download log* to download the exported user data in a CSV file.

-  **Bulk user delete **: This log appears whenever you [delete your user data](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data#deleting-your-user-data).

  

![](https://i.imgur.com/s86psKQ.png)








