---
title : Zoho CRM
sidebar_label : Zoho CRM
---

Yellow.ai seamlessly integrates with Zoho CRM, providing you with the capability to control your Zoho CRM account directly through yellow.ai's bot. This integration empowers you to effortlessly create, update, and search for records within various modules of Zoho CRM, enhancing your business management efficiency.

Yellow.ai supportes integration with **Zoho CRM** and [Zoho SalesIQ](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/zoho-live-chat).

:::note
In Zoho CRM, data is categorized into groups or divisions based on similarity. Each division that has similar data is called a **module**. For example, Leads is a module that contains all your business leads' details.
:::

## Zoho CRM actions that can be managed from yellow.ai

 Action                          | Description                                                                                                                                                   |
|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| createRecord                    | Creates a record in the integrated Zoho CRM account. The following are the modules in which records can be created:<br/> 1. Home<br/>2. Leads<br/>3. Contacts<br/>4. Accounts<br/>5. Deals<br/>6. Tasks<br/>7. Events <br/>8. Activities<br/>9. Invoices<br/>10. SalesInbox<br/>11. Campaigns<br/>12. Vendors<br/> 13. PriceBooks<br/>14. Cases<br/>15. Solutions<br/>16. Documents<br/>17. Forecasts<br/>18. Visits<br/>19. Social <br/>20. Notes<br/>21. Attachments<br/>22. Actions Performed                                                                                                    |
| updateRecord                    | Updates a record in the integrated Zoho CRM account in the following modules: <br/>1. Leads<br/>2. Contacts<br/>3. Accounts<br/>4. Deals<br/>5. Tasks<br/>6. Events <br/>7. Activities<br/>8. Invoices<br/>9. SalesInbox<br/>10. Campaigns<br/>11. Vendors<br/> 12. PriceBooks<br/>13. Cases<br/>14. Solutions<br/>15. Documents<br/>16. Forecasts<br/>17. Visits<br/>18. Social <br/>19. Notes                                                                                                     |
| searchRecord                    | Looks for a particular info in the integrated Zoho CRM account in the following modules:<br/>1. Leads<br/>2. Contacts<br/>3. Accounts<br/>4. Deals<br/>5. Tasks<br/>6. Events <br/>7. Activities<br/>8. Invoices<br/>9. SalesInbox<br/>10. Campaigns<br/>11. Vendors<br/> 12. PriceBooks<br/>13. Cases<br/>14. Solutions<br/>15. Documents<br/>16. Forecasts<br/>17. Visits<br/>18. Social <br/>19. Notes|


## Connect Zoho CRM with Yellow.ai

**Prerequsites:**

1. An active Zoho CRM account
2. An active yellow.ai account.

To connect your Zoho CRM account with Yellow.ai, follow the these steps:

