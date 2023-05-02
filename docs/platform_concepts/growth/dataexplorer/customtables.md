---
title: Create custom queries for custom tables
sidebar_label : Analyse custom tables 
---

#### What are custom tables(datasets)?

The bot builder can create Custom datasets that are tailored to your needs. You can modify these tables according to your preferences using a **custom query**.

## 1. Steps to add a custom query 

Custom queries can be created using the default datasets or custom datasets.
1. Open **Insights** > **Data explorer**. 
2. Click **+Create Report**. 
3. Select the type of **query** and click **Next**. 

<img src="https://i.imgur.com/pHHRhJx.png" width="90%"/>

### Choose query to create a table

You have the option to choose a custom query that includes either bot data or data retrieved from custom tables in flows. By using any of this data, you can obtain the desired insights and analytics from your existing datasets.

To create reports on selected tables, there are two types of queries available:

1. **Custom query**: This query allows you to choose a default or custom table, and provides options to filter, summarize and visualize the data using the provided buttons. With this query, you can perform actions on tables through a simple interface, without the need for any database queries.
    - Filters and logic within Filters can be used to construct queries. You can filter data by specific column values or combinations of column values.
    ![](https://i.imgur.com/Rj2r4Of.png)   

2. **Native query**: If you require more advanced analysis beyond what is available with the buttons and options provided by Insights, or if you prefer to write SQL queries instead, you can choose the native query option. With this option, you can write your own SQL query to perform more complex analysis on your default datasets.
    ![](https://i.imgur.com/gM5kxps.png)
    
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
    ![](https://i.imgur.com/emPZU07.png)

### Download filtered data as a CSV file

You can filter data by a single column value or a combination of column values. To download the data generated at any step, simply click on **Actions > Export as CSV** and it will be saved as a CSV file on your local system.

![](https://i.imgur.com/4wmoCjT.png)

### Save filtered data as reports 

Once you have applied filters, a button labeled **Save query** will appear. Click on this button to save the filtered data as a saved report. This report can then be accessed under the **Saved reports** section every time you open the data explorer, without the need to repeat all the filtering steps again.

![](https://i.imgur.com/PM6HYDu.png)


> You can also summarize and visualize this data, steps are explained in further sections. 
