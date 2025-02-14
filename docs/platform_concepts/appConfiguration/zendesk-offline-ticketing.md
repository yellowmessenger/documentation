---
title : Zendesk offline ticketing
sidebar_label : Zendesk offline ticketing
---


Integrating Zendesk with Yellow.ai allows you to create offline support tickets. This ensures that users can raise the offline support requests even when live agents are unavailable.

When live agents are offline, Zendesk’s offline ticketing system allows you to create offline support request. These requests are then converted into support tickets in Zendesk. Once agents are available, they can access these tickets and follow up with users via email to resolve their queries. 


**Key benefits of using this Integration**:

* **Creating offline tickets**: Generates the support tickets from offline messages when the agents are unavailable.
* **User management:** Allows the addition of new users, retrieval of user details, and creation of offline support requests within Zendesk.

## Integrate Zendesk Offline Ticketing with Yellow.ai

To integrate Zendesk Offline Ticketing with Yellow.ai, follow these steps:

### Get your domain address & API Key from Zendesk

1. Log in to your [Zendesk account](https://www.zendesk.com/in/login/).

2. From your browser's address bar, copy your Zendesk domain URL. Example: `https://yourcompany.zendesk.com`.

3. Click on the Zendesk icon and select **Admin center**.

3. In the Admin center, go to **Apps and Integrations** > **Zendesk API**.

4. Copy the **API key** and **User name**.

### Add API key and domain to the Yellow platform

1. Login to the [Yellow platform](https://cloud.yellow.ai/) and navigate to the **Development** environment.
   * In a two-tier environment, you can only add accounts in the Development environment.
   * In a three-tier environment, you can only add accounts in Staging/Sandbox environment.

2. Go to **Extensions** > **Integrations** > **Zendesk offline ticketing**.

    ![](https://i.imgur.com/AkxyIdH.png)

2. In **Give account name**, enter a unique name for the account. Supports only lowercase alphanumeric and underscore characters. It is recommended to use a name that aligns with its purpose for better usability.

    ![](https://i.imgur.com/bs15t1e.png)

3. In **API key**,  paste the API token you generated from Zendesk. 
4. In **Domain name**, enter your Zendesk domain URL (example, https://yourcompany.zendesk.com).

5. Enter the **User name** that you have copied from your Zendesk account.

6. Click the **Connect**.

* To connect more accounts, repeat the steps outlined above for each account. You can add a maximum of 15 accounts.

## Manage Zendesk tickets through AI Agent

This integration allows your bot to perform actions such as [retrieving user information](#), [adding new users](https://), and [creating offline tickets](https://) in Zendesk. 

1. Navigate to **Automation** > **Node** > **Integrations** > **Zendesk**.

   <img src="https://imgur.com/913ggkS.png" alt="drawing" width="40%"/>
   
2. Select the Zendesk account that you want to use for managing tickets.

   <img src="https://i.imgur.com/UgRSuaU.png" alt="drawing" width="50%"/>
   
3. Select the desired action:
   * **Get user**: Retrieve information about a specific user in Zendesk.
   * **Add user**: Create a new user in Zendesk.
   * **Create request**: Generate a new support ticket in Zendesk. 

    <img src="https://i.imgur.com/XyebuYz.png" alt="drawing" width="60%"/>
   

### Get user details

This action allows you to retrievie information about a specific user from your Zendesk account. You can get the user details using the External ID or query. For more information, click [here](https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#query-syntax).

**Node Input Params**:

Field name	| Description | Datatype
------------|-------------|----------
External ID | Enter the unique identifier of the user. The API treats the id as case insensitive. Example: "ian1" and "IAN1" are the same value. | String

### Add user 

The Add user action creates a new user in your account. 

**Node Input Params**:

Field name	| Description | Datatype
------------|-------------|----------
Email | Enter the email address of the user. Example: rio.doe@yellow.ai| String
Name | Enter the name of the user. Example: Rio Doe| String |
Role | Enter the user's role within Zendesk. Supported roles: end-user, agent, admin. Default is end-user. | String | 
Custom role ID | Enter custom role ID, if the user is an agent on the Enterprise plan or above | String | 
Default group ID |  Enter ID of the user's default group| String |
External ID | Enter the unique identifier of the user | String |
Locale | Enter user's locale (language). If both locale and locale_id are provided, locale_id is ignored. | String 
Locale ID | Enter user's language identifier | Number
Notes | Enter any additional notes about the user| String
Organization ID | Enter the ID of the user's organization. If the user has [organization memberships](https://developer.zendesk.com/api-reference/ticketing/organizations/organization_memberships/) memberships, this ID represents the default organization. | Number
Phone | Enter the user's primary phone number | String)
Tags | Enter the tags associated with the user. Only applicable if user tagging is enabled in your account | Array

**Sample response:**

```json
{
  "user": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "end-user",
    "custom_role_id": 123,
    "default_group_id": null,
    "external_id": null,
    "locale_id": 1176,
    "notes": null,
    "organization_id": null,
    "tags": []
  }
}
```

### Create request

Use this action to submit support requests. These will be converted into offline tickets in your Zendesk account. 

**Node Input Params**:

Field name	| Description | Datatype
------------|-------------|----------
Comment  | Describe the problem, incident, question, or task. For more informtion, see [Request comments](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-requests/#request-comments) | Object
Priority | The priority of the request. Acceptable values are "low", "normal", "high", or "urgent". | String
Requester | Required for anonymous requests. Specifies the requester of the anonymous request. For more details, see [Creating anonymous requests](https://developer.zendesk.com/documentation/ticketing/managing-tickets/creating-and-managing-requests/#creating-anonymous-requests) | object
Subject | The subject of the request. If the subject field is visible to end users, this value is used; otherwise, a truncated version of the description is used. | string 
Tags | Enter the tags associated with the user | Array
Via | Describes how the object was created. See the [Via object reference](https://developer.zendesk.com/documentation/ticketing/reference-guides/via-object-reference/) | Object

**Sample response:**

```json
{
  "request": {
    "requester": {
      "name": "Rio",
      "email": "rio@yellow.ai"
    },
    "subject": "Test ticket",
    "comment": {
      "body": "test ticket"
    },
    "priority": "urgent",
    "via": {
      "channel": "chat"
    },
    "tags": [
      "yellow_handoff",
      "GoFan_Support"
    ]
  }
}
```