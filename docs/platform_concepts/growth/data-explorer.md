---
title: Data explorer with default and custom tables 
sidebar_label: Data explorer  
---

In this article, you will learn: 
1. [What is a data explorer?](#1)
2. [What are default tables?](#2)
    1. [How to push data from user360 to default tables?](#21)
3. [How to create custom tables?](#3)
4. Visualization on tables and other functions:
    1. [Add filters](#4)
    2. [Summarize](#5)
    3. [Visualization](#6)
    4. [Download the generated data](#7)
    5. [Save the report](#8)
5. [Schedule to send reports via. email](#9)
    1. [How to add reports to the dashboard?](#10)
    2. [How to delete a saved report](#11)


:::note
Actions in Data explorer must be configured separately for **Live and Production** environment.
:::



## <a name="1"></a> 1. Data explorer overview

Data explorer is a business intelligence tool to build custom analytics. 
Using the Data explorer, you can easily summarize data submitted for individual fields, summarize the empirical relationships between fields, and drill down to browse individual submissions. With it, you can start learning from your data right away.
- Analysts will be able to generate reports and create beautiful widgets in the form of Line charts, Pie charts, and Bar Graphs without writing any code. 
- It provides a standard set of Datasets(tables) that can be used to create Widgets. 
- Analysts can create custom datasets using the tables created by bot builders.
- Data explorer currently uses the Druid Datastore and the bot database to draw the analytics.
- [Dashboard](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards) can be used to visualize the Datasets and reports generated using data explorer. Multiple dashboards can be created to group widgets related to different use cases.

> These tables/datasets consist of data obtained automatically by the bot (default tables) or fetched using [database nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database)/stored [database](https://docs.yellow.ai/docs/platform_concepts/studio/database). 
> Explore tables on the **Studio** page. 


---

**Categories of tables** 



Data explorer is categorized into 2 sections:

* **Default datasets**:  These are the tables that are built in on Insights, they are related to Users Events, Messages, API Events, Agent Events, etc.
* **Custom datasets**: These are the custom tables created by the bot builder. A table can be customized based on your preferences.

:::note
The labels Reports and Queries, Datasets, and Tables are used synonymously. Reports/queries are created for the data present in the Datasets/tables. These reports (default and custom) are used for complex data analysis/summarization/visualization. 
:::

----

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

------

### <a name="21"></a> 2.1 Push custom data to default tables  


**API events, Bot events, Message events, and User engagement events** tables have two columns blank by default, CUSTOMID 1	and CUSTOMID 2. You can choose to push any of the user properties that are stored on [user360](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties) to all those default tables. 

> This action is irreversible. Once you configure it, the column(s) added will remain as a part of the default tables. 

Steps to push custom data to default tables: 

1. Add a new user property on the [user360](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties#21-add-user-property) page.  
2. Click **Data explorer** > **Configure**. 

    ![](https://i.imgur.com/y0JULrU.png)

3. From the dropdown menu, choose a property (the custom data you want to push to API events, Bot events, Message events, and User engagement events tables) for CUSTOMID 1 and CUSTOMID 2.

    > CUSTOMID 2 can be added only after adding CUSTOMID 1.  

    ![](https://i.imgur.com/c4qJSSX.png)
4. Click **Configure** and **Add**. Your custom data will get populated in the default tables.  

    <img  src="https://i.imgur.com/EmlxTmE.png"  width="50%"/>



---



## <a name="3"></a> 3. Create custom tables

**Custom datasets** are customized tables created by the bot builder. You can customize the table based on your preferences.

Custom queries can be created using the default datasets or custom datasets.
- Click **+Create Report**. 
- Select the type of **query** and click **Next**. 

![](https://i.imgur.com/pHHRhJx.png)


There are 2 types of queries one can choose from to create reports on the required tables, they are: 
1. **Custom query**: You can choose a default/custom table, filter, summarise and visualize it with the given buttons. It contains a simple interface and you don't need any database queries.
    - Queries can be constructed using filters and logic within Filters. Data can be filtered by a specific column value or a combination of column values. Data generated at any step can be downloaded to your local system as a . CSV file by clicking **Actions** > **Export as CSV**.

![](https://i.imgur.com/Rj2r4Of.png)   


2. **Native query**: This is used for complicated analysis where you can write your SQL query.

![](https://i.imgur.com/gM5kxps.png)



----


## 4. Data visualization and other functions

This process is the same for default and custom tables, follow the given steps to visualise your table data: 


### <a name="4"></a> 4.1 Filter data

1. Click the required default/custom table name to open it. On the query page, click the **Filter** option.   
<img  src="https://i.imgur.com/U3zEAfP.png"  width="70%"/>

2. Filters are generated based on the dataset column names. Hence Filters are different for each table.
3. Multiple filters can be added at once, click on each of the filters and select the conditions. 
4. Click **Apply filter**. 


<img  src="https://i.imgur.com/JhC4uu4.png"  width="40%"/>

### <a name="5"></a> 4.2 Summarize and group by

> Summarize options are available based on the selected subscription models. 

In this panel, you can **Summarise** the datasets/tables by a count of the table data (number of rows) and **Group by** the column fields.

**Summarize by:**

1. On the query page, click **Summarize**. 

<img  src="https://i.imgur.com/eMJQDjM.png"  width="70%"/>

2. Click **Add metrics** to explore the available summary options. 


<img  src="https://i.imgur.com/aAIZ386.png"  width="50%"/>

3. Dataset can be summarized(grouping Rows) by selecting a Column Name, and selecting required metrics like count, the sum of, an average of, the number of distinct values of, minimum of, and/or maximum of.

![](https://i.imgur.com/9eHJRTO.png)


:::note
Remove the filters when the data is summarized.
:::

**Group by** 

1. Records can be grouped by a specific column. Select the column name.
2. Multiple column names can be selected. 
3. Click **Apply**.

<img  src="https://i.imgur.com/jPQkIrU.png"  width="40%"/>

4. Records can be listed page wise defining the number of records per page. Records can be sorted in ascending and descending order by a specific column.  
5. Click on the column label to sort the data.

![](https://i.imgur.com/D1APkgS.png)

----

### <a name="6"></a> 4.3 Visualization


Visualizing data (in charts, graphs, dashboards, etc.) is the most powerful strategy for getting your numbers out of your spreadsheets and into real-world conversations. You can visualize the summarized tables by following the below steps. 

1. On the query page, click **Visualisation**.

<img  src="https://i.imgur.com/d2RVzrQ.png"  width="70%"/>


> Tables must be Summarized before applying visualization. 


2. Select the required chart. Hover the mouse on top of the chart for more details.
    - Line chart
    - Bar graph
    - Pie chart
    - Funnel
    - Table view
    - Row view
3. Click **Done**. Refresh the page after making changes.

![](https://i.imgur.com/nvsshH8.png)


**Example**: **Pie Chart** 

![](https://i.imgur.com/Yuj3tfA.png)

### <a name="7"></a> 4.4 Download data 

- Click **Actions** and download this data (.CSV file) to your local system. 

<img  src="https://i.imgur.com/U68nIwL.png"  width="80%"/>

------
### <a name="8"></a> 4.5 Save query 

These summarized/visualized queries can be used for future references and they will be available for quick use on the data explorer page, click the **Save query** option available at the bottom of the page. 

![](https://i.imgur.com/gpfmER3.png)


------
## 5. Actions on Saved reports 

### <a name="9"></a> 5.1 Schedule a report

To schedule a report, follow the below steps: 

1. Saved queries are available as saved reports on the data explorer page, open any of your saved reports. For example: Studio feedback. 

![](https://i.imgur.com/DkPaVC3.png)

3. On the queries page, click **Actions**. From the dropdown select **Schedule report**. 

![](https://i.imgur.com/MV03xWg.png)



4. On the side panel, configure the following: 

    - **Frequency**: You can choose hourly, weekly (select the days of the week that the report needs to be sent on), monthly or quarterly (choose timezone and dates).

    ![](https://i.imgur.com/bESvQgj.png)

    - **Email**: Specify the email IDs of the recipients to which the report needs to be sent. You can add up to a maximum of 10 email IDs (they can also be external to your organization).
    - **Subject**: Subject is pre-filled with the report name.
    - **Message**: Type in a message that you want to add to the body of the email.

<img  src="https://i.imgur.com/zxTLVCF.png"  width="50%"/>

5. After configuring the details, you can send a test email to check if the format of the email is as expected, this test email is sent out to the entered email idea.


<img  src="https://i.imgur.com/iGVGPiB.png"  width="70%"/>

6. Click **Save**. This report will be sent to the respective email IDs as per the schedule. 

### <a name="10"></a> 5.2 Add report to dashboard

For faster access and visualization, you can add this saved report to your dashboard by clicking **Add to dashboard** from the **Actions** dropdown. 

![](https://i.imgur.com/mAutxVu.png)

> Click [here](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards#--12-create-a-dashboard-from-data-explorer) for more details. 

### <a name="11"></a> 5.3 Delete a saved report

To delete the saved query, select **Delete query** from the **Actions** dropdown.

![](https://i.imgur.com/EhrsQV1.png)