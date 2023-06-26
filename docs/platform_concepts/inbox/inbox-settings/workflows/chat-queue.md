---
title: Queue handling for live chats
sidebar_label : Queue live chats
keywords: [Queue handling, handle queueing of live chats, live chats in queue]
---

  

From the queue handling settings page, you can control how incoming chat tickets are handled when all your agents are occupied. Customers enter the queue when your agent's chat concurrency limit is reached or if all the agents are busy or away.

> You can change the concurrency in your [agents' profile settings](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents).

  

Functionalities of queue handling:
- Chat queues help you maintain a balance between wait time and internal resources.
- It prevents concurrent chat overload for agents while keeping your waiting customers updated.
- You can view all pending chats and their current time in the queue.
- You can time and customize the messages your chat users see while waiting.
- You can access queue reports on a daily, weekly, and monthly basis in the reports.

  
  

---


## 1. Configure chat queue

Follow the given steps to configure the queue for different agent groups:

1. Open **Inbox** > **Setting**.
2. Search and select **Queue handling**.
    ![](https://i.imgur.com/NFgq6UD.jpg)


#### Chat queue logic

:::note
Only if the below 3 conditions are met step #3 will get executed.
- An incoming chat request is queued.
- All the agents go offline (log out) when the chat is still in the queue.
- No agent has logged in from the last 10 mins when the chat is in the queue.
:::

3. When the agents have logged out, you can decide what happens to the incoming tickets by selecting **Open**/**Missed** from the drop-down menu.

    -  **Open**: If Open is selected, when the agent logs in, they can find this queued ticket under [Open](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#14-open-chats) chats. It can then be resolved.

    > To select Open, you must enable [offline handling](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat).

    -  **Missed**: If Missed is selected, the incoming queued chat becomes a [Missed](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#16-missed-chats) chat.

    ![](https://i.imgur.com/nO0LbKq.png)

#### Queued chats inactivity

4. Select the checkbox- **Mark the chat as missed when your customer who is queued in the website chatbot, becomes inactive for _ min(s)**.
    - Add the minutes of inactivity (select a number in the range of 5 to 30 minutes). By checking this, if the user (who is in the queue) is not answered within X minutes (example: 6 minutes) by the agent, chat automatically goes into [missed](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#16-missed-chats).

    - Other chats in the queue are pushed forward.

    ![](https://i.imgur.com/B187p3D.png)

    > Works only for a web channel.



:::info
**Queued chats moving to missed chats**

A user whose chat is QUEUED will be considered inactive/dropped off and moved to MISSED if any of the following conditions are met:
1. If the end-user closes the browser(any active windows which are embedded with the bot code) and does not return for X minutes.
2. If the end user who is using a browser on a mobile device minimizes the tab or closes the browser containing the bot and does not return for X minutes.
3. If there is no mouse or keyboard activity from the end user for 10+X minutes (for example, after 10+6=16 minutes, the chat is marked as missed). If any mouse/keyboard activity is encountered, the timer is reset.
:::

  

5. By selecting the **Enable queue position display on widget** toggle, the customers can see the details that they are in a queue and queue position when they can expect a response from an agent.
    - You can display the position by entering the text in the **Enter a custom message to display queue position** field. Type in any message and use `{{queuePosition}}` to get the value.

    ![](https://i.imgur.com/BC5G9E3.png)

    > Works only for a web channel.

6. Queues must be enabled for each [group](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups). All the groups are listed on this page, you can enable/disable queue handling for the required groups.
    - You can add the number of chats that can be queued per group at once. For example, for Group 2 - 50 chats can be queued at once. The 51st incoming chat request will be missed.

    ![](https://i.imgur.com/mavglY7.png)

    > Recommended to have lesser than or equal to 20 chats in the queue at once to provide better support.

7. Click the **Save** at the end of the page and save all the changes.

:::info
To identify if the chat is queued, ```ticket-queued``` event can be used(Activated). Learn more about custom events [here](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#-8-custom-events).
:::