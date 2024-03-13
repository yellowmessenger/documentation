---
title: Visualizing summarized tables for effective data analysis
sidebar_label : Data visualisation
---

Using charts, graphs, dashboards, and other visualizations is an effective way to make your data more accessible and engaging in real-world discussions. 

## 1. Apply visualisation on a summarized table

Before creating visualizations, you must **summarize** the data in tables. After that, you can then create visualizations using the summarized tables by following the steps below.

1. On the query page, click **Visualisation**.
    <img  src="https://i.imgur.com/d2RVzrQ.png"  width="70%"/>
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


#### Choosing the right chart for visualisation 

- **Line Chart**: A line chart is suitable for visualizing trends over time. It could be used to display changes in a variable, such as stock prices of a company, over a period of time.
- **Bar Chart**: A bar chart is effective in comparing data across different categories. It could be used to compare the sales of various products in a store.
- **Row Chart**: Similar to a bar chart, a row chart can be used to compare data across categories, but with horizontal bars instead of vertical ones. It is ideal when category labels are long, such as comparing performance of different departments in a company.
- **Funnel Chart**: A funnel chart is useful for showing the progression of data through different stages. It could be used to display the conversion rate of website visitors to leads, leads to prospects, and prospects to customers.
- **Count Chart**: A count chart is great for displaying the frequency of values in a dataset. It could be used to show how frequently each letter appears in a block of text.
- **Pie Chart**: A pie chart is an excellent choice for representing how a whole is divided into parts. It could be used to illustrate the proportion of expenses in a household budget.

-----


### Bargraph stacking 

> This feature is coming soon. 
 
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


----

## 2. Download summarized data 

- Click **Actions** and download this data (.CSV file) to your local system. 
    <img  src="https://i.imgur.com/U68nIwL.png"  width="80%"/>

------
## 3. Save queries as reports

These visualized queries can be used for future references and they will be available for quick use on the data explorer page(under **Saved reports**), click the **Save query** option available at the top of the page. 

> Learn more about actions available on [Saved reports](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/savedreportsactions).

![](https://hackmd.io/_uploads/HyqYX15r2.png)
