---
title : Bamboo HR
sidebar_label : BambooHR
---



Yellow.ai Integration with Bamboo HR allows you to seamlessly connect your Bamboo HR service with the yellow.ai platform.



## 1. Use Case
In this integration, you can use integration nodes configured for Bamboo HR. Firstly you'll have to select Bamboo HR from the options in Integrations and add the necessary parameters. After that, you can use their action nodes in the required flows.

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::


| Node Name |  Functionality |
| -------- | -------- | 
| Fetch Employee Information   | Employee information can be fetched by providing the employee ID.  |
|    Fetch Employee Time-Offs   | Employee time-offs can be fetched using employee ID, start date, and end date (date range in YYYY-MM-DD format).    |
| Apply Time-Offs    | Time-off requests can be submitted by providing the necessary parameters (refer to [this doc](https://documentation.bamboohr.com/reference/time-off-add-a-time-off-request-1).    |
| Update Time-Offs | Time-off requests can be updated by providing a time-off ID. You can update notes and status. |


![](https://cdn.yellowmessenger.com/NzzrjkOBWe8L1669034213426.png)


## 2. Configuration

To integrate yellow with Bamboo HR, follow the steps below: 


1. Navigate to **Integrations** and search for Bamboo HR under **All integrations** or under **HR**.

![](https://cdn.yellowmessenger.com/co5MChEIFkcs1669034212905.png)

2. You can find your subdomain in the URL of your Bamboo HR dashboard in this format ```https://your_subdomain.bamboohr.com/home```.

3. For API Key, navigate to the account icon in the top right. In the dropdown, you'll find the 'API Keys' option. There you can create your API Key.

4. Click **Connect**.
5. :::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 5 merchant accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::
 
