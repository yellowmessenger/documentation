---
title : Zoho CRM
sidebar_label : Zoho CRM
---

You can integrate Zoho CRM with Yellow.ai to allow syncing of customer data, and improve customer engagement. This integration enables you to effortlessly create, update, and search for records within various modules of Zoho CRM.

:::note
Yellow.ai supportes integration with both **Zoho CRM** and [Zoho SalesIQ](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/zoho-live-chat).
:::


## Supported Zoho CRM actions with Yellow.ai

 Action                          | Description                                                                                                                                                   |
|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| createRecord                    | Creates a record in the integrated Zoho CRM account. The following are the modules in which records can be created:<br/> 1. Home<br/>2. Leads<br/>3. Contacts<br/>4. Accounts<br/>5. Deals<br/>6. Tasks<br/>7. Events <br/>8. Activities<br/>9. Invoices<br/>10. SalesInbox<br/>11. Campaigns<br/>12. Vendors<br/> 13. PriceBooks<br/>14. Cases<br/>15. Solutions<br/>16. Documents<br/>17. Forecasts<br/>18. Visits<br/>19. Social <br/>20. Notes<br/>21. Attachments<br/>22. Actions Performed                                                                                                    |
| updateRecord                    | Updates a record in the integrated Zoho CRM account in the following modules: <br/>1. Leads<br/>2. Contacts<br/>3. Accounts<br/>4. Deals<br/>5. Tasks<br/>6. Events <br/>7. Activities<br/>8. Invoices<br/>9. SalesInbox<br/>10. Campaigns<br/>11. Vendors<br/> 12. PriceBooks<br/>13. Cases<br/>14. Solutions<br/>15. Documents<br/>16. Forecasts<br/>17. Visits<br/>18. Social <br/>19. Notes                                                                                                     |
| searchRecord                    | Fetches a particular record in the integrated Zoho CRM account in the following modules:<br/>1. Leads<br/>2. Contacts<br/>3. Accounts<br/>4. Deals<br/>5. Tasks<br/>6. Events <br/>7. Activities<br/>8. Invoices<br/>9. SalesInbox<br/>10. Campaigns<br/>11. Vendors<br/> 12. PriceBooks<br/>13. Cases<br/>14. Solutions<br/>15. Documents<br/>16. Forecasts<br/>17. Visits<br/>18. Social <br/>19. Notes|

## Connect Zoho CRM with Yellow.ai

**Prerequsites:**

1. An active Zoho CRM account
2. An active yellow.ai account.

To connect your Zoho CRM account with Yellow.ai, follow the these steps:

Add accounts only in the development or staging environment. You can access the connected accounts in the Live/Production environment.



1. On the left navigation bar, go to **Extensions** > **Integrations**.

   ![](https://i.imgur.com/JagYT5w.png)

2. Navigate to **CRM** > **Zoho CRM**. Alternatively, you can use the Search box to find the integration app.

   ![](https://i.imgur.com/KiYwOg2.png)

3. In **Give account name** provide a unique name only lowercase alphanumeric and underscore is supported) for the integration and click **Connect**.You'll be prompted to sign-in to your Zoho CRM account.

   ![](https://i.imgur.com/Ddj9RiF.png)
   

4. Once you have signed-in, click **Accept** to authorize Yellow.ai to access **Zoho CRM**.

   ![](https://i.imgur.com/3bBqQIe.png)

5. You can add up to 15 accounts. To add another Zoho CRM account, click on **Add account** and follow the steps mentioned above. 

   ![](https://i.imgur.com/ncw7DQU.png)


## Use actions in bot conversations

To carry out a [certain action](#supported-zoho-crm-actions-with-yellowai) in your Zoho CRM account, follow these steps:

1. Go to **Automation** and [create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow) based on your requirement. 
2. In whichever point you want the bot to access Zoho CRM, inlcude the Zoho CRM node. For that drag the node connector, go to **Integrations** > **Zoho CRM**.

   ![](https://i.imgur.com/cgrEHM9.png)

3. In the **Zoho CRM** node, fill the following:

   ![](https://i.imgur.com/UeuaTVh.png)

* **Account name:** Choose the Zoho CRM account. If you have only one account, the account name is automatically populated. If you have multiple accounts, the first account added is auto-populated. Select the one you want to use at that moment.
* **Action:** Choose the [action](#supported-zoho-crm-actions-with-yellowai) to be performed.
* **Select Objects:** Choose the Zoho CRM module in which the chosen action should be performed.
* Depending on the selected object, the corresponding fields will be shown. To fill those fields, you need to collect it as an input from users beforehand. Construct the flow accordingly and [store the data in variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables). These variables will then be passed in those fields.


4. Each Zoho CRM action returns a response as a JSON object. [Store that response in an object variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables) and to extract the required information from the payload,  [pass that variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#42-retrieve-data-from-variables) in a [message node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) to display that response to the end user.

For example, if you receive the following response, you can use this syntax ``` {{{variables.variablename.data.0.Owner.name}}}  ``` to display only the account owner's name.

```
{
  "data": [
    {
      "Owner": {
        "name": "Bhaskar K",
        "id": "231200000000180001",
        "email": "karanam.bhaskar@yellow.ai"
      },
      "Company": null,
      "Email": "bhaskar@abcl.com",
      "$currency_symbol": "$",
      "id": "231200000000321003",
      "$approved": true,
      "Created_Time": "2021-10-05T11:52:54+05:30",
      "Created_By": {
        "name": "Bhaskar K",
        "id": "231200000000180001",
        "email": "karanam.bhaskar@yellow.ai"
      },
      "First_Name": "Bhaskar",
      "Full_Name": "Bhaskar K",
      "Modified_By": {
        "name": "Bhaskar K",
        "id": "231200000000180001",
        "email": "karanam.bhaskar@yellow.ai"
      },
      "Phone": "9087654321",
      "Modified_Time": "2021-10-05T11:52:54+05:30",
      "$converted_detail": {},
      "$approval_state": "approved"
    }
  ],
  "info": {
    "per_page": 200,
    "count": 1,
    "page": 1,
    "more_records": false
  }
}
```