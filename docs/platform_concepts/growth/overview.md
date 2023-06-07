---
title: Explore bot performance on insights 
sidebar_label: Chat bot insights
---

In this article, you will learn about the key metrics you can track on the **Insights Overview** page which summarizes how your bot is functioning.

**Access insights overview page:**

- Click **Insights** from the Overview switcher, you will land on the insights **Overview** page. 
    ![](https://i.imgur.com/iSPi6HX.png)

:::note 
- Conversations taking place only after the **welcome message** will be considered for calculations. 
- On this Overview page, you can analyse all the **default data** collected by the bot. **Custom data** will not be reflected on any of the graphs. 
::: 

**Summarized metrics data**

| Widget |	Description |
| --- | ---- |
| User Traffic	| Tracks the unique number of bot users, total messages exchanged, sessions initiated by users, and average time spent by users per session.|
| Live Monitoring|Provides real-time monitoring of bot activities, allowing you to observe and analyze the bot's performance as conversations happen.|
| Source of New Users |	Analyzes the channels used by users and user acquisition from different systems, providing insights into the sources of new users. |
|Country Analysis |	Analyzes the geography of new users, allowing you to understand the distribution of users across different countries. |
| Device Analysis|	Analyzes the devices used by users for bot conversations, providing insights into the types of devices preferred by users.|
|Engagement & User Activity by Time	| Analyzes user engagement and activity over time, allowing you to identify patterns, peak usage periods, and measure bot performance. |
|Bot Performance	|Monitors bot performance by understanding bot accuracy, analyzing flow completion rate (FCR), and tracking deflection rate (the rate at which users are redirected to human support).|
|User Feedback/Customer Satisfaction (CSAT)	| Analyzes user feedback and measures customer satisfaction to gauge the overall quality of the bot's interactions.|
| Summary of Flows	|Provides a summary of the conversation flows traversed by users, helping you understand the typical paths users take within the bot.|
| Conversation Analysis	|Enables the understanding and analysis of issues in conversations, providing an overview of conversational issues and offering insights to resolve them.|
|WhatsApp Bot Consumption |	Tracks the consumption of WhatsApp bots, allowing you to measure and analyze usage metrics specific to WhatsApp channels.


---------------------

## 1. Track sources of user traffic

Number of **Users, Messages, Sessions and Session duration** is used to identify user traffic. 
Benchmarking is done by calculating the same metric over the selected duration as well as for a similar duration before the start date. Selected duration and previous duration are then compared.
The bold line represents the metric for the current duration and the dotted line represents metrics for the previous duration.

> User traffic is calculated for all the channels.

-------

### Unique number of bot users

**User traffic - Users widget**

|  Description | Calculation logic | Use cases |
|  ---- | ----------- |   ---- |
| **Users tab on the user traffic widget** shows the unique number of users who conversed with the bot.|  User widget data is the unique count of users from the list of messages exchanged on the bot. It is calculated using the [hyperloglog](https://en.wikipedia.org/wiki/HyperLogLog) algorithm.| - Measure the bot's reach and popularity through unique user count. <br/>  - Monitor changes in user count to track bot adoption and growth.|

<img src="https://i.imgur.com/VULdkRo.png" alt="drawing" width="60%"/>    

-----

### Total messages exchanged

**User traffic - Message widget**      

|  Description | Calculation logic | Use cases |
|  ---- | ----------- |   ---- |
| **Messages tab on the user traffic widget** shows the total number of messages exchanged, along with the bifurcation of those exchanged with the bot and users (messages exchanged between bot and user) and live agents and users (messages exchanged between agent and user). | Message tab data is the sum of all the messages exchanged. The count includes user, bot, agent, and notification messages. | - Gain insights into communication volume and patterns between users, the bot, and live agents. <br/> - Track engagement and interaction levels to improve communication channels.

<img src="https://i.imgur.com/ox2R4sE.png" alt="drawing" width="60%"/>

-------

### Sessions initated by the users

**User traffic - Session widget**      


|  Description | Calculation logic | Use cases |
|  ---- | ----------- |   ---- |
| **Sessions tab on the user traffic widget** provides an overview of user sessions, including the total number of sessions created. It also offers two types of session counts: <br/> **Bot-only sessions**: Sessions entirely handled by a bot. <br/> **Sessions with both bot and live agent**: Sessions that involve a combination of bot interactions and interactions with a live agent. | Session data is the sum of all the sessions created by the user in the selected period. | - Get an overview of user sessions, including bot-only sessions and sessions with both bot and live agent. <br/> - Monitor user engagement patterns and balance between bot and live agent interactions. |

<img src="https://i.imgur.com/F008VRJ.png" alt="drawing" width="60%"/>

--------

### Average time spent by the user per session 

**User traffic - Session duration widget**    


|  Description | Calculation logic | Use cases |
|  ---- | ----------- |   ---- |
| **Session duration tab on the user traffic widget** provides average time spent by the users conversing with the bot. <br/> A session can be of 24 hours. A new session is started after 24 hours. <br/> For any number of interactions the user has in a 24 hours window from the start of a session, it'll be considered as one single session only. | Session duration is the average of the total time users conversed with the bot by the total number of sessions. This metric is captured for all the sources. | - Analyze average session duration to understand user engagement and satisfaction levels. <br/> - Use session duration as a metric to assess and improve the bot's effectiveness over time.|

<img src="https://i.imgur.com/ilgYdP9.png" alt="drawing" width="60%"/>

--------

## 2. Live monitoring of bot activities

This widget provides real-time monitoring of the bot's usage activity and the flows triggered by users. The following values are displayed:
- **Real time active users**: Active users shows the aggregated frequency of unique users in minute granularity for the past 30 minutes.
- **Real times flow triggered**: For each flow, the start event is recorded and displayed here, showing the count of those start events for each flow within the last hour.

> Real-time bot activity is calculated for all the channels.

<img src="https://i.imgur.com/2TNnwNq.png" alt="drawing" width="40%"/>

------

## 3. Track the source of new users 

This widget shows the count of unique users conversing with the bot from various sources.

-------

### Analyse the channels used by users

**User acquisition- Traffic channels**        


|  Description | Use cases |
|  ---- | ---- |
| The frequency of unique users messaging the bot is categorized by source (traffic channel) and aggregated into daily buckets for the chosen date range. | - **User acquisition analysis**: Assess the effectiveness of traffic channels in acquiring new users. <br/> - **Channel performance evaluation**: Evaluate the performance of different channels based on daily user frequency. |

> User acquisition- traffic channels is calculated for all the channels.

<img src="https://i.imgur.com/i3QRF6G.png" alt="drawing" width="50%"/>

------

### Analyse user acquisition from different systems

**User acquisition- Platform/Medium**       


|  Description | Use cases |
|  ---- | ---- |
| The frequency of unique users messaging the bot is categorized based on the device they originate from and aggregated into daily buckets within the specified date range. | - **Platform/Medium analysis**: Analyze user frequency based on device or platform to tailor bot features and optimize user experience. <br/> - **Platform/Medium comparison**: Compare user engagement across platforms to inform resource allocation and marketing strategies. |


> User acquisition- platform/medium is calculated for Yellow Web & Mobile.

<img src="https://i.imgur.com/EybHJHP.png" alt="drawing" width="60%"/>

:::note
The count may be significantly lower compared to the total number of users, as other channels such as WhatsApp and Facebook do not provide device data. Therefore, the graph only represents users on the Yellow.ai bot.
:::

----

### Analyse the country (geography) of new users 

**Unique users by country widget**      


|  Description | Calculation logic | Use cases|
|  ---- | ---- | ---- |
|Unique users by country widget shows the count of unique users conversing with the bot from various countries (demography/location). The top 5 countries and their percentage contributions are shown. | **Unique users by country is calculated** by capturing the IP address of the user which is then translated to a standard location using the standard ip2location database. | - **Geographical user analysis**: Understand user distribution across countries to inform regional strategies. <br/> - **Localization and targeting**: Tailor content and features based on the unique users by country data. |

> Yellow Web & Mobile are the only channels for which an IP Address can be captured hence, unique users by country is calculated for **Yellow Web & Mobile**.

<img src="https://i.imgur.com/mQK60AQ.png" alt="drawing" width="60%"/>

:::note
The count may be significantly lower compared to the total number of users since it shows users only from the source - Yellow Web & Mobile.
:::

-----

### Analyse the devices used for bot conversation

**Users by device widget**     


|  Description | Calculation logic | Use cases|
|  ---- | ---- | ---- |
| Users by device widget shows the different kinds of user devices from which the bot was accessed. | The frequency of unique users conversing with the bot is segregated based on the device they use and aggregated for the selected date range. | - Device usage analysis: Analyze user distribution across different devices for optimization. <br/> - Device specific optimization: Optimize user experience based on device-specific data.|

> Users by device is calculated for Yellow Web & Mobile.

<img src="https://i.imgur.com/rQ2KMcV.png" alt="drawing" width="50%"/>

:::note
Device details are available only for the Yellow Web & Mobile source. Other channels like WhatsApp, Facebook, etc. do not share this data.
:::

------------


## 4. Analyse engagement & user activity by time

**User activity by time widget**

|  Description | Calculation logic | Use cases |
|  ---- | ----------- |   ---- |
| The graph displays the user frequency over a specific period, organized by the day of the week and time of day. By exporting this data for a desired time range, such as the last 7 days, you can analyze when user activity was at its highest and lowest points. | User activity by time is calculated by aggregating the number of unique users who interacted with the bot within each hourly interval for the selected period. | - **Resource allocation**: Identify peak user activity hours to allocate resources effectively and ensure prompt responses to user inquiries. <br/> - **Scheduled maintenance**: Determine low-activity hours to schedule maintenance activities, minimizing service disruption for users. <br/> - **Marketing campaigns**: Identify optimal hours with high user engagement and conversion rates for launching targeted marketing campaigns.


> User activity is calculated for all the channels.

<img src="https://i.imgur.com/T2u93Ao.png" alt="drawing" width="60%"/>

-----


## 5. Monitor bot performance

**Bot performance widget**


This widget shows the bot's performance based on the accuracy of the bot in identifying customer intents, flow start, flow end, and drop-offs. This can be used to understand how accurately the bot is serving the user queries.

> Bot performance is calculated for all the channels.

-----

### Understand bot accuracy

**Bot performance - Bot accuracy widget**

|  Description | Calculation logic | 
|  ---- | ----------- |   
| Bot accuracy shows you the percentage of user messages that are identified by the bot (with a certain amount of confidence). | Bot accuracy = `[1 - (Unidentified user messages / Total User Messages)]*100` |

<img src="https://i.imgur.com/2fMs9iy.png" alt="drawing" width="60%"/>

----

### Analyse flow completion rate (FCR)

**Bot performance - Flow completion rate widget**

|  Description | Calculation logic | 
|  ---- | ----------- |  
|Flow completion rate is a measure of how many customer intents are being fulfilled by the bot for every 100 intents started by the users.| For every flow the user takes, the flow started and the flow completed event is being triggered. The FCR is measured as: `FCR = [(Flow Completed Events) / (Flow Started Events)]* 100` |

<img src="https://i.imgur.com/c1DNijc.png" alt="drawing" width="60%"/>

----

### Track deflection rate

**Bot performance - Deflection rate widget**


|  Description | Calculation logic | 
|  ---- | ----------- |  
| The deflection rate is the % age of queries that the bot was able to resolve without transferring the chat to a live agent. This is a measure of self-serve enabled by the bot. | For every conversation that happens on the bot, a human takeover event is triggered when the user requests for or is automatically transferred to a live agent. This metric is a count of all the sessions that do not have this human takeover event. **Deflection rate** = `(Bot sessions without agent handover / Total sessions) * 100` |

<img src="https://lh5.googleusercontent.com/WPfVI_IJMFdrI8hsg_K7TzezDieOFbFzbh3KEXKsH9xEEU0BiU8XeKrePydcgMzGtNg61qS_YkX1dQ-VPNUp5IC4qBRmGB5pSbYiRHL5zdp6KxTJ2JoxzUoyFpSkCyF5iLkOHI6GE2byj9AtfyNyhO8mUOWrqfBJ7ugi1bmhxIeQpuhOH4Tv-oNRUEmKQw" alt="drawing" width="60%"/>

:::note
**Human takeover** rate is now replaced with **Deflection rate** because it is a better indication of the bot's performance.
:::

----------

## 6. Analyse user feedback/Customer satisfaction (CSAT)

**CSAT** widget shows the **Customer satisfaction (CSAT)** score given by users for the bot as well as agent sessions. Both of these scores are on a scale of 0 to 5. The graph shows a comparison of user feedback on bot session vs agent session at the day level for the selected timeframe.

<img src="https://lh5.googleusercontent.com/pEwKhxwpRidsJWDxu3mksdvv-hJ3fpl40s1pHCXnCvBO8t4U45ezuJ4uzgLJUQe-4_rMFZAIvLyofJkU_TjkCLjutJnZm9H9qwtCUlLNFIXGunqFH0Qs5jrn2nl5XEncrzm6gyxH2fkzGeBuBzGphiTe-wtz3klVVM7if3Umpn78EnErBcHMRF500CMGow" alt="drawing" width="60%"/>


> Learn more on how to track CSAT for your bot [here](https://docs.yellow.ai/docs/cookbooks/insights/botagentfedback#4-view-user-feedback-on-insights).

--------


## 7. Summary of flows traversed by the user

**Top flows visited widget**

|  Description | Calculation logic | 
|  ---- | ----------- |  
| Top flows visited widget shows the frequently triggered flows by the users and the average time users took to complete these flows. | For every flow, the completion event is triggered. The count of those completed events along with the time it took to complete those events is shown here for the selected duration. |

> - The detailed report can be viewed by visiting the [Funnels](https://docs.yellow.ai/docs/platform_concepts/growth/funnels) section.
> - Top flows visited is calculated for all the channels.

<img src="https://lh5.googleusercontent.com/X8d0RWHZQtbf_g3-ewNxeh0ALkcshEYA12MFqTtZ3gxTE_6qHFNMsdOHl5SgcfLQfCWhHnOOzs3Mkk8KKnmkDSpOPf-eStlsTyHOrXO1_Uo6h6mRXsbTHcJNuc02EIqo5xYWbgY8gu9200_lUE0RHbkgnlX76oNOCjxJ4L6fK51yGKqJb9djl9Oiq5Pkpg" alt="drawing" width="60%"/>

-----

## 8. Understand and analyse issues in a conversation 

**Conversational issues widget**

These are the analytics based on the [conversation logs](https://docs.yellow.ai/docs/platform_concepts/studio/analyze/chat-logs) (studio). 

> At the end of the widget, you can analyze the metrics for the selected date range. To see these conversations, click **View conversation logs**, you will be directed to the **Studio > Conversation logs** page.  
> ![](https://i.imgur.com/ALU3xMi.png)

:::note
Click [here](https://docs.yellow.ai/docs/cookbooks/insights/convissue) for a detailed guide on how to analyse conversational issues. 
:::

-----

### Overview of conversational issues

This is a time-series view of the priority issues identified in your bot-user conversations.

![](https://i.imgur.com/Xz4Gw0h.png)

----------

### Analyse and resolve conversational issues

Select the **Analyse** tab to see a detailed view of conversation issues along with their severity and count of total occurrences. 
Four common issues (**Unidentified user response**, **Missing bot response**, **Validation limit exceeded** and **Fallback limit exceeded**) encountered by the bot are listed along with the **Suggested next steps**. 

You can click on each issue to get redirected to the conversation logs where those issues have been identified. These conversations are filtered for the selected parameters, that is, applied date range and tag (identified issue). 

![](https://i.imgur.com/KHHIq3A.png)

----------

## 9. Track consumption of WhatsApp bots

> WhatsApp consumption is calculated only for the **WhatsApp channel**. 
> You can [filter](#fil) the page for WhatsApp channel to view this widget.

The following three categories are tracked for the selected WhatsApp phone numbers(from the bottom of the widget): 
1. Business-initiated conversations 
2. User-initiated conversations 
3. Referral conversations 

<img src="https://i.imgur.com/mAsWlFl.png" alt="drawing" width="50%"/> 

----------

## 10. Other actions on insights overview 

### Filter widget data for a time period

- All the metrics can be filtered and viewed for a period of time by selecting the time from the drop-down (for example, last 7 days, last 90 days). 
- If you want to see the metrics for a custom range (for example 21st Sept to 23rd Sept), click **Custom** and select the range.        
    ![](https://i.imgur.com/cAq1z5N.png)

----

### <a name="fil"></a> Filter widget data for channels

- These metrics are measured for all the channels. If you want to obtain results for any of the specific channels (that are activated for your bot), select the required channel from the channel dropdown.      
    ![](https://i.imgur.com/Am22nJN.png)

-----

### Compare widget between a timerange

- All the % values displayed in a smaller font (in green/red) are the delta of the metrics in applied time range. For example, growth/decline of Unique users in the selected time range (this week) vs previous time range (last week).          

    <img src="https://i.imgur.com/ExglSe8.png" alt="drawing" width="50%"/>

----

### Export/download data available on insights overview 

- To download any of these metrics, click **Export data**. 
- Select the required metrics and click **Export Reports**. You can also download all the reports as PDF. 
- Click [here](https://docs.yellow.ai/docs/cookbooks/insights/schedulerawreports) for steps to schedule these reports.          

    <img src="https://i.imgur.com/8R9HwkP.png" alt="drawing" width="60%"/>      
