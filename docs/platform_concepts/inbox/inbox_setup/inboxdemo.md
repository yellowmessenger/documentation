---
title: Try the live agent module
sidebar_label : Inbox demo
---



While conversing with the bot, if the user prefers chatting with a live agent, humans can take over to provide a better customer experience.
To do this, the bot should transfer the user’s chat to a live agent and this is achieved by using the Inbox module and [raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#17-raise-ticket) action node.
1. **Studio** flow must be configured:
    - To identify when a bot user prefers talking with a live agent. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) to know more about **flows and NLU**.
    - To create a ticket when the intent to *chat with an agent* is identified. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) to understand the **Raise ticket** action node and its settings.

2. **Inbox** must be configured:
    - To receive tickets. 
    - To allow agents to converse with the bot users by providing [Inbox agent access](#provideaccess)

-----

## <a name="try1"></a> 1. Create a flow to raise a support ticket 

To configure **Raise ticket** node on the [Studio](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys)'s flow page, follow the steps below: 

1. Create an [Intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents) and add [utterances](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#24-add-utterance) to identify the flow that connects a user to a live inbox agent. 
    - Utterance examples, “Can I talk to a Live agent?”, and “Connect me to Customer Support”.
2. Add [prompts](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) to collect information(name and query) from the users. Store the details in the respective [variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#hed-2). 
3. Connect the flow to **Raise ticket action node** (pass the collected information). Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) to learn about the action node. 
4. Advanced options can be enabled and optional fields can be entered. 


![](https://i.imgur.com/ZXdujQO.png)


---------

## <a name="try2"></a> 2. Demo of ticket creation on Inbox

> To test the live agent transfer, you need to have Inbox agent access.

Once you have created the live agent flow, follow these steps to test how tickets get created and get assigned to inbox agents:

1. Duplicate the tab or open the bot in another window (you will have two tabs opened).
2. In one of the tabs open **Inbox**.
3. Inside **Inbox**, open **Chats** > **My chats**.


:::note
Make sure you are **Available**. 
To check that click on the profile icon on the right corner, and verify the status drop-down. 

<img src="https://i.imgur.com/I7XrOLT.png" alt="drawing" width="70%"/>    
:::

4. Go to the previous tab or window where the bot was opened and raise a ticket. After the ticket is raised, the name of the agent connected will be displayed.

<img src="https://i.imgur.com/Qv7fbgh.png" alt="drawing" width="90%"/>    



5. On the tab in which the inbox is opened, you will see a ticket raised (it will be displayed as a message on Chat/Tickets page).

![](https://i.imgur.com/khxffRF.jpg)

6. You can reply from your chat screen. This is a real-time conversation on the bot.

![](https://i.imgur.com/LEdGd40.png)


7. You can close the chat (and click **Resolve** to [resolve the ticket](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatscreen/#3-resolve-or-transfer-tickets)) and test the message displayed after the chat has ended with the live agent. 

<img src="https://i.imgur.com/Gld3MHU.png" alt="drawing" width="50%"/>    


