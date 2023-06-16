---
title : Sunshine Conversations
sidebar_label : Sunshine Conversations
---

Sunshine Conversations is a messaging platform that allows businesses to interact with their customers across the various messaging apps such as Facebook Messenger, WhatsApp, Instagram, and SMS. The Sunshine Conversations bot allows you to send text, images, files, cards, and quick replies.

For instance, if a business has integrated Sunshine conversations with Facebook, it creates a Sunshine conversations channel for Facebook. Businesses can use this channel to communicate with their customers via WhatsApp to send and receive messages. Similarly, you can integrate with other messaging apps based on your business requirements.

## Prerequisites to setup Sunshine conversation channel

* Get access to the Sunshine dashboard.
* Get access to the Zendesk admin or agent portal.
* Contact the Zendesk Support team to integrate the Sunshine account with the Zendesk account.
* Create a [Facebook account](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/facebook-messenger#connect-your-facebook-messenger-account) and page for integration with Sunshine Conversations. You can connect to any channel under Sunshine integrations. For example, Facebook is connected.


## Create a Sunshine conversation app

To configure Sunshine Conversation on the Yellow.ai platform, you need to create a new Sunshine Conversation app.

To create an app, follow these steps:

1. Log in to `https://app.smooch.io/` with your credentials.

     ![](https://i.imgur.com/FCwFjXu.png)
	
2. Click **Create new Sunshine Conversations** app.

     ![](https://i.imgur.com/zZXTvcs.png)
	 
3. Enter the name of your app and click **Create App**.	  
    ![](https://i.imgur.com/UQKNYFR.png)
	
4. Click **Connect channels** to connect a channel to your app. 

    ![](https://i.imgur.com/1i6Bg94.png)
	
5. You can select your preferred channels from the available list to integrate with Sunshine Conversations.

      ![](https://i.imgur.com/Q1hrF7D.png)
	  
6. Once you have authorized Sunshine Conversations to your Facebook account, select the page you have created and Click **Connect Facebook page**.

      ![](https://i.imgur.com/ATrRvlc.png)  
	  
7. Navigate to the **Settings** tab and copy the **App ID** and **API keys** secret, which are required for configuring Switchboard.

    ![](https://i.imgur.com/7CX0yMl.png)
   
## Configure Switchboard on Zendesk admin portal

You need to configure Switchboard to handle the conversation between Zendesk and your bot. The switchboard enables you to programmatically route a user’s conversation through third party systems such as bot frameworks and helpdesk systems. For more information on how to configure Switchboard, click [here](https://docs.smooch.io/rest/#tag/Switchboard-Integrations).

## Connect Sunshine conversation channel to your bot

To connect Sunshine conversations to your bot on the platform, follow these steps:

1. Log on to https://cloud.yellow.ai and navigate to **Overview > Channels > Additional > Sunshine Conversations > click Connect**.

   ![](https://i.imgur.com/wFrqroe.png)

2. Click **Connect to Sunshine Conversation**.

   ![](https://i.imgur.com/f5xixtY.png)

3. Enter your Zendesk subdomain ID that you received while creating a Zendesk account and click **Sign in**.

    <img src="https://i.imgur.com/x4Yidtp.png)" alt="drawing" width="60%"/>
	
4. Click **Allow** to access your Zendesk account.

     <img src="https://i.imgur.com/RkJ5lRh.png)" alt="drawing" width="60%"/>

5. Your Sunshine Conversations channel will be successfully connected. You need to follow the below highlighted instructions to connect Yellow.ai on Zendesk Admin Centre.

     <img src="https://i.imgur.com/SMllyqd.png)" alt="drawing" width="60%"/>
	 
6. Navigate to the **Overview** page, under the **Active channels** section, you can see that the Sunshine Conversations channel is successfully connected to your bot.

      ![](https://i.imgur.com/wVErgLe.png)	 
	 
### Connect Yellow.ai on Zendesk Admin Centre

To connect Yellow.ai on Zendesk Admin Centre, follow these steps:

1. After connecting your bot to Sunshine Conversations, navigate to the Zendesk dashboard and click **Settings**.

     ![](https://i.imgur.com/NBk1aK4.png)
	 
2. Click **Go to Admin Center**.

    ![](https://i.imgur.com/PchQLDV.png) 
	
3. Select **Channels > Bots > Manage bots**.

    ![](https://i.imgur.com/jGEbMmB.png)
	
4. Under *Marketplace bots*, the Yellow bot will be displayed, click **Connect**.

     ![](https://i.imgur.com/dKxcwlU.png)

## Test your bot on Sunshine conversation

After connecting your bot to the Sunshine conversation, you can test your bot. 
     
#### Prerequisite

* Ensure that you have created the bot with intents and configured the flows with the same intent. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/create-a-bot). 


To test your bot on the Sunshine conversations, follow these steps:

1. Go to the Facebook page that you have created and trigger the flow that you have created to test the bot. 

     ![](https://i.imgur.com/qTi9442.png)

2. If a flow is configured for agent reply using the [raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) node to create a conversation with a Zendesk agent, then the agent will accept the invite. Once a conversation is initiated, the user can talk to the agent from the Zendesk workspace. Once the conversation between the agent and user ends, the bot takes the conversation forward with the user.

      ![](https://i.imgur.com/Akqa8K7.png)
	  
3. The agent will respond to your queries.

     ![](https://i.imgur.com/3yKepAp.png)   






