---
title: Freshservice ITSM
sidebar_label : Freshservice ITSM
---

Integrating Freshservice ITSM with Yellow.ai enables the following actions:

* [Display list of active tickets requiring resolution](#11-see-list-of-all-tickets-list-all-tickets).
* [Check the status of a specific ticket](#12-ticket-status).
* [Create a new IT-related ticket](#13-create-ticket).


## 1. Connecting Freshservice ITSM with your bot


In a two-tier environment, you can connect an integration app in the Development environment.  In a three-tier environment, you can connect the integration app either in Staging or Sandbox. All connected integrations are available in the live environment.

To connect Freshservice ITSM, follow these steps:

1. Switch to the Development/Staging environment.

2. On the left navigation bar, click **Extensions** > **Integrations** > **ITSM** > **Freshservice ITSM**. Alternatively, you can search for the integration using the Search app.

   ![](https://i.imgur.com/GRxUAhb.png)

3. **Give account name** (only lowercase alphanumeric and `_` are supported), and enter the **API Key** (This key will be provided by the client/freshservice spoc of the client), and **Domain name**.

   ![](https://i.imgur.com/GKoMiy2.png)
   
:::note
The format of this field should be https://yellowtest.freshservice.com/api/v2 and this is also to be provided by the client/freshservice spoc of the client.
:::

4. Click **Connect**.  The integration will be enabled for the bot.

5. To add another account, repeat the above mentioned steps. You can add a maximum of 15 accounts.



## Accessing Freshservice Functions through Bot Conversation 

Once the integration is successful, you can access the following Freshservice functions directly from the Yellow.ai bot.

   <img src="https://i.imgur.com/mpyoTYs.png" width="80%"/>

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

### 1.1 See List of all tickets (List all tickets)

This action retrieves User Tickets by email address.


   <img src="https://i.imgur.com/S9MydXP.png" width="80%"/>


Now the set of mandatory fields required for the successful execution of this use case (My Tickets in this case), will be displayed. The below-mentioned table below consists of the sample value, data type, and description for each field present in the above screenshot.

| Field name | Sample value |  Data type   | Description |
| -------- | -------- | --- | -------- |
| SortBy| desc | String | Choose whether to sort the response by ascending order (asc) of timestamp or descending order (desc) |
| UserEmail | test@gmail.com| String |Email address of the requester |



#### Sample sample response

```json
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

Retrieves the current status of a specific ticket.

   ![](https://i.imgur.com/Ej7AdyX.png)


| Mandatory input name | Sample value |  Data type   | Description |
| -------- | -------- | --- | -------- |
|TicketId|1588402269|String|The ticketId whose status needs to be fetched|



#### Sample response

```json
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


**To use this Integration Action Node in an app.yellow.ai bot**, then refer to the below-mentioned example:

```json
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

Creates a new ticket in the Freshservice ITSM app.





   <img src="https://i.imgur.com/OvGpWY1.png" width="80%"/>


Now the set of mandatory fields required for the successful execution of this use case (Create Ticket in this case), will be displayed. 
The below-mentioned table below consists of the sample value, data type, and description for each field present in the above screenshot.

| Mandatory input params | Sample value |  Data type   | Description |
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



#### Sample response

```json
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

**To use this Integration Action Node in an app.yellow.ai bot**, refer to the below-mentioned example:

```json
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




