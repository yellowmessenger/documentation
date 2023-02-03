---
title: Try the live agent module
sidebar_label : Try inbox demo
---

While trained flows on yellow.ai bots provide exceptional customer experience, sometimes, customers prefer human interactions. The inbox module is designed to provide bot users with technical customer assistance by helping them resolve any issues they have with the products or services. Inbox Agents are appointed to provide solutions to customer queries, this process is also familiar among industries that choose to promote products, create promotions and provide positive customer experiences.

When the customer opts to switch from bot interaction to human interaction, with Inbox, they are connected to the Live agents (who are available to accept live chats). 

In this article, you will learn:
1. Basic steps required to get started with Inbox. 
2. Simple demo of raising a live chat request (as a customer) and addressing it (as an agent).

:::note
- This article discusses the creation of [live chat requests](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat) that are received by the Inbox agent for live resolution. This is a simplified demo.     
- Email tickets are configured using different [steps](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/tickets_intro).
:::

-----

To get started with *Live agent transfer*, you must configure **Studio** with [raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#17-raise-ticket) action node and **Inbox**. 


1. **Studio** must be configured:
    - With a [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) that can be imported from marketplace or created from scratch to identify *chat with an agent* intent and raise a live chat request to Inbox.
  
2. **Inbox** must be configured:
    - To receive tickets. 
    - To allow agents to converse with the bot users by providing [Inbox agent access](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/supportagents)

-----

## 1. Try Inbox demo 

> On your web browser, open 2 different tabs (Studio module and Inbox module)


### Tab 1: Import/create a flow and raise a support request 



To import the **Connect with support** template from the **Marketplace**, follow the below steps: 

1. Click **Create flow** from Studio. See [steps](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow) here.

    ![](https://i.imgur.com/fBwX5fx.png)

2. Search for [Support templates](https://cloud.yellow.ai/marketplace?name=support)(prebuilt marketplace flows). Add the most suited flow to your bot. 

    ![](https://i.imgur.com/aFNSjUa.png)


> Refer to [this](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/marketplaceintro#-1-choose-a-right-marketplace-template) guide to work with **Marketplace** templates. 

:::info
To create a support flow from scratch on [Studio](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys), follow the steps below: 

1. Create an [Intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents) and add [utterances](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#24-add-utterance) to identify the flow that connects a user to a live inbox agent. 
    - Utterance examples, “Can I talk to a Live agent?”, and “Connect me to Customer Support”.
2. Add [prompts](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) to collect information(name and query) from the users. Store the collected details in the respective [variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#-4-store-and-access-variables-via-nodes). 
3. Connect the flow to **Raise ticket action node** (pass the collected information). Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) to learn about the action node. 
4. Advanced options can be enabled and optional fields can be entered. 
    ![](https://i.imgur.com/ZXdujQO.png)
:::


3. After the flow is created (either **From scratch** or **Marketplace**), test it on the demo bot space by raising a live chat request. That is, enter a message in the input bar to *connect to an agent*, and provide details. 

    ![](https://i.imgur.com/5ozZv9r.png)


4. If the live chat request is raised successfully and the Inbox agent has received the chat (explained in the next section), the name of the agent connected will be displayed.

    <img src="https://i.imgur.com/6HzAMVf.png" alt="drawing" width="40%"/>    

> You will not be able to raise another live chat request until the current live chat is resolved. 


---------

### Tab 2: Ticket creation and assignment on the Inbox chat screen 

:::note
- To test the live agent transfer, you must have **[Inbox agent](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/supportagents) access**.
- You (inbox agent) must be **Available**. 
:::


Once you have created the live agent flow, follow these steps to test how tickets get created and get assigned to inbox agents:

1. Open **Inbox** > **Chats** > **My chats**.
2. As only you will be the only available Inbox agent to your bot, the live chat will be assigned to you. Make sure you are **Available**. To check your status, click on the profile icon on the right corner, and verify the status drop-down. 

    <img src="https://i.imgur.com/I7XrOLT.png" alt="drawing" width="70%"/>    
3. You will see a live chat raised. It will be displayed as a message on **My chat** page.

    ![](https://i.imgur.com/khxffRF.jpg)
4. You can reply to that message from your live chat screen. This is a real-time conversation on the bot.

    ![](https://i.imgur.com/LEdGd40.png)
5. You can close the live chat (and click **Resolve** to [resolve the live chat](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatscreen/#3-resolve-or-transfer-tickets)) and test the message displayed on *Tab 1* after the live chat has ended with the agent. 

    <img src="https://i.imgur.com/Gld3MHU.png" alt="drawing" width="50%"/>    


