---
title : Freshchat
sidebar_label : Freshchat
---

Yellow.ai’s integration with [Freshchat](https://www.freshworks.com/lp/freshchat-live-chat-software-1/?tactic_id=3419421&gclid=Cj0KCQiA_bieBhDSARIsADU4zLcCLpI23wzdYy7F2mUUk2lIuAeiAp2MGNux6yTfARuOhC8YugNFJCgaAtFZEALw_wcB#&utm_source=google-adwords&utm_medium=FChat-Search-India-Brand&utm_campaign=FChat-Search-India-Brand&utm_term=freshchat&device=c&matchtype=e&network=g&gclid=Cj0KCQiA_bieBhDSARIsADU4zLcCLpI23wzdYy7F2mUUk2lIuAeiAp2MGNux6yTfARuOhC8YugNFJCgaAtFZEALw_wcB) lets you connect with the live chat agents of Freshchat to resolve your queries.

## 1. Connect Freshchat  with Yellow.ai
To connect your yellow.ai account with **Freshchat** follow these steps.

### 1.1 Fetch details from your Freshchat portal

**To retrieve App ID**

1. Login to your **Freshchat** portal as an administrator.
2. Go to **Admin Settings** > **Chat widget settings** > **Integration Settings**. 
3. Under **AGENT MESSENGER** click **Copy** to copy the App ID. 

![](https://i.imgur.com/XWfj833.png)

**To retrieve API token**

1. Login to your **Freshchat** portal as an administrator.
2. Go to **Admin Settings** > **API Tokens**.
3. Click **Generate Token** to generate the API token and copy it.

![](https://i.imgur.com/W6vgSwB.png)


**To retrieve API Domain**

1. Login to your **Freshchat** portal as an administrator.
2. Go to **Admin Settings** > **Channels** > **Mobile SDK**.
3. Check the data centre of the domain from the domain name under the **APP Keys** section. Data centers can belong to four regions , **India**, **USA**, **Europe** and **Australia**. In this screenshot, .in refers to  **India**. 

![](https://i.imgur.com/gpaDUo7.png)


The following are the domain URLs of data centres on different regions:
1. .in - https://api.in.freshchat.com/v2 
2. .eu - https://api.eu.freshchat.com/v2 
3. .au - https://api.au.freshchat.com/v2 and if the domain value is just msdk.freshchat.com, then it belongs to USA data center and hence the value that needs to be configured is https://api.freshchat.com/v2


### 1.2 Enable the integration in Yellow.ai's Integration module

1. Login to cloud.yellow.ai and click **Integrations** in the module switcher.

![](https://i.imgur.com/8zlKZxs.png)

2. Search for **Freshchat** or choose the category named **Live chat** from the left navigation bar and then click **Freshchat**.
3. Fill in the fields and click **Connect**.

![](https://i.imgur.com/OarRGkq.png)


### 1.3 Configure webhook URL in Freshchat dashboard

To receive events, you need to configure the webhook URL in the **Freshchat** dashboard.

1. Login to the **Freshchat** portal as an administrator.
2. Navigate to **Admin Settings** > **Webhooks** for chat and copy the webhook URL mentioned in the **Instructions** section of the **Freshchat Integration Card** and paste it here.

![](https://i.imgur.com/FgzhEJg.png)


## 2. Use-Case

This integration lets you connect with live agents on the **Freshchat** platform from your yellow.ai account.

### 2.1 Chat with Freshchat's Live Agent

1. In the [Studio flow builder](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket), select the **Raise Ticket** node.

![](https://i.imgur.com/tyx0Rce.png)


2. Select **Freshchat** from the Live chat agent drop-down list.

The following table contains the details of all the fields in the **Raise ticket** node.

<img src="https://i.imgur.com/krPvBQm.png" alt="drawing" width="60%"/>
<img src="https://i.imgur.com/Tx0duiY.png" alt="drawing" width="60%"/>


| Field name                | Sample value            | Data type | Description                                                                                      |
|---------------------------|-------------------------|-----------|--------------------------------------------------------------------------------------------------|
| Message after ticket assignment | Requesting live agent connection | String    | The message that will be displayed to the user after a ticket is assigned to an agent. |
| Name                      | Rajesh                  | String    | Name of the end user.                                                                            |
| Mobile                    | 9876543210              | String    | Mobile number of the end user.                                                                   |
| Email                     | test@gmail.com          | String    | Email address of the end user.                                                                   |
| Query                     | I have a concern regarding my flight ticket | String    | The subject/topic/reason why the ticket was created.                                     |
| Group name                | Sales                   | String    | Freshchat group to which the ticket needs to be assigned.                                       |
| Channel name              | Chat with US            | String    | Freshchat topic to which the ticket needs to be assigned.                                       |
| User ID                   | efgeye-fefefef-14343    | String    | Freshchat userId of the user, this is passed if the previous ticket needs to be re-opened.      |
| Unique Identifier         | ggyugu-2343h-34343      | String    | A unique identifier that will reflect as referenceId in the freshchat agent portal if passed        |


**Sample success response:**

```

{
  "assignedTo": true,
  "success": true,
  "status": "ASSIGNED",
  "ticketInfo": "{{apiresponse}}"
}
```

:::note
apiresponse represents the raw response from the Freshchat create ticket API.
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
apiresponse represents the raw response from the Freshchat create ticket API.
:::



























