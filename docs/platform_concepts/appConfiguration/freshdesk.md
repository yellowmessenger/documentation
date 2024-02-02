---
title : Freshdesk
sidebar_label : Freshdesk
---

You can integrate the Yellow.ai platform with your [Freshdesk](https://www.freshworks.com/freshdesk/lp/freshdesk-brand-2/?tactic_id=3387224&utm_source=google-adwords&utm_medium=FD-Search-Brand-India&utm_campaign=FD-Search-Brand-India&utm_term=freshdesk&device=c&matchtype=e&network=g&gclid=CjwKCAiAk--dBhABEiwAchIwkWwR98aagz6FUX6uYz0UUX5vI0nF2LejFRgTXo8mXiGm6jC87Ef5YxoCLfcQAvD_BwE&gclid=CjwKCAiAk--dBhABEiwAchIwkWwR98aagz6FUX6uYz0UUX5vI0nF2LejFRgTXo8mXiGm6jC87Ef5YxoCLfcQAvD_BwE) account. This integration lets you create/update tickets, fetch ticket details and modify ticket forms. Along with this you can also get agent info, create notes and add watchers to the tickets.

## 1. Connect Freshdesk with Yellow.ai

You need a **Freshdesk domain** and an **API key** to integrate with Yellow.ai.

### 1.1 Get the API Key from Freshdesk 

1. Log in to your **Freshdesk** portal.
2. Click your profile picture in the top right corner of the portal.

<img src="https://i.imgur.com/BM5bpz1.png" alt="drawing" width="50%"/>

3. Go to the **Profile Settings**.
4. Your API Key will be available in the right corner below the change password section. Copy it.

![](https://i.imgur.com/2Cvs7LR.png)


### 1.2 Fetch your Freshdesk domain

You can get your **Freshdesk domain URL** from the browser address bar e.g., https://yellowai-dummy.freshdesk.com

### 1.3 Enable the integration in Yellow.ai ’s Integration section

1. Go to https://cloud.yellow.ai and search for **Freshdesk** in the **All Integrations** search box. 

![](https://i.imgur.com/QZewAAS.png)

2. Fill in the **Api Key** and  **Domain Name** and click the **Connect** button.
3. If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 15 accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::

4. Once **Freshdesk** is connected to the platform, you will find **Freshdesk** in the **Integrations** node.

![](https://i.imgur.com/QFXJeRm.png)


## 2. Use-cases 

The following are the use cases that are accommodated in this integration:

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

### 2.1 Create ticket

This action creates a new support ticket in **Freshdesk**.

**Node Input Params:**


| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| Email|	jhon.doe@yellow.ai|	String  | 
|Name|	John Doe	|String Type|
Phone|	9999999999|	String Type|
|Priority|	2|	Number Type<br/> Low:1<br/> Medium: 2 <br/>High: 3<br/> Urgent: 4<br/>|
|Source|	1	|Number Type<br/> Email:1<br/> Portal: 2<br/> Phone: 3	<br/> Chat: 7<br/> Feedback Widget: 9 <br/>Outbound Email:  10<br/>|
|Status|	3	|Number Type Open: 2<br/> Pending: 3 <br/>Resolved:4 <br/>Closed: 5<br/>|
|Tags|	[”login failure”,”system issue”]|	Array Type|
|Custom Fields	|{”key1”:”value1”,..}|	Object Type|
|Email Config ID|	4|	Number Type|
|Description|	Ticket Description|	String Type|
|Group ID|	2|	Number Type|
|Product ID|	4	|Number Type|
|Subject|	Ticket Subject	|String Type|
|Type|	Ticket Type|	String|

**Sample Response:**

```
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

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
|Ticket ID|2112| Number Type|
| Email|	jhon.doe@yellow.ai|	String  | 
|Name|	John Doe	|String Type|
Phone|	9999999999|	String Type|
|Priority|	2|	Number Type<br/> Low:1<br/> Medium: 2 <br/>High: 3<br/> Urgent: 4<br/>|
|Source|	1	|Number Type<br/> Email:1<br/> Portal: 2<br/> Phone: 3	<br/> Chat: 7<br/> Feedback Widget: 9 <br/>Outbound Email:  10<br/>|
|Status|	3	|Number Type Open: 2<br/> Pending: 3 <br/>Resolved:4 <br/>Closed: 5<br/>|
|Tags|	[”login failure”,”system issue”]|	Array Type|
|Custom Fields	|{”key1”:”value1”,..}|	Object Type|
|Email Config ID|	4|	Number Type|
|Description|	Ticket Description|	String Type|
|Group ID|	2|	Number Type|
|Product ID|	4	|Number Type|
|Subject|	Ticket Subject	|String Type|
|Type|	Ticket Type|	String|

**Sample Response:**

```

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

|Field Name|	Sample Input|	Remarks|
|----------|----------------|---------|
Page No|	1|	Number Type
Page Size|	10|	Number Type|

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
        "category": "Default"
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
        "category": null
      }
    }
  ]
}
````

### 2.4 View ticket
Retrieves the details for the specified ticket ID.

**Node Input Params:**

|Field Name|	Sample Input|	Remarks|
|---------|-----------------|---------|
Ticket ID|	5|	Number Type|

