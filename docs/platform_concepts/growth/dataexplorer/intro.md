---
title: Data explorer with default tables 
sidebar_label: Data explorer  
---

#### What is Data explorer?

The Data Explorer facilitates the extraction of valuable business insights and empowers data-driven decision making by leveraging the available bot data. This tool serves as a business intelligence platform that enables the creation of custom analytics. By utilizing the Data Explorer, you can conveniently condense data pertaining to specific fields and analyse empirical relationships between fields.

---

#### Functions of data explorer

Data explorer has several features:

* **Immediate Learning**: Users can start learning from their data immediately.
* **Widget Creation**: Analysts can generate reports and create visually appealing widgets, such as Line charts, Pie charts, and Bar Graphs, without any coding.
* **Standard tables**: The tool provides a standard set of tables that can be utilized to construct Widgets.
* **Custom tables**: Analysts have the ability to create custom tables by utilizing the tables that have been developed by bot builders.
* **Druid Datastore**: Data Explorer currently uses the Druid Datastore and the bot database to conduct its analytics.
* **Dashboard**: Users can visualise the tables and reports generated using Data Explorer through the use of [Dashboards](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards). Multiple dashboards can be created to group widgets based on different use cases.

---

#### Types of tables available on data explorer

Data explorer is categorized into 2 sections:

* **Default tables**:  These are the tables that are built in on Insights automatically obtained automatically by the bot, they are related to Users Events, Messages, API Events, Agent Events, etc.
* **Custom tables**: These are the custom tables created by the bot builder. A table can be customized based on your preferences. They are fetched using [database nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database)/stored [database](https://docs.yellow.ai/docs/platform_concepts/studio/database) on the **Automation** page

:::note
The labels Reports and Queries, Datasets, and Tables are used synonymously. Reports/queries are created for the data present in the Datasets/tables. These reports (default and custom) are used for complex data analysis/summarization/visualisation. 
:::

----

#### Data explorer overview

To create or view any of the default/custom tables, log in to the [yellow platform](https://cloud.yellow.ai/) and open **Insights** > **Data explorer**. 

![image](https://imgur.com/sLy9EZN.png)

In the Data explorer section, you will find: 
1. Data tables available by default
    1. Option to push data from user360 to default tables
2. Custom tables created for specific use-cases
3. Visualization and other functions on tables
    1. Filters
    2. Summarization tables
    3. Visualization of data
    4. Download the generated data as report
4. Actions on saved reports
    1. Schedule to send reports via. email
    2. Add reports to the dashboard
    3. Selete a saved report
5. Default reports created by yellow.ai and Custom reports 


:::note
Actions in Data explorer must be configured separately for **Live and Production** environment.
:::

:::info
Maximum of 500 data entries are displayed at the UI level. To view the full table, you can download it.
:::