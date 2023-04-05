---
title : Salesforce Live Chat
sidebar_label : Salesforce Live Chat
---

Yellow.ai’s integration with [Salesforce](https://www.salesforce.com/in/) lets you connect with the live chat agents of **Salesforce** to resolve your queries.


## 1. Connect Salesforce with Yellow.ai

To connect your yellow.ai account with **Salesforce**, follow these steps.

### 1.1 Enable the integration in Yellow.ai's Integration module

1. Login to [cloud.yellow.ai](https://cloud.yellow.ai/auth/login) and click the **Integrations** module on the top left corner of your screen.

<img src="https://i.imgur.com/3QjKjML.png" alt="drawing" width="100%"/>

2. Search for **Salesforce Live Chat** or choose the category named **Live chat** from the left navigation bar and then click on **Salesforce Live Chat**.

![](https://i.imgur.com/gEcRpLU.png)


3. Fill in the required fields. 

* **Organization Id** - The unique identifier of the salesforce account that represents a particular organization (To be provided by salesforce spoc of the client).
* **Deployment Id** - The ID of the deployment from where the chat has been initiated (To be provided by salesforce spoc of the client).
* **Button Id** - The Id of the button(group) from where the chat has been initiated (To be provided by salesforce spoc of the client).
* **Base Url** - The chat API endpoint of a particular salesforce organization (To be provided by salesforce spoc of the client).
* **Agent Device** - The browser’s userAgent value. (To be provided by salesforce spoc of the client).
* **Language** - Language preferred by the user to chat with the live agent.
* **Agent Screen Resolution** - The screen resolution of the device used by the agent.
 * **Agent Timeout** - The value of this field determines the time till which the chat will remain active in case of inactivity at the agent’s side.

4. Once you're done, click **Connect**.

## 2. Use-case

This integration lets you connect with live agents on the **Salesforce** platform from your yellow.ai account. 

### 2.1 Chat with Salesforce Live Agent
 
 1. In the Studio flow builder, select the **Raise Ticket** node.

<img src="https://i.imgur.com/k3kIkVd.png" alt="drawing" width="100%"/>

2. Select **Salesforce Live Chat** from the **Live chat agent** drop-down list.

<img src="https://i.imgur.com/JHYS5Tz.png" alt="drawing" width="70%"/>

<img src="https://i.imgur.com/bfVBodc.png" alt="drawing" width="70%"/>


The following table contains the details of each field in the **Raise ticket** node.


| Field name | Sample value | Data type |Description
| -------- | -------- | -------- |-----|
|Message after ticket assignment|Requesting live agent connection.|String| The message that will be displayed to the end user after a ticket is successfully assigned to an agent|
|Name| Rajesh|String|Name of the user|
|Mobile| 9876543210| String|Mobile number of the user|
Email|test@gmail.com|String|Email address of the user
Query|I have a concern regarding my flight ticket|String| The subject/topic/reason why the ticket was created|
Salesforce Live Chat Custom Fields|<pre lang="json">[<br/>    {<br/>        "label": "Mobile",<br/>        "value": "9999444443",<br/>        "entityMaps": [<br/>            {<br/>                "entityName": "contact",<br/>                "fieldName": "Mobile_Number__c"<br/>            }<br/>        ],<br/>        "transcriptFields": [<br/>            "Mobile_Number__c"<br/>        ],<br/>        "displayToAgent": true<br/>    },<br/>     {<br/>        "label": "Chat",<br/>        "value": "sessionURL",<br/>        "entityMaps": [<br/>            {<br/>                "entityName": "case",<br/>                "fieldName": "chat_transcript__c"<br/>            }<br/>        ],<br/>        "transcriptFields": [<br/>            "chat_transcript__c"<br/>        ],<br/>        "displayToAgent": true<br/>    }<br/>]</pre>|Array| The list of details provided by the user before initiating the chat with the live agent|
|Salesforce Live Chat Custom Entities|<pre lang="json">[<br/> {<br/> "entityName":"Contact",<br/>"saveToTranscript":"contact",<br/> "linkToEntityName":"Case",<br/>"linkToEntityField":"ContactId",<br/>"entityFieldsMaps":<br/>[<br/>{<br/>"fieldName":"LastName",   <br/> "label":"LastName",<br/>"doFind":true,<br/>"isExactMatch":true,<br/> "doCreate":true<br/>},<br/> {<br/>"fieldName":"FirstName",<br/> "label":"FirstName",<br/> "doFind":true,<br/>"isExactMatch":true,<br/>"doCreate":true<br/>},<br/>{<br/>"fieldName":"Email",<br/>"label":"Email",<br/>"doFind":true,<br/>"isExactMatch":true,<br/>"doCreate":true<br/>}<br/> ]<br/>}<br/>]<br/></pre>|Array|The records created/ searched depending on what [EntityFieldsMaps](https://developer.salesforce.com/docs/atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm#EntityFieldMaps) has enabled.

**Advanced options**

<img src="https://i.imgur.com/OT7Nfp3.png" alt="drawing" width="55%"/>
<img src="https://i.imgur.com/E6H9TJw.png" alt="drawing" width="50%"/>



The following table contains the details of each field in the **Advanced options** section.

| Field name | Sample nalue | Data type |Description|
| -------- | -------- | -------- |--------|
| Message after agent assignment     | You are now connected to {liveAgent}.     | String     |  The message that will be displayed to the end user after  an agent gets assigned. {liveAgent} is the dynamic parameter which represents the name of the agent, use it in the message to display the name of the agent.|
|Language preference|English|String|Language preferred by the end user to chat with the live agent.|
|Message to display queue position|Your queue position is {position}|String|This message will be displayed to the user when the ticket is in queue. {position} is the dynamic parameter which represents the queue position numerically, use it the message to display the position.|
|Message to display updated queue position|Your current queue position is {position}|String|This message will be displayed to the user when the queue position changes. {position} is the dynamic parameter which represents the queue position numerically, use it in the message to display the position.|
|Message after agent transfer|Your chat has been transferred to {liveAgent}|String|This message will be displayed to the end user when the chat gets transferred from one agent to another. {liveAgent} is the dynamic parameter that represents the name of the agent, use it in the message accordingly to display the name of the agent.|
|Message to display estimated wait time  before agent assignment|The waiting time for the chat to get assigned is {waitTime} seconds|String|This message will be displayed to the user indicating the approximate time that user needs to wait before an agent is assigned. {waitTime} is the dynamic parameter which represents that waiting time in seconds. Please use it in the message accordingly to display the wait time.|
|Display agent name|true|Boolean|Enabling this will ensure that the agent name gets displayed when they get assigned.|

**Sample success response**

```
{
   "assignedTo": true,
   "success": true,
   "status": "ASSIGNED",
   "ticketInfo": "{{apiresponse}}"
}
```
:::note 
apiresponse represents the raw response from the Salesforce create ticket API
:::

**Sample failure response**
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
apiresponse represents the raw response from the Salesforce create ticket API
:::

### Reference

https://developer.salesforce.com/docs/atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_API_requests.htm



