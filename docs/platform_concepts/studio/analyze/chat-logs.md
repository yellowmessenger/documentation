---
title: Conversation Logs
sidebar_label : Conversation Logs
---

Conversation logs store the chronological history of interactions  between the user and your bot. This tool tracks bot interactions and identifies potentially problematic conversations. They help in analyzing user disengagement, understand user viewpoints, and improve processes. For example, you can check conversations to see if users are using the bot as intended. It also enhances online chat by keeping a record of information and outcomes.

To access the conversation logs, go to **Studio** > **Analysis** > **Conversation logs**.

   ![](https://i.imgur.com/9aDoONp.png)


Logs are retained for six months. After that, they are transferred from the active store to the cold store where they will remain until the contract expires. If needed, these logs can be archived upon request.

:::note
* The conversation logs are updated everyday at 21:00 LT.
* By default, we can view chats from the past 24 hours.
:::

## Session

In the Yellow.ai platform, every interaction with a user is called a session. Each user is identified by a unique ID (UID). A conversation log is generated for each UID, capturing the entire context. Some logs retain up to 5 days of conversation history.

App | Session Duration
--- | ----------------
Web app | 24 hours
Whatsapp | 24 hours

## Filter conversations

You can use Filters to extract relevant and meaningful information from a large volume of conversations, making it easier to analyze and understand user interactions, trends, and patterns. By applying filters, you can focus on users based on specific properties, topics, time periods, or other factors of interest, which aids in gaining insights and improving decision-making based on the chat data.

To filter chat logs,

1. Click **Filters** on the top right corner.

   ![](https://i.imgur.com/4r4mcor.png)

2. Set the filters based on your preference. To understand the each filter criteria in detail, refer the table below.

   <img src="https://i.imgur.com/oCTRDD4.png" alt="drawing" width="40%"/>

3. Click **Apply filter** after setting the criteria.

| Filter | Description |
| -------- | ------- |
| Date | Explore conversations within a chosen date range by using the calendar selection. |
| Source | Focus on conversations from a particular channel, such as Yellow.ai, Skype, WhatsApp, Facebook, etc. Simply pick the desired source from the dropdown menu. |
| Tags | Delve into conversations with specific tags, automatically assigned based on configured rules. Select preferred tags from the list provided. |
| Flagged Conversation | Choose to view either flagged or unflagged conversations, aiding in prioritization. |
| Labels | Pinpoint conversations with specific labels, streamlining identification. |
| Flows | Filter conversations associated with a particular journey, even enabling step and drop-off specific filtering. |
| Nodes | Refine conversations containing particular nodes; for example, view all chats with provided phone numbers. Multi-node selection available. |

## Label conversations

As conversations pile up — covering complaints, inquiries, and feedback — using labels strategically helps track them systematically. This provides insights into user intentions and helps improve bot performance and user experience.
To label a conversation:

1. Click on a conversation log.

   ![](https://i.imgur.com/qcney44.png)

2. Add a label to the conversation under **Label**.

   ![](https://i.imgur.com/rfy3juH.png)

## Flag conversations

You have the option to mark conversations for future reference. 

To flag a conversation:

1. Go to the desired conversation and click the flag icon on the top right corner.

   <img src="https://i.imgur.com/r3GzCVg.png" alt="drawing" width="50%"/>

To exclusively view your marked conversations, go to **Filters** > **Flagged Conversation**.

## Auto-identification of conversation issues in logs

The chatbot autonomously tags conversations that could have involved better user interactions. For instance, in the image below, it indicates an unidentified response.

   <img src="https://i.imgur.com/P4hJp7O.png" alt="drawing" width="50%"/>

The bot also tags each conversation like the image below which provides insights into how to improve the bot.

   ![](https://i.imgur.com/a9yNYOq.png)

To check such tags:

1. Check the **Tags** column.

   ![](https://i.imgur.com/16wmuDl.png)

2. Go to the preferred chat and check the conversations.

   ![](https://i.imgur.com/a9yNYOq.png)

3. Go to the respective flow in Studio and make the necessary changes. 
4. Test the bot to see if the changes work.


## Debug conversations

If you have issues in a conversation that you want to understand and fix, turn on logs for that conversation. This aids in gaining a clearer understanding of how to address and rectify the issue. 

To enable logs , click the toggle button on the top.

   <img src="https://i.imgur.com/n5pI7EB.png" alt="drawing" width="60%"/>

## Share conversation logs

You can also provide the link of a specific conversation to other bot users for any discussions.

   <img src="https://i.imgur.com/nxZJuva.png" alt="drawing" width="60%"/>

