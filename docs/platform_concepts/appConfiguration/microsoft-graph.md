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

### Use-cases

Following are the use-cases which are currently accommodated in the Integration:

#### Get access tokens

Access tokens required to call the Graph APIs can be fetched using action nodes
provided in the integration. It should be noted that necessary permissions need to be
given while registering the application on the Azure portal. For more details, please refer
https://docs.microsoft.com/en-us/graph/auth-v2-service.

<img src="https://www.dropbox.com/s/1czxex1jx76le23/image1.png?raw=1" alt="drawing" width="60%"/>

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

<img src="https://www.dropbox.com/s/qqxql3vomvy75w2/image3.png?raw=1" alt="drawing" width="100%"/>

<img src="https://www.dropbox.com/s/z6kl9wk0vt9dq4i/image4.png?raw=1" alt="drawing" width="100%"/>

Voila! And just like that, you are now connected and can call Microsoft Graph APIs.

### Supported Version

This integration shall support latest version releases.

For more information, please refer to Microsoft Graph Documentation.

