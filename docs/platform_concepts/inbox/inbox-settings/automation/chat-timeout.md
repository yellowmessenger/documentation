---
title: Configure chat inactivity timeout / Handle inactive chats 
sidebar_label : Chat inactivity trigger
keywords : [chat timeoff, agent inactivity status, inactivity status, no agent reply, no user reply]
---


**Chat inactivity**     
When a chat is assigned to an agent but neither the agent nor the customer has responded for a certain period of time, the chat is considered inactive and will eventually "timeout".     
Inbox admins can enable the inactivity trigger setting to identify these inactive chats.    
This can then be captured as an event called ```ticket-inactive``` and further actions can be taken based on this event.

#### Use case of chat inactivity trigger

The inactivity trigger setting can be useful in cases where customers do not respond to a chat, as it helps to prevent wasted time spent on manual follow-ups by agents. This can lead to increased productivity for agents.

--------

## Configure event to identify chat inactivity 


**Open inactivity trigger settings**

1. Open **Inbox** > **Settings**. 
2. Search and select **Inactivity trigger**. 
    ![](https://i.imgur.com/zw6AOj5.jpg)

**Features of inactivity triggers** 


The following are some key features of the chat timeouts which can be customized for different channels: 

- Inactivity from customer
- Inactivity from agent
- Auto ticket closure
- Do not close ticket

![](https://i.imgur.com/8tmM8h4.png)


| Setting | Description |
|:-------- |:--------:|
| Inactivity from customer | (optional) This is a built-in setting to automatically trigger a **customer inactivity** event to timeout a customer if they have not responded to the agent's (bot's) reply on the chat for a while. You can check the box and set the duration in minutes.   |
| Inactivity from Agent | (optional) This is a built-in setting to automatically trigger an event to timeout an agent if they have not responded to the customers's reply on the chat for a while. You can check the box and set the duration in minutes. <br/>The event trigger for **agent inactivity** can be enabled and then configured within **Studio** to notify the customer when the agent is under heavy workload and there might be a delay in their response.|
| Auto Ticket closure | Checking this box will automatically close the chat (when there is no activity identified within the time period entered in the Channels settings below). |
| Do not close Ticket | This box can be set based on the tags present in the chat. A set of customised tags are available which you can choose from. You can choose not to close the ticket based on the presence or absence of a tag.|

- The default value is applicable to all the channels. The period set in it will be considered for Auto Ticket closure (when it is enabled).
    ![](https://i.imgur.com/3iHR8En.png)

### Add/Delete inactivity triggers for different channels

- Click **+Add channel** and add different channels like WhatsApp, Slack etc for which the above settings can be applied.
    ![](https://i.imgur.com/fGl18Fz.png)

- Click the delete icon next to the channel name, to delete any channel.
    ![](https://i.imgur.com/DNCooqE.png)


----------

## Send a message to an inactive bot user

**Use case**    
The bot asks the user if he is still on the chat if the user has not responded for more than one minute. 

Follow the bellow steps: 

1. Configure the inactivity trigger on the settings page by following the above steps. 
2. When inactivity is identified (after 1 minute), ``` ticket-inactive``` event is generated.
    ![](https://i.imgur.com/mkNjqbX.png)
3. Open **Studio** module. Go to **Events**. 
4. Search for **ticket-inactive** in **Inbox events**. 
    ![](https://i.imgur.com/ja4aikO.png)
5. Select **Activate**. 
    ![](https://i.imgur.com/Vln2xiw.png)
6. [Create](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow) a new flow. 
7. Set [Start trigger](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow) as **Event**.
8. Select **/ticket-inactive** from the drop down.
    ![](https://i.imgur.com/DqNDhjY.png)
9. Connect the start node to any nodes to continue the flow. Connect to the [text node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text) to display "Hey! Are you still there?"

