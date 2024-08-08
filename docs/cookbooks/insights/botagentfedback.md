---
title: Fetch CSAT(bot & agent feedback) from bot users on data explorer 
sidebar_label : Configure bot & agent feedback
Keywords: [Track CSAT, CSAT analytics, customer feedback analytics]
---

To collect user/customer feedback on yellow.ai, you can take the below approaches: 
1. **Collect user feedback for the bot interaction** (on web widget): This is done by creating a flow using Feedback node. When this node is reached during the flow, feedback questions will be posed to the users. 
2. **Collect user feedback for the inbox agent interaction** (on web widget): This is explicitly for bots using Inbox and have agents configured. After an agent resolves a chat, feedback questions will be posed to users. 
3. **Collect user feedback for bot/agent interaction via. custom flows** (recommended for other channels like Facebook, WhatsApp, etc.): Create a custom flow on Automation. 

This data will be available in the [Data Explorer](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/intro) section.     
You can visualize it further by taking advantage of [Dashboards](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards) and [visualization](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/visualization). 


-----

## 1. Default user feedback for bot interaction

1. In **Automation**, at the end of your existing flow, add a [feedback node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#27-feedback) to collect user feedback on the **bot-customer** and **inbox agent-customer** conversation. 

    ![](https://i.imgur.com/SI8BwYL.png)

-------

## 2. Default user feedback for agent interaction

1. Create a flow using the [Raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) action node. 
2. Configure Inbox agents . 
3. Enable **CSAT** from the inbox settings. 
4. After a chat ticket is closed, your customers will be asked for feedback on the agent interaction.

> Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/csat) to know more about Agent CSAT score. 

----

##  3. Customize user feedback flow on Automation

> The above-mentioned default feedback methods will work only on your **website chatbot**. 

You can create flows in Automation to manually collect user feedback (from the bot interaction) for two use cases: 
1. Collect CSAT feedback for other channels like WhatsApp, Facebook, etc. after an inbox live agent interaction.
2. Customize your feedback parameters. The feedback node collects only the rating and comments from the user. If you want to collect other details, like "which product would you likely recommend to your friends," you can use this method.

Follow the given steps: 

1. Create a feedback flow.
    - You can add [prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) to ask questions or other details and store the response in a variable. 
    ![](https://i.imgur.com/uE0Esxl.png)
    - To collect ratings, use a node to present options ranging from 1 to 5 (the CSAT score) and **store the response** in a variable (for example, feedback).If your channel is WhatsApp, you can use the [WhatsApp list node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#22-whatsapp-list). You can also use [Quick replies node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) to fetch the user rating. 
     <img  src="https://i.imgur.com/YUYBcyj.png"  width="50%"/>

2. Create a database with the required columns (for instructions, see [here](https://docs.yellow.ai/docs/platform_concepts/studio/database)).
    
    ![](https://i.imgur.com/uQMNe3m.png)

3. Send the collected data (feedback variables) into the database using the [database action node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) in the bot flow.

    ![](https://i.imgur.com/1GbRjx2.png)

4. Connect this feedback flow at the end of your use case (i.e., the other flow where the bot interaction is expected to end) using an [Execute Flow node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#15-execute-flow) or when the [ticket is closed](https://docs.yellow.ai/docs/cookbooks/inbox/ticketclose-message).

-----


## 4. View user feedback on Insights 

1. **Data from feedback node for bot interaction**: 

    Available on **Insights** > **Data explorer** > **Default tables** > **User feedback**.  
    ![](https://i.imgur.com/cpnqjNR.png)

2. **Data from CSAT settings for agent interaction**: 

    Available on **Insights** > [Data Explorer](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/defaulttables) > **Chat tickets** table .

3. **User feedback widget for bot and agent interaction**: 

    The [User feedback](https://docs.yellow.ai/docs/platform_concepts/growth/overview#8-user-feedback) widget on Insights overview provides: 
    - **Bot feedback**: This is obtained from [feedback node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#27-feedback).    
    - **Agent feedback**: This is obtained from the [CSAT score](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/csat) provided to the live agent. 

    <img src="https://i.imgur.com/sMmYWUz.jpg" alt="drawing" width="50%"/>   

    > Chat tickets and User feedback are default database table, you need not create any new table to save this data. 

4. **Data from custom flows for bot/agent interaction**: 

    Available on **Insights** > **Data Explorer** > **Custom Tables** > Select the table in which you have stored the feedback.

    ![](https://i.imgur.com/bkDSbfc.png)

    > Click [here](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/customtables) for detailed document on custom tables.

    You can save these tables(queries) and view them on a separate [dashboard](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards). Refresh the page to update dashboards with newly added data points.

    ![](https://i.imgur.com/wluH8KC.png)

