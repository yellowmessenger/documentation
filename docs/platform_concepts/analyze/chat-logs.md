---
title: Conversation logs
sidebar_label : Conversation logs
---

Conversation logs contain detailed records of every interaction between users and the chatbot in chronological order. These logs include user inputs, bot responses, timestamps, and any contextual data relevant to the interaction.

These logs provide a complete history of conversations, helping bot developers to understand how the bot is performing, identify issues, and make improvements to enhance the user experience.

By default, you can view chats from the past 24 hours. Logs are retained for six months; after this period, they are archived.


Key benefits of conversation logs:

* **Monitoring and analysis**: You can track the performance of the chatbot and analyze user interactions to identify issues, understand user behavior, and pinpoint areas for improvement.
* **Troubleshooting**: By looking at these logs, you can see which conversations went wrong and understand why users might not be engaging as expected, allowing you to make necessary improvements.

:::note
The names in conversation logs cannot be changed or mapped to a user. The platform displays random names in order to maintain end user anonymity. 
:::

## Access Conversation logs

To access the conversation logs:

* Go to **Analyze** > **Conversation logs**.

   ![](https://imgur.com/NdIy6O7.png)

## Bot session

A session refers to a continuous interaction between a user and the bot within a specific timeframe. It begins when the user starts interacting with the bot and ends when the interaction is concluded, either by the user leaving or the session timing out.

Each user is identified by a unique ID (UID), and a conversation log is generated for each UID, capturing the entire context of the interaction. Some logs retain up to 5 days of conversation history.

For different applications, the session duration varies: for web apps and WhatsApp, sessions last for 24 hours.

## Filter conversations

You can use filters to extract relevant and meaningful information from a large volume of conversations. Filters help you quickly identify important interactions, better understand user queries, and troubleshoot problems.

To filter chat logs, follow these steps:

1. Click **Filters** on the top right corner.

   ![](https://i.imgur.com/OiwpjSn.png)

2. Set the filters based on your preferences. For detailed information on each filter criterion, refer to the table below:

    | Filter | Description |
    | -------- | ------- |
    | Date | Explore conversations within a chosen date range by using the calendar selection. |
    | Source | Focus on conversations from a particular channel, such as Skype, WhatsApp, Facebook, etc. Simply pick the desired source from the dropdown menu. |
    | Tags | Delve into conversations with specific tags, automatically assigned based on configured rules. Select preferred tags from the list provided. |
    | Flagged Conversation | Choose to view either flagged or unflagged conversations, aiding in prioritization. |
    | Labels | Pinpoint conversations with specific labels, streamlining identification. |
    | Flows | Filter conversations associated with a particular journey, even enabling step and drop-off specific filtering. |
    | Nodes | Refine conversations containing particular nodes; for example, view all chats with provided phone numbers. Multi-node selection available. Only Prompt nodes will be displayed. |

   <img src="https://i.imgur.com/3Eg9VQe.png" alt="drawing" width="40%"/>
 
3. Click **Apply filter** after setting the criteria.

## Label conversations

Adding labels to conversation logs helps organize and categorize interactions. Labels make it easy to identify and track specific types of conversations, such as complaints, inquiries, or feedback, which allows you to identify the type of conversation easily.

To label a conversation, follow these steps:

1. Click on a conversation log.

   ![](https://i.imgur.com/CehWrPB.png)

2. Under **User deatils**, add a label to the conversation.

   ![](https://i.imgur.com/h9dE0IE.png)
   
3. Go to **Filters** > **Labels** > select the label from the drop-down > **Apply filter**.

    ![](https://i.imgur.com/9xvINDY.png)
    
* You can view the log with the selected label.

   ![](https://i.imgur.com/LI8x9cI.png)
   
## Flag conversations

By flagging a conversation, you can easily mark it for review, follow-up, or escalation. This ensures that critical issues, such as unresolved complaints or urgent inquiries, are promptly addressed. Flagging also helps organize conversations for further analysis and improves the management of user interactions.

To flag a conversation, follow these steps:

1. Go to the desired conversation and click the **Flag** icon on the top right corner.

   <img src="https://i.imgur.com/xI07tuf.png" alt="drawing" width="50%"/>

2. To view your marked conversations, go to **Filters** > **Flagged Conversation** > **Apply filter**.

     ![](https://i.imgur.com/5swxsuz.png)

## Auto-identification of conversation issues in logs

The chatbot can automatically identify and tag each conversations that might have involved issues or areas for improvement. For example, it may flag conversations with unidentified responses, providing insights into how to enhance user interactions and the overall performance of the bot.

To view auto-generated tags, follow these steps:

1. Check the **Tags** column to see the status of the tags.

   ![](https://i.imgur.com/FLZJ3EV.png)

2. Go to the preferred chat and check the conversations.

   <img src="https://i.imgur.com/MLq3zVM.png" alt="drawing" width="80%"/>

3. Go to the respective flow in Studio and make the necessary changes. 

4. Test the bot to see if the changes work.

## Debug conversations

To debug and resolve issues in a conversation, you can enable logs for that specific interaction. This helps you gain a clearer understanding of how to address the problem and fix it.

To enable logs, follow these steps:

1. Go to the conversation log and enable the toggle button to enable the logs for that conversation.

   <img src="https://i.imgur.com/97RJEe9.png" alt="drawing" width="60%"/>
   
2. Click on **Logs**.

    ![](https://i.imgur.com/CEgeroT.png)    

3. Click **Debugger** icon to get the logs for any user input and trace the sequence of actions the bot took in response to specific user inputs, making it easier to troubleshoot issues and improve bot performance. 

      ![](https://i.imgur.com/x3gui2X.png)   

## Share conversation logs

You can share the conversation logs with your team members to review and discuss specific interactions, which helps in identifying problems and finding solutions.

1. Go to the conversation log and copy the chat URL.

   <img src="https://i.imgur.com/3JX56q2.png" alt="drawing" width="60%"/>
   
* Share the URL with the specific user or team members.  

