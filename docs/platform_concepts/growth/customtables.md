---
title: Custom tables
sidebar_label: Custom tables
---

**Custom datasets** are customized tables created by the bot builder. You can customize the table based on your preferences.


In this article, you will learn: 
1. [How to create custom tables?](#1)
    1. [Add filters](#2)
    2. [Summarize](#3)
    3. [Visualization](#4)
    4. [Save the report](#5)
2. [Schedule to send reports via. email](#6)


:::note
The labels Reports and Queries, Datasets, and Tables are used synonymously. Reports/queries are created for the data present in the Datasets/tables. These reports (default and custom) are used for complex data analysis/summarization/visualization. 
:::


## <a name="1"></a> 1. Create Custom tables/datasets

Custom queries can be created using the default datasets or custom datasets.
- Click **+Create Report**. 
- Select the type of **query** and click **Next**. 

![](https://i.imgur.com/pHHRhJx.png)


There are 2 types of queries one can choose from to create reports on the required tables, they are: 
1. **Custom query**: You can choose a default/custom table, filter, summarise and visualize it with the given buttons. It contains a simple interface and you don't need any database queries.
    - Queries can be constructed using filters and logic within Filters. Data can be filtered by a specific column value or a combination of column values. Data generated at any step can be downloaded to your local system as a . CSV file by clicking **Actions** > **Export as CSV**.     
    <img  src="https://i.imgur.com/Ho9rC9x.png"  width="80%"/>

![](https://i.imgur.com/Rj2r4Of.png)   


2. **Native query**: This is used for complicated analysis where you can write your SQL query.

![](https://i.imgur.com/gM5kxps.png)



----

### <a name="2"></a> 1.1 Filter data

1. On the custom query page, click the **Filter** option.
2. Filters are generated based on the dataset column names.
3. Filters are different for each table.
4. Multiple filters can be added at once, click on each of the filters and select the conditions. 
5. Click **Apply filter**. 


<img  src="https://i.imgur.com/JhC4uu4.png"  width="40%"/>

### <a name="3"></a> 1.2 Summarize and group by

> Summarize options are available based on the selected subscription models. 

In this panel, you can **Summarise** the datasets/tables by a count of the table data (number of rows) and **Group by** the column fields.

**Summarize by:**

1. On the custom query page, click **Summarize**. 
2. Click **Add metrics** to explore the available summary options. 

<img  src="https://i.imgur.com/aAIZ386.png"  width="50%"/>

3. Dataset can be summarized(grouping Rows) by selecting a Column Name, and selecting required metrics like count, the sum of, an average of, the number of distinct Values of, minimum of, and/or maximum of.

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

### <a name="4"></a> 1.3 Visualization


Visualizing data (in charts, graphs, dashboards, etc.) is the most powerful strategy for getting your numbers out of your spreadsheets and into real-world conversations. 

1. On the query page, click **Visualisation**. 
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


------
### <a name="5"></a> 1.4 Save query 

These summarized/visualized queries can be used for future references and they will be available for quick use on the data explorer page, click the **Save query** option available at the bottom of the page. 

![](https://i.imgur.com/gpfmER3.png)


------

## <a name="6"></a> 2. Schedule a report

To schedule a report, follow the below steps: 

1. Saved queries are available as saved reports on the data explorer page, open any of your saved reports. For example: Studio feedback. 

![](https://i.imgur.com/DkPaVC3.png)

3. On the queries page, click **Actions**. From the dropdown select **Schedule report**. 

![](https://i.imgur.com/MV03xWg.png)

:::note
- For faster access and visualization, you can add this to your dashboard by clicking **Add to dashboard** from the dropdown. 
- To delete the saved query, select **Delete query** from the dropdown. 
:::

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

