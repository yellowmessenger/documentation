---
title: Service Now
sidebar_label: Service Now
---

Yellow.ai integrates with ServiceNow, allowing you to use bots to manage your IT service requests. Connect your ServiceNow account with Yellow.ai  for a streamlined service desk operations.


This integration allows you to perform the following tasks:

| Action                  | Description                                         |
|-------------------------|-----------------------------------------------------|
| Create ticket           | Create a ticket in ServiceNow.                |
| Update ticket           | Update a ticket in ServiceNow.                |
| Search ticket           | Search for a ticket in ServiceNow.            |
| Upload file             | Upload a file to ServiceNow.                        |
| Get file                | Fetch a file from ServiceNow.                       |
| Get File list           | Fetch a file list from ServiceNow.                  |


## Connect ServiceNow with Yellow.ai

Create an app on ServiceNow to fetch instance URL, client ID and client secret and input the details in Yellow.ai to establish this integration.

### Create an app on ServiceNow

1. Go to your **ServiceNow** instance, search for **Application Registry** in the **Filter Navigator**.

   ![](https://i.imgur.com/qBJ5dY5.png)

2. Go to **New** (on the top right corner) and  click **Create an OAuth API endpoint for external clients** to create an application.

   ![](https://i.imgur.com/xBiqezj.png)

3. Fill in the following fields:

   ![](https://i.imgur.com/zgrRAo1.png)

  * **Name**: Enter a unique name for your application.
  * **Redirect URL**: Click the lock icon to open the field and add this [Redirect URL](https://cloud.yellow.ai/integration/oauth/serviceNow).
 * **Accessible from**: Choose **All Application Scopes** and click **Submit**.

4. Once the app is created, it will get listed as shown below. Click on it.
 
   ![](https://i.imgur.com/wLMT7Lp.png)

5. Copy the **Instance URL** (the URL on the  address bar of your Service now account(as shown below), **Client ID** and **Client Secret**. To copy the client secret, click the lock icon and then copy.

   ![](https://i.imgur.com/rfa8kRA.png)

### Authorize Yellow.ai to access your Service now account

1. Go to **Integrations** > **ITSM** >  **Service Now**.

   ![](https://i.imgur.com/uydxecF.png)

2. In **Give account name** provide a name to that Service now account. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
3. Copy and paste the **Instance URL**, **Client ID** and **Client Secret** (as mentioned in the previous section)
4. Click **Connect**.
5. You will be prompted to grant authorization, click **Allow**.

   <img src="https://i.imgur.com/3FcGmnh.png" alt="drawing" width="70%"/>

7. If you have multiple accounts, follow the above mentioned steps to add each of them. You can add a maximum of 15 accounts.

   ![](https://i.imgur.com/P3eT1jA.png)

:::info
1. In a two-tier environment, add account names in Development and use them in Live.
2. In a three-tier environment, add accounts in Staging and Sandbox, and they'll be available in Production.
:::

## Manage ServiceNow from Yellow.ai

From Yellow.ai you can access your ServiceNow instance and create, update and search a ticket, upload,get file and file list.
    
1. Go to **Studio** and [create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow) that suits your use case.
2. At whichever point of the conversation you want the bot to access ServiceNow, include Service now Integration node. To include the node, click to add a node > **Integrations** > **ServiceNow**.

   ![](https://i.imgur.com/0YSzVWM.png)

3. Click the node and set the following fields.

   <img src="https://i.imgur.com/UIIJEWt.png" alt="drawing" width="70%"/>
   
  * **Account name:** Choose the Service now account for the intended action.
   *  **Action:** Select the action to perform. 
   *  **Select Objects:** Choose the object (**Incident**/**Request**) in which the chosen action should be performed. **Get File** action is an exception, the **Select Objects** field doesn't apply to this action.
   *  Once you choose the object, the corresponding fields for that action and object is displayed. Fill these fields by adding nodes before the ServiceNow node to collect user information, or click 'Or' to manually input the details.
 
   To collect the information from user, add a [prompt node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#docusaurus_skipToContent_fallback) and [store the response in a variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#store-data-in-variables). Pass that variable in the respective field.
 
   *  **Parse API response:** Select the function that will parse the API response(optional). To know more about how to use this, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/api/send-receive-apiresponses#parse-api-responses).

4. [Store the API response in a variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#store-data-in-variables) and pass it in a [message node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#docusaurus_skipToContent_fallback) to display the response to the end user.


## Example

Let's say that you want to fetch a ticket's information in **Requests** using the ticket number. 

1. Add a [prompt node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#docusaurus_skipToContent_fallback) and collect the ticket number value in a variable.

   <img src="https://i.imgur.com/7mAE2Qk.png" alt="drawing" width="70%"/>


2. Include the **ServiceNow** node wherever you want the bot to access ServiceNow and click the node.

   <img src="https://i.imgur.com/fRejQcF.png" alt="drawing" width="70%"/>

 * **Account name:** Choose the **ServiceNow** account in which you want to perform this action.
* **Action:** Choose **Search Ticket**.
* **Select Objects:** Choose **Requests**.
* **Select Fields:** Choose the field based on which you want to search. Here it's **Number**.
* **Value:** Pass the variable which contains the number value (from step 1). You can also click **Or** and type the value if it is a static value.
* **Parse API response:** Select the function that will parse the API response(optional). To know more about how to use this, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/api/send-receive-apiresponses#parse-api-responses). Store the response in a variable.

   <img src="https://i.imgur.com/LSXhi0V.png" alt="drawing" width="70%"/>

3. Use a [message node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#docusaurus_skipToContent_fallback) and pass this variable in it to display this response to the end user.

   <img src="https://i.imgur.com/6AaqPMh.png" alt="drawing" width="60%"/>

**Alternative**:

You can also [store the API response in a variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#store-data-in-variables) and use a syntax in a message node to display certain info from the API response. Refer to this [article](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode#display-api-response) for syntaxes.

For example, you can use ``{{{variables.variablename.result.0.number}}}`` to retrieve the ticket number from the following response.

```
{
  "result": {
    "sys_updated_on": "2021-11-12 14:16:35",
    "task_effective_number": "INC0010005",
    "number": "INC0010005",
    "sys_updated_by": "admin",
    "opened_by": {
      "link": "https://dev61928.service-now.com/api/now/table/sys_user/6816f79cc0a8016401c5a33be04be441",
      "value": "6816f79cc0a8016401c5a33be04be441"
    },
    "sys_created_on": "2021-11-12 14:16:35",
    "sys_domain": {
      "link": "https://dev61928.service-now.com/api/now/table/sys_user_group/global",
      "value": "global"
    },
    "state": "1",
    "sys_created_by": "admin",
    "knowledge": "false",
    "opened_at": "2021-11-12 14:16:35",
    "short_description": "This is short description",
    "description": "Hardware Name : Dell Inspiron 27 7790nRequester Name : Shubhi SaxenanColor : Dark Black",
    "close_notes": "",
    "sys_class_name": "incident",
    "closed_by": "",
    "sys_id": "e788251187333010fc0763150cbb358c",
    "incident_state": "1",
    "urgency": "2",
    "severity": "3",
    "approval": "not requested",
    "upon_approval": "proceed",
    "category": "inquiry"
  }
}

```
