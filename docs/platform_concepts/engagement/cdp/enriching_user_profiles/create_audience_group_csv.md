---
sidebar_label: Creating audience groups using CSV Import and Tags
title: Creating audience groups using CSV Import and Tags
---

## Importing users from a CSV and grouping them using Tags

1. Create a CSV file with user details. Make sure that the column headers match the name of the user property that you want to map with. 

:::note
These names are **case sensitive** and the column header **should not include spaces** before/after.
:::

   ![](https://i.imgur.com/gEcRb2s.jpg)

2. Navigate to **Engage** > **User 360**.
3. Click on **Add user** > **Import users**.
   ![](https://i.imgur.com/KkDLtC2.png)

4. Upload the CSV file that you have created. 
5. In **Tags**, add custom tags for the group. These tags are added to every user in the CSV. This helps you differentiate between users uploaded from multiple CSV files and to maintain multiple audiences.
   ![](https://i.imgur.com/Asg1896.jpg)

6. [Create a segment](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment) using those tags to refer to the various set of audiences you have imported.

:::note
If the [userId](/docs/platform_concepts/engagement/cdp/user_data/user_properties#13-user-id-userid-as-a-property) is not passed in the CSV, yellow.ai creates and assigns an internally generated userId to each user.
:::

## Pre-checks before uploading the CSV

To ensure that your users are imported successfully, ensure the following:
- Correct column headers → Make sure that the column headers match the name of the user property that you want to map with. These names are case sensitive and the column header should not include spaces before/after. 

:::warning
If any of these column headers do not match with any user property, the entire CSV import will fail.
:::

- Use correct data type → Data type validation is run before importing each user record. User records where this validation fails, will be skipped. Each data type accepts the following values:

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

## Using the userId column to identify users

You can pass the userId for the users being imported by creating a **userId column** in your CSV. However, keep in mind that no 2 user records can have the same userId. Know more about userId and it’s importance [here](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties#1-userid-as-a-property).

When the CSV file includes a user record with a userId that already exists in the users table, a conflict arises between the old record and the new record. The new record is merged into the old record in the following manner:

- Existing values of the user will be updated with the new record values.
- Properties not provided for the new record, will be retained for the older record.

**For example:**


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

:::warning
Sometimes you might notice that the exact number of records you imported through CSV won't show up in the users table. This could be because some of the records being imported were merged with existing records.
:::

## Identifying errors in the CSV post import

Once you import a CSV file, you can check what happend with the records. You can see the count of new entries added, entries merged, and failed entries. 

New users might not be created with all entries you upload. The following are the possible reasons:
- [Wrong column headers](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/add_users#22-checklist-for-csv-import)
- [Data type mismatch](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/add_users#22-checklist-for-csv-import)
- Some users being imported must’ve [merged](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/add_users#23-use-the-userid-column-for-unique-identifiers) into existing user records

To identify errors in the import, see [user Logs](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/add_users#24-analyse-import-errors). 
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
    - `invalidDataType`: Properties for which the wrong [data type](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties#system-user-properties) was passed
    - `invalidProperty`: Properties that do not exist in the user table
* **LINE_NUMBER**: The row number of the user record for which import FAILED
