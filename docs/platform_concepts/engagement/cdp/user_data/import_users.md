---
sidebar_label: Import users
title: Import users through CSV file
---

You can use a CSV file to bulk import new users or update existing user data. 


## Step 1: Create CSV file with user details

### CSV file checklist

To ensure that your users are imported successfully without issues, verify the following:

* **Use correct column headers**: Make sure that the column headers match with the name of the user property that you want to map. These names are case-sensitive and the column header should not include spaces before/after. 

:::note
If any of these column headers do not match with any user property, the entire CSV import will fail.
:::

* **Use correct data type**: Data type validation is run before importing each user record. If the validation fails for any user record, it will be skipped. Each data type accepts the following values:

| Data Type | Accepted Value                                   |
|-----------|--------------------------------------------------|
| String    | Any string value                                 |
| List      | semicolon ; separated values without spaces      |
| email     | A valid email id format                          |
| Number    | Any integer or decimal number with max 15 digits |
| Phone     | A valid phone number with country code           |
| url       | A valid URL format                               |
| date      | YYYY-MM-DD format                                |
| dateTime  | YYYY-MM-DD hh:mm:ss format                       |
| time      | hh:mm:ss format                                  |
| boolean   | true or false value, this is case insensitive    |
| tags      | semicolon ; separated values without spaces. Example: tag1;tag2      |


### Create CSV file

Create a CSV file with user details. Make sure that the column headers match the name of the user property that you want to map with.

1. `UserId` is mandatory.
2. Prefix country codes to mobile numbers - CountryCode+phoneNumber. For example, an Indian phone number could be 919011111111.
3. Other properties that you can import are firstname, lastname, gender, country, city, timezone, email optin, sms optin, or any custom property that is added for the project.
4. **Add tags** that you want to associate with each user. When adding multiple tags to a user, use semicolon (;) between each tag without space. For example, regular_customers;campaign_responders.


   ![](https://i.imgur.com/bhhUn7p.jpg)


:::note
* These names are **case sensitive** and the column header **should not contain spaces** before/after.
* It is required to pass phone numbers with country codes in a CSV file.
:::

***

## Step 2: Import users (CSV file)

To add users through CSV, follow these steps:


   

1. On Engage, click **User 360** > **Add user** > **Import users**.

    ![](https://i.imgur.com/KkDLtC2.png)

2. Upload the CSV file that you have created. 
3. In **Tags**, add custom tags for the group. These tags are added to every user in the CSV. This helps you differentiate between users uploaded from multiple CSV files and to maintain multiple audiences. You can [create segments](/docs/platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment) using those tags to refer to the various set of audiences you have imported.

   <img  src="https://i.imgur.com/U3RuKq3.png" width="60%"/>


4. Click on **Import**.



:::note
* Users are automatically added to the segment every time the user updates to match those conditions.
* If the [userId](../enriching_user_profiles/user_id) is not passed in the CSV, yellow.ai creates and assigns an internally generated userId to each user.
:::



***


## Step 3: Analyse import errors

Once you import a CSV file, you can check what happened with the records. You can see the count of new entries added, entries merged, and failed entries. 

New users might not be created with all entries you upload. The following are the possible reasons:
- [Wrong column headers](#csv-file-checklist)
- [Data type mismatch](#csv-file-checklist)
- Some users being imported might have [merged](/docs/platform_concepts/engagement/cdp/user_data/add_user_overview#12-behaviour-of-two-records-when-userid-matches) into existing user records

To see errors in the import:  

1. Click on **User Logs**. 
2. Navigate to the relevant **CSV Import activity**. 
3. Click **Download log**.


![](https://i.imgur.com/5jj2BgM.jpg)


The downloaded log contains the following information:
![](https://i.imgur.com/PVDp28M.png)

* **Summary**: Shows the count of user records that were newly added, failed to add, and were merged into the existing user details.  
   - Records that were imported as new users.
   - Records for which import failed (included below).
   - Records that were merged into existing users.
* **BOT_ID**: Bot Id for which the CSV was uploaded.
* **REQUEST_PAYLOAD**: The user record for which an import was attempted but FAILED.
* **ERROR_PAYLOAD**: The error details due to which the above user import FAILED:
    - `invalidDataType`: Properties for which the wrong [data type](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview#21-user-property-data-types) was passed.
    - `invalidProperty`: Properties that do not exist in the user table.
* **LINE_NUMBER**: The row number of the user record for which import FAILED.