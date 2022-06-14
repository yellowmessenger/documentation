---
title: Chats Configuration
sidebar_label : Chats Configuration
---


Chat configurations define the functionality that is available to your agents and support them. Create configurations to give different capabilities to multiple types of users. Chat configurations enable you to control your users’ access to certain Chat features. You can create multiple configurations and assign them to different types of users.


1. From [yellow.ai](https://cloud.yellow.ai/bot/Bot_ID/overview), select Inbox

![](https://i.imgur.com/tGxzwi4.png)

2. Click on Settings

![](https://i.imgur.com/hec2r3b.png)

3. From the drop down, select Chats configuration



### Tags


Tags are labels that you assign to conversations after the end or during the chat sessions and one of the best ways to organize conversations and for quicker follow-ups. They are typically used to categorize and organize all customer communication and to escalate it to the right team for further actions fast and effectively.

Tagging your chats helps you search or filter your chat menu and makes it easier to analyze the chat traffic.


![](https://i.imgur.com/39vPpD6.png)


#### Learn how to use tags

Tags are great for both admins and agents. Admins can obtain an overview of chat conversation topics by viewing the 10 most popular tags in a week. Agents can easily tag chats either automatically using Shortcuts, or manually by selecting tags from a predefined list.


To create a new tag:

1. Login to your bot and go to <b>Inbox</b> -> Settings -> <b>Chats configuration</b>

2. Enter a name for the tag. 

3. Save it, by clicking on <b><i>Add</i></b>.



You can select from a list of existing tags and also edit this list by adding and removing tags any time you need.


Tags can be created based for a particular group only. Only issues belonging to that group will see these tags. It’s quite handy as agents only see tags relevant to them, and don’t need to go through a never-ending list to find the correct one.



### Chats timeout


When the chat system is online, users or agents who click to chat are entered into a queue until an agent accepts the chat request. The conversation starts between the agent and the user once the request is accepted. After a set period of inactivity between the agent and the user the chat session will “timeout.” 


:::info
:information_source: This setting is used to inactive the ticket / message, if user doesn’t reply in the given amount of time.
:::


![](https://i.imgur.com/EpS2it9.png)


The following are some key features of the chat timeouts which can be customized for different channels as well: 

- Inactivity from customer
- Inactivity from agent
- Auto ticket closure
- Do not close ticket



| Setting | Description |
|:-------- |:--------:|
| Inactivity from customer | This is a built-in setting to automatically timeout a customer if he is inactive for a while. You can check the box and set the duration in minutes).   |
| Inactivity from Agent    | This is a built-in mechanism to automatically timeout an agent if he is inactive for a while. You can check the box and set the duration in minutes). |
| Auto Ticket closure | Checking this box will automatically close the ticket. The default setting will be used if the chat is disabled, deleted or if their is no information from both the sources. |
| Do not close Ticket | This box can be set based on the tags present in the chat. A set of customised tags are available which you can choose from. |


:::info
:information_source: You can also add different channels like WhatsApp, Slack etc and apply the above settings.
:::

![](https://i.imgur.com/bhXIeZT.png)


### Custom Fields


The custom fields setting is used to define and add fields that are required to create, transfer or close tickets.


![](https://i.imgur.com/TVzPBUv.png)


### CSAT Feedback

This setting helps you to measure how happy your customers are with your agents and your service.

User feedbacks can be found at the Data Explorer section of the Insights module.

![](https://i.imgur.com/JblqV5v.png)


:::info
:information_source: Enable default feedback - This default feedback will work only on your website chatbot. For other channels like WhatsApp, Facebook, etc., you can create flows in Studio.
:::