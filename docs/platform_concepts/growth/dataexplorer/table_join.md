---
title: Create a custom report (query) with multiple datasource using table join   
sidebar_label : Report with multiple datasource   
---

You can create a join query (report) in **Insights > Data Explorer** by using the **Create query with multiple data source** option. This allows you to combine or merge **two** default tables into a single report using different types of joins.


**Common example**: You can join the Chat Tickets and Email Tickets tables using the common column UID to determine if any users have raised tickets through both chat and email channels.

-----------

## Types of table joins 

You can join two tables using the following joins: 

### Inner join

Only rows that have matching values in both tables are returned. If there is no match between the columns that were specified, that row does not appear in the result set.
**Use case**: Use an inner join to combine rows from two tables that have matching keys and a direct relationship.


**Example**: You can join the Chat Tickets and Email Tickets tables using the common column UID to determine if any users have raised tickets through both chat and email channels.

![image](https://imgur.com/tSmp8y8.png)

### Left outer join (Left join)

A left outer join returns all rows from the left table, and the matched rows from the right table. If there is no match, the result is NULL (no records are displayed) from the right table.
**Use case**: Use a left outer join when you need all the rows from the left table, regardless of whether there is a matching row in the right table.

![image](https://imgur.com/CPMudRl.png)

### Right outer join (Right join)

A right outer join returns all rows from the right table, and the matched rows from the left table. If there is no match, the result is NULL (no records are displayed) from the left table.
**Use case**: Use a right outer join when you need all the rows from the right table, regardless of whether there is a matching row in the left table.

![image](https://imgur.com/IyuHlaW.png)


### Full outer join (Full join)

A full outer join returns all rows when there is a match in either left or right table. If there is no match, the result is NULL (no records are displayed) from the side where there is no match.
**Use case**: Use a full outer join when you need all the rows from both tables, regardless of whether there are matches in the other table.

![image](https://imgur.com/w8GqojC.png)

--------------

## Create report with multiple data sources

Follow the steps below to create a report using two data sources:

1. Open **Insights > Data explorer**. Click **+Create report**. 
    ![image](https://imgur.com/TcbkVnz.png)
              
2. Select **Custom query > Multiple data source** and **Next**. 
    ![image](https://imgur.com/TJVugCV.png)              
3. Select **two** data sources from the available list of tables.
    ![image](https://imgur.com/fUFx1pD.png)

:::info

**Tables available**: 
1. Agent events
2. API events
3. Bot events
4. Message events
5. User events
6. Chat tickets
7. Email tickets
8. Inbox call records
9. Knowledge base articles
10. Knowledge base report
11. Notification reports
12. User feedback
13. Video chats
14. CDR Reports
15. Bot Tables (All the custom tables created in Studio)

:::

> You can only select 2 data sources (tables).


4. Click the join option and select the type of join operation (inner, left, right, or full join).      
    ![image](https://imgur.com/k3pXget.png)        

5. Under **Select join criteria**, select a column present in both the tables for comparison. If there are matching values in the selected columns, the tables will be merged and common rows will be returned.          
    ![image](https://imgur.com/ZrOp89N.png)        

> Column names in Datasource 2 are displayed based on the columns selected in Datasource 1. Both columns must have the same data type, ensuring that the columns shown in Datasource 2 match the data type of those selected in Datasource 1.

6. With column projection, you can choose which columns from each data source to include in the joined table:
    - To deselect a column, click the cancel option next to the column name.
    - To select a column, pick a column name from the dropdown list.

![image](https://imgur.com/r5U28z7.png)

![image](https://imgur.com/60mksGY.png)


7. A merged table is generated (untitled report) and is automatically filtered for the last 30 days. You can perform various actions on the report, such as:
    - Scheduling the report once you **Save query**
    - **Save query** and add this table to custom reports/dashboard
    - Summarizing and visualizing the report
    - Adding **filters**
    - Edit the data by clicking **Edit join query** 

![image](https://imgur.com/J1Wpxfp.png)        

-------------

### Edit join query

1. To make changes to the generated table, click **Edit join query**. 

![image](https://imgur.com/x6kFXSK.png)

2. You can select new Data sources, Join criteria or Projection and click **Update**.  

![image](https://imgur.com/3bUJWNR.png)

3. Click **Save query** to save the updated table with a new name.  

----------

### Save query

To reuse the joined table, save it by clicking **Save Query** and assigning a name to the report. You can find these saved reports under **Insights > Data Explorer > Custom reports**.

![image](https://imgur.com/h6qaMcq.png)

----------

### Add filters

To filter the table data:

1. Click **Filters**.
    ![image](https://imgur.com/3oBwxN6.png)
2. Choose filters for each table separately.
    ![image](https://imgur.com/2E1pGS3.png)
3. Add filter data for the required fields and click **Apply filter**.
   ![image](https://imgur.com/ghQjpw3.png)          


----------


## Limitations of a table join

1. Table binning is not supported while filtering the tables.
2. Exporting the new table as a CSV is not possible.





