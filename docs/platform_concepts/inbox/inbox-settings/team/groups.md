---
title: Groups settings
sidebar_label : Groups 
---

After the agents are added or provided with [inbox agent access](https://docs.yellow.ai/docs/platform_concepts/inbox), they can be segregated into Groups on team Group settings.
It is essential to divide agents into groups to assign different types of tickets for different use cases.   
For example, if there are 2 categories - Group support and group escalation, agents must be divided into different groups based on the respective logic. 

In this article, you will learn to add agent groups to segregate agents based on their expertise.


:::note
- There is no limit on the number of agents that can be added to a group. 
- Group-level information can be viewed on the [Monitor section](https://docs.yellow.ai/docs/platform_concepts/inbox/monitor#3-teams). 
![](https://i.imgur.com/KHRBGMP.png)
:::

## <a name="1"></a> 1. Add a new agent group

Follow the given steps to add agents to different groups:

1. Open **Inbox** > **Settings**. 
2. Search and select **Groups** (from team settings).

![](https://i.imgur.com/UABe1PU.png)


:::info
**Default group**
Every single agent will belong to a default group when they are created. The default group cannot be customized via Group settings. 
:::


3. To customize a particular group (for example, to assign 5 agents to a sales group) you can add the logic to differentiate the agents on the group settings. Follow the below steps to add a new group:   
	- Click **+Add group**.     ![](https://i.imgur.com/3BJ0Nco.png)
	- Enter a **Group name** and **Group code** (the name and code should be the same). 
	- Select a group **Email ID.** These values will get populated based on the emails created via. channels. The email ID added here will be the Group email ID that will be used specifically for **Email tickets**.  When a customer sends an email to the configured email address, that query will be created as a ticket and will be assigned to the selected **Group**/**Inbox agent** who handles emails. Click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/email-outbound) to learn more. 
	![](https://i.imgur.com/9RN7M6G.png)
	- **Users list** will contain the names of all the inbox agents. When you click a particular agent's name on the user list, the agent will be added to the **Group user list**.  Similarly, to remove the agent from a group, click the agent's name on the **Group user list.** 
	- Click **Add group** after making all the changes. 

:::note
If you have configured a **Group** by adding an email ID - abc@company.com, to handle email tickets, any email sent to that mail ID (abc@company.com) will convert to email ticket and be assigned to an agent of this group. (Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/tickets_intro).
If you have configured a **Group** without adding an email ID, to handle live chats, the chat requests will be assigned to the agents. (Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/inboxdemo) to understand the flow).
:::

