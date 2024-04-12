---
title : Sunshine Conversations
sidebar_label : Sunshine Conversations
---

Sunshine Conversations is a messaging platform that allows businesses to interact with their customers across the various messaging apps such as Facebook Messenger, WhatsApp, Instagram, and SMS. The Sunshine Conversations bot allows you to send text, images, files, cards, and quick replies.

For instance, if a business has integrated Sunshine conversations with Facebook, it creates a Sunshine conversations channel for Facebook. Businesses can use this channel to communicate with their customers via WhatsApp to send and receive messages. Similarly, you can integrate with other messaging apps based on your business requirements.

:::info
For Yellow.ai to receive events on ending a conversation, follow one of these:

1. The chat agent can send this ```%((switchboard:passControl))%``` in the conversation.
2. Contact Zendesk Admin and ask them to configure ```%((switchboard:passControl))%``` in the workflow.
:::

##### Limitations

* **Supported message types**: Only text messages and specific rich cards are supported within the Zendesk integration.
* **Conversation Logs**: Conversation logs will exclusively contain messages exchanged between users and the bot. Messages between users and live agents will not be available in the logs.
Note that these limitations pertain to the current functionality of the Yellow.ai integration with Zendesk.

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

### Connect your messaging channels to Zendesk web messenger

The Sunshine web messenger app allows you to connect the messaging channels to interact with your users from your web page.

To connect your messaging channels to the Zendesk web messenger, follow these steps:

1. Enter the name of this integration so that you can easily find it in your Sunshine Conversations app.

2. Choose your preferred method script or NPM to include the Sunshine Conversations plugin on your web page.

   <img src="https://i.imgur.com/zanN1QL.png)" alt="drawing" width="60%"/>

3. Add the Sunshine Conversations plugin to your web page. Add the following code at the end of the `<head>` section on your page:
    
```
<script>
    !function(o,p,s,e,c){
        var i,a,h,u=[],d=[];function t(){var t="You must provide a supported major version.";try{if(!c)throw new Error(t);var e,n="https://cdn.smooch.io/",r="smooch";if((e="string"==typeof this.response?JSON.parse(this.response):this.response).url){var o=p.getElementsByTagName("script")[0],s=p.createElement("script");s.async=!0;var i=c.match(/([0-9]+).?([0-9]+)?.?([0-9]+)?/),a=i&&i[1];if(i&&i[3])s.src=n+r+"."+c+".min.js";else{if(!(4<=a&&e["v"+a]))throw new Error(t);s.src=e["v"+a]}o.parentNode.insertBefore(s,o)}}catch(e){e.message===t&&console.error(e)}}o[s]={init:function(){i=arguments;var t={then:function(e){return d.push({type:"t",next:e}),t},catch:function(e){return d.push({type:"c",next:e}),t}};return t},on:function(){u.push(arguments)},render:function(){a=arguments},destroy:function(){h=arguments}},o.__onWebMessengerHostReady__=function(e){if(delete o.__onWebMessengerHostReady__,o[s]=e,i)for(var t=e.init.apply(e,i),n=0;n<d.length;n++){var r=d[n];t="t"===r.type?t.then(r.next):t.catch(r.next)}a&&e.render.apply(e,a),h&&e.destroy.apply(e,h);for(n=0;n<u.length;n++)e.on.apply(e,u[n])};var n=new XMLHttpRequest;n.addEventListener("load",t),n.open("GET","https://"+e+".webloader.smooch.io/",!0),n.responseType="json",n.send()
    }(window,document,"Smooch","62274004515b2600ef7b3a07","5");
</script>
``` 
    
4. Initialize Sunshine Conversations with your Integration ID. Once Sunshine Conversations has been added to your webpage, you need to initialize the Web Messenger using the below code snippet:
    
```
<script>
Smooch.init({ integrationId: '62274004515b2600ef7b3a07' });
</script>
```    
:::note
* You need to place the above code snippet at the end of the `<body>` section for better performance.
:::  

5. Verify that your integration is successfully working as intended.    
   
## Configure Switchboard on Zendesk admin portal

