---
sidebar_label: User properties
title: User properties
---

Properties are individual fields to be captured for a customer. For example, name, phone number, gender, email address and more. There are several predefined fields that you can use to capture a user's data. You can also create custom properties if required.

A customer is identified with a unique identifier `userId`. This can be any unique identifier such as mobile number, email adress, or any other identifier. However, you can set only one property for the `userId` for your org.



:::info
This is enabled only for https://cloud.yellow.ai
:::


## 1. User ID

`userId` is a unique property in the users schema. It is used as a unique identifier for every user.

You may want to set a userId (a unique user identifier) for every user you create, to be able to recognise them as the same user on multiple touch-points. When the userId is the same as email, you might want to pass it both as userId and email. 

Passing the userId for your users will allow you to identify them on multiple touch-points, which will further allow you to:

- Offer personalised engagement across multiple touch-points/channels
- Enrich the profile of that user with the data collected from multiple touch-points/channels

`userId` can be set through the following:

- [Data collection](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data/#3-using-builder-to-create--update-user-records-in-users-table) nodes in builder
- While [adding or editing](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data/#add--edit-users) a single user through UI
- [userId column](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv/#using-the-userid-column-to-identify-users), while importing users from a CSV
- Create and Edit User [REST APIs](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api/)

:::warning
No two users can have the same userId
:::

You can customise the fields or information that you want to capture for your users and set the order in which you want the fields to appear on the UI.

## 2. Add user properties
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



## 3. Create prsonalised conversations with user properties

If you’ve built a bot on yellow.ai, you can use the [Conversational Studio](https://docs.yellow.ai/docs/platform_concepts/studio/overview) to create hyper-personalised conversations based on user properties.

While these user properties are accessible in all the nodes of Studio, we’ll cover some of them with-in this document, to show you how you can create the right conversion for the right set of users.

First you might want to read [Using Builder to capture user data through conversations](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data).

:::info
All user properties are accessible in nodes under “User properties”.
:::

You can improve the engagement rates by creating personalised content. To do this, in your **Message Nodes**, you can can access user properties by clicking on the variable dropdown and selecting any **User Property**, or my simply accessing it using {{user.**propertyName**}}.

<img src="https://i.imgur.com/Mebonpy.png" alt="drawing" width="60%"/>