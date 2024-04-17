---
title: Use yellow.ai's inbox live chat 
sidebar_label : Try inbox demo
---

<!--
While trained flows on yellow.ai bots provide exceptional customer experience, sometimes, customers prefer human interactions. The inbox module is designed to provide bot users with technical customer assistance by helping them resolve any issues they have with the products or services. Inbox Agents are appointed to provide solutions to customer queries, this process is also familiar among industries that choose to promote products, create promotions and provide positive customer experiences.
-->

When the customer opts to switch from bot interaction to human interaction, with Inbox, they are connected to the Live agents (who are available to accept live chats). 


To configure your bot to chat with a live agent:

1. **Studio** must be configured:
    - With a [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) to identify *chat with an agent* intent and raise a live chat request to Inbox.          
2. **Inbox** must be configured:
    - To receive and reply to chats. 
    - To allow agents to converse with the bot users by providing **Inbox agent/admin** access.    
    > Learn how to provide/receive inbox access, click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/supportagents).


:::note
- This article discusses the creation of [live chat](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat) that are received by the Inbox agent for live resolution. **This is a simplified demo**.     
- Email tickets are configured using different [steps](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/tickets_intro).
:::



**On your web browser, you can open 2 different tabs (Studio module and Inbox module)**


## Tab 1: Configure Studio flow and request for support 

:::note
You will not be able to create flows on Studio module when the bot is in **Live/Production** mode, hence, try Inbox demo in **Development** or **Sandbox/Staging** mode. 
:::

You can follow any of the given three methods to create flow on **Studio** to support **Inbox**. 
- Import support flow while creating bot (recommended).
- Use the Inbox setup option provided on the preview tab (recommended).
- Create a support flow from scratch. 
- Import support flow from **Marketplace**.

### Create a flow

#### Steps to import **Connect with support** flow while creating a bot

1. Click **Create bot** to create a new bot.
2. Enter the details and select the **Add live chat support to your bot** checkbox. Support flow will get automatically imported. 

<img src="https://imgur.com/uEGrf1l.png" alt="drawing" width="50%"/>  

#### Steps to import **Connect with support** from preview tab

1. After creating a bot, go to **Studio**. 
2. Open Preview bot tab and select **Connect to agent** (to configure Inbox flow) or **Others** (to connect to other live agent apps on Integrations).    


<img src="https://imgur.com/PnlqpRg.png" alt="drawing" width="50%"/>    


#### Steps to create **Support flow** from scratch

1. Create an [Intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents) and add [utterances](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#24-add-utterance) to identify the flow that connects a user to a live inbox agent. 
    - Utterance examples, “Can I talk to a Live agent?”, and “Connect me to Customer Support”.
2. Add [prompts](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) to collect information(name and query) from the users. Store the collected details in the respective [variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#-4-store-and-access-variables-via-nodes). 
3. Connect the flow to **Raise ticket action node** (pass the collected information). Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) to learn about the action node. 
4. Advanced options can be enabled and optional fields can be entered. 

#### Steps to import **Connect with support** template from **Marketplace**

1. Click **Create flow** from Studio. See [steps](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow) here.
2. Search for [Support templates](https://cloud.yellow.ai/marketplace?name=support)(prebuilt marketplace flows). Add the most suited flow to your bot. 

![image](https://imgur.com/iT97EQi.png)

> Refer to [this](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/marketplaceintro#-1-choose-a-right-marketplace-template) guide to work with **Marketplace** templates. 

### Raise a request for live chat 

1. After the flow is created, test it on the demo bot space by raising a live chat request. That is, enter a message in the input bar to *connect to an agent*, and provide details. 

    <img src="https://imgur.com/rzyvlP7.png" alt="drawing" width="50%"/>  

2. If the live chat request is raised successfully and the Inbox agent has received the chat (explained in the next section), agent connected message will be displayed (as configured on the raise ticket node).

    <img src="https://hackmd.io/_uploads/BkHIaTRRh.png" alt="drawing" width="50%"/>    

3. You can navigate to the Inbox screen by clicking **Go to Inbox**.

    ![](https://hackmd.io/_uploads/BJNunp0Ch.png)

:::note
You will not be able to raise another live chat request until the current live chat is resolved. 
:::

---------

## Tab 2: Live chat request and resolution on the Inbox chat screen 

:::note
- To test the live agent transfer, you must have **[Inbox agent](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/supportagents) access**.
- Your status (inbox agent) must be **Available**. 
:::

Once you have created the live agent flow, follow these steps to test how tickets get created and get assigned to inbox agents:

1. Open **Inbox** > **Chats** > **My chats**.
2. As only you will be the only available Inbox agent to your bot, the live chat will be assigned to you. Make sure you are **Available**. To check your status, click on the profile icon on the right corner, and verify the status drop-down. 

    <img src="https://i.imgur.com/I7XrOLT.png" alt="drawing" width="70%"/>    
    
3. You will see a live chat raised. It will be displayed as a message on **My chat** page(if the live chat request is successful). You can reply to that message from your live chat screen. This is a real-time conversation on the bot.

    ![image](https://imgur.com/yST6Df9.png)

4. You can close the live chat (and click **Resolve** to [resolve the live chat](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatscreen#-3-resolve-or-transfer-tickets) and test the message displayed on *Tab 1* after the live chat has ended with the agent. 

    <img src="https://hackmd.io/_uploads/BkhNyCC0h.png" alt="drawing" width="50%"/>    


