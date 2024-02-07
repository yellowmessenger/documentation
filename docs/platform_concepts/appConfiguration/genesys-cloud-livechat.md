---
title : Genesys Purecloud live
sidebar_label : Genesys Purecloud live
---

Yellow.ai connects with Genesys Purecloud Live, enabling users to interact with live agents. This integration helps by linking live agents from your Genesys Purecloud account with users assisted by your yellow.ai bot.

## Prerequisites

1. An active Geneysys Purecloud live account 
2. An active Yellow.ai account

:::info
Only text and images are being supported from both the user and agent side.
:::

## Obtain integration credentials from Genesys Purecloud

To connect your Yellow.ai platform with Genesys Purecloud account, you need to perform the following actions in your Genesys Purecloud account to obtain the credentials to input in your Yellow.ai platform.

### Step 1: Create a user role

Create a custom role with certain scopes and assign that custom role to the user profile responsible for handling incoming chats from yellow.ai bot. To do so:

1. Go to **Admin** > **Roles/ Permissions**.

   ![](https://i.imgur.com/QhEagUJ.png)

2. Click **+Add role**.

   ![](https://i.imgur.com/o7J1nzr.png)

3. In **Role Details** enter a name for the role and describe it. Click **Permissions** and enable the below mentioned scopes for the role. You can search for the scopes in the highlighted search box and click **Save**.

* Messaging > Integration > All Permissions
* Conversation > Message > All Permissions
* Process Automation > Trigger > All Permissions

   ![](https://i.imgur.com/MVIHayp.png)

4. Go to **People** and click the ellipsis button beside the name of the individual for whom the role was created. Click **Edit Person**.

   ![](https://i.imgur.com/2W0d2by.png)


5. Choose **All** under **View**, enable the custom role you created in step 3 and click **Save**. By this way you assign the role to the respective person. 

   ![](https://i.imgur.com/qMTrdUW.png)

### Step 2: Create an OAuth client

You need to create an OAuth client to retrieve Client ID and Client secret for your Genesys login. This OAuth client is created for the role you created in the previous step. 

1. Go to **Admin** > **Integrations** > **OAuth**.

   ![](https://i.imgur.com/2Yy4RS7.png)

2. Click **+ Add client**.

   ![](https://i.imgur.com/XcLUGJO.png)

3. Enter a name for your app and choose **Client Credentials** under **Grant type**.

   ![](https://i.imgur.com/qBF8j0R.png)

4. Go to **Roles** and choose the custom role you created in the previous section.

   ![](https://i.imgur.com/BsS1Tdb.png)

5. Click **Save**.

 OAuth client gets created. Copy the **Client ID** and **Client Secret**.

   ![](https://i.imgur.com/D7hP75v.png)

### Step 3: Add Yellow.ai's webhook in Genesys

You need to create an integration to add Yellow.ai's webhook in Genesys. This helps Genesys to inform the Yellow.ai bot about user chat actions, such as drop-offs, responses, or chat endings.

1. Go to **Admin** > **Message** > **Platforms** > + **Create new integration** > **Open Messaging**.

   ![](https://i.imgur.com/qu2dlgQ.png)

2. Fill in the following fields:

   ![](https://i.imgur.com/DZWglvD.png)

* In **Name**, enter a name for your integration.
* In **Outbound Notification Webhook URL**, enter https://cloud.yellow.ai/ or any test URL.

:::info
A webhook is generated once the integration is established in Yellow.ai. Initially, you can provide a test URL to configure the integration. After setting it up, we'll retrieve the webhook from Yellow.ai. We will show the process in the upcoming steps.
:::

iii. In **Outbound Notification Webhook Signature Secret Token**, enter an integration ID and click **Save**.

3. Once you save, your integration ID will be generated. Copy it from the URL.

![](https://i.imgur.com/0mCNx1A.png)

### Step 4: Add a message route

Message route helps in rotuing the messages from bot to the live agent on Genesys.

1. Create a flow in Genesys Purecloud. This flow should be based on the process the chat should reach the agent. Click [here](https://help.mypurecloud.com/articles/create-call-flow/#:~:text=Create%20an%20inbound%20call%20flow&text=The%20Create%20Flow%20dialog%20box,the%20flow's%20default%20supported%20language.) for steps.
2. After creating the flow, go to **Admin** > **Routing** > **Message Routing**.

   ![](https://i.imgur.com/s0w26rW.png)

3. Click **+** in right corner.

   ![](https://i.imgur.com/mraN0mi.png)

4. Select the flow you created in 1 and in **Addresses** select the integration you created in the previous step. Click **Save**.

   ![](https://i.imgur.com/WVVIFoX.png)

## Authenticate Genesys Purecloud Live in Yellow.ai

Enter the Client ID, Client Secret and integration ID obtained from the previous sections.

1. Go to cloud.yellow.ai > **Integrations** > search for **Genesys Purecloud Live**.

![](https://i.imgur.com/3SIZ2Pv.png)

2. Fill in the following fields:

* **Give account name:** Provide a name to your account.
* **Host URL:** The URL of your genesys account.
* **Client ID:** Client obtained in [Step 2](#step-2-create-an-oauth-client).
* **Client Secret:** Client Secret obtained in [Step 2](#step-2-create-an-oauth-client).
* **Integration ID:** Integration ID obtained in [Step 3](#step-3-add-yellowais-webhook-in-genesys).

3. Click **Connect**.
4. Once the integration is setup, copy the Webhook URL by clicking on it. 

   ![](https://i.imgur.com/bRUxVXI.png)
   
5. Go to your **Genesys Purecloud Live account** > **Admin** > **Message** > **Platforms** > integration you created in Step 3. > **Configure**

    ![](https://i.imgur.com/q17Ommo.png)
    
6. Paste the copied Webhook in **Outbound Notification Webhook URL** and click **Save**.

   ![](https://i.imgur.com/lYiEDnl.png)

## Activate Genesys event in your bot

1. Go to **Studio** and click **Event** > **Integrations**.

 ![](https://i.imgur.com/xQq8hOw.png)

2. Search for Genesys and click **more options** > **Activate**.

 ![](https://i.imgur.com/F0sZUir.png)

:::info
If you have added multiple accounts in your platform, enable events for each of those accounts.
:::

## Close Genesys chats in sync with Yellow.ai 

To end the chat in Genesys when a customer ends the chat in Yellow.ai, you need to set up a workflow. 

1. Go to **Admin** > **Integrations** > **Web Services Data Actions** > **Install**. Install it and enable it.

   ![](https://i.imgur.com/XHfn7Ar.png)

2. Go to **Actions** > **+ Add Action** > Choose the integration enabled in the previous step.

   ![](https://i.imgur.com/guBID6B.png)

3. Provide a name to the action and click **Add**.

    ![](https://i.imgur.com/e8W4Z4l.png)

4. After creating the action, go to **Setup** > **Input Contract** and paste the JSON given below the image.

    ![](https://i.imgur.com/5XcRTg7.png)

**JSON:**

```
{
  "title": "data",
  "type": "object",
  "required": [
    "to",
    "disconnectType"
  ],
  "properties": {
    "to": {
      "description": "To Address",
      "type": "string"
    },
    "disconnectType": {
      "description": "The type of disconnection",
      "type": "string"
    },
    "conversationId": {
      "description": "conversationId",
      "type": "string"
    },
    "eventName": {
      "description": "Event Name",
      "default": "conversation-resolved",
      "type": "string"
    }
  },
  "additionalProperties": true
}

```

5. Go to **Configuration**, in **Request URL Template**, paste the webhook URL(copied from Yellow.ai bot) and select the method as POST. After this, click **Save & Publish**.

   ![](https://i.imgur.com/18TRQWv.png)

6. Go to **Admin** > **Architect**. Hover over **Flows** and click **Workflow**.

   ![](https://i.imgur.com/n8iH3A2.png)

7. Click **+ Add** and create a new workflow.

   ![](https://i.imgur.com/7V2JIw4.png)


8. Add three String variables. To add a variable go to **Data** > enter a name for the variable and click **Create**. 

   ![](https://i.imgur.com/rjKH0FR.png)

9. Click the variable to add details. 

   ![](https://i.imgur.com/cEiHcmd.png)

Enable **Input to flow** in each variable and pass an initial value for the variable which disconnects the chat when the user ends it.

  <img src="https://i.imgur.com/TJVFiyB.png" alt="drawing" width="50%"/>

10. Go back to **Initial state** and below the **Start node**, add a **Call Data Action** node. To do so, click the arrow below **Start node** and go to **Toolbox** > **Data** > **Call Data Action**.

    ![](https://i.imgur.com/OxXMD3U.png)

11. Once you add the node, in **Category** select **Web Services Data Actions** and in **Data Action** select the action you created in step 3. 

    ![](https://i.imgur.com/TFjVmjn.png) 

12. Once you select the action, corresponding fields will display. Pass the variables you created in step 8. 

    <img src="https://i.imgur.com/ktC9QS2.png" alt="drawing" width="50%"/>

13. Click **Save** to save your settings, and then click **Publish**.

    ![](https://i.imgur.com/tP3QApL.png)
    
:::info
Make sure to keep the workflow ID found in the URL handy, as it will be necessary to access the API.
:::


## Connect bot users to live agents on Genesys

:::info
Use **Ticket-closed** in the **Raise Ticket node** to perform specific actions when a live chat closes, instead of using the **ticket-close** event.
:::

1. Go to **Studio** and [build a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow) based on how you want the bot to take the user through the process.
2. Include the [Raise ticket node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) at the point in the flow where you want to let the user talk to Genesys live agent. To accomplish this, include a Raise ticket node and choose **Genesys PureCloud Live Agent** under **Live chat agent**.

   ![](https://i.imgur.com/4ZM7Y1i.png)


3. Fill in the following fields in the node. The variables chosen for these fields must be previously collected in the flow via node. To know more about this in detail, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables).

| Field name | Data type | Description | Sample value |
|------------|-----------|-------------|--------------|
| Live chat agent | - | - | Choose **Genesys PureCloud Live agent** in the drop-down |
| Account name | String | Choose the Genesys account to which the chats should be transferred | account1 |
| Message after ticket assignment | String | The message that will be displayed to the end user after a ticket is successfully assigned to an agent | Requesting live agent connection. |
| Name | String | Name of the end user | John |
| Mobile | String | Mobile number of the end user | 9876543210 |
| Email | String | Email address of the end user. This is a mandatory field | test@gmail.com |
| Query | String | The subject/topic/reason why the ticket was created | I have a concern regarding my flight ticket |
| Priority | String | The priority of the ticket | MEDIUM |

You can enable **Advanced Options** to set the priority, auto-translation, custom fields, tags and department.

<img src="https://i.imgur.com/tPS9R0J.png" alt="drawing" width="50%"/>

4. Once you have set up the flow, chats will get automatically forwarded to live agents on Genesys live chat when this flow gets triggered.

**Result:**

**On Yellow.ai bot**


   <img src="https://i.imgur.com/gj5AHt8.png" alt="drawing" width="40%"/>

**On Genesys Purecloud Live**

  ![](https://i.imgur.com/81JVjHf.png)

#### Reference

[Document Reference](https://developer.genesys.cloud/api/digital/openmessaging/)
