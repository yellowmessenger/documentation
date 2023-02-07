---
title: Fetch CSAT(bot & agent feedback) from bot users on data explorer 
sidebar_label : Configure bot & agent feedback
Keywords: [Track CSAT, CSAT analytics, customer feedback analytics]
---

You can configure your flows and collect **user feedback** (Customer Satisfaction Score-CSAT) for bot interactions. This data will be available in the [Data Explorer] section. You can visualize it further by taking advantage of [Dashboards](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards) and [visualization](https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer#43-visualization). 

Following are the different approaches that can be taken (as per your use case) to obtain the feedback data: 

1. Use the Studio Feedback node and view its analytics in Insights (and the default table).
    - Monitor customer feedback after an interaction with an Inbox agent.
2. Create a custom flow requesting user for customized feedback fields and visualizing it on Insights. 


-----

## 1. Track user feedback on the default table

To obtain the user feedback graph on the overview page and the user feedback default table on the data explorer page, follow the below steps: 

**To obtain user feedback on the bot interaction:** 

1. In **Studio**, at the end of your existing flow, add a [feedback node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#27-feedback) to collect user feedback. 

![](https://i.imgur.com/SI8BwYL.png)

> After the user feedback is entered, it will be saved in the Feedback table (it is a default database, need not create any new table to save this data unless your use case demands it).

:::note

**To obtain user feedback on the agent interaction:** 

- Create a flow using the [Raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) action node. Configure Inbox. Enable **CSAT** from the inbox settings. After a chat ticket is closed, your customers will be asked for, agent feedback and chat feedback. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/csat) to know more. 
- These user feedbacks can be found in the Insights module, [Data Explorer](https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer) > **Chat tickets** table .

:::


2. Data attained from users will be available on **Insights**.    
    - Open **Insights**.
    - Select **Data explorer** > **Default tables** > **User feeback**.  


![](https://i.imgur.com/cpnqjNR.png)

3. This user feedback table can be summarized, and visualized. Click [here](https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer#4-data-visualization-and-other-functions) to know more. 
4. You can save these queries and view them on a separate dashboard. Click [here](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards) to know more. 

5. Customer feedback analytics can also be found on the **Insights Overview** page under [User feedback](https://docs.yellow.ai/docs/platform_concepts/growth/overview#8-user-feedback). 

> **Bot feedback** is obtained from [feedback node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#27-feedback).    
> **Agent feedback** is obtained from the [CSAT score](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/csat) provided to the live agent.       
> This graph is available only for default tables - not custom tables.   

<img src="https://i.imgur.com/sMmYWUz.jpg" alt="drawing" width="50%"/>

----

## 2. Customize collection of user feedback 

The above-mentioned default feedback method will work only on your website chatbot. 
You can create flows in Studio to manually collect user feedback (from the bot interaction) for two use cases: 
1. Collect CSAT feedback for other channels like WhatsApp, Facebook, etc. after an inbox live agent interaction.
2. Customize your feedback parameters. The feedback node collects only the rating and comments from the user. If you want to collect other details, like "which product would you likely recommend to your friends," you can use this method.


Follow the given steps: 

1. Create a feedback flow.
![](https://i.imgur.com/uE0Esxl.png)

- You can add [prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) to ask questions or other details and store the response in a variable. 
- To collect ratings, use a node to present options ranging from 1 to 5 (the CSAT score) and **store the response** in a variable (for example, feedback).If your channel is WhatsApp, you can use the [WhatsApp list node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#22-whatsapp-list). You can also use [Quick replies node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) to fetch the user rating. 

    <img  src="https://i.imgur.com/YUYBcyj.png"  width="50%"/>




2. Create a database with the required columns (for instructions, see [here](https://docs.yellow.ai/docs/platform_concepts/studio/database).




![](https://i.imgur.com/uQMNe3m.png)

3. Send the collected data (feedback variables) into the database using the [database action node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) in the bot flow.

![](https://i.imgur.com/1GbRjx2.png)

4. Connect this feedback flow at the end of your use case (i.e., the other flow where the bot interaction is expected to end) using an [Execute Flow node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#15-execute-flow).

5. Open **Insights** > **Data Explorer** > **Custom Tables** > Select the table in which you have stored the feedback.

> Click [here](https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer#3-create-custom-tables) for detailed document on custom tables.

![](https://i.imgur.com/bkDSbfc.png)

6. Create a [dashboard](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards) and track it. Refresh the page to update dashboards with newly added data points.

![](https://i.imgur.com/wluH8KC.png)
