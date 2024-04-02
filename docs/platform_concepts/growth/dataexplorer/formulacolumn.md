---
title: Add a new formula column to the table 
sidebar_label: Add formula column  
---

You can create new columns in tables (custom/default), by specifying formulas to derive their values.


:::note
You can only apply Custom formulas after applying **Summarization** > **Group-by** operation. 
:::

## Add a formula column  

To add a formula to a column, follow these simple steps:

1. Click on the **Actions** dropdown menu and select **Add formula column**.
    ![](https://i.imgur.com/9YI7A27.png)
2. Enter a **Name** for the formula in the tab that appears.
    ![](https://hackmd.io/_uploads/BkRYoJqS3.png)
3. Add the required formula using entities like calculating values in a column, calculating values in a specific cell, adding integers or arithmetic operators.
    - To add a column, select **Select column** under **table operations**. The available columns in your summarized table will be listed on the right side. Click **Add** next to the column name.
    ![](https://hackmd.io/_uploads/rkgPsk5rn.png)
    - To add a cell, select **Select cell** after choosing a column. All the available rows for the selected column will be displayed in the dropdown list. Select a value.
    ![](https://hackmd.io/_uploads/ry64oJcr3.png)
    - Complete the formula with numbers and operators **+, -, *, /, ()**.
    - Click **Next**.
    ![](https://hackmd.io/_uploads/SkDlsk9B3.png)

4. You can add multiple formula columns following the same steps measured above. 

### Edit/Delete formula column

The summarized table will now have a new column with the calculated formula values. You can edit or delete this data as needed by clicking on the new column name.

![](https://i.imgur.com/Ru1zaDZ.png)

### Save the report 

Click **Save query** to save this as a new report or add it to the existing one. 

![](https://i.imgur.com/hoPwKin.png)


## Common formulas that can be applied on summarized tables

1. **Ticket status percentage split** (used to Summarise Chat tickets table by their ticket status count)      
**New column**: `Status %`     
**Formula**: `Count / (Count, RTotal) * 100`     
![](https://i.imgur.com/fQmaZzl.png)

2. **Journey retention rate** (Used to summarise flows started count and group by flows - to see funnel of users from one flow to another)     
**New column**: `Retention rate`     
**Formula**: `Count / (Count, R1) * 100`     
![](https://i.imgur.com/fKPKvKh.png)

3. **Average session duration every month** (Used to get count of unique Session IDs and sum of user response time for each message - grouped by month)     
**New column**: `Average session duration`     
**Formula**: `SUM_SESSION_SUM / DISTINCT_SESSIONID`     
![](https://i.imgur.com/FGREMwr.png)



