---
sidebar_label: Manage users
title: Add users & enrich user data
---

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

## 1. Add/edit single user

This is best for adding just a few at a time, like prospects you met at an event, or a lead who reached out on LinkedIn.

To add a single user manually, follow these steps:

1. On the User 360 page, click **Add user** > **Single user**.
   
   ![](https://i.imgur.com/Pw5g3Vt.png)

2. Enter the **userId** of the customer along with other details.

   <img src="https://i.imgur.com/LPnNYFF.png" width="60%"/>

3.  Click **Save**. 

**To edit a user details**:

1. On the **User 360** page, navigate to the user that you want to edit and click the more options icon > **Edit user**.

![](https://i.imgur.com/b3iPfZm.png)

2. Add or remove the required information and click **Save**.

:::note
Similarly, you can also delete a user using the more options icon > Delete user.
:::


***


## 2. Add/edit multiple users through CSV import


You can also manage users and user data through CSV import. Use CSV import when you want to add a list of users that you already have, or update specific information of existing users.

### 2.1 Import users

To add customers through CSV, follow these steps:

1. Create a CSV file with user details. Make sure that the column headers match the name of the user property that you want to map with.

   a. `UserId` is mandatory.

   b. Prefix country codes to mobile numbers - CountryCode+phoneNumber. For example, an Indian phone number could be 919011111111.

   c. Other properties that you can import are firstname, lastname, gender, country, city, timezone, email optin, sms optin, or any custom property that is added for the project.

   d. Add tags that you want to associate with each user. When adding multiple tags to a user, use semicolon (;) between each tag without space. For example, regular_customers;campaign_responders.

   ![](https://i.imgur.com/fh3NGV8.png)

:::note
* These names are **case sensitive** and the column header **should not contain spaces** before/after.
* It is required to pass phone numbers with country codes.
:::
   

2. On Engage, click **User 360** > **Add user** > **Import users**.

    ![](https://i.imgur.com/KkDLtC2.png)

3. Upload the CSV file that you have created. 
4. In **Tags**, add custom tags for the group. These tags are added to every user in the CSV. This helps you differentiate between users uploaded from multiple CSV files and to maintain multiple audiences. You can [create segments](../user_data_segments/creating_managing_user_segment) using those tags to refer to the various set of audiences you have imported.

   <img  src="https://i.imgur.com/U3RuKq3.png" width="60%"/>


5. Click on **Import**.


To know how the CSV import works in detail, see [CSV Import](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv/).

:::note
* Users are automatically added to the segment every time the user updates to match those conditions.
* If the [userId](../enriching_user_profiles/user_id) is not passed in the CSV, yellow.ai creates and assigns an internally generated userId to each user.
:::




### 2.2 Checklist for CSV import

To ensure that your users are imported successfully without issues, verify the following:

* Correct column headers: Make sure that the column headers match with the name of the user property that you want to map. These names are case sensitive and the column header should not include spaces before/after. 

:::note
If any of these column headers do not match with any user property, the entire CSV import will fail.
:::

* Use correct data type: Data type validation is run before importing each user record. If the validation fails for any user record, it will be skipped. Each data type accepts the following values:

| Data Type | Accepted Value                                   |
|-----------|--------------------------------------------------|
| String    | Any string value                                 |
| List      | semicolon ; separated values without spaces      |
| email     | A valid email id format                          |
| Number    | Any integer or decimal number with max 15 digits |
| Phone     | A valid phone number with country code           |
| url       | A valid url format                               |
| date      | YYYY-MM-DD format                                |
| dateTime  | YYYY-MM-DD hh:mm:ss format                       |
| time      | hh:mm:ss format                                  |
| boolean   | true or false value, this is case insensitive    |
| tags      | semicolon ; separated values without spaces      |

### 2.3 Use the userId column for unique identifiers

You can pass `userId` for the users being imported by creating a **userId column** in your CSV. However, keep in mind that no 2 user records can have the same userId. Know more about userId and it’s importance [here](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/user_id).

When the CSV file includes a user record with a userId that already exists in the users table, a conflict arises between the old record and the new record. The new record is merged into the old record in the following manner:

- Existing values of the user will be updated with the new record values.
- Properties not provided for the new record, will be retained for the older record.

#### Example


**Old record**:

| userId | firstName | email             | phone        | tags      |
|--------|-----------|-------------------|--------------|-----------|
|    123 | Sarthak   | sarthak@example.ai | 919999999999 | tag1,tag2 |

**New record**:

| userId | firstName | email | phone        | tags      |
|--------|-----------|-------|--------------|-----------|
|    123 |           |       | 918888888888 | tag3,tag4 |

**Merged Record**:

| userId | firstName | email             | phone        | tags      |
|--------|-----------|-------------------|--------------|-----------|
|    123 | Sarthak   | sarthak@yellow.ai | 918888888888 | tag3,tag4 |

:::note
Sometimes you might notice that the exact number of records you imported through CSV won't show up in the users table. This could be because some of the records being imported were merged with existing records.
:::

### 2.4 Analyse import errors

Once you import a CSV file, you can check what happend with the records. You can see the count of new entries added, entries merged, and failed entries. 

New users might not be created with all entries you upload. The following are the possible reasons:
- [Wrong column headers](../enriching_user_profiles/create_audience_group_csv#pre-checks-before-uploading-the-csv)
- [Data type mismatch](../enriching_user_profiles/create_audience_group_csv#pre-checks-before-uploading-the-csv)
- Some users being imported must’ve [merged](../enriching_user_profiles/create_audience_group_csv#using-the-userid-column-to-identify-users) into existing user records

To identify errors in the import, see [User Logs](../user_data_segments/manage_user_data#user-logs). 
Click on **User Logs** > Navigate to the relevant **CSV Import activity** > Click **Download log**.


![](https://i.imgur.com/5jj2BgM.jpg)


The downloaded log contains the following information:
![](https://i.imgur.com/PVDp28M.png)

* **Summary**: Shows the count of user records that were newly added, failed to add, and were merged into the existing user details.  
   - Records that were imported as new users
   - Records for which import failed (included below)
   - Records that were merged into existing users
* **BOT_ID**: Bot Id for which the CSV was uploaded.
* **REQUEST_PAYLOAD**: The user record for which an import was attempted but FAILED
* **ERROR_PAYLOAD**: The error details due to which above user import FAILED:
    - `invalidDataType`: Properties for which the wrong [data type](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data/#user-property-data-types) was passed
    - `invalidProperty`: Properties that do not exist in the user table
* **LINE_NUMBER**: The row number of the user record for which import FAILED

***

## 3. Manage users using Rest APIs

In Yellow.ai, each user is an individual. This process of adding or updating user data is more dynamic. With APIs, you can ensure that all your user related data on Yellow.ai is always in sync with your entire tech stack.

If you want to add/edit multiple users at once, you can use [REST APIs](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api/).

Use [User APIs](https://documenter.getpostman.com/view/17583548/UVsEVUsg) to Create, Read, Update and Delete your user data.


  

![](https://i.imgur.com/llsMgDq.png)

***

## 4. Manage users through conversations

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


## 5. Manage user data

### 5.1 Export user data

 You can download your entire user data or a segment specific user data and use it wherever required. For example, you can update user details and import it again, and upload user data in a third-party system for your business use cases.

To download your entire user base, in All users, click **Actions** > **Download all user data**.

![](https://i.imgur.com/EPBeFUv.png)


To download users in a particular segment, select the desired **Segment** > **Actions** > **Download segment user data**.

![](https://i.imgur.com/0FIZgh7.png)

You will get a download link to your email. Alternatively, you can download it from **User logs** > Apply Bulk user download filter > Click on **Download log**.


![](https://i.imgur.com/mPaMTEa.png)



### 5.2 Delete user data

You can delete one or more users if required. However, you need to [export their data](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data#viewing--exporting-your-user-data) as a backup before deleting.


To delete a single user, navigate to the user that you want to delete, click on the more options icon > **Delete user**.
 
  ![](https://i.imgur.com/28kG5jg.png)

To delete multiple users at a time, select each user that you want to delete and click **Delete users**.

![](https://i.imgur.com/nnB6VH2.png)


To delete user data using API, use [DELETE user API](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api).

  

### 5.3 View user activity logs

  

User logs is a space for your to audit your user data. There are 3 types of logs that User 360 supports:


-  **CSV import**: This log appears whenever you import users using a CSV. The associated *Download log* link contains details about the import process, that is, which records were imported, merged, or failed. See more about it [here](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv#figuring-out-what-went-wrong-with-your-csv-import).
-  **Bulk user download **:  This log appears whenever you [export your user data](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data#viewing--exporting-your-user-data). Use the associated *Download log* to download the exported user data in a CSV file.

-  **Bulk user delete **: This log appears whenever you [delete your user data](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data#deleting-your-user-data).

  

![](https://i.imgur.com/s86psKQ.png)


