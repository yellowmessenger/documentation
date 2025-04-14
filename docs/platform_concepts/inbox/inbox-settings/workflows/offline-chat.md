---
title: Handle live chats when all the agents are offline
sidebar_label : Live chat offline handling
keywords : [offline ticketing, offline chat]
---

:::note
Offline handling is sometimes referred to as **offline ticketing**/ **Offline chat**, although this configuration is applicable only for live chats. 
:::

Offline handling—also known as offline ticketing or offline chat—applies to live chat conversations only. It ensures that customer messages are captured and managed even when all agents are offline, such as **outside working hours** or during **unexpected logoffs**.


**Importance of implementing offline handling**

- You can manage live chat requests incoming after [working hours](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/chat_working_hours) in the offline handling setting section. 
- If **none of the agents are available** (all the inbox agents have logged out) that is during working hours if the entire team has logged off , to resolve live chats and you want to address the customer requests raised at that time **offline handling** can be enabled. 


**Use cases of offline handling** 

- Provide 24/7 support by capturing chats even after business hours.
- Ensure consistent service for global customers in different time zones.
- Acknowledge every inquiry instantly and queue it for follow-up when agents are back online.


## Configure offline handling 

:::info

When offline handling is:
- **Enabled**: Live chats will remain in the [Open chats](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#14-open-chats) section for agents to address.
- **Disabled**: Live chats will be moved to the  [Missed chats](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#16-missed-chats) section and will not be attended to.
:::

Follow the steps below to enable offline handling of live chats: 

1. Open **Setting** > **Inbox**. 
2. Search and select **Offline handling**. 
    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/offlinehandling.png)

3. Toggle on **Enable/Disable offline chats**.
   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/offlineenable.png" width="90%"/>


4. To configure offline chats for different [groups](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups), navigate to the respective card and click on the **Edit** button.
    - To set live chat requests received by all the groups, edit the **Default** group.
    
    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/offlineenable.png)


5. In **Enable offline tickets**, choose **Enable**.
    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/enable.png" alt="drawing" width="80%"/> 

6. Select the below options to determine the ticket behavior for agents. Click **Submit**.
    - **Enable/Disable offline tickets**: Enable this to capture and queue customer requests that come in when no agents are online. For example, if a customer initiates a live chat at midnight, the system logs their message as a ticket, which is then assigned to an agent when they come online. Disabling this means the request will be marked as missed and not followed up automatically.
    - **Max offline tickets allowed**: Enter the number of tickets that can go to Open state while all agents are offline.
    - **Auto-assign tickets**: If this is enabled, the tickets in Open state will be auto-assigned when the agents come back online.
    - **Priority of auto-assignment**: The ticket type (Queued/Open) that should be given priority and auto-assigned when agents come back online. 
    
    <img src="https://i.imgur.com/YD24jSA.png" width="60%"/>

    :::info

    **Open chats**:
    - Open chats are assigned to the agent who logs in first during the upcoming working hour window. This means that when an agent logs in, they will be assigned any open chats that are currently available for handling.
    - If the number of open chats exceeds the agent's concurrent capacity (the maximum number of chats an agent can handle simultaneously), any remaining open chats will be assigned to the subsequent agent who logs in. 

    **Queued chats**:
    - Queued chats are typically assigned one by one based on the agent's concurrency and availability. This means that when an agent becomes available to handle a new chat, the next chat in the queue will be assigned to them.     
    :::

7. You can configure offline handling individually per **[group](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups)** under the group-specific card.   

    <img src="https://imgur.com/z78VVbb.png" width="100%"/>



---------

### Offline handling expected behaviour comparison


| **Scenario Element**         | **Offline Handling Enabled**                                                                 | **Offline Handling Disabled**                                                               |
|-----------------------------|-----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| **Agent Status**            | All agents are offline (logged out or outside working hours).                                | All agents are offline (logged out or outside working hours).                              |
| **Live Chat Behavior**      | The customer's live chat request is captured and shown in the **Open Chats** section.        | The customer's live chat request is marked as **Missed** and shown in the **Missed Chats** section. |
| **Customer Experience**     | The user sees a waiting screen or a message indicating that agents are currently unavailable. | No message is shown. The customer receives no acknowledgment and may assume the chat failed. |
| **Follow-up by Agents**     | When any agent comes online, the chat is automatically assigned based on group settings.     | The chat remains in the Missed Chats section and is not assigned unless handled manually.   |
| **Service Continuity**      | Ensures that customer messages are queued for agent response once available.                 | No ticket is created or followed up unless reviewed manually. Potential service gap.         |
| **Use Case**                | Ideal for businesses offering support beyond working hours or across time zones.             | Suitable only when real-time chat is not critical or fallback automation is in place.        |


:::info
To notify customers on agent unavailability when offline handling is enabled, refer to this [detailed guide](https://docs.yellow.ai/docs/cookbooks/inbox/notifycustomerofflinehandling).
:::
