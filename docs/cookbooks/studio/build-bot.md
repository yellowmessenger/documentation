---
title : Build a bot with FAQ and Customer Support
sidebar_label : Build a bot with FAQ and Customer Support
---

This step-by-step guide helps you create a chat bot with FAQ and customer support.

1. On the **Overview switcher**, click **Studio**.

![](https://i.imgur.com/tCFgOdr.png)

2. On the left sidebar, click the **Train** section and go to the **FAQs** tab.

![](https://i.imgur.com/PNwWUBi.png)

3. Add a category for your FAQs by clicking the **+** icon. Provide a name to your category and click **Create category**.

![](https://i.imgur.com/cp3AcrV.png)

4. [Add FAQs](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs#-1-add-faqs) to that specific category. You can also [add faqs in bulk](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs#-2-add-faqs-in-bulk).
8. Train the bot to understand the FAQs by clicking the **Train intents** button on the top right corner.

![](https://i.imgur.com/HlUbhk2.png)


After adding FAQs and training your bot on the same, go to the builder by clicking **Build** on the top left corner.

![](https://i.imgur.com/aZRSHfd.png)


5. Click **+Create new flow** to create a new flow followed by **+ Create from scratch** in the following pop-up.

![](https://i.imgur.com/QtL334V.png)


6. Fill in the following fields and click **Create**.



| Field Name | Description | 
| -------- | -------- | 
| Flow name | Provide a name to the flow | 
|Flow Description| Describe the purpose of the flow|
|Category| This an optional field where you can choose the category to which your flow belongs to. If the flow doesn't fall under any of the existing categories, click + Create Category to create a new one. <br/>![](https://i.imgur.com/Hp6GIsJ.png)|

Enable **Create as a workflow** if you'd like this flow to [function as a workflow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#-21-workflow---a-variant-of-flow) and click **Create**.


![](https://i.imgur.com/sJ3PTHt.png)


7. [Add a Quick Replies node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#6-quick-replies) to the flow to get buttons interface.

![](https://i.imgur.com/PpFPS7n.png)

8. Add buttons to the **Quick replies** node and populate them with the questions you added in the **FAQ** section.
15. Populate the **Bot asks** section with the question you'd like the bot to ask the end user.

![](https://i.imgur.com/qh69S16.png)


Until this step, the bot would automatically fetch answers from FAQs to reply to the user queries. If the bot doesn't understand, the chat can be transfered to a live agent. Follow the below-mentioned steps to add a live agent to attend your user queries.

9. In the same flow, set the fallback to the [Raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) node.  This will transfer the chat to a live agent. The live agent can attend the user queries from the [Inbox](https://docs.yellow.ai/docs/platform_concepts/inbox) module. To know more about how the live chat agent function works, click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/inboxdemo).

![](https://i.imgur.com/stH4NCN.png)


10. Fill in the fields and set [Text](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text) nodes to display relevant messages for **Ticket closed** and **Error**.

![](https://i.imgur.com/OWo4sdS.png)








