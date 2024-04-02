---
title: Pivot a table 
sidebar_label: Pivot table  
---

Pivoting a table is a common operation in data analysis and reporting, and it serves several practical use cases in real-life business scenarios such as sales analysis, financial reporting, and customer segmentation. 


## Pivot a table
 

To pivot a table (custom/default), follow these steps:


:::note
Before pivoting a table, ensure you've applied **Summarization** (Group-by).
:::

1. Open a report and apply the desired summarization.

![image](https://imgur.com/PZZmZ8J.png)

2. Click **Visualisation**. 

![image](https://imgur.com/dUE6mIa.png)

3. Select **Pivot table**. 

![image](https://imgur.com/5NzhM1K.png)

4. Choose the field names to convert to **Rows** and **Columns** in the pivoted table. Select the **Values** to display within the cells.
    * Use the dropdown to select existing columns.
    * Click **Add field** to include a new Row or Column.
    * Click the **delete** icon to remove a selected column.
    * Drag and drop Row/Column fields for customization.
    * It's mandatory to add a **Value** field; otherwise, the table won't pivot.

<img src="https://imgur.com/QtFW0wm.png" alt="drawing" width="50%"/>

:::info
**Points to remember**: 
* Adding fields to Rows/Columns/Values is mandatory.
* You can summarize(group-by) multiple fields but can only add up to 10 new fields to the Pivot table.
* The sum of fields in Rows and Columns must be equal to or less than 10.
:::

5. Click **Apply** to save changes. The Pivot table will display.
    - Unless you **Save query**, the pivoted table is not saved. 
    - To edit the pivot table, you can click **Visualisation > Pivot table** and make the changes. 

![image](https://imgur.com/cKLuAu6.png)


:::note

If you want to change the existing summarization(group-by), you must create the pivot table again. 

:::

### Add filters 

Filters can be applied/changed to the pivoted table to refine the data displayed. By clicking on the **Filters** option, users can select specific values for filtering, based on available columns (in the pivot table). For example, in the provided image, filters can be added for **Event** and **Timestamp** columns, although all column names will be visible.

![image](https://imgur.com/Sndgs8L.png)



### Apply visualisation

Different visualizations can be applied to the pivoted table to represent data graphically.
1. Click **Visualisation**. 
2. Select a Visualisation and click **Apply**. 

![image](https://imgur.com/E5cZN55.png)



### Download reports 

You can download the data in the pivoted table as a CSV file. By clicking on **Actions** and selecting **Export as CSV**.
- If the table records are fewer than 500, the CSV report will be downloaded locally. 
- If the table records exceed 500, the report will be sent to the user's login email ID.

![image](https://imgur.com/dvEmpnw.png)

### Save query 

The pivoted table can be saved as a query for future use. By clicking on **Save query**. This saved report is particularly useful for creating dashboards or scheduling reports in the future.

![image](https://imgur.com/We8haJX.png)

### Add formula column 

Users can add custom formula columns to the pivoted table for further analysis. To add formula columns:
1. Click on **Actions > Add formula column**.
2. Provide a **name** for the formula column.
3. Define the formula using available columns on the right side.
4. Click **Apply** to add the formula column to the table.


![image](https://imgur.com/iGT8RAP.png)

![image](https://imgur.com/hyPAEtx.png)

:::note
Multiple formula columns can be added to the pivoted table.
:::

