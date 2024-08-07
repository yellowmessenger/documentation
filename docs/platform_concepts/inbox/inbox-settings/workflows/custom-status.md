---
title: Create & modify custom status for inbox agents
sidebar_label : Chat agent custom status
---

  

:::note

Only Inbox admins can create and modify custom statuses.

:::

  

In this article, you will learn:

1. [How to add custom status?](#add)
2. [How to modify/delete custom status?](#modify)
3. [How to view this data in reports?](#report)


-------

## 1. Default status vs. custom status

### Default agent status

**Available**, **Busy** and **Away** are the [default statuses](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/agentstatuses) that are present by default. These statuses cannot be modified/deleted.

![](https://i.imgur.com/SjzhsdB.png)


### Purpose of custom agent status

On the custom status settings, admins can create a custom status for the agents to suit the business operations to accommodate live chat requests.
- With this, agents can set their status depending on this availability (from available to busy or other options).
- Customizing the status also helps to provide visibility into what agents are doing on a day-to-day basis.
- Admins can decide the statuses that are beneficial for the agents to effectively handle chats.

### Use cases of custom agent status

1. If the agent has decides go for lunch, 1-1.30 PM can be set as **Lunch** (custom status) by the agent so that the incoming tickets don't get auto assigned within those 30 minutes. Also, admins can know that the agent has taken 30min lunch. 
2. If the agent is attending a meeting, status can be set to **Internal meeting** (custom status). Tickets won't be assigned to the agents and admin can track the time spent by that agent attending meetings. 

----

## <a name="add"></a> 2. Add custom status

You can create a custom status and map it to a default status(Away/Busy). With this, the admins can track why (reason like Lunch, documentation, etc.) the agents were Away/Busy. Follow the given steps to add/modify/delete custom status:

1. Open **Settings** > **Inbox**.
2. Search and select **Custom status**.

    ![image](https://imgur.com/ooaYSRR.png)

3. Click **+Add status**.
4. Add a new status label and select a behavior.
    - **Away**: When all your agents logout in away, by default new incoming tickets will be queued. For example: Lunch, Short breaks.
    - **Busy**: When all your agents logout in busy, by default new incoming tickets will be missed. For example: Feedbacks, Documentation. To view these tickets, agents must open the Missed chats tab on the chat screen. 

    ![](https://i.imgur.com/f5UsCZI.png)

:::note
The above logic of chats moving to Queue/Missed will be applicable if **All** the agents are not available.     
If there is any agent from the team whose status is Available, the incoming chat will be assigned to them. 
:::

5. Click **Add**.
6. The custom status will be visible along with the default agent status.

    <img src="https://i.imgur.com/TwbGuGz.png" alt="drawing" width="60%"/>

  

### <a name="modify"></a> 2.1 Edit/Delete custom status

1. Open **Inbox** > **Settings**. Search and select **Custom status**.
2. Click the 3 dots (menu icon).
3. Select **Edit**/**Delete**.

    ![](https://i.imgur.com/wyivIJJ.png)

4. Confirm the action.

----

## <a name="report"></a> 3. Monitor agents custom status

Supervisors and Admins download reports and monitor the time in which Agent had set status to a custom status. 

#### Monitor custom status in reports

1. Open **Analytics > Reports**. 
2. Select [Chat](https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports/chats/chat-agent-performance-report)/[Email](https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports/tickets/ticket-agent-performance-report) tab and **Agent performance report**. 
3. In the downloaded report, you can find default and custom status columns. 
    - Agent Online Duration (hh:mm:ss)	The total time the agent has set the status to AVAILABLE that day	
    - Agent Busy (hh:mm:ss)	The total time the agent has set the status to BUSY that day	
    - Agent Away (hh:mm:ss)	The total time the agent has set the status to AWAY that day	
    - Agent Lunch (hh:mm:ss) The total time the agent has set the status to Lunch that day (Custom status)

#### Monitor custom status on the inbox monitor page

1. Open **Monitor > Team**. 
2. **Custom status** column will be available under Agents. 
    ![](https://i.imgur.com/llwTb7H.png)
