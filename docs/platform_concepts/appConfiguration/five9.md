---
title : Five9
sidebar_label : Five9
---

For those who use Five9 for customer support, the integration with Yellow.ai facilitates a seamless connection between your chatbot and Five9 live agents. This integration ensures a smooth transition from automated interactions to personalized support, enhancing the overall customer service experience.

## Connect Five9 with Yellow.ai

To connect your Yellow.ai account with **Five9**, follow these steps.

:::note
In a two-tier environment, you can connect an integration app in the Development environment. In a three-tier environment, you can connect the integration app either in Staging or Sandbox. All connected integrations are available in the live environment.
:::

1. On the left navigation bar, go to **Extensions** > **Integrations** > **Live chat** > **Five9**.

   <img src="https://i.imgur.com/UOHZVut.png" alt="drawing" width="100%"/>
   
* This will display the Five9 integration page.

     ![](https://imgur.com/oxP94QK.png)

2. In **Give account name**, enter a unique name for the integration. You can use only lowercase alphanumeric characters and underscores (_). 

3. In **Tenant name**: Enter the name of the tenant. To obtain this information, contact the Five9 support team.
4. In **Supervisor username**: Enter the username provided by the Five9 support team. A separate set of Five9 supervisor credentials needs to be created specifically for this integration.
5. In **Supervisor password**: Enter the password provided by the Five9 support team.
6. In **Host name**: Enter the name of the host provided by the client.
7. In **Skill ID**: Enter the Skill ID provided by the client.
8. In the **Attachment custom message** field, enter the message that will be displayed to the agent after an image is attached.

9. To customize chat headers, enable the **Customize chat headers** option. Upon enabling it, you will see the following fields:
   i. **Update agent name**: Enter the agent's name.
   ii. **Update agent description**: Provide a description, such as indicating that a bot icon should be updated when an agent is connected to the bot.
   iii. **Update agent avatar**: Upload an avatar for the agent if you prefer not to display the agent's name.
 
10. Click **Connect**.

11. If you have multiple accounts, click on **+ Add account** and follow the above mentioned steps to add each of them. You can add a maximum of 15 accounts. 

## Connect bot users to Five9 live agents  

This integration allows you to connect with live agents on the Five9 platform directly from your Yellow.ai account. 

:::note
- When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
- During the testing process, agents should be **online** for the specific button ID or group mapped in the configuration.
:::

:::info
Use **Ticket-closed** in the **Raise Ticket node** to perform specific actions when a live chat closes, instead of using the **ticket-close** event.
:::
 
 1. Go to **Automation** > **Build** > **Flows** > select the **Raise Ticket** node.

     <img src="https://i.imgur.com/k3kIkVd.png" alt="drawing" width="80%"/>

2. Select **Five9 Live Chat** from the **Live chat agent** drop-down list.

    <img src="https://i.imgur.com/WAxjUHF.png" alt="drawing" width="80%"/>

The following table contains the details of each field in the **Raise ticket** node.


| Field name | Sample value | Data type |Description
| -------- | -------- | -------- |-----|
|Message after ticket assignment|Requesting live agent connection.|String| The message will be displayed to the user after a ticket is successfully assigned to an agent.|
 |Name| John |String|Name of the user|
   |Mobile| 9876543210| String|Mobile number of the user.|
   Email|test@gmail.com|String|Email address of the user.
   Query|I have a concern regarding my flight ticket|String| The subject/topic/reason why the ticket was created.|
  Campaign name | Chat | String | Select the campaign name that you have created. |
  useBusinessHours | True or False | Boolean | Determines whether the campaign's business hours settings should be applied to customer-initiated conversations as defined in the Digital Engagement Administrator console. This parameter is set to false by default, meaning chat is always open. If set to true, chats are routed during open business hours when agents are logged in and dropped when no agents are logged in. Chat interactions received during closed business hours remain in the assigned queue for 24 hours.
disableComfortMessage | True or False | Boolean | Determines whether to prevent a chat message from being sent to a customer if the agent has not responded to a timespan defined by the administrator at the profile level. The default value of this parameter is True.
disableAutoClose | True or False | Boolean | If the auto-close feature is enabled on the Text Channels Administrator Console, the message window automatically closes when there is no response from the customer’s side for a period defined by the administrator. While using the Messaging API, the administrator can override this behavior by using the disableAutoClose parameter to prevent the conversation from closing automatically due to user inactivity. The default value of this parameter is false.
  
The following table contains the details of each field in the **Advanced options** section:

| Field name   | Sample value  | Data type | Description |
|-----------|-------|-----------|----------|
|Send chat transcript| True or False | Boolean |The Send chat transcript field allows you to send the conversation history between the end user and the bot as the initial message to the agent. Since this is a boolean field, pass the value **True** to send the chat transcript to the agent and if you don’t want to send the chat transcript to the agent, pass the value **False**.<br/><br/> Note: In cases where the entire transcript exceeds the character limit of a single message packet in Five9, the content will be divided and sent as multiple message packets. For example, if the chat transcript contains 8000 characters and the message packet limit is 4000 characters, the transcript will be divided into two packets of 4000 characters each and sent as separate messages to the agent.|
| Custom chat transcript | Five9chat | String |  Select your preferred variable to send chat transcripts in the format of your choice. Please indicate your preferred format in the variable. |

   ![](https://i.imgur.com/bK0Etvw.png)

**Sample success response**  

```json
"response": {
		"assignedTo": true,
		"success": true,
		"message": "Agent is available and ticket is assigned to the agent",
		"status": "ASSIGNED",
		"ticketInfo": {
			"id": "0191132e-5e7c-a297-bb20-60bcfbf62335",
			"status": "PENDING",
			"disposition": -1,
			"statusCode": 202
		}
	}
```

**Sample failure response**

```json
"response": {
		"success": false,
		"assignedTo": false,
		"agentNotAvailable": true,
		"message": "Agent is unavailable to chat with the end user, hence transferring the control back to the bot",
		"ticketInfo": {
			"statusCode": 400,
			"success": false,
			"details": {
				"response": {
					"loggedInAgentsIds": [],
					"activeAgentsIds": [],
					"onCallAgentsIds": [],
					"readyForCallAgentsIds": [],
					"notReadyForCallAgentsIds": [],
					"readyForVoicemailAgentsIds": [],
					"readyForChatAgentsIds": [],
					"readyForEmailAgentsIds": [],
					"inQueueCalls": [],
					"inAcdQueueVoicemails": [],
					"inProgressVoicemails": [],
					"inQueueCallbackCount": 0,
					"vivrCallbackCount": 0,
					"maxQueueDuration": 0,
					"voicemailCount": 0,
					"data": {
						"loggedInAgentsIds": [],
						"activeAgentsIds": [],
						"onCallAgentsIds": [],
						"readyForCallAgentsIds": [],
						"notReadyForCallAgentsIds": [],
						"readyForVoicemailAgentsIds": [],
						"readyForChatAgentsIds": [],
						"readyForEmailAgentsIds": [],
						"inQueueCalls": [],
						"inAcdQueueVoicemails": [],
						"inProgressVoicemails": [],
						"inQueueCallbackCount": 0,
						"vivrCallbackCount": 0,
						"maxQueueDuration": 0,
						"voicemailCount": 0
					},
					"statusCode": 200,
				"reason": "Agents are not available at the moment."
			},
			"stopFinalApiExecution": true
		}
	}
```

**Ticket close event payload**

```json
{
	"event": {
		"code": "ticket-closed",
		"description": "This is an event that is received from five9 end when the agent closes the conversation.",
		"data": {
			"eventSerialNumber": 7,
			"displayName": "Agilan",
			"externalId": "1173875306367686869755563234",
			"correlationId": "0191132e-5e7c-a297-bb20-60bcfbf62335",
			"from": "USER",
			"userId": 300000001875481,
			"timestamp": "2024-08-02T13:03:03.713Z"
		}
	},
	"type": "event"
}
```



