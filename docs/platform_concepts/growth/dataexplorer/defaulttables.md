---
title: Perform analytics on default tables in data explorer
sidebar_label: Analyse default tables   
---

**What are Default tables?** 

**Default tables** are the built-in tables, related to Users Events, Messages, API Events, Agent Events, etc. Click on any of the table names to view the data available for the last month (you can use filters to customise what you want to see). 

![](https://i.imgur.com/uqwkU9X.png)

## Types of default tables 

Following are the default tables and their functions:

| Event Name | Description |
|:-------- |:--------:|
| **API Events** | Displays APIs performance, their response time, status codes, IP addresses, etc. |
| **Bot Events** | Provides technical insights around chat widget loads, various function execution, where widget loads are happening, what is the platform and channel, etc. |
| **Chat tickets** |  Delivers data for chat tickets about how agents are performing, how many users are interacting with the agents, response time, Agent details, User details, CSAT, AHT, etc. |
| **Email tickets** |  Analyse operational metrics and agent performance for email tickets, and create your custom analytics dashboards. |
| **Inbox call records** | Analyse details regarding the calls between inbox agents and end users. |
|**Inbox events**| Analyse agent performance by deep diving into first response time, average handling time, resolved and missed tickets, etc.|
| **Knowledgebase articles** | Analyse views, likes, dislikes and other details of the articles published in the inbox knowledgebase section. | 
| **Message events** | Data about the user traffic metrics here, messages exchanged, sessions created, user demographics, devices they are using, etc on a channel level. |
| **Notification Reports** | Deep dive into how the campaigns are performing, which channel is doing well, how are different templates performing, how many notifications are failing, etc. |
| **User Engagement Events** | Check how your users are engaging with the bot, flows they are taking, agent transfers, flow switches, unidentified utterances, etc. |
| **User Feedback** | Provides info about the user experience from the feedback they give on the bot. Slice and dice it based on the use cases they visit the bot for. See how individual use cases are performing. |
|**Video Chats**|Analyse the usage metrics for video calling tickets, and create your custom dashboards.|
| **Voice Bot Events** | Find insights around voice bots. Number of inbound/outbound calls, calls per user, region, call duration, etc. |
|**Call details report** |CDR is a report of telephony data such as call duration, caller ID, called number, call status, and call type obtained from each call (bot conversation with customer). |
| **Knowledge base report** | Analyse query resolution rates, failure reports and a dump of all queries that have been handled by Knowledge base (Automation). |
| **Contained resolution analysis** | Analyse the conversation flow, user engagement and bot performance metrics.|

:::note

The Notification reports table contains data for the past 190 days. If you require historical data beyond this timeframe, you have the option to generate it using the Export data feature within [Data Ops](https://docs.yellow.ai/docs/platform_concepts/growth/dataops) (or Engage module).

:::


-----

## Add filters to the default table 

When using the filters option, you can apply filters to any of the available column names. These column names are automatically displayed and available for selection when you click on the filters option.

1. Click **Filters**. 
2. Select the filters you want to apply. 
    - You can search for the column name. 
    - For each filter, you can add a conditon and the value. 
3. Click **Apply filter**.
    ![image](https://imgur.com/CxjFRAo.png)

### Download filtered data as a CSV file

You can filter data by a single column value or a combination of column values. To download the data generated at any step, simply click on **Actions > Export as CSV** and it will be saved as a CSV file on your local system.

![image](https://imgur.com/QTRWcJr.png)

### Save filtered data as reports 

Once you have applied filters/summarization, a button labeled **Save query** will appear. Click on this button to save the filtered data as a saved report. This report can then be accessed under the **Saved reports** section every time you open the data explorer, without the need to repeat all the filtering steps again.

> Learn more about actions available on [Saved reports](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/savedreportsactions).

![image](https://imgur.com/QRizLWe.png)


> You can also visualise this data, steps are explained in further sections. 
