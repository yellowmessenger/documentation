---
title: Handle live chats when all the agents are offline
sidebar_label : Live chat offline handling
keywords : [offline ticketing, offline chat]
---

:::note
Offline handling is sometimes referred to as **offline ticketing**/ **Offline chat**, although this configuration is applicable only for live chats. 
:::

**Importance of implementing offline handling**

You can manage live chat requests incoming after [working hours](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/chat_working_hours) (or during working hours if the entire team is logged off) in the offline handling setting section. This feature is essentially a status update that informs the users that an agent is unavailable to chat. 

If **none of the agents are available** (all the inbox agents have logged out) to resolve live chats and you want to address the customer requests raised at that time **offline handling** can be enabled. 


**Use cases of offline handling** 

- You can manage the limit and status of the chat after working hours to provide 24/7 support.
- Offline handling uphold the continuum of service that your customers expect. If you have customers around the globe, you can anticipate that they may need support outside of your normal operating hours. 
- Offline handling ensured that the inquiries are acknowledged and customers receive a satisfactory answer until an agent has the opportunity to follow up.



## 1. Configure offline handling 

:::info

When offline handling is:
- **Enabled**: Live chats will remain in the [Open chats](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#14-open-chats) section for agents to address.
- **Disabled**: Live chats will be moved to the  [Missed chats](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#16-missed-chats) section and will not be attended to.
:::

Follow the steps below to enable offline handling of live chats: 

1. Open **Inbox** > **Setting**. 
2. Search and select **Offline handling**. 
    ![](https://i.imgur.com/7LPvaD4.jpg)
3. You can **Enable/Disable offline chats**. **Enable** the toggle to allow Inbox to handle live chats when all the agents are offline. 
    ![](https://i.imgur.com/AbEmZ4V.png)
4. By clicking the edit button you can configure offline chats for different [groups](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups). Click edit next to the required group name. 
    - You can choose the **Default** group and configure default settings to manage live chat requests received by all the groups.
    ![](https://i.imgur.com/70A4ZQQ.png)
5. Select the type of field you want to create and decide the ticket behavior for agents. Click **Submit**.
    - **Enable/Disable offline tickets**: **Enable** this to serve the customer requests received when the agents are offline, disable otherwise. 
    - **Max offline tickets allowed**: Enter the number of tickets that can go to Open state while all agents are offline.
    - **Auto-assign tickets**: If this is enabled, the tickets in Open state will be auto-assigned when the agents come back online.
    - **Priority of auto-assignment**: The ticket type (Queued/Open) that should be given priority and auto-assigned when agents come back online. 
    ![](https://i.imgur.com/YD24jSA.png)
6. This can be configured for all the available [groups](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups). 


---------

### Offline handling expected behaviour


#### 1. When the Inbox admin has enabled offline handling

`Assume all the agents are offline at the same time and a customer has requested to talk to an agent.`

`A live chat request is raised`

`The live chat appears in the "Open chats" section of the inbox`

`The customer waits on the chat screen`

`When any agent in that group comes online and becomes available, the live chat is immediately assigned to them`

#### 2. When the Inbox admin has disabled offline handling

`Assume all the agents are offline at the same time and a customer has requested to talk to an agent.`

`A live chat request is raised`

`The live chat appears in the "Missed chats" section of the inbox`

`Customer request is not addressed`

---------

## 2. Notify customers on agent unavailability 

To inform customers that agents are currently unavailable and their queries will be addressed once an agent is back online, follow the steps below for implementing offline handling:

1. Enable offline handling settings as described above.
2. Access the **Studio** section and navigate to **Events**.
3. Open the [Custom events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub) and click **+Add event**.
    ![](https://hackmd.io/_uploads/HkG89gJP2.png)
4. Provide the **name** `ticket-opened` and click **Create event**. 
    ![](https://hackmd.io/_uploads/B1cqqgkDh.png)
5. Ensure that the `ticket-open` event is **Active**. If not, make it Active by clicking on the three dots next to it.
    ![](https://hackmd.io/_uploads/B18Zjx1D2.png)
6. [Create a new flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) in the **Studio** > **Build**. 
    ![](https://hackmd.io/_uploads/B1rOixkD2.png)
7. Within the flow, add a start trigger by clicking on the start node. Select **event** from the dropdown and set the value as `ticket-opened`.
    ![](https://hackmd.io/_uploads/ryKShx1wh.png)
8. Add a message node to display an acknowledgment to the customer, informing them to wait for a while.
    ![](https://hackmd.io/_uploads/BkgF2eJw2.png)

**Expected behaviour:** 

`Assume all the agents are offline at the same time and a customer has requested to talk to an agent.`

`A live chat request is raised`

`The live chat appears in the "Open chats" section of the inbox`

`The customer waits on the chat screen`

`A message is displayed to the customer, stating the delay: "Your chat will be assigned as soon as we find an available agent. Please wait, and thank you for your patience"`

`When any agent in that group comes online and becomes available, the live chat is immediately assigned to them`
