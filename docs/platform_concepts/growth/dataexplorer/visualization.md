---
title: Visualizing summarized tables for effective data analysis
sidebar_label : Data visualisation
---

Using charts, graphs, dashboards, and other visualizations is an effective way to make your data more accessible and engaging in real-world discussions. 


| Chart Type      | Description                                                                                                                                                                                                                                          |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Line Chart**  | Suitable for visualizing trends over time. Ideal for displaying changes in a variable, such as stock prices of a company, over a period of time.                                                                                                 |
| [**Bar Chart**](#1)    | Effective in comparing data across different categories. Ideal for comparing the sales of various products in a store.                                                                                                                               |
| **Row Chart**   | Similar to a bar chart, used to compare data across categories, but with horizontal bars instead of vertical ones. Ideal when category labels are long, such as comparing performance of different departments in a company.                   |
| **Funnel Chart**| Useful for showing the progression of data through different stages. Suitable for displaying the conversion rate of website visitors to leads, leads to prospects, and prospects to customers.                                                 |
| **Count Chart** | Great for displaying the frequency of values in a dataset. Ideal for showing how frequently each letter appears in a block of text.                                                                                                               |
| **Pie Chart**   | Excellent choice for representing how a whole is divided into parts. Useful for illustrating the proportion of expenses in a household budget.                                                                                                    |
| [**Pivot Table**](#2) | Essential for summarizing and visualizing large datasets efficiently. Offers flexibility in rearranging data and enabling interactive exploration.                                                                                               |


## Apply visualisation

> Apply summarization before applying any visualisation. 

You can then create visualizations for the **summarized** tables by following the steps below.

1. On the query page, click **Visualisation**.
    <img  src="https://i.imgur.com/d2RVzrQ.png"  width="70%"/>
2. Select the required chart. Hover the mouse on top of the chart for more details.
    <img  src="https://imgur.com/Q1n0jVM.png"  width="50%"/>

3. Click **Done**. Refresh the page after making changes.
    ![](https://i.imgur.com/nvsshH8.png)

**Example**: **Pie Chart** 
![](https://i.imgur.com/Yuj3tfA.png)



----


### Download reports 

You can download this data as a CSV file. By clicking on **Actions** and selecting **Export as CSV**.
- If the table records are fewer than 500, the CSV report will be downloaded locally. 
- If the table records exceed 500, the report will be sent to the user's login email ID.

![image](https://imgur.com/dvEmpnw.png)

------

### Save queries as reports

These visualized queries can be used for future references and they will be available for quick use on the data explorer page(under **Saved reports**), click the **Save query** option available at the top of the page. 

> Learn more about actions available on [Saved reports](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/savedreportsactions).

![](https://hackmd.io/_uploads/HyqYX15r2.png)




-----


## <a name="1"></a>  Bargraph  

 
Stacked bar graphs visually represent data by stacking individual bars to show the total while illustrating the contribution of each category. This format aids in part-to-whole comparisons, trend analysis, and efficient presentation of data with multiple categories. It's effective for emphasizing both total values and the significance of individual components, making it a useful tool for various data visualization scenarios.

When you click **Visualization > Bar graph**, you will get the following options to select the values to be displayed on the X and Y axis of the bar graph.

- **X-axis:** Select fields from **Group by** for the X axis.
- **Y-axis:** Select fields from **Summarise by** for the Y axis.

![image](https://imgur.com/hVVzonm.png)

:::note
- You can have a minimum of 1 and a maximum of 2 *group bys*. *Group bys* can be rearranged, which will change the nesting.
- You can have a minimum and a maximum of 1 *summarise by*.
:::

After selecting the values, you will get the option to **stack** the bar graph:

- **Don't stack:** The bar graphs are not stacked.
    ![image](https://imgur.com/En8tFpT.png)
- **Stack:** Y-axis will have the count value.
    ![image](https://imgur.com/6Xt0Axu.png)
- **Stack 100%:** Y-axis will have the count % value.
    ![image](https://imgur.com/brSJffA.png)


-------

## <a name="2"></a>  Pivot table

Pivoting a table is a common operation in data analysis and reporting, and it serves several practical use cases in real-life business scenarios such as sales analysis, financial reporting, and customer segmentation. 

To pivot table (custom/default), follow these steps:

1. Open a report and apply the desired summarization (Group-by).

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

6. The pivoted table can be saved as a query for future use. By clicking on **Save query**. This saved report is particularly useful for creating dashboards or scheduling reports in the future.

![image](https://imgur.com/We8haJX.png)

:::note

If you want to change the existing summarization(group-by), you must create the pivot table again. 

:::

### Add filters 


Filters can be applied/changed to the pivoted table to refine the data displayed. By clicking on the **Filters** option, users can select specific values for filtering, based on available columns (in the pivot table). For example, in the provided image, filters can be added for **Event** and **Timestamp** columns, although all column names will be visible.

![image](https://imgur.com/Sndgs8L.png)


### Add formula column 

Add custom formula columns to the pivoted table for further analysis. To add formula columns:
1. Click on **Actions > Add formula column**.
2. Provide a **name** for the formula column and define the formula using available columns on the right side.
3. Click **Apply** to add the formula column to the table.


![image](https://imgur.com/iGT8RAP.png)

![image](https://imgur.com/hyPAEtx.png)

:::note
Multiple formula columns can be added to the pivoted table.
:::

:::info

Different visualizations can be applied to the pivoted table to represent data graphically. Click **Visualisation**, select a Visualisation and click **Apply**. 

![image](https://imgur.com/E5cZN55.png)

:::
