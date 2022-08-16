---
title: Conversation Logs
sidebar_label : Chat Logs
---


Online chat has become an important part of business communication in recent years. To help improve the customer experience and continually monitor their interaction, a system is in place called ‘Conversation Logs’. As the name suggests, it provides a log of conversations of all the customers. Following are some of the features provided by our in house tool - Conversation Logs. Conversation logs enhance online chat with a persistent record of information exchanged and decisions reached.

Conversation Logs contain interactions of the user with your bot and responses the user received from the bot.  It monitors your bot conversations and automatically tags problematic conversations.  It helps you better analyze drop-offs, understand user perceptions, and optimize your flows accordingly. For example, you can review conversations to understand if your users are interacting with your bot as intended.

It can be found in this [link](https://cloud.yellow.ai/bot/<Bot_Id>/studio/chat-logs)


![](https://i.imgur.com/NbgQwm4.png)


The conversation logs are updated everyday at 21:00 LT.


The following are some key features of the Yellow AI’s Conversation Logs:

* ***Auto-tagging of conversations***:
    There are several predefined tags created based on certain rules. The system tries to identify if there is any problem in a conversation and associates a relevant tag. For example, Long response time, Missing bot response time, Abuse, Unused quick replies, Fallback time exceeded, Human takeover, and unidentified. A conversation can have more than one tag.

![](https://i.imgur.com/zgNdX1L.png)

* ***Quick labeling***:
    You can make use of quick labeling to easily categorize conversations and provide better context to it.

* ***Filter conversations***:
    This makes your life easy when there are too many conversations in the log. You can choose to see specific types of conversations using the various predefined filters. For example, see conversations having a specific journey,  logged on a specific date range, involving specific nodes, drop-offs. and more. To know more, see [here](https://docs.google.com/document/d/1_ThTAqcZo62EayDfH4vV90zZwXZJ0fId/edit#heading=h.hsg2jg34bnxe).



### Filters Conversations

As time passes, the conversation log keeps increasing. Filtering your conversations helps you get more specific conversations you would need.

To filter the conversations: 

1. On the top-right of the Conversation Logs page, click Filters.
2. Navigate to the filter that you want to apply and select the required option(s). Refer to the following table to know how to use each filter.
3. Click Apply filter.


| Filter | Description |
| :-------- | :-------: |
| Date | View conversations of a specific date range. Choose the desired date range using calendar boxes |
| Source | View conversations of a specific channel. For example, Yellow Messenger, Skype, WhatsApp, Facebook etc. Choose the desired source from the drop-down list |
| Tags | View specific tagged conversations. There are some predefined tags associated with the conversations automatically according to the configured rules. Select your preferred tags from the list |
| Flagged Conversation | View either flagged or unflagged conversations |
| Labels | View conversations having specific labels |
| Journeys | View conversations that have a specific journey. You can also filter by specific steps and drop-offs |
| Nodes | Filter conversations containing specific nodes. For example, you can view all conversations that have a phone number. Select multiple nodes if required |
| Drop-off | View all dropped (incomplete) conversations across all journeys. Select All and apply the filter |


### Label conversations

Over time, there could be a range of conversations logging in the system - from complaints, product queries, or feedback. To keep a track of different conversations, you can label them appropriately. Eventually, you will get better insights on the intentions of a specific set of users. You can work on optimizing your bot better.

To label a conversation -

1. Open the conversation for which you want to add Label
2. Click on the Label box to see the list of available labels. Either select your preferred label from the existing list or type a new name in the box and press Enter.


### Flag conversations

You can flag conversations that you want to revisit later. To see only your flagged conversations, use Filters > Flagged Conversation.

To flag a conversation - 

1. On the Studio page, click More > Conv. logs.
2. Navigate to the desired conversation and click on it. You will see the conversation details widget.
3. Click on the flag icon to turn red.
4. Close the widget once done.


:::info
:information_source: You can unflag a conversation by clicking on the flag again.
:::



### Troubleshoot your bot flow

Now that there are many conversations logged in the system, it becomes easy for you to choose specific conversation(s) using the filters and flags available.

To fix a problem or optimize your bot - 

1. Navigate to the desired conversation and click on it to see the entire conversation. You can see at what interaction the issue was identified (auto-tagging).
2. Go to Studio, open the flow and make the necessary changes to it.
3. Test the bot to see if your changes are reflecting.

For example, consider the following example where the system has identified a Long wait time to respond when the user clicked on Nodes. Go back to your flow, identify the issue, and make the necessary changes. Test the bot to see if your intended changes are reflecting.