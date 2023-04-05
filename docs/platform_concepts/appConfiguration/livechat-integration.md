---
title : Live Chat Integration on app.yellow.ai
sidebar_label : Live Chat
---

This integration will allow the customers who are using bots on app.yellow.ai to use the updated live chat integration on cloud.yellow.ai. 

## 1. Use cases 
The following are the use-cases of this integration:

### 1.1 Amazon connect live agent

To connect with an Amazon Connect Live Agent, use this code-snippet


```

    app.raiseTicketForThirdPartyLiveChat({
             issue: "Test Issue",
             contact: {
                 phone: "9876543210",
                 name: "Raj",
                 email: "Test@email.com"
               },
           amazonConnectLiveAgentCustomFields: {customFields: {test: “yes”}}
    }).then((ticketData) => {
       app.log(ticketData, "ticketData");
       // Display appropriate message based on the ticketData
    }).catch((error) => {
       app.log(error, 'error');
       //Error handler
    });
```

This table consists of sample values, data types and descriptions for all the fields that need to be filled.


| Field name| Sample value |Data type |Description|
| -------- | -------- | -------- |-------|
| issue    | Test description   | String    |The subject/topic/reason why the ticket is created.
|phone|9876543210| String |Mobile number of the end user.|
|email|test@gmail.com | String |Email address of the end user.|
name| Rajesh | String| Name of the end user.|
|amazonConnectLiveAgentCustomFields| {customFields: {test: “yes”}}|Object| Custom key: value pairs associated with the end user required to raise a ticket. You need to pass the value of this key as {}, in case no key: pairs are required.|


**Sample response in case of success**

```
{
   "assignedTo": true,
   "success": true,
   "status": "ASSIGNED",
   "ticketInfo": "{{apiresponse}}"
}
```

:::note 
apiresponse represents the raw response from the amazon connect create ticket API
:::


**Sample response in case of failure**

```

{
   "success": false,
   "assignedTo": false,
   "agentNotAvailable": true,
   "message": "TicketId is not created and transferring the control back to the bot",
   "ticketInfo": "{{apiresponse}}"
}
```

 :::note
 apiresponse represents the raw response from the amazon connect create ticket API
 ::: 


### 1.2 Avaya Live Agent 

To connect with an Avaya Live Agent, use this code-snippet

          app.raiseTicketForThirdPartyLiveChat({
                 issue: "Test Issue",
                 contact: {
                     phone: "9876543210",
                     name: "Raj",
                     email: "Test@email.com"
                   }
       }).then((ticketData) => {
           app.log(ticketData, "ticketData");
           // Display appropriate message based on the ticketData
       }).catch((error) => {
           app.log(error, 'error');
           //Error handler
       });
This table consists of sample values, data types and descriptions for all the fields in the that need to be filled.

| Field name| Sample value |Data type |Description|
| -------- | -------- | -------- |-------|
| issue    | Test description   | String    |The subject/topic/reason why the ticket is created.
|phone|9876543210| String |Mobile number of the end user.|
|email|test@gmail.com | String |Email address of the end user.|
name| Rajesh | String| Name of the end user.|


**Sample response in case of success**

```
{
   "assignedTo": true,
   "success": true,
   "message": "Agent is available and ticket is assigned to the agent",
   "status": "ASSIGNED",
   "ticketInfo": "{{apiresponse}}"
}

```
:::note 
apiresponse represents the raw response from the avaya create ticket API
:::

**Sample response in case of failure**

```

{
   "success": false,
   "assignedTo": false,
   "agentNotAvailable": true,
   "message": "Agent availability is false and hence not assigned to any agent.",
   "ticketInfo": "{{apiresponse}}"
}

```

:::note 
apiresponse represents the raw response from the avaya create ticket API
:::


### 1.3 Custom Live Agent

To connect with a Custom Live Agent, use this code-snippet

          app.raiseTicketForThirdPartyLiveChat({
                 issue: "Test Issue",
                 contact: {
                     phone: "9876543210",
                     name: "Raj",
                     email: "Test@email.com"
                   },
                  category: "Sales",
                  priority: "MEDIUM",
                  customLiveAgentCustomFields: {customFields: {test: “yes”}}
       }).then((ticketData) => {
           app.log(ticketData, "ticketData");
           // Display appropriate message based on the ticketData
       }).catch((error) => {
           app.log(error, 'error');
           //Error handler
       });

