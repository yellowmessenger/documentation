---
title: Data explorer & default tables
sidebar_label: Overview & default tables 
---

In this article, you will learn: 
1. [What is a data explorer?](#1)
2. [What are default tables?](#2)


## <a name="1"></a> 1. Data explorer 

Data explorer is a business intelligence tool to build custom analytics. 
Using the Data explorer, you can easily summarize data submitted for individual fields, summarize the empirical relationships between fields, and drill down to browse individual submissions. With it, you can start learning from your data right away.
- Analysts will be able to generate reports and create beautiful widgets in the form of Line charts, Pie charts, and Bar Graphs without writing any code. 
- It provides a standard set of Datasets(tables) that can be used to create Widgets. 
- Analysts can create custom datasets using the tables created by bot builders.
- Data explorer currently uses the Druid Datastore and the bot database to draw the analytics.
- [Dashboard](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards) can be used to visualize the Datasets and reports generated using data explorer. Multiple dashboards can be created to group widgets related to different use cases.

**Categories** 

:::note
The labels Reports and Queries, Datasets, and Tables are used synonymously. Reports/queries are created for the data present in the Datasets/tables. These reports (default and custom) are used for complex data analysis/summarization/visualization. 
:::

Data explorer is categorized into 2 sections:

* **Default datasets**:  These are the tables that are built in on Insights, they are related to Users Events, Messages, API Events, Agent Events, etc.
* **Custom datasets**: These are the custom tables created by the bot builder. A table can be customized based on your preferences.

**Navigation** 

To create or view any of the default/custom datasets, log in to the [yellow platform](https://cloud.yellow.ai/) and open **Insights** > **Data explorer**. 

![](https://i.imgur.com/RfNjgFD.png)




----

## <a name="2"></a> 2. Default tables/datasets 

**Default Datasets** are the built-in tables, related to Users Events, Messages, API Events, Agent Events, etc.
- Click on any of the table names to view the datasets. 

![](https://i.imgur.com/uqwkU9X.png)

Following are the datasets and their functions:

| Event Name | Description |
|:-------- |:--------:|
| **API Events** | Displays APIs performance, their response time, status codes, IP addresses, etc. |
| **Bot Events** | Provides technical insights around chat widget loads, various function execution, where widget loads are happening, what is the platform and channel, etc. |
| **Chat tickets** |  Delivers data for chat tickets about how agents are performing, how many users are interacting with the agents, response time, Agent details, User details, CSAT, AHT, etc. |
| **Email tickets** |  Analyse operational metrics and agent performance for email tickets, and create your custom analytics dashboards. |
|**Inbox events**|Analyse agent performance by deep diving into first response time, average handling time, resolved and missed tickets, etc.|
| **Messages** | Data about the user traffic metrics here, messages exchanged, sessions created, user demographics, devices they are using, etc on a channel level. |
| **Notification Reports** | Deep dive into how the campaigns are performing, which channel is doing well, how are different templates performing, how many notifications are failing, etc. |
| **User Engagement Events** | Check how your users are engaging with the bot, flows they are taking, agent transfers, flow switches, unidentified utterances, etc. |
| **User Feedback** | Provides info about the user experience from the feedback they give on the bot. Slice and dice it based on the use cases they visit the bot for. See how individual use cases are performing. |
|**Video Chats**|Analyse the usage metrics for video calling tickets, and create your custom dashboards.|
| **Voice Bot Events** | Find insights around voice bots. Number of inbound/outbound calls, calls per user, region, call duration, etc. |

### 2.1 Data visualization of default tables 

Click the required default table name. 

![](https://i.imgur.com/D7FZZpM.png)

- Click **Actions** and download this data (.CSV file) to your local system. 
- Furthermore, you can add filters to the tables, and summarize and visualize them. This process is the same for default and custom tables.

:::info
**Reference links:** 
1. [Add filters](./platform_concepts/growth/customtables#2.md)
2. [Summarize](./platform_concepts/growth/customtables#3.md) 
3. [Visualization](./platform_concepts/growth/customtables#4.md)
4. [Save the report](./platform_concepts/growth/customtables#5.md)
5. [Schedule report](./platform_concepts/growth/customtables#6.md)
:::



