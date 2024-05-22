---
sidebar_label: Import users via. CSV file
title: Import users using CSV file
tags: [csv import, import bulk users, add bulk users, upload users, edit bulk users, add users, bulk upload, csv]
---

Use a CSV file import to bulk import new users or update existing user data. You can choose the fields to import from the ones available in the CSV file.  It includes an error report post-import to help you identify errors in the CSV file easily. 

The following are the three different steps involved in importing a CSV file.

1. [Creating a CSV file with user details](#step-1-create-csv-file-with-user-details)
2. [Importing the created CSV file](#step-2-import-csv-file)
3. [Analysing import](#step-3-analyse-import-errors)

:::note
During the CSV import process, the system allows simultaneous import of only two files at a time. 
:::

***

## Step 1: Create CSV file with user details


Create a CSV file with user details and ensure that the values passed in the CSV file adhere to the data types of user properties.

:::note
A CSV file cannot exceed 30 MB.
:::

1.  **Use matching header names**: Ensure that the column names in the CSV file exactly match the column names specified during the creation of the audience table. It also leverages [Auto column Mapping](#auto-mapping-of-csv-columns) feature that simplifies the process of mapping headers by matching them with user properties that have similar names.
   - These column names are case-sensitive. 
   - Make sure there are no spaces between the column names within the CSV file. Avoid the format where spaces are present between column names, like name , email ,tags.
   - Do not include columns such as 'updated', 'inserted', 'segments' in the CSV file.

2.  **Use the right data type**: Data type validated before importing each user record. If the validation fails, adding or updating the record will fail.  For example, the email data type should be in the form 'test@gmail.com', not 'test.com'.



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

Here are the preliminary checks that must be adhered to before uploading a CSV file to the audience table:


3. **Phone number formatting:** Validate the proper formatting of phone numbers. If dealing with `app.ym`, 10-digit phone numbers are acceptable. However, for `cloud.ym`, phone numbers must include a country code (e.g., 919000500000 instead of 9000500000).

4. **Avoid Spaces in Column names:** Refrain from including spaces in the column names. Follow the preferred format: name, email, tags. Avoid the format where spaces are present between column names, like name , email ,tags.

5. **Validation of records:** Any records that fail to meet the validation criteria will not be processed.

6. **Consider upload time:** Keep in mind that uploading a large volume of records can be time-consuming.

7. **Minimize null columns:** Ensure that null columns are minimized or avoided.


8. **Include all the properties** you want to import such as firstname, lastname, gender, country, city, timezone, email optin, sms optin, or any custom property that is added for the project.
9.  **Add tags** that you want to associate with each user. To add multiple tags to a user, use a semicolon (;) between each tag without space. For example, `regular_customers;campaign_responders`.

   ![](https://i.imgur.com/8CKrTCS.jpg)

10. **Save the file in the right CSV format**: When creating the CSV file from tools like Microsoft Excel, ensure you save it in the format CSV (Comma delimited).
  
:::note
* You can associate any column header to `userId`. Ensure the column contains unique identifiers such as phone number or email address. There is no need to mention it separately in the CSV file.
:::

***

## Step 2: Import CSV file

To import the CSV file with user details, follow these steps:
  
1. On Engage, click **User 360** > **Add user** > **Import users**.
   ![](https://i.imgur.com/NgpU1zt.png)
  

2. Click **Upload .csv** and add the CSV file that you have created.
   ![](https://i.imgur.com/SP7HQ3t.png)

3. In **User id**, choose the column that contains userId.

   ![](https://i.imgur.com/SahEW5T.png)

4. In **Map CSV headers**, associate each CSV header with the corresponding user property. The system also performs auto-mapping of columns based on matching column names and the previous mapping if exists.

   * Select the CSV header that includes `userId` in the **UserId** column.
   * Associate each CSV header (column 2) with the User property (column 4).
  ![](https://i.imgur.com/pcotUYF.png)

:::note
If a CSV header is not mapped to any user property, that CSV column will not be imported.
:::

5. Click **Next**.
6. In **Resolve conflicts** set the action to be performed to the record when a userIdin the CSV file already exists in User 360. A conflict occurs when the userId imported through the CSV file already exists in User 360. 

   ![](https://i.imgur.com/w9DvsBR.png)


### Retain imported user data

This replaces the entire user record with the ones available in the CSV file.

* The existing values will be replaced with the ones in the CSV file.
* The values will be empty for properties that are either not mapped or not specified in the CSV file.

   ![](https://i.imgur.com/EM59i4Q.png)

   

<!---
#### Retain existing user data

If the `userId` that you import already exists, it skips without making any changes to the existing record, even for the properies that are not mapped.

   ![](https://i.imgur.com/EQNTPHg.png)
    
  -->


### Update existing user data

Updates the existing properties of the user with the ones imported through the CSV file. The existing properties that are not specified in the CSV file or not mapped will remain unchanged.

   ![](https://i.imgur.com/Q6gWZ66.png)

:::note
If the CSV file has two user records with the same userId, the data will be updated as per the sequence in the CSV file. The user record is updated with the data that comes first in the CSV and then with the ones that comes later.
For example, if there are two records with the same userId - one in row 10 and another in row 15:
* The record is first updated with the data available in row 10.
*  It is then updated as per row 15.
:::

7. Check **Merge tags** to retain existing tags and also add new tags in the CSV file if the userId that you are importing already exists. This overrides the behaviour of tags configured in Step 5.

   ![](https://i.imgur.com/z3VGPUJ.png)

8. Click **Next** to proceed.
9. In **Tags**, add tags to the entire set of users in the import. By default, a tag with the name {imported_timestamp} - `DDMonYY_HH:MM` - is added to the import. To add more tags, enter the tag name and press Enter.

   ![](https://i.imgur.com/prCfNqu.png)

10. To create a segment with the imported users, check **Create a segment of imported users based on tags assigned above** and enter the **Segment name**.

   ![](https://i.imgur.com/54TZVsw.png)

:::note
When multiple CSV files are uploaded simultaneously, it's possible that each CSV file may contain duplicate records.

In cases where there are conflicting records due to duplicated userIds, the total user count within the segment might fluctuate accordingly. However, if records are merged to resolve these conflicts, these merged records may potentially appear in multiple segments.

For example, if you opt to retain user data during a conflict resolution process, the previous record may be deleted, and as a result, it won't be available in the segment that was originally created through the prior import.
:::

11. Click **Import**.
  
  ![](https://i.imgur.com/ZXswJNr.png)
    
### Import statuses

You can see the Status of the import.

  - **In progress**: It states that the import activity is going on. You will see this immediately when you import a CSV file.
  - **Completed**: It states that the import activity is completed. There could be conflicts in the imported records and you can see that in Failed users.

   ![](https://i.imgur.com/1L2TjVR.png)


  - **Failed**: It states that the import activity has failed due to reasons like incorrect file format or any other technical errors. 

:::note
* Users are automatically added to the segment every time the user updates to match those conditions.
* If the [userId](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties#1-userid-as-a-property) is not passed in the CSV, yellow.ai creates and assigns an internally generated userId to each user.
:::

***

<!---
### Auto mapping of CSV columns

The auto-mapping feature aims to simplify the column-to-property mapping process during data import from CSV files. This helps streamline the column-to-property mapping and reduce the manual effort required, especially when dealing with large CSV files containing numerous properties.

<img src="https://i.imgur.com/RIvfySH.png" width="45%"/>

The auto-mapping functionality operates based on two aspects:

1. **Past mapping**: The property that the column header was previously mapped to during the last import will be utilized. This ensures consistency and saves time by automatically assigning the same property as before.
2. **Matching property**: If no previous mapping exists for a column header, the system will directly look for a property with an identical name. The column header and property name can be either exact match or approximately.

   Example: If a column header is "phoneNumber," the system will search for a property with the exact name "phonenumber" or approximate match "phone" and automatically maps the column.

:::note
The system prioritizes past mapping over matching property names. If a past mapping exists, it will be used instead of property name matching. Additionally, the auto-matching feature supports approximate matching, allowing the system to find a close match between the column header and property name based on similarities.
:::

***
-->

## Step 3: Analyse import errors

When importing a CSV file, it is important to analyze any potential errors that may occur:

* **New records**: New records will be created with the new userIds provided in the CSV file.
* **Failed records**: This can occur due to incorrect column mapping, data type mismatches, or other errors that prevent the addition or updating of users.

To ensure data accuracy, it is important to carefully review and address any import errors that arise.


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
Empty records | Number of empty records that were identified in the imported file.
Tags | User tags associated with all the users of the import. This includes the default tag and any other tags that were added on *Add tags and segment users* screen.
User segment | Segment created with the user list on the *Add tags and segment users* screen.
Status | Status of the import - In progress, Completed, or Cancelled.


3. Navigate to the import for which you want to download the error report and click <img src="https://i.imgur.com/qGw3wWp.png" width="15"/>. The downloaded Excel file contains includes the following information.

   ![](https://i.imgur.com/PVDp28M.png)

The following sections provide descriptions for each column in the error report.

#### Summary

The summary report provides information on the count of user records based on their status, including newly added, failed, and merged records.

- New users: Records that were imported as new users.
- Updated records: Properties or fields that were merged into existing records. 
- Failed records: Records for which import failed. You can see information on the specific errors encountered as mentioned in the following:

   * **BOT_ID**: Bot ID for which the CSV was uploaded.
   * **REQUEST_PAYLOAD**: The user record for which an import was attempted but FAILED.
   *  **ERROR_PAYLOAD**: The error details due to which the above user import FAILED:
   -  `invalidDataType`: Properties for which the wrong [data type](#step-1-create-csv-file-with-user-details) was passed.
   -  `invalidProperty`: Properties that do not exist in the user table.
   -  `propertiesRequired`: Mandatory properties that are missing in the CSV file.
   *  **LINE_NUMBER**: The row number of the user record for which import FAILED.


   ***

   **What's next?**

   * To see details of a user, see [View user card](/docs/platform_concepts/engagement/cdp/user_data/viewuser)
   * To export user data, or delete an existing user record, see [Manage user data](/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data).
   * See how to [create user segments](/docs/platform_concepts/engagement/cdp/user_data_segments/segments_overview).
   * Check out [Import related FAQs](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_faqs).