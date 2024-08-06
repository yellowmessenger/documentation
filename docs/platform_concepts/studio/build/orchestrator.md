---
title: Orchestrator bot
sidebar_label : Create Orchestrator bot
---

The Orchestrator bot enables you to manage and coordinate multiple bots or conversational flows within a single parent bot. It acts as a controller, guiding users to the appropriate bot or flow based on their queries or context.

The Orchestrator bot allows creating a parent bot and adding multiple child bots under the same subscription and region.

Key features of Orchestrator bot:

* **Centralized management**: Orchestrator bot provides a single platform to manage multiple child bots or conversational flows.
* **Modularity**: Facilitates independent development of child bots by separate teams, promoting flexibility in bot development.
* **Automation**:  It facilitates the automated handling of various use cases such as answering common queries, collecting information from users, and initiating predefined actions without human involvement.

#### Usecases

Following are the use cases of Orchestrator bot:

1. **Unified communication for large organizations**: Large organizations often need a central bot (parent bot) through which users can communicate with various child bots based on their needs. For example, an organization with multiple departments can have separate child bots for each department. The orchestrator bot understands user queries and directs them to the appropriate child bot.
2. **Centralized customer support**: When organizations have a live agent team for resolving customer queries, they need a central system to manage and address user needs. For instance, in a customer support scenario, the orchestrator bot can route users to a sales bot if they are interested in purchasing a product or to a technical support bot if they are facing issues with a product.


## Create an orchestrator bot

**Watch the video on how to configure the orchestrator bot:**

<iframe width="720" height="315" src="https://www.youtube.com/embed/LKnYlHE1MxQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
<br/>

To create an orchestrator bot, follow these steps:

1. Go to the **Overview** page > **click** the bot drop-down > + **Create bot**.

   ![](https://imgur.com/LNiEUYy.png)

2. Click **+ Create orchestrator**. 

    ![](https://imgur.com/VkE6SCw.png)

3. Define the bot using the following options:

   <img src="https://imgur.com/fT08eon.png" alt="drawing" width="50%"/>
   

| Field Name | Description | 
| -------- | -------- | 
| Bot subscription | Choose the subscription under which you want to create your bot |
|Bot name| Provide a name for your bot |
|Choose avatar| Choose an animated avatar for your bot |
| Industry | Choose the industry to which you belong |
| Region | Choose the country to which your bot belongs |
| Select child bots | Choose the child bots you like to manage under the orchestrator bot |

4. If you want to manage support tickets from all child bots in your orchestrator bot (parent bot), enable **Unify inbox for all child bots** option. 

:::note
Once the option is enabled, you cannot disable it later.
:::

5. Click **Create orchestrator**.

* Once the bot is created, you will be redirected to the **Overview** page of the parent bot. 

   ![](https://imgur.com/94oJymf.png)
<br/>   

### Manage Orchestrator bot

You can perform the following actions on an Orchestrator bot:

* [Configure Welcome and Fallback messages](#configure-welcome-and-fallback-messages)
* [Add child bots](#add-child-bots)
* [Set a child bot as default](#set-a-child-bot-as-a-default-flow)
* [Delete child bots](#delete-child-bots)

#### Configure Welcome and Fallback messages

To configure Welcome and Fallback messages, follow these steps:

1. Go to the parent bot that you have created under **Quick links**, click **Orchestrator for automation**. 

    <img src="https://imgur.com/3ZEezfJ.png" alt="drawing" width="80%"/>
     
2. Under Configuration, click on the respective **Edit** option for which you want to modify the welcome or fallback message.

   ![](https://imgur.com/yAMOOlH.png)
   
3. Enter the **Welcome message** that you want to see when you open the bot and the **Fallabck message** when bot cannot understand the user utterance or cannot suggest relevant flows.

    <img src="https://imgur.com/Gu9plfa.png" alt="drawing" width="80%"/>


#### Add child bots

You can add multiple child bots under a single parent bot, as mentioned below:

1. Go to the parent bot that you have created under **Quick links**, click **Orchestrator for automation**.  

    <img src="https://imgur.com/3ZEezfJ.png" alt="drawing" width="90%"/>

2. Click **+Add child bot**.

    ![](https://imgur.com/arojypM.png)
    
3. In **Select child bots**, choose the bots that you want to associate with the parent bot and click **Save**. The bot subscription will be selected by default, and you cannot edit it.

    ![](https://imgur.com/EUy6l59.png) 
    
* This will add child bot(s) under the parent bot.
  
    ![](https://imgur.com/x9RrvD5.png)    

#### Set a child bot as a default flow

When you set any child bot as the default flow, the orchestrator bot will automatically trigger the default child bot when it loads on the website. At a time, only one child bot can be marked as the default.

To set a child bot as a default flow, follow these steps:

1. Go to the child bot, click on the **more options** icon and select **Mark as default bot**. 

   ![](https://imgur.com/seVbJYX.png)
  
* This will mark the child bot as the default bot.

    <img src="https://imgur.com/I2CyadD.png" alt="drawing" width="80%"/>
     
* To remove the default child bot, follow the above steps and select **Remove as default**.

#### Delete child bots

To delete a child bot, follow these steps:

1. Go to the child bot and click on the **more-options** icon > **Delete**. 

   ![](https://imgur.com/Wtw4z8h.png)
  
2. A confirmation message is displayed. Click **Delete**. 

      <img src="https://imgur.com/0tiZ3xd.png" alt="drawing" width="60%"/>

* This will remove the child bot from the parent bot.

### Configure Inbox for Orchestrator bot 

This is where you manage all the customer queries. By selecting the **Unify inbox to all child bots** option, support tickets received by the child bots are consolidated and made accessible in the parent bot's Inbox. This unified inbox streamlines the process of managing and responding to all customer queries.

**Watch the video on how to configure Inbox for Orchestrator bot:**

<iframe width="720" height="315" src="https://www.youtube.com/embed/dZ1zYsBXKs4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  

:::note
Unified inbox will only work for bots built on the cloud platform (that is, cloud.yellow.ai) and it does not work for the bots built on app with cloud (or vice versa).
:::

  <img src="https://imgur.com/MOVQdM3.png" alt="drawing" width="50%"/>

###  Add channels

You can [add](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview) the following channels to your orchestrator:

1. Yellow Messenger
2. Whatsapp
3. Google Assistant
4. Line
5. MS Teams
6. Viber and Viber Business
7. FB Messenger

