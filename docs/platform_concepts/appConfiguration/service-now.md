---
title : Service Now
sidebar_label : Service Now
---

Integrate Yellow.ai with ServiceNow and manage tickets on ServiceNow directly from the Yellow.ai platform.


This integration allows you to perform the following tasks:

| Action                  | Description                                         |
|-------------------------|-----------------------------------------------------|
| Create ticket           | Create a ticket in ServiceNow.                |
| Update ticket           | Update a ticket in ServiceNow.                |
| Search ticket           | Search for a ticket in ServiceNow.            |
| Upload file             | Upload a file to ServiceNow.                        |
| Get file                | Fetch a file from ServiceNow.                       |
| Get File list           | Fetch a file list from ServiceNow.                  |


## Connect ServiceNow with Yellow.ai

### Create an app on ServiceNow

1. Go to your **ServiceNow** instance, search for **Application Registry** in the **Filter Navigator**.
2. Click **New** and then click **Create an OAuth API endpoint for external clients** to create an application.
3. Enter a unique name of your application.
4. Add the [Redirect URL](https://cloud.yellow.ai/integration/oauth/serviceNow).
5. In **Accessible from** field, choose **All Application Scopes** and **Save**.
6. Copy the **Instance URL** (The URL on the  address bar of your Service now account, for example, '<[instancename].service-now.com.>', **Client ID** and **Client Secret**.


### Authorize Yellow.ai to access your Service now account

1. Go to **Integrations** and search for **Service Now**.

   ![](https://i.imgur.com/6oCjt9g.png)

2. In **Give account name** provide a name to that Service now account. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
3. Copy and paste the **Instance URL**, **Client ID** and **Client Secret** (as mentioned in the previous section)
4. Click **Connect**.
5. If you have multiple accounts, follow the above mentioned steps to add each of them. You can add a maximum of 5 merchant accounts.

   ![](https://i.imgur.com/J7jm3F3.png)

:::note
1. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, you can only choose the account names and not edit them in Live mode.
2. In the three-tier environment (Staging/Sandbox/Production) modes, new accounts can be added and edited in Staging and Sandbox. In Production, only accounts from Staging are available. Mapping is limited in Production environment.
:::

## Manage ServiceNow from Yellow.ai

From Yellow.ai you can access your ServiceNow instance and create,update and search a ticket, upload,get file and file list.
    
1. Go to **Studio** and [create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow) that suits your use case.
2. Wherever you want the bot perform a certain action on Service Now, include Service now Integration node. To include the node, click to add a node > **Integrations** > **ServiceNow**.

   ![](https://i.imgur.com/0YSzVWM.png)
   ![](https://i.imgur.com/Vgs88to.png)

3. Click the node and set the following fields.

   ![](https://i.imgur.com/n4DSLcV.png)
     * **Account name:** Choose the Service now account for the   intended action.
   *  **Action:** Select the action to perform.
   *  **Parse API response:** Select the function that will parse the API response(optional).

4. Store the respnse of this node in a variable([Store response in ](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables) field in the previous screenshot).

5. [Fetch this variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#42-retrieve-data-from-variables) in a [message node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#docusaurus_skipToContent_fallback) to display the response to the user.