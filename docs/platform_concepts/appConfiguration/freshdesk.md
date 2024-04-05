---
title : Freshdesk
sidebar_label : Freshdesk
---

The integration is tailored for users who are already using the Freshdesk platform. With Freshdesk integration, you gain the ability to seamlessly perform various support-related activities directly from the Yellow.ai Cloud platform. This includes creating and updating tickets, accessing ticket details, modifying ticket forms, retrieving agent information, creating notes, and adding watchers to tickets. 

This integration enhances your support capabilities as a Freshdesk user by providing you with additional tools and functionalities within the Yellow.ai platform, facilitating a more efficient and streamlined support process.




## 1. Connect Freshdesk with Yellow.ai

For this integration, you will need **Freshdesk domain** and an **API key**. 

### 1.1 Get your domain address & API Key from Freshdesk 

1. Log in to your **Freshdesk** account.
2. From the browser address bar, copy the **Freshdesk domain URL**. Example: https://yellowai-dummy.freshdesk.com
3. Click your profile picture on the top right corner.

   <img src="https://i.imgur.com/BM5bpz1.png" alt="drawing" width="30%"/>

4. Go to the **Profile Settings**.
5. Your API Key will be available in the right corner below the *Change password* section. Copy it.

   ![](https://i.imgur.com/2Cvs7LR.png)



### 1.2 Add API key and domain to the Cloud platform

1. Go to the [Cloud Platform](https://cloud.yellow.ai) and navigate to the Development environment.
   * In a two-tier environment, you can only add accounts in the Development environment.
   * In a three-tier environment, you can only add accounts in Staging/Sandbox environment.
2. Search for **Freshdesk** in the **All Integrations** search box. 

   <img src="https://i.imgur.com/9fReTSZ.png"/>

3. In **Give account name**, enter a unique name for the account.Supports only lowercase alphanumeric and underscore characters. It is recommended to use a name that aligns with its purpose for better usability. 

4. Enter the **Api Key** and  **Domain Name** and click the **Connect** button.
5. To connect additional accounts, repeat the steps outlined above for each account. You can add a maximum of 15 accounts.




## 2. Manage Freshdesk Tickets through Studio (bot conversations)

This integration facilitates various actions for managing Freshdesk tickets directly within Studio's bot conversations. You can view the connected accounts under Node > **Integrations** > **Freshdesk** in Studio.
  
  ![](https://i.imgur.com/QFXJeRm.png)



:::note
When multiple accounts are added, choose the right account that you want to use to manage tickets.
:::

### 2.1 Create ticket

This action creates a new support ticket in **Freshdesk**.

**Node Input Params:**


| Field Name       | Description                                             | Datatype        |
| ---------------- | ------------------------------------------------------- | --------------- |
| Email            | Email address of the user. Example: jhon.doe@yellow.ai  | String          |
| Name             | Name of the user. Example: John Doe                     | String          |
| Phone            | Mobile number of the user (sample value: 9999999999)    | String          |
| Priority         | Priority level of the ticket (Low: 1, Medium: 2, High: 3, Urgent: 4) | Number  |
| Source           | Source of the ticket (Email: 1, Portal: 2, Phone: 3, Chat: 7, Feedback Widget: 9, Outbound Email: 10) | Number Type |
| Status           | Status of the ticket (Open: 2, Pending: 3, Resolved: 4, Closed: 5) | Number |
| Tags             | Tags associated with the ticket ("login failure", "system issue") | Array  |
| Custom Fields    | Custom fields and their values (`{"cf_key1": "value1", ...}`) | Object Type (Ensure key names are prefixed with "cf_") |
| Email Config ID  | Email configuration ID                                  | Number |
| Description      | Description of the ticket                               | String |
| Group ID         | Group ID associated with the ticket                     | Number |
| Product ID       | Product ID associated with the ticket                   | Number |
| Subject          | Subject of the ticket                                   | String |
| Type             | Type of the ticket (e.g., Incident, Problem)            | String |



**Sample Response:**

```json
{
  "cc_emails": [
    "ram@freshdesk.com",
    "diana@freshdesk.com"
  ],
  "fwd_emails": [],
  "reply_cc_emails": [
    "ram@freshdesk.com",
    "diana@freshdesk.com"
  ],
  "email_config_id": null,
  "group_id": null,
  "priority": 1,
  "requester_id": 129,
  "responder_id": null,
  "source": 2,
  "status": 2,
  "subject": "Support needed..",
  "company_id": 1,
  "id": 1,
  "type": "Question",
  "to_emails": null,
  "product_id": null,
  "fr_escalated": false,
  "spam": false,
  "urgent": false,
  "is_escalated": false,
  "created_at": "2015-07-09T13:08:06Z",
  "updated_at": "2015-07-23T04:41:12Z",
  "due_by": "2015-07-14T13:08:06Z",
  "fr_due_by": "2015-07-10T13:08:06Z",
  "description_text": "Some details on the issue ...",
  "description": "<div>Some details on the issue ..</div>",
  "tags": [],
  "attachments": []
}

```

### 2.2 Update ticket

This action updates a single ticket.

**Node Input Params:**

| Field Name       | Description                                             | Datatype        |
| ---------------- | ------------------------------------------------------- | --------------- |
| Ticket ID        | Ticket identification number (e.g., 2112)                | Number |
| Email            | Email address of the user (e.g., jhon.doe@yellow.ai)    | String |
| Name             | Name of the user (e.g., John Doe)                       | String |
| Phone            | Mobile number of the user (e.g., 9999999999)            | String |
| Priority         | Priority level of the ticket (Low: 1, Medium: 2, High: 3, Urgent: 4) | Number |
| Source           | Source of the ticket (Email: 1, Portal: 2, Phone: 3, Chat: 7, Feedback Widget: 9, Outbound Email: 10) | Number |
| Status           | Status of the ticket (Open: 2, Pending: 3, Resolved: 4, Closed: 5) | Number  |
| Tags             | Tags associated with the ticket (e.g., ["login failure", "system issue"]) | Array   |
| Custom Fields    | Custom fields and their values (e.g., {"key1": "value1", ...}) | Object Type (Ensure key names are prefixed with "cf_") |
| Email Config ID  | Email configuration ID                                  | Number |
| Description      | Description of the ticket                               | String |
| Group ID         | Group ID associated with the ticket                     | Number |
| Product ID       | Product ID associated with the ticket                   | Number |
| Subject          | Subject of the ticket                                   | String |
| Type             | Type of the ticket (e.g., Incident, Problem)            | String |


**Sample Response:**

```json

{
  "cc_emails": [],
  "fwd_emails": [],
  "reply_cc_emails": [],
  "description_text": "Not given.",
  "description": "<div>Not given.</div>",
  "spam": false,
  "email_config_id": null,
  "fr_escalated": false,
  "group_id": null,
  "priority": 2,
  "requester_id": 1,
  "responder_id": null,
  "source": 3,
  "status": 3,
  "subject": "",
  "id": 20,
  "type": null,
  "to_emails": null,
  "product_id": null,
  "attachments": [],
  "is_escalated": false,
  "tags": [],
  "created_at": "2015-08-24T11:56:51Z",
  "updated_at": "2015-08-24T11:59:05Z",
  "due_by": "2015-08-27T11:30:00Z",
  "fr_due_by": "2015-08-25T11:30:00Z"
}
```
### 2.3 List all tickets

This action retrieves all the tickets. By default, only 50 tickets that were created in the past 30 days will be displayed. To get more tickets, pagination parameters can be used.
                
**Node Input Params:**

| Field Name | Description                    | Datatype     |
|------------|--------------------------------|--------------|
| Page No    | Page number                    | Number       |
| Page Size  | Number of items per page       | Number       |



**Sample Response:**

````
  {
  "body": [
    {
      "cc_emails": [
        "user@cc.com",
        "user2@cc.com"
      ],
      "fwd_emails": [],
      "reply_cc_emails": [
        "user@cc.com",
        "user2@cc.com"
      ],
      "fr_escalated": false,
      "spam": false,
      "email_config_id": null,
      "group_id": 2,
      "priority": 1,
      "requester_id": 5,
      "responder_id": 1,
      "source": 2,
      "status": 2,
      "subject": "Please help",
      "to_emails": null,
      "product_id": null,
      "id": 18,
      "type": "Lead",
      "created_at": "2015-08-17T12:02:50Z",
      "updated_at": "2015-08-17T12:02:51Z",
      "due_by": "2015-08-20T11:30:00Z",
      "fr_due_by": "2015-08-18T11:30:00Z",
      "is_escalated": false,
      "custom_fields": {
        "cf_category": "Default"
      }
    },
    {
      "cc_emails": [],
      "fwd_emails": [],
      "reply_cc_emails": [],
      "fr_escalated": false,
      "spam": false,
      "email_config_id": null,
      "group_id": null,
      "priority": 1,
      "requester_id": 1,
      "responder_id": null,
      "source": 2,
      "status": 2,
      "subject": "",
      "to_emails": null,
      "product_id": null,
      "id": 17,
      "type": null,
      "created_at": "2015-08-17T12:02:06Z",
      "updated_at": "2015-08-17T12:02:07Z",
      "due_by": "2015-08-20T11:30:00Z",
      "fr_due_by": "2015-08-18T11:30:00Z",
      "is_escalated": false,
      "custom_fields": {
        "cf_category": null
      }
    }
  ]
}
````

### 2.4 View ticket
Retrieves the details for the specified ticket ID.

**Node Input Params:**

| Field Name | Description                             | Datatype     |
|------------|-----------------------------------------|--------------|
| Ticket ID  | Ticket identification number (e.g., 5) | Number       |


**Sample Response:**

```json
{
  "cc_emails": [
    "user@cc.com"
  ],
  "fwd_emails": [],
  "reply_cc_emails": [
    "user@cc.com"
  ],
  "email_config_id": null,
  "fr_escalated": false,
  "group_id": null,
  "priority": 1,
  "requester_id": 1,
  "responder_id": null,
  "source": 2,
  "spam": false,
  "status": 2,
  "subject": "",
  "company_id": 1,
  "id": 20,
  "type": null,
  "to_emails": null,
  "product_id": null,
  "created_at": "2015-08-24T11:56:51Z",
  "updated_at": "2015-08-24T11:59:05Z",
  "due_by": "2015-08-27T11:30:00Z",
  "fr_due_by": "2015-08-25T11:30:00Z",
  "is_escalated": false,
  "association_type": null,
  "description_text": "Not given.",
  "description": "<div>Not given.</div>",
  "custom_fields": {
    "cf_category": "Primary"
  },
  "tags": [],
  "attachments": []
}
```

### 2.5 Update multiple tickets

This action allows the user to update multiple tickets.

**Node Input Params:**

| Field Name         | Description                                                                                   | Datatype            |
|--------------------|-----------------------------------------------------------------------------------------------|---------------------|
| Ticket IDs         | Array of ticket identification numbers (e.g., [5,6,7])                                        | Array of Number     |
| Properties         | Object containing ticket properties <br/> ![Properties](https://i.imgur.com/3GNlnri.png)<br/> ![Properties](https://i.imgur.com/wR3Gzye.png)   | Object Type         |
| Reply              | Object containing the content of the reply to be added to the tickets <br/> ![Reply](https://i.imgur.com/kCnb3DA.png)                                   | Object Type         |
| From Email         | Support email address from which the reply should be sent                                      | String              |
| Email Config ID   | ID of the support email configuration on the ticket                                            | Number              |
| Group ID           | ID of the group to be assigned to the ticket                                                    | Number              |
| Priority           | Priority level of the ticket (Possible values: 1, 2, 3, 4)                                      | Number              |
| Source             | Source of the ticket (Possible values: 1, 2, 3, 7, 8, 9, 10)                                    | Number              |
| Status             | Status of the ticket (Possible values: 2, 3, 4, 5, 6, 7)                                        | Number              |
| Type               | Type of the ticket                                                                             | String              |
| Product ID         | ID of the product to be associated with the ticket                                              | Number              |
| Custom Fields      | Key-value pairs containing the names and values of custom fields. Ensure keys are prefixed with `cf_` (e.g., {"cf_key1": "value1", ...})        | Object              |
| Tags               | Array of strings representing tags associated with the ticket                                   | Array of strings    |
| Internal Agent Id  | ID of the internal agent to whom the ticket should be assigned                                   | Number              |
| Internal Group Id  | ID of the internal group to which the ticket should be assigned                                 | Number              |




|Field Name|	Sample Input|	Remarks|
| -------- | -------- | -------- |
| Ticket IDs|	[5,6,7]|	Array of Number|
|Properties|| Object Type <br/> <img src="https://i.imgur.com/3GNlnri.png" alt="drawing" width="50%"/><br/> <img src="https://i.imgur.com/wR3Gzye.png" alt="drawing" width="50%"/>|
|Reply||Object Type<br/> Content of the reply to be added to the tickets<br/> <img src="https://i.imgur.com/kCnb3DA.png" alt="drawing" width="60%"/>|
|From Email	|String|	Support email from which the reply should be sent|
Email Config ID|	Number|	Support email config on the ticket. This will be used for the corresponding responses on the ticket.|
|Group ID|	Number|	ID of the group to be assigned on the ticket|
|Priority|	Number|	Used to set the priority of the ticket. Possible values are 1,2,3,4|
|Source|	Number|	Used to set the source of the ticket. Possible values are 1, 2,3,7,8,9,10|
|Status|	Number|	Used to set the status of the ticket. Possible values are 2,3,4,5,6,7|
|Type|	String|	Type of the ticket|
|Product ID	|Number|	ID of the product to be associated with the ticket|
|Custom Fields|	Object|	Key value pairs containing the names and values of custom fields. For custom fields, it's necessary to prefix the key with `cf_`.|
|tags|	Array of strings|	Tags that have been associated with the ticket|
|Internal Agent Id|	Number	|ID of the internal agent to whom the ticket should be assigned|
|Internal Group Id|	Number|	ID of the internal group to which the ticket should be assigned with|

**Sample Response:**

```
{
  "job_id": "e4d18654f60b5204513155b26c6cb",
  "href": "https://domain.freshdesk.com/api/v2/jobs/e4d18654f60b5204513155b26c6cb"
}

```

### 2.6 Filter tickets

This action returns a filtered list of tickets based on the specified query filter. The number of objects returned per page is 30.  The total count of the results will also be returned with the result.

**Node Input Params:**

| Field Name | Description | Datatype |
| ---------- | ----------- | -------- |
| query*     | Search query (e.g., "(priority:2)") | String  |
| Page no    | Page number (e.g., 2) | Number  (Max:10) |


**Query Formats:**

 * "(ticket_field:integer OR ticket_field:'string') AND ticket_field:boolean"
 * "priority:>3 AND created_at:'2017-01-01'"
 * "type:null AND priority:4"

**Sample Response:**

```json
 {
  "total": 49,
  "results": [
    {
      "cc_emails": [
        "clark.kent@kryptonspace.com"
      ],
      "fwd_emails": [],
      "reply_cc_emails": [],
      "fr_escalated": false,
      "spam": false,
      "email_config_id": 17,
      "group_id": 156,
      "priority": 3,
      "requester_id": 6007738334,
      "responder_id": 6001263404,
      "source": 2,
      "company_id": 2,
      "status": 2,
      "subject": "Sample Title",
      "to_emails": null,
      "product_id": null,
      "id": 47,
      "type": null,
      "due_by": "2016-02-23T16:00:00Z",
      "fr_due_by": "2016-02-22T17:00:00Z",
      "is_escalated": true,
      "description": "<div>Sample description</div>",
      "description_text": "Sample description",
      "created_at": "2016-02-20T09:16:58Z",
      "updated_at": "2016-02-23T16:14:57Z",
      "custom_fields": {
        "cf_sector_no": 7,
        "cf_locked": true
      }
    },
    {
      "cc_emails": [
        "bruce.wayne@gothamdomain.com"
      ],
      "fwd_emails": [],
      "reply_cc_emails": [],
      "fr_escalated": true,
      "spam": false,
      "email_config_id": 44,
      "group_id": 65,
      "priority": 3,
      "requester_id": 6007738334,
      "responder_id": 6001263404,
      "source": 2,
      "company_id": 33,
      "status": 2,
      "subject": "New Title",
      "to_emails": null,
      "product_id": null,
      "id": 57,
      "type": null,
      "due_by": "2016-02-23T16:00:00Z",
      "fr_due_by": "2016-02-22T17:00:00Z",
      "is_escalated": true,
      "description": "<div>New description</div>",
      "description_text": "New description",
      "created_at": "2016-02-20T16:15:10Z",
      "updated_at": "2016-03-14T15:58:13Z",
      "custom_fields": {
        "cf_sector_no": 8,
        "cf_locked": true
      }
    }
  ]
}
```

### 2.7 Get all agents

Retrieves a list of all agents. The default **Page Number** is 1 and the **Page Size** is 50. 

**Node Input Params:**

| Field Name   | Description        | Datatype     |
|--------------|--------------------|--------------|
| Page Number  | Page number        | Number |
| Page Size    | Number of items per page (max: 10) | Number |


**Sample Response:**

```json
[
  {
    "available": true,
    "occasional": false,
    "signature": null,
    "id": 1,
    "ticket_scope": 1,
    "created_at": "2015-08-18T16:18:05Z",
    "updated_at": "2015-08-18T16:18:05Z",
    "available_since": null,
    "type": "support_agent",
    "contact": {
      "active": true,
      "email": "sample@freshdesk.com",
      "job_title": null,
      "language": "en",
      "last_login_at": "2015-08-21T14:54:46+05:30",
      "mobile": null,
      "name": "Support",
      "phone": null,
      "time_zone": "Chennai",
      "created_at": "2015-08-18T16:18:05Z",
      "updated_at": "2015-08-25T08:50:20Z"
    }
  },
  {
    "available": true,
    "occasional": false,
    "signature": null,
    "id": 432,
    "ticket_scope": 1,
    "created_at": "2015-08-28T11:47:58Z",
    "updated_at": "2015-08-28T11:47:58Z",
    "available_since": null,
    "type": "support_agent",
    "contact": {
      "active": false,
      "email": "superman@freshdesk.com",
      "job_title": "Journalist",
      "language": "en",
      "last_login_at": null,
      "mobile": null,
      "name": "Clark Kent",
      "phone": null,
      "time_zone": "Chennai",
      "created_at": "2015-08-28T09:08:16Z",
      "updated_at": "2015-08-28T11:47:58Z"
    }
  }
]      
```

### 2.8 Get all groups

This action returns a list of all agent groups. This data can be used in creating or updating ticket actions where a group id is required for assigning a ticket to a specific group of agents.

**Node Input Params:**

| Field Name   | Description        | Datatype     |
|--------------|--------------------|--------------|
| Page Number  | Page number        | Number |
| Page Size    | Number of items per page (max: 10) | Number |

**Sample Response:**

```json
[
  {
    "id": 6733,
    "name": "Account managers",
    "description": "Account managers",
    "escalate_to": null,
    "unassigned_for": null,
    "agent_ids": [],
    "created_at": "2021-02-10T07:20:31Z",
    "updated_at": "2021-02-10T07:20:31Z",
    "allow_agents_to_change_availability": false,
    "business_calendar_id": null,
    "type": "support_agent_group",
    "automatic_agent_assignment": {
      "enabled": false
    }
  },
  {
    "id": 6705,
    "name": "Billing",
    "description": "Members of the Billing team belong to this group",
    "escalate_to": null,
    "unassigned_for": null,
    "agent_ids": [],
    "created_at": "2021-02-10T06:32:10Z",
    "updated_at": "2021-02-10T06:32:10Z",
    "allow_agents_to_change_availability": false,
    "business_calendar_id": null,
    "type": "support_agent_group",
    "automatic_agent_assignment": {
      "enabled": false
    }
  },
  {
    "id": 6706,
    "name": "Payment",
    "description": "Members of the Payments team belong to this group",
    "escalate_to": [
      6
    ],
    "unassigned_for": "30",
    "agent_ids": [
      2
    ],
    "created_at": "2021-02-11T06:32:10Z",
    "updated_at": "2021-02-11T06:32:10Z",
    "allow_agents_to_change_availability": true,
    "business_calendar_id": 1,
    "type": "support_agent_group",
    "automatic_agent_assignment": {
      "enabled": true,
      "type": "channel_specific",
      "settings": [
        {
          "channel": "ticket",
          "assignment_type": "skill_based_round_robin",
          "assignment_type_settings": {
            "capping_limit": 2
          }
        }
      ]
    }
  }
]
```
### 2.9 Get all email configs

Retrieves all the email configs that are configured in the support panel settings. By default, it returns 50 records. To get more data, a pagination parameter can be provided. 

**Node Input Params:**

| Field Name   | Description        | Datatype     |
|--------------|--------------------|--------------|
| Page Number  | Page number        | Number |
| Page Size    | Number of items per page (max: 10) | Number |

**Sample Response:**

```json
[
  {
    "id": 1,
    "name": "Primary Email",
    "product_id": null,
    "to_email": "support@domain.freshdesk.com",
    "reply_email": "support@domain.freshdesk.com",
    "group_id": null,
    "primary_role": true,
    "active": true,
    "created_at": "2015-05-03T09:08:53+05:30",
    "updated_at": "2015-05-03T09:08:53+05:30"
  },
  {
    "id": 2,
    "name": "Support emails",
    "product_id": null,
    "to_email": "domaincomexample@domain.freshdesk.com",
    "reply_email": "example@domain.freshdesk.com",
    "group_id": 2,
    "primary_role": false,
    "active": false,
    "created_at": "2015-07-03T09:08:53+05:30",
    "updated_at": "2015-07-03T09:08:53+05:30"
  }
]
```
### 2.10 Get all products

Gets the list of products configured in the **Freshdesk** support panel. By default, it returns 50 records. To get more data, a pagination parameter should be provided. 

**Node Input Params:**

| Field Name   | Description        | Datatype     |
|--------------|--------------------|--------------|
| Page Number  | Page number        | Number |
| Page Size    | Number of items per page (max: 10) | Number |

**Sample Response:**

```json
[[
  {
    "id": 1,
    "name": "Freshservice",
    "description": "Support for IT",
    "created_at": "2015-07-03T09:08:53+05:30",
    "updated_at": "2015-07-03T09:08:53+05:30"
  }
]
```

### 2.11 Add watcher

This action adds agents as a watcher to the specified ticket. 

**Node Input Params:**

| Field Name | Description                        | Datatype       |
|------------|------------------------------------|---------------|
| Ticket ID  | Ticket identification number <br/> Example: 19      | Number  |
| User ID    | User identification number <br/> Example: 5         | Number    |


### 2.12 Get all ticket forms

Retrieves the list of all the available ticket forms from **Freshdesk**. This action doesn't require any parameter.

**Sample Response:**

```json
[
  {
    "id": 1,
    "name": "report_an_issue",
    "title": "Report an issue",
    "default": true,
    "description": "This form has all fields that customers can view or edit.",
    "created_at": "2022-05-25T10:43:01Z",
    "updated_at": "2022-06-01T10:21:34Z",
    "last_updated_by": 51020877290,
    "portals": []
  },
  {
    "id": 2,
    "name": "return_items",
    "title": "Return items",
    "default": false,
    "description": "Form to raise return requests on Acme portal",
    "created_at": "2022-05-27T10:33:34Z",
    "updated_at": "2022-05-31T10:06:26Z",
    "last_updated_by": 51020877290,
    "portals": [
      {
        "id": 1,
        "name": "portal 1"
      }
    ]
  }
]
```
### 2.13 View ticket form

Retrieves the ticket form details of the specified formId.

**Node Input Params:**

| Field Name | Description                             | Datatype   |
|------------|-----------------------------------------|------------|
| formId     | Form identification number               | Number     |

**Sample Response:**

```json
{
  "id": 3,
  "name": "return_items",
  "title": "Return items",
  "default": true,
  "description": "Form to raise return requests on Acme portal",
  "created_at": "2022-05-25T10:43:01Z",
  "updated_at": "2022-06-01T10:21:34Z",
  "last_updated_by": 51020877290,
  "portals": [],
  "fields": [
    {
      "id": 1,
      "name": "requester",
      "label": "Search a requester",
      "label_for_customers": "Requester",
      "position": 1,
      "type": "default_requester",
      "default": true,
      "customers_can_edit": true,
      "required_for_closure": false,
      "required_for_agents": true,
      "required_for_customers": true,
      "displayed_to_customers": true,
      "created_at": "2022-05-25 10:43:01",
      "updated_at": "2022-05-25 10:43:01",
      "archived": false,
      "portal_cc": "false",
      "portal_cc_to": "company"
    },
    {
      "id": 2,
      "name": "subject",
      "label": "Subject",
      "label_for_customers": "Subject",
      "position": 2,
      "type": "default_subject",
      "default": true,
      "customers_can_edit": true,
      "required_for_closure": false,
      "required_for_agents": true,
      "required_for_customers": true,
      "displayed_to_customers": true,
      "created_at": "2022-05-25 10:43:01",
      "updated_at": "2022-05-25 10:43:01",
      "archived": false
    },
    {
      "id": 3,
      "name": "status",
      "label": "Status",
      "label_for_customers": "Status",
      "position": 5,
      "type": "default_status",
      "default": true,
      "customers_can_edit": false,
      "required_for_closure": false,
      "required_for_agents": true,
      "required_for_customers": false,
      "displayed_to_customers": true,
      "created_at": "2022-05-25 10:43:01",
      "updated_at": "2022-05-25 10:43:01",
      "archived": false
    }
  ]
}
```

### 2.14 Update ticket form

This action helps in updating the title and description of the specified formId.

**Node Input Params:**

| Field Name | Description                             | Datatype     |
|------------|-----------------------------------------|--------------|
| formId     | Form identification number              | Number       |
| Title      | Title of the custom ticket form         | String       |
| Description| Description of the custom ticket form   | String       |


**Sample Response:**

```json
{
  "id": 1,
  "name": "updated_returns_form",
  "title": "Updated returns form",
  "default": false,
  "description": "New returns form for summer sale",
  "created_at": "2022-05-31T06:53:48Z",
  "updated_at": "2022-06-01T14:31:25Z",
  "last_updated_by": 51020877290,
  "portals": [],
  "fields": [
    {
      "id": 1,
      "name": "requester",
      "label": "Search a requester",
      "label_for_customers": "Requester details",
      "position": 1,
      "type": "default_requester",
      "default": true,
      "customers_can_edit": true,
      "required_for_closure": false,
      "required_for_agents": true,
      "required_for_customers": true,
      "displayed_to_customers": true,
      "created_at": "2022-05-31 06:53:48",
      "updated_at": "2022-05-31 09:02:28",
      "archived": false,
      "portal_cc": "false",
      "portal_cc_to": null
    },
    {
      "id": 2,
      "name": "company",
      "label": "Company",
      "label_for_customers": "Company",
      "position": 2,
      "type": "default_company",
      "default": true,
      "customers_can_edit": true,
      "required_for_closure": false,
      "required_for_agents": true,
      "required_for_customers": true,
      "displayed_to_customers": true,
      "created_at": "2022-05-31 06:53:48",
      "updated_at": "2022-05-31 06:53:48",
      "archived": false
    }
  ]
}
```

### 2.15 Update ticket form fields

This action helps in updating the fields in the ticket forms.

**Node Input Params:**

| Field Name          | Description                                          | Datatype      |
|---------------------|------------------------------------------------------|---------------|
| Field ID            | Field identification number                          | Number        |
| Form ID             | Form identification number                           | Number        |
| Field Name          | Name of the field                                    | String        |
| Field Placeholder   | Placeholder text for the field (e.g., johndoe@yellow.ai) | String     |
| Field Hint          | Hint text for the field displayed in a tooltip (e.g., Customer Email) | String |
| Is Editable         | Indicates if the field can be updated by customers (e.g., true) | Boolean |
| Field Position      | Position of the field in the form (e.g., 2)          | Number        |
| Required for Customers | Indicates if the field is required for customers in the portal (e.g., false) | Boolean |


**Sample Response:**

```
      {
  "id": 1,
  "name": "requester",
  "label": "Search a requester",
  "label_for_customers": "Requester email",
  "position": 1,
  "type": "default_requester",
  "default": true,
  "customers_can_edit": true,
  "required_for_closure": false,
  "required_for_agents": true,
  "required_for_customers": true,
  "displayed_to_customers": true,
  "created_at": "2022-05-27 10:33:34",
  "updated_at": "2022-05-31 09:25:06",
  "archived": false,
  "portal_cc": null,
  "portal_cc_to": null,
  "hint_for_customers": "Requester email",
  "placeholder_for_customers": "Requester Email"
}
```
### 2.16 Create note

This action helps in creating a public or private note in the ticket.

**Node Input Params:**

| Field Name    | Description                                     | Datatype           |
|---------------|-------------------------------------------------|--------------------|
| Body(HTML)    | HTML content for the note (e.g., <html><body>sample text</body></html>) | String (HTML) |
| Ticket ID     | Ticket identification number                    | Number             |
| Notify Agents | List of email addresses to notify (e.g., ["agent1@freshdesk.com", "agent2@freshdesk.com"]) | Array of strings |
| Private       | Indicates if the note is private (e.g., false for public, true for private) | Boolean            |
| User ID       | Identification of the agent adding the note (e.g., 3) | Number|



**Sample Response:** 5





## 3. Freshdesk node Troubleshooting guide

### Action node failed

**Error Details:**
```json
"field": "custom_fields.cf_agent",
"message": "It should be one of these values: 'Sarath,Bharath,Ajay,Prem,Senthil,Archana,Sneha Kandasamy (Freshworks),Prashanth Thiagarajan (Freshworks),Aarabhi,Srikanth,Bibin,Ibraz,Animesh,Pawan,Arivazhahan,Kirti,Abrar,Bhavana,Chitrita,Dipesh,Ashok,Nishanth,Athulya,Chandni,Waseem,Akarsh V,Mayank'",
"code": "missing_field"
```
```json
{
"field": "custom_fields.cf_category761533",
"message": "It should be one of these values: 'Transaction monitoring,Credit limit IncreaseV2,Feature Ask,App Breakages,KYC Verification Dont Use,Missing Label V2,Remittance India to US V2,Remittance U.S to India V2,ACH Transfer V2,WIRE Transfer V2,Credit card Bill Payment V2,Azpire V2,Azpire (linking to fintech Apps) V2,Azpire - Transaction Failures V2,Azpire - Transfers V2,Azpire - Bill Payments V2,Rewards 2.0 V2,Activation Journey V2,Credit card Subscription V2,SIM card request V2,Statements V2,KYC documents - Credit card / Checking account V2,Disputes V2,Card unblock V2,Card Ops V2,Account Closure V2,Bureau Reporting - Unsecured V2,Card logistics V2,Credit score tracker V2,Boost Account V2,Student Loan V2,Login/VPN issues V2,Reconciliation,ATM,CC Transaction Failures,Credit card / Debit card ( linking to fintech Apps),Junk/Influencer SPAM,Callback request'",
"code": "missing_field"
},
```

**Problem:** Ticket creation using Freshdesk keeps failing because custom fields that were configured in your Freshdesk account weren't configured/passed in the Freshdesk nodes.

**Solution:** 
1. Pass the custom field names in the parameter as follows: `{"cf_key1": "value1", ...}`.
2. Ensure that you prefix 'cf_' to the key.
3. The custom field names are derived from the labels assigned to them during their creation. For instance, if you create a custom field with the label 'test', then the name of the custom field will be 'cf_test'.

This solution ensures that the required custom fields are properly configured and passed in the Freshdesk node, preventing ticket creation failures.


