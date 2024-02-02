---
title : Locobuzz Live Chat
sidebar_label : Locobuzz Live Chat
---

Yellow.ai’s integration with [Locobuzz Live Chat](https://locobuzz.com/) lets you connect with the live chat agents of Lococbuzz to resolve your support queries.


## 1. Connect Locobuzz with Yellow.ai

To configure Locobuzz integration in your yellow.ai account, follow these steps.

### 1.1 Enable the integration in Yellow.ai's **Integration** module

1. Login to [cloud.yellow.ai](https://cloud.yellow.ai/auth/login) and click the **Integrations** module on the top left corner of your screen.

<img src="https://i.imgur.com/3QjKjML.png" alt="drawing" width="100%"/>

2. Search for **Locobuzz Live Chat** or choose the category named **Live chat** from the left navigation bar and then click on **Locobuzz Live Chat**.

<img src="https://i.imgur.com/1WHnKoj.png" alt="drawing" width="100%"/>

3. Fill in the required fields. 
*  **Api Key** (To be provided by the client/locobuzz spoc of the client)
*  **Company Name** (To be provided by the client/locobuzz spoc of the client) 
*  **Api Domain** (To be provided by the client/locobuzz spoc of the client)
*   **Channel Id** (To be provided by the client/locobuzz spoc of the client)
*   **Ticket Queue Message** (This message will be displayed if the ticket goes into a queued state).

4. Once you're done, click **Connect**.
5. If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 15 accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::

### 1.2 Configure webhook URL in Locobuzz Dashboard

To receive events, you need to configure the webhook URL in the **Locobuzz Dashboard**. 

Copy the webhook url and the api key mentioned in the **Instructions** section of the **Locobuzz Integration** Card. Append the region of your bot to the domain of the webhook url. r1/r2/r3/r4/r5 are the regions of your bot, you can refer the following list for the same.

* r1 = MEA
* r2 = Jakarta
* r4= USA
* r5 = Europe
* r3 = Singapore

### 1.3 Enable events in Yellow.ai bot

1. Login to cloud.yellow.ai and click the **Studio** module on the top left corner of your screen.

<img src="https://i.imgur.com/ZjnJZOf.png" alt="drawing" width="100%"/>

3. Click **Event** on the left navigation bar and click **Integrations**.

<img src="https://i.imgur.com/ZfhIyQi.png" alt="drawing" width="100%"/>

5. Enable the following events on this page:
* **locobuzz-agent-inactivity** - This event is triggered when the agent is inactive.
*  **locobuzz-agent-logout** - This event is triggered when there is an unexpected network/system issue at the agent’s end.
*  **locobuzz-customer-inactivity** - This event is triggered when the customer is inactive for more than a minute. Activate this event by clicking  the three dots next to the name of the event.

4. After activating these events, a flow needs to be created in  [Studio](https://docs.yellow.ai/docs/platform_concepts/studio/overview/)  whose trigger point will be this event. Based on the received event data, an appropriate message will be  displayed to the end user.

<img src="https://i.imgur.com/cg3dnKK.png" alt="drawing" width="100%"/>

:::info
If you have added multiple accounts in your platform, enable events for each of those accounts.
:::


**Sample webhook event data sent by Locobuzz:**
```

{
 "ticketId": 287267,
 "senderId": "8f800f85-6143-4710-8b3a-1f4c3e4fa2b0",
 "source": "yellowmessenger",
 "event": "customer-infoawaited",
 "agentName": "Prashant Pange",
 "agentId": "33619",
 "ticketAssignedTime": 1665476293
}
 ```   
 ## 2. Use-case

This integration lets you connect with live agents on **Locobuzz** from your yellow.ai account. 

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

### 2.1 Chat with Locobuzz Live Agent

:::info
Use **Ticket-closed** in the **Raise Ticket node** to perform specific actions when a live chat closes, instead of using the **ticket-close** event.
:::
 
 1. In the Studio flow builder, select the **Raise Ticket** node.

<img src="https://i.imgur.com/k3kIkVd.png" alt="drawing" width="100%"/>

2. Select **Locobuzz Live Chat** from the **Live chat agent** drop-down list.

<img src="https://i.imgur.com/l4Xk7dw.png" alt="drawing" width="90%"/>

The following table contains the details of each field of the **Raise ticket** node.


| Field name | Sample value | Data type |Description
| -------- | -------- | -------- |-----|
|Message after ticket assignment|Requesting live agent connection.|String| The message that will be displayed to the end user after a ticket is successfully assigned to an agent|
|Name| Rajesh|String|Name of the end user|
|Mobile| 9876543210| String|Mobile number of the end user|
Email|test@gmail.com|String|Email address of the end user
Query|I have a concern regarding my flight ticket|String| The subject/topic/reason why the ticket was created|
Priority|Medium|String|The priority of the ticket|

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
apiresponse represents the raw response from the Locobuzz create ticket API
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
apiresponse represents the raw response from the Locobuzz create ticket API
:::
