---
title: Create a custom report (query) with multiple datasource using table join   
sidebar_label : Report with multiple datasource   
---

:::note
The table joins feature is currently feature-gated. Please contact the support team to request access.
:::

Combine or merge **two** default tables into a single report using different types of joins.

You can create a join query (report) in **Insights > Data Explorer** by using the **Create query with multiple datasource** option. 

**Common example**: You can join the Chat Tickets and Email Tickets tables using the common column UID to determine if any users have raised tickets through both chat and email channels.

-----------

## <a name="joins"></a>  Types of table joins 

You can join two tables using the following joins: 

### Inner join

Use an inner join to combine rows from two tables that have matching keys and a direct relationship.

Only rows that have matching values in both tables are returned. If there is no match between the columns that were specified, that row does not appear in the result set.


**Example**: You can join the Chat Tickets and Email Tickets tables using the common column UID to determine if any users have raised tickets through both chat and email channels.

![image](https://imgur.com/tSmp8y8.png)

### Left outer join (Left join)

Use a left outer join when you need all the rows from the left table, regardless of whether there is a matching row in the right table.

A left outer join returns all rows from the left table, and the matched rows from the right table. If there is no match, the result is NULL (no records are displayed) from the right table.

![image](https://imgur.com/CPMudRl.png)

### Right outer join (Right join)

Use a right outer join when you need all the rows from the right table, regardless of whether there is a matching row in the left table.

A right outer join returns all rows from the right table, and the matched rows from the left table. If there is no match, the result is NULL (no records are displayed) from the left table.

![image](https://imgur.com/IyuHlaW.png)


### Full outer join (Full join)

Use a full outer join when you need all the rows from both tables, regardless of whether there are matches in the other table.

A full outer join returns all rows when there is a match in either left or right table. If there is no match, the result is NULL (no records are displayed) from the side where there is no match.

![image](https://imgur.com/w8GqojC.png)

--------------

## Create report with multiple datasources

Follow the steps below to create a report using two datasources:

1. Open **Insights > Data explorer**. Click **+ Create report**. 
    ![image](https://imgur.com/3RfOC0d.png)
              
2. Select **Custom query > Multiple datasource** and click **Next**. 
    ![image](https://imgur.com/TJVugCV.png)              
3. Select **two** datasources from the available list of tables.
    ![image](https://imgur.com/fUFx1pD.png)

:::note

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
15. Custom table > Analytics
16. Custom tables (all the custom tables created in Automation)

> Learn more on these table fields [here](https://docs.yellow.ai/docs/cookbooks/insights/eventdescriptions). 


:::

> You can select any two datasources at max for a query.

4. Click the join option and select the type of join operation from inner, left, right, or full join.      
    ![image](https://imgur.com/k3pXget.png)        

> Refer the [above section](#joins)  to understand joins in detail. 


5. Under **Select join criteria**, select a column present in both the tables for combining. 
    ![image](https://imgur.com/ZrOp89N.png)        

> Column names in Datasource 2 are displayed based on the columns selected in Datasource 1. Both columns must have the same data type, ensuring that the columns shown in Datasource 2 match the data type of those selected in Datasource 1 and vice versa.

6. Add an alpha-numeric **Query title** without any special characters (and with spaces) and identical name as the other tables. 

    ![image](https://imgur.com/hVzAeBw.png)

7. Choose the time range for fetching data from both tables. Select the desired range and value from the dropdown menu.        
    <img src="https://imgur.com/dB4cbtB.png" width="60%"/>
    ![image](https://imgur.com/XRjyUss.png)


> When selecting Previous X days, you can choose to include or exclude the current date (today) while fetching the data via the checkbox as shown above.

8. With column projection, you can choose which columns from each datasource to include in the joined table:
    - To deselect a column, click the cancel option next to the column name.
    - To select a column, pick a column name from the dropdown list.

    ![image](https://imgur.com/r5U28z7.png)

    ![image](https://imgur.com/60mksGY.png)

9. Click **Create** to generate a report. 

----

### Report progress 


On the Data explorer page, you can see the number of reports that are being generated, that is the queies that are in progress. 
    ![image](https://hackmd.io/_uploads/Bk0mrRyBJg.png)


------

### Alerts 

You don’t need to stay on the page after clicking **Create**; you are free to navigate to other pages. The process runs asynchronously, and you will receive a notification once it’s complete.

- Admins and Developers will have access to create and use the reports. 
- Database Viewer can view the reports.

All users with AI agent access can view the notification on the **Notifications tab** 
    ![image](https://imgur.com/yDr0hf4.png)


----------------

### Report generation 

The **Query queue** page displays all reports created by joining tables. 
* While a report is being generated, it appears under **Running queries** along with its status, and you have the option to cancel the generation. 
* **Past queries** can also be viewed. 
* The time taken to generate the report and its creation time are displayed.

![image](https://imgur.com/8iSwvI3.png)

> If query fails, retry with lower time range (example: Time-range as 2 months instead of 2 years). 

A merged table is generated with data from the selected time range, you can add **Filters** to the report and **Summarise/Visualise** it. 

> You can Export the generated table as a CSV. 

-----

### Add filters

To filter the table data:

1. Click **Filters**.
2. Choose filters for each table separately.
    ![image](https://imgur.com/2E1pGS3.png)
3. Add filter data for the required fields and click **Apply filter**.
   ![image](https://imgur.com/ghQjpw3.png)          


----------


## Limitations of a table join

1. Only two tables can be joined.  
2. Table binning is not supported while filtering the tables.
3. You cannot add custom formulas to a report created by joining 2 tables. 




