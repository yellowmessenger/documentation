---
title : Genesys PureCloud Live Chat
sidebar_label : Genesys PureCloud Live Chat
---

# Genesys

Yellow.ai seamlessly integrates with Genesys Purecloud Live, allowing your users to engage with live agents. This integration helps when you have live agents available within your Genesys Purecloud account and users to assist through your yellow.ai bot, streamlining the connection between the two for a smoother process.

## Prerequisites

1. An active Geneysys Purecloud live account 
2. An active Yellow.ai account


## Obtain integration credentials from Genesys Purecloud

To connect your Yellow.ai platform with Genesys Purecloud account, you need to perform the following actions in your Genesys Purecloud account to obtain the credentials to input in your Yellow.ai platform.

### Step 1: Create a role

You need to create a custom role with certain scopes and then assign that custom to your profile. To do so:

1. Go to **Admin** > **Roles/ Permissions**.

   ![](https://i.imgur.com/QhEagUJ.png)

2. Click **+Add role**.

   ![](https://i.imgur.com/o7J1nzr.png)

3. In **Roles Details** enter a name for your role and describe it. Click **Permissions** and enable the below mentioned scopes for the role. You can search for the scopes in the highlighted search box and click **Save**.

* messaging.integration.all
* conversation.message.all


   ![](https://i.imgur.com/Ce6oV7J.png)

4. Go to **People** and click the more button next to your name. Click **Edit Person**.

   ![](https://i.imgur.com/2W0d2by.png)


5. Choose **All** under **View**, enable the custom role you created in step 3 and click **Save**.

   ![](https://i.imgur.com/qMTrdUW.png)

### Step 2: Create an OAuth client

You need to create an OAuth client to retrieve Client ID and Client secret for your Genesys login.

1. Go to **Admin** > **Integrations** > **OAuth**.

   ![](https://i.imgur.com/2Yy4RS7.png)

2. Click **+ Add client**.

   ![](https://i.imgur.com/XcLUGJO.png)

3. Enter a name for your app and choose **Client Credentials** under **Grant type**.

   ![](https://i.imgur.com/qBF8j0R.png)

4. Go to **Roles** and choose the custom role you created in the previous section.  Click **Save**.

   ![](https://i.imgur.com/BsS1Tdb.png)

Your OAuth client gets created. Copy the **Client ID** and **Client Secret**.

   ![](https://i.imgur.com/D7hP75v.png)

### Step 3: Add Yellow.ai's webhook in Genesys

You need to create an integration to add Yellow.ai's webhook in Genesys. 

1. Go to **Admin** > **Message** > **Platforms** > + **Create new integration** > **Open Messaging**.

   ![](https://i.imgur.com/qu2dlgQ.png)

2. Fill in the following fields:

   ![](https://i.imgur.com/DZWglvD.png)

* In **Name**, enter a name for your integration.
* In **Outbound Notification Webhook URL**, enter Yellow.ai's webhook from the Integration section.
* In **Outbound Notification Webhook Signature Secret Token**, enter an integration ID and click **Save**.

3. Once you save, your integration ID will be generated. Copy/paste it from the URL.

![](https://i.imgur.com/hEB1Ewd.png)

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

Enter the Client Id, Client Secret and integration ID obtained from the previous sections.

1. Go to cloud.yellow.ai > **Integrations** > search for **Genesys Purecloud Live**.

![](https://i.imgur.com/3SIZ2Pv.png)

2. Fill in the following fields:

* **Give account name:** Provide a name to your account.
* **Host URL:** The URL of your genesys account.
* **Client ID:** Client obtained in [Step 2](#step-2-create-an-oauth-client).
* **Client Secret:** Client Secret obtained in [Step 2](#step-2-create-an-oauth-client).
* **Integration ID:** Integration ID obtained in [Step 3](#step-3-add-yellowais-webhook-in-genesys).

3. Click **Connect**.

:::note
1. If you multiple Genesys accounts, enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 5 merchant accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::

## Activate Genesys event in your bot

1. Go to **Studio** and click **Event** > **Integrations**.

![](https://i.imgur.com/xQq8hOw.png)

2. Search for Genesys and click **more options** > **Activate**.

![](https://i.imgur.com/F0sZUir.png)

:::info
If you have added multiple accounts in your platform, enable events for each of those accounts.
:::

## Connect bot users to live agents on Genesys

1. Go to **Studio** and [build a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow) based on how you want the bot to take the user through the process.
2. Include the [Raise ticket node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) at the point in the flow where you want to let the user talk to Genesys live agent. To accomplish this, include a Raise ticket node and choose **Genesys PureCloud Live Agent** under **Live chat agent**.

   ![](https://i.imgur.com/4ZM7Y1i.png)


3. Fill in the following fields in the node. The variables chosen for these fields must be previously collect in the flow via node. To know more about this in detail, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables).

| Field name | Sample value | Data type |Description
| -------- | -------- | -------- |-----|
|Live chat agent| -|-| Choose **Genesys PureCloud Live agent** in teh drop down|
|Account name| account1| String| Choose the Genesys account to which the chats should be transferred|
|Message after ticket assignment|Requesting live agent connection.|String| The message that will be displayed to the end user after a ticket is successfully assigned to an agent|
|Name| Rajesh|String|Name of the end user|
|Mobile| 9876543210| String|Mobile number of the end user|
Email|test@gmail.com|String|Email address of the end user. This is a mandatory field|
Query|I have a concern regarding my flight ticket|String| The subject/topic/reason why the ticket was created|
Priority|MEDIUM|String|The priority of the ticket|

You can enable **Advanced Options** to access the advanced features of this node.

<img src="https://i.imgur.com/tPS9R0J.png" alt="drawing" width="50%"/>

4. Once you have set up the flow, chats will get automatically forwarded to live agents on Service now live chat when this flow gets triggered.

**Result:**

**On Yellow.ai bot**


   <img src="https://i.imgur.com/gj5AHt8.png" alt="drawing" width="40%"/>

**On Genesys Purecloud Live**

  ![](https://i.imgur.com/81JVjHf.png)

## Limitations

1. Only text and images are being supported from both the user and agent side.
2. At present, we can only start chats; we do not receive agent acceptance, closure events, or agent information involved in user conversations. To monitor when the agent leaves:

* Create a custom trigger using  [Trigger API](https://developer.genesys.cloud/platform/process-automation/). This trigger should listen for the ``v2.detail.events.conversation.{id}.acw`` event and then activate an Architect workflow. This workflow can make a Web Service Data Action request to call a webhook in your proxy, notifying you when the agent has left the conversation. 
* Additionally, you can also use the [user.start](https://developer.genesys.cloud/notificationsalerts/notifications/available-topics#v2-detail-events-conversation--id--user-start) event to track when the agent joins the conversation. For details on workflows, please refer to this [document](https://help.mypurecloud.com/articles/work-with-workflows/).  To learn more about **Web Service Data Actions**, click [here](https://help.mypurecloud.com/articles/about-web-services-data-actions-integration).

#### Reference

[Document Reference](https://developer.genesys.cloud/api/digital/openmessaging/)