1. Go to cloud.yellow.ai and click **Integrations** on the module switcher.

   ![](https://i.imgur.com/1EjCvqy.png)


2. Search for **Zoho CRM** in the search box or go to the category **CRM** > **Zoho CRM**.

   ![](https://i.imgur.com/7VpHsbd.png)

3. In **Give account name** give a unique name to your Zoho CRM account and click **Connect**.
4. You'll be prompted to sign-in to your Zoho CRM account.

  ![](https://i.imgur.com/h4bchOQ.png)

5. Once you have signed-in, click **Accept** to authorize yellow.ai to access **Zoho CRM**.

  ![](https://i.imgur.com/3bBqQIe.png)

6. You can add multiple Zoho CRM accounts in yellow.ai. Click **+ Add account** and follow the above mentioned steps for each account. You can add a maximum of 5 merchant accounts.

  ![](https://i.imgur.com/ncw7DQU.png)

:::note
1. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
2. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::

## Payload to access Zoho CRM on app.yellow.ai 

```
app.executeIntegrationAction({
        "action": <NODE TO BE EXECUTED>,
        "dynamicParams": {
    "context": [{
       "key": "objects",
       "value": <VALUE OF OBJECT SELECTED>,
       "label": <VALUE LABEL OF OBJECT SELECTED>,
       "nextStep":"fields"
   }],
   "botId": <BOT ID>,
   "integrationName": "zoho-crm",
   "nodeName": <NODE NAME>,
   "source": <SOURCE>,
   "sender": <SENDER>,
   "dynamicParams": {
       <VALUES TO BE POPULATED>
   }
}})

```
:::note
Yellow.ai adopts a secure approach towards client credential storage, whereby it refrains from storing the said credentials. Instead, it utilizes the oAuth 2.0 to integrate with the client's Zoho account. During the integration, Yellow.ai directs the user to log in to their Zoho CRM account and seek authorization to access the account on Yellow.ai. This process ensures optimal security and eliminates any potential risks associated with the storage of client credentials.
:::

## Manage Zoho CRM through bot conversations

:::note

This integration will work for API versions v1 and v2. 

For more information on the action nodes you can use here, click [here](https://www.zoho.com/crm/developer/docs/api/v2/insert-records.html).
:::


To carry out a certain action in your Zoho CRM account, follow these steps:

1. Go to **Studio** and [create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow) based on your requirement. 
2. In whichever point you want the bot to access Zoho CRM, inlcude the Zoho CRM node. For that drag the node connector, go to **Integrations** > **Zoho CRM**.

   ![](https://i.imgur.com/cgrEHM9.png)

3. In the **Zoho CRM** node, fill the following

   ![](https://i.imgur.com/UeuaTVh.png)

* **Account name:** Choose the Zoho CRM account.
* **Action:** Choose the action to be performed.
* **Select Objects:** Choose the Zoho CRM module in which the chosen action should be performed.
* Depending on the selected object, the corresponding fields will be shown. To fill those fields, you need to collect the information from users beforehand. Construct the flow accordingly and [store the data in variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables). These variables will then be passed in those fields.


4. Each Zoho CRM action returns a response as a JSON object. [Store that response in a variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables) and [pass that variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#42-retrieve-data-from-variables) in a [message node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) to display that response to the end user.

For example, if you receive the following response, you can use this syntax ``` {{{variables.variablename.data.0.Owner.name}}}  ``` to filter out the account owner's name.

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

**Sample success response:**

```
{
   "success": true,
   "message": "Execution Successful",
   "data": {
       "statusCode": 201,
       "body": "{\"data\":[{\"code\":\"SUCCESS\",\"details\":{\"Modified_Time\":\"2023-02-21T14:47:17+05:30\",\"Modified_By\":{\"name\":\"Raksha R\",\"id\":\"332678000000228001\"},\"Created_Time\":\"2023-02-21T14:47:17+05:30\",\"id\":\"332678000000867006\",\"Created_By\":{\"name\":\"Raksha R\",\"id\":\"332678000000228001\"}},\"message\":\"record added\",\"status\":\"success\"}]}",
  }

```

**Sample failure response:**

```
{
   "success": false,
   "message": "Execution Failed",
   "data": {
       "success": false,
       "error": "Error processing createRecord :: {\"message\":\"[INTG ERROR] Node API Execution failed for zoho-crm_createRecord in bot x1664176494495: 4xx or 5xx series code encountered\",\"name\":\"IntegrationNodeAPIError\",\"response\":{\"statusCode\":400,\"body\":\"{\\\"code\\\":\\\"INVALID_DATA\\\",\\\"details\\\":{\\\"expected_data_type\\\":\\\"jsonobject\\\"},\\\"message\\\":\\\"body\\\",\\\"status\\\":\\\"error\\\"}\\n\",\"headers\":{\"server\":\"ZGS\",\"date\":\"Tue, 21 Feb 2023 09:18:38 GMT\",\"content-type\":\"application/json;charset=UTF-8\",\"content-length\":\"104\",\"connection\":\"close\",\"set-cookie\":[\"941ef25d4b=1bfe2db6d19f9173efced4a75c6b6506; Path=/\",\"crmcsr=6e24c89f-15af-4a8d-a2ae-4a9ae41cd463;path=/;SameSite=None;Secure;priority=high\",\"_zcsr_tmp=6e24c89f-15af-4a8d-a2ae-4a9ae41cd463;path=/;SameSite=Strict;Secure;priority=high\",\"JSESSIONID=FAC2412202E8AC272350783D5A196B56; Path=/; Secure\"],\"referrer-policy\":\"strict-origin\",\"x-content-type-options\":\"nosniff\",\"x-xss-protection\":\"1; mode=block\",\"cache-control\":\"no-store, no-cache, must-revalidate, private\",\"pragma\":\"no-cache\",\"expires\":\"Thu, 01 Jan 1970 00:00:00 GMT\",\"x-frame-options\":\"SAMEORIGIN\",\"x-accesstoken-reset\":\"2023-02-21T15:46:28+05:30\",\"clientversion\":\"6007735\",\"clientsubversion\":\"73cb86c33821cf861d01dedd6b33d075\",\"content-disposition\":\"attachment; filename=response.json\",\"x-download-options\":\"noopen\",\"content-language\":\"en-US\"},\"request\":{\"uri\":{\"protocol\":\"https:\",\"slashes\":true,\"auth\":null,\"host\":\"169.148.148.66\",\"port\":443,\"hostname\":\"169.148.148.66\",\"hash\":null,\"search\":null,\"query\":null,\"pathname\":\"/crm/v2/Leads\",\"path\":\"/crm/v2/Leads\",\"href\":\"https://169.148.148.66/crm/v2/Leads\"},\"method\":\"POST\",\"headers\":{\"content-type\":\"application/json\",\"authorization\":\"Zoho-oauthtoken 1000.50a47d7f8e057fc7af19e15308f42d14.4013b576fa075e0dd91f586196903f27\",\"host\":\"www.zohoapis.in\",\"user-agent\":\"yellow-ai/api_processor\",\"accept-encoding\":\"gzip, deflate\",\"content-length\":0}}}}",
       "node": "createRecord",
}}

```





