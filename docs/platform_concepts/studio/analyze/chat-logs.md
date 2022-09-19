---
title: Conversation Logs
sidebar_label : Conversation Logs
---

## 1. Introduction

Conversation Logs contain interactions of the user with your bot and responses the user received from the bot.  It monitors your bot conversations and automatically tags problematic conversations.  

It helps you better analyze drop-offs, understand user perceptions, and optimise your flows accordingly. For example, you can review conversations to understand if your users are interacting with your bot as intended. It also enhances online chat with a persistent record of information exchanged and decisions reached.



### 1.1 Session

The Yellow.ai platform considers each conversation with a user as a session. Each user has a unique ID called a UID. For each UID, a conversation log is created for all sessions to analyse the complete context. Some logs hold data of upto 5 days of conversations and sometimes there are 3 logs for the conversation with one user.

See the session for each app in the following table -

App | Session Duration
--- | ----------------
Web app | 30 minutes
Whatsapp | 24 hours



![](https://i.imgur.com/NbgQwm4.png)


:::note
The conversation logs are updated everyday at 21:00 LT.
:::

### 1.2 Key features

The following are some key features of the Yellow AI’s Conversation Logs:

* ***Auto-tagging of conversations***:
    There are several predefined tags created based on certain rules. The system tries to identify if there is any problem in a conversation and associates a relevant tag. For example, Long response time, Missing bot response time, Abuse, Unused quick replies, Fallback time exceeded, Human takeover, and unidentified. A conversation can have more than one tag.

![](https://i.imgur.com/zgNdX1L.png)

* ***Quick labeling***:
    You can make use of quick labeling to easily categorize conversations and provide better context to it.

* ***Filter conversations***:
    This makes your life easy when there are too many conversations in the log. You can choose to see specific types of conversations using the various predefined filters. For example, see conversations having a specific journey,  logged on a specific date range, involving specific nodes, drop-offs. and more. To know more, see [here](https://docs.google.com/document/d/1_ThTAqcZo62EayDfH4vV90zZwXZJ0fId/edit#heading=h.hsg2jg34bnxe).



## 2. Filters conversations

As time passes, the conversation log keeps increasing. Filtering your conversations helps you get more specific conversations you would need.

To filter the conversations: 

1. In the Conversation logs tab, click **Filters**.
![](https://i.imgur.com/1VqbO6y.png)

2. Navigate to the filter that you want to apply and select the required option(s). Refer to the following table to know how to use each filter.
3. Click Apply filter.

<img src="https://i.imgur.com/l1VrFlT.png" width="300"/>



| Filter | Description |
| -------- | ------- |
| Date | View conversations of a specific date range. Choose the desired date range using the calendar boxes. |
| Source | View conversations of a specific channel. For example, Yellow.ai, Skype, WhatsApp, Facebook etc. Choose the desired source from the drop-down list. |
| Tags | View specific tagged conversations. There are some predefined tags associated with the conversations automatically according to the configured rules. Select your preferred tags from the list. |
| Flagged Conversation | View either flagged or unflagged conversations. |
| Labels | View conversations having specific labels. |
| Journeys | View conversations that have a specific journey. You can also filter by specific steps and drop-offs. |
| Nodes | Filter conversations containing specific nodes. For example, you can view all conversations that have a phone number. Select multiple nodes if required. |
| Drop-off | View all dropped (incomplete) conversations across all journeys. Select All and apply the filter. |


## 3. Label conversations

Over time, there could be a range of conversations logging in the system - from complaints, product queries, or feedback. To keep a track of different conversations, you can label them appropriately. Eventually, you will get better insights on the intentions of a specific set of users. You can work on optimizing your bot better.

To label a conversation -

1. Open the conversation for which you want to add Label.
2. Click on the **Label** box to see the list of available labels. Either select your preferred label from the existing list or type a new name in the box and press **Enter**.

![](https://i.imgur.com/GIC3Mmm.png)



## 3. Flag conversations

You can flag conversations that you want to revisit later. To see only your flagged conversations, use **Filters** > **Flagged Conversation**.

To flag a conversation - 

1. On the Studio page, click **Analysis** > **Conversation logs**.
2. Navigate to the desired conversation and click on it. You will see the conversation details.
3. Click on the <img src="https://i.imgur.com/W85He8x.png" width="12"/> icon to turn black.
4. Close the widget once done.
![](https://i.imgur.com/esbBRoG.png)


* To unflag a conversation, click on the flag again.



## 4. Troubleshoot bot flow

Now that there are many conversations logged in the system, it becomes easy for you to choose specific conversation(s) using the filters and flags available.

To fix a problem or optimize your bot - 

1. Navigate to the desired conversation and click on it to see the entire conversation. You can see at what interaction the issue was identified (auto-tagging).
2. Go to Studio, open the flow and make the necessary changes to it.
3. Test the bot to see if your changes are reflecting.

<img src="https://i.imgur.com/ZLINu9R.png" width="400"/>

Consider the following example where the system has identified *Long response time* during the interaction with the user. Go back to your flow, identify the reason, and make the necessary changes. Test the bot to see if your intended changes are reflecting.


![](https://i.imgur.com/xFx9i5M.png)

