---
title: Understanding user metrics
sidebar_label : User metrics
---

In this article, we will delve into the concept of user metrics and explore various aspects related to it.

## Overview of user metrics

The user metrics section provides valuable insights about the users of your bot. The following user metrics can be monitored on this page:

| Metric | Description|
| -------- | -------- |
| [User traffic](#traffic) | This metric includes the number of users visiting your bot, the number of messages sent to your bot, and the duration of the chat.|
| [User retention](#retention) | This metric compares the number of new users versus old users.|
| [Users by demographics](#demography) | User data classified based on the location from where the bot is being used. |
| [User retention](#ret) and [User engagement](#eng) trends | This metric analyzes the retention and engagement trends specifically for mobile and web platforms. |
| [WhatsApp consumption](#wac) | This metric provides insights into the consumption patterns of a selected WhatsApp phone number. |


To view user metrics, follow these steps: 

1. Open **Insights** > **Metrics**. 
2. Select **User Metrics** tab. 

![](https://i.imgur.com/Zjiqb99.png)

-----


### Filter data for a specific time period

You can filter and view the metrics for a specific time period by selecting the desired time range from the dropdown menu. For example, you can choose to view the metrics for the last 7 days or the last 90 days. 
- If you want to analyze a custom range, such as from September 21st to September 23rd, click on **Custom** and select the desired range.

<img src="https://i.imgur.com/FzSz7IB.png" alt="drawing" width="40%"/>

----

### Export/Download user data

The following user metrics are available for quick download:
1. User traffic
2. User by demographics
3. Weekly user traffic
4. Chat transcripts
5. User details
6. Notification statuses by campaign ID

To download any of these metrics:
1. Click **Export data**. 
2. Select the required metrics and click **Export Reports**. You can also download all the reports as PDF. 

:::info
For scheduling reports, refer to the steps mentioned [here](https://docs.yellow.ai/docs/cookbooks/insights/schedulerawreports). 
:::

<img  src="https://i.imgur.com/ZtcYRCT.png"  width="60%"/>


-----

#### Download chat conversations 

To download the chat transcripts (conversations between bot/agent and user): 

1. Apply the desired time filter to specify the conversations within that time range.
2. Click **Export data**. 
3. Select **Chat transcripts**. 
4. Click **Export**. 

![](https://i.imgur.com/g77L9hC.png)

-----

### Filter data for different channels

User metrics are measured across all channels. However, if you want to obtain results for specific channels that are activated for your bot, select the desired channel from the **Channel** dropdown menu.

<img src="https://i.imgur.com/gjCGo8e.png" alt="drawing" width="80%"/>

-----


## <a name="traffic"></a> User traffic

> User traffic is calculated for all the channels.

This widget provides comprehensive metrics to understand the user traffic to your bot within a specific timeframe. You can select different headings to view the corresponding graphs for the chosen time range.

![](https://i.imgur.com/gQeEdhH.png)

* **Messages**: This metric represents the number of messages exchanged between the bot, user, and agent. It can be further filtered based on different criteria.

    <img src="https://i.imgur.com/X09IfdT.png" alt="drawing" width="30%"/>

* **Unique users**: This metric shows the total count of unique users who interacted with the bot. It can be filtered for bot users and notification users.
* **New users**: This metric represents the number of users who interacted with the bot for the first time.
* **Sessions**: This shows the number of sessions created by users on the bot.
* **Average session per user**: This metric denotes the average number of sessions created per user.
* **Average session duration**: This metric represents the average duration of user-bot conversations. A session is considered to be of 24 hours, regardless of the number of interactions within that time window. After 24 hours, a new session is initiated.

---

## <a name="retention"></a> User retention

> User retention is calculated for all the channels.

This widget illustrates the distribution between new users and returning users who visit the bot. 
- A new user is someone who visits the bot for the first time.
- A returning user is someone who has visited the bot before.


<img src="https://i.imgur.com/QldTqc7.png" alt="drawing" width="50%"/>


---

## <a name="demography"></a> Users By Demographics


This widget provides insights into the user demographics of your bot based on selected parameters.


### Demography parameters

:::note
Some of these metrics are captured for all sources, while others are specific to limited sources like web & mobile.
:::

The dropdown menu allows you to select various parameters for viewing user demographics, including country, region, device, platform, medium, campaign, and source.

<img src="https://lh3.googleusercontent.com/Elj0328Y4W3MV206Mxu44qP7w7JPic8C9rH5aQNMTc4fRWk81zUzlTiupOK6t7E8Mh0SQ30ziCPP6n9o-G30YFn7W-sPlh0e1zyIIOtzD_PD0WoEWdcFRoX9eqY-AUOKOtDzlRHAR0ZUpkqd6AVk6I-oILL9cAo10HoAGo6OuKYVtEf4cPRlQFdK1zFJow" alt="drawing" width="30%"/>

### Demography data

Users who interact with the bot come from different locations, sources, and campaigns. The total count and percentage of users are shown for the specified date range based on the chosen parameter from the dropdown menu.

**![](https://lh5.googleusercontent.com/zVQdlZrh4ker_GAsEs2pnS-1xrER5vhNYL-DmN8H6M2hYd2m0gqOUTctVvXuuZgHgtsEUFdkhf18Ziauj-IT60ASWcREm1dhnYnuRla7n4Y-S6U48szKsqKqe4nQIW2GbDt5CFXTNGN-A6qKU1kAg1BWqUVOsSVPgFuWeFMc5RE8IASKDsxRvTTkNcxHpw)**

---

## <a name="ret"></a>  User retention trend

> User retention trend is calculated for Web & Mobile.

This widget demonstrates the types of users who visit the bot within a specific timeframe. A user who engages with the bot for the first time is categorized as a **user-visited**, while a returning user is categorized as a **user-revisited**.

**![](https://lh4.googleusercontent.com/FjEtm5x8npgIPc9b3AzRuwjn1nonrpu7mxBGSXg0tPV_6orpBpDR4mAXMt3NuLTYuIZX_-oMu1Gqxntdz8PvDeNQqwjoq4Z5jOpYTP1z4vzaqq9ONuo5g5NG99GQMVG0PpVqY9Uz1NABjTSbWVBQxYva2iYcYrvbsJJymE_CQx9aArahGeiLtgvaLxSFLA)**

-----

## <a name="eng"></a> User engagement trend

> User engagement trend is calculated for Web & Mobile.

The widget visualizes the different stages of user engagement through a funnel, highlighting the number of users at each stage. 
- The blue line represents the number of times the bot was loaded, indicating the total visits to the bot. 
- The green line represents the number of users who started with an intent or flow, indicating the number of users who initiated a conversation or interaction. 
- The purple line represents the number of users who completed at least one intent or flow, indicating the number of users who successfully completed an interaction or achieved their goal.

The widget allows you to analyze the conversion rates between each stage of engagement, providing insights into how effectively users progress through the interaction funnel.


**![](https://lh3.googleusercontent.com/anORKlWAhLV_lFakMJ6HJguQl-oypc8xnYqZhnPcdPhhuz7EwzTHKNVVEAQ0jdvIp96sGjgTmW0XmWy_P2mEANuWdkb-_Jh6FFqWMvB77puhRoE4v3r4W4BB0J_R_nSppVVZRg2gG6k0R8gSbHTcVtdH05cWUGtmQBpSU5DwLdObjc99wmgfaHhQ6HNajg)**

----

## <a name="wac"></a> WhatsApp comsumption

> WhatsApp comsumption is calculated only for WhatsApp bots.


In the WhatsApp comsumption widget, you can select a WhatsApp phone number from the dropdown to see the consumption for that specific number.    
If no number is selected, the data will be compiled and displayed for all the numbers collectively.


<img src="https://hackmd.io/_uploads/H1J0UVwwn.png" alt="drawing" width="50%"/> 

The three categories tracked for WhatsApp phone numbers are:

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

:::note
Prior to June 1, 2023, only the main categories of Business-initiated, User-initiated, and Referral conversations were tracked without the subcategories. However, with the [WhatsApp update](https://developers.facebook.com/docs/whatsapp/updates-to-pricing), the subcategories (Authentication, Marketing, Utility, Service, and Referral conversations) are now included in the widget.
Here are a few points to note:
1. If you select a time period before June 1, 2023, you won't see the updated subcategories in the widget.
2. If your custom date range includes both dates before and after June 1, 2023, the updated categories will be applied to the entire range. The subcategories will be available only for the data generated after June 1, 2023.
3. Due to these updates, there might be a mismatch in the data when comparing periods before and after June 1, 2023.
:::


