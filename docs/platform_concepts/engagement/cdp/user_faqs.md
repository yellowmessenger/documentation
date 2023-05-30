---
sidebar_label: User 360 FAQs
title: User 360 FAQs
---

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




## User identification journey

<details>

<summary>Can I change userId frequently?</summary>

You cannot update a userId once captured. If you try to capture a new userId in the same session, a new record is created with that specific identifier. For more details, see [What happens when the userId is recaptured](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/data_capture_convers#what-happens-when-the-userid-is-recaptured).

</details>

<details>

<summary>How can I update existing user properties?</summary>

You can update existing user properties by identifying the user and recapturing the user properties that you would like to update. However, you cannot update the userId. For more details, see [Store conversational data in User360](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/store_conv_data#update-user-properties-through-builder)
</details>
