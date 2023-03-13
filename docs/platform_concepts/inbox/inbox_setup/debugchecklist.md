---
title: Debug inbox error logs 
sidebar_label : Debug inbox errors 
---

In this article, you will learn how to debug the errors that are encountered while [testing](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/debug-flow) the bot for Inbox configuration (on **Studio** module).

The debugging logs provide helpful information to bot developers for every raise chat operation, such as: 
1. **Bot status**: Whether the bot is running or paused 
2. **Chat status**: Whether the chat is assigned, queued, open, or missed
3. **Chat ID**: If a chat was created, its unique number 
4. **Missed reason**: If a chat was missed, its reason
5. **Errors**: Description of the issue that occurred during the operation, like user input validation errors or incorrect information being passed.

![](https://i.imgur.com/ZKYGtgg.png)


:::note
Inbox may behave differently in Live and Development enviornments because the settings configured in Live mode are not reflected in Development mode, and vice versa.
:::

The following table provides different error messages along with the possible reasons and solutions.

| Error message <br/> (in debug logs) | Resolution |
| ----| ----|
| **Agents unavailable & Offline chats setting is disabled** | If customers try to contact agents for assistance but no agents are present in the Inbox, possibly due to working outside of business hours, the chat will be captured by Inbox to inform the business. However, if the offline chats feature is disabled in the settings, the chat will be considered a missed chat. <br/> <br/> **Solution**: Enabling the [offline chats](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat) feature allows you to receive incoming chats when your agents are unavailable, such as during breaks or outside of working hours.|
|**Agents unavailable & Offline chats not enabled for a group - XYZ**| Because no agent was available in the group to which the live chat request was raised and the offline chat feature was not enabled in the inbox settings, the chat was not received and considered missed. <br/> <br/> **Solution**: To receive and capture [offline chats](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat) that are initiated for a particular group, you need to activate the feature in the Inbox settings.|
| **Agents unavailable & Offline chats limit for the group - XYZ has reached**| When setting up offline chat capabilities for a group, you would have established a maximum limit for the number of chats that should be captured. The live chat request got missed because it surpassed the maximum offline chat limit that was configured in the settings. <br/> <br/> **Solution**: If you anticipate a high volume of offline chats for this group, you can adjust the Max offline tickets allowed limit in the [Inbox settings](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat) to accommodate this increased demand. |
|**No agents online in Inbox with Available status** |  If there are no agents available in the Inbox to assign an incoming chat (because their status is not Available), it will be captured as an Offline chat by Inbox. However, if the Offline chat feature is disabled in the settings, the incoming chats will be missed.  <br/> <br/> **Solution**: Enabling the [offline chats](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat) feature allows you to capture incoming chats during times when your agents are unavailable, such as during breaks or outside of working hours. |
|**All agents online in Inbox are under Busy status** |All the agents in Inbox are currently marked as Busy, which means no more chats can be assigned to them. To avoid leaving the customer without a response, Inbox attempts to queue the incoming chat and assign it based on the agent's concurrency. However, if the Queue feature is disabled in the settings, the chat will be missed.  <br/> <br/> **Solution**: Enabling the queue functionality allows you to continue serving incoming chats. These chats will be added to a temporary queue and automatically assigned to agents when they become available to handle them, based on their concurrency. |
|**All available agents in Inbox have full concurrency** | The concurrency of all agents in the Inbox is currently full, so no more chats can be assigned to them. To prevent leaving the customer without a response, Inbox attempts to queue the incoming chat and assign it to an agent based on their concurrency. However, if the Queue feature is disabled in the settings, the chat will be missed.  <br/> <br/> **Solution**: Enabling the [queue functionality](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat-queue) allows you to continue serving incoming chats. These chats will be added to a temporary queue and automatically assigned to agents when they become available to handle them, based on their concurrency. |
|**All agents online in Inbox are under Away status** |  All agents in the Inbox are currently marked as Away, which means no more chats can be assigned to them. To avoid leaving the customer without a response, Inbox attempts to queue the incoming chat and assign it to an agent based on their concurrency. However, if the Queue feature is disabled in the settings, the chat will be missed. <br/> <br/> **Solution**: Enabling the [queue functionality](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat-queue) allows you to continue serving incoming chats. These chats will be added to a temporary queue and automatically assigned to agents when they become available to handle them, based on their concurrency.|
|**Preferred agent not eligible for chat assignment**|  <br/> 1. The preferred agent is not eligible for the current chat assignment, which could be because their concurrency is full or they are marked as Busy or Away. <br/> 2. None of the other agents in the group are eligible for the current chat assignment because their concurrencies are full or they are marked as Busy or Away. <br/> <br/> **Solution**: If this situation occurs frequently, you may want to consider increasing the [concurrency](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents#11-editmodify-existing-agent-properties). |
|**Agents fully occupied & Queue not enabled for group - XYZ**| The chat was missed because it was routed to a group where all agents were either marked as Busy, Away, or had their concurrency full. Additionally, the group queue setting was not enabled. <br/> <br/> **Solution**: If you anticipate a high volume of chats being raised in this group during working hours, you can enable the [queue functionality](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat-queue) to strike a balance between traffic and the agent workload. |
|**Agents fully occupied & Queue limit for group - XYZ has reached**|When setting up group queue settings, you may have specified a maximum limit on the number of chats that can be queued. In this case, the chat was missed because it exceeded the maximum queue limit that you have configured in the settings. <br/> <br/> **Solution**: If you anticipate a high volume of offline chats being raised for this group, you may want to consider increasing the maximum limit in the [Inbox settings](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat-queue). However, note that increasing the queue limit may result in longer waiting times for customers.|
|**XYZ group does not exist**|The group field that is being passed in the flow(Raise ticket node) does not exist. <br/> <br/> **Solution**: Verify if you have created this [group](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups) in the Inbox settings under the correct environment. Additionally, check if you are using the appropriate variable in the group field in the **Raise chat** node.|
|**bruce.wayne@yellow.ai agent does not exist**|The agent name that is being passed does not exist. <br/> <br/> **Solution**: Check if the email ID of the agent being passed is correct and valid. Additionally, verify if the user is still added as an Inbox agent in the platform. |
|**At least one of Name, Number or Email is required to raise chats**| In order to raise chats, at least one of the following information is required: Name, Number, or Email. <br/> <br/> **Solution**:  Ensure that you are providing at least one of these details when raising a chat (via. [raise ticket node](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/inboxdemo#3-steps-to-create-support-flow-from-scratch)).|
|**Query field is either not being passed or has empty value** |  It seems that either the query field being passed is empty, or the variable that is supposed to contain the query data has null values. <br/> <br/> **Solution**: Ensure that the variable being passed as the query field in [Raise ticket](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/inboxdemo#3-steps-to-create-support-flow-from-scratch) node is correct and has data. If you don't want to ask for this information from the customer, create a variable and set a default value when it is created. This will prevent the error from occurring.|
|**Video call not enabled in settings**| You are trying to initiate a video call in the chat, but the video call functionality is disabled in the settings. This is why the chat is not being raised with video call ability. <br/> <br/> **Solution**: Enable the video call functionality in the [settings](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/video-call-settings). Once you do that, you should be able to initiate video calls in the chat. |
|**Agent info missing for manual assignment**| Agent email ID is not being passed for manual assignment. <br/> <br/> **Solution**: Pass in a valid agent email ID for the manual assignment to take place. |







































