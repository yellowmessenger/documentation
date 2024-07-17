---
title: Create custom queries for custom tables
sidebar_label : Custom reports (tables) 
---

You can modify/visualise and perform actions on tables according to your preferences using a **Custom query**.


**Default tables(datasets)**: **Insights > Data explorer** has a list of default tables (reports) that are created for the commonly used bot use cases. 

**Custom tables(datasets)**: On **Studio > Tables** you can create [custom datasets](https://docs.yellow.ai/docs/platform_concepts/studio/database) that are tailored to your needs. For example, you can create tables to store the data obtained from variables from the flows. 



:::note
To **secure data** security for custom tables, you can employ masking techniques by following [these steps](https://docs.yellow.ai/docs/platform_concepts/studio/database#mask-database-columns). As a result, the data in these tables will remain concealed on insights tables for all users except super admins.
:::

## 1. Steps to add/create a custom query (custom report) 

Custom queries/reports can be created using the default datasets or custom datasets.
1. Open **Insights** > **Data explorer**. 
2. Click **+Create Report**. 
3. Select the type of **query** and click **Next**. 

![image](https://imgur.com/J2dtFSS.png)


**Choose query to create a table**

You have the option to choose a custom query that includes either bot data or data retrieved from custom tables in flows. By using any of this data, you can obtain the desired insights and analytics from your existing datasets.

To create reports on selected tables, there are two types of queries available:

### **Custom query**

This query allows you to choose a default or custom table, and provides options to filter, summarize and visualise the data using the provided buttons. With this query, you can perform actions on tables through a simple interface, without the need for any database queries.
- After clicking on **Custom query**, you will have two options, select one: Single data source or Multiple data sources.
    - **Single data source**: You can create a report using just one selected table.
    - **Multiple data sources**: You can combine two tables using a join operation to create your report. 
    > Detailed explaination available in the next section. 
- Filters and logic within Filters can be used to construct queries. You can filter data by specific column values or combinations of column values.

![image](https://imgur.com/NmKO84z.png)

### **Native query**

If you require more advanced analysis beyond what is available with the buttons and options provided by Insights, or if you prefer to write SQL queries instead, you can choose the native query option. With this option, you can write your own SQL query to perform more complex analysis on your default datasets.

![image](https://imgur.com/2zNJu3m.png)
    
    **Sample native query**:

```js
SELECT category, 
COUNT(*) AS total_sales, 
AVG(sale_amount) AS average_sale_amount, 
MAX(sale_amount) AS highest_sale_amount, 
MIN(sale_amount) AS lowest_sale_amount 
FROM sales_data
GROUP BY category
ORDER BY total_sales DESC; --This query groups the sales data by category and calculates the total number of sales, the average sale amount, and the highest and lowest sale amounts for each category. The results are then sorted in descending order by the total number of sales.
```

:::note
It is not possible to join or combine two different tables while writing a single query.
:::

----

## 2. Add filters on generated tables 

When using the filters option, you can apply filters to any of the available column names. These column names are automatically displayed and available for selection when you click on the filters option.

1. Click **Filters**. 
2. Select the filters you want to apply. 
    - You can search for the column name. 
    - For each filter, you can add a conditon and the value. 
3. Click **Apply filter**.

![image](https://imgur.com/S3fwsji.png)

### Download filtered data as a CSV file

You can filter data by a single column value or a combination of column values. To download the data generated at any step, simply click on **Actions > Export as CSV** and it will be saved as a CSV file on your local system.

![image](https://imgur.com/mxj8XeX.png)

### Save filtered data as reports 

Once you have applied filters, a button labeled **Save query** will appear. Click this button to save the filtered data as a report, which can be accessed under the **Saved reports** section whenever you open the data explorer. This way, you can retrieve the report without having to repeat the filtering steps again.             

> Learn more about actions available on [Saved reports](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/savedreportsactions).

![image](https://imgur.com/TPu8gGr.png)

> You can also summarize and visualise this data, steps are explained in further sections. 

