---
title: Groups settings
sidebar_label : Groups 
---

After the agents are added or provided with [inbox agent access](https://docs.yellow.ai/docs/platform_concepts/inbox), they can be segregated into Groups. It is essential to divide agents into groups so that there is a differenciation between
- The teams that handle live chats and email tickets
- The teams that handle different use cases. For example, if there are 2 categories of customer requests - Support and Escalation, agents must be divided into Support/Escalation groups based on the respective logic. 

In this article, you will learn to add agent groups to segregate agents based on their expertise.

:::info
**Default group**   
- Every single agent will belong to a default group when they are created. The default group cannot be customized. 
- You must create new groups and segregate the agents via Group settings, so that none of the chats/tickets are classified as default group.
:::


## <a name="1"></a> 1. Add a new agent group

Follow the given steps to add agents to different groups:

1. Open **Inbox** > **Settings**. 
2. Search and select **Groups** (from team settings).

	![](https://i.imgur.com/UABe1PU.png)

3. To customize a particular group (for example, to assign 5 agents to a sales group) you can add the logic to differentiate the agents on the group settings. Follow the below steps to add a new group:   
	- Click **+Add group**.     

		![](https://i.imgur.com/3BJ0Nco.png)
	- Enter a **Group name** and **Group code** (the name and code should be the same). 
	- Select a group **Email ID** (optional field) if your team handles email tickets.
		> Only if the [Email channel](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/email-outbound) is connected to the bot, this field will get populated. 
	- **Users list** will contain the names of all the inbox agents. When you click a particular agent's name on the user list, the agent will be added to the **Group user list**.  Similarly, to remove the agent from a group, click the agent's name on the **Group user list.** 
		> There is no limit on the number of agents that can be added to a group. 
	- Click **Add group** after making all the changes. 

		![](https://i.imgur.com/9RN7M6G.png)

---

## 2. Monitor groups

Group-level information can be viewed on the [Monitor section](https://docs.yellow.ai/docs/platform_concepts/inbox/monitor#3-teams). 

![](https://i.imgur.com/KHRBGMP.png)