**Sample Response:**

```
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
    "category": "Primary"
  },
  "tags": [],
  "attachments": []
}
```

### 2.5 Update multiple tickets

This action allows the user to update multiple tickets.

**Node Input Params:**

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
|Custom Fields|	Object|	Key value pairs containing the names and values of custom fields.|
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

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| query*     | (priority:2)     | String Type     |
|Page no|2|Number Type <br/> Max:10|

**Query Formats:**

 * "(ticket_field:integer OR ticket_field:'string') AND ticket_field:boolean"
 * "priority:>3 AND created_at:'2017-01-01'"
 * "type:null AND priority:4"

**Sample Response:**

```
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
        "sector_no": 7,
        "locked": true
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
        "sector_no": 8,
        "locked": true
      }
    }
  ]
}
```

### 2.7 Get all agents

Retrieves a list of all agents. The default **Page Number** is 1 and the **Page Size** is 50. 

**Node Input Params:**

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| Page Number     | 1     | Number Type     |
|Page Size|10 |Number Type|

**Sample Response:**

```
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

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| Page Number     | 1     | Number Type     |
|Page Size|10 |Number Type|

**Sample Response:**

```
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

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| Page Number     | 1     | Number Type     |
|Page Size|10 |Number Type|

**Sample Response:**
```
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

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| Page Number     | 1     | Number Type     |
|Page Size|10 |Number Type|

**Sample Response:**

```
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

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| Ticket ID     | 19     | Number Type     |
|User ID |5 |Number Type|

### 2.12 Get all ticket forms

Retrieves the list of all the available ticket forms from **Freshdesk**. This action doesn't require any parameter.

**Sample Response:**

```
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

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| formId     | 3     | Number Type     |

**Sample Response:**

```
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

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| formId     | 2    | Number Type     |
|Title|Custom Ticket Form| String Type|
|Description|This is a custom ticket form | String Type|

**Sample Response:**

```
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

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| Field ID    | 2    | Number Type     |
|Form ID|1| Number Type|
|Field Name|Email |String Type <br/> Label for customers|
|Field Placeholder|	johndoe@yellow.ai|	String Type|
|Field Hint|	Customer Email|	String Type<br/> Hint for the customers will be displayed in a tooltip|
|Is Editable|	true|Boolean Type<br/>Set to true if the field can be updated by customers|
|Field Postion|	2	|Number Type<br/>Field position in the form|
|Required for Customers|	false|Boolean Type<br/>Set to true if the field is displayed in the portal|

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

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| Body(HTML)    | <html><body>sample text</body></html>   | Number Type     |String Type<br/> Html content should be added as note in ticket|
|Ticket ID|	2|Number Type|
|Notify Agents |[“agent1@freshdesk.com”,”agent2@freshdesk.com”]	|Array Type|
|Private|	false|	Set true for private note and false for public|
|User ID|	3|	ID of the agent who is adding a note|


**Sample Response:** 5

## 3. Common errors and solutions

**Error:** Action node failed.

```
"field": "custom_fields.cf_agent",
            "message": "It should be one of these values: 'Sarath,Bharath,Ajay,Prem,Senthil,Archana,Sneha Kandasamy (Freshworks),Prashanth Thiagarajan (Freshworks),Aarabhi,Srikanth,Bibin,Ibraz,Animesh,Pawan,Arivazhahan,Kirti,Abrar,Bhavana,Chitrita,Dipesh,Ashok,Nishanth,Athulya,Chandni,Waseem,Akarsh V,Mayank'",
            "code": "missing_field"
```
```
{
            "field": "custom_fields.cf_category761533",
            "message": "It should be one of these values: 'Transaction monitoring,Credit limit IncreaseV2,Feature Ask,App Breakages,KYC Verification Dont Use,Missing Label V2,Remittance India to US V2,Remittance U.S to India V2,ACH Transfer V2,WIRE Transfer V2,Credit card Bill Payment V2,Azpire V2,Azpire (linking to fintech Apps) V2,Azpire - Transaction Failures V2,Azpire - Transfers V2,Azpire - Bill Payments V2,Rewards 2.0 V2,Activation Journey V2,Credit card Subscription V2,SIM card request V2,Statements V2,KYC documents - Credit card / Checking account V2,Disputes V2,Card unblock V2,Card Ops V2,Account Closure V2,Bureau Reporting - Unsecured V2,Card logistics V2,Credit score tracker V2,Boost Account V2,Student Loan V2,Login/VPN issues V2,Reconciliation,ATM,CC Transaction Failures,Credit card / Debit card ( linking to fintech Apps),Junk/Influencer SPAM,Callback request'",
            "code": "missing_field"
        },
```

**Problem:** Ticket creation using Freshdesk keeps failing because custom fields that were configured in your Freshdesk account weren't configured/passed in the Freshdesk nodes.

**Solution:** Pass the custom field names in the parameter - {”key1”:”value1”,..}. The names of the custom fields are derived from the labels given to them during their creation. All the custom fields will have 'cf_' prepended to its name, eg., if you create a custom field with the label 'test', then the name of the custom_field will be 'cf_test'.











