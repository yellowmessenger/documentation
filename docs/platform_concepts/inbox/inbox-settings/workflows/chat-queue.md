---
title: Chat queue handing 
sidebar_label : Queue handling 
---

From the queue handling settings page, you can control how incoming chat tickets are handled when all your agents are occupied. 
Customers enter the queue when your agents' chat limit has been reached. This way they can focus on finishing current chats before starting new ones. 
> You can change the concurrency in your [agents' profile settings](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents).


- Chat queues help you maintain a balance between wait time and internal resources. 
- It prevents concurrent chat overload for agents while keeping your waiting customers updated.
- Queue setting makes your chat queues easy to manage and customize and decides the queue limit for your groups to make sure your customers are handled well.


Functionalities of queue handling: 

* View all pending chats and their current time in queue.
* Set queue rules based on agent availability and customer wait length.
* Time and customize the messages your chat users see while waiting.
* Create auto-accept rules to direct requests to the least busy operator.
* Access queue reports on a daily, weekly, and monthly basis.


---


## 1. Configuration


Follow the given steps to configure the queue for different agent groups: 

1. Open **Inbox** > **Setting**. 
2. Search and select **Queue handling**. 

![](https://i.imgur.com/NFgq6UD.jpg)


3. When the agents are occupied, incoming tickets can go into [Open](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#14-open-chats) chats or [Missed](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#16-missed-chats) chats. Select  **Open**/**Missed** from the drop-down menu. 
    - **Open**: List of all the existing tickets the agents are working on.
    - **Missed**: List of all the tickets that are missed by the agents when they are occupied.


![](https://i.imgur.com/nO0LbKq.png)

4. Select the checkbox- **Mark the chat as missed when your customer who is queued in the website chatbot, becomes inactive for _ min(s)** and add the minutes of inactivity.   
By checking this, if the user (who is in the queue) is not answered within X  minutes (example: 3 minutes) by the agent, chat automatically goes into [missed](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#16-missed-chats). 

![](https://i.imgur.com/B187p3D.png)

:::note

**Queued chats will be moved to inactive/Missed chats** and be dropped off if any of the following conditions are met:
1. If the end-user closes the browser(any active windows which are embedded with the bot code) and does not return for X minutes.
2. If the end user who is using a browser on a mobile device minimizes the tab or closes the browser containing the bot and does not return for X minutes.
3. If there is no mouse or keyboard activity from the end user for 10+X minutes (for example, after 10+3=13 minutes, the chat is marked as missed). If any mouse/keyboard activity is encountered, the timer is reset. 
:::

5. By selecting the **Enable queue position display on widget** toggle, the customers can see the details that they are in a queue and queue position when they can expect a response from an agent. 
    - You can display the position by entering the text in the **Enter custom message to display queue position** field. Type in any message and use `{{queuePosition}}` to get the value. 

![](https://i.imgur.com/BC5G9E3.png)


6. You can enable the Default position and display the required queue position value. This can be done to all the displayed agent groups. 

![](https://i.imgur.com/mavglY7.png)

7. Click the **Save** at the end of the page and save all the changes. 





