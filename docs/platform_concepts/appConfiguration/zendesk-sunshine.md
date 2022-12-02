---
title : Zendesk Sunshine
sidebar_label : Zendesk Sunshine
---

### Scope of Integration

Yellow.ai Integration with Sunshine allows you to seamlessly connect your Zendesk sunshine instance with yellow.ai platform. Any customer who has a Sunshine account will be able to seamlessly connect with basic authentication methods. This connector will allow you to initiate a conversation from any of the channels configured under your sunshine account.

### Use-cases

Following are the use-cases which are currently accommodated in the Integration:


#### 1. Conversation with the Bot

Automated replies from the pre-created flows to the users endpoint channels listed Under sunshine

#### 2. Interaction with the live agent 

In this integration you can use **raise ticket** node to create a conversation with zendesk agent and once conversation is initiated the user can talk to the agent from the zendesk workspace. Once the conversation between the agent and user ends, bot takes forward the conversation with the user.


    
<img src="https://cdn.yellowmessenger.com/FJrG6Rh5BwQR1650630642729.png" alt="drawing" width="40%"/>




### Configuration

Configuring the integration with sunshine is straightforward. Follow the steps defined below to start integrating:



#### 1. Navigate to Channels Tab

Inside your project, navigate to the channels** **tab select Sunshine will be listed under Additional category.


    
<img src="https://cdn.yellowmessenger.com/cxI4BVy4Ny7h1650630787339.png" alt="drawing" width="40%"/>


#### 2. Configure webhook

Configure the webhook provided by Yellow at your sunshine app


<img src="https://cdn.yellowmessenger.com/GfTsJ18QwTXh1650630886817.png" alt="drawing" width="40%"/>



#### 3. Connect your sunshine account

Click on Connect and you will see and to provide sunshine application Id, Api key and secret, which you find inside your intercom developer app → settings


<img src="https://cdn.yellowmessenger.com/tXOK7vBtzSzb1650631006652.png" alt="drawing" width="40%"/>


#### 4. Configure Channels at sunshine

Configure any of the channels listed under your sunshine app and initiate the conversation


    
<img src="https://cdn.yellowmessenger.com/i06jsXerggfc1650631127422.png" alt="drawing" width="40%"/>



### Support




1. The text and attachments (image, file, carousel and quick replies) are being supported from both user and agent side.
2. For quick replies all the action nodes must be of same type (either link or reply)

### Reference


For more information, please refer [here](https://docs.smooch.io/rest/#section/Introduction).
