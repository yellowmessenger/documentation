---
title : Bamboo HR
sidebar_label : BambooHR
---



Yellow.ai Integration with Bamboo HR allows you to seamlessly connect your Bamboo HR service with the yellow.ai platform.

This integration enables the bot to perform the following BambooHR actions:

| Action |  Description |
| -------- | -------- | 
| Fetch Employee Information   | Fetches employee information using the employee ID.  |
| Fetch Employee Time-Offs   | Fetches employee time-offs using employee ID, start date, and end date (date range in YYYY-MM-DD format).    |
| Apply Time-Offs    | Time-off requests can be submitted by providing the necessary parameters (refer to [this doc](https://documentation.bamboohr.com/reference/time-off-add-a-time-off-request-1).    |
| Update Time-Offs | Updates time-off requests using the time-off ID. It can also update notes and status. |






## Integrating BambooHR with Yellow.ai

In a two-tier environment, you can connect an integration app in the Development environment. In a three-tier environment, you can connect the integration app either in Staging or Sandbox. All connected integrations are available in the live environment.



To integrate yellow with Bamboo HR, follow the steps below: 


1. Switch to the Development/Staging environment and go to **Extensions** > **Integrations** > **HR** > **Bamboo HR**. Alternatively, you can use the Search box to quickly find the required integration.

   ![](https://i.imgur.com/5J240m4.png)


2. In **Give account name**, enter a unique name for the integration. You can use only lowercase alphanumeric characters and underscores (_).

3. Enter your account's **Subdomain**. You can find your subdomain in the URL of your Bamboo HR dashboard in this format: `https://your_subdomain.bamboohr.com/home`.

4. Enter the **API key**. To generate the API Key, on BambooHR navigate to the account icon on the top right and cick on the **API Keys** option. Here you can generate your API Key.

5. Click **Connect**.
6. To connect another account, click +Add Account and proceed with the previous steps. You can add a maximum of 15 accounts.


## Accessing BambooHR Functions via bot conversation
In this integration, you can use integration nodes configured for Bamboo HR. Firstly you'll have to select Bamboo HR from the options in Integrations and add the necessary parameters. After that, you can use their action nodes in the required flows.

1. Go to Studio and create a flow that suits your use case.
2. Navigate to the specific point in the conversation where you want to add the node. Click Add Node, then go to **Integrations** and select **Bamboo HR**.

   ![](https://i.imgur.com/qT6hqKI.png)

   <img src="https://i.imgur.com/iyEvdW3.png" width="60%"/>

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::


| Action |  Description |
| -------- | -------- | 
| Fetch Employee Information   | Fetches employee information using the providedq employee ID.  |
| Fetch Employee Time-Offs   | Fetches employee time-offs using employee ID, start date, and end date (date range in YYYY-MM-DD format).    |
| Apply Time-Offs    | Submits time-off requests using the required parameters (refer to [this doc](https://documentation.bamboohr.com/reference/time-off-add-a-time-off-request-1).    |
| Update Time-Offs | Updates time-off requests using the provided time-off ID. You can also update notes and status. |

