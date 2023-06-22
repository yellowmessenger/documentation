---
title: User metrics
sidebar_label : User metrics
---

In this article, you will learn in detail about user metrics. 

User metrics section is used to learn about the bot users. The following user metrics can be monitored on this page: 
1. [User traffic](#traffic): Number of users visiting your bot, Number of messages sent to your bot, duration of the chat, etc. 
2. [User retention](#retention): Number of new users vs. old users. 
3. [Users by demographics](#demography): User classification based on the location the bot is being used from. 

---

To view user metrics, follow the given steps: 

1. Open **Insights** > **Metrics**. 
2. Select **User Metrics** tab. 

![](https://i.imgur.com/Zjiqb99.png)

## 1. User metrics available as widgets 

### <a name="traffic"></a> User traffic

This widget covers all the primary metrics needed to understand user traffic to your bot in a given timeframe.
Select any of the below headings to view the graphs for the selected time range. 

![](https://i.imgur.com/gQeEdhH.png)

* **Messages**: This is the number of messages exchanged between the bot, user, and agent. These can be filtered for:

<img src="https://i.imgur.com/X09IfdT.png" alt="drawing" width="30%"/>



* **Unique users**: This shows the unique number of users who conversed with the bot (can be filtered for bot users and notification users).
* **New users**: This is the number of users who conversed with the bot for the first time.
* **Sessions**: This shows the number of sessions created by users on the bot.
* **Average session per user**: This is the number of sessions created per user on average.
* **Average session duration**: This is the average time for which the user has conversed with the bot. A session can be of 24 hours. For any number of interactions the user has in a 24 hours window from the start of a session, it'll be considered as one single session only. A new session is started after 24 hours.

#### Download chat conversations 

To download the chat transcripts (conversations between bot/agent and user): 
1. Apply the time filter (all the conversations within this time range will get exported). 
2. Click **Export data**. 
3. Select **Chat transcripts**. 
4. Click **Export**. 

![](https://i.imgur.com/g77L9hC.png)


---

### <a name="retention"></a> User retention

This widget shows the distribution between new users and old users visiting the platform. Any user who comes to the bot for the first time is categorized as a new user, and from their second visit onwards they are considered as a returning user.

> This is calculated for all the channels.

<img src="https://i.imgur.com/QldTqc7.png" alt="drawing" width="50%"/>


---

### <a name="demography"></a> Users By Demographics


This widget shows user demographics for a bot based on the selected parameter.

#### Demography parameters

:::note
Some of these metrics are captured for all the sources and some for limited sources like - UTM-based users are for Yellow Web & Mobile only.
:::

The drop-down field allows you to select from the multiple parameters for viewing user demographics - country, region, device, platform, medium, campaign, and source.


<img src="https://lh3.googleusercontent.com/Elj0328Y4W3MV206Mxu44qP7w7JPic8C9rH5aQNMTc4fRWk81zUzlTiupOK6t7E8Mh0SQ30ziCPP6n9o-G30YFn7W-sPlh0e1zyIIOtzD_PD0WoEWdcFRoX9eqY-AUOKOtDzlRHAR0ZUpkqd6AVk6I-oILL9cAo10HoAGo6OuKYVtEf4cPRlQFdK1zFJow" alt="drawing" width="30%"/>

#### Demography data

Users who interact with the bot are coming from different locations, sources, and campaigns.
The total count and percentage of users is shown for the specified date range based on the chosen parameter from the above dropdown.

**![](https://lh5.googleusercontent.com/zVQdlZrh4ker_GAsEs2pnS-1xrER5vhNYL-DmN8H6M2hYd2m0gqOUTctVvXuuZgHgtsEUFdkhf18Ziauj-IT60ASWcREm1dhnYnuRla7n4Y-S6U48szKsqKqe4nQIW2GbDt5CFXTNGN-A6qKU1kAg1BWqUVOsSVPgFuWeFMc5RE8IASKDsxRvTTkNcxHpw)**

---

### User retention trend

This widget shows the kind of users visiting the bot within a given timeframe. If a user converses with the bot for the first time, he/she is counted as user-visited. If the user has visited the bot before and is a returning user, then it's categorized as a user-revisited session.

> This is calculated for Yellow Web & Mobile.

**![](https://lh4.googleusercontent.com/FjEtm5x8npgIPc9b3AzRuwjn1nonrpu7mxBGSXg0tPV_6orpBpDR4mAXMt3NuLTYuIZX_-oMu1Gqxntdz8PvDeNQqwjoq4Z5jOpYTP1z4vzaqq9ONuo5g5NG99GQMVG0PpVqY9Uz1NABjTSbWVBQxYva2iYcYrvbsJJymE_CQx9aArahGeiLtgvaLxSFLA)**

-----

### User engagement trend

This widget shows the funnel of users who are coming to the bot. The blue lines tell you about the number of times the bot was loaded, and the green and purple lines tell you about the number of people who started with an intent (flow) and at least completed one intent (flow) respectively.

> This is calculated for Yellow Web & Mobile.

**![](https://lh3.googleusercontent.com/anORKlWAhLV_lFakMJ6HJguQl-oypc8xnYqZhnPcdPhhuz7EwzTHKNVVEAQ0jdvIp96sGjgTmW0XmWy_P2mEANuWdkb-_Jh6FFqWMvB77puhRoE4v3r4W4BB0J_R_nSppVVZRg2gG6k0R8gSbHTcVtdH05cWUGtmQBpSU5DwLdObjc99wmgfaHhQ6HNajg)**

----

### WhatsApp comsumption

In the WhatsApp comsumption widget, you can select a WhatsApp phone number from the dropdown to see the consumption for that specific number. If no number is selected, the data will be displayed for all the numbers combined.

<img src="https://hackmd.io/_uploads/H1J0UVwwn.png" alt="drawing" width="50%"/> 

The three tracked categories for WhatsApp phone numbers are:

| Category                         | Sub category    | Description |
| -------------------------------- | --- | ----------- |
| **Business-initiated conversations** |     |  Conversations initiated by the bot or business to provide information, send notifications, or engage with users based on predefined triggers or events.        |
||Authentication | Indicates the business initiated the conversation with a message template categorized as AUTHENTICATION. |
||Marketing | Indicates the business initiated the conversation with a message template categorized as MARKETING.|
||Utility | Indicates the business initiated the conversation with a message template categorized as UTILITY.|
| **User-initiated conversations**     |     |   Conversations initiated by users who send messages or queries to the bot, seeking information or assistance.          |
||Service | Indicates the user initiated the conversation. |
|| Referral conversion | Indicates the user initiated the conversation by clicking a **Click to WhatsApp ad** or a Facebook Page **Call-to-Action** button.|
| **Referral Initiated**           |     |  Conversations that occur when users refer the bot to others, allowing the bot to initiate personalized conversations with those referred contacts.           |

> The WhatsApp consumption is calculated specifically for the WhatsApp channel. 

:::note
Prior to June 1, 2023, only the main categories of Business-initiated, User-initiated, and Referral conversations were tracked without the subcategories. However, with the [WhatsApp update](https://developers.facebook.com/docs/whatsapp/updates-to-pricing/launch-timeline#june-1--2023), the subcategories (Authentication, Marketing, Utility, Service, and Referral conversations) are now included in the widget.
Here are a few points to note:
1. If you select a time period before June 1, 2023, you won't see the updated subcategories in the widget.
2. If your custom date range includes both dates before and after June 1, 2023, the updated categories will be applied to the entire range. The subcategories will be available only for the data generated after June 1, 2023.
3. Due to these updates, there might be a mismatch in the data when comparing periods before and after June 1, 2023.
:::

--------

## 2. Actions on user metrics


### Filter data for a period

- All the metrics can be filtered and viewed for a period of time by selecting the time from the drop-down (for example, last 7 days, last 90 days). 
- If you want to see the metrics for a custom range (for example 21st Sept to 23rd Sept), click **Custom** and select the range. 

    <img src="https://i.imgur.com/FzSz7IB.png" alt="drawing" width="40%"/>

----

### Schedule data export/export data 

To download any of these metrics:
1. Click **Export data**. 
2. Select the required metrics and click **Export Reports**. You can also download all the reports as PDF. 
3. Click [here](https://docs.yellow.ai/docs/cookbooks/insights/schedulerawreports) for steps to schedule these reports. 
    <img  src="https://i.imgur.com/ZtcYRCT.png"  width="70%"/>

#### User metrics available for quick download

1. User traffic
2. User by demographics
3. Weekly user traffic
4. Chat transcripts
5. User details
6. Notification statuses by campaign ID

-----

### View metrics for different channels

- These metrics are measured for all the channels. If you want to obtain results for any of the specific channels (that are activated for your bot), select the required channel from the channel dropdown. 

    <img src="https://i.imgur.com/gjCGo8e.png" alt="drawing" width="80%"/>


