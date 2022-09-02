---
sidebar_label: Creating groups of audience using CSV Import and Tags
title: Creating groups of audience using CSV Import and Tags
---

## Importing users from a CSV and grouping them using Tags
The first step to start importing users is to have the CSV. Make sure that the column headers match the name of the user property that you want to map that column with. These names are **case sensitive** and the column header **should not include spaces** before/after.

![](https://i.imgur.com/gEcRb2s.jpg)

To begin the CSV import, you may click on **+ Add user → Import users.**

![](https://i.imgur.com/ntdUjuO.jpg)

You can upload the CSV you want to import users from. An optional step is to add **tags.** The tags that you add at this step will get added for every user in the CSV. This can be a great way to differentiate between users uploaded from multiple CSV files and to maintain multiple audiences.

You can then [create a segment](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment/) using those tags to refer to the various set of audiences you have imported.

![](https://i.imgur.com/Asg1896.jpg)

:::info
If the [userId](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data/#2-what-are-identified-users) is not passed in the CSV, yellow.ai creates and assigns an internally generated userId to each user that is imported.
:::

## Pre-checks before uploading the CSV

To ensure that your users are imported successfully, you can ensure the following:
- Correct column headers → Make sure that the column headers match the name of the user property that you want to map that column with. These names are case sensitive and the column header should not include spaces before/after. 

> If any of these column headers do not match with any user property, the entire CSV import will fail.


- Correct data type → Data type validation is run before importing each user record. User records where this validation fails, will be skipped. Each data type accepts the following values:

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

You can pass the userId for the users being imported by creating a **userId column** in your CSV. However, keep in mind that no 2 user records can have the same userId. You may read more about userId and it’s importance [here](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/user_id).

When the CSV includes a user record with a userId that already exists in the users table, a conflict arises between the old record and the new record. The new record is **merged** into the old record in the following manner:

- Properties provided for the new record, will be over-written on the older record.
- Properties not provided for the new record, will be retained for the older record.

**For example:**


Old record:

| userId | firstName | email             | phone        | tags      |
|--------|-----------|-------------------|--------------|-----------|
|    123 | Sarthak   | sarthak@yellow.ai | 919999999999 | tag1,tag2 |

New record:

| userId | firstName | email | phone        | tags      |
|--------|-----------|-------|--------------|-----------|
|    123 |           |       | 918888888888 | tag3,tag4 |

Merged Record:

| userId | firstName | email             | phone        | tags      |
|--------|-----------|-------------------|--------------|-----------|
|    123 | Sarthak   | sarthak@yellow.ai | 918888888888 | tag3,tag4 |

:::warning
Sometimes you might notice that the exact number of records you imported through CSV won't show up in the users table. This could be because some of the records being imported were merged with existing records.
:::

## Figuring out what went wrong with your CSV Import

Sometimes you might notice that the number of users you tried importing from the CSV didn’t show up in the users table. Here is might what have gone wrong:
- [Wrong column headers](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv/#pre-checks-before-uploading-the-csv)
- [Data type mismatch](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv/#pre-checks-before-uploading-the-csv)
- Some users being imported must’ve [merged](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv/#using-the-userid-column-to-identify-users) into existing user records

You can figure out which of the above happened by heading to [User Logs](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data/#user-logs). Click on User Logs →  relevant **CSV Import activity → Download log**


![](https://i.imgur.com/5jj2BgM.jpg)

![](https://i.imgur.com/55QuPiA.jpg)

The downloaded log will include the following columns:
1. **BOT_ID** → Bot Id for which the CSV was uploaded.
2. **REQUEST_PAYLOAD** → The user record for which an import was attempted but FAILED
3. **ERROR_PAYLOAD** → The error details due to which above user import FAILED:
    - `invalidDataType`: Properties for which the wrong [data type](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data/#user-property-data-types) was passed
    - `invalidProperty`: Properties that do not exist in the user table
4. **LINE_NUMBER** → The row number of the user record for which import FAILED
