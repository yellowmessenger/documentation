---
title : Saleforce Live Chat
sidebar_label : Saleforce Live Chat
---

## Scope of Integration

Yellow.ai Integration with Saleforce Live Chat allows you to seamlessly connect your Saleforce service with the yellow.ai platform.


## Configuration

Inside your project, navigate to the Integrations tab and on the left side bar select **Live Chat**. You will find Saleforce Live Chat.

You have to provide your Organization Id, Deployment Id, Button Id, Base Url, Connection Failure Message, Agent timeout (in minutes) and other optional field like Agent Device, Language, Agent Screen Resolution, below to connect you Salesforce Live chat account with yellow.ai bot.

<img src="https://cdn.yellowmessenger.com/cCGxtcxVlwiP1664280077240.png" alt="drawing" width="100%"/>

Below Field you have to field with proper value.

1. **Organization Id**:- This is your saleforce's Organization Id.
2. **Deployment Id**:- This is your saleforce's Deployment Id.
3. **Button Id**:- Button Id
4. **Base Url**:- Base Url of your's saleForce account.
5. **Agent Device**:- 
6. **Language**:- 
7. **Agent Screen Resolution**:- 
8. **Idle Time Warning Message**:- If idle warning time is configured in salesforce's dashboard then User will get warning message after warning time when user is not responding.
9. **Idle Time Timeout Message**:- If user or agnet is not responding after agent Timeout, then This message will appear.
10. **Connection Failure Message**:- If something went wrong during conversation or creating ticket. This message will appear.
11. **Agent Timeout(in minutes)**:- This value indicates that if agent is not responding for that time then ticket will automatically closed.

### Use Case

- In this integration you can use **raise ticket** node to create a conversation with Saleforce agent and once conversation initiates the user can talk to the agent.

<img src="https://cdn.yellowmessenger.com/wCWlvwzHZyVg1664280029923.png" alt="drawing" width="60%"/>

**Note**: In raiseTicket action node, There are two option custom params. 
1. Salesforce Live Chat Custom Fields (Type: Array)
   Sample format of the value:-
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



## Reference

https://developer.salesforce.com/docs/atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_API_requests.htm




