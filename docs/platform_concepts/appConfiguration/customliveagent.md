---
title: Custom Live agent integration
sidebar_label : Custom Live Agent
---

## Introduction to custom live agent

### Custom Live Agent API Specification

This document elaborates on the integration approach for a custom live agent to integrate with Yellow. The following are the major use cases covered in this document: 
1. End Customer wants to talk to an agent
2. End Customer sends Text/Image/Video/PDF ( or other media) to the Agent
3. The interaction details updated to end customer through ticket ID & details
4. Additional information about Agent Availability ( Queue Status, Typing status etc)
5. Agent connection established
6. Two-way communication between the end customer and agent
7. Closure of the ticket

:::info
Use **Ticket-closed** in the **Raise Ticket node** to perform specific actions when a live chat closes, instead of using the **ticket-close** event.
:::


### Design principles

1. The integration approach is defined to be channel agnostic, the 3rd party system should consider Yellow as the channel and Yellow will ensure that the end customer connects with an agent from any channel ( Web, WhatsApp etc.) 
2. Details of the end customer’s channel will be transferred to the 3rd party system for proper reconciliation. 
3. The receiving system should be able to define custom parameters for their consumption and as needed for the business use case. 

### Workflow Diagram


![](https://i.imgur.com/FCyWNDp.png)



## Connect Custom Live chat account to Yellow.ai

1. On the left navigation bar, go to **Extensions** > **Integrations**.

   ![](https://i.imgur.com/JagYT5w.png)

2. Navigate to **Live chat** > **Custom live chat**. Alternatively, you can use the Search box to easily find it.

   ![](https://i.imgur.com/ve79jGg.png)


3. In **Give account name**, enter a unique account name for the integration. You can use only lowercase alphanumeric characters and underscores (_).

   ![](https://i.imgur.com/OSBjSfx.png)

4. Set up the remaining fields according to the descriptions provided in the table below.

    | Field                          | Description                                                                                          |
    |--------------------------------|------------------------------------------------------------------------------------------------------|
    | **Domain name**                | The domain name associated with your live chat service.                                               |
    | **Company name**               | The name of the company providing the live chat service.                                                                      |
    | **API key**                    | The key used to authenticate API requests.                                                           |
    | **API timeout (in seconds)**   | The maximum time, in seconds, to wait for an API response before timing out. (Default is 10 seconds.)|
    | **Ticket queue message**       | The message displayed to users when they are in the ticket queue.                                      |
    | **Send conversation history JSON** | Enable this option to allow sending conversation history (in JSON format) to the integrated account. For example, when providing context to support agents, debugging and analysis, and so on.      |


5. Click **Connect**.

6. If you have multiple accounts, click **+Add account** and follow the above mentioned steps to add each of them. You can add a maximum of 15 accounts.

## Connect custom live chat to your bot

1. In the **Automation** module, go to **Build** and navigate to the flow where you want to add the live agent flow.
2. In nodes selection, select **Integration** > **Raise a ticket** node.

   ![](https://i.imgur.com/sXjz3W0.png)

    Option | Description
    ------ | ----------
    Account name | Choose the name of your live chat account.
    Message after ticket assignment | Specify the message that should be sent after the ticket has been assigned to a live agent.
    Name | Provide a name for the ticket. This is typically a label or identifier used to categorize or reference the ticket. 
    Mobile | Choose the mobile number associated with the ticket. This field helps in reaching out to users if required. 
    Email (Optional) | Choose the email address related to the ticket if you need to include it.
    Query | Choose the subject, topic or query that will be addressed. This provides context for the ticket.
3. To customize how your tickets are handled and processed, you can enable and configure **Advanced options**. These options allow you to set ticket priority, enable auto-translation, and add custom fields, tags, and departments.

   <img src="https://i.imgur.com/AuBHxb2.png" width="50%"/>

    Option | Description
    ------ | -----------
    Tags | Enter appropriate tags for categorizing the ticket. Tags help in organizing and filtering tickets based on specific criteria.
    Group Code | Assign a group code to the ticket if your system uses group codes for ticket routing or categorization.
    Priority | Choose the priority level for the ticket to ensure it’s handled according to its urgency.
    Translate user message | Choose `Yes` to enable automatic translation of user messages. This feature translates messages into the desired language for better communication with agents. By default, it will be `No`.
    Voice ticket options | If your system supports voice tickets, configure any relevant settings for handling voice-based interactions.

4. Use **Store response in** to save the user’s response to a variable. You can also create a new variable to store the response for future use.



***



## Business use cases

### Initiate conversations 

An end customer who uses the bot, will encounter the following action while connecting with a live agent

1. Bot gives an option to connect to a Live Agent.
2. Bot goes into a paused state once the agent gets connected.
3. When the bot is in paused state, the 2-way communication between the agent and end customer takes place. 
4. Once the agent ends the conversation, the bot takes over. 

The following are the business use cases that should be supported by the third-party tool to enable this conversation:

| # | Use-case | Required |Remarks|
| -------- | -------- | -------- |----|
| 1     | Send Message {text + media}       |   Yes   |Chat history will be present in the first message as a link  |
|2|Send typing event|No|
|3|Create Ticket |Yes|Response should contain ticketIDScenarios ( Ticket Lifecycle)  <br/>1. Request is in queue <br/>2. Ticket is created & OPEN <br/>3. Ticket is created & ASSIGNED<br/> |
|4|User details {Channel ID, Sender ID, Unique ID}|Yes|
|5|Transfer to a particular group|No|Department wise, as per business need|
|6| Ability to pass custom parameter|Yes|
|7|Is User Active| No|
|8|Custom Parameters|Yes|Ability to pass custom parameters as per business need|


### Enable conversation

The following are the use cases & details required for a two-way communication between a third party system & Yellow.

:::note
For this, Yellow’s webhook must be configured at third party systems end.
:::

|S.no| Type| Required | Remarks |
|------|----|--------|--------|
|1|Event name/code specification|Yes|
|2|Agent message {text + media}|Yes|
|3|Agent assigned{along with agent details}|Yes|Agent details like agent name, department should be received
|4|Queue Positioning|No|
|5|Closed ticket|Yes|Closed ticket event|
|6|Updation of any ticket detail (e.g. transferred to another agent)|No|
|7|Is Agent active?|No|

---


## API specification

The header that will be common across all the APIs which the third party needs to create is an auth token:

```
Authorization: {{token}}
Content-type: application/json
```

### Create ticket 

|URL|{{domainName}}/createTicket/{{companyName}}|
|---|---|
|METHOD|POST|


#### Body parameters

|Name|Data type|Description|Mandatory|
|---|---|---|---|
|senderId|string|Unique identifier of the user generated by Yellow.AI|Y|
|messageId|string|Unique identifier of every sent message|Y|
|source|string|Channel from where the message can be sent|Y|
|conversationId|string|Unique identifier of this conversation|Y|
|userName|string|Name of the user/customer|Y|
|userMobile|string|Mobile number of the user, accepts 10 digit mobile number|Y|
|userEmail|string|Email Id of the user|Y|
|conversationHistory|string|The URL of the conversation prior to connecting to the agent|Y|
|ticketPriority|string|Priority of the ticket, possible values low/medium/high|Y|
|ticketCategory|string|Category to which a ticket may belong|N|
|ticketGroupId|string|If we want the ticket to get assigned to a particular group of agents, we need to add this|N|
|customFields|object| Use this if any custom key value pairs need to be passed. The data type of the values can be string/number/boolean/object|N|
|conversationHistoryJSON| array| The JSON of the conversation prior to connecting to the agent| N| 

#### CURL

```
curl --location --request POST '{{domainName}}createTicket/{{companyName}}' \
--header 'Authorization: Bearer {{token}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "body": {
        "user": {
            "userName": "Shubh",
            "userMobile": "99999999",
            "senderId": "11111111211111",
            "userEmail": "test@gmail.com"
        },
        "ticket": {
            "conversationHistory": "https://google.com",
 	"source": "web",
            "ticketPriority": "medium",
            "ticketCategory": "sales",
            "conversationId": "efrfrfrfr",
            "ticketGroupId":  "14343", 
            "customFields": {}
           }
        }
}'


```

#### Response

```json
{
status: success/failure
data: {ticketId: 25633, isAgentAvailable: true/false, isQueued: true/false }
message: <Description of Error/ Success Message>
} 
 
```
:::note
If queuing is enabled, the createTicket API should respond isAgentAvailable flag as false and isQueued flag as true.
:::


### Send message to Agent

|URL|{{domainName}}sendMessage/{{companyName}}|
|---|---|
|METHOD|POST|

#### Body parameters

|Name|Data type|Description|Mandatory|
|---|---|---|---|
|senderId|string|Unique identifier of the user generated by Yellow.ai|Y|
|userName|string|Name of the user|Y|
|userEmail|string|Email Id of the user|N|
|message|string|Message sent by the user|Y|
|messageId|string|Unique identifier of every sent message|Y|
|ticketId|string|Generated ticketId from API 1|Y|
|source|string|Channel in which the message can be sent|Y|
|conversationId|string|Unique identifier of this conversation|Y|
|messageType|string|Type of the message sent,the value will be **text**|Y|


#### CURL

```c
curl --location --request POST '{{domainName}}sendMessage/{{companyName}}' \
--header 'Authorization: Bearer {{token}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "body": {
        “user”:{
         “senderId”: “11111”,
         “userName”: “Mahesh”,
        “userEmail”: “test@gmail.com”
         }
        "ticket": {
           “messageType”: “text”,
            “message”: “hello”
            “messageId”: “efefe-eefe-fefef-feefefe”,
            “ticketId”: “275333”,
             “source”: “web”,
            “conversationId” : “yguyegdee”
           }
        }
}'

```


#### Response

```json
{
“status”: “success/failure”
“data”: {ticketId: 25633}
“message”: “<Description of Error/ Success Message>”
}
 

```

### Send user media to Agent

|URL|{{domainName}}sendMedia/{{companyName}}|
|---|---|
|METHOD|POST|


#### Body parameters

|Name|Data type|Description|Mandatory|
|---|---|---|---|
|senderId|string|Unique identifier of the user generated by Yellow.AI|Y|
|userName|string|Name of the user| Y|
|userEmail|string|Email Id of the user| N|
|mediaJson|object|Has two properties. The first property is “type”, and its possible values are image/video/file. The second property is “url” which will have the url of the media|Y|
|messageId|string|Unique identifier of every sent message|Y|
|ticketId|number|Generated ticketId from API 1|Y|
|source|string|Channel in which the message is sent|Y|
|conversationId|string|Unique identifier of this conversation|Y|
|messageType|string|Type of the message sent, the value will be media|Y|

#### CURL

```
curl --location --request POST '{{domainName}}sendMedia/{{companyName}}' \
--header 'Authorization: Bearer {{token}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "body": {
        “user”:{
         “senderId”: “11111”,
         “userName”: “Mahesh”,
        “userEmail”: “test@gmail.com”
         }
        "ticket": {
           “messageType”: “media”,
            “mediaJson”: {“type”:”image/video/file”,“url”: “https://image.com”},
            “messageId”: “efefe-eefe-fefef-feefefe”,
            “ticketId”: “275333”,
             “source”: “web”,
            “conversationId” : “yguyegdee”
           }
        }
}'

```


#### Response

```json
{
“status”: “success/failure”,
“data”: {ticketId: 25633}
“message”: “<Description of Error/ Success Message>”
}

```

## Webhook

| | |
-- | --- |
| URL  | https://{{host}}/integrations/genericIntegration/custom-live-agent <br/>**Note**: <br/>Host: `{rCode}`.cloud.yellow.ai <br/>- r1 for MEA, <br/>- r2 for Jakarta, <br/>- r4 for USA, <br/>- r5 for Europe, <br/>- r3 for Singapore. <br/>For India, `rCode` is not needed. |
| Method | POST     |
|x-auth-token|Will be provided by yellow|
|Response Code|200|




### Text message sent by the agent 

**Event**
- Text message sent by the agent

**Payload**

```json
{
"ticketId": 354545,
"senderId": "efrf",
"source": "erfr4rf4"
"event": "payload-received-from-agent"
"message": {
"type": "text”,
"payLoad": {
"content": "Hello"
}
}
"agentName": "gefgeuf",
"agentId": "locobuzzagentId",
"ticketAssignedTime": 3545454
}


```
**Response**

```json
{
“status”: “success”,
data: {"ticketId": 354545,
"senderId": "efrf",
"source": "erfr4rf4"
"event": "payload-received-from-agent"
"message": {
"type": "text”,
"payLoad": {
"content": "Hello"
}
}
"agentName": "gefgeuf",
"agentId": "locobuzzagentId",
"ticketAssignedTime": 3545454
}
},
message: <Description of Error/ Success Message>
}


```

### Media message sent by the Agent  

**Event**
- Media message sent by the Agent 


**Payload**

```json
{
"ticketId": 354545,
"senderId": "efrf",
"source": "erfr4rf4"
"event": "payload-received-from-agent"
"message": {
"type": "media",
"payLoad": {
"content": {“type”: “image/video/file”, “mediaUrl”: “https://www.google.com”}
}
}
"agentName": "gefgeuf",
"agentId": "locobuzzagentId",
"ticketAssignedTime": 3545454
}

```

**Response**

```json
{
status: success
data: {"ticketId": 354545,
"senderId": "efrf",
"source": "erfr4rf4"
"event": "payload-received-from-agent"
"message": {
"type": "media”,
"payLoad": {
"content": {“type”: “image/video/file”, “mediaUrl”: “https://www.google.com”}
}
}
"agentName": "gefgeuf",
"agentId": "locobuzzagentId",
"ticketAssignedTime": 3545454
}
},
message: <Description of Error/ Success Message>
}

```

### Ticket assignment to the agent 

**Event**
- Ticket assignment to the agent 


**Payload**

```json
{
"ticketId": 354545,
"senderId": "efrf",
"source": "erfr4rf4"
"event": "ticket-assigned"
"agentName": "gefgeuf",
"agentId": "locobuzzagentId",
"ticketAssignedTime": 3545454
}


```
**Response**

```json
{
status: success
data: {"ticketId": 354545,
"senderId": "efrf",
"source": "erfr4rf4"
"event": "ticket-assigned"
"agentName": "gefgeuf",
"agentId": "locobuzzagentId",
"ticketAssignedTime": 3545454
}
message: <Description of Error/ Success Message>
}

```

### Closure of ticket

**Event**
- Closure of ticket


**Payload**

```json
{
"ticketId": 354545,
"senderId": "efrf",
"source": "erfr4rf4"
"event": "ticket-closed"
"agentName": "gefgeuf",
"agentId": "locobuzzagentId",
"ticketAssignedTime": 3545454,
"ticketResolvedTime": 4545454
}

```
**Response**

```json
{
status: success
data: {
"ticketId": 354545,
"senderId": "efrf",
"source": "erfr4rf4"
"event": "ticket-closed"
"agentName": "gefgeuf",
"agentId": "locobuzzagentId",
"ticketAssignedTime": 3545454,
"ticketResolvedTime": 4545454}
message: <Description of Error/ Success Message>
}


```

### Agent Logout during the conversation (After Working hours) 

**Event**
- Agent Logout during the conversation (After Working hours)


**Payload**

```json
{
"ticketId": 354545,
"senderId": "efrf",
"source": "erfr4rf4"
"event": "agent-logout"
"agentName": "gefgeuf",
"agentId": "locobuzzagentId",
"ticketAssignedTime": 3545454
}


```
**Response**

```json
{
status: success
data: {"ticketId": 354545,
"senderId": "efrf",
"source": "erfr4rf4"
"event": "agent-logout"
"agentName": "gefgeuf",
"agentId": "locobuzzagentId",
"ticketAssignedTime": 3545454}
message: <Description of Error/ Success Message>
}

```


### Agent Logged In but not active in the conversation 

**Event**
- Agent Logged In but not active in the conversation 


**Payload**

```json
{
"ticketId": 354545,
"senderId": "efrf",
"source": "erfr4rf4"
"event": "agent-inactivity"
"agentName": "gefgeuf",
"agentId": "locobuzzagentId",
"ticketAssignedTime": 3545454,
"inactivityDuration": 120,
"inactivityReason": "Network issue"
}

```
**Response**

```json
{
status: success/failure
data: {"ticketId": 354545,
"senderId": "efrf",
"source": "erfr4rf4"
"event": "agent-inactivity"
"agentName": "gefgeuf",
"agentId": "locobuzzagentId",
"ticketAssignedTime": 3545454,
"inactivityDuration": 120,
"inactivityReason": "Network issue"}
message: <Description of Error/ Success Message>
}


```





