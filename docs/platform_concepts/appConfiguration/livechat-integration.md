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

  To connect to a Freshchat Live Agent, please use this code-snippet

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
             freshChatUniqueIdentifier: "testInfo"
    }).then((ticketData) => {
       app.log(ticketData, "ticketData");
       // Display appropriate message based on the ticketData
    }).catch((error) => {
       app.log(error, 'error');
       //Error handler
    });
```

This table consists of sample values, data types and descriptions for all the fields in the that need to be filled.

| Field name| Sample value |Data type |Description|
| -------- | -------- | -------- |-------|
| issue    | Test description   | String    |The subject/topic/reason why the ticket is created.
|phone|9876543210| String |Mobile number of the end user.|
|email|test@gmail.com | String |Email address of the end user.|
name| Rajesh | String| Name of the end user.|
|assignedGroupId|Sales|String | Category under which the ticket will be created.|
|priority|3554-cbcbc-dchchc|String | Freshchat groupId to which the ticket needs to be assigned. The default value that needs to be passed for this is “”.|
|freshChatUserId|test-group| String| Freshchat userId of the user. This is passed if the same ticket needs to be re-opened for the same user.The default value that needs to be passed for this is “”.|
|freshChatUniqueIdentifier| testInfo|Object|A unique identifier that if passed will reflect as referenceId in the freshchat agent portal. The default value that needs to be passed for this is “”.|


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

To connect with a Salesforce Live Agent, use this code-snippet


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
                   salesforceLiveChatDisplayAgentName: true
       }).then((ticketData) => {
           app.log(ticketData, "ticketData");
           // Display appropriate message based on the ticketData
       }).catch((error) => {
           app.log(error, 'error');
           //Error handler
       });
| Field name | Sample value | Data type |Description|
| -------- | -------- | -------- |---------|
|issue|Test description|String|The subject/topic/reason why the ticket is created.|
|phone|9876543210|String|Mobile number of the end user.|
|email|test@gmail.com|String|Email address of the end user.|
|name|Rajesh|String|Name of the end user.|
| salesforceLiveChatCustomFields| [<br/>{<br/>"label": "Mobile",<br/> "value": "9999444443",<br/>"entityMaps": [<br/> {<br/>"entityName": "contact",<br/> "fieldName": "Mobile_Number__c"<br/>}<br/>],<br/>"transcriptFields": [<br/> "Mobile_Number__c"<br/>],<br/>"displayToAgent": true <br/> },<br/>{<br/>"label": "Chat",<br/> "value": "sessionURL",<br/>"entityMaps": [<br/>{<br/> "entityName": "case",<br/> "fieldName": "chat_transcript__c"<br/>}<br/>],<br/> "transcriptFields": [<br/>"chat_transcript__c"<br/> ],<br/> "displayToAgent": true<br/>}<br/>]<br/>| Array| The list of details provided by the user before initiating the chat with the live agent|
|salesforceLiveChatCustomEntities|[<br/>{<br/>"entityName":"Contact",<br/>"saveToTranscript":"contact",<br/>"linkToEntityName":"Case",<br/>"linkToEntityField":"ContactId",<br/>"entityFieldsMaps":<br/>[<br/>{<br/>"fieldName":"LastName", <br/>"label":"LastName",<br/>"doFind":true,<br/>"isExactMatch":true,<br/>"doCreate":true<br/>},<br/>{<br/>"fieldName":"FirstName",<br/>"label":"FirstName"<br/>"doFind":true,<br/>"isExactMatch":true,<br/>"doCreate":true<br/>},<br/>{<br/>"fieldName":"Email",<br/>"label":"Email",<br/>"doFind":true,<br/>"isExactMatch":true,<br/>"doCreate":true<br/>}<br/>]<br/>}<br/>]<br/>| Array| The records that are created/ searched depending on the enabled [EntityFieldsMaps](https://developer.salesforce.com/docs/atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm#EntityFieldMaps).|
|salesforceLiveChatAgentId|0055g00000HEbLD|String|The agentId that needs to be passed to use the sticky agent feature.|
|salesforceLiveChatAgentAssignedMessage|You are now connected to {liveAgent}.|String|The message that will be displayed to the end user after an agent has been assigned. {liveAgent} is the dynamic parameter which represents the name of the agent, use it in the message to display the name of the agent.|
|salesforceLiveChatVisitorLanguage|English|String|Language preferred by the end user to chat with the live agent.|
|salesforceLiveChatQueuePositionMessage|Your queue position is {position}|String|The message will be displayed to the end user when the ticket is in queue. {position} is the dynamic parameter which represents the queue position numerically, use it in the message to display the position|
|salesforceLiveChatUpdatedQueuePositionMessage|Your current queue position is {position}|String|The message will be displayed to the end user when the queue position changes. {position} is the dynamic parameter which represents the queue position numerically, use it in the message to display the position|
|salesforceLiveChatAgentTransferredMessage|Your chat has been transferred to {liveAgent}|String|The message that will be displayed to the end user when the chat gets transferred from one agent to another. {liveAgent} is the dynamic parameter which represents the name of the agent, use it in the message to display the name of the agent.|
|salesforceLiveChatEstimatedWaitTimeMessage|The time taken for the chat to get assigned is {waitTime} seconds|String|The end user will be shown this message to notify them of the duration they should expect to wait before an agent is assigned. {waitTime} is the dynamic parameter which represents that waiting time in seconds, use it in the message to display the wait time.|
|salesforceLiveChatDisplayAgentName|true|Boolean|Enabling this flag will ensure that the agent name gets displayed when they get assigned.|


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




