---
title : SAP Cloud For Customers (SAP IO)
sidebar_label : SAP IO
---

Yellow.ai Integration with SAP.io allows you to seamlessly connect your SAP cloud instance with the yellow.ai platform. 
Any customer with a SAP account can seamlessly connect their SAP instance with yellow.ai by providing the user name, password and the instance base URL. This connector will enable users to receive events for SAP objects. Furthermore, this connector will enable you to take actions, such as create, update, get and delete the tickets.

:::note
This integration will support the latest version releases.
For more information, click [here](https://help.sap.com/doc/d0f9ba822c08405da7d88174b304df84/CLOUD/en-US/index.html).
:::

## 1. Configuration

Configuring the integration with SAP Cloud for customers is straightforward. Follow the steps defined below to integrate SAP Cloud:

1. **Navigate to integration tab**
- Inside your project, navigate to the Configuration tab.
- Click the **Integrations** tab. 
- Search for **SAP Cloud For Customers**.  

![](https://lh6.googleusercontent.com/M3JrZojaUujFy3pkfka2Dr_iinH-p7bYhimcvdmgr6EofyaMiGbg0qbBqfeH41gay4ObbAAfedYgYosmooyYN8XEdPMDF8oCgk4qYrv4E4NBDtZTNnaSU7qmCkC8JcSnDPoIzeoXsfYNXfpjFPV9lcxvjngOcQUPARNcuUjlqc6WiLPAE6iS2cU5QA)

2. **Connect to your SAP cloud account**
- Refer to the instructions provided in the page and then click **Connect**. 
- You are now connected with your SAP cloud account.
- If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 5 merchant accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::


> Click [here](https://help.sap.com/doc/d0f9ba822c08405da7d88174b304df84/CLOUD/en-US/index.html) to learn about the action nodes used for this integration.

## 2. Use cases 

Following are the use-cases which are currently accommodated in the integration:

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

1. **Simple Integration**   

Yellow.ai connects with SAP using the SAP cloud for customer account credentials.    
While integrating, the user has to provide basic credentials such as user name and password.

2. **SAP Action Nodes**   

Various actions on the ticketing functionalities supported by SAP can be performed. The actions are not just limited to creating a new record, you can read, update and delete relevant records.

![](https://lh5.googleusercontent.com/oM4KcoVXcdf7bHxrbdCK__bU1OR7Jb28Rw4MojtuJYx7bPmEZMTa8sBeDEGi0-BUOhoIdggylh0puULw2bOCQarOxAO6qh7dM2F45cbYu2Wc2CwACrI9GAHhhc0gozXFPKkvl_rYDJlb37t9WPO9rqBS7oVoPi8-AmRKk6P232gucjjbVMbZGaixVg)

On-click the SAP cloud for customers node, and you can customize the object and action type along with the attributes you wish to pass.

![](https://lh3.googleusercontent.com/QsYR9GCrCCk5mg-lnB-r1GDDBrpTHAyNX0m7tSGnnKGZKH3QX0uBC0ejzm6SrVINz5QNCGwlLMyn_xW0ylcpeWZVOsrv2wlFV_vTbD8r5ZS3cJX9Od5VTROuWaGB_Wym5F-r_Mbkn-mBLVz6u4VhLvVXs0XHThSbxjnYnqNLkwKyQYGlExzpabs9XQ)

