---
sidebar_label: User 360 FAQs
title: User 360 FAQs
---

<details>

<summary> Does the User 360 table structure get migrated from one environment to another when published? </summary>

No, the User 360 table structure will not be automatically migrated from Sandbox to Staging when published. You need to create columns and push data separately in each environment.

</details>


<details>

<summary>
Can I add the same user once their record is deleted?</summary>

Yes, you can add the account again once it has been deleted.
</details>



<details>

<summary>
I can see duplicate phone numbers for my user properties. What should I do?</summary>

User 360 verifies uniqueness solely based on the userId. Therefore, to avoid duplicate phone numbers, make sure that the phone number is set as your userId. This will ensure that each user's phone number is unique in the system.
</details>


<details>
<summary>Why was a user created twice, with the second entry having 'null' as the userId?</summary>
The second user account, which lacks a valid userId and contains incorrect properties, is often auto-created when a user interacts with your bot for the first time. ensure that you have set up the 'userId' and stored in the User ID property in your studio flows before starting conversation. 


[Learn more](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/userid-flow).


</details>


<details>
<summary> How to add contact details to users in bulk? </summary>

You can create a CSV file with contact details and upload the CSV file using [User Data Import](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/import_users).

</details>


<details>
<summary>Can I connect a database with User 360?</summary>

Usecase: I currently store the details of users who click the "STOP" button to unsubscribe from my campaign. I want to integrate this information with User 360 to ensure that campaigns are not sent to those users. Is it possible to use User360 instead of a separate database to store the list of unsubscribers?<br/>


1. **Store user responses directly to User360 table**: You can store the user responses in a user property which saves it directly in User360. This allows you to associate the unsubscribe information with each user profile. For more details, refer to the documentation on [Storing conversation data in User 360](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/store_conv_data).
2. **Using events and user APIs**: You can use Events and user APIs to store user data to user 360. For more details, see  [Events and User APIs](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api).

</details>

<details>
<summary>
Why is the phone number not saving in User 360? And how can I ensure it gets saved correctly?</summary>


The phone number may not be saving in User 360 if it is not entered with the country code. It is important to include the country code when capturing phone numbers to ensure proper saving in the system. 

Additionally, you can enable the **Prefix a calling code** option to automatically add the country code, helping to ensure accurate storage of phone numbers in User 360.

</details>

<details>
<summary>
Can I change the datatype of a user property?</summary>

Unfortunately, once created, you cannot modify the data type of a property. It's essential to plan and choose the right datatype from the beginning to ensure accurate data management.
</details>

<details>
<summary>
Can I delete a user from user 360?</summary>

No, deleting a user from user 360 is not possible. Once a user is created, their data becomes a permanent part of the user 360 database. Be cautious when adding users and ensure the accuracy of the information provided.
</details>


## Data import

<details>

<summary>Why am I getting <i>Some error occured message when trying to import a CSV file?</i></summary>

Ensure that the CSV file does not contain exponential notation. 

<img src="https://i.imgur.com/2XH9VE6.png" width="70%"/>

</details>


<details>
<summary>What happens if there are duplicate entries in the same CSV file?</summary>

The records will be updated based on the sequence as per the configuration. In other words, the record that appears first in the CSV file will be added first, and subsequent duplicate entries will be processed in the order they appear.

</details>

<details>
<summary>My import is failing even when I provide the correct phone numbers</summary>

To successfully import the phone user property, it is mandatory to include the country code along with the phone number. If the country code is not provided, the validation process will fail. For more detailed information, see [how to create CSV file](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/import_users#step-1-create-csv-file-with-user-details).
</details>

<details>
<summary>I am unable to upload a CSV file created from Microsoft Excel</summary>
When saving the file from Excel, select the option to save it as <b>CSV (Comma delimited)</b>. This will ensure that the file is saved in the appropriate CSV format, making it compatible for uploading to the platform.<br/>

<center><img src="/img/cdp/csvFile.png" width="70%"/></center>

</details>

<details>
<summary>
How to update a specific user property through CSV import?
</summary>

1. **Prepare your CSV file**: Ensure that your CSV file contains the necessary columns, including the "UserId" column and the column you want to update.

2. **Start the import process**: Initiate the import process and select the CSV file you prepared in step 1. Follow the prompts to proceed to the mapping screen.

3. **Map the property to update**: In the Map properties screen, map the column that you want to update and select the column that corresponds to "userId".

4. **Resolve conflicts**: In the resolve conflict screen, select "Update existing data".

5. Proceed with the other steps.

For detailed procedure, refer to the [Import users documentation](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/import_users#step-2-import-csv-file).
</details>


## User identification journey

<details>

<summary>Can I change userId frequently?</summary>

You cannot update a userId once captured. If you try to capture a new userId in the same session, a new record is created with that specific identifier. For more details, see [What happens when the userId is recaptured](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/data_capture_convers#what-happens-when-the-userid-is-recaptured).

</details>

<details>

<summary>How can I update existing user properties?</summary>

You can update existing user properties by identifying the user and recapturing the user properties that you would like to update. However, you cannot update the userId. For more details, see [Store conversational data in User360](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/store_conv_data#update-user-properties-through-bot-conversations)
</details>

<details>
<summary>What does the error "Bot-specific issue, the bot is in an older backend" mean when accessing the User Identification Flow?</summary>

This error indicates that the bot you are attempting to access is associated with an older backend, causing compatibility issues with the User Identification Flow.

 Please reach out to our support team to assist you in upgrading the backend of your bot to resolve this issue.

</details>

