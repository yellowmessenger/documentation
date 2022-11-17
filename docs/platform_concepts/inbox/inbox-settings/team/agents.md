---
title: Agent settings
sidebar_label : Agents
---


After a user is provided with [inbox agent access](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/add-bot-collaborators), you must define the properties and the scope of the agent work, for example, the type of tickets that can be assigned to a specific agent. This can be done through **Inbox settings** > **Team settings** (agents and groups).

In this article, you will learn:

1. [To configure agent settings](#1)
    - Modify agent properties 
    - Modify concurrency in bulk
2. [To configure agent UI settings](#2)


## <a name="1"></a> 1. Agent settings 

Follow the given steps to configure agent settings:

1. Open **Inbox** > **Settings**.
2. Search and select **Agents** (from team settings).

![](https://i.imgur.com/ysUDmWk.jpg)

3. Details of all the users with **Inbox agent** access will be on this page. 

![](https://i.imgur.com/RSCMFjm.jpg)

> You can search for a particular agent by typing the name in the search bar. 
> 
> ![](https://i.imgur.com/fhKL8VN.png)



### 1.1 Edit/Modify existing agent properties

- To change the basic properties of an agent, click on the edit icon. 
    - You can define the **Name** and **Description**, which will be visible to the end customer when they're interacting with the inbox agent from the web.

    ![](https://i.imgur.com/amJZAJi.jpg)

    - When the agent is assigned to a customer, the name and description mentioned in the agent settings will be visible to the customer. 
    
    <img src="https://i.imgur.com/D3HIVip.png" alt="drawing" width="50%"/>

    - You can define the **Concurrency** for chart tickets and email tickets.   
 
    :::info
    **Concurrency** is the maximum number of tickets that an agent can handle at any point in time. For example, if concurrency is set to 20, an agent will not be able to handle more than 20 tickets at points.
    This is set by the businesses according to the business workflow. The standard value for live chat concurrency is 6-10 and email concurrency is 20.
    :::

    - You can set the **Default language** for an agent. Default language determines the language in which the agent is expected to send messages to the customer and help resolve queries. 
    
    :::note
    By default, most of the conversations will be in English. If the agent has set any other language (for example French) the bot uses [auto translation](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/automation/chat_auto_translate). 
    :::
    - **Available for call** determines the ability of the agents to take video calls. Unless this is enabled, this live agent will not be able to take video calls or request a video call with the customers.  


### 1.2 Edit/ Modify chat ticket concurrency in bulk

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

The unchecked fields next to the agent names will not be available for the agent. 


| Field | Description |
| -------- | -------- |
|Ticket report download visibility     |   |
|Enable Attachments|If disabled, it will not allow agents to send any unwanted attachments that you as a company strives to support|
|Public chat URL visibility| Every chat ticket has a chat transcript associated with it, if you enable this for a particular agent, they will not be able to access it or share it with their internal colleagues|
|Chat transcript download visibility||
|User activity visibility| |
|User location visibility||
|Enable Emoji| If disabled, the agent will not be able to send emojis|
|Ability to pause/unpause bot||
|Allow agent to view attachments sent by bot| If enabled, when a live chat gets connected to a live agent, the agent will be able to view the previous interaction between a bot and the customer|
|Show WhatsApp phone number of the user||
|Allow to edit contact|If disabled, agents cannot edit/update user contacts|

**Bulk update**

- UI settings can be updated for multiple agents by selecting the respective agents and clicking **Update**. 

![](https://i.imgur.com/f4z2xgy.jpg)






