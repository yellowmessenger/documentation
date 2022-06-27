---
title: Insights 
sidebar_label: Insights
featured: true
---

### Overview

<iframe width="560" height="315" src="https://www.youtube.com/embed/m2fSpps8mhw" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen></iframe>

### Metrics

<iframe width="560" height="315" src="https://www.youtube.com/embed/t6NxWT5A9Js" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen></iframe>

### Funnels

<iframe width="560" height="315" src="https://www.youtube.com/embed/y2mj_uYdTpE" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen></iframe>

### API Usage

<iframe width="560" height="315" src="https://www.youtube.com/embed/O9oOsm2CrQE" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen></iframe>

### Document Cognition

<iframe width="560" height="315" src="https://www.youtube.com/embed/gBbqR97Vs9U" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen></iframe>

### Data Explorer and Dashboards

<iframe width="560" height="315" src="https://www.youtube.com/embed/oHac-CDZ1ik" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen></iframe>

### Analytics & testing

<iframe width="560" height="315" src="https://www.youtube.com/embed/lqzwdVky8tI" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen></iframe>

Take advantage of yellow.ai's robust reporting capabilities to identify & drill down to the metrics that matter to you.

Create custom reports & dashboards with data explorer for easy review and take control of your #data for actionable insights.


## Data Explorer & Dashboards


### Data Explorer


Data Explorer is a business intelligence tool to build custom analytics. Analysts will be able to generate reports, and create beautiful widgets in the form of Line charts, Pie charts, Bar Graphs without writing any code. It provides a standard set of Datasets(tables) that can be used to create Widgets. Analysts can create custom Datasets using the tables created by bot builders.Data Explorer currently uses the Druid Datastore and the bot database to draw the analytics.


Using the Data Explorer, you can easily summarize data submitted for individual fields, summarize the empirical relationships between fields, and drill down to browse individual submissions. With it, you can start learning from your data right away.


Dashboard can be used to visualise the Datasets and reports generated using Data Explorer. Multiple Dashboards can be created to group widgets related to different use cases.

Navigating to Data Explorer is as below:

