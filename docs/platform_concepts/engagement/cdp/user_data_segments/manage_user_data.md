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

  
## 2. Manage  users

A user could be your customer, lead, employee, or any other individual associated with your organisation or business. 

The following are the different ways in which you can add or users. 

### 2.1 Add/edit single user

This is best for adding just a few at a time, like prospects you met at an event, or a lead who reached out on LinkedIn.

To add a single user manually, follow these steps:

1. On the User 360 page, click **Add user** > **Single user**. 
2. Enter the user details and click **Save**. 

![](https://i.imgur.com/ZuD3NZf.png)

To edit a user:
1. On the **User 360** page, navigate to the user that you want to edit and click the more options icon > **Edit user**.

![](https://i.imgur.com/b3iPfZm.png)

2. Add or remove the required information and click **Save**.

:::note
Similarly, you can also delete a user using the more options icon > Delete user.
:::


### 2.2 Add/edit multiple users

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
![](https://i.imgur.com/U3RuKq3.png)

2. Add custom Tags to the user list if required and click on **Import**.


To know how the CSV import works in detail, see [CSV Import](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv/).

:::note
Users are automatically added to the segment every time the user updates to match those conditions
:::

  

## 3. Export user data

 You can download your entire user data or a segment specific user data and use it wherever required. For example, you can update user details and import it again, and upload user data in a third-party system for your business use cases.

To download your entire user base, in All users, click **Actions** > **Download all user data**.

![](https://i.imgur.com/EPBeFUv.png)


To download users in a particular segment, select the desired **Segment** > **Actions** > **Download segment user data**.

![](https://i.imgur.com/0FIZgh7.png)

You will get a download link to your email. Alternatively, you can download it from **User logs** > Apply Bulk user download filter > Click on **Download log**.


![](https://i.imgur.com/mPaMTEa.png)

  

## 4. Delete user data

You can delete one or more users if required. However, you need to [export their data](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data#viewing--exporting-your-user-data) as a backup before deleting.


To delete a single user, navigate to the user that you want to delete, click on the more options icon > **Delete user**.
 
  ![](https://i.imgur.com/28kG5jg.png)

To delete multiple users at a time, select each user that you want to delete and click **Delete users**.

![](https://i.imgur.com/nnB6VH2.png)


To delete user data using API, use [DELETE user API](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api).

  


## 5. View User activity logs

  

User logs is a space for your to audit your user data. There are 3 types of logs that User 360 supports:


-  **CSV import**: This log appears whenever you import users using a CSV. The associated *Download log* link contains details about the import process, that is, which records were imported, merged, or failed. See more about it [here](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv#figuring-out-what-went-wrong-with-your-csv-import).
-  **Bulk user download **:  This log appears whenever you [export your user data](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data#viewing--exporting-your-user-data). Use the associated *Download log* to download the exported user data in a CSV file.

-  **Bulk user delete **: This log appears whenever you [delete your user data](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data#deleting-your-user-data).

  

![](https://i.imgur.com/s86psKQ.png)

