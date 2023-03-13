---
title: Agent settings
sidebar_label : Agents
---


After a user is provided with [inbox agent access](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/supportagents), you can define the properties (display picture/name, languages, concurrency, etc.) and the scope of the agent's work on the **Agent Settings** page.
Further, you can classify the type of requests (live chat/email ticket) that these agent can receive on [Group settings](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups). 


In this article, you will learn:

1. [To configure agent settings](#1)
    - Modify agent properties 
    - Modify concurrency in bulk
2. [To configure agent UI settings](#2)


## <a name="1"></a> 1. Agent settings 

Follow the given steps to configure agent settings:

1. Open **Inbox** > **Settings** > **Team**.
2. Search and select **Agents**.

![](https://i.imgur.com/ysUDmWk.jpg)

3. Details of all the users with **Inbox agent** access will be on this page. 

![](https://i.imgur.com/RSCMFjm.jpg)

> You can search for a particular agent by typing the name in the search bar. 
> 
> ![](https://i.imgur.com/fhKL8VN.png)



### 1.1 Edit/Modify existing agent properties

- To change the basic properties of an agent, click on the edit icon. 
    - **Name** and **Description**: You can define the agent **Name** and **Description**, which will be visible to the end customer when they are interacting with the inbox agent. Description can be set as per the industry, example: Customer support agent, Live chat, Client help specialist, Customer representative, etc. 

    ![](https://i.imgur.com/amJZAJi.jpg)

    - **Display picture**: Add an image by clicking on **Upload photo**. When the agent is assigned to a customer, the avatar, name and description mentioned in the agent settings will be visible to the customer. 
    
    <img src="https://i.imgur.com/D3HIVip.png" alt="drawing" width="50%"/>

    -  **Concurrency**: You can define the **Concurrency** for live chat and email tickets according to the business workflow. The maximum standard value for live chat concurrency is 6-10 and email concurrency is 20.
 
    :::info
    **Concurrency** is the maximum number of tickets that an agent can handle at any point in time. For example, if concurrency is set to 20, an agent will not be able to handle more than 20 tickets at once.
    :::

    - **Default language**: You can set the **Default language** for an agent. Default language determines the language in which the agent is expected to send messages to the customer and help resolve queries. 
    
    :::note
    By default, most of the conversations will be in English. If the agent has set any other language (for example French) the bot uses [auto translation](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/automation/chat_auto_translate). 
    :::
    - **Available for call**: This determines the ability of the agents to engage in [video calls](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/videocall). This checkbox must be selected so that the live agent can take video calls or request a video call with the customers.  


### 1.2 Edit/ Modify concurrency in bulk

- To modify the concurrency of multiple agents at once:
    1. Select the required agent names
    2. Click **Bulk edit**
    3. Change the concurrency
    4. Click **Update**.

![](https://i.imgur.com/fZUJLbm.png)

 ----

## <a name="2"></a> 2. Configure agent UI settings

Admin can provide (enable/disable) special permissions for agents interface by clicking the **+Configure agent UI** button.

![](https://i.imgur.com/hTf4t2P.png)

    
On the left, there is a list of all the agent names and on the right, there is a checklist of special abilities.

![](https://i.imgur.com/iqgjng1.jpg)

By default, all these fields are checked (available to the agents). If you want to disable any of these, you can de-select the box next to the required field. The unchecked fields next to the agent names will not be available for the agent. 


| Field | Description |
| -------- | -------- |
|Ticket report download visibility     |   |
|Enable Attachments|If this field is de-selected, it will not allow agents to send any unwanted attachments that you as a company strives to support|
|Public chat URL visibility| Every live chat has a chat transcript associated with it, if you disable this for a particular agent, they will not be able to access it or share it with their internal colleagues (Copy icon will not be available on the chat screen).|
|Chat transcript download visibility| If this field is de-selected, the agent will not be able to download the chat transcript (Download icon will not be available on the chat screen). |
|User activity visibility| For web bots, User activity tab on the chat screen displays the URLs that the bot user has visited on the website before getting connected to the live agent. If this field is de-selected, the user activity is not displayed to the agent. |
|User location visibility| Based on the IP address, approximate location of the bot user is tracked. If this field is de-selected, agent will not be able to see the bot user's location. |
|Enable Emoji| If this field is de-selected, the agent will not be able to send emojis in the chat.|
|Ability to pause/unpause bot|The toggle in Basic details on the chat screen displays if the bot is paused/running. When the live agent is connected, bot is paused (only the agent will be able to respond to the user and the bot will not be able to interfer in the conversation). If the bot user is asking questions that are configured in the bot, the agent can select toggle (to running) and allow the bot to answer the queries. If this field is de-selected, the toggle will not be visible to the agent. |
|Allow agent to view attachments sent by bot| The agent will be able to view the previous interaction between a bot and the customer (including the files/images) that took place before connecting to the live agent. If this field is de-selected, the agent will not be able to see the attachments in the previous chat(only text messages will be displayed).   |
|Show WhatsApp phone number of the user|Details of WhatsApp bots such as phone numbers are tracked. If this field is disabled, the WhatsApp number of the bot user will not be visible to the agent.  |
|Allow to edit contact| Customer details passed through raise ticket nodes can be modified on the chat screen. If this field is de-selected, agents cannot edit/update bot user contacts. |

**Bulk update**

- UI settings can be updated for multiple agents by selecting the respective agents and clicking **Update**. 
    > Previously configured data for the agents will be over-ridden by the new values. 

![](https://i.imgur.com/f4z2xgy.jpg)