Login to [yellow.ai](https://cloud.yellow.ai/bot/Bot_ID/overview), click on Overview, select Insights -> choose Data Explorer from the left side 
pane.

![](https://i.imgur.com/39r9rpd.jpg)


Data Explorer is categorized into 2 sections:

* Default datasets
* Custom datasets


***Default Datasets***  are the tables built in, related to Users Events, Messages, API Events, Agent Events, etc.,

Below, you will find the default dataset options and their functions:

| Event Name | Description |
|:-------- |:--------:|
| Agent Events |  Gives data about how agents are performing, how many users are interacting with the agents, response time, AHT etc. |
| API Events | Displays APIs performance, their response time, status codes, IP addresses etc. |
| Bot Events | Provides technical insights around chat widget loads, various function execution, where widget loads are happening, what is the platform and channel etc. |
| User Feedbacks | Provides info about user experience from the feedback they give on the bot. Slice and dice it based on use cases they visit the bot for. See how individual use cases are performing. |
| Messages | Data about the user traffic metrics here, messages exchanged, sessions created, user demographies, devices they are using, etc on a channel level. |
| Notification Reports | Deep dive into how the campaigns are performing, which channel is doing well, how are different templates performing, how many notifications are failing etc. |
| User Events | Check how your users are engaging with the bot, journeys they are taking, agent transfers, journey switches, unidentified utterances, etc. |
| Voice Events | Find insights around voice bots. Number of inbound / outbound calls, calls per user, region, call duration, etc. |



***Custom Datasets*** are the custom tables created by the bot builder. You can customize the table based on your preferences.



### Create Queries

Apart from the above mentioned two data sets you can also create custom queries. These custom queries can be created using the default datasets or custom datasets.

To create a new query, click on create a query button as shown in the image below:

![](https://i.imgur.com/6dBD5zg.png)


When you select the create a query option, you get a pop up where you can select what type of query to be created based on the below 2 options:

* Custom query
* Native query


![](https://i.imgur.com/Uihdc9T.png)


Custom query is where you pick the data set, filter, summarise and visualise it within clicks.


Native query is used for complicated analysis wher you write your own SQL query.


### Custom Query


Post selecting the type of query, you can then click on the dropdown where you can customize from either the default or custom datasets and press Next.

Below image shows a table created using custom query based on the Agent events:

![](https://i.imgur.com/j4NRlAC.png)

You can also export the data obtained as a .csv file.

![](https://i.imgur.com/Ho9rC9x.png)


Queries can be constructed using filters and logics within Filters. Data can be filtered by a specific column value or a combination of column values.

![](https://i.imgur.com/mOtbepU.png)


Select any of the option of your preference and click on Apply filter.

Dataset can be summarized(grouping Rows) by selecting a Column Name, and selecting required metrics like count, sum of, average of, number of distinct Values of, minimum of, and/or maximum of.

![](https://i.imgur.com/1xy4ywH.png)

:::info
:information_source: Remove the filters if any when the data is summarized.
:::

You can group records by a specific column. Records can be listed page wise defining number of records per page. Records can be Sorted in Asc or Desc order by a specific Column. Just click on the column label to sort the data.

![](https://i.imgur.com/9eHJRTO.png)


:::success

:bulb: Example: ![](https://i.imgur.com/LJA9BPV.png)

:::

Lastly, click on Save Query and this can be used for future references.


### Visualization


Visualizing data in charts, graphs, dashboards, and more is one of the most powerful strategies for getting your numbers out of your spreadsheets and into real-world conversations. This step-by-step data visualization guide is for you! 

Below is a walk through the data visualization design process so you know what to do first, second, and third as you transform your spreadsheets into stories.

![](https://i.imgur.com/9dw6h75.png)

Steps for visualising:

• Click on the query
• Click on Visualize button
• Select the required chart
• Click done
• Save the Query


Visualising the Data can be done in the following ways:

- Line chart
- Bar graph
- Pie chart
- Funnel
- Table view
- Row view


:::success

:bulb: Example: Pie Chart ![](https://i.imgur.com/Yuj3tfA.png)

:::

:::info
:information_source: Always remember to refresh the page after making changes.
Hover the mouse on top of the chart for more details.
:::



### Dashboard


A dashboard is a visual display of all of your data. While it can be used in all kinds of different ways, its primary intention is to provide information at-a-glance. A dashboard usually sits on its own page and receives information from a linked database. In many cases it’s configurable, allowing you the ability to choose which data you want to see and whether you want to include charts or graphs to visualize the numbers.

Dashboard help the analysts to add multiple widgets into single page layout. Multiple Dashboard can be created. Widgets can be directly added to Dashboard from the data explorer too.


![](https://i.imgur.com/lFXxFsQ.png)


### Creating a Dashboard

1. Login to [yellow.ai](https://cloud.yellow.ai/bot/Bot_ID/overview), click on Overview and select Insights.
2. Choose Dashboard from the left side pane.
3. Click on New dashboard.
4. Enter the name and description.
5. Click on save.

![](https://i.imgur.com/eQO2dWJ.png)


### Adding a Widget

1. Select the new Dashboard created.
2. Click on Add widget
3. Select widgets from the dropdown

Here, you can find 2 options:
* You can choose multiple options from the list
Or
* Click on create a new widget and you shall be directed to Data explorer for creating a new widget and will be automatically added to the dashboard once you save the query in data explorer. Also, all the changes made so far in the dashboard will be saved.

4. Choose the first option to select from the list.
5. Click on Add

![](https://i.imgur.com/Q30IsN3.png)


Below image shows the dashboard after the addition of widgets and customising in real time.


![](https://i.imgur.com/wwhd6qf.png)

Dynamically change the dashboard data by selecting a specific date range from date filter. You can also drag and position the charts in any specific order.