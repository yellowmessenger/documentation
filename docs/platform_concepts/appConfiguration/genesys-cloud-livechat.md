---
title : Genesys PureCloud Live Chat
sidebar_label : Genesys PureCloud Live Chat
---

## Configuration

Inside your project, navigate to the Integrations tab and on the left side bar select **Live Chat**. You will find Genesys Cloud Live Chat.

<img src="https://cdn.yellowmessenger.com/TB7tOqiX2DkB1651825117362.png" alt="drawing" width="60%"/>

The details for above fields has to be taken from your genesys cloud account. Steps to get those details are provided below.

Go to the admin tab in your genesys account.

### Create a role 

1. Please create a custom role, from admin tab → peoples & permissions → roles/permissions → Add a new role → permissions, add messaging.integration.all, conversation.message.all.

2. Assign this new role to yourself in people under peoples & permissions.

### Create Oauth Client 

1. And then under integrations, you will find Oauth → Add a new client and provide app name and description and select client credentials. [(link for ref)](https://developer.genesys.cloud/api/rest/authorization/use-client-credentials).
2. In Roles while creating Oauth client, assign the above created custom role and save it. A clientId and clientSecret is created to save them.

### Create an integration

1. You need to add our webhook in an integration. You can get a webhook from the integration tab of genesys Cloud. Steps are detailed [here](https://help.mypurecloud.com/articles/configure-an-open-messaging-integration/)

### Add Message Route

1. Again you need to add an message route for the newly created integration, steps are provided [here](https://help.mypurecloud.com/articles/about-message-routing/)

And finally we need the **hostUrl** of your account, **clientId**, **clientSecret** which you got from the Oauth client and **IntegrationId** of the integration you created earlier.
### Use-cases

In this integration you can use raise ticket node to create a conversation with genesys Cloud agent and once conversation initiates the user can talk to the genesys agent.

<img src="https://cdn.yellowmessenger.com/vPfrT6YtytSl1649093680793.png" alt="drawing" width="60%"/>

### Events
Following are the events which are currently accommodated in the Integration:

Event | Description
----- | -----------
genesys_cloud_agent_reply | This event reaches to bot when genesys agent sends a reply to the user.

### Limitations

1. Only text and images are being supported from both the user and agent side.
2. Right now we only have an option to initiate chat, we don't get agent accepted and closed events and also the agent details who is doing the conversation with the user.

### Reference

[Document Reference](https://developer.genesys.cloud/api/digital/openmessaging/)