This table consists of sample values, data types and descriptions for all the fields in the that need to be filled.

| Field name| Sample value |Data type |Description|
| -------- | -------- | -------- |-------|
| issue    | Test description   | String    |The subject/topic/reason why the ticket is created.
|phone|9876543210| String |Mobile number of the end user.|
|email|test@gmail.com | String |Email address of the end user.|
name| Rajesh | String| Name of the end user.|
|category|Sales|String | Category under which the ticket will be created.|
|priority|MEDIUM|String | Priority of the ticket to be created.|
|customLiveAgentCustomFields|{customFields: {test: “yes”}}| Object| Custom key:value pairs associated with the end user required to raise a ticket. You need to pass the value of this key as {}, in case no key:pairs are required.

**Sample response in case of success**

```

{
   "assignedTo": true,
   "success": true,
   "status": "ASSIGNED",
   "ticketInfo": "{{apiresponse}}"
}
```
:::note
apiresponse represents the raw response from the custom live agent create ticket API
:::

**Sample response in case of failure**

```

{
   "success": false,
   "assignedTo": false,
   "agentNotAvailable": true,
   "message": "Agent is unavailable to chat with the end user, hence transferring the control back to the bot.",
   "ticketInfo": "{{apiresponse}}"
}
```

:::note apiresponse represents the raw response from the custom live agent create ticket API
:::


### 1.4 Freshchat Live Agent

To connect to a Freshchat Live Agent, please use this code-snippet:

```
   app.raiseTicketForThirdPartyLiveChat({
        issue: "Test Issue",
       contact: {
            phone: "9876543210",
            name: "Raj",
            email: "Test@email.com"
            },
            assignedGroupId: "test-group",
            freshChatUserId: "3554-cbcbc-dchchc",
            freshChatUniqueIdentifier: "testInfo",
            properties: [],
            freshChatChannelId: "abce-ddede-eded-3454"
   }).then((ticketData) => {
      app.log(ticketData, "ticketData");
      // Display appropriate message based on the ticketData
   }).catch((error) => {
      app.log(error, 'error');
      //Error handler
   });

```
This table consists of sample values, data types and descriptions for all the fields in the that need to be filled.

