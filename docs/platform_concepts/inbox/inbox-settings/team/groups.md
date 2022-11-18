---
title: Groups settings
sidebar_label : Groups 
---



After the agents are added or provided with [inbox agent access](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox#21-add-support-agent-on-the-platform), they can be segregated into Groups on team Group settings.
It is essential to divide agents into groups to assign different types of tickets for different use cases. 
For example, if there are 2 categories - Group support and group escalation, agents must be divided into different groups based on the respective logic. 

Follow the given steps to add agents to different groups:

1. Open **Inbox** > **Settings**. 
2. Search and select **Groups** (from team settings).

![](https://i.imgur.com/UABe1PU.png)


:::info
**Default group**
Every single agent will belong to a default group when they are created. The default group cannot be customized via Group settings. 
:::

**Add a new group**

3. To customize a particular group (for example, to assign 5 agents to a sales group) you can add the logic to differentiate the agents on the group settings. Follow the below steps to add a new group:   
	- Click **+Add group**.  ![](https://i.imgur.com/3BJ0Nco.png)
	-  Enter a **Group name** and **Group code** (the name and code should be the same). 
	- Select a group **Email ID.** These values will get populated based on the emails created via. channels. The email ID added here will be the Group email ID that will be used specifically for **email tickets**.  When a customer sends an email to the configured email address, that query will be created as a ticket and will be assigned to the Inbox agent who handles emails. Click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/email-outbound) to learn more. 
	![](https://i.imgur.com/9RN7M6G.png)
	- **Users list** will contain the names of all the inbox agents. When you click a particular agent's name on the user list, the agent will be added to the **Group user list**.  Similarly, to remove the agent from a group, click the agent's name on the **Group user list.** 
	- Click **Add group** after making all the changes. 

:::note
Only when the Group email ID is added, that group will be dedicated to Email tickets. If the Group email ID is not added, the group agents will handle chat tickets. 
:::

**Using groups in the Raise ticket node**

4. After the groups are added here, they will be visible on the [Raise ticket node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket)- Advance options. 
	-For example, the Escalation group is selected on the Raise ticket node, and all the tickets that are triggered through this particular flow will be assigned to the Escalation group. 

![](https://i.imgur.com/Ba6S98Z.png)

:::info
- There is no limit on the number of agents that can be added to a group. 
- Group-level information can be viewed on the [Monitor section](https://docs.yellow.ai/docs/platform_concepts/inbox/monitor#3-teams). 
![](https://i.imgur.com/KHRBGMP.png)

:::

