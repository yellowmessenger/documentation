---
title : Salesforce CRM
sidebar_label : Salesforce CRM
---


Salesforce is a cloud-based software company that provides a range of business solutions. At its core, Salesforce offers Customer Relationship Management (CRM) software, which helps businesses manage and analyze customer interactions and data. The CRM system allows companies to track sales, marketing efforts, customer service, and other aspects of their operations.

In addition to CRM, Salesforce has various subsidiaries and products that extend its capabilities. For instance, they offer live chat solutions to facilitate real-time customer support and engagement. Yellow.ai supportes integration with Salesforce CRM and [Salesforce Live Chat](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/salesforcelivechat#21-chat-with-salesforce-live-agent). 


## Table of contents

1. [What Salesforce actions are available on Yellow.ai?](#salesforce-actions-that-can-be-managed-from-yellowai)
2. [How to connect Salesforce CRM with Yellow.ai?](#connect-salesforce-crm-with-yellowai)
3. [How to use Salesforce CRM from Yellow.ai?](#manage-your-salesforce-crm-through-bot-conversations)



## Salesforce actions that can be managed from yellow.ai

After integrating with Salesforce CRM, you can perform the following tasks directly from the Yellow.ai platform:

| Action                          | Description                                                                                                                                                   |
|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| createRecord                    | Creates a record in the integrated Salesforce account. The following are the different types of available records:<br/> 1. Accounts<br/>2. Contacts<br/>3. Opportunities<br/>4. Leads<br/>5. Cases<br/>6. Campaigns<br/>7. Products and Price Books<br/>8. Tasks<br/>9. Events<br/>10. Custom<br/>11. Objects<br/>12. Documents and Attachments                                                                                                     |
| updateRecord                    | Updates a record in the integrated Salesforce account.                                                                                                       |
| searchRecord                    | Looks for a particular info in the integrated Salesforce account.                                                                                            |
| Query by SOQL                   | Query and retrieve data from the Salesforce database. You can create SQL queries by refering to the following links: <br/> [Link 1](https://trailhead.salesforce.com/content/learn/modules/apex_database/apex_database_soql) <br/> [Link 2](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql.htm)                                                                                                       |
| Get User Details by Owner ID    | In Salesforce, each user has a unique identifier known as the Owner Id. This process involves using the Owner Id of a record (e.g., Account, Contact, or Opportunity) to fetch details about the user who owns that particular record. |


## Connect Salesforce CRM with Yellow.ai

**Prerequsites:**

1. An active Salesforce CRM account
2. An active yellow.ai account.

To connect your Salesforce CRM account with Yellow.ai, follow the these steps:

1. Go to cloud.yellow.ai and click **Integrations** on the module switcher.

   ![](https://i.imgur.com/1EjCvqy.png)


2. Search for **Salesforce CRM** in the search box or go to the category **CRM** > **Salesforce CRM**.

   ![](https://i.imgur.com/Pqzthkd.png)


3. Enter a name for your Salesforce account and choose the **Salesforce CRM environment**. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 

   ![](https://i.imgur.com/kPLCOyk.png)


4. Click **Connect**.
5.  You will see a pop-up screen to login with a list of accounts.

5. Choose the respective account and click **Log in** 

   ![](https://i.imgur.com/W4rrs7W.gif)

 6. If you have multiple accounts, click **+Add account** and follow the above mentioned steps to add each of them. You can add a maximum of 15 accounts.

![](https://i.imgur.com/dGxkcov.png)

:::note
1. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
2. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::

## Manage your Salesforce CRM through bot conversations

To carry out a certain action in your Salesforce account, follow these steps:

1. Go to **Studio** and [create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow) based on your requirement. 

   ![](https://i.imgur.com/Wcacej3.png)

2. In whichever point you want the bot to access Salesforce, inlcude the Salesforce CRM node. For that drag the node connector, go to **Integrations** > **Salesforce CRM**.

   ![](https://i.imgur.com/YVDlhAu.png)

3. In the Salesforce CRM node, fill the following

   ![](https://i.imgur.com/LtUHOev.png)

* **Account name:** Choose the prefereed Salesforce CRM account.
* **Action:** Choose the action to be performed.
* **Select Objects:** Choose the Salesforce CRM object in which the chosen action should be performed.
* Depending on the selected object, the corresponding fields will be shown. To collect this information from users, you must construct the flow accordingly and [store the data in variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables). These variables will then be used in this context.


4. Each Salesforce action returns a response as a JSON object or an array. [Store that response in a variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables) and [pass that variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#42-retrieve-data-from-variables) in a [message node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) to display that response to the end user.

| Action                                                             | Syntax                                                                                    |
|--------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| To consume the JSON object as it is                                | `{{variables.variable_name_object.choices.0.text}}`                                       |
| To access fields in JSON object response                           | `{{variables.variable_name.field_name}}`                                                  |
| To access array values| Use keys. For instance, to access the weather description from the below response, use<br/> `{{variables.API_var.weather.0.description}}`                                                                    because the value is inside an array and is the first value (0th index).|
  

**Sample response:**

```
{
  "coord": {
    "lon": 77.2167,
    "lat": 28.6667
  },
  "weather": [
    {
      "id": 761,
      "main": "Dust",
      "description": "dust",
      "icon": "50d"
    }
  ],

```



#### Supported Version

This integration will support the latest version's (52.0) releases. For more information on this, please click [here](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/api_rest_eol.htm).