| Field name                 | Sample value           | Data type | Description                                                                                                                                                                   |
| --------------------------| ----------------------| ---------| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| issue                      | Test description       | String   | The subject/topic/reason why the ticket is created.                                                                                                                         |
| phone                      | 9876543210             | String   | Mobile number of the user.                                                                                                                                               |
| email                      | test@gmail.com         | String   | Email address of the user.                                                                                                                                               |
| name                       | Rajesh                 | String   | Name of the user.                                                                                                                                                        |
| assignedGroupId            | Sales                  | String   | Category under which the ticket will be created.                                                                                                                             |
| priority                   | 3554-cbcbc-dchchc      | String   | Freshchat groupId to which the ticket should be assigned. The default value “” should be passed for this.                                                          |
| freshChatUserId            | test-group             | String   | Freshchat userId of the user, this is passed if the same ticket needs to be re-opened for the same user. The default value “” should be passed for this.                              |
| freshChatUniqueIdentifier  | testInfo               | Object   | A unique identifier that will reflect as referenceId in the freshchat agent portal if passed. The default value “” should be passed for this.                       |
| properties                 | [{key:”Hash”, value: “Yes”} ] | Array | Custom properties that can be passed on while creating a ticket.                                                                                                               |
| freshChatChannelId         | abce-ddede-eded-3454   | String   | This[ API](https://app.swaggerhub.com/apis-docs/Freshchat/freshchat-api/2.0.0#/Channel%20API/getAllChannels) needs to be called from Postman, which in turn will fetch the list of channel IDs associated with that Freshchat account and confirms the client's authorization to access that account. |




**Sample response in case of success**

```
{
   "assignedTo": true,
   "success": true,
   "status": "ASSIGNED",
   "ticketInfo": "{{apiresponse}}"
}

```
:::note
apiresponse represents the raw response from the freshchat live agent create ticket API
:::

Sample response in case of failure:-

```
{
   "success": false,
   "assignedTo": false,
   "agentNotAvailable": true,
   "message": "Agent is unavailable to chat with the end user, hence transferring the control back to the bot.",
   "ticketInfo": "{{apiresponse}}"
}
```
::: note
apiresponse represents the raw response from the freshchat live agent create ticket API
:::


### 1.5 Kapture CRM Live Agent

  To connect to a Kapture CRM Live Agent, please use this code-snippet


          app.raiseTicketForThirdPartyLiveChat({
                 issue: "Test Issue",
                 contact: {
                     phone: "9876543210",
                     name: "Raj",
                     email: "Test@email.com"
                   }
       }).then((ticketData) => {
           app.log(ticketData, "ticketData");
           // Display appropriate message based on the ticketData
       }).catch((error) => {
           app.log(error, 'error');
           //Error handler
       });

This table consists of sample values, data types and descriptions for all the fields that need to be filled.

|  Field name  | Sample value | Data type  |Description|
| -------- | -------- | -------- |-------|
| issue    |  Test description    | String     |The subject/topic/reason why the ticket is created.
|phone| 9876543210|String|Mobile number of the end user.|
email|test@gmail.com|String|Email address of the end user.
name|Rajesh|String|Name of the end user.|

**Sample response in case of success**

```

{
   "assignedTo": true,
   "success": true,
   "message": "Agent is available and ticket is assigned to the agent",
   "status": "ASSIGNED",
   "ticketInfo": "{{apiresponse}}"
}

```
:::note
apiresponse represents the raw response from the kapture crm create ticket API
:::

**Sample response in case of failure**

```
{
   "success": false,
   "assignedTo": false,
   "agentNotAvailable": true,
   "message": "Agent availability is false and hence not assigned to any agent.",
   "ticketInfo": "{{apiresponse}}"
}
```
:::note
apiresponse represents the raw response from the kapture crm create ticket API
:::

### 1.6 Locobuzz Live Agent


  To connect to a Locobuzz Live Agent, please use this code-snippet


          app.raiseTicketForThirdPartyLiveChat({
                 issue: "Test Issue",
                 contact: {
                     phone: "9876543210",
                     name: "Raj",
                     email: "Test@email.com"
                   },
                  category: "Sales",
                  priority: "MEDIUM",
       }).then((ticketData) => {
           app.log(ticketData, "ticketData");
           // Display appropriate message based on the ticketData
       }).catch((error) => {
           app.log(error, 'error');
           //Error handler
       });
This table consists of sample values, data types and descriptions for all the fields that need to be filled.

|  Field name  | Sample value | Data type  |Description|
| -------- | -------- | -------- |-------|
| issue    |  Test description    | String     |The subject/topic/reason why the ticket is created.
|phone| 9876543210|String|Mobile number of the end user.|
email|test@gmail.com|String|Email address of the end user.
name|Rajesh|String|Name of the end user.|
category| Sales|String|Category under which the ticket will be created.|
priority| MEDIUM |String| Priority of the ticket to be created.|
sentiment|Happy|String|User sentiment. Default value to be passed for this key is “”.

**Sample response in case of success**
```
{
   "assignedTo": true,
   "success": true,
   "status": "ASSIGNED",
   "ticketInfo": "{{apiresponse}}"
}
```

:::note
apiresponse represents the raw response from the locobuzz live agent create ticket API
:::

**Sample response in case of failure**

```
{
   "success": false,
   "assignedTo": false,
   "agentNotAvailable": true,
   "message": "Agent is unavailable to chat with the end user, hence transferring the control back to the bot.",
   "ticketInfo": "{{apiresponse}}"
}
```

:::note
apiresponse represents the raw response from the locobuzz live agent create ticket API
:::


### 1.7 Genesys Live Agent

  To connect to a Genesys Live Agent, please use this code-snippet


          app.raiseTicketForThirdPartyLiveChat({
                 issue: "Test Issue",
                 contact: {
                     phone: "9876543210",
                     name: "Raj",
                     email: "Test@email.com"
                   },
               genesysCustomFields: {customFields: {test: “yes”}}
       }).then((ticketData) => {
           app.log(ticketData, "ticketData");
           // Display appropriate message based on the ticketData
       }).catch((error) => {
           app.log(error, 'error');
           //Error handler
       });

This table consists of sample values, data types and descriptions for all the fields that need to be filled.


| Field name | Sample value | Data type |Description|
| -------- | -------- | -------- |---------|
| issue     | Test description    | String     |The subject/topic/reason why the ticket is created.
phone| 9876543210 | String |Mobile number of the end user.
email| test@gmail.com |String| Email address of the end user.
name| Rajesh| String|Name of the end user.|
genesysCustomFields|{customFields: {test: “yes”}}|Object|Custom key:value pairs associated to the end user required to raise a ticket. You need to pass the value of this key as {}, in case no key:pairs are required.


**Sample response in case of success**
```
{
   "assignedTo": true,
   "success": true,
   "status": "ASSIGNED",
   "ticketInfo": "{{apiresponse}}"
}
```

:::note
apiresponse represents the raw response from the genesys create ticket API
:::

**Sample response in case of failure**
```
{
   "success": false,
   "assignedTo": false,
   "agentNotAvailable": true,
   "message": "TicketId is not created and transferring the control back to the bot",
   "ticketInfo": "{{apiresponse}}"
}
```

:::note
apiresponse represents the raw response from genesys create ticket API 
:::

### 1.8 Genesys Cloud Live Agent

  To connect to a Genesys Cloud Live Agent, please use this code-snippet

          app.raiseTicketForThirdPartyLiveChat({
                 issue: "Test Issue",
                 contact: {
                     phone: "9876543210",
                     name: "Raj",
                     email: "Test@email.com"
                   },
               genesysCloudCustomFields: {customFields: {test: “yes”}}
       }).then((ticketData) => {
           app.log(ticketData, "ticketData");
           // Display appropriate message based on the ticketData
       }).catch((error) => {
           app.log(error, 'error');
           //Error handler
       });
This table consists of sample values, data types and descriptions for all the fields that need to be filled.

| Field name | Sample value | Data type |Description|
| -------- | -------- | -------- |---------|
| issue     | Test description     | String     |The subject/topic/reason why the ticket is created.
phone|9876543210|String|Mobile number of the end user.|
email|test@gmail.com |String|Email address of the end user.|
name | Rajesh|String |Name of the end user.|
genesysCloudCustomFields| {customFields: {test: “yes”}} |Object | Custom key:value pairs associated to the end user required to raise a ticket. You need to pass the value of this key as {}, in case no key:pairs are required.|

**Sample response in case of success**

```

{
   "assignedTo": true,
   "success": true,
   "status": "ASSIGNED",
   "ticketInfo": "{{apiresponse}}"
}
```

:::note
apiresponse represents the raw response from the genesys cloud create ticket API
::: 

**Sample response in case of failure**
```

{
   "success": false,
   "assignedTo": false,
   "agentNotAvailable": true,
   "message": "TicketId is not created and transferring the control back to the bot",
   "ticketInfo": "{{apiresponse}}"
}
```

:::note
apiresponse represents the raw response from genesys cloud create ticket API 
:::

### 1.9 Intercom Live Agent

  To connect to an Intercom Live Agent, please use this code-snippet

          app.raiseTicketForThirdPartyLiveChat({
                 issue: "Test Issue",
                 contact: {
                     phone: "9876543210",
                     name: "Raj",
                     email: "Test@email.com"
                   },
               intercomLiveAgentCustomFields: {customFields: {test: “yes”}}
       }).then((ticketData) => {
           app.log(ticketData, "ticketData");
           // Display appropriate message based on the ticketData
       }).catch((error) => {
           app.log(error, 'error');
           //Error handler
       });
This table consists of sample values, data types and descriptions for all the fields that need to be filled.

| Field name | Sample value | Data type |Description|
| -------- | -------- | -------- |---------|
| issue     | Test description     | String     |The subject/topic/reason why the ticket is created.
phone|9876543210|String|Mobile number of the end user.|
email|test@gmail.com |String|Email address of the end user.|
name | Rajesh|String |Name of the end user.|
intercomLiveAgentCustomFields| {customFields: {test: “yes”}} |Object | Custom key:value pairs associated to the end user required to raise a ticket. You need to pass the value of this key as {}, in case no key:pairs are required.|

**Sample response in case of success**
```

{
   "assignedTo": true,
   "success": true,
   "status": "ASSIGNED",
   "ticketInfo": "{{apiresponse}}"
}
```

:::note
apiresponse represents the raw response from the intercom create ticket API
:::

**Sample response in case of failure**
```
{
   "success": false,
   "assignedTo": false,
   "agentNotAvailable": true,
   "message": "TicketId is not created and transferring the control back to the bot",
   "ticketInfo": "{{apiresponse}}"
}
```
:::note
apiresponse represents the raw response from the intercom create ticket API
:::


### 1.10 Nice Incontact Live Agent

  To connect to a Nice Incontact Live Agent, please use this code-snippet

          app.raiseTicketForThirdPartyLiveChat({
                 issue: "Test Issue",
                 contact: {
                     phone: "9876543210",
                     name: "Raj",
                     email: "Test@email.com"
                   }
       }).then((ticketData) => {
           app.log(ticketData, "ticketData");
           // Display appropriate message based on the ticketData
       }).catch((error) => {
           app.log(error, 'error');
           //Error handler
       });
This table consists of sample values, data types and descriptions for all the fields that need to be filled.


| Field name | Sample value | Data type |Description|
| -------- | -------- | -------- |---------|
| issue     | Test description     | String     |The subject/topic/reason why the ticket is created.
phone|9876543210|String|Mobile number of the end user.|
email|test@gmail.com |String|Email address of the end user.|
name | Rajesh|String |Name of the end user.|

**Sample response in case of success**
```
{
   "assignedTo": true,
   "success": true,
   "status": "ASSIGNED",
   "ticketInfo": "{{apiresponse}}"
}
```
:::note
apiresponse represents the raw response from the nice-incontact create ticket API
:::

**Sample response in case of failure**

```
{
   "success": false,
   "assignedTo": false,
   "agentNotAvailable": true,
   "message": "TicketId is not created and transferring the control back to the bot",
   "ticketInfo": "{{apiresponse}}"
}
```
:::note apiresponse represents the raw response from the nice-incontact create ticket API
:::

### 1.11 Talishma Live Agent

   
      
          To connect to a Talishma Live Agent, please use this code-snippet

          app.raiseTicketForThirdPartyLiveChat({
                 issue: "Test Issue",
                 contact: {
                     phone: "9876543210",
                     name: "Raj",
                     email: "Test@email.com"
                   }
       }).then((ticketData) => {
           app.log(ticketData, "ticketData");
           // Display appropriate message based on the ticketData
       }).catch((error) => {
           app.log(error, 'error');
           //Error handler
       });
This table consists of sample values, data types and descriptions for all the fields that need to be filled.


| Field name | Sample value | Data type |Description|
| -------- | -------- | -------- |---------|
| issue     | Test description     | String     |The subject/topic/reason why the ticket is created.
phone|9876543210|String|Mobile number of the end user.|
email|test@gmail.com |String|Email address of the end user.|
name | Rajesh|String |Name of the end user.|


**Sample response in case of success**
```
{
   "assignedTo": true,
   "success": true,
   "status": "ASSIGNED",
   "ticketInfo": "{{apiresponse}}"
}
```

:::note
apiresponse represents the raw response from the talishma create ticket API
:::

**Sample response in case of failure**
```
{
   "success": false,
   "assignedTo": false,
   "agentNotAvailable": true,
   "message": "TicketId is not created and transferring the control back to the bot",
   "ticketInfo": "{{apiresponse}}"
}
```

:::note 
apiresponse represents the raw response from the talishma create ticket API
:::

### 1.12 Salesforce Live Agent

```

app.raiseTicketForThirdPartyLiveChat({
                 issue: "Test Issue",
                 contact: {
                     phone: "9876543210",
                     name: "Raj",
                     email: "Test@email.com"
                   },
                   salesforceLiveChatCustomFields: [],
                   salesforceLiveChatCustomEntities: [],
                   salesforceLiveChatAgentId: "",
                   salesforceLiveChatAgentAssignedMessage: "",
                   salesforceLiveChatVisitorLanguage: "English",
                   salesforceLiveChatQueuePositionMessage: "",
                   salesforceLiveChatUpdatedQueuePositionMessage: "",
                   salesforceLiveChatAgentTransferredMessage: "",
                   salesforceLiveChatEstimatedWaitTimeMessage: "",
                   salesforceLiveChatDisplayAgentName: true,
                  salesforceLiveChatIdleTimeWarningMessage: “”,
                  salesforceLiveChatIdleTimeTimeoutMessage: “”,
                  salesforceLiveChatConnectionFailureMessage: “”,
                  salesforceLiveChatAgentDisconnectMessage: “”,
                  salesforceLiveChatAgentTimeoutMessage: “”
       }).then((ticketData) => {
           app.log(ticketData, "ticketData");
           // Display appropriate message based on the ticketData
       }).catch((error) => {
           app.log(error, 'error');
           //Error handler
       });
```



| Field name|Sample value|Data type|Description |
| -------- | -------- | -------- |-------------|
|  issue|Test description|String|The subject, topic, and reason for creating the ticket.|
|phone|9876543210|String|Mobile number of the user.
|email|test@gmail.com|String|Email address of the user.
|name|Rajesh|String|Name of the user.
|salesforceLiveChatCustomFields|[<br/> {<br/> &nbsp;&nbsp;&nbsp;&nbsp;"label": "Mobile",<br/> &nbsp;&nbsp;&nbsp;&nbsp;"value": "9999444443",<br/> &nbsp;&nbsp;&nbsp;&nbsp;"entityMaps": [<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"entityName": "contact",<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"fieldName": "Mobile_Number__c"<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/> &nbsp;&nbsp;&nbsp;&nbsp;],<br/> &nbsp;&nbsp;&nbsp;&nbsp;"transcriptFields": [<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Mobile_Number__c"<br/> &nbsp;&nbsp;&nbsp;&nbsp;],<br/> &nbsp;&nbsp;&nbsp;&nbsp;"displayToAgent": true<br/> },<br/> <br/> {<br/> &nbsp;&nbsp;&nbsp;&nbsp;"label": "Chat",<br/> &nbsp;&nbsp;&nbsp;&nbsp;"value": "sessionURL",<br/> &nbsp;&nbsp;&nbsp;&nbsp;"entityMaps": [<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"entityName": "case",<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"fieldName": "chat_transcript__c"<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/> &nbsp;&nbsp;&nbsp;&nbsp;],<br/> &nbsp;&nbsp;&nbsp;&nbsp;"transcriptFields": [<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"chat_transcript__c"<br/> &nbsp;&nbsp;&nbsp;&nbsp;],<br/> &nbsp;&nbsp;&nbsp;&nbsp;"displayToAgent": true<br/> }<br/>] |Array|The details provided by the user before initiating the chat.|
|salesforceLiveChatCustomEntities|[<br/> {<br/> &nbsp;&nbsp;&nbsp;&nbsp;"entityName":"Contact",<br/> &nbsp;&nbsp;&nbsp;&nbsp;"saveToTranscript":"contact",<br/> &nbsp;&nbsp;&nbsp;&nbsp;"linkToEntityName":"Case",<br/> &nbsp;&nbsp;&nbsp;&nbsp;"linkToEntityField":"ContactId",<br/> &nbsp;&nbsp;&nbsp;&nbsp;"entityFieldsMaps":<br/> &nbsp;&nbsp;&nbsp;&nbsp;[<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"fieldName":"LastName",<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label":"LastName",<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"doFind":true,<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"isExactMatch":true,<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"doCreate":true<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"fieldName":"FirstName",<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label":"FirstName",<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"doFind":true,<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"isExactMatch":true,<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"doCreate":true<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"fieldName":"Email",<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label":"Email",<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"doFind":true,<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"isExactMatch":true,<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"doCreate":true<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/> &nbsp;&nbsp;&nbsp;&nbsp;|Array|The records are created or searched based on the enabled [EntityFieldsMaps](https://developer.salesforce.com/docs/atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm#EntityFieldMaps).|
|salesforceLiveChatAgentId|0055g00000HEbLD|String| The agentId required to enable the sticky agent feature.|
|salesforceLiveChatAgentAssignedMessage|You are now connected to {liveAgent}.|String|The message that will be displayed to the user after an agent has been assigned. Use the dynamic parameter{liveAgent} to display the name of the agent.|
|salesforceLiveChatVisitorLanguage|English|String|Language preferred by the user to chat with the live agent.
|salesforceLiveChatQueuePositionMessage|Your queue position is {position}|String|The message that will be displayed to the user when the ticket is in queue.	Use the dynamic parameter {position} to display the queue position numerically in the message.
|salesforceLiveChatUpdatedQueuePositionMessage|Your current queue position is {position}|String|The message that will be displayed to the user when the queue position changes. Use the dynamic parameter{position} to display the position.|
|salesforceLiveChatAgentTransferredMessage|Your chat has been transferred to {liveAgent}|String|The message that will be displayed to the user when the chat gets transferred from one agent to another. Use the dynamic parameter {liveAgent} to display the name of the agent.
| salesforceLiveChatEstimatedWaitTimeMessage | The estimated wait time for the chat to get assigned is {waitTime} seconds | String |The message that will be shown to the user to notify them of the time they should expect to wait before an agent is assigned. Use the dynamic parameter {waitTime} to display the wait time. |
| salesforceLiveChatDisplayAgentName   | true                            | Boolean   | Enable this flag to display the name of the chat agent when they get assigned.                           |
| salesforceLiveChatIdleTimeWarningMessage | Idle warning message         | String    | The message that will be displayed when there's user inactivity. |
| salesforceLiveChatIdleTimeTimeoutMessage | Idle timeout message         | String    | The message that will be displayed when the live chat terminates due to user inactivity after a specified period.|
| salesforceLiveChatConnectionFailureMessage | Connection failure         | String    | The message that will be displayed to the user when there is a failure in connecting with the live agent.
| salesforceLiveChatAgentDisconnectMessage    | Agent has disconnected  | String    |The message that will be displayed to the user when their agent disconnects the chat. (This message will be displayed only if there are other active agents with the capacity to take new chats, otherwise, the message configured in the field salesforceLiveChatConnectionFailureMessage will be displayed). |           |
| salesforceLiveChatAgentTimeoutMessage       | Agent timeout occurred |String|The message that will be displayed to the user when the Agent Timeout value has surpassed.|


**Sample response in case of success:**

```
{
   "assignedTo": true,
   "success": true,
   "status": "ASSIGNED",
   "ticketInfo": "{{apiresponse}}"
}
```
:::note
apiresponse represents the raw response from the salesforce create ticket API
:::

**Sample response in case of failure:**

```
{
   "success": false,
   "assignedTo": false,
   "agentNotAvailable": true,
   "message": "TicketId is not created and transferring the control back to the bot",
   "ticketInfo": "{{apiresponse}}"
}

```
:::note
apiresponse represents the raw response from the salesforce create ticket API
:::
  
## 2. Configuration

You can configure any of the above mentioned live agent integration(s) by following these steps:-

To enable the integration in the yellow.ai Integrations Module,

1. Login to app.yellow.ai, search for your bot in the **Search Projects** section and then click the bot.

<img src="https://i.imgur.com/LfusT2x.png" alt="drawing" width="100%"/>

2. Click the **Growth icon** on the left navigation bar.

<img src="https://i.imgur.com/f98YAw0.png" alt="drawing" width="100%"/>

3. Click  **Data Explorer**. You will be redirected to the cloud.yellow.ai’s UI. 

<img src="https://i.imgur.com/brA6IQ6.png" alt="drawing" width="100%"/>

4. On the top left corner, click the drop-down and choose **Integrations**.
 
<img src="https://i.imgur.com/X1vVHwH.png" alt="drawing" width="100%"/>

5. Configure the required live chat integration

<img src="https://i.imgur.com/Fs2ANIf.png" alt="drawing" width="100%"/>

6. .After entering the required values, click **Connect** and the integration will get enabled on yellow.ai.




