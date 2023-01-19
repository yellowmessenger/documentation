---
title: Configure chat inactivity timeout
sidebar_label : Inactivity trigger
keywords : [chat timeoff, agent inactivity status, inactivity status, no agent reply, no user reply]
---

When the chat system is online, users or agents who click to chat are entered into a queue until an agent accepts the chat request. The conversation starts between the agent and the user once the request is accepted. After a set period of inactivity between the agent and the user the chat session will “timeout.”    
This inactivity can be captured in an event ```ticket-inactive``` and the further action can be taken. This event generation can be configured in **Inactivity trigger** settings.    
It is used to inactivate the ticket/message, if user doesn’t reply in the given amount of time.   

## 1. Configure event to identify chat inactivity 


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

| Setting | Description |
|:-------- |:--------:|
| Inactivity from customer | This is a built-in setting to automatically timeout a customer if he is inactive for a while. You can check the box and set the duration in minutes.   |
| Inactivity from Agent    | This is a built-in mechanism to automatically timeout an agent if he is inactive for a while. You can check the box and set the duration in minutes. |
| Auto Ticket closure | Checking this box will automatically close the ticket. The default setting will be used if the chat is disabled, deleted or if their is no information from both the sources. |
| Do not close Ticket | This box can be set based on the tags present in the chat. A set of customised tags are available which you can choose from. You can choose not to close the ticket based on the presence or absence of a tag.|

![](https://i.imgur.com/uLBwAMk.png)

#### Add inactivity triggers for different channels

- Click **+Add channel**. 
- You can add different channels like WhatsApp, Slack etc for which the above settings can be applied.

![](https://i.imgur.com/fGl18Fz.png)

#### Delete inactivity triggers for the added channels

- To delete any channel, click the delete icon next to the channel name. 

![](https://i.imgur.com/DNCooqE.png)




### 1.1 Send a message to an inactive bot user

**Use case** 
The bot asks the user if he is still on the chat if the user has not responded for more than one minute. 

Follow the bellow steps: 

1. Configure the Inactivity trigger on the settings page by following the above steps. 
2. When inactivity is identified (after 1 minute), ``` ticket-inactive``` event is generated

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

