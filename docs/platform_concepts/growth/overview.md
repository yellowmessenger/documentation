---
title: Yellow.ai's insights overview to monitor your chatbot
sidebar_label: Chat bot insights
---

In this article, you will learn about the key metrics you can track on the **Insights Overview** page which summarizes how your bot is functioning. 

## 1. Introduction to chatbot overview

To **access** the insights overview page, click on **Insights** in the Overview switcher.

![](https://hackmd.io/_uploads/Byf19t_vn.png)


:::note 
- On this overview page, you can analyze all the data collected by the bot as part of the **default metrics**. 
- The type and color of the graphs are **not customizable**.    
- The timezone used for calculation is always the **bot timezone**.
- Any **custom data** will not be reflected in the graphs and charts. Learn how to analyse custom data [here](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/customtables). 
::: 

### Summarized metrics data

| Widget                       | Description   |
| ---------------------------- | ------- |
| [User Traffic](#1)           | Tracks the unique number of bot users, total messages exchanged, sessions initiated by users, and average time spent by users per session.                                            |
| [Real time bot activity](#2) | Provides real-time monitoring of bot activities, allowing you to observe and analyze the bot's performance as conversations happen.                                                |
| [User acquisition](#3)             | Analyzes the channels used by users and user acquisition from different systems, providing insights into the sources of new users.                                          |
| [Unique users by country](#4)      | Analyzes the geography of new users, allowing you to understand the distribution of users across different countries.     |
| [User activity by time](#5)        | Analyzes user engagement and activity over time, allowing you to identify patterns, peak usage periods, and measure bot performance.  |
| [Users by device](#6)              | Analyzes the devices used by users for bot conversations, providing insights into the types of devices preferred by users. |
| [Bot Performance](#7)              | Monitors bot performance by understanding bot accuracy, analyzing flow completion rate (FCR), and tracking deflection rate (the rate at which users are redirected to human support). |
| [User Feedback](#8)                | Analyzes user feedback and measures customer satisfaction to gauge the overall quality of the bot's interactions.       |
| [Top flows visited](#9)            | Provides a summary of the conversation flows traversed by users, helping you understand the typical paths users take within the bot.|
| [Conversation issues](#10)          | Enables the understanding and analysis of issues in conversations, providing an overview of conversational issues and offering insights to resolve them.    |
| [WhatsApp consumption](#11) |	Tracks the consumption of WhatsApp bots, allowing you to measure and analyze usage metrics specific to WhatsApp channels. |

> All these metrics are explained in detail in the next section. 


### Filter metrics for a time period

All the metrics can be filtered and viewed for a period of time by selecting the time from the drop-down (for example, last 7 days, last 90 days). 
- If you want to see the metrics for a custom range (for example 21st Sept to 23rd Sept), click **Custom** and select the range. There is no restriction on the date selection, however, the data will be displayed for the date of generation.  

<img src="https://i.imgur.com/cAq1z5N.png" alt="drawing" width="70%"/>      


### <a name="fil"></a> Filter metrics for channels

These metrics are measured for all the channels. If you want to obtain results for any of the specific channels (that are activated for your bot), select the required channel from the channel dropdown.      

<img src="https://i.imgur.com/Am22nJN.png" alt="drawing" width="100%"/>      


### Export analytics data

You can download the following data from the insights page:

* User traffic
* Real time bot activity
* User activity by time
* User acquisition
* Unique users by country
* Users by device
* Bot performance
* Top flows visited
* User feedback

To download (export) specific data from the insights page, follow these steps:

1. Click on **Export data**.
2. Select the desired metrics from the available options and click **Export Reports**. You can choose to download all the reports as a excel file.
3. For instructions on how to schedule these reports, click [here](https://docs.yellow.ai/docs/cookbooks/insights/schedulerawreports).

<img src="https://hackmd.io/_uploads/S1XN75dPn.png" alt="drawing" width="70%"/>      



---------------------

## 2. Chatbot metrics explained  

This section provides an explanation of all the widgets available on the Insights overview page.

:::info
**Comparison between two time ranges**

- To benchmark the performance, the same metric is calculated for the selected duration and a similar duration prior to the start date. The metrics for the selected duration are represented by a bold line, while the metrics for the previous duration are represented by a dotted line.
- The % values displayed in a smaller font (in green/red) represent the difference in metrics between the two time ranges. For example, it shows the growth or decline of unique users in the selected time range (this week) compared to the previous time range (last week).

    <img src="https://i.imgur.com/ExglSe8.png" alt="drawing" width="60%"/>

:::



### <a name="1"></a> User traffic


Number of **Users, Messages, Sessions and Session duration** is used to identify user traffic. 

<img src="https://hackmd.io/_uploads/BkuEGqOw2.png" alt="drawing" width="50%"/>    

|Metric|  Description |  Calculation |Use cases |
|---|  ---- |   ---- | ---- |
|**Users** | Users tab shows the unique number of users who conversed with the bot.|User widget data is the unique count of users from the list of messages exchanged on the bot. It is calculated using the [hyperloglog](https://en.wikipedia.org/wiki/HyperLogLog) algorithm.| Measure the bot's reach and popularity through unique user count. <br/>  <br/>Monitor changes in user count to track bot adoption and growth.|
|**User traffic**| Messages tab shows the total number of messages exchanged, along with the bifurcation of those exchanged with the bot and users (messages exchanged between bot and user) and live agents and users (messages exchanged between agent and user). | Message tab data is the sum of all the messages exchanged. The count includes user, bot, agent, and notification messages. |  Gain insights into communication volume and patterns between users, the bot, and live agents. <br/><br/> Track engagement and interaction levels to improve communication channels.
| **Sessions** | Session tab provides an overview of user sessions, including the total number of sessions created. It also offers two types of session counts: <br/> **Bot-only sessions**: Sessions entirely handled by a bot. <br/> **Sessions with both bot and live agent**: Sessions that involve a combination of bot interactions and interactions with a live agent. |Session data is the sum of all the sessions created by the user in the selected period. |Get an overview of user sessions, including bot-only sessions and sessions with both bot and live agent. <br/><br/> Monitor user engagement patterns and balance between bot and live agent interactions. | 
|**Session duration** | Session duration provides average time spent by the users conversing with the bot. <br/> A session can be of 24 hours. A new session is started after 24 hours. <br/> For any number of interactions the user has in a 24 hours window from the start of a session, it'll be considered as one single session only. | Session duration is the average of the total time users conversed with the bot by the total number of sessions. This metric is captured for all the sources. |  Analyze average session duration to understand user engagement and satisfaction levels. <br/><br/>  Use session duration as a metric to assess and improve the bot's effectiveness over time.|

> User traffic is calculated for all the channels.


--------

### <a name="2"></a> Real time bot activity



This widget provides real-time monitoring of the bot's usage activity and the flows triggered by users. The following values are displayed:
- **Active users right now**: Active users shows the aggregated frequency of unique users in minute granularity for the past 30 minutes.
- **Users per minute**: For each flow, the start event is recorded and displayed here, showing the count of those start events for each flow within the last hour.

    <img src="https://i.imgur.com/2TNnwNq.png" alt="drawing" width="40%"/>

> Real-time bot activity is calculated for all the channels.

------

### <a name="3"></a> User acquisition

User acquisition widget shows the count of unique users conversing with the bot from various sources.

<img src="https://hackmd.io/_uploads/HyC1f5uD2.png" alt="drawing" width="50%"/>

|Metric|  Description | Use cases |
|---|  ---- |   ---- | 
|**Traffic channels** <br/> <br/> (Calculated for all the channels)|  The frequency of unique users messaging the bot is categorized by source (traffic channel) and aggregated into daily buckets for the chosen date range. |  **User acquisition analysis**: Assess the effectiveness of traffic channels in acquiring new users. <br/> <br/>**Channel performance evaluation**: Evaluate the performance of different channels based on daily user frequency. |
| **Platform/Medium**  <br/><br/> (Calculated for Yellow Web & Mobile) | The frequency of unique users messaging the bot is categorized based on the device they originate from and aggregated into daily buckets within the specified date range. <br/><br/>**Note**: The count may be significantly lower compared to the total number of users, as other channels such as WhatsApp and Facebook do not provide device data. Therefore, the graph only represents users on the Yellow.ai bot.| **Platform/Medium analysis**: Analyze user frequency based on device or platform to tailor bot features and optimize user experience. <br/> <br/> **Platform/Medium comparison**: Compare user engagement across platforms to inform resource allocation and marketing strategies.|

-----

### <a name="4"></a> Unique users by country 

<img src="https://i.imgur.com/mQK60AQ.png" alt="drawing" width="60%"/>

| Metric |  Description | Calculation logic | Use cases|
|  ---- | ---- | ---- | ---- |
| **Unique users by country** | This widget shows the count of unique users conversing with the bot from various countries (demography/location). The top 5 countries and their percentage contributions are shown. | **Unique users by country is calculated** by capturing the IP address of the user which is then translated to a standard location using the standard ip2location database. | **Geographical user analysis**: Understand user distribution across countries to inform regional strategies. <br/> <br/>  **Localization and targeting**: Tailor content and features based on the unique users by country data. |    
> Yellow Web & Mobile are the only channels for which an IP Address can be captured hence, unique users by country is calculated for **Yellow Web & Mobile**.

:::note
The count may be significantly lower compared to the total number of users since it shows users only from the source - Yellow Web & Mobile.
:::

-----

### <a name="5"></a> User activity by time

<img src="https://i.imgur.com/T2u93Ao.png" alt="drawing" width="60%"/>


| Metric |  Description | Calculation logic | Use cases |
|  ---- | ---- | ----------- |   ---- |
| **User activity by time** | The graph displays the user frequency over a specific period, organized by the day of the week and time of day. By exporting this data for a desired time range, such as the last 7 days, you can analyze when user activity was at its highest and lowest points. | User activity by time is calculated by aggregating the number of unique users who interacted with the bot within each hourly interval for the selected period. | **Resource allocation**: Identify peak user activity hours to allocate resources effectively and ensure prompt responses to user inquiries. <br/> <br/>**Scheduled maintenance**: Determine low-activity hours to schedule maintenance activities, minimizing service disruption for users. <br/><br/> **Marketing campaigns**: Identify optimal hours with high user engagement and conversion rates for launching targeted marketing campaigns.

> User activity is calculated for all the channels.

----

### <a name="6"></a> Users by device 

<img src="https://hackmd.io/_uploads/BJqN0hODh.png" alt="drawing" width="50%"/>

| Metric |  Description | Calculation logic | Use cases|
|  ---- | ---- | ---- | --- |
| **Users by device** | Users by device widget shows the different kinds of user devices from which the bot was accessed. | The frequency of unique users conversing with the bot is segregated based on the device they use and aggregated for the selected date range. |  Device usage analysis: Analyze user distribution across different devices for optimization. <br/> <br/> Device specific optimization: Optimize user experience based on device-specific data.|

> Users by device is calculated for Yellow Web & Mobile.       
> Device details are available only for the Yellow Web & Mobile source because other channels like WhatsApp, Facebook, etc. do not share this data.


----

### <a name="7"></a> Bot performance

**Bot performance widget** shows the bot's performance based on the accuracy of the bot in identifying customer intents, flow start, flow end, and drop-offs. This can be used to understand how accurately the bot is serving the user queries.

<img src="https://i.imgur.com/2fMs9iy.png" alt="drawing" width="60%"/>

|Metric|  Description |  Calculation |
|---|  ---- |   ---- | 
| **Bot accuracy** |  Bot accuracy shows you the percentage of user messages that are identified by the bot (with a certain amount of confidence). | **Bot accuracy** = `[1 - (Unidentified user messages / Total User Messages)]*100` | 
|**Flow completion rate** | Flow completion rate is a measure of how many customer intents are being fulfilled by the bot for every 100 intents started by the users.| For every flow the user takes, the flow started and the flow completed event is being triggered. <br/><br/>  **Flow completion rate**: `[(Flow Completed Events) / (Flow Started Events)]* 100` |
| **Deflection rate** | The deflection rate is the % age of queries that the bot was able to resolve without transferring the chat to a live agent. This is a measure of self-serve enabled by the bot. <br/> <br/> **Note**: **Human takeover** rate is now replaced with **Deflection rate** because it is a better indication of the bot's performance.| For every conversation that happens on the bot, a human takeover event is triggered when the user requests for or is automatically transferred to a live agent. This metric is a count of all the sessions that do not have this human takeover event. <br/><br/>  **Deflection rate** = `(Bot sessions without agent handover / Total sessions) * 100` |

> Bot performance is calculated for all the channels.

----------

### <a name="8"></a> User feedback (CSAT)

**CSAT** widget shows the **Customer satisfaction (CSAT)** score given by users for the **bot** and **agent sessions**. Both of these scores are on a scale of 0 to 5. 
The graph shows a comparison of user feedback on bot session vs agent session at the day level for the selected timeframe.

<img src="https://lh5.googleusercontent.com/pEwKhxwpRidsJWDxu3mksdvv-hJ3fpl40s1pHCXnCvBO8t4U45ezuJ4uzgLJUQe-4_rMFZAIvLyofJkU_TjkCLjutJnZm9H9qwtCUlLNFIXGunqFH0Qs5jrn2nl5XEncrzm6gyxH2fkzGeBuBzGphiTe-wtz3klVVM7if3Umpn78EnErBcHMRF500CMGow" alt="drawing" width="60%"/>

:::info
Learn more on how to track CSAT for your bot [here](https://docs.yellow.ai/docs/cookbooks/insights/botagentfedback#4-view-user-feedback-on-insights).

- CSAT is calculated for **Bot** interaction where Feedback node is used.
- CSAT is calculated for **Agent** interaction when Inbox CSAT is enabled. 
:::

-----

###  <a name="9"></a> Top flows visited


<img src="https://hackmd.io/_uploads/Skbm9huDn.png" alt="drawing" width="60%"/>


| Metric |  Description | Calculation logic |
|  ---- | ---- | ---- | 
| **Top flows visited** | Top flows visited widget shows the frequently triggered flows by the users and the average time users took to complete these flows. <br/><br/> On this widget you can see, name of the flow, the number of times this flow was visited in the selected time range and the average number of seconds a customer stayed on the flow (time taken within the flow). | For every flow, the completion event is triggered. The count of those completed events along with the time it took to complete those events is shown here for the selected duration. |

> Top flows visited is calculated for all the channels.


:::info
Detailed report on flows visited can be viewed on the [Funnels](https://docs.yellow.ai/docs/platform_concepts/growth/funnels) section.
:::

----

### <a name="10"></a> Conversational issues 

:::info
Click [here](https://docs.yellow.ai/docs/cookbooks/insights/convissue) for a detailed guide on how to analyse conversational issues. 
:::

On the **Conversational issues** widget, the analytics based on the [conversation logs](https://docs.yellow.ai/docs/platform_concepts/studio/analyze/chat-logs) (studio). 

- You can select the **Overview/Analyse** tab and understand the conversational issues. 
![](https://hackmd.io/_uploads/S1wFOc_Ph.png)

- At the end of the widget, you can analyze the metrics for the selected date range. To see these conversations, click **View conversation logs**, you will be directed to the **Studio > Conversation logs** page.  
![](https://i.imgur.com/ALU3xMi.png)



|  Tab | Description | 
|  ---- | ----------- |  
| **Overview** | This is a time-series view of the priority issues identified in your bot-user conversations. <br/> <br/> **Messages with issues** represents the percentage of messages where the above issues have been identified out of the total messages exchanged between the user and bot. <br/> <br/> **Users affected** is the percentage of total users that faced one or more of the issues while conversing with the bot.  |
| **Analyse** |  Select the **Analyse** tab to see a detailed view of conversation issues along with their severity and count of total occurrences.  <br/><br/>Four **common issues**: Unidentified user response, Missing bot response, Validation limit exceeded and Fallback limit exceeded encountered by the bot are listed along with the **Suggested next steps**. <br/><br/> To **resolve** these issues, you can click on each issue to get redirected to the conversation logs where those issues have been identified. These conversations are filtered for the selected parameters, that is, applied date range and tag (identified issue). |




-----

### <a name="11"></a> WhatsApp comsumption

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