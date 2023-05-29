---
sidebar_label: Import users
title: Import users through CSV file
tags: [csv import, import bulk users, add bulk users, edit bulk users, add users]
---

Use a CSV file import to bulk import new users or update existing user data. You can choose the fields to import from the ones available in the CSV file.  It includes an error report post-import to help you identify errors in the CSV file easily. 

The following are the three different steps involved in importing a CSV file.

1. [Creating a CSV file with user details](#step-1-create-csv-file-with-user-details)
2. [Importing the created CSV file](#step-2-import-csv-file)
3. [Analysing import](#step-3-analyse-import-errors)

***

## Step 1: Create CSV file with user details


Create a CSV file with user details and ensure that the values passed in the CSV file adhere to the data types of user properties.

:::note
A CSV file cannot exceed 30 MB.
:::

1.  **Use appropriate header names**: It becomes easy to map headers when their names are similar to user properties.
2.  **Use the right data type**: Data type validated before importing each user record. If the validation fails, adding or updating the record will fail. 
3. **Supports only UTF-8 characters**: Use UTF-8 encoded CSV files.

The following table shows the data types of each user property with accepted values.


| Data Type | Accepted Value |
|-----------|----------------|
| String | Any string value. |
| List | Semicolon ; separated values without spaces. |
| email | A valid email address format. |
| Number | Any integer or decimal number with max of 15 digits. |
| Phone | A valid phone number with country code. |
| url | A valid URL format. |
| date | ISO date format - `YYYY-MM-DD`. |
| dateTime | ISO standard date-time format - `YYYY-MM-DD hh:mm:ss`. |
| time | Standard time format - `hh:mm:ss` |
| boolean | Value could be `true` or `false`, this is case insensitive. |
| tags | Semicolon ; separated values without spaces. Example: tag1;tag2 

3. **Prefix country codes** to mobile numbers - CountryCode+PhoneNumber. For example, an Indian phone number could be 919011111111 where `91` is the country code and rest is a phone number.
4. **Include all the properties** you want to import such as firstname, lastname, gender, country, city, timezone, email optin, sms optin, or any custom property that is added for the project.
5.  **Add tags** that you want to associate with each user. To add multiple tags to a user, use a semicolon (;) between each tag without space. For example, `regular_customers;campaign_responders`.

   ![](https://i.imgur.com/8CKrTCS.jpg)

  
:::note
* It is required to pass phone numbers with country codes in a CSV file.
* You can associate any column header to `userId`. Ensure the column contains unique identifiers such as phone number or email address. There is no need to mention it separately in the CSV file.
:::

***

## Step 2: Import CSV file

To import the CSV file with user details, follow these steps:
  
1. On Engage, click **User 360** > **Add user** > **Import users**.
   ![](https://i.imgur.com/h2s8nsz.png)
  

2. Click **Upload .csv** and add the CSV file that you have created.
   ![](https://i.imgur.com/SP7HQ3t.png)

3. Map CSV headers with the user properties. 

   * Select the CSV header that includes `userId` in the **UserId** column.
   * Associate each CSV header (column 2) with the User property (column 4).
  ![](https://i.imgur.com/pcotUYF.png)

:::note
If a CSV header is not mapped to any user property, that CSV column will not be imported.
:::

4. Click **Next**.
5. In **Resolve conflicts** set the action to be performed to the record when a userIdin the CSV file already exists in User 360. A conflict occurs when the userId imported through the CSV file already exists in User 360. 

   ![](https://i.imgur.com/w9DvsBR.png)


#### Retain imported user data

This replaces the entire user record with the ones available in the CSV file.

* The existing values will be replaced with the ones in the CSV file.
* The values will be empty for properties that are either not mapped or not specified in the CSV file.

   ![](https://i.imgur.com/EM59i4Q.png)

   

<!---
#### Retain existing user data

If the `userId` that you import already exists, it skips without making any changes to the existing record, even for the properies that are not mapped.

   ![](https://i.imgur.com/EQNTPHg.png)
    
  -->


#### Update existing user data

Updates the existing properties of the user with the ones imported through the CSV file. The existing properties that are not specified in the CSV file or not mapped will remain unchanged.

   ![](https://i.imgur.com/Q6gWZ66.png)

:::note
If the CSV file has two user records with the same userId, the data will be updated as per the sequence in the CSV file. The user record is updated with the data that comes first in the CSV and then with the ones that comes later.
For example, if there are two records with the same userId - one in row 10 and another in row 15:
* The record is first updated with the data available in row 10.
*  It is then updated as per row 15.
:::

6. Check **Merge tags** to retain existing tags and also add new tags in the CSV file if the userId that you are importing already exists. This overrides the behaviour of tags configured in Step 5.

   ![](https://i.imgur.com/z3VGPUJ.png)

7. Click **Next** to proceed.
8. In **Tags**, add tags to the entire set of users in the import. By default, a tag with the name {imported_timestamp} - `DDMonYY_HH:MM` - is added to the import. To add more tags, enter the tag name and press Enter.

   ![](https://i.imgur.com/prCfNqu.png)

9. To create a segment with the imported users, check **Create a segment of imported users based on tags assigned above** and enter the **Segment name**.

   ![](https://i.imgur.com/54TZVsw.png)


11. Click **Import**.
  
  ![](https://i.imgur.com/ZXswJNr.png)
    
  
You can see the Status of the import.

  - **In progress**: It states that the import activity is going on. You will see this immediately when you import a CSV file.
  - **Completed**: It states that the import activity is completed. There could be conflicts in the imported records and you can see that in Failed users.

   ![](https://i.imgur.com/1L2TjVR.png)


  - **Failed**: It states that the import activity has failed due to reasons like incorrect file format or any other technical errors. 

:::note
* Users are automatically added to the segment every time the user updates to match those conditions.
* If the [userId](/docs/platform_concepts/engagement/cdp/user_data/user_properties#13-user-id-userid-as-a-property) is not passed in the CSV, yellow.ai creates and assigns an internally generated userId to each user.
:::

***


## Step 3: Analyse import errors

Once you import a CSV file, you can check the status of those records - new records, updated records, and failed records. 

During the import, it is possible that new records are not always created but could also result in one or more of the following:

- Created new records with the details provided in the CSV file.
- Updated existing records with details provided in the CSV file.
- Failed to add or update users due to wrong column mapping, data type mismatch, or some other error.

To see errors in the import:

1. On Engage, go to **User 360**.
2. Click **Add users** > **Import users**.

Header | Description
------ | -----------
File uploaded | Name of the imported file.
Uploaded Date | Date when the file was uploaded.
Total users | Total number of user records in the CSV file.
New users | Total number of new user added through the import.
Conflicting users | Total number of user records in the CSV file that conflicted with the existing users in User 360.
Failed users | Number of user records that couldn't import.
Tags | User tags associated with all the users of the import. This includes the default tag and any other tags that were added on *Add tags and segment users* screen.
User segment | Segment created with the user list on the *Add tags and segment users* screen.
Status | Status of the import - In progress, Completed, or Cancelled.


3. Navigate to the import for which you want to download the error report and click <img src="https://i.imgur.com/qGw3wWp.png" width="15"/>. The downloaded Excel file contains includes the following information.

   ![](https://i.imgur.com/PVDp28M.png)

   **Summary**: Shows the count of user records that were newly added, failed, and merged into the existing user records.
- Records that were imported as new users (new users).
- Records for which import failed (failed records).
- Records that were merged into existing users (updated records). The following information is available for failed records:

   * **BOT_ID**: Bot ID for which the CSV was uploaded.
   * **REQUEST_PAYLOAD**: The user record for which an import was attempted but FAILED.
   *  **ERROR_PAYLOAD**: The error details due to which the above user import FAILED:
   -  `invalidDataType`: Properties for which the wrong [data type](#step-1-create-csv-file-with-user-details) was passed.
   -  `invalidProperty`: Properties that do not exist in the user table.
   *  **LINE_NUMBER**: The row number of the user record for which import FAILED.


   ***

   **What's next?**

   * To see details of a user, see [View user card](/docs/platform_concepts/engagement/cdp/user_data/viewuser)
   * To export user data, or delete an existing user record, see [Manage user data](/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data).
   * See how to [create user segments](/docs/platform_concepts/engagement/cdp/user_data_segments/segments_overview).