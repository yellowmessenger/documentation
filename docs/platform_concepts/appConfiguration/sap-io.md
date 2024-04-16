---
title : SAP Cloud For Customers (SAP IO)
sidebar_label : SAP IO
---

Yellow.ai Integration with SAP.io allows you to seamlessly connect your SAP cloud instance with the yellow.ai platform. 

With this integration, you can seamlessly connect their SAP instance with yellow.ai by providing the user name, password and the instance base URL. This connector will enable users to receive events for SAP objects. Furthermore, this connector will enable you to take actions, such as create, update, get and delete the tickets.

Action	| Description
------ | ------------
Create Service Request | Creates a new service request.
Update Service Request | Updates an existing service request.
Get Service Request | Retrieves details of a service request.
Delete Service Request | Deletes a service request.

:::note
This integration will support the latest version releases. For more details, click [here](https://help.sap.com/doc/d0f9ba822c08405da7d88174b304df84/CLOUD/en-US/index.html).
:::

## Integrating SAP for cloud customers with your bot

In a two-tier environment, you can connect an integration app in the Development environment. In a three-tier environment, you can connect the integration app either in Staging or Sandbox. All connected integrations are available in the live environment.


To connect SAP with yellow.ai, follow these steps:

1. Switch to Development/Staging environment and go to **Extensions** > **Integrations** > **ITSM** > **SAP for cloud customers**.

   ![](https://i.imgur.com/YHdgNYZ.png)


2. In **Give account name**, enter a unique name for the integration. You can use only lowercase alphanumeric characters and underscores (`_`).

   ![](https://i.imgur.com/esCBsax.png)

3. In **Username** and **Password**, enter your SAP cloud account's login credentials.
4. In **SAP base URL**, enter your account's domain URL.
5. Click **Connect**. 
6. To connect another account, click **+Add Account** and proceed with the previous steps. You can add a maximum of 15 accounts.



## Accessing SAP Functions through Bot Conversation

The SAP integration enables bot to perform various actions. These include creating new records, reading, updating, and deleting existing records.

   ![](https://i.imgur.com/5gjmTpH.png)


:::note
In cases with multiple accounts, you can select which account to use for accessing a specific action.
:::

On-click the SAP cloud for customers node, and you can customize the object and action type along with the attributes you wish to pass.

   <img src="https://lh3.googleusercontent.com/QsYR9GCrCCk5mg-lnB-r1GDDBrpTHAyNX0m7tSGnnKGZKH3QX0uBC0ejzm6SrVINz5QNCGwlLMyn_xW0ylcpeWZVOsrv2wlFV_vTbD8r5ZS3cJX9Od5VTROuWaGB_Wym5F-r_Mbkn-mBLVz6u4VhLvVXs0XHThSbxjnYnqNLkwKyQYGlExzpabs9XQ" width="80%"/>

