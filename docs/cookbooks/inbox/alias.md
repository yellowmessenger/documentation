---
title : Alias name for agents 
sidebar_label : Alias name for agents 
---


> The Alias name feature is available for enterprise customers only.

Maintaining confidentiality is crucial in chat conversations. To ensure privacy, you can display an alias name instead of an agent's actual name. This feature enables you to record information in reports while remaining anonymous. For security reasons, the system will store the agent's real name, but only the alias name will be visible on the widget. If you don't provide an alias name, the system will display the real name.

Here are some scenarios where you can use this feature:

## 1. Add an alias name to be displayed on the chat widget

> Only **Inbox admins** can modify agent details. 
> 
When customers connect with an agent, the alias name will appear on the chat screen.



1. Open **Inbox** > **Settings** > **Team** > **Agents**.
2. Select the agent you want to assign an alias name to.
3. Enter **Alias name** and click **Update**. 
    ![](https://i.imgur.com/fLh9Xeh.png)

The **widget** and **preview** screens will show the alias name when available: 

<img src="https://i.imgur.com/jkWdsxl.png" alt="drawing" width="50%"/>

<img src="https://i.imgur.com/3HgQFWP.png" alt="drawing" width="40%"/>

----

## 2. Display alias name in the chat when the agent is connected

> This feature is available to **Bot developers** with access to create studio flows, provided that the **Inbox admin** has configured the alias names.. 

You can customize the message with alias name and display it to the bot user after they are connected to an agent. 

1. Go to **Studio** and open the flow where agent support is [configured](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/inboxdemo). 
2. In the [Raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) node, manually enter the required message and variables in the **Message after ticket assignment** field. 
    ![](https://i.imgur.com/2vuX8m0.png)
    :::info
    You can use the `{{agentAliasName}}` variable to display the alias name. It will only be available if the agent's alias name is configured on the [agent settings](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents) page.
    :::


## 3. Access alias name through canned response on chats/tickets

> **Inbox admins** can create canned responses that **Inbox agents** can use while conversing with customers via live chat or email.

**For Inbox admins:**  
1. Refer to [this](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/canned-responses) procedure to create canned response. 
2. Add a tag and use `{{agent.aliasname}}` in the response. 
    ![](https://i.imgur.com/9CogAuS.png)

**For Inbox agents:**

On the chat/email screen, enter # followed by the tag to select the alias name that can be sent to the customer.

![](https://i.imgur.com/1lQiJrq.png)
