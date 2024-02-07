---
title: Freshservice ITSM
sidebar_label : Freshservice ITSM
---

Yellow.ai integration with Freshservice ITSM enables the end user to do the following actions:

* Fetch the list of active tickets that require a resolution to be provided.
* Checking the status of a particular ticket.
* Create a new IT-related ticket.

## 1. Configuration


You can configure Freshservice ITSM Solution by following the below steps:

1. Log in to cloud.yellow.ai and click the Integrations Module from the top left corner of your screen.
2. Then search the integration named Freshservice ITSM Solution or choose the category named ITSM from the left navigation bar and then click Freshservice ITSM Solution.
3. This will now open a section where we have to type in the required details to enable this integration. The required values are API Key (This key will be provided by the client/freshservice spoc of the client), and Domain Name.
:::note
The format of this field should be https://yellowtest.freshservice.com/api/v2 and this is also to be provided by the client/freshservice spoc of the client.
:::

4. After entering these values, you need to click **Connect** and the integration will be enabled at yellow.ai’s end.

![](https://i.imgur.com/UA5udkA.jpg)


![](https://i.imgur.com/7oBwA4s.jpg)


![](https://i.imgur.com/44WE6pM.png)

5. If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 15 accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::


## 2. Use-cases 

Following are the use cases that are currently accommodated in the integration:

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

### 1.1 My Tickets

In the studio flow builder, you need to choose the node type Integrations from the dialog box and then you will see an option to select **Freshservice ITSM** Solution from the list of Integrations that have been enabled for that particular bot.

![](https://i.imgur.com/f8G79pl.jpg)


After clicking on Freshservice ITSM Solution, you will see that an Integration Action Node is added to the flow builder. Upon clicking on the Integration Action Node, you will see the dropdown of available use cases for this integration and you need to choose **My Tickets **from that dropdown.


![](https://i.imgur.com/JXPPrh4.png)


Now the set of mandatory fields required for the successful execution of this use case (My Tickets in this case), will be displayed. The below-mentioned table below consists of the sample value, data type, and description for each field present in the above screenshot.

| Field name | Sample value |  Data type   | Description |
| -------- | -------- | --- | -------- |
|SortBy|desc/asc|String|The value of this field determines if the response from the API is in ascending/descending order of the timestamp|
|UserEmail|test@gmail.com|String|Email address of the requester|


The **My Tickets Integration Action Node** has two possible outcomes, success or failure which are depicted by the success and fallback branches. Based on whether the execution of the Integration Action Node was successful or not, the flow will proceed to the **success** or **fallback** branches respectively.


**Sample response**

```
{
  "ticket": {
    "cc_emails": [],
    "fwd_emails": [],
    "reply_cc_emails": [],
    "fr_escalated": false,
    "spam": false,
    "email_config_id": null,
    "group_id": null,
    "priority": 3,
    "requester_id": 1000000678,
    "requested_for_id": 1000000670,
    "responder_id": null,
    "source": 2,
    "status": 2,
"subject": "Ticket Title",
    "to_emails": null,
    "sla_policy_id": 1000000029,
    "department_id": null,
    "id": 266,
    "type": "Incident",
    "due_by": "2017-09-08T23:03:44Z",
    "fr_due_by": "2017-09-08T15:03:44Z",
    "is_escalated": false,
    "description": "<div>this is a sample ticket</div>",
    "description_text": "this is a sample ticket",
    "custom_fields": {
      "custom_text": null,
      "auto_checkbox": false
    },
    "created_at": "2017-09-08T11:03:44Z",
    "updated_at": "2017-09-08T11:37:01Z",
    "urgency": 1,
    "impact": 1,
    "category": null,
    "sub_category": null,
    "item_category": null,
    "deleted": false,
    "attachments": [
      {
        "content_type": "text/plain",
        "size": 5,
        "name": "attachment.txt",
        "attachment_url": "https://cdn.freshservice/data/Helpdesk/attachments/production/19852343/original/attachment.txt",
        "created_at": "2017-09-08T11:03:45Z",
        "updated_at": "2017-09-08T11:03:45Z"
      }
    ]
  }
}


```

In case of success, you need to extract the relevant keys present in the ticket object and display them to the end user with an appropriate message with the help of any of the Message type nodes.

**To use this Integration Action Node in an app.yellow.ai bot**, then refer to the below-mentioned example:

```
   app.executeIntegrationAction({
    		"integrationName": "fresh-service",
    		"action": "My Tickets",
"dynamicParams": {
    "sortBy": "asc",
    "userEmail": "test@gmail.com"
}
}).then((res)=>{
    console.log("response from action node", res);
    app.log(res, '||Response from action node||')
}).catch((err)=>{
    console.log("Error in action node",err);
    app.log(err, '||Error in action node||')
})


```
### 1.2 Ticket Status 

In the studio flow builder, you need to choose the node type Integrations from the dialog box and then you will see an option to select Freshservice ITSM Solution from the list of Integrations that have been enabled for that particular bot.


![](https://i.imgur.com/FXQ38WD.jpg)


After clicking on Freshservice ITSM Solution, you will see that an Integration Action Node is added to the flow builder. Upon clicking on the Integration Action Node, you will see the dropdown of available use cases for this integration and you need to choose **Ticket Status** from that dropdown.

![](https://i.imgur.com/Ej7AdyX.png)


Now the set of mandatory fields required for the successful execution of this use case (Ticket Status in this case), will be displayed. 

The below-mentioned table below consists of the sample value, data type, and description for each field present in the above screenshot.

| Field name | Sample value |  Data type   | Description |
| -------- | -------- | --- | -------- |
|TicketId|1588402269|String|The ticketId whose status needs to be fetched|

The **Ticket Status Action Node** has two possible outcomes, success or failure which are depicted by the success and fallback branches. Based on whether the execution of the Integration Action Node was successful or not, the flow will proceed to the **success** or **fallback** branches respectively.


**Sample response**

```
{
  "ticket": {
    "cc_emails": [],
    "fwd_emails": [],
    "reply_cc_emails": [],
    "fr_escalated": false,
    "spam": false,
    "email_config_id": null,
    "group_id": null,
    "priority": 3,
    "requester_id": 1000000678,
    "requested_for_id": 1000000670,
    "responder_id": null,
    "source": 2,
    "status": 2,
    "subject": "Ticket Title",
    "to_emails": null,
    "sla_policy_id": 1000000029,
    "department_id": null,
    "id": 266,
    "type": "Incident",
    "due_by": "2017-09-08T23:03:44Z",
    "fr_due_by": "2017-09-08T15:03:44Z",
    "is_escalated": false,
   "description": "<div>this is a sample ticket</div>",
    "description_text": "this is a sample ticket",
    "custom_fields": {
      "custom_text": null,
      "auto_checkbox": false
    },
    "created_at": "2017-09-08T11:03:44Z",
    "updated_at": "2017-09-08T11:37:01Z",
    "urgency": 1,
    "impact": 1,
    "category": null,
    "sub_category": null,
    "item_category": null,
    "deleted": false,
    "attachments": [
      {
        "content_type": "text/plain",
        "size": 5,
        "name": "attachment.txt",
        "attachment_url": "https://cdn.freshservice/data/Helpdesk/attachments/production/19852343/original/attachment.txt",
        "created_at": "2017-09-08T11:03:45Z",
        "updated_at": "2017-09-08T11:03:45Z"
      }
    ]
  }
}

```

In case of success, you need to extract the relevant keys present in the **ticket** object and display them to the end user with an appropriate message with the help of any of the **Message type** nodes.

**To use this Integration Action Node in an app.yellow.ai bot**, then refer to the below-mentioned example:

```
 app.executeIntegrationAction({
    		"integrationName": "fresh-service",
    		"action": "Ticket Status",
"dynamicParams": {
    "ticketId": "21364"
}
}).then((res)=>{
    console.log("response from action node", res);
    app.log(res, '||Response from action node||')
}).catch((err)=>{
    console.log("Error in action node",err);
    app.log(err, '||Error in action node||')
})

```

### 1.3 Create Ticket

In the studio flow builder, you need to choose the node type Integrations from the dialog box and then you will see an option to select **Freshservice ITSM Solution** from the list of Integrations that have been enabled for that particular bot.


![](https://i.imgur.com/SrarUgX.jpg)


After clicking on Freshservice ITSM Solution, you will see that an Integration Action Node is added to the flow builder. Upon clicking on the Integration Action Node, you will see the dropdown of available use cases for this integration and you need to choose **Create Ticket** from that dropdown.


![](https://i.imgur.com/OvGpWY1.png)


Now the set of mandatory fields required for the successful execution of this use case (Create Ticket in this case), will be displayed. 
The below-mentioned table below consists of the sample value, data type, and description for each field present in the above screenshot.

| Field name | Sample value |  Data type   | Description |
| -------- | -------- | --- | -------- |
|RequesterEmailId|test@gmail.com|String|Email address of the requester. If no contact exists with this email address in Freshservice, it will be added as a new contact|
|RequesterMobileNumber|9876543210|String|Phone number of the requester. If no contact exists with this phone number in Freshservice, it will be added as a new contact|
|TicketStatus|2/3/4/5|Number|Status of the ticket|
|TicketPriority|1/2/3/4|Number|Priority of the ticket|
|TicketSource|1/2/3/4/5/6/7/8/9/10|Number|The channel through which the ticket was created|
|RequesterName|Raj|String|Name of the requester|
|TicketSubject|Test Subject|String|Subject of the ticket|
|TicketCategory|Growth|String|Category of the ticket|
|TicketSubCategory|Marketing|String|Sub-category of the ticket|
|TicketDescription|Test Description|String|HTML content of the ticket|
|CustomFields|{custom_fields:{“this is a test”}}|Object|Key value pairs containing the names and values of custom fields|


The **Create Ticket Integration Action Node** has two possible outcomes, success or failure which are depicted by the success and fallback branches. Based on whether the execution of the Integration Action Node was successful or not, the flow will proceed to the **success** or **fallback** branches respectively.

**Sample response**

```
{
  "ticket": {
    "cc_emails": [
      "ram@freshservice.com",
      "diana@freshservice.com"
    ],
    "fwd_emails": [],
    "reply_cc_emails": [
      "ram@freshservice.com",
      "diana@freshservice.com"
    ],
    "fr_escalated": false,
    "spam": false,
    "email_config_id": null,
    "group_id": null,
    "priority": 1,
    "requester_id": 1000000675,
    "requested_for_id": 1000000670,
    "responder_id": null,
    "source": 2,
    "status": 2,
    "subject": "Support Needed...",
    "to_emails": null,
    "department_id": null,
    "id": 265,
    "type": "Incident",
    "due_by": "2017-09-11T10:34:28Z",
    "fr_due_by": "2017-09-09T10:34:28Z",
    "is_escalated": false,
 "description": "<div>Details about the issue...</div>",
    "description_text": "Details about the issue...",
    "category": null,
    "sub_category": null,
    "item_category": null,
    "custom_fields": {
      "custom_text": "This is a custom text box",
      "auto_checkbox": null
    },
    "created_at": "2017-09-08T10:34:28Z",
    "updated_at": "2017-09-08T10:34:28Z",
    "tags": [],
    "attachments": []
  }
}

```

**To use this Integration Action Node in an app.yellow.ai bot**, then refer to the below-mentioned example:

```
  app.executeIntegrationAction({
    		"integrationName": "fresh-service",
    		"action": "Create Ticket",
"dynamicParams": {
    "requesterEmailId": "test@gmail.com",
    "requesterMobileNumber": "9876543210",
    "ticketStatus": 2,
    "ticketPriority": 3,
    "ticketSource": 2,
    "requesterName": "Raj",
    "ticketSubject": “Test Subject",
    "ticketCategory": “Growth",
    "ticketSubCategory": “Marketing",
    "ticketDescription": “Test description",
    “customFields”: { "custom_text" : "This is a custom text box" }
}
}).then((res)=>{
    console.log("response from action node", res);
    app.log(res, '||Response from action node||')
}).catch((err)=>{
    console.log("Error in action node",err);
    app.log(err, '||Error in action node||')
})

```