You need to configure Switchboard to handle the conversation between Zendesk and your bot. The switchboard enables you to programmatically route a user’s conversation through third party systems such as bot frameworks and helpdesk systems. For more information on how to configure Switchboard, click [here](https://docs.smooch.io/rest/#tag/Switchboard-Integrations).

## Connect Sunshine conversation channel to your bot

To connect Sunshine conversations to your bot on the platform, follow these steps:

1. On the left navigation bar, click **Extensions** > **Chat widget**.

   ![](https://imgur.com/ww7i94O.png)

2. Navigate to **Widget panel**, under *Bot avatar*, click **Add** icon and set the logo for the bot.

   <img src="https://imgur.com/Ut1zHjM.png" alt="drawing" width="60%"/>

:::note
* To ensure a seamless integration with Zendesk Sunshine, it is mandatory to update the bot icon.
* It is recommended to upload images with a size of 150 x 150 pixels. 
:::  

4. Go to **Channels** > **Additional** > **Sunshine Conversations**.

   ![](https://imgur.com/orI1sB6.png)

5. Click **Connect to Sunshine Conversation**.

   ![](https://i.imgur.com/f5xixtY.png)

6. Enter your Zendesk subdomain ID that you received while creating a Zendesk account and click **Sign in**.

    <img src="https://i.imgur.com/x4Yidtp.png)" alt="drawing" width="60%"/>
	
7. Click **Allow** to access your Zendesk account.

     <img src="https://i.imgur.com/RkJ5lRh.png)" alt="drawing" width="60%"/>

8. Your Sunshine Conversations channel will be successfully connected. You need to follow the below highlighted instructions to connect Yellow.ai on Zendesk Admin Centre.

     <img src="https://i.imgur.com/SMllyqd.png)" alt="drawing" width="60%"/>
	 
9. Navigate to the **Overview** page, under the **Active channels** section, you can see that the Sunshine Conversations channel is successfully connected to your bot.

    ![](https://imgur.com/0bos19f.png)	 
	 
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

2. If a flow is configured for agent reply using the [raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) node to create a conversation with a Zendesk agent, then the agent will accept the invite. Once a conversation is initiated, the user can talk to the agent from the Zendesk workspace. When the conversation between the agent and user ends, the bot takes the conversation forward with the user.

      ![](https://i.imgur.com/Akqa8K7.png)
	  
3. The agent will respond to your queries.

     ![](https://i.imgur.com/3yKepAp.png)   


## Enable Yellow's widget on Sunshine

The Sunshine supports Yellow's widget to enable users to interact with the bot and seamlessly connect with a live agent.

**Key features:**

* **Automated response**: The Yellow widget supports automated responses to user queries.
* **Live agent support**: Users can engage with live agents via Zendesk if the bot cannot address their queries.

### Connect bot users to live agents on Zendesk

To connect to a live agnet on Zendesk, follow these steps:

1. Go to Studio and [build a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) based on how you want the bot to take the user through the process.

2. Configure a flow using the [raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) node to connect with a Zendesk agent.

    ![](https://imgur.com/oURnE8E.png)
    
3. Trigger the flow to initiate conversation with a live agent.

     <img src="https://i.imgur.com/gj5AHt8.png" alt="drawing" width="40%"/>

4. A ticket will be raised on Zendesk, and an agent will **Accept** the invite to start conversation.

   ![](https://i.imgur.com/Akqa8K7.png)
	  
5. The agent will respond to your queries on Zendesk.

     ![](https://i.imgur.com/3yKepAp.png) 

* When the conversation between the agent and user ends, the bot takes the conversation forward with the user.     


## FAQs

<details>
<summary>Is it possible to create forms on the Sunshine conversation widget for email address and name?</summary>
<div>
 <br/>
 <div>You will first need to reach out to the <a href="mailto:support@yellow.ai">Integrations</a> team and enable form creation on the Sunshine Conversation widget. Then, use the Sunshine Conversations post-message API to create forms
</div>
  </div>
</details>

<details>
<summary>Can we use channel filter to add flows for WhatsApp and other channels connected on Sunshine Conversation channel from the builder?</summary>
<div>
 <br/>
 <div>No, you cannot use the channel filter in this scenario, as the Sunshine Conversation itself serves as the channel for communication.
</div>
  </div>
</details>

<details>
<summary>Will the bot respond to the user on WhatsApp connected to the Sunshine Conversation channel?</summary>
<div>
 <br/>
 <div>
Yes, you can respond to messages using Sunshine-supported message types for the messages received on any of the channels supported on the Sunshine platform. However, when messages are received on the Sunshine Conversation platform, there is no specific information available about the end user's channel. Note that you cannot track in which channel the messages will be delivered.
</div>
  </div>
</details>


