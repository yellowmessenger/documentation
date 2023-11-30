---
title : Microsoft Graph
sidebar_label : Microsoft Graph
---

### Scope of Integration

Yellow.ai Integration with Microsoft Graph allows you to seamlessly connect and use Microsoft
Graph services with yellow.ai platform. Any customer who has an Azure Active Directory will be
able to seamlessly connect and call Microsoft Graph APIs on yellow.ai platform. This connector
will enable users to get access tokens using action node which can then be used to call the
Graph APIs.

### Configuration

Configuring the integration with Microsoft Graph is straight forward. Follow the steps defined
below to start integrating:

#### 1. Navigate to Integrations Tab

Inside your project, navigate to the Configuration tab and then click on the Integrations 
Tab. Search for Microsoft Graph.

<img src="https://www.dropbox.com/s/dlo1br71882jf5v/image2.png?raw=1" alt="drawing" width="40%"/>

#### 2. Connect to Microsoft Graph

Click on Connect and enter the values in the fields from your Azure account. Once the
values are given, the Microsoft Graph will be connected and the action node can be
used to get the access token which can then be used to call Microsoft Graph APIs.

<img src="https://i.imgur.com/WI1nPqs.jpg" alt="drawing" width="100%"/>

<img src="https://i.imgur.com/WI1nPqs.jpg" alt="drawing" width="100%"/>

Voila! And just like that, you are now connected and can call Microsoft Graph APIs.

If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 5 merchant accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::

### Use-cases

Following are the use-cases which are currently accommodated in the Integration:

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

#### Get access tokens

Access tokens required to call the Graph APIs can be fetched using action nodes
provided in the integration. It should be noted that necessary permissions need to be
given while registering the application on the Azure portal. For more details, please refer
https://docs.microsoft.com/en-us/graph/auth-v2-service.

<img src="https://www.dropbox.com/s/1czxex1jx76le23/image1.png?raw=1" alt="drawing" width="60%"/>

### Supported Version

This integration shall support latest version releases.

For more information, please refer to Microsoft Graph Documentation.

