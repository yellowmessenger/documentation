---
title : Saleforce-Live-chat
sidebar_label : Saleforce-Live-chat
---

Yellow.ai Integration with Salesforce Live Chat allows you to seamlessly connect your Salesforce service with the yellow.ai platform.

## 1. Use Case

In this integration you can use raise ticket node to create a conversation with Salesforce agent and once conversation initiates the user can talk to the agent.

![drawing](https://lh4.googleusercontent.com/L3cHYG59TLNA0GGtVd2U6iNfvcLW4F4va1W9o1_FMQkoBcWRmd5_bwb8cOYMp8v7Qqsm9lfW4ixczRwkEMTNSvV7XdYcavTdZwDLUqNVq1pJA98wh_fPcnPzm6wDQP09IchlTCodpPw_FLBuO1a5oz2C9wBYh0BaMGCHoNJIAXcjIBUOw6OkWI98ug)

:::note

In raiseTicket action node, There are two option custom params.

1. Salesforce Live Chat Custom Fields (Type: Array) Sample format of the value.

```
[
    {
        "label": "Mobile",
        "value": "9999444443",
        "entityMaps": [
            {
                "entityName": "contact",
                "fieldName": "Mobile_Number__c"
            }
        ],
        "transcriptFields": [
            "Mobile_Number__c"
        ],
        "displayToAgent": true
    },
     {
        "label": "Chat",
        "value": "sessionURL",
        "entityMaps": [
            {
                "entityName": "case",
                "fieldName": "chat_transcript__c"
            }
        ],
        "transcriptFields": [
            "chat_transcript__c"
        ],
        "displayToAgent": true
    }
]

```

2. Salesforce Live Chat Custom Entities: (Type: Array)

```
[
   {
      "entityName":"Contact",
      "saveToTranscript":"contact",
      "linkToEntityName":"Case",
      "linkToEntityField":"ContactId",
      "entityFieldsMaps":[
         {
            "fieldName":"LastName",
            "label":"LastName",
            "doFind":true,
            "isExactMatch":true,
            "doCreate":true
         },
         {
            "fieldName":"FirstName",
            "label":"FirstName",
            "doFind":true,
            "isExactMatch":true,
            "doCreate":true
         },
         {
            "fieldName":"Email",
            "label":"Email",
            "doFind":true,
            "isExactMatch":true,
            "doCreate":true
         }
      ]
   }
]

```
:::


## 2. Configuration  

1. Inside your project, navigate to the **Integrations** tab and on the left side bar select Live Chat. 
2. Find **Salesforce Live Chat**.
3. You must provide your Organization Id, Deployment Id, Button Id, Base Url, Connection Failure Message, Agent timeout (in minutes) and other optional field like Agent Device, Language, Agent Screen Resolution, below to connect you Salesforce Live chat account with yellow.ai bot.

![](https://i.imgur.com/OrtDia2.jpg)


Fill in the below fields with correct value: 



| Field | Description| 
| -------- | -------- | 
| Organization Id     | This is your saleforce's Organization Id.     | 
|Deployment Id|This is your saleforce's Deployment Id.|
|Button ID|Button ID|
|Base Url|Base Url of your salesforce account.|
|Agent Device||
|Language||
|Agent Screen Resolution||
|Idle Time Warning Message|If idle warning time is configured in salesforce's dashboard then User will get a warning message after warning time when user is not responding.|
|Idle Time Timeout Message|If the user or agent is not responding after agent Timeout, then this message will appear.|
|Connection Failure Message|If something went wrong during conversation or creating a ticket. This message will appear.|
|Agent Timeout(in minutes)|This value indicates that if the agent is not responding for that time then the ticket will automatically be closed.|

----

**Reference**

For more information, click [here](https://developer.salesforce.com/docs/atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_API_requests.htm)

